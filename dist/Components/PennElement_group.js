/*! $AC$ PennController.newGroup(name,elements) Creates a new Group element $AC$$AC$ PennController.getGroup(name) Retrieves an existing Group element $AC$$AC$ Group PElement.shuffle() Shuffles the positions of the elements on the page $AC$$AC$ Group PElement.add(elements) Adds one or more elements to the group $AC$$AC$ Group PElement.remove(elements) Removes one or more elements from the group $AC$$AC$ Group PElement.test.index(element,index) Checks the index of the specified element in the group $AC$$AC$ all PElements.group(name) Adds the element to the Group element with the specified name $AC$ */!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=141)}({141:function(t,n){!function(){var t=null;let n=window.PennController.ResetPrefix;window.PennController.ResetPrefix=function(e){n(e),t="string"==typeof t?window[e]:window},window.PennController._AddElementType("Group",(function(n){function i(e,...t){let i=[];if(t.length)for(let e in t){if(!(t[e]._element&&t[e]._element.jQueryElement instanceof jQuery)){n.debug.error("Invalid element #"+e+" in shuffling Group "+this.id);continue}let o=this.elements.map(e=>e[0]).indexOf(t[e]._element);o<0?n.debug.error("Cannot shuffle element "+t[e]._element.id+" for it has not been added to Group "+this.id):i.push(this.elements[o])}else i=[].concat(this.elements);let o=[].concat(i);fisherYates(o);let s=o.map((e,t)=>Object({old:{element:i[t],index:this.elements.indexOf(i[t])},new:{element:e,index:this.elements.indexOf(e)}})),r=[];s.map((e,t)=>{this.elements[e.old.index]=e.new.element;let n=$("<shuffle>").attr("i",t);e.old.element.jQueryElement.before(n),n.css({position:e.old.element.jQueryElement.css("position"),left:e.old.element.jQueryElement.css("left"),top:e.old.element.jQueryElement.css("top")}),r.push(n)}),r.map(e=>{let t=e.attr("i"),n=s[t].new.element.jQueryElement;e.after(n),n.css({position:e.css("position"),left:e.css("left"),top:e.css("top")}),e.remove()}),e()}n.Prerun(()=>{for(let e in PennController.Elements){if(!e.match(/get[A-Z]/))continue;let i=PennController.Elements[e];PennController.Elements[e]=function(t){if(t instanceof Object&&t.hasOwnProperty("type")&&"Group"==t.type){let o=i(),s={},r={};for(let e in o.settings)s[e]=o.settings[e];for(let e in o)e instanceof Function&&(r[e]=o[e]);let l=[];for(let n in t._element.elements){let i=t._element.elements[n];e.match(i.type)&&l.push(i)}if(!l.length)return n.debug.error("No element for "+e+" in Group &quot;"+t._element.id+"&quot;");for(let e in o.settings)o.settings[e]=function(...t){for(let n in l)o._promises=o._promises.concat(i(l[n].id).settings[e](...t)._promises);return o};for(let e in o)e instanceof Function&&(o[e]=function(...t){for(let n in l)o._promises=o._promises.concat(i(l[n].id)[e](...t)._promises);return o});return o}return i(t)},t&&(t[e]=window.PennController.Elements[e])}}),this.immediate=function(e,...t){"string"!=typeof e&&e instanceof Object&&e.hasOwnProperty("_element")&&(t=[e,...t],void 0!==e&&"string"==typeof e&&0!=e.length||(e="Group"),this.id=e),this.initialElements=t},this.uponCreation=function(e){this.elements=this.initialElements.map(e=>e._element||n.debug.error("Invalid element passed to Group")),e()},this.end=function(){this.elements=[]},this.value=function(){return this.elements.length},this.actions={shuffle:function(e,...t){i.apply(this,[e].concat(t))}};let o=this;this.actions={remove:function(e,...t){t.length?o.settings.remove.call(this,e,...t):n.elements.standardCommands.actions.remove.call(this,e)}},this.settings={add:function(t,...i){for(e in i){let t=i[e]._element;null==t||null==t.id?n.debug.error("Invalid element added to Group "+this.id):this.elements.indexOf(t)>-1?n.debug.error("Element &quot;"+t.id+"&quot; already part of Group "+this.id):this.elements.push(t)}t()},remove:function(t,...n){for(e in n){let t=n[e]._element,i=this.elements.indexOf(t);i>-1&&(this.elements=this.elements.splice(i,1))}t()}};for(let e in n.elements.standardCommands.actions)this.actions[e]=async function(t,...n){for(let t=0;t<this.elements.length;t++)await PennController.Elements["get"+this.elements[t].type](this.elements[t].id)[e](...n)._runPromises();t()};for(let e in n.elements.standardCommands.settings)this.settings[e]=async function(t,...n){for(let t=0;t<this.elements.length;t++)console.log("this",this.elements,this.elements[t].type),await PennController.Elements["get"+this.elements[t].type](this.elements[t].id).settings[e](...n)._runPromises();t()};this.test={index:function(e,t){return null==e||null==e._element?n.debug.error("Invalid element tested for Group "+this.id,e._element.id):Number(t)>=0?this.elements.indexOf(e._element)==Number(t):this.elements.indexOf(e._element)>=0}}})),window.PennController._AddStandardCommands((function(e){this.settings={group:async function(t,n){var i;if("string"==typeof n){let t=e.controllers.running.options.elements;if(!t.hasOwnProperty("Group")||!t.Group.hasOwnProperty(n))return e.debug.error("No Group found named &quot;"+n+"&quot;");i=t.Group[n]}else n._element&&n._runPromises&&("Group"==n._element.type?(await n._runPromises(),i=n._element):e.debug.error("Tried to add &quot;"+this.name+"&quot; to an invalid Group"));i.elements.indexOf(this)>-1?e.debug.error("Element &quot;"+this.id+"&quot; already part of Group &quot;"+i.id+"&quot;"):i.elements.push(this),t()}}}))}()}});