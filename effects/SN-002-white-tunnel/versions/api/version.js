// SN-002 stable version links. Only known snapshots are addressable.
const versions={"v1.0":"v1.0.0-original.html","v1.1":"v1.1.0-cold-fog.html","v1.2":"v1.2.0-crystal-mist.html","v1.3":"v1.3.0-dark-mist-crisp.html","v1.4":"v1.4.0-true-black-living-fog.html","v1.5":"v1.5.0-macro-ice.html","v1.6":"v1.6.0-charcoal-mist-rhythm.html","v1.7":"v1.7.0-crystal-depth-charcoal-fog.html","v1.9":"v1.9.0-crystal-nightfall-balance.html","v2.0":"v2.0.0-balanced-3d-drift.html","v2.1":"v2.1.0-crystal-passage-balanced.html","v2.2":"v2.2.0-v13-rhythm-visible-snow.html","v2.3":"v2.3.0-slow-motion-closeup.html"};
module.exports = function handler(req,res) {
  const key=String(req.query?.v||'');
  const file=Object.prototype.hasOwnProperty.call(versions,key)?versions[key]:null;
  if(!file){res.statusCode=404;res.setHeader('Content-Type','text/plain; charset=utf-8');return res.end('Unknown version');}
  res.statusCode=302;res.setHeader('Location','/'+file);
  res.setHeader('Cache-Control','public, s-maxage=300');
  res.end();
};