/*! $AC$ PennController.newScale(name,numberOrValues) Creates a new Scale element $AC$$AC$ PennController.getScale(name) Retrieves an existing Scale element $AC$$AC$ Scale PElement.select(option) Selects the specified option on the scale $AC$$AC$ Scale PElement.wait() Waits until a selection happens before proceeding $AC$$AC$ Scale PElement.button() Transforms the scale options into buttons $AC$$AC$ Scale PElement.callback(commands) Will execute the specified command(s) whenever selection happens $AC$$AC$ Scale PElement.default(value) Sets the specified value to be selected by default $AC$$AC$ Scale PElement.horizontal() Aligns the scale's options horizontally (again) $AC$$AC$ Scale PElement.keys(keys) Associates the scale's options with the specified keys for selection $AC$$AC$ Scale PElement.label(index,label) Gives the specified label to the option at the specified index on the scale $AC$$AC$ Scale PElement.labelsPosition(position) Will show the labels on top, at the bottom, to the left or to the right of the options $AC$$AC$ Scale PElement.log() Will log the selected option in the results file $AC$$AC$ Scale PElement.once() Will disable the scale after the first selection $AC$$AC$ Scale PElement.radio() Will show the scale's options as radio buttons $AC$$AC$ Scale PElement.slider() Will show the scale as a slider $AC$$AC$ Scale PElement.horizontal() Aligns the scale's options vertically $AC$$AC$ Scale PElement.test.selected(option) Checks that the option, or any option if none specified, is selected $AC$ */!function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=131)}({131:function(t,e){window.PennController._AddElementType("Scale",(function(t){function e(){this.jQueryElement.find("input").attr("disabled",!0),this.jQueryElement.find("div,label").css("cursor",""),this.disabled=!0}function i(){this.jQueryElement.find("input").removeAttr("disabled"),this.jQueryElement.find("div").css("cursor","pointer"),this.disabled=!1}function s(t,e){if("slider"==this.scaleType?this.jQueryElement.find("input[type=range]")[0].value=t:this.jQueryElement.find(`input#${this.id}-${t}`).attr("checked",!0).change(),e){let e=this.buttons[t];null!=e&&""!=e||(e=t+1),this.choice(e)}}function n(){let t=this.defaultValue,e=this.orientation,i=this.scaleType;if(this.jQueryElement.empty(),"slider"==i){var s=$("<input>").attr({type:"range",min:"0",max:String(this.buttons.length-1),value:String((this.buttons.length-1)/2),step:"1"});Number(t)>=0&&Number(t)<=this.buttons.length-1&&s.attr("value",String(t)),this.disabled&&s.attr("disabled",!0),s[0].oninput=()=>{this.firstClick||(this.firstClick=Date.now())},s[0].onchange=()=>this.choice(s[0].value),"vertical"==e&&(s.attr("orient","vertical"),s.css({"writing-mode":"vertical-lr","-webkit-appearance":"slider-vertical"})),s.css({width:"100%",height:"100%"}),this.jQueryElement.append(s)}else{this.jQueryElement.css({display:"inline-flex","justify-content":"space-between"});for(let e=0;e<this.buttons.length;e++){let s=this.buttons[e];null!=s&&""!=s||(s=e+1);let n=$("<label>").attr({for:this.id+"-"+e}).html(s).css("cursor","pointer"),l=$("<input>").attr({name:this.id,value:s,type:"radio",id:this.id+"-"+e}),h=$("<div>").addClass("option").css({cursor:"pointer",display:"flex","align-items":"center"}).append(l).append(n);s._runPromises&&s.print(n.empty())._runPromises(),t!=s&&t!=e||l.attr("checked",!0),this.disabled&&l.attr("disabled",!0),l[0].onchange=()=>{this.choice(this.buttons[e]||s),this.jQueryElement.find("label").css("outline","none"),"buttons"==i&&n.css("outline","dotted 1px black")},"buttons"==i&&l.css("display","none"),"top"==this.labels?h.css("flex-direction","column-reverse"):"bottom"==this.labels?h.css("flex-direction","column"):"left"==this.labels&&h.css("flex-direction","row-reverse"),this.jQueryElement.append(h),"radio"==i&&!1===this.labels&&n.css("display","none")}"vertical"==e&&this.jQueryElement.css("flex-direction","column")}this.width||this.jQueryElement.css("max-width","max-content")}this.immediate=function(t,...e){e.length||(e=[t],void 0!==t&&"string"==typeof t&&0!=t.length||(t="Scale")),this.id=t,"string"!=typeof e[0]&&Number(e[0])>0?this.initialButtons=new Array(Number(e[0])):this.initialButtons=e},this.uponCreation=function(e){this.jQueryElement=$("<div>").css("display","inline-block"),this.choices=[],this.log=!1,this.labels=!1,this.disabled=!1,this.vertical=!1,this.scaleType="radio",this.defaultValue=null,this.orientation="horizontal",this.width=null,this.keys=[],this.buttons=this.initialButtons,this.choice=t=>{if(this.disabled)return;this.unselected=void 0,t&&t._runPromises&&(t=t._element.id);let e=null;"slider"==this.scaleType&&this.firstClick&&(e=Date.now()-this.firstClick,this.firstClick=void 0),this.choices.push(["Choice",t,Date.now(),e||"NULL"])},t.controllers.running.safeBind($(document),"keydown",t=>{if(!this.disabled)for(let e=0;e<this.keys.length;e++)if(String.fromCharCode(t.which)==this.keys[e])return s.apply(this,[e,!0])}),e()},this.end=function(){if(this.log&&this.log instanceof Array)if(this.choices.length)if(1==this.choices.length)t.controllers.running.save(this.type,this.id,...this.choices[0]);else if(this.log.indexOf("all")>-1)for(let e in this.choices)t.controllers.running.save(this.type,this.id,...this.choices[e]);else this.log.indexOf("first")>-1&&t.controllers.running.save(this.type,this.id,...this.choices[0]),this.log.indexOf("last")>-1&&t.controllers.running.save(this.type,this.id,...this.choices[this.choices.length-1]);else t.controllers.running.save(this.type,this.id,"Choice","NA","Never","No selection happened")},this.value=function(){return this.choices.length&&void 0===this.unselected?this.choices[this.choices.length-1][1]:NaN},this.actions={print:function(e,...i){n.apply(this),t.elements.standardCommands.actions.print.apply(this,[e,...i])},select:function(e,i,n){for(var l=0;l<this.buttons.length;l++){let t=this.buttons[l];if(t&&t==i)break;if(t&&t._element&&t._element.id==i)break;if(l==i)break}if(l>=this.buttons.length)return e(t.debug.error("Option "+i+" not found for selection on Scale "+this.id));s.apply(this,[l,n]),e()},unselect:function(t){if("slider"==this.scaleType){let t=this.jQueryElement.find("input[type=range]")[0];t.value=(t.max-t.min)/2}else this.jQueryElement.find("input").removeAttr("checked").change();this.unselected=!0,t()},wait:function(t,e){if("first"==e&&this.choices.length)t();else{let i=!1,s=this.choice;this.choice=n=>{if(s.apply(this,[n]),!i)if(e instanceof Object&&e._runPromises&&e.success){let s=this.disabled;this.disabled="tmp",e._runPromises().then(e=>{"success"==e&&(i=!0,t()),"tmp"==this.disabled&&(this.disabled=s)})}else i=!0,t()}}}},this.settings={button:function(t){this.scaleType="buttons",n.apply(this),t()},callback:function(t,...e){let i=this.choice;this.choice=async function(t){let s=this.disabled;if(i.apply(this,[t]),!s)for(let t in e)await e[t]._runPromises()},t()},default:function(e,i){this.buttons.indexOf(i)>-1||Number(i)>=0&&Number(i)<this.buttons.length?(this.defaultValue=i,i._element&&(i=i._element.id),this.choices.push(["Default",i,Date.now(),this.scaleType])):t.debug.error("Invalid default value for Scale "+this.id,i),e()},disable:function(t){e.apply(this),this.jQueryContainer.addClass("PennController-disabled"),this.jQueryElement.addClass("PennController-disabled"),t()},enable:function(t){i.apply(this),this.jQueryContainer.removeClass("PennController-disabled"),this.jQueryElement.addClass("PennController-disabled"),t()},horizontal:function(t){this.orientation="horizontal",this.jQueryElement.parent().length&&n.apply(this),t()},keys:function(e,...i){if(i instanceof Array&&i.length==this.buttons.length){if(i.filter(t=>"string"==typeof t&&1==t.length).length!=i.length)return e(t.debug.error("Every key should be a string of length 1 in Scale "+this.id,i));this.keys=i.map(t=>t.toUpperCase())}else this.buttons.filter(t=>"string"==typeof t&&1==t.length).length==this.buttons.length?this.keys=this.buttons.map(t=>t.toUpperCase()):this.keys=Array.from({length:this.buttons.length},(t,e)=>e+1);e()},label:function(t,e,i){if(isNaN(Number(e))||e<0||e>=this.buttons.length)return t();if(this.buttons[e]=i,this.jQueryElement.parent().length){let t=this.jQueryElement.find("label");if(e<t.length){let s=$(t[e]);s.empty(),i._runPromises?i.print(s.empty())._runPromises():s.html(i)}}t()},labels:function(t,e){this.labels=e,t()},labelsPosition:function(t,e){this.labels=e,n.apply(this),t()},log:function(t,...e){e.length?this.log=e:this.log=["last"],t()},once:function(t){if(this.hasClicked)e.apply(this);else{let t=this.choice;this.choice=i=>{t.apply(this,[i]),e.apply(this)}}t()},radio:function(t){this.scaleType="radio",n.apply(this),t()},size:function(e,i,s){this.width=i,n.apply(this),t.elements.standardCommands.settings.size.apply(this,[e,i,s])},slider:function(t){this.scaleType="slider",n.apply(this),t()},vertical:function(t){this.orientation="vertical",this.jQueryElement.parent().length&&n.apply(this),t()}},this.test={selected:function(t){return!(!this.choices.length||this.unselected)&&(null==t||t==this.choices[this.choices.length-1][1])}}}))}});