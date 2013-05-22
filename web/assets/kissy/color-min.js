/*
Copyright 2013, KISSY UI Library v1.40dev
MIT Licensed
build time: Apr 17 00:14
*/
KISSY.add("color",function(j,p){function g(){g.superclass.constructor.apply(this,arguments)}function m(a){var b=Math.min(Math.round(a.h),359),c=Math.max(0,Math.min(1,a.s)),a=Math.max(0,Math.min(1,a.v)),d,e,f,n=Math.floor(b/60%6),g=b/60-n,b=a*(1-c),i=a*(1-g*c),c=a*(1-(1-g)*c);switch(n){case 0:d=a;e=c;f=b;break;case 1:d=i;e=a;f=b;break;case 2:d=b;e=a;f=c;break;case 3:d=b;e=i;f=a;break;case 4:d=c;e=b;f=a;break;case 5:d=a,e=b,f=i}return{r:h(255*d),g:h(255*e),b:h(255*f)}}function o(a){var b=Math.min(Math.round(a.h),
359),c=Math.max(0,Math.min(1,a.s)),d=Math.max(0,Math.min(1,a.l)),e,f=[];e=Math.abs;a=Math.floor;if(0==c||null==b)f=[d,d,d];else{b/=60;c*=1-e(2*d-1);e=c*(1-e(b-2*a(b/2)-1));d-=c/2;switch(a(b)){case 0:f=[c,e,0];break;case 1:f=[e,c,0];break;case 2:f=[0,c,e];break;case 3:f=[0,e,c];break;case 4:f=[e,0,c];break;case 5:f=[c,0,e]}f=[f[0]+d,f[1]+d,f[2]+d]}j.each(f,function(a,b){f[b]=255*a});return{r:f[0],g:f[1],b:f[2]}}function l(a){2!=a.length&&(a="0"+a);return a}function k(a){return Math.round(100*a)+"%"}
function h(a){return Math.max(0,Math.min(a,255))}var q=/\s*rgba?\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*(?:,\s*(\d+))?\)\s*/,r=/\s*#([0-9a-fA-F][0-9a-fA-F]?)([0-9a-fA-F][0-9a-fA-F]?)([0-9a-fA-F][0-9a-fA-F]?)\s*/;g.ATTRS={r:{getter:function(a){return Math.round(a)},setter:function(a){return h(a)}},g:{getter:function(a){return Math.round(a)},setter:function(a){return h(a)}},b:{getter:function(a){return Math.round(a)},setter:function(a){return h(a)}},a:{getter:function(a){return void 0==a?1:
Math.round(a)},setter:function(a){return h(a)}}};j.extend(g,p,{toHSL:function(){var a=this.getHSL();return"hsl("+Math.round(a.h||0)+","+k(a.s)+","+k(a.l)+")"},toHSLA:function(){var a=this.getHSL();return"hsla("+Math.round(a.h||0)+","+k(a.s)+","+k(a.l)+","+this.a+")"},toRGB:function(){return"rgb("+this.get("r")+","+this.get("g")+","+this.get("b")+")"},toRGBA:function(){return"rgba("+this.get("r")+","+this.get("g")+","+this.get("b")+","+this.get("a")+")"},toHex:function(){return"#"+l(Number(this.get("r")).toString(16))+
l(Number(this.get("g")).toString(16))+l(Number(this.get("b")).toString(16))},toString:function(){return this.toRGBA()},getHSL:function(){var a=this.get("r")/255,b=this.get("g")/255,c=this.get("b")/255,d=Math.max(a,b,c),e=Math.min(a,b,c),f=d-e,g,h=0,i=0.5*(d+e);e!=d&&(h=0.5>i?f/(d+e):f/(2-d-e),g=((a==d?60*(b-c)/f:b==d?120+60*(c-a)/f:240+60*(a-b)/f)+360)%360);return{h:g,s:h,l:i}},getHSV:function(){var a=this.get("r"),b=this.get("g"),c=this.get("b"),a=a/255,b=b/255,d=c/255,e,f=Math.min(Math.min(a,b),
d),c=Math.max(Math.max(a,b),d),g=c-f;switch(c){case f:e=0;break;case a:e=60*(b-d)/g;b<d&&(e+=360);break;case b:e=60*(d-a)/g+120;break;case d:e=60*(a-b)/g+240}a=0===c?0:1-f/c;return{h:Math.round(e),s:a,v:c}},setHSV:function(a){var b;"h"in a&&"s"in a&&"v"in a||(b=this.getHSV(),j.each(["h","s","v"],function(c){c in a&&(b[c]=a[c])}),a=b);this.set(m(a))},setHSL:function(a){var b;"h"in a&&"s"in a&&"l"in a||(b=this.getHSL(),j.each(["h","s","l"],function(c){c in a&&(b[c]=a[c])}),a=b);this.set(o(a))}});j.mix(g,
{parse:function(a){var b,c,d,e,f;if((4==a.length||7==a.length)&&"#"===a.substr(0,1)){if(b=a.match(r))c=parseInt(b[1],16),d=parseInt(b[2],16),e=parseInt(b[3],16),4==a.length&&(c+=16*c,d+=16*d,e+=16*e)}else if(b=a.match(q))c=b[1],d=b[2],e=b[3],f=b[4];return"undefined"==typeof c?void 0:new g({r:c,g:d,b:e,a:f})},fromHSL:function(a){var b=o(a);b.a=a.a;return new g(b)},fromHSV:function(a){var b=m(a);b.a=a.a;return new g(b)}});return g},{requires:["base"]});
