!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=68)}({68:function(t,e){window.PennController._AddElementType("Image",function(t){this.immediate=function(e,n){let i=!n.match(/^http/i);this.resource=t.resources.fetch(n,function(t){this.object=new Image,this.object.onload=t,this.object.src=this.value},i)},this.uponCreation=function(t){this.image=this.resource.object,this.image.style=null,this.jQueryElement=$(this.image),t()},this.end=function(){this.log&&(this.printTime?t.controllers.running.save(this.type,this.id,"Print",this.printTime,"NULL"):t.controllers.running.save(this.type,this.id,"Print","NA","Never"))},this.value=function(){return this.jQueryElement.parent().length}})}});