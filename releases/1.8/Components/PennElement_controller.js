/*! $AC$ PennController.newController(name,controller,options) Creates a new Controller element $AC$$AC$ PennController.getController(name) Retrieves an existing Controller element $AC$$AC$ Controller PElement.wait() Waits until the controller has been completed before proceeding $AC$ */!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=120)}({120:function(e,t){window.PennController._AddElementType("Controller",function(e){this.immediate=function(e,t,n){void 0===n&&("string"==typeof t?n={}:(n=t||{},t=e)),this.id=e,this.controller=t,this.options=n},this.uponCreation=function(t){this.jQueryElement=$("<div>"),this.log=!1,this.results=[],this.finishedCallback=(()=>this.done=!0);let n=this;this.options._finishedCallback=function(e){n.done||(n.results.push([Date.now(),e]),addSafeBindMethodPair("PennController"),n.finishedCallback())},this.options._cssPrefix=this.controller+"-",this.options._utils=e.controllers.running.utils;let o=Object.getOwnPropertyNames($.ui).filter(e=>$.ui[e]instanceof Function&&$.ui[e]._ibex_options);if(o.indexOf(this.controller)>=0)addSafeBindMethodPair(this.controller),this.jQueryElement[this.controller](this.options);else{let t={score:1,controllerName:""};for(let n=0;n<o.length;n++){let r=e.utils.levensthein(this.controller,o[n])/this.controller.length;r<t.score&&(t.score=r,t.controllerName=o[n])}t.score<.5&&(add=" Did you mean to type <strong>"+t.controllerName+"</strong>?"),e.debug.error("Controller &lsquo;"+this.controller+"&rsquo; not found."+add)}t()},this.end=function(){if(this.log)for(let t=0;t<this.results.length;t++){let n=this.results[t][0],o=this.results[t][1];for(let t=0;t<o.length;t++){let r=o[t],i="Controller-"+this.controller,l=this.id,s="NULL",u="NULL";r.length>0&&(s=r[0][1]),r.length>1&&(u=r[1][1]);for(let t=2;t<r.length;t++)e.controllers.running.controller.appendResultLine.push([r[t][0],r[t][1]]);e.controllers.running.save(i,l,s,u,n,"Any addtional parameters were appended as additional columns");for(let t=2;t<r.length;t++)e.controllers.running.controller.appendResultLine.pop()}}},this.value=function(){return this.controller},this.actions={wait:function(e,t){if("first"==t&&this.done)e();else{let n=!1,o=this.finishedCallback;this.finishedCallback=(()=>{o.apply(this),n||(t instanceof Object&&t._runPromises&&t.success?t._runPromises().then(t=>{"success"==t&&(n=!0,e())}):(n=!0,e()))})}}}})}});