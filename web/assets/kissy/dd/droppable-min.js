/*
Copyright 2013, KISSY UI Library v1.40dev
MIT Licensed
build time: May 23 00:43
*/
KISSY.add("dd/droppable/base",function(j,g,e,h){var d=h.DDM,f=d.PREFIX_CLS;return e.extend({initializer:function(){this.addTarget(d);d._regDrop(this)},getNodeFromTarget:function(a,c,b){var a=this.get("node"),k=a[0];return k==c||k==b?null:a},_active:function(){var a=d.get("activeDrag"),c=this.get("node"),b=this.get("groups"),a=a.get("groups");a:if(!0===a)b=1;else{for(var k in b)if(a[k]){b=1;break a}b=0}b?(d._addValidDrop(this),c&&(c.addClass(f+"drop-active-valid"),d.cacheWH(c))):c&&c.addClass(f+"drop-active-invalid")},
_deActive:function(){var a=this.get("node");a&&a.removeClass(f+"drop-active-valid").removeClass(f+"drop-active-invalid")},__getCustomEvt:function(a){return j.mix({drag:d.get("activeDrag"),drop:this},a)},_handleOut:function(){var a=this.__getCustomEvt();this.get("node").removeClass(f+"drop-over");this.fire("dropexit",a)},_handleEnter:function(a){a=this.__getCustomEvt(a);a.drag._handleEnter(a);this.get("node").addClass(f+"drop-over");this.fire("dropenter",a)},_handleOver:function(a){a=this.__getCustomEvt(a);
a.drag._handleOver(a);this.fire("dropover",a)},_end:function(){var a=this.__getCustomEvt();this.get("node").removeClass(f+"drop-over");this.fire("drophit",a)},destructor:function(){d._unRegDrop(this)}},{name:"Droppable",ATTRS:{node:{setter:function(a){if(a)return g.one(a)}},groups:{value:{}}}})},{requires:["node","rich-base","dd/base"]});
KISSY.add("dd/droppable/delegate",function(j,g,e,h,d){function f(){var b=this.get("container"),c=[],d=this.get("selector");b.all(d).each(function(b){a.cacheWH(b);c.push(b)});this.__allNodes=c}var a=g.DDM,c=e.extend({initializer:function(){a.on("dragstart",f,this)},getNodeFromTarget:function(b,c,d){var f={left:b.pageX,top:b.pageY},b=this.__allNodes,e=0,g=Number.MAX_VALUE;b&&j.each(b,function(b){var i=b[0];i===d||i===c||(i=a.region(b),a.inRegion(i,f)&&(i=a.area(i),i<g&&(g=i,e=b)))});e&&(this.setInternal("lastNode",
this.get("node")),this.setInternal("node",e));return e},_handleOut:function(){c.superclass._handleOut.apply(this,arguments);this.setInternal("node",0);this.setInternal("lastNode",0)},_handleOver:function(a){var d=this.get("node"),e=c.superclass._handleOut,f=c.superclass._handleOver,g=c.superclass._handleEnter,h=this.get("lastNode");h[0]!==d[0]?(this.setInternal("node",h),e.apply(this,arguments),this.setInternal("node",d),g.call(this,a)):f.call(this,a)},_end:function(){c.superclass._end.apply(this,
arguments);this.setInternal("node",0)}},{ATTRS:{lastNode:{},selector:{},container:{setter:function(a){return d.one(a)}}}});return c},{requires:["dd/base","./base","dom","node"]});KISSY.add("dd/droppable",function(j,g,e,h){e.Delegate=h;g.Droppable=e;g.DroppableDelegate=h;return e},{requires:["dd/base","./droppable/base","./droppable/delegate"]});
