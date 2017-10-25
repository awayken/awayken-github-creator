importScripts('workbox-sw.prod.v2.0.3.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "components/bio.js",
    "revision": "4670ae9f791bb153a1440dea7e92e290"
  },
  {
    "url": "components/footer.js",
    "revision": "be9f4ffaf3dc116c815597bc0e6badbf"
  },
  {
    "url": "components/gravatar.js",
    "revision": "23c71672c9e06a50f2caf0cc4e48b7a2"
  },
  {
    "url": "components/header.js",
    "revision": "8da5622079b9759ca5334b35d5840d56"
  },
  {
    "url": "components/panel.js",
    "revision": "32e7154c773f6c4732ad6f7bb4d57a6e"
  },
  {
    "url": "components/serviceworker.js",
    "revision": "66c763213a00b35a4dfc1c5d399113aa"
  },
  {
    "url": "next.config.js",
    "revision": "b7687e970bf12f39692aca8497b6fcaf"
  },
  {
    "url": "pages/index.js",
    "revision": "6a8e7ebeb5958356b24da63a9371d87b"
  },
  {
    "url": "static/styles.css",
    "revision": "95a6eaca8e0ecc6c1e5602b01be527ff"
  },
  {
    "url": "sw.js",
    "revision": "cc8a443e21c9afee68662267ae4ed44a"
  },
  {
    "url": "workbox-sw.prod.v2.0.3.js",
    "revision": "60b4da760c6a02cbbf5efc80c4da7090"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
