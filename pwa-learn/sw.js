self.addEventListener('install',event=>{
    console.log(event);
    event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate',event=>{
    console.log(event)
});

self.addEventListener('fetch',event=>{
    console.log(event)
});