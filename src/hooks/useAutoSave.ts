import { useEffect, useRef, useState, useCallback } from 'react';

interface AutoSaveOptions {
  delay?: number;
  onSave: () => Promise<void>;
  enabled?: boolean;
}

export function useAutoSave({ delay = 5000, onSave, enabled = true }: AutoSaveOptions) {
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastSaveRef = useRef<number>(0);

  const triggerSave = useCallback(async () => {
    if (!enabled) return;
    
    setSaveStatus('saving');
    try {
      await onSave();
      setSaveStatus('saved');
      setHasUnsavedChanges(false);
      lastSaveRef.current = Date.now();
      
      // Reset to idle after 2 seconds
      setTimeout(() => setSaveStatus('idle'), 2000);
    } catch (error) {
      setSaveStatus('error');
      console.error('Auto-save failed:', error);
    }
  }, [onSave, enabled]);

  const markDirty = useCallback(() => {
    if (!enabled) return;
    
    setHasUnsavedChanges(true);
    setSaveStatus('idle');
    
    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Set new timeout
    timeoutRef.current = setTimeout(() => {
      triggerSave();
    }, delay);
  }, [delay, triggerSave, enabled]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Warn on page leave if unsaved
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasUnsavedChanges) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [hasUnsavedChanges]);

  return {
    saveStatus,
    hasUnsavedChanges,
    markDirty,
    triggerSave,
  };
}
