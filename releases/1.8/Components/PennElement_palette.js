/*! $AC$ PennController.newPalette(name) Creates a new Palette element $AC$$AC$ PennController.getPalette(name) Retrieves an existing Palette element $AC$$AC$ Palette PElement.brush(element,color) Colors the specified element with the specified color $AC$$AC$ Palette PElement.clear() Makes all the elements of the palette transparent $AC$$AC$ Palette PElement.unselect() Unselects the color from the palette that was currently selected $AC$$AC$ Palette PElement.wait() Waits until an element is clicked and colored before proceeding $AC$$AC$ Palette PElement.addColor(color,element) Adds the specified color to the palette, to be selected by clicking on the specified element $AC$$AC$ Palette PElement.addElement(elements) Adds the specified element(s) as targets for coloration $AC$$AC$ Palette PElement.callback(commands) Will execute the specified command(s) whenever an element is colored $AC$$AC$ Palette PElement.enable() Enables the palette $AC$$AC$ Palette PElement.disable() Disables the palette $AC$$AC$ Palette PElement.log() Will log any coloration to the results file $AC$$AC$ Palette PElement.once() Will disable the palette after the first coloration $AC$$AC$ Palette PElement.remove(color) Removes the specified color from the palette (leaving any associated element on the page) $AC$$AC$ Palette PElement.test.color(element,color) Checks that the specified element has been colored with the specified color $AC$ */!function(e){var t={};function n(s){if(t[s])return t[s].exports;var l=t[s]={i:s,l:!1,exports:{}};return e[s].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(s,l,function(t){return e[t]}.bind(null,l));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=128)}({128:function(e,t){window.PennController._AddElementType("Palette",function(e){this.immediate=function(e,t){void 0===t&&(t=e),this.mode=t||"background",void 0!==e&&"string"==typeof e&&0!=e.length||(e="Palette"),this.id=e},this.uponCreation=function(e){this.currentColor=null,this.enabled=!0,this.elements=[],this.colors=[],this.brushes=[],this.log=!1,this.select=(e=>{if(!this.enabled||!this.currentColor)return;let t=this.elements.map(e=>e[0]).indexOf(e);if(t<0)return;this.elements[t][1]=this.currentColor;let n=e.jQueryElement;this.brushes.push([e.id,this.currentColor,Date.now()]),"background"==this.mode?n.css("background-color",this.currentColor):(n._tinter&&n._tinter instanceof jQuery&&n._tinter.remove(),n._tinter=$("<div>").css({display:"block",position:"absolute",width:n.width(),height:n.height(),"margin-top":-1*n.width(),background:this.elements[t][1],opacity:.5}),n.before(n._tinter))}),e()},this.end=function(){if(this.enabled=!1,$("#bod").css("cursor","default"),this.log){if("all"==this.log)for(let t=0;t<this.brushes.length;t++)e.controllers.running.save(this.type,this.id,this.brushes[t][0],this.brushes[t][1],this.brushes[t][2],"NULL");for(let t=0;t<this.elements.length;t++)e.controllers.running.save(this.type,this.id,this.elements[t][0].id,this.elements[t][1],"Final","NULL")}},this.value=function(){return this.brushes.length},this.actions={brush:function(e,t,n){if(t._element){let e=this.currentColor;this.currentColor=n,this.select(t._element),this.currentColor=e}e()},clear:function(e){for(let e in this.elements)"background"==this.mode?this.elements[e][0].jQueryElement.css("background-color","transparent"):this.elements[e].jQueryElement._tinter&&this.elements[e][0].jQueryElement._tinter.remove(),this.elements[e][1]=null;e()},unselect:function(e){$(".PennController-"+this.type+"-palette-selected").removeClass("PennController-"+this.type+"-palette-selected"),$("#bod").css("cursor","default"),this.currentColor=null,e()},wait:function(e,t){if("first"==t&&this.brushes.length)e();else{let n=!1,s=this.select;this.select=(l=>{let r=s.apply(this,[l]);n||!this.enabled&&!r||(t instanceof Object&&t._runPromises&&t.success?t._runPromises().then(t=>{"success"==t&&(n=!0,e())}):(n=!0,e()))})}}},this.settings={addColor:function(t,n,...s){this.colors.indexOf(n)<0&&this.colors.push(n);let l=[],r=()=>{this.colors.indexOf(n)<0||(this.currentColor=n,$(".PennController-"+this.type+"-palette-selected").removeClass("PennController-"+this.type+"-palette-selected"),l.map(e=>e.jQueryElement.addClass("PennController-"+this.type+"-palette-selected")),$("#bod").css("cursor","crosshair"))};for(let t in s){let n=s[t];"string"==typeof n?e.events.keypress(e=>{n.toUpperCase().indexOf(String.fromCharCode(e.which).toUpperCase())>-1?r():27==e.which&&($(".PennController-"+this.type+"-palette-selected").removeClass("PennController-"+this.type+"-palette-selected"),$("#bod").css("cursor","default"),this.currentColor=null)}):n._element&&n._element.jQueryElement&&(n._element.jQueryElement.bind("click",r),n._element.jQueryElement.addClass("PennController-"+this.type+"-palette"),n._element.jQueryElement.addClass("PennController-"+this.id+"-palette"),l.push(n._element))}t()},addElement:function(e,...t){for(let e in t){let n=t[e];n._element&&n._element.jQueryElement&&(n._element.jQueryElement.bind("click",()=>{this.select(n._element)}),this.elements.map(e=>e[0]).indexOf(n._element)<0&&this.elements.push([n._element,null]))}e()},callback:function(e,...t){let n=this.select;this.select=async function(e){if(n.apply(this,[e]),this.enabled)for(let e in t)await t[e]._runPromises()},e()},enable:function(e){this.jQueryContainer.removeClass("PennController-disabled"),this.jQueryElement.removeClass("PennController-disabled"),this.enabled=!0,e()},disable:function(e){this.jQueryContainer.addClass("PennController-disabled"),this.jQueryElement.addClass("PennController-disabled"),this.enabled=!1,e()},log:function(e,t){this.log=t||"all",e()},once:function(e){if(this.brushes.length)this.enabled=!1,$(".PennController-"+this.type+"-palette-selected").removeClass("PennController-"+this.type+"-palette-selected"),$("#bod").css("cursor","default"),this.currentColor=null;else{let e=this.select;this.select=(t=>{if(e.apply(this,[t]),this.enabled)return this.enabled=!1,$(".PennController-"+this.type+"-palette-selected").removeClass("PennController-"+this.type+"-palette-selected"),$("#bod").css("cursor","default"),this.currentColor=null,"once"})}e()},removeColor:function(e,t){let n=this.colors.indexOf(t);n>-1&&this.colors.splice(n,1),e()}},this.test={color:function(e,t){if(e._element&&e._element){let n=this.elements.map(e=>e[0]).indexOf(e._element);return!(n<0)&&this.elements[n][1]==t}return!1}}})}});