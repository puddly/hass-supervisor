export const ids=["6634"];export const modules={68138:function(i,e,s){s.r(e);var a=s(44249),t=(s(13334),s(87319),s(57243)),o=s(50778),d=s(27486),l=s(36522),c=(s(82104),s(92824),s(73729),s(56785)),r=s(67044),n=s(76131),v=s(28008);const h=(0,d.Z)((i=>{const e=""!==i.host.disk_life_time?30:10,s=1e3*i.host.disk_used/60/e,a=4*i.host.startup_time/60;return 10*Math.ceil((s+a)/10)}));(0,a.Z)([(0,o.Mo)("dialog-hassio-datadisk")],(function(i,e){return{F:class extends e{constructor(...e){super(...e),i(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"dialogParams",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"selectedDevice",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"devices",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"moving",value:()=>!1},{kind:"method",key:"showDialog",value:function(i){this.dialogParams=i,(0,r.ou)(this.hass).then((i=>{this.devices=i.devices}))}},{kind:"method",key:"closeDialog",value:function(){this.dialogParams=void 0,this.selectedDevice=void 0,this.devices=void 0,this.moving=!1,(0,l.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){return this.dialogParams?t.dy` <ha-dialog open scrimClickAction escapeKeyAction .heading="${this.moving?this.dialogParams.supervisor.localize("dialog.datadisk_move.moving"):this.dialogParams.supervisor.localize("dialog.datadisk_move.title")}" @closed="${this.closeDialog}" ?hideActions="${this.moving}"> ${this.moving?t.dy` <ha-circular-progress aria-label="Moving" size="large" indeterminate> </ha-circular-progress> <p class="progress-text"> ${this.dialogParams.supervisor.localize("dialog.datadisk_move.moving_desc")} </p>`:t.dy` ${this.devices?.length?t.dy` ${this.dialogParams.supervisor.localize("dialog.datadisk_move.description",{current_path:this.dialogParams.supervisor.os.data_disk,time:h(this.dialogParams.supervisor)})} <br><br> <ha-select .label="${this.dialogParams.supervisor.localize("dialog.datadisk_move.select_device")}" @selected="${this._select_device}" dialogInitialFocus> ${this.devices.map((i=>t.dy`<mwc-list-item .value="${i}">${i}</mwc-list-item>`))} </ha-select> `:void 0===this.devices?this.dialogParams.supervisor.localize("dialog.datadisk_move.loading_devices"):this.dialogParams.supervisor.localize("dialog.datadisk_move.no_devices")} <mwc-button slot="secondaryAction" @click="${this.closeDialog}" dialogInitialFocus> ${this.dialogParams.supervisor.localize("dialog.datadisk_move.cancel")} </mwc-button> <mwc-button .disabled="${!this.selectedDevice}" slot="primaryAction" @click="${this._moveDatadisk}"> ${this.dialogParams.supervisor.localize("dialog.datadisk_move.move")} </mwc-button>`} </ha-dialog> `:t.Ld}},{kind:"method",key:"_select_device",value:function(i){this.selectedDevice=i.target.value}},{kind:"method",key:"_moveDatadisk",value:async function(){this.moving=!0;try{await(0,r.Sx)(this.hass,this.selectedDevice)}catch(i){this.hass.connection.connected&&!(0,c.yz)(i)&&((0,n.Ys)(this,{title:this.dialogParams.supervisor.localize("system.host.failed_to_move"),text:(0,c.js)(i)}),this.closeDialog())}}},{kind:"get",static:!0,key:"styles",value:function(){return[v.Qx,v.yu,t.iv`ha-select{width:100%}ha-circular-progress{display:block;margin:32px;text-align:center}.progress-text{text-align:center}`]}}]}}),t.oi)}};
//# sourceMappingURL=6634.03ad9f81f9589091.js.map