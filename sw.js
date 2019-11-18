/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "d5597a05a9e62abff405cc23411d52f6"
  },
  {
    "url": "script.js",
    "revision": "c5870b09228b8330a1d57dbf66e1fce1"
  },
  {
    "url": "static/android-chrome-192x192.png",
    "revision": "47b71fdebd03abb7f4d6cbcae9a867c4"
  },
  {
    "url": "static/android-chrome-512x512.png",
    "revision": "762896103aa5428398dfe18981084bee"
  },
  {
    "url": "static/apple-touch-icon.png",
    "revision": "71f641527d31b49aa415e14bbef1d780"
  },
  {
    "url": "static/benjamin-balazs-PgLOQTUsy1c-unsplash.jpg",
    "revision": "20171e7f8b270cbb691bf194427c6e25"
  },
  {
    "url": "static/favicon-16x16.png",
    "revision": "7df009809ca17b7d8ed3001738e4ed47"
  },
  {
    "url": "static/favicon-32x32.png",
    "revision": "fbf44da886a2c18ed666547777664c1a"
  },
  {
    "url": "static/favicon.ico",
    "revision": "2fa853f1f925ef206c7e96b43af51fb1"
  },
  {
    "url": "static/site.webmanifest",
    "revision": "78c37d9e496a247d01552e07e53411db"
  },
  {
    "url": "style.css",
    "revision": "1bb9283e017ad8975e4acb123a693193"
  },
  {
    "url": "workbox-config.js",
    "revision": "93c5f0bd1ee525111e02a2fd27a9e06a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
