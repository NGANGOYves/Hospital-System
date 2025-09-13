'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "73e5e9f8edfa82ccc121610a761b2c46",
"/": "73e5e9f8edfa82ccc121610a761b2c46",
"flutter_bootstrap.js": "85aefcc5be1488c7c66da1c96d5dafb8",
"main.dart.js": "e866b0d6540ee36547185e51eaa99267",
"version.json": "5e52ba278b633d2435e328b81ba73a4e",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"manifest.json": "3ee1adb8f63caea134991732fa28b055",
"assets/AssetManifest.bin": "d064df48f7578034666c6e1284a4c170",
"assets/fonts/MaterialIcons-Regular.otf": "bd3c4484b850e11c3515ba57c9738bf6",
"assets/AssetManifest.bin.json": "5b5cc2c40085ed360073dc25ae8b3db0",
"assets/NOTICES": "2ede5ba84685605abb6579eb9b108437",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/assets/images/ai_diagnosis.png": "999a259f3f64954ac0763385ca18d99b",
"assets/assets/images/nutrition.jpg": "d91b10a23d9289253f337a35cb9eecbe",
"assets/assets/images/heart_surgery.jpg": "0c1895e0b1f6905cc9204a05cd10f42b",
"assets/assets/images/hospital.png": "a8a7ed6dd365a84581574f99a9fdb408",
"assets/assets/images/parto.png": "43b1df74538d1056c887256fce0f4b93",
"assets/assets/images/telemedicine.jpg": "5cd7d545a5299fc232635ed4f40ee841",
"assets/assets/images/doc.png": "3e4611e4d46b450cd744d4e54c3f4854",
"assets/assets/images/malaria.png": "9de50cb3e2344b0114531a62322bf30a",
"assets/assets/images/pic.png": "1b5c56d00f2cd70aa92403dd47c7715c",
"assets/assets/images/p1.png": "0eaa57f61a75f2e3efb6034a475dda26",
"assets/assets/images/out.png": "602f17d71792d3afccb8f963cbc25b5b",
"assets/assets/images/p2.png": "1a0288a7a6451519254b3816b48b7d05",
"assets/assets/images/1.png": "ba826692c300e1f94aba707ae797a7c2",
"assets/assets/images/mater.png": "6a20e1ead6629b09c7b3af0edafe3c2f",
"assets/assets/images/news.png": "d6f639e48f2876aaa3ee75aaae42c8cc",
"assets/assets/images/ped.png": "59645154492c99b872109919bfecf458",
"assets/assets/images/back.png": "7d3a8704d3c8c2c76c63140634e9bfcd",
"assets/assets/icon/suivi.png": "2f824b7b481cfc4f80e42d0302ba064e",
"assets/assets/icon/trans.png": "5423915f91a012d94e54856d571fe482",
"assets/assets/icon/poid.png": "0423aa50a998904e78f5d049b2f90cad",
"assets/assets/icon/localization.png": "870927301c8d9aea72e0c15be41b5a70",
"assets/assets/icon/taille.png": "1bf55d5a169c66bd1987c7f220ac0ad6",
"assets/assets/icon/ther.png": "2bce462f6b37a0acfa28e922599bbdfe",
"assets/assets/icon/icon1.png": "d5842f8619aa22d9900faf6b636b53ea",
"assets/assets/icon/exam.png": "c70bf6cf35dc7fdcbff5ca106cc1e8a4",
"assets/assets/icon/surv.png": "e25ed85225a8ad7acaf71d313b696eaa",
"assets/assets/icon/logo.png": "81158a54a39c90a12d61f0f36fc10ab6",
"assets/assets/icon/em.png": "879e7003f0049718005fa0bcce913118",
"assets/assets/icon/remp.png": "d9dcb6948e17ac5776718cdd93767af9",
"assets/assets/icon/clinic.png": "860a71ed578de402333cda469ab14dda",
"assets/assets/icon/oral.png": "db9ddf3de1bc2d987545abeb990f1361",
"assets/AssetManifest.json": "fddab9d6c6bac9dee211c315ec5ea650",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
