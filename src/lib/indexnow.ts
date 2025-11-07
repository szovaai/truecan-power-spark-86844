/**
 * IndexNow Integration for Instant Search Engine Notification
 * 
 * This utility pings search engines (Bing, Yandex, etc.) when content is published or updated.
 * Reduces crawl delay from days to minutes.
 * 
 * Usage:
 * import { pingIndexNow } from '@/lib/indexnow';
 * 
 * // Single URL
 * await pingIndexNow(['https://truecanpower.com/services/new-page']);
 * 
 * // Multiple URLs
 * await pingIndexNow([
 *   'https://truecanpower.com/',
 *   'https://truecanpower.com/services/ev-charger-installation',
 *   'https://truecanpower.com/services/panel-upgrade'
 * ]);
 */

export async function pingIndexNow(urls: string[]): Promise<boolean> {
  const key = import.meta.env.VITE_INDEXNOW_KEY;
  
  if (!key) {
    console.warn('IndexNow key not configured. Skipping IndexNow ping.');
    return false;
  }

  const host = 'truecanpower.com';
  
  const payload = {
    host,
    key,
    keyLocation: `https://${host}/indexnow-${key}.txt`,
    urlList: urls
  };
  
  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });
    
    if (response.status === 200) {
      console.log(`✓ IndexNow: Successfully notified search engines about ${urls.length} URL(s)`);
      return true;
    } else {
      console.error(`✗ IndexNow: Failed with status ${response.status}`);
      return false;
    }
  } catch (error) {
    console.error('✗ IndexNow: Request failed', error);
    return false;
  }
}

/**
 * Manual IndexNow submission via curl (for immediate use)
 * 
 * Run this command to manually notify search engines:
 * 
 * curl -H "Content-Type: application/json" -d '{
 *   "host": "truecanpower.com",
 *   "key": "a7f3c9e8b2d4f1a6e9c7b5d8f2a4e6c9",
 *   "keyLocation": "https://truecanpower.com/indexnow-a7f3c9e8b2d4f1a6e9c7b5d8f2a4e6c9.txt",
 *   "urlList": [
 *     "https://truecanpower.com/",
 *     "https://truecanpower.com/services/ev-charger-installation",
 *     "https://truecanpower.com/services/panel-upgrade",
 *     "https://truecanpower.com/services/pot-light-installation",
 *     "https://truecanpower.com/services/hot-tub-sauna-wiring",
 *     "https://truecanpower.com/services/renovation-wiring",
 *     "https://truecanpower.com/services/emergency-electrician"
 *   ]
 * }' https://api.indexnow.org/indexnow
 */
