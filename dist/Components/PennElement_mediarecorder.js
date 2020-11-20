/*! $AC$ PennController.newMediaRecorder(name,type) Creates a new MediaRecorder element of type "audio" or "video" $AC$$AC$ PennController.getMediaRecorder(name) Retrieves an existing MediaRecorder element $AC$$AC$ global.PennController.InitiateRecorder(url,warning,consent) Sets the URL where to upload the recordings and creates a trial inviting the user to activate their microphone $AC$$AC$ global.PennController.UploadRecordings(label,noblock) Creates a trial that sends the recordings to the server $AC$$AC$ MediaRecorder PElement.play() Starts playing back the recording $AC$$AC$ MediaRecorder PElement.record() Starts recording $AC$$AC$ MediaRecorder PElement.stop() Stops playback or recording $AC$$AC$ MediaRecorder PElement.wait() Waits until recording stops before proceeding $AC$$AC$ MediaRecorder PElement.once() Will disable the recording interface after the first recording is complete $AC$$AC$ MediaRecorder PElement.log() Will log events in the results file $AC$$AC$ MediaRecorder PElement.test.hasPlayed() Checks that the recording was fully played back before $AC$$AC$ MediaRecorder PElement.test.playing() Checks that the recording is currently being played back $AC$$AC$ MediaRecorder PElement.test.recorded() Checks that recording has happened $AC$$AC$ global.PennController.DownloadRecordingButton(text) Returns an HTML string representing a button to download an archive of the recordings $AC$ */!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=139)}({139:function(e,t){window.PennController._AddElementType("MediaRecorder",(function(e){let t,n,r="This experiment collects recording samples from its participants. Your browser should now be prompting a permission request to use your recording device (if applicable). By giving your authorization to record, and by participating in this experiment, you are giving permission to the designer(s) of this experiment to anonymously collect the samples recorded during this experiment. The recordings will be uploaded to, and hosted on, a server designated by the experimenter(s). If you accept the request, a label will remain visible at the top of this window throughout the whole experiment, indicating whether you are currently being recorded.",o="By clicking this link I understand that I grant this experiment's script access to my recording device for the purpose of uploading recordings to the server designated by the experimenter(s).",i=e=>r=e,s={audio:null,video:null,onlyvideo:null},a=[],l="",d=!1,c=[],u=[],p=[],h=[],m=!1,g=!1;const y={audio:{"audio/webm":"webm","audio/ogg":"ogg"},video:{"video/webm":"webm","video/mp4":"mp4"}};function f(e){const t=y[e];for(let e in t)if(MediaRecorder.isTypeSupported(e))return{mimeType:e,extension:t[e]}}window.PennController.InitiateRecorder=function(a,h,y){if(void 0===window.MediaRecorder)return e.debug.error("This browser does not support audio recording"),alert("Your browser does not support audio recording");"string"!=typeof a&&e.debug.error("MediaRecorder's save URL is incorrect",a),l=a,d=!0;let b=e.controllers.new();b.id="InitiateRecorder",b.runHeader=!1,b.runFooter=!1,e.controllers.list.pop(),e.tmpItems.push(b),"string"==typeof h&&h.length&&i(h),"string"==typeof y&&y.length&&i(y),b.sequence=()=>new Promise(i=>{let a=e.controllers.running;if(!navigator.mediaDevices)return a.element.append($("<p>Sorry, you cannot complete this experiment because your browser does not support recording.</p>"));a.element.append($("<p>"+r+"</p>"));let l={};m&&(l.audio=!0),g&&(l.video=!0);let d=[];navigator.mediaDevices.getUserMedia(l).then((function(e){if(m){let t=e;g&&(t=t.clone(),t.getVideoTracks().map(e=>t.removeTrack(e))),s.audio=new MediaRecorder(t,{mimeType:f("audio").mimeType})}if(g){let t=e.clone();t.getAudioTracks().map(e=>t.removeTrack(e)),s.onlyvideo=t,s.video=new MediaRecorder(e,{mimeType:f("video").mimeType})}[s.audio,s.video].map(e=>{null!==e&&(e.recording=!1,e.onstop=function(r){n.css({"font-weight":"normal",color:"black","background-color":"lightgray"}),n.html("Not recording");let o=f(t.mediaType).mimeType;t.mediaPlayer.srcObject=null,t.blob=new Blob(d,{type:o}),t.mediaPlayer.src=URL.createObjectURL(t.blob),d=[],u.length&&u.shift().call(),e.recording=!1},e.onstart=function(r){n.css({"font-weight":"bold",color:"white","background-color":"red"}),n.html("Recording..."),"video"==t.mediaType&&(t.mediaPlayer.srcObject=s.onlyvideo,t.mediaPlayer.play()),e.recording=!0,c.shift().call()},e.ondataavailable=function(e){d.push(e.data)})}),a.element.append($("<a>"+o+"</a>").addClass("Message-continue-link").click(i)),n=$("<div>Not recording</div>"),n.css({position:"fixed",top:0,left:"50%",transform:"translateX(-50%)",padding:"2px","background-color":"lightgray"}),$("#bod").append(n)})).catch((function(e){a.element.append($("<p>The following error occurred: "+e+"</p>"))}))});let w=b.log;return b.log=(...e)=>(p.push(e),w.apply(b,e),b),b.warning=e=>(i(e),b),b.consent=e=>((e=>{o=e})(e),b),b},window.PennController.UploadRecordings=function(t,n){let r=e.controllers.new();e.tmpItems.push(r),"string"==typeof t&&t.length&&(r.useLabel=t),r.id="UploadRecordings",r.runHeader=!1,r.runFooter=!1,r.countsForProgressBar=!1,r.sequence=()=>new Promise((async function(t){let r=e.controllers.running;r.element.append($("<p>Please wait while the archive of your recordings is being uploaded to the server...</p>"));let o=new e.utils.JSZip,i=[];n||await new Promise(e=>{let t=()=>setTimeout(()=>0==h.length&&e()||t(),10);t()});for(let e in a)"uploaded"!=a[e].uploadStatus&&(o.file(a[e].name,a[e].data),a[e].uploadStatus="uploading",i.push(a[e]));let s={};h.push(s),o.generateAsync({compression:"DEFLATE",type:"blob"}).then((function(o){window.PennController.downloadRecordingsArchive=()=>e.utils.saveAs(o,"RecordingsArchive.zip");let a=e.utils.guidGenerator()+".zip";var d=new File([o],a);if(l.match(/^aws:/i))e.debug.error("The 'aws:' prefix in InitiateRecorder is no longer supported");else{var c=new FormData;c.append("fileName",a),c.append("file",d),c.append("mimeType","application/zip");var u=new XMLHttpRequest;u.open("POST",l,!0),u.onreadystatechange=()=>{if(4==u.readyState){let l=200==u.status&&!u.responseText.match(/problem|error/i);if(console.log("Upload XHR response",u),l){"string"==typeof u.response&&u.response.match(/"filename":/)&&(a=JSON.parse(u.response).filename),e.controllers.running.save("PennController","UploadRecordings","Filename",a,Date.now(),n?"async":"NULL"),e.controllers.running.save("PennController","UploadRecordings","Status","Success",Date.now(),n?"async":"NULL"),e.debug.log("Recordings sent to the server");for(let e=0;e<i.length;e++)i[e].uploadStatus="uploaded";n||t()}else{e.controllers.running.save("PennController","UploadRecordings","Filename",a,Date.now(),n?"async":"NULL");for(let e=0;e<i.length;e++)i[e].uploadStatus="local";window.PennController.UploadRecordingsError=u.responseText||"error",e.debug.error("MediaRecorder's Ajax post failed. ("+u.status+")",u.responseText),e.controllers.running.save("PennController","UploadRecordings","Status","Failed",Date.now(),"Error Text: "+u.responseText+"; Status: "+u.status),r.element.append($("<p>There was an error uploading the recordings: "+u.responseText+"</p>")).append($("<p>Please click here to download a copy of your recordings in case you need to send them manually.</p>").bind("click",()=>{e.utils.saveAs(o,"RecordingsArchive.zip"),n||t()}).addClass("Message-continue-link"))}h=h.filter(e=>e!=s)}},u.send(c)}})),n&&t()}));for(let e=0;e<p.length;e++)uploadzipController.log(...p[e]);return r},e.Prerun(()=>{let t=window.conf_modifyRunningOrder;window.conf_modifyRunningOrder=function(n){if(t instanceof Function&&(n=t.apply(this,[n])),!d)return n;let r=!1,o=[-1,-1];for(let e=0;e<n.length;++e)for(let t=0;t<n[e].length;++t)"PennController"==n[e][t].controller&&"UploadRecordings"==n[e][t].options.id?(r=!0,o[0]>=0&&alert("WARNING: upload of recording archive set AFTER sending of results; check your Sequence definition.")):"__SendResults__"==n[e][t].controller&&o[0]<0&&!r&&(o=[e,t]);let i=window.PennController.UploadRecordings();e.tmpItems.pop();let s=new DynamicElement("PennController",i);return o[0]>=0?n[o[0]].splice(o[1],0,s):n.push([s]),n}}),this.immediate=function(e,t){void 0===e||"string"!=typeof e||0==e.length?e="MediaRecorder":void 0===t&&(t=e),"string"!=typeof t||!t.match(/audio/)||t.match(/video/i)&&!t.match(/no\W*video/i)?"string"==typeof t&&(t.match(/(only\W*video|video\W*only)/i)||t.match(/video/i)&&t.match(/no\W*audio/))?(this.mediaType="video",g=!0):(this.mediaType="video",m=!0,g=!0):(this.mediaType="audio",m=!0),this.id=e,Object.defineProperty(this,"recorder",{get:()=>s[this.mediaType]})},this.uponCreation=function(n){0==l.length&&e.debug.error("Recorder not initiated. Make sure the sequence of items contains an InitiateRecorder PennController."),this.log=!1,this.recordings=[],this.recording=!1,"audio"==this.mediaType?this.mediaPlayer=document.createElement("audio"):"video"==this.mediaType&&(this.mediaPlayer=document.createElement("video")),this.mediaPlayer.setAttribute("controls",!0),this.videoFeedback=$("<div>").css({position:"absolute"}),this.jQueryElement=$("<span>").addClass("PennController-"+this.type.replace(/[\s_]/g,"")+"-ui");let r=$("<button>Record</button>").addClass("PennController-"+this.type.replace(/[\s_]/g,"")+"-record");r.click(()=>{this.mediaPlayer.pause(),this.mediaPlayer.currentTime=0,this.recording?(this.stop(),this.recording=!1,r.text("Record"),clearInterval(null)):(r.text("Stop"),this.recording=!0,this.start())}),this.start=()=>new Promise(e=>{t=this,"recording"==this.recorder.state&&this.recorder.stop(),this.recording=!0,c.push(()=>{this.recordings.push(["Recording","Start",Date.now(),"NULL"]),e()}),this.recorder.start()}),this.stop=()=>new Promise(e=>{this.recording=!1,t=this,u.push(()=>{this.recordings.push(["Recording","Stop",Date.now(),"NULL"]),e()}),"recording"==this.recorder.state?this.recorder.stop():e()}),this.jQueryElement.append($(this.mediaPlayer)).append(r),n()},this.end=function(){if(t=this,"recording"==this.recorder.state&&this.recorder.stop(),this.blob){let t=f(this.mediaType).extension,n=this.id+"."+t,r=a.map(e=>e.name),o=0;for(;r.indexOf(n)>=0;)o++,n=this.id+"-"+o+"."+t;a.push({name:n,data:this.blob,uploadStatus:"local"}),e.controllers.running.save(this.type,this.id,"Filename",n,Date.now(),"NULL")}if(this.log)for(let t in this.recordings)e.controllers.running.save(this.type,this.id,...this.recordings[t])},this.value=function(){return this.blob},this.actions={play:function(e){this.mediaPlayer&&this.mediaPlayer.src?(this.mediaPlayer.currentTime&&0!=this.mediaPlayer.currentTime&&(this.mediaPlayer.currentTime=0),this.mediaPlayer.play().then(()=>e())):e()},record:async function(e){await this.start(),e()},stop:async function(e){await this.stop(),this.mediaPlayer&&this.mediaPlayer.src&&(this.mediaPlayer.pause(),this.mediaPlayer.currentTime&&0!=this.mediaPlayer.currentTime&&(this.mediaPlayer.currentTime=0)),e()},wait:function(e,t){if(t&&"string"==typeof t&&t.match(/first/i)&&this.recordings.length)e();else if(t&&"string"==typeof t&&t.match(/play/i)&&this.mediaPlayer){let t=this.mediaPlayer.onended;this.mediaPlayer.onended=function(...n){t instanceof Function&&t.apply(this,n),e()}}else{let n=!1,r=this.stop;this.stop=()=>new Promise(o=>{r.apply(this).then(()=>{if(o(),!n)if(t instanceof Object&&t._runPromises&&t.success){let r=this.disabled;this.disabled="",t._runPromises().then(t=>{"success"==t&&(n=!0,e()),""==this.disabled&&(this.disabled=r)})}else n=!0,e()})})}}},this.settings={disable:function(e){this.disabled=!0,this.jQueryElement.find("button.PennController-"+this.type+"-record").attr("disabled",!0).css("background-color","brown"),this.jQueryContainer.addClass("PennController-disabled"),this.jQueryElement.addClass("PennController-disabled"),e()},enable:function(e){this.disabled=!1,this.jQueryElement.find("button.PennController-"+this.type+"-record").removeAttr("disabled").css("background-color","red"),this.jQueryContainer.removeClass("PennController-disabled"),this.jQueryElement.removeClass("PennController-disabled"),e()},once:function(e){if(this.recordings.length)this.disabled=!0,this.jQueryElement.find("button.PennController-"+this.type+"-record").attr("disabled",!0).css("background-color","brown");else{let e=this.stop;this.stop=()=>new Promise(t=>{e instanceof Function?e.apply(this).then(t):t(),this.disabled=!0,this.jQueryElement.find("button.PennController-"+this.type+"-record").attr("disabled",!0).css("background-color","brown")})}e()},log:function(e){this.log=!0,e()}},this.test={hasPlayed:function(){return this.hasPlayed},playing:function(){return this.mediaPlayer.currentTime&&!this.mediaPlayer.paused},recorded:function(){return this.blob}}})),window.PennController.DownloadRecordingButton=function(e){return"<button type=\"button\" onclick=\"if (PennController.hasOwnProperty('downloadRecordingsArchive'))  PennController.downloadRecordingsArchive();  else  alert('ERROR: could not find an archive for recordings');\">"+e+"</button>"},window.PennController.DownloadVoiceButton=window.PennController.DownloadRecordingButton,window.PennController.Elements.newVoiceRecorder=e=>window.PennController.Elements.newMediaRecorder(e,"audio"),window.PennController.Elements.getVoiceRecorder=e=>window.PennController.Elements.getMediaRecorder(e)}});