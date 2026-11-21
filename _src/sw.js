/* Achterom service worker: werkt offline. Gemaakt door _tools/build.py, niet hier bewerken maar in _src/sw.js. */
const V='achterom-/*VERSION*/', CORE=['./','./index.html','./manifest.webmanifest','./img/icon-192.png','./img/hero.webp'], ALL=/*FILES*/;
self.addEventListener('install',e=>{ e.waitUntil(caches.open(V).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())); });
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('achterom-')&&k!==V&&k!=='achterom-tiles').map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener('message',e=>{ if(e.data==='all') e.waitUntil(caches.open(V).then(async c=>{ let n=0; for(const f of ALL){ try{ if(!(await c.match(f))) await c.add(f); }catch(_){ } n++; if(n%10===0||n===ALL.length) (await self.clients.matchAll()).forEach(cl=>cl.postMessage({done:n,of:ALL.length})); } })); });
self.addEventListener('fetch',e=>{ const r=e.request; if(r.method!=='GET') return; const u=new URL(r.url);
  if(u.hostname==='tiles.openfreemap.org'){ e.respondWith(caches.open('achterom-tiles').then(async c=>{ const hit=await c.match(r); if(hit) return hit; const res=await fetch(r); if(res.ok) c.put(r,res.clone()); return res; })); return; }
  if(u.origin!==location.origin) return;
  if(r.mode==='navigate'){ e.respondWith(fetch(r).then(res=>{ const cp=res.clone(); caches.open(V).then(c=>c.put('./index.html',cp)); return res; }).catch(()=>caches.match('./index.html'))); return; }
  e.respondWith(caches.match(r).then(hit=>hit||fetch(r).then(res=>{ if(res.ok){ const cp=res.clone(); caches.open(V).then(c=>c.put(r,cp)); } return res; }))); });
