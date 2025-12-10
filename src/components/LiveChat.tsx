import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
  quickReplies?: string[];
}

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const [chatStep, setChatStep] = useState<'initial' | 'quote' | 'contact'>('initial');
  const [leadData, setLeadData] = useState({ name: '', contact: '', serviceType: '' });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load chat from localStorage
  useEffect(() => {
    const savedMessages = localStorage.getItem('truecan_chat_messages');
    const savedGreeted = localStorage.getItem('truecan_chat_greeted');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages).map((msg: any) => ({
        ...msg,
        timestamp: new Date(msg.timestamp)
      })));
    }
    if (savedGreeted) {
      setHasGreeted(true);
    }
  }, []);

  // Save chat to localStorage
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('truecan_chat_messages', JSON.stringify(messages));
    }
  }, [messages]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Initial greeting after delay
  useEffect(() => {
    if (isOpen && !hasGreeted && messages.length === 0) {
      const timer = setTimeout(() => {
        addBotMessage(
          "Hi! 👋 Need help with an electrical issue? I can help you:",
          ['Get a quote', 'Book an assessment', 'Talk to a technician']
        );
        setHasGreeted(true);
        localStorage.setItem('truecan_chat_greeted', 'true');
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, hasGreeted, messages.length]);

  // Close chat when clicking outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const chatWindow = document.querySelector('[data-chat-window]');
      const chatBubble = document.querySelector('[data-chat-bubble]');
      
      if (
        chatWindow &&
        !chatWindow.contains(event.target as Node) &&
        chatBubble &&
        !chatBubble.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    // Small delay to prevent immediate closing when opening
    const timer = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close chat when pressing Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen]);

  const addBotMessage = (text: string, quickReplies?: string[]) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        text,
        sender: 'bot',
        timestamp: new Date(),
        quickReplies
      }]);
      setIsTyping(false);
    }, 800);
  };

  const addUserMessage = (text: string) => {
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    }]);
  };

  const handleQuickReply = (reply: string) => {
    addUserMessage(reply);

    switch (reply) {
      case 'Get a quote':
        setChatStep('quote');
        addBotMessage(
          "Great! I'll help you get a quote. What type of service do you need?",
          ['Panel upgrade', 'EV charger', 'Lighting', 'Emergency repair', 'Other']
        );
        break;

      case 'Book an assessment':
        window.location.href = '/contact';
        addBotMessage("Redirecting you to our booking page...");
        break;

      case 'Talk to a technician':
        addBotMessage(
          "Our team is available Mon-Fri 7am-7pm, Sat 8am-4pm.\n\n📞 Call: (250) 883-0499\n\nOr leave your number and we'll call you back within 30 minutes:",
          ['Leave my number']
        );
        break;

      case 'Leave my number':
        setChatStep('contact');
        addBotMessage("What's the best number to reach you?");
        break;

      default:
        if (chatStep === 'quote' && ['Panel upgrade', 'EV charger', 'Lighting', 'Emergency repair', 'Other'].includes(reply)) {
          setLeadData(prev => ({ ...prev, serviceType: reply }));
          addBotMessage("Perfect! What's your name?");
        }
    }
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    addUserMessage(inputValue);

    if (chatStep === 'quote') {
      if (!leadData.name) {
        setLeadData(prev => ({ ...prev, name: inputValue }));
        addBotMessage("Thanks! And your email address?");
      } else if (!leadData.contact) {
        setLeadData(prev => ({ ...prev, contact: inputValue }));
        // Here you would send to your CRM/backend
        console.log('Quote lead captured:', { ...leadData, contact: inputValue });
        toast({
          title: "Quote Request Received!",
          description: "We'll email you within 2 hours with pricing details.",
        });
        addBotMessage(
          "Perfect! We'll send your quote to that email within 2 hours. Anything else I can help with?",
          ['Book an assessment', 'Talk to a technician', 'All set, thanks!']
        );
        setChatStep('initial');
        setLeadData({ name: '', contact: '', serviceType: '' });
      }
    } else if (chatStep === 'contact') {
      // Phone number capture
      console.log('Callback requested:', inputValue);
      toast({
        title: "Callback Scheduled!",
        description: "We'll call you back within 30 minutes.",
      });
      addBotMessage(
        "Got it! We'll call you at that number within 30 minutes. Talk soon! 📞"
      );
      setChatStep('initial');
    } else {
      // Fallback for open-ended questions
      addBotMessage(
        "Great question! To give you the best answer, let me connect you with our team. What's your preferred contact method?",
        ['Email', 'Phone call', 'Book assessment']
      );
    }

    setInputValue('');
  };

  return (
    <>
      {/* Chat Bubble */}
      {!isOpen && (
        <button
          data-chat-bubble
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 w-16 h-16 rounded-full bg-primary shadow-glow flex items-center justify-center hover:scale-110 transition-smooth group animate-[bounce_3s_ease-in-out_infinite]"
          aria-label="Open chat"
        >
          <MessageCircle className="text-primary-foreground w-7 h-7" />
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-success rounded-full border-2 border-background flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div 
          data-chat-window
          className={cn(
            "fixed z-50 bg-surface border-2 border-border rounded-lg shadow-premium flex flex-col",
            "bottom-2 right-2 md:bottom-6 md:right-6",
            "w-[calc(100%-16px)] h-[calc(100%-80px)] md:w-[380px] md:h-[600px]",
            "max-w-[480px] max-h-[calc(100vh-80px)] md:max-h-[600px]"
          )}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold">TrueCan Quick Chat</p>
                <p className="text-xs opacity-90">We're online!</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/30 rounded-lg p-2 transition-smooth hover:scale-110 bg-white/10"
              aria-label="Close chat"
              title="Close chat"
            >
              <X className="w-6 h-6" strokeWidth={2.5} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={cn(
                "flex flex-col",
                message.sender === 'user' ? 'items-end' : 'items-start'
              )}>
                <div className={cn(
                  "max-w-[80%] rounded-lg p-3",
                  message.sender === 'user' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-foreground'
                )}>
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>

                {/* Quick Replies */}
                {message.sender === 'bot' && message.quickReplies && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {message.quickReplies.map((reply) => (
                      <Button
                        key={reply}
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuickReply(reply)}
                        className="text-xs"
                      >
                        {reply}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-start">
                <div className="bg-muted rounded-lg p-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button 
                onClick={handleSendMessage}
                size="icon"
                disabled={!inputValue.trim()}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveChat;
