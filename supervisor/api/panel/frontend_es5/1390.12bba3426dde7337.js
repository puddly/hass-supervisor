"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["1390"],{48825:function(t,e,a){a.r(e);var n,r,i,o=a(63038),u=a(9833),s=a(94524),c=a(27862),l=a(52565),d=a(92776),h=a(5776),p=a(21475),f=(a(38419),a(63619),a(31622),a(57243)),v=a(50778),m=a(27486),k=a(36522),_=(a(73729),a(29073),a(56785)),g=a(74617),b=a(28008),y=(0,m.Z)((function(){return[{name:"default_backup_mount",required:!0,selector:{backup_location:{}}}]}));(0,p.Z)([(0,v.Mo)("dialog-hassio-backup-location")],(function(t,e){var a,p,m=function(e){function a(){var e;(0,l.Z)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e=(0,d.Z)(this,a,[].concat(r)),t(e),e}return(0,h.Z)(a,e),(0,c.Z)(a)}(e);return{F:m,d:[{kind:"field",decorators:[(0,v.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,v.SB)()],key:"_dialogParams",value:void 0},{kind:"field",decorators:[(0,v.SB)()],key:"_data",value:void 0},{kind:"field",decorators:[(0,v.SB)()],key:"_waiting",value:void 0},{kind:"field",decorators:[(0,v.SB)()],key:"_error",value:void 0},{kind:"method",key:"showDialog",value:(p=(0,s.Z)((0,u.Z)().mark((function t(e){return(0,u.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this._dialogParams=e;case 1:case"end":return t.stop()}}),t,this)}))),function(t){return p.apply(this,arguments)})},{kind:"method",key:"closeDialog",value:function(){this._data=void 0,this._error=void 0,this._waiting=void 0,this._dialogParams=void 0,(0,k.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){return this._dialogParams?(0,f.dy)(n||(n=(0,o.Z)([' <ha-dialog open scrimClickAction escapeKeyAction .heading="','" @closed="','"> ',' <ha-form .hass="','" .data="','" .schema="','" .computeLabel="','" .computeHelper="','" @value-changed="','" dialogInitialFocus></ha-form> <mwc-button slot="secondaryAction" @click="','" dialogInitialFocus> ',' </mwc-button> <mwc-button .disabled="','" slot="primaryAction" @click="','"> '," </mwc-button> </ha-dialog> "])),this._dialogParams.supervisor.localize("dialog.backup_location.title"),this.closeDialog,this._error?(0,f.dy)(r||(r=(0,o.Z)(['<ha-alert alert-type="error">',"</ha-alert>"])),this._error):f.Ld,this.hass,this._data,y(),this._computeLabelCallback,this._computeHelperCallback,this._valueChanged,this.closeDialog,this._dialogParams.supervisor.localize("common.cancel"),this._waiting||!this._data,this._changeMount,this._dialogParams.supervisor.localize("common.save")):f.Ld}},{kind:"field",key:"_computeLabelCallback",value:function(){var t=this;return function(e){return t._dialogParams.supervisor.localize("dialog.backup_location.options.".concat(e.name,".name"))||e.name}}},{kind:"field",key:"_computeHelperCallback",value:function(){var t=this;return function(e){return t._dialogParams.supervisor.localize("dialog.backup_location.options.".concat(e.name,".description"))}}},{kind:"method",key:"_valueChanged",value:function(t){var e=t.detail.value.default_backup_mount;this._data={default_backup_mount:"/backup"===e?null:e}}},{kind:"method",key:"_changeMount",value:(a=(0,s.Z)((0,u.Z)().mark((function t(){return(0,u.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this._data){t.next=2;break}return t.abrupt("return");case 2:return this._error=void 0,this._waiting=!0,t.prev=4,t.next=7,(0,g.Cl)(this.hass,this._data);case 7:t.next=14;break;case 9:return t.prev=9,t.t0=t.catch(4),this._error=(0,_.js)(t.t0),this._waiting=!1,t.abrupt("return");case 14:this.closeDialog();case 15:case"end":return t.stop()}}),t,this,[[4,9]])}))),function(){return a.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return[b.Qx,b.yu,(0,f.iv)(i||(i=(0,o.Z)([".delete-btn{--mdc-theme-primary:var(--error-color)}"])))]}}]}}),f.oi)},74617:function(t,e,a){a.d(e,{Cl:function(){return s},eX:function(){return o},mw:function(){return i},rE:function(){return u}});var n=a(9833),r=a(94524),i=(a(63619),function(t){return t.BIND="bind",t.CIFS="cifs",t.NFS="nfs",t}({})),o=function(t){return t.BACKUP="backup",t.MEDIA="media",t.SHARE="share",t}({}),u=function(){var t=(0,r.Z)((0,n.Z)().mark((function t(e){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.callWS({type:"supervisor/api",endpoint:"/mounts",method:"get",timeout:null}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)((0,n.Z)().mark((function t(e,a){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.callWS({type:"supervisor/api",endpoint:"/mounts/options",method:"post",timeout:null,data:a}));case 1:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},30338:function(t,e,a){var n=a(97934),r=a(71998),i=a(4576),o=a(36760);t.exports=function(t,e){e&&"string"==typeof t||r(t);var a=o(t);return i(r(void 0!==a?n(a,t):t))}},60933:function(t,e,a){var n=a(40810),r=a(57877),i=a(63983),o=a(12360),u=a(13053),s=a(47645);n({target:"Array",proto:!0},{flatMap:function(t){var e,a=o(this),n=u(a);return i(t),(e=s(a,0)).length=r(e,a,a,n,0,1,t,arguments.length>1?arguments[1]:void 0),e}})},32126:function(t,e,a){a(35709)("flatMap")},25677:function(t,e,a){var n=a(40810),r=a(97934),i=a(63983),o=a(71998),u=a(4576),s=a(30338),c=a(79995),l=a(14181),d=a(92288),h=c((function(){for(var t,e,a=this.iterator,n=this.mapper;;){if(e=this.inner)try{if(!(t=o(r(e.next,e.iterator))).done)return t.value;this.inner=null}catch(i){l(a,"throw",i)}if(t=o(r(this.next,a)),this.done=!!t.done)return;try{this.inner=s(n(t.value,this.counter++),!1)}catch(i){l(a,"throw",i)}}}));n({target:"Iterator",proto:!0,real:!0,forced:d},{flatMap:function(t){return o(this),i(t),new h(u(this),{mapper:t,inner:null})}})},34810:function(t,e,a){a(25677)}}]);
//# sourceMappingURL=1390.12bba3426dde7337.js.map