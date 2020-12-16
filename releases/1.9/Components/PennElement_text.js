/*! $AC$ PennController.newText(name,text) Creates a new Text element $AC$$AC$ PennController.getText(name) Retrieves an existing Text element $AC$$AC$ Text PElement.unfold(duration) Unfolds the text in duration milliseconds $AC$$AC$ Text PElement.text(text) Redefines the text of the element $AC$$AC$ Text PElement.test.text(value) Checks that the text of the element corresponds to the specified value $AC$ */!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=131)}({131:function(t,e){window.PennController._AddElementType("Text",(function(t){this.immediate=function(t,e){void 0===e&&(e=t),this.id=t,e=e.replace(/(^\s|\s$)/,"&nbsp;"),this.initialText=e,this.text=e},this.uponCreation=function(t){this.jQueryElement=$("<span>"+this.initialText+"</span>").css("display","inline-block"),t()},this.value=function(){return this.text},this.end=function(){this.log&&(this.printTime?t.controllers.running.save(this.type,this.id,"Print","NA",this.printTime,"NULL"):t.controllers.running.save(this.type,this.id,"Print","NA","Never","NULL"))},this.actions={unfold:function(e,n){let i=()=>{let t=Number(n);if(t>0){let e=Date.now();this.jQueryElement.css("visibility","visible");let n=this.jQueryElement.width(),i=$("<div>").css({display:"inline-block","overflow-x":"hidden",width:0,margin:0,padding:0,"white-space":"nowrap"});i=this.jQueryElement.wrap(i).parent();let r=0,o=()=>{let s=(Date.now()-e)/t;s>=1&&(s=1);let l=Math.round(n*s);l>r&&i.width(l),r=l,s<1&&window.requestAnimationFrame(o)};window.requestAnimationFrame(o)}};this.jQueryContainer instanceof jQuery&&this.jQueryContainer.parent().length?i():t.elements.standardCommands.actions.print.call(this,i),e()}},this.settings={text:function(t,e){this.text=e,this.jQueryElement.html(e),t()}},this.test={text:function(t){return t instanceof RegExp?this.text.match(t):t==this.text}}}))}});