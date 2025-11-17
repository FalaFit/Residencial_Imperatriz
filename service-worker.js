const CACHE_NAME = 'portaria-digital-v3';
const BASE_PATH = '/Residencial_Imperatriz';

const ASSETS_TO_CACHE = [
  `${BASE_PATH}/`,
  `${BASE_PATH}/index.html`,
  `${BASE_PATH}/manifest.json`,
  `${BASE_PATH}/icon-192.png`,
  `${BASE_PATH}/icon-512.png`
];

// Install Service Worker
self.addEventListener('install', (event) => {
  console.log('✅ Service Worker: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('✅ Service Worker: Caching assets');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => {
        console.log('✅ Service Worker: Installed successfully');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('❌ Service Worker: Installation failed', error);
      })
  );
});

// Activate Service Worker
self.addEventListener('activate', (event) => {
  console.log('✅ Service Worker: Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('🗑️ Service Worker: Clearing old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => {
      console.log('✅ Service Worker: Activated successfully');
      return self.clients.claim();
    })
  );
});

// Fetch Strategy: Network First, Cache Fallback
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests and webhook calls
  if (event.request.method !== 'GET' || 
      event.request.url.includes('webhook') ||
      event.request.url.includes('n8n.cloud')) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Only cache successful responses
        if (response.status === 200) {
          const responseClone = response.clone();
          
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        
        return response;
      })
      .catch(() => {
        // If network fails, try cache
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            console.log('📦 Service Worker: Serving from cache:', event.request.url);
            return cachedResponse;
          }
          
          // If no cache, return offline page message
          if (event.request.destination === 'document') {
            return new Response(
              `
              <!DOCTYPE html>
              <html>
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Offline - Portaria Digital</title>
                <style>
                  body {
                    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-height: 100vh;
                    margin: 0;
                    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
                    color: #f1f5f9;
                    text-align: center;
                    padding: 20px;
                  }
                  .offline-container {
                    max-width: 400px;
                  }
                  .offline-icon {
                    font-size: 4rem;
                    margin-bottom: 1rem;
                  }
                  h1 {
                    font-size: 1.5rem;
                    margin-bottom: 0.5rem;
                    background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                  }
                  p {
                    color: #cbd5e1;
                    line-height: 1.6;
                  }
                  button {
                    margin-top: 1.5rem;
                    padding: 0.75rem 1.5rem;
                    background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
                    border: none;
                    border-radius: 0.5rem;
                    color: white;
                    font-weight: 600;
                    cursor: pointer;
                  }
                </style>
              </head>
              <body>
                <div class="offline-container">
                  <div class="offline-icon">📡</div>
                  <h1>Você está Offline</h1>
                  <p>Não foi possível conectar ao servidor. Verifique sua conexão com a internet e tente novamente.</p>
                  <button onclick="window.location.reload()">Tentar Novamente</button>
                </div>
              </body>
              </html>
              `,
              {
                headers: { 'Content-Type': 'text/html' }
              }
            );
          }
        });
      })
  );
});

// Handle messages from main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log('⏭️ Service Worker: Skipping waiting');
    self.skipWaiting();
  }
});

// Log service worker errors
self.addEventListener('error', (event) => {
  console.error('❌ Service Worker Error:', event.error);
});

self.addEventListener('unhandledrejection', (event) => {
  console.error('❌ Service Worker Unhandled Rejection:', event.reason);
});
