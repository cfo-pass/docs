import{U as l,ao as vs,ap as qs,M as ds,aq as u,a2 as Ns,ar as bs,as as Ts,ag as a,at as ks,N as x,T as c,_ as r,au as fs,av as Ys,aw as $s,ax as ws,ay as Ws,az as Os,aA as Ss,aB as As,aC as Zs,aD as zs,aE as Ds,aF as Fs,aG as Ks,aH as Us,aI as Js,aJ as Xs,aK as Ls,aL as Cs,aM as js,aN as Qs,aO as Is,aP as Vs,aQ as Ps,aR as ys,aS as Ht,Q as Tt,aT as Bs,aU as Rs,aV as Gs,aW as Es,W as _s,aX as Ms,Y as ta,K as sa,ai as Hs,aY as aa,aZ as ea,a_ as ia,a$ as na,b0 as ca,b1 as oa,b2 as ra,b3 as ha,b4 as ma,b5 as la,b6 as pa,b7 as ga,b8 as ua,b9 as xa,ba as da,an as s}from"./app-BiCKOQWs.js";import{L as Na,x as ba}from"./vidstack-rsZGrNIW-BiUwPbUx.js";import{MediaPosterElement as Ha}from"./vidstack-fhDp_Jh9-DAcvdfZA.js";class Ta extends l{onAttach(t){t.style.pointerEvents||vs(t,"pointer-events","auto")}}class fa extends l{constructor(){super(),new qs}onConnect(t){ds(u(()=>{if(!this.connectScope)return;this.xb();const e=Ns(bs);ds(()=>{const i=this.Bd();i&&e._e(i)})}))}xb(){const t=this.Bd(),e=Ns(bs);t&&e.Ze(t)}Bd(){const t=this.el.firstElementChild;return(t==null?void 0:t.localName)==="button"||(t==null?void 0:t.getAttribute("role"))==="button"?t:this.el}}class La extends Ts{}const Ca=ys('<img loading="eager" decoding="async" aria-hidden="true">'),b=class b extends a(HTMLElement,ks){constructor(){super(...arguments),this.Wm=this.nn()}onSetup(){this.a=x(),this.$state.img.set(this.Wm)}onConnect(){const{src:t,crossOrigin:e}=this.$state;this.Wm.parentNode!==this&&this.prepend(this.Wm),c(()=>{r(this.Wm,"src",t()),r(this.Wm,"crossorigin",e())})}nn(){return fs(Ca)}};b.tagName="media-thumbnail",b.attrs={crossOrigin:"crossorigin"};let N=b;const ft=class ft extends a(HTMLElement,Ys){onConnect(){c(()=>{this.textContent=this.$state.timeText()})}};ft.tagName="media-time";let L=ft;const Lt=class Lt extends a(HTMLElement,$s){};Lt.tagName="media-airplay-button";let C=Lt;const Ct=class Ct extends a(HTMLElement,ws){};Ct.tagName="media-caption-button";let y=Ct;const yt=class yt extends a(HTMLElement,Ws){};yt.tagName="media-fullscreen-button";let v=yt;const vt=class vt extends a(HTMLElement,Os){};vt.tagName="media-live-button";let q=vt;const qt=class qt extends a(HTMLElement,Ss){};qt.tagName="media-mute-button";let k=qt;const kt=class kt extends a(HTMLElement,As){};kt.tagName="media-pip-button";let Y=kt;const Yt=class Yt extends a(HTMLElement,Zs){};Yt.tagName="media-play-button";let $=Yt;const $t=class $t extends a(HTMLElement,zs){};$t.tagName="media-seek-button";let w=$t;function g(h,t){u(()=>{if(!h.connectScope)return;const e=h.querySelector("template");e&&c(()=>{const i=h.getOptions();Ht(e,i.length,(n,m)=>{const{label:o,value:d}=i[m],p=n.querySelector('[data-part="label"]');n.setAttribute("value",d),p&&(Tt(o)?p.textContent=o:c(()=>{p.textContent=o()})),t==null||t(n,i[m],m)})})})}const wt=class wt extends a(HTMLElement,Ds){onConnect(){g(this)}};wt.tagName="media-audio-radio-group";let W=wt;const Wt=class Wt extends a(HTMLElement,Fs){onConnect(){g(this)}};Wt.tagName="media-captions-radio-group";let O=Wt;const Ot=class Ot extends a(HTMLElement,Ks){};Ot.tagName="media-menu";let S=Ot;const St=class St extends a(HTMLElement,Ts){};St.tagName="media-menu-button";let A=St;const At=class At extends a(HTMLElement,La){};At.tagName="media-menu-item";let Z=At;const Zt=class Zt extends a(HTMLElement,Us){};Zt.tagName="media-menu-items";let z=Zt;const zt=class zt extends a(HTMLElement,Js){onConnect(){g(this)}};zt.tagName="media-speed-radio-group";let D=zt;const Dt=class Dt extends a(HTMLElement,Xs){onConnect(){g(this,(t,e)=>{const i=e.bitrate,n=t.querySelector('[data-part="bitrate"]');i&&n&&c(()=>{n.textContent=i()||""})})}};Dt.tagName="media-quality-radio-group";let F=Dt;const Ft=class Ft extends N{onSetup(){super.onSetup(),this.ia=Ls(Cs.state)}onConnect(){super.onConnect(),c(this.Yh.bind(this))}Yh(){const{duration:t,clipStartTime:e}=this.a.$state;this.time=e()+this.ia.pointerRate()*t()}};Ft.tagName="media-slider-thumbnail";let K=Ft;const H=class H extends a(HTMLElement,js){onConnect(){c(()=>{this.textContent=this.getValueText()})}};H.tagName="media-slider-value",H.attrs={padMinutes:{converter:Qs}};let U=H;const Kt=class Kt extends a(HTMLElement,Is){};Kt.tagName="media-time-slider";let J=Kt;const Ut=class Ut extends a(HTMLElement,Vs){};Ut.tagName="media-slider-preview";let X=Ut;const Jt=class Jt extends a(HTMLElement,Ps){};Jt.tagName="media-volume-slider";let j=Jt;const Xt=class Xt extends a(HTMLElement,Bs){};Xt.tagName="media-captions";let Q=Xt;const jt=class jt extends a(HTMLElement,Rs){};jt.tagName="media-gesture";let I=jt;const Qt=class Qt extends a(HTMLElement,Gs){};Qt.tagName="media-announcer";let V=Qt;const It=class It extends a(HTMLElement,Es){};It.tagName="media-controls";let P=It;const Vt=class Vt extends a(HTMLElement,Ta){};Vt.tagName="media-controls-group";let B=Vt;class ya extends l{}const Pt=class Pt extends a(HTMLElement,ya){onSetup(){this.a=x()}onConnect(){c(this.td.bind(this))}td(){const{title:t}=this.a.$state;this.textContent=t()}};Pt.tagName="media-title";let R=Pt;const Bt=class Bt extends l{};Bt.props={defaultText:""};let G=Bt;const Rt=class Rt extends a(HTMLElement,G){onSetup(){this.a=x(),this.bn=_s("")}onConnect(){const t=this.a.textTracks;Ms(t,"chapters",this.bn.set),c(this.pn.bind(this))}pn(){const{defaultText:t}=this.$props;this.textContent=this.bn()||t()}};Rt.tagName="media-chapter-title";let E=Rt;const Gt=class Gt extends l{onConnect(t){u(()=>{if(!this.connectScope)return;const e=t.querySelector("svg"),i=e.firstElementChild,n=i.nextElementSibling;c(this.Ha.bind(this,e,i,n))})}Ha(t,e,i){const{size:n,trackWidth:m,fillPercent:o}=this.$props;r(t,"width",n()),r(t,"height",n()),r(e,"stroke-width",m()),r(i,"stroke-width",m()),r(i,"stroke-dashoffset",100-o())}};Gt.props={size:96,trackWidth:8,fillPercent:50};let _=Gt;const Et=class Et extends a(Na,_){render(){return ba`
      <svg fill="none" viewBox="0 0 120 120" aria-hidden="true" data-part="root">
        <circle cx="60" cy="60" r="54" stroke="currentColor" data-part="track"></circle>
        <circle
          cx="60"
          cy="60"
          r="54"
          stroke="currentColor"
          pathLength="100"
          stroke-dasharray="100"
          data-part="track-fill"
        ></circle>
      </svg>
    `}};Et.tagName="media-spinner";let M=Et;const _t=class _t extends l{};_t.props={when:!1};let tt=_t;const Mt=class Mt extends a(HTMLElement,tt){onSetup(){this.a=x()}onConnect(){c(this.qn.bind(this))}qn(){const t=this.firstElementChild,e=(t==null?void 0:t.localName)==="template",i=this.$props.when();if(!(ta(i)?i:sa(()=>i(this.a.player.state))())){e?(this.textContent="",this.appendChild(t)):Hs(t)&&(t.style.display="none");return}e?this.append(t.content.cloneNode(!0)):Hs(t)&&(t.style.display="")}};Mt.tagName="media-layout";let st=Mt;const ts=class ts extends a(HTMLElement,aa){};ts.tagName="media-google-cast-button";let at=ts;const ss=class ss extends a(HTMLElement,ea){};ss.tagName="media-toggle-button";let et=ss;const as=class as extends a(HTMLElement,ia){};as.tagName="media-tooltip";let it=as;const es=class es extends a(HTMLElement,fa){onConnect(){this.style.display="contents"}};es.tagName="media-tooltip-trigger";let nt=es;const is=class is extends a(HTMLElement,na){};is.tagName="media-tooltip-content";let ct=is;const T=class T extends a(HTMLElement,ca){};T.tagName="media-menu-portal",T.attrs={disabled:{converter(t){return Tt(t)?t:t!==null}}};let ot=T;const ns=class ns extends a(HTMLElement,oa){onConnect(){g(this,(t,e)=>{const{cue:i,startTime:n,duration:m}=e,o=t.querySelector(".vds-thumbnail,media-thumbnail"),d=t.querySelector('[data-part="start-time"]'),p=t.querySelector('[data-part="duration"]');d&&(d.textContent=n),p&&(p.textContent=m),o&&(o.setAttribute("time",i.startTime+""),c(()=>{const f=this.$props.thumbnails();"src"in o?o.src=f:Tt(f)&&o.setAttribute("src",f)}))})}};ns.tagName="media-chapters-radio-group";let rt=ns;const cs=class cs extends a(HTMLElement,ra){onConnect(){g(this)}};cs.tagName="media-audio-gain-radio-group";let ht=cs;const os=class os extends a(HTMLElement,ha){};os.tagName="media-radio";let mt=os;const rs=class rs extends a(HTMLElement,ma){};rs.tagName="media-radio-group";let lt=rs;const hs=class hs extends a(HTMLElement,Cs){};hs.tagName="media-slider";let pt=hs;const va=ys('<video muted playsinline preload="none" style="max-width: unset;"></video>'),ms=class ms extends a(HTMLElement,la){constructor(){super(...arguments),this.m=this.an()}onSetup(){this.a=x(),this.$state.video.set(this.m)}onConnect(){const{canLoad:t}=this.a.$state,{src:e,crossOrigin:i}=this.$state;this.m.parentNode!==this&&this.prepend(this.m),c(()=>{r(this.m,"crossorigin",i()),r(this.m,"preload",t()?"auto":"none"),r(this.m,"src",e())})}an(){return fs(va)}};ms.tagName="media-slider-video";let gt=ms;const ls=class ls extends a(HTMLElement,pa){};ls.tagName="media-audio-gain-slider";let ut=ls;const ps=class ps extends a(HTMLElement,ga){};ps.tagName="media-speed-slider";let xt=ps;const gs=class gs extends a(HTMLElement,ua){};gs.tagName="media-quality-slider";let dt=gs;const us=class us extends a(HTMLElement,xa){constructor(){super(...arguments),this.Ym=null}onConnect(){u(()=>{if(!this.connectScope)return;const t=this.querySelector("template");t&&(this.Ym=t,c(this.un.bind(this)))})}un(){if(!this.Ym)return;const t=Ht(this.Ym,this.cues.length||1);this.setRefs(t)}};us.tagName="media-slider-chapters";let Nt=us;class qa extends l{}const xs=class xs extends a(HTMLElement,qa){constructor(){super(...arguments),this.Ym=null}onConnect(t){u(()=>{this.connectScope&&(this.Ym=t.querySelector("template"),this.Ym&&c(this.Zm.bind(this)))})}Zm(){if(!this.Ym)return;const{min:t,max:e,step:i}=Ls(da),n=(e()-t())/i();Ht(this.Ym,Math.floor(n)+1)}};xs.tagName="media-slider-steps";let bt=xs;s(st);s(P);s(B);s(Ha);s(V);s(it);s(nt);s(ct);s($);s(k);s(y);s(v);s(Y);s(w);s(C);s(at);s(et);s(pt);s(ut);s(j);s(J);s(xt);s(dt);s(Nt);s(bt);s(X);s(U);s(K);s(gt);s(S);s(A);s(ot);s(z);s(Z);s(W);s(O);s(D);s(ht);s(F);s(rt);s(lt);s(mt);s(I);s(N);s(Q);s(q);s(L);s(R);s(E);s(M);