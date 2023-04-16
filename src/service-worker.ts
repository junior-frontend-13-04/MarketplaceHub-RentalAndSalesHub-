// service-worker.ts
export {};

const CACHE_NAME = 'my-cache-v1';
const urlsToCache = ['/', '/index.html', '/main.css', '/main.js'];
//@ts-ignore
self.addEventListener('install', function(event:ExtendableEvent) {

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});
//@ts-ignore
self.addEventListener('fetch', function(event:FetchEvent) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                if (response) {
                    return response;
                }

                const fetchRequest = event.request.clone();

                return fetch(fetchRequest)
                    .then(function(response) {
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        const responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                            .then(function(cache) {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    });
            })
    );
});
