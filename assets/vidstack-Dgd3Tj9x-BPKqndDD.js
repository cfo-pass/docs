import{bv as m,M as f,_ as n,bw as y,Q as k,bx as v,T as p,ah as h,by as T,bz as S,bA as F,S as x,a4 as w,bB as b,bg as A,bj as u,W as $}from"./app-BiCKOQWs.js";import{R as E}from"./vidstack-Ccp8mxka-CdN6Hy62.js";let c=null,o=[],d=[];function l(){return c??(c=new AudioContext)}function C(){const s=l(),t=s.createGain();return t.connect(s.destination),o.push(t),t}function M(s,t){const i=l(),e=i.createMediaElementSource(s);return t&&e.connect(t),d.push(e),e}function G(s){const t=o.indexOf(s);t!==-1&&(o.splice(t,1),s.disconnect(),g())}function j(s){const t=d.indexOf(s);t!==-1&&(d.splice(t,1),s.disconnect(),g())}function g(){c&&o.length===0&&d.length===0&&c.close().then(()=>{c=null})}class K{constructor(t,i){this.a=t,this.E=i,this.xa=null,this.Ka=null}get currentGain(){var t,i;return((i=(t=this.xa)==null?void 0:t.gain)==null?void 0:i.value)??null}get supported(){return!0}setGain(t){const i=this.currentGain;if(t!==this.currentGain){if(t===1&&i!==1){this.removeGain();return}this.xa||(this.xa=C(),this.Ka&&this.Ka.connect(this.xa)),this.Ka||(this.Ka=M(this.a,this.xa)),this.xa.gain.value=t,this.E(t)}}removeGain(){this.xa&&(this.Ka&&this.Ka.connect(l().destination),this.eg(),this.E(null))}destroy(){this.li(),this.eg()}li(){if(this.Ka)try{j(this.Ka)}catch{}finally{this.Ka=null}}eg(){if(this.xa)try{G(this.xa)}catch{}finally{this.xa=null}}}class P{constructor(t,i){this.p=t,this.b=i,this.Ya=v(),this.jc=!1,this.ae=!1,this.be=!1,this.fa=new E(this.kc.bind(this)),this.hg=void 0,this.zi=void 0,this.mi(),p(this.ni.bind(this)),f(this.ce.bind(this))}get a(){return this.p.media}get c(){return this.b.delegate.c}ce(){this.ae=!1,this.be=!1,this.fa.$(),this.Ya.empty()}kc(){const t=this.a.currentTime;this.b.$state.realCurrentTime()!==t&&this.Jb(t)}mi(){this.F("loadstart",this.Ma),this.F("abort",this.gg),this.F("emptied",this.oi),this.F("error",this.Q),this.F("volumechange",this.Na)}pi(){this.ae||(this.Ya.add(this.F("loadeddata",this.qi),this.F("loadedmetadata",this.ri),this.F("canplay",this.ed),this.F("canplaythrough",this.si),this.F("durationchange",this.de),this.F("play",this.gc),this.F("progress",this.nb),this.F("stalled",this.ti),this.F("suspend",this.ui),this.F("ratechange",this.vi)),this.ae=!0)}wi(){this.be||(this.Ya.add(this.F("pause",this.ib),this.F("playing",this.xi),this.F("seeked",this.ob),this.F("seeking",this.yi),this.F("ended",this.lc),this.F("waiting",this.ee)),this.be=!0)}F(t,i){return h(this.a,t,i.bind(this))}Ai(t){}Jb(t,i){const e={currentTime:Math.min(t,this.b.$state.seekableEnd()),played:this.a.played};this.c("time-update",e,i)}Ma(t){if(this.a.networkState===3){this.gg(t);return}this.pi(),this.c("load-start",void 0,t)}gg(t){this.c("abort",void 0,t)}oi(){this.c("emptied",void 0,event)}qi(t){this.c("loaded-data",void 0,t)}ri(t){this.wi(),this.c("loaded-metadata",void 0,t),(T||S&&F(this.b.$state.source()))&&this.b.delegate.Ga(this.fe(),t)}fe(){return{provider:x(this.b.$provider),duration:this.a.duration,buffered:this.a.buffered,seekable:this.a.seekable}}gc(t){this.b.$state.canPlay&&this.c("play",void 0,t)}ib(t){this.a.readyState===1&&!this.jc||(this.jc=!1,this.fa.$(),this.c("pause",void 0,t))}ed(t){this.b.delegate.Ga(this.fe(),t)}si(t){this.b.$state.started()||this.c("can-play-through",this.fe(),t)}xi(t){this.jc=!1,this.c("playing",void 0,t),this.fa.Xa()}ti(t){this.c("stalled",void 0,t),this.a.readyState<3&&(this.jc=!0,this.c("waiting",void 0,t))}ee(t){this.a.readyState<3&&(this.jc=!0,this.c("waiting",void 0,t))}lc(t){this.fa.$(),this.Jb(this.a.duration,t),this.c("end",void 0,t),this.b.$state.loop()&&w(this.a.controls)&&(this.a.controls=!1)}ni(){this.b.$state.paused()&&h(this.a,"timeupdate",this.mc.bind(this))}mc(t){this.Jb(this.a.currentTime,t)}de(t){this.b.$state.ended()&&this.Jb(this.a.duration,t),this.c("duration-change",this.a.duration,t)}Na(t){const i={volume:this.a.volume,muted:this.a.muted};this.c("volume-change",i,t)}ob(t){this.Jb(this.a.currentTime,t),this.c("seeked",this.a.currentTime,t),Math.trunc(this.a.currentTime)===Math.trunc(this.a.duration)&&b(this.a.duration)>b(this.a.currentTime)&&(this.Jb(this.a.duration,t),this.a.ended||this.b.player.dispatch(new A("media-play-request",{trigger:t})))}yi(t){this.c("seeking",this.a.currentTime,t)}nb(t){const i={buffered:this.a.buffered,seekable:this.a.seekable};this.c("progress",i,t)}ui(t){this.c("suspend",void 0,t)}vi(t){this.c("rate-change",this.a.playbackRate,t)}Q(t){const i=this.a.error;if(!i)return;const e={message:i.message,code:i.code,mediaError:i};this.c("error",e,t)}}class O{constructor(t,i){this.p=t,this.b=i,this.nc.onaddtrack=this.Bi.bind(this),this.nc.onremovetrack=this.Ci.bind(this),this.nc.onchange=this.Di.bind(this),h(this.b.audioTracks,"change",this.Ei.bind(this))}get nc(){return this.p.media.audioTracks}Bi(t){const i=t.track;if(i.label==="")return;const e=i.id.toString()||`native-audio-${this.b.audioTracks.length}`,a={id:e,label:i.label,language:i.language,kind:i.kind,selected:!1};this.b.audioTracks[u.da](a,t),i.enabled&&(a.selected=!0)}Ci(t){const i=this.b.audioTracks.getById(t.track.id);i&&this.b.audioTracks[u.cc](i,t)}Di(t){let i=this.ig();if(!i)return;const e=this.b.audioTracks.getById(i.id);e&&this.b.audioTracks[u.ea](e,!0,t)}ig(){return Array.from(this.nc).find(t=>t.enabled)}Ei(t){const{current:i}=t.detail;if(!i)return;const e=this.nc.getTrackById(i.id);if(e){const a=this.ig();a&&(a.enabled=!1),e.enabled=!0}}}class I{constructor(t,i){this.a=t,this.b=i,this.scope=m(),this.K=null,this.audioGain=new K(this.a,e=>{this.b.delegate.c("audio-gain-change",e)})}setup(){new P(this,this.b),"audioTracks"in this.media&&new O(this,this.b),f(()=>{this.audioGain.destroy(),this.a.srcObject=null,this.a.removeAttribute("src");for(const t of this.a.querySelectorAll("source"))t.remove();this.a.load()})}get type(){return""}get media(){return this.a}get currentSrc(){return this.K}setPlaybackRate(t){this.a.playbackRate=t}async play(){return this.a.play()}async pause(){return this.a.pause()}setMuted(t){this.a.muted=t}setVolume(t){this.a.volume=t}setCurrentTime(t){this.a.currentTime=t}setPlaysInline(t){n(this.a,"playsinline",t)}async loadSource({src:t,type:i},e){this.a.preload=e||"",y(t)?(this.oc(),this.a.srcObject=t):(this.a.srcObject=null,k(t)?i!=="?"?this.ge({src:t,type:i}):(this.oc(),this.a.src=this.jg(t)):(this.oc(),this.a.src=window.URL.createObjectURL(t))),this.a.load(),this.K={src:t,type:i}}ge(t,i){const e=this.a.querySelector("source[data-vds]"),a=e??document.createElement("source");n(a,"src",this.jg(t.src)),n(a,"type",t.type!=="?"?t.type:i),n(a,"data-vds",""),e||this.a.append(a)}oc(){var t;(t=this.a.querySelector("source[data-vds]"))==null||t.remove()}jg(t){const{clipStartTime:i,clipEndTime:e}=this.b.$state,a=i(),r=e();return a>0&&r>0?`${t}#t=${a},${r}`:a>0?`${t}#t=${a}`:r>0?`${t}#t=0,${r}`:t}}class R{constructor(t,i){this.a=t,this.b=i,this.pb=$(!1),this.he()}get supported(){return this.pb()}he(){var t;!((t=this.a)!=null&&t.remote)||!this.kg||(this.a.remote.watchAvailability(i=>{this.pb.set(i)}).catch(()=>{this.pb.set(!1)}),p(this.Fi.bind(this)))}Fi(){if(!this.pb())return;const t=["connecting","connect","disconnect"],i=this.ie.bind(this);i(),h(this.a,"playing",i);for(const e of t)h(this.a.remote,e,i)}async prompt(){if(!this.supported)throw Error("Not supported on this platform.");return this.la==="airplay"&&this.a.webkitShowPlaybackTargetPicker?this.a.webkitShowPlaybackTargetPicker():this.a.remote.prompt()}ie(t){const i=this.a.remote.state;if(i===this.za)return;const e={type:this.la,state:i};this.b.delegate.c("remote-playback-change",e,t),this.za=i}}class B extends R{constructor(){super(...arguments),this.la="airplay"}get kg(){return"WebKitPlaybackTargetAvailabilityEvent"in window}}export{I as H,B as a};
