KISSY.add("xiami/transition/shake",function(q,r){function d(){f=this}function s(){b=+(new Date).getTime();console.log("count:"+j(a/2)+" time:"+(b-g-1E3));f.fire("shakeend",{count:j(a/2),time:b-g-1E3});a=k=0;clearTimeout(e);e=null}var t=Math.max,l=Math.abs,j=Math.floor,m=0,o=0,p=0,n=0,a=0,g=0,b=0,k=0,e=null,f=null;q.augment(d,r.Target,{start:function(){window.DeviceMotionEvent?window.addEventListener("devicemotion",this._shakeHandler,!1):alert("not support mobile event")},stop:function(){window.DeviceMotionEvent&&
window.removeEventListener("devicemotion",this._shakeHandler,!1)},_shakeHandler:function(h){var c=h.accelerationIncludingGravity,h=c.x,b=c.y,c=c.z,d,i=+(new Date).getTime();0!=m?100<i-n&&(n=i,d=t(l(h-m),l(b-o),l(c-p)),10<d&&(a++,0===k&&(g=i,f.fire("shakestart")),k=1,e&&clearTimeout(e),e=setTimeout(s,1E3),1<a&&1===a%2&&f.fire("shaking",{count:j(a/2),time:+(new Date).getTime()-g}))):n=i;m=h;o=b;p=c}});return d},{requires:["event"]});
