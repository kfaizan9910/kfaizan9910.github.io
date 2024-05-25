'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "a253dbc81ffa2757870e6e59b274ec67",
"index.html": "8c24562a96878699e3f0385e71af4d8f",
"/": "8c24562a96878699e3f0385e71af4d8f",
"main.dart.js": "5f39131d4482b28e4f7a3149ababf0f3",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "fe4fd335461b6c7f21f069733b191f16",
".git/config": "a7a99474a1baf1b7724eccc37656638a",
".git/objects/0d/4967f629ea6f42b9dcbc87b07349afdee44c12": "b5139570949315f2db58b1ea4652db61",
".git/objects/3e/3cecf985309c40a23825bb2f5acec2d91b83a8": "126fee2ee4be6618f6f3fd93dfb78893",
".git/objects/6a/721340aac4cf45e208693c767964a7e5e2f1d3": "421ce1ca788f92f94422383ddfaa5cfc",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/56/42f79aa2bec05002e662d5d5db070b9be89081": "784766cb7dc5d93e5b75c4bc061fb545",
".git/objects/58/e3b08b3a2405256a42791e533d2d4d5f190afc": "96cdc436388ade3bb6cd4db8af81829b",
".git/objects/0e/a46e81ce15ccb1767a51aaf061963ad528efeb": "4e571e4a27c5bd49c4ce8009bdcac524",
".git/objects/33/83f0725a75eb8ecf20890a327a420bc9953cad": "756fd6be46d20356cb4f111bb63a44ce",
".git/objects/a4/83854ae6bd1467dd0b0a2302957292cf1d3468": "e89b5eb310194c75696b80e6de987b5a",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d0/72c67bb493e0f1c79dbd112a1c8406cf898a53": "b23ea9a4a95262b35dc3924befbcdfe6",
".git/objects/df/7494a15b358ff2fbf2d51c0d2ff45254fffd99": "0fa933ddcfa09ca634b8fbdcfd09c039",
".git/objects/d1/4394adc0886ea025744c801d44a43b98c87ad0": "136efbc15c48de0c4d73d0682af0d5eb",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/32670cdcde9ab264ca70c84630c9d2a993b294": "29b1b296494115a734bf03cff1f39a13",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/0b204ac8732060dede6ed0e00f20a5c9412b43": "11d2eb68d5c349a872d88c9d61cece98",
".git/objects/f5/96fec91c3356edd9630f3743a488502ec024d6": "e39c401c4a3c53ceb639b86183818f3f",
".git/objects/e3/57c68b1ff89a7959051f95d7d262d129e4cb30": "0b7e307f0f42c3ebd8f6245ffa6a5127",
".git/objects/ca/8ee82f33c6c35b96da0083162550b37dc4ef40": "6ef216fc83037b169edfaa95eb03a75e",
".git/objects/ed/8f6c575e78142ed42feb7056821174b2b522bb": "784f95614d998c4ae7203faeeea85479",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/ec/0d30503d7cbf1d7dcc26b12318a1fa6bb0bedc": "888f65b2ae7646044c9a76d641ab979e",
".git/objects/11/96e7ac09b522879c3b0f053cbd4e95920f2e70": "b0d135b5aa9e3b38d1c30a927652e18c",
".git/objects/7c/74f1968c2cda88101dd82c8bcf3df591291de2": "3d93b0a9ecea383056593de2d729fcc8",
".git/objects/1a/61f61b70dd1571fb08685611b3154093906df1": "1160a1400cb389c71085c560b8a046f4",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/7b90aa92e136f4e02518045128113cf1bcb212": "95b841efd2ff81cc75ef098248c95990",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/21/c6107a53eb032bd18e3c9008e9a913cdcdda2b": "24eac7100ab568ac2d4382c9a2cb56c8",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/d3b80fc3b23a3f2b8bc1a70bbf9ac61115f996": "619b0934fa122e7b5cd6dcb18e90b2ff",
".git/objects/9f/d136c0e05b964b6f64725f3b7c33dca20751d4": "299e1bbb6fb1dbf052a391717625c518",
".git/objects/6b/422f09052b565e7a602536dc0c0cadf321c521": "37b8b21572c78ad7536798eb3efb0398",
".git/objects/6e/4ff8a0ce12b8f318a33e44a0f97f5b31729105": "7f571cbc0059ffbea3ac8fa5cb116a05",
".git/objects/6e/e0da345f19d386e528ef12f03f94bf9d89f864": "05ace8af7cd8f1db560d0959bbdb4066",
".git/objects/6e/d48e430363c5b1f7de956e8835896c18fbf92b": "68f55980814f746d176b212a226bd60e",
".git/objects/36/bfd15e3d78938f1db68c37d450aebcab4b9685": "c2c80798d566f787d0fc527c8bc16643",
".git/objects/5c/b9ad0009ddae473a480d1610118d56f923222c": "7b0cec02b61aa8e0cf783839d8f6306d",
".git/objects/53/ee593e1207eaed72ed3e0b28a6816aa585861b": "c1ea4fd0502e6c1429bbfe52658230b3",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/6d/ba195132455ca963a6306aee5dba559f059864": "7399854cc6cfcac49a1be227ab7e7f93",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/06/219cf2be1970098f273d0e0e5c6b71b85b884f": "12f59798dbb7f32eefc719c8cbb8c402",
".git/objects/99/a16133e5d652a5f69316b7c8955786a645e4f3": "b520792d459abe1deaf3facfb5c81a9d",
".git/objects/55/f29ea6bd7590a43ba062bd7e7bf328b3b29731": "dc72da8b6f204563d8591cf9284a7c89",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/d446306717a3e56c1afb6ac45566cf2cebf99b": "54c28fb22251b6472fd15d1ffd7d9016",
".git/objects/b1/9c977f4f72b9641c09b97a6f9d5722fb3156f3": "f768e81daf8cbec966792470c5aa7db8",
".git/objects/dc/eea42e7dd0711ec2509acfe74f103f87a709f8": "52ccff191cd13c6293776463083a6b33",
".git/objects/dc/b6dbc5973604945296feabb620e5ef72561b7e": "6c985e866d899a8a82995364dde428ba",
".git/objects/dc/2b757b7f09b56ff75cd2051fd7f6be9ed45f96": "ea78a0db854ae6ca6a1eeca602bead0f",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/aa/421f7417bd1b02ecccbd4d3eebb02e9ae64fec": "83c50d33bc4576f083c54d263a87e487",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/a6/7b6e5b282cbd4b9c318bd91e5a0823c18562c3": "6fb8e19a1b0b58d66f5778c1bd7d5179",
".git/objects/a6/d1b87f3ab7b8a34f693c9a0040d5521833643d": "b993e7fa72bab9cdd0efa0cc306c71cf",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/6f814ed1fa04c3f0c5bd05678173117e4d8714": "f6abfeec066fa2b2b0c0b93ac1d5f785",
".git/objects/cd/ac7a110d21894302aa19f26e19fb8f9837f179": "b7cbe83329bd71462dd5432d94cd95ed",
".git/objects/cc/6e2a17c58475672cf7e95820df121697321377": "f14b4a660f513e3cd4dcd34105a98526",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f0/ce19a80f0259d3533ca99e400a7edffd930f83": "421fe8b9c125613568cfe46b0fb2b12b",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/e9/05dc5a6423dbd9e4e25fde362a963c7426ad47": "b2933144eb55edb5a4354040effeabf0",
".git/objects/e9/f7d871944d45f5d4b26df1ff3a949317cef83b": "224c717514f66a8a5a428835c75b9bd3",
".git/objects/ce/a1241cde5c28c5e3230bcf8c6f86d920808d97": "02eba991568a34408910a5d8118b7f0a",
".git/objects/e0/482de0fc131096b691892bf55d930b09d7566d": "e9c0bb83533a35801f5181444e2f2cb0",
".git/objects/46/58433190fab5e23dddb582d11cc3d77334a9bc": "e909806a1688a8781713b22d3f88b684",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/4a/35953f31d46cf74af49593f5e3319ceb9b106c": "b29e39504a96193542f1df4d557c53e9",
".git/objects/24/77917337f4a5da7383a330cfa8d7eb2cceabb9": "38a38e00a172c45350694e3d50792787",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/1c/c92bde33b05e1ac80a910bd59b18012524d14d": "f6cfb686e6510834ac541644c0f7ba6f",
".git/objects/2e/76a1868b10fd79d2f56a8fbd84b88a68ef07d4": "efab23744d4c8a62b1f63d40dd171937",
".git/objects/14/46bb2bbcd8485395c447a4fb28845942338c65": "89056289a4003ba39548f83ecffbc20e",
".git/objects/22/8127d1c24716017f9f0d0668ecbc0a3602b936": "80c9872e9c3e899c6d0ba7eb2688fadb",
".git/objects/22/2198e5b658e52b1e8392fa85f81b5b0ad89699": "e183403d82efb1b3e5005d5a49e3526b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d2719edace7b810a1d4cb6314117afdf",
".git/logs/refs/heads/main": "25adaeb06366c4b6d39e7dca9282e81d",
".git/logs/refs/remotes/origin/main": "efc97b66ec402e8d3bdb3d982692ff7e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "d65a0e3e3f61befc6d72a2fa10c872dc",
".git/refs/remotes/origin/main": "d65a0e3e3f61befc6d72a2fa10c872dc",
".git/index": "dd79049f8832df7df50867e046ee547f",
".git/COMMIT_EDITMSG": "1989d4b436bc9e72eef4e502371a3cf6",
".git/FETCH_HEAD": "8f6d1b03a94adad6a1bcf1ef9ddcad7a",
"assets/AssetManifest.json": "03bdff3aef00f7a9ee2094f9cfc41bcb",
"assets/NOTICES": "943d0896d2578ae4f40c59323552d431",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "20e0df23e33b971896e78af998cbe28b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/flutter_rating_stars/assets/star_off.png": "510ce4aac7c14568132bdda920c8a76e",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "b6804726cd2c451eb5c1e456c883b7bb",
"assets/fonts/MaterialIcons-Regular.otf": "eec3f478674f0b3e1c2f7ef5acb52c16",
"assets/assets/light-1.png": "6c8ba31eab30d40b5ce914be52ca484e",
"assets/assets/light-2.png": "82bff49a319cf52b57967f67ead32154",
"assets/assets/background.png": "97bcdff34666d1b3e9ccbac7b1a58d95",
"assets/assets/logo.png": "239b1af0a102dbf87c03f76469bea22b",
"assets/assets/bg1.png": "f1574c36362e8d778291586acc78728a",
"assets/assets/wave.json": "c58c23b7906e0330c24b80f2b7dbc1aa",
"assets/assets/second.png": "bd3bdf673b94053dd68be84c342cdae4",
"assets/assets/clock.png": "c0091febbdfb94bacb488b00f4521d5a",
"assets/assets/third.png": "9580750bac060db934386b0191d37f8d",
"assets/assets/coin.json": "d0daeba9ccf6c48e2ce4efcb99484ff7",
"assets/assets/first.png": "431454eb8583e6a264cdefe9882da7b8",
"assets/assets/bg.png": "b79b5fb90e197347aa50d4e845a5db7a",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
