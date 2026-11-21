"""Maakt index.html uit _src/app.html + _src/tiles.js + _src/places.js.  Gebruik: python3 _tools/build.py"""
import os
root=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
rd=lambda n: open(os.path.join(root,'_src',n),encoding='utf-8').read()
app,tiles,places,weetjes=rd('app.html'),rd('tiles.js'),rd('places.js'),rd('weetjes.js')
a='if(!list.length||list.length>9)'
assert a in tiles, 'tiles.js is veranderd: tegelgrens niet gevonden'
tiles=tiles.replace(a,'if(!list.length||list.length>(o.max||9))')
assert all('</script' not in x for x in (tiles,places,weetjes))
out=app.replace('/*TILES*/',tiles).replace('/*PLACES*/',places).replace('/*WEETJES*/',weetjes)
open(os.path.join(root,'index.html'),'w',encoding='utf-8').write(out)
print('index.html',len(out),'tekens')
