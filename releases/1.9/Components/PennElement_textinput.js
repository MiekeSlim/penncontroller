/*! $AC$ PennController.newTextInput(name,text) Creates a new TextInput element $AC$$AC$ PennController.getTextInput(name) Retrieves an existing TextInput element $AC$$AC$ TextInput PElement.wait() Waits until Enter is pressed in the input box before proceeding $AC$$AC$ TextInput PElement.length(number) Limits the maximum number of characters in the input box to the specified number $AC$$AC$ TextInput PElement.lines(number) Limits the maximum number of lines in the input box to the specified number $AC$$AC$ TextInput PElement.log() Will log the text from the input box in the results file $AC$$AC$ TextInput PElement.once() Will disable the input box after the first keypress on Enter/Return $AC$$AC$ TextInput PElement.text(value) Replaces whatever is in the input box with the specified value $AC$$AC$ TextInput PElement.test.text(value) Checks that the content of the input box corresponds to the specified value $AC$ */!function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=132)}({132:function(t,e){window.PennController._AddElementType("TextInput",(function(t){this.immediate=function(t,e){void 0!==t&&"string"==typeof t&&0!=t.length||(t="TextInput"),this.initialText=e,this.id=t},this.uponCreation=function(t){this.text=this.initialText,this.jQueryElement=$("<textarea>"),this.jQueryElement.attr({name:this.id,rows:1,cols:40}).val(this.text),this.rows=1,this.disabled=!1,this.log=[],this.types=[],this.validations=[],this.entered=!1,this.pressEnter=()=>{this.entered=!0,this.validations.push(["EnterReturn",this.jQueryElement.val(),Date.now(),"NULL"])},this.jQueryElement[0].addEventListener("keydown",t=>{let e=this.jQueryElement.val();if(this.types.push(["Type",e,Date.now(),t.key]),"Enter"==t.key)if(this.pressEnter(),1==this.rows)t.preventDefault();else if(this.rows>1){let i=e.match(/[\r\n]/g);i instanceof Array&&i.length+1>=this.rows&&t.preventDefault()}}),this.jQueryElement[0].addEventListener("keypress",t=>{if("Enter"==t.key&&this.rows>0){let e=this.jQueryElement.val().match(/[\r\n]/g);e instanceof Array&&e.length+1>=this.rows&&t.preventDefault()}t.key.isSpecialKey()||this.length!=this.jQueryElement.val().length||t.preventDefault()}),this.jQueryElement[0].addEventListener("keyup",t=>{let e=this.jQueryElement.val();this.length&&e.length>this.length&&this.jQueryElement.val(e.substr(0,this.length));let i=e.match(/[\r\n]/g);if(this.rows>0&&i instanceof Array&&i.length>=this.rows+1){let t="([\\n\\r]?[^\\n\\r]*){"+this.rows+"}";this.jQueryElement.val(e.match(RegExp(t))[0])}}),this.jQueryElement[0].addEventListener("paste",t=>{let e=this.jQueryElement.val(),i=(t.clipboardData||window.clipboardData).getData("Text"),n=this.jQueryElement[0].selectionStart,s=e.substring(0,n)+i+e.substring(this.jQueryElement[0].selectionEnd,e.length),r=s.match(/[\r\n]/g);if(this.rows>0&&r instanceof Array&&r.length>=this.rows){let e="([\\n\\r]?[^\\n\\r]*){"+this.rows+"}";s=s.match(RegExp(e))[0],this.jQueryElement.val(s),t.preventDefault()}this.length>0&&s.length>=this.length&&(this.jQueryElement.val(s.substring(0,this.length)),t.preventDefault())}),t()},this.end=function(){if(this.log&&this.log instanceof Array)if(this.log.indexOf("all")>-1){let e=Date.now();if(t.controllers.running.save(this.type,this.id,"Final",csv_url_encode(this.jQueryElement.val()),e,"All saved, see documentation"),this.types.length){t.controllers.running.save(this.type,this.id,"NTypingEvents",this.types.length,e,"All saved, see documentation");let i=[],n=[],s=[];this.types.map(t=>{i.push(csv_url_encode(t[1])),n.push(t[2]),s.push(t[3])}),t.controllers.running.save(this.type,this.id,"TypingEvent","Keys","NULL",...s),t.controllers.running.save(this.type,this.id,"TypingEvent","Texts","NULL",...i),t.controllers.running.save(this.type,this.id,"TypingEvent","Times","NULL",...n)}for(let e in this.validations)this.validations[e][1]=csv_url_encode(this.validations[e][1]),t.controllers.running.save(this.type,this.id,...this.validations[e])}else{if(this.log.indexOf("validate")>-1)for(let e in this.validations)this.validations[e][1]=csv_url_encode(this.validations[e][1]),t.controllers.running.save(this.type,this.id,...this.validations[e]);if(this.log.indexOf("final")>-1&&t.controllers.running.save(this.type,this.id,"Final",csv_url_encode(this.jQueryElement.val()),Date.now(),"NULL"),this.log.indexOf("first")>-1&&this.types.length){let e=[].concat(this.types[0]);e[0]="First",e[1]=csv_url_encode(e[1]),t.controllers.running.save(this.type,this.id,...e)}if(this.log.indexOf("last")>-1&&this.types.length){let e=[].concat(this.types[this.types.length-1]);e[0]="Last",e[1]=csv_url_encode(e[1]),t.controllers.running.save(this.type,this.id,...e)}}},this.value=function(){return this.jQueryElement.val()},this.actions={print:function(e,...i){t.elements.standardCommands.actions.print.apply(this,[()=>{this.jQueryElement.focus(),e()},...i])},wait:function(t,e){if("first"==e&&this.entered)t();else{let i=!1,n=this.pressEnter;this.pressEnter=()=>{if(n.apply(this),!i)if(e instanceof Object&&e._runPromises&&e.success){let n=this.disabled;this.disabled="tmp",e._runPromises().then(e=>{"success"==e&&(i=!0,t()),"tmp"==this.disabled&&(this.disabled=n)})}else i=!0,t()}}}},this.settings={length:function(t,e){this.length=Number(e),isNaN(this.length)&&(this.length=0),t()},lines:function(t,e){this.rows=Number(e),isNaN(this.rows)&&(this.rows=0),this.jQueryElement.attr("rows",this.rows),t()},log:function(e,...i){i.length||(i=["final","validate","first"]),this.log=i,i.indexOf("all")>-1&&t.debug.log("<div style='color:red;'>Now logging all typing events in inputText element "+this.id+": this can drastically increase the weight of the results file</div>"),e()},once:function(t){if(this.entered)this.jQueryElement.attr("disabled",!0);else{let t=this.pressEnter;this.pressEnter=function(){t.apply(this),this.jQueryElement.attr("disabled",!0)}}t()},text:function(t,e){this.text=e,this.jQueryElement.val(e),t()}},this.test={text:function(t){return t instanceof RegExp?this.jQueryElement.val().match(t):this.jQueryElement.val()==t}}}))}});