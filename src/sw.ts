// sw.ts
export const SERVICE_WORKER_PATH = '/service-worker.js';

if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
        try {
            const registration = await navigator.serviceWorker.register(SERVICE_WORKER_PATH);
            console.log('Service worker registered with scope: ', registration.scope);
        } catch (err) {
            console.log('Service worker registration failed: ', err);
        }
    });
}
