if (!self.define) {
    let e, s = {};
    const a = (a, n) => (a = new URL(a + ".js", n).href, s[a] || new Promise((s => {
        if ("document" in self) {
            const e = document.createElement("script");
            e.src = a, e.onload = s, document.head.appendChild(e)
        } else e = a, importScripts(a), s()
    })).then((() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e
    })));
    self.define = (n, c) => {
        const t = e || ("document" in self ? document.currentScript.src : "") || location.href;
        if (s[t]) return;
        let i = {};
        const r = e => a(e, t),
            d = {
                module: {
                    uri: t
                },
                exports: i,
                require: r
            };
        s[t] = Promise.all(n.map((e => d[e] || r(e)))).then((e => (c(...e), i)))
    }
}
define(["./workbox-946f13af"], (function(e) {
    "use strict";
    importScripts(), self.skipWaiting(), e.clientsClaim(), e.precacheAndRoute([{
        url: "/_next/static/chunks/1.a1120dcf5ee8533e.js",
        revision: "a1120dcf5ee8533e"
    }, {
        url: "/_next/static/chunks/159-915eee668274c6e1.js",
        revision: "915eee668274c6e1"
    }, {
        url: "/_next/static/chunks/171-7a5d75eb72af1572.js",
        revision: "7a5d75eb72af1572"
    }, {
        url: "/_next/static/chunks/173.b7ac3126e5d6a803.js",
        revision: "b7ac3126e5d6a803"
    }, {
        url: "/_next/static/chunks/225.06e0f52ee185b174.js",
        revision: "06e0f52ee185b174"
    }, {
        url: "/_next/static/chunks/260.d7959232f3bade03.js",
        revision: "d7959232f3bade03"
    }, {
        url: "/_next/static/chunks/311-3707e9d042369917.js",
        revision: "3707e9d042369917"
    }, {
        url: "/_next/static/chunks/320.d070b9a19a3e7472.js",
        revision: "d070b9a19a3e7472"
    }, {
        url: "/_next/static/chunks/323.4bc3a899e081e547.js",
        revision: "4bc3a899e081e547"
    }, {
        url: "/_next/static/chunks/332.8f3b2c5227ca9cbf.js",
        revision: "8f3b2c5227ca9cbf"
    }, {
        url: "/_next/static/chunks/333.d878b2e192ae9cc9.js",
        revision: "d878b2e192ae9cc9"
    }, {
        url: "/_next/static/chunks/378.7845a7d3295cde4c.js",
        revision: "7845a7d3295cde4c"
    }, {
        url: "/_next/static/chunks/400.ffd898d348a9261e.js",
        revision: "ffd898d348a9261e"
    }, {
        url: "/_next/static/chunks/499-7a5180451bc24970.js",
        revision: "7a5180451bc24970"
    }, {
        url: "/_next/static/chunks/502.a76e0fd9fc064d2d.js",
        revision: "a76e0fd9fc064d2d"
    }, {
        url: "/_next/static/chunks/545f34e4-f08b23a17323da0c.js",
        revision: "f08b23a17323da0c"
    }, {
        url: "/_next/static/chunks/561.130a58bc61d8aff8.js",
        revision: "130a58bc61d8aff8"
    }, {
        url: "/_next/static/chunks/584.01a498ef8f3d2efa.js",
        revision: "01a498ef8f3d2efa"
    }, {
        url: "/_next/static/chunks/592.1a3db86bfe0e6a68.js",
        revision: "1a3db86bfe0e6a68"
    }, {
        url: "/_next/static/chunks/648.6b9ac9edd89fa58e.js",
        revision: "6b9ac9edd89fa58e"
    }, {
        url: "/_next/static/chunks/660.985d2e5aeda8dfed.js",
        revision: "985d2e5aeda8dfed"
    }, {
        url: "/_next/static/chunks/664-0cf25aef27f761cf.js",
        revision: "0cf25aef27f761cf"
    }, {
        url: "/_next/static/chunks/667.b9ec700e02657967.js",
        revision: "b9ec700e02657967"
    }, {
        url: "/_next/static/chunks/749.a60b4dab6ce2642d.js",
        revision: "a60b4dab6ce2642d"
    }, {
        url: "/_next/static/chunks/794-2bfdf549ba07e7af.js",
        revision: "2bfdf549ba07e7af"
    }, {
        url: "/_next/static/chunks/852.e2b92d75b8ef747e.js",
        revision: "e2b92d75b8ef747e"
    }, {
        url: "/_next/static/chunks/853.726d56f54e4fa616.js",
        revision: "726d56f54e4fa616"
    }, {
        url: "/_next/static/chunks/883.19ad8321e523c240.js",
        revision: "19ad8321e523c240"
    }, {
        url: "/_next/static/chunks/918-66b9e6d5ca890c23.js",
        revision: "66b9e6d5ca890c23"
    }, {
        url: "/_next/static/chunks/95.a84e016166c0bfe9.js",
        revision: "a84e016166c0bfe9"
    }, {
        url: "/_next/static/chunks/955.c1f4d51793d24ac3.js",
        revision: "c1f4d51793d24ac3"
    }, {
        url: "/_next/static/chunks/962-70da1f73a8f060d9.js",
        revision: "70da1f73a8f060d9"
    }, {
        url: "/_next/static/chunks/99.18ef3aec930a2922.js",
        revision: "18ef3aec930a2922"
    }, {
        url: "/_next/static/chunks/990.129af7d4125bf2f2.js",
        revision: "129af7d4125bf2f2"
    }, {
        url: "/_next/static/chunks/b98bc7c3-db581ebf36115fc0.js",
        revision: "db581ebf36115fc0"
    }, {
        url: "/_next/static/chunks/framework-50116e63224baba2.js",
        revision: "50116e63224baba2"
    }, {
        url: "/_next/static/chunks/main-1b33e98b78b15c94.js",
        revision: "1b33e98b78b15c94"
    }, {
        url: "/_next/static/chunks/pages/404-1f3872a2345ce65b.js",
        revision: "1f3872a2345ce65b"
    }, {
        url: "/_next/static/chunks/pages/_app-2617d7504d845de2.js",
        revision: "2617d7504d845de2"
    }, {
        url: "/_next/static/chunks/pages/_error-409f831d3504c8f5.js",
        revision: "409f831d3504c8f5"
    }, {
        url: "/_next/static/chunks/pages/create-fb64e2b6ed4f0d8a.js",
        revision: "fb64e2b6ed4f0d8a"
    }, {
        url: "/_next/static/chunks/pages/index-3884c8a229d593b8.js",
        revision: "3884c8a229d593b8"
    }, {
        url: "/_next/static/chunks/pages/locks-c98ee85180edb01d.js",
        revision: "c98ee85180edb01d"
    }, {
        url: "/_next/static/chunks/pages/pair/%5Baddress%5D-911b5149f2d74661.js",
        revision: "911b5149f2d74661"
    }, {
        url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
        revision: "837c0df77fd5009c9e46d446188ecfd0"
    }, {
        url: "/_next/static/chunks/webpack-a335a79554d7f142.js",
        revision: "a335a79554d7f142"
    }, {
        url: "/_next/static/css/9d8d631e25609654.css",
        revision: "9d8d631e25609654"
    }, {
        url: "/_next/static/gpbNdd90NeABlGsjgYNa5/_buildManifest.js",
        revision: "7d9a7bd1b1deebc8d26544cf96af1af6"
    }, {
        url: "/_next/static/gpbNdd90NeABlGsjgYNa5/_ssgManifest.js",
        revision: "b6652df95db52feb4daf4eca35380933"
    }, {
        url: "/android-chrome-192x192.png",
        revision: "024b0f80f5298ad3ae0c0cc0aacb8e4e"
    }, {
        url: "/android-chrome-512x512.png",
        revision: "de007dfe263a8c04d586b0f84e3f3032"
    }, {
        url: "/apple-touch-icon.png",
        revision: "aea78fa99debacf2055512bf6c5118e5"
    }, {
        url: "/favicon-16x16.png",
        revision: "78739534fa86f71757eb0e70fbee973a"
    }, {
        url: "/favicon-32x32.png",
        revision: "06bc88e30bd0a53de0224f91f47fa34e"
    }, {
        url: "/favicon.ico",
        revision: "0da3598baa1602e31bee4166d1b0c323"
    }, {
        url: "/logo.png",
        revision: "de007dfe263a8c04d586b0f84e3f3032"
    }, {
        url: "/site.webmanifest",
        revision: "cc77441bb87b518fdaf1fd394cd628e7"
    }], {
        ignoreURLParametersMatching: []
    }), e.cleanupOutdatedCaches(), e.registerRoute("/", new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [{
            cacheWillUpdate: async ({
                request: e,
                response: s,
                event: a,
                state: n
            }) => s && "opaqueredirect" === s.type ? new Response(s.body, {
                status: 200,
                statusText: "OK",
                headers: s.headers
            }) : s
        }]
    }), "GET"), e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i, new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 31536e3
        })]
    }), "GET"), e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i, new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800
        })]
    }), "GET"), e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800
        })]
    }), "GET"), e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute(/\/_next\/image\?url=.+$/i, new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute(/\.(?:mp3|wav|ogg)$/i, new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [new e.RangeRequestsPlugin, new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute(/\.(?:mp4)$/i, new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [new e.RangeRequestsPlugin, new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute(/\.(?:js)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute(/\.(?:css|less)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i, new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute(/\.(?:json|xml|csv)$/i, new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute((({
        url: e
    }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/")
    }), new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute((({
        url: e
    }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/")
    }), new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute((({
        url: e
    }) => !(self.origin === e.origin)), new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 3600
        })]
    }), "GET")
}));