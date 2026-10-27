// =======================================================================
// உன்னால் முடியும் (Vunnal Mudiyum) - Progressive Web App Service Worker
// Enables 100% Offline Study for 10th Standard Students
// Zero-Downtime Architecture - Auto-Update on Deploy Engine
// =======================================================================

const CACHE_NAME = 'vm-offline-v20261027_v18';

// Core essential assets for instant offline app shell and subject question banks
const PRECACHE_ASSETS = [
  './',
  './index.html',
  '/',
  '/index.html',
  'index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './app_logo.png',
  './favicon.png',
  'icon-192.png',
  'icon-512.png',
  'app_logo.png',
  'favicon.png',
  './images/icon-192.png',
  './images/icon-512.png',
  './images/app_logo.png',
  './images/og_banner.jpg',
  './images/qr_code.png',
  './images/math_bb_ex1_1.jpg',
  './images/math_bb_ex1_4.png',
  './images/math_bb_ex1_4_en.png',
  './images/math_bb_ch3_linear_eqn.jpg',
  './math_bb_ch3_linear_eqn.jpg',
  './images/sci_bb_mass_weight.jpg',
  './images/sci_bb_rocket_propulsion.jpg',
  './images/sci_bb_myopia_hypermetropia.jpg',
  './images/sci_bb_hypermetropia.jpg',
  './images/sci_bb_myopia.jpg',
  // All 32 Subject Data Banks (Units 1-4 across all subjects)
  './data_tamil_u1.js',
  './data_tamil_u2.js',
  './data_tamil_u3.js',
  './data_tamil_u4.js',
  './data_english_u1.js',
  './data_english_u2.js',
  './data_english_u3.js',
  './data_english_u4.js',
  './data_maths_tm_u1.js',
  './data_maths_tm_u2.js',
  './data_maths_tm_u3.js',
  './data_maths_tm_u4.js',
  './data_maths_em_u1.js',
  './data_maths_em_u2.js',
  './data_maths_em_u3.js',
  './data_maths_em_u4.js',
  './data_science_u1.js',
  './data_science_u2.js',
  './data_science_u3.js',
  './data_science_u4.js',
  './data_science_em_u1.js',
  './data_science_em_u2.js',
  './data_science_em_u3.js',
  './data_science_em_u4.js',
  './data_social_u1.js',
  './data_social_u2.js',
  './data_social_u3.js',
  './data_social_u4.js',
  './data_social_em_u1.js',
  './data_social_em_u2.js',
  './data_social_em_u3.js',
  './data_social_em_u4.js'
];

// Install Event: Cache essential shell in background and skip waiting immediately
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.allSettled(
        PRECACHE_ASSETS.map((url) => {
          return fetch(url, { cache: 'no-cache' }).then((resp) => {
            if (resp && resp.ok) return cache.put(url, resp);
          }).catch(() => {});
        })
      );
    })
  );
});

// Activate Event: Delete ALL older caches and claim clients immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[SW] Deleting obsolete cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: Bulletproof Navigation & Fresh Asset Handling
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // 0. Redirect old Cloudflare Worker visitors directly to official GitHub Pages
  if (url.hostname.includes('workers.dev') && req.mode === 'navigate') {
    const target = 'https://simplealwaysrwin-lab.github.io/vunnal-mudiyum-learneasily/' + url.search;
    const redirectHtml = '<!DOCTYPE html><html><head><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=' + target + '"><script>location.replace("' + target + '");</script></head><body style="font-family:sans-serif; text-align:center; padding:40px;"><h2>Redirecting to Vunnal Mudiyum...</h2><p><a href="' + target + '">Click here if not redirected automatically</a></p></body></html>';
    event.respondWith(
      new Response(redirectHtml, {
        status: 200,
        headers: { 'Content-Type': 'text/html; charset=utf-8' }
      })
    );
    return;
  }

  // 1. Admin & Manual Pages: ALWAYS load fresh from network
  if (url.pathname.includes('admin_stats') || url.pathname.includes('mock_test_manual')) {
    event.respondWith(
      fetch(req).catch(async () => {
        const target = url.pathname.includes('admin_stats') ? 'admin_stats.html' : 'mock_test_manual.html';
        return (await caches.match(target)) || 
               (await caches.match('./' + target)) || 
               new Response('Page is unavailable offline', { status: 503, headers: { 'Content-Type': 'text/plain' } });
      })
    );
    return;
  }

  // 2. Navigation Requests (Main app launch, index.html)
  // Network-First with instant Offline Fallback - 100% Mobile Safe
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((response) => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(req, copy).catch(() => {});
            }).catch(() => {});
          }
          return response;
        })
        .catch(async () => {
          const cached = await caches.match(req) ||
                         await caches.match('./index.html') ||
                         await caches.match('/index.html') ||
                         await caches.match('index.html') ||
                         await caches.match('./') ||
                         await caches.match('/');
          if (cached) return cached;
          return new Response(
            '<!DOCTYPE html><html lang="ta"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>உன்னால் முடியும்</title><style>body{font-family:sans-serif;text-align:center;padding:40px 20px;background:#0f172a;color:#f8fafc;}button{background:#2563eb;color:#fff;border:none;padding:12px 24px;border-radius:10px;font-size:16px;cursor:pointer;margin-top:20px;}</style></head><body><h2>உன்னால் முடியும் (Vunnal Mudiyum)</h2><p>இணைய இணைப்பு இல்லை (Offline). தயவுசெய்து மீண்டும் திறக்கவும்.</p><button onclick="location.reload()">மீண்டும் திறக்க (Open App)</button></body></html>',
            { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
          );
        })
    );
    return;
  }

  // 3. Subject Data Files (data_*.js)
  // Network-First so updates on Cloudflare are fetched IMMEDIATELY! Offline seamlessly served from cache.
  if (url.origin === self.location.origin && url.pathname.includes('data_')) {
    event.respondWith(
      fetch(req)
        .then((fresh) => {
          if (fresh && fresh.ok) {
            const copy = fresh.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(req, copy).catch(() => {});
            }).catch(() => {});
          }
          return fresh;
        })
        .catch(async () => {
          const cached = await caches.match(req) || await caches.match(req, { ignoreSearch: true });
          if (cached) return cached;
          return new Response('', { status: 404 });
        })
    );
    return;
  }

  // 4. Same-origin assets (Images, icons, fonts)
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) {
          fetch(req).then((fresh) => {
            if (fresh && fresh.ok) {
              caches.open(CACHE_NAME).then((c) => c.put(req, fresh)).catch(() => {});
            }
          }).catch(() => {});
          return cached;
        }

        return fetch(req).then((netResp) => {
          if (netResp && netResp.ok) {
            const copy = netResp.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(req, copy).catch(() => {});
            }).catch(() => {});
          }
          return netResp;
        }).catch(async () => {
          const cleanName = url.pathname.split('/').pop();
          if (cleanName) {
            const fallback = await caches.match(cleanName, { ignoreSearch: true });
            if (fallback) return fallback;
          }
          return new Response('', { status: 404 });
        });
      })
    );
    return;
  }

  // 5. External Fonts & CDNs
  if (url.hostname.includes('fonts.googleapis.com') || url.hostname.includes('fonts.gstatic.com')) {
    event.respondWith(
      caches.open(CACHE_NAME).then(async (cache) => {
        const cached = await cache.match(req);
        if (cached) return cached;
        try {
          const netResp = await fetch(req);
          if (netResp && netResp.ok) {
            cache.put(req, netResp.clone()).catch(() => {});
          }
          return netResp;
        } catch (e) {
          return cached || new Response('', { status: 408 });
        }
      })
    );
  }
});
