(self.webpackChunkfe_kids=self.webpackChunkfe_kids||[]).push([[186],{2186:(e,t,i)=>{"use strict";i.r(t),i.d(t,{AllVideosModule:()=>v});var n=i(8583),o=i(5855),s=i(1196),r=i(639),c=i(7611),a=i(665);let d=(()=>{class e{constructor(){this.ICONS=s.UZ,this.search="",this.data=[],this.dataEmitter=new r.vpe}ngOnInit(){this.dataEmitter.emit(this.data)}inputChange(e){let t=this.data.filter(t=>Object.values(t).toString().toLowerCase().includes(e.toLowerCase())?t:null);this.dataEmitter.emit(t)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-searcher"]],inputs:{data:"data"},outputs:{dataEmitter:"dataEmitter"},decls:3,vars:2,consts:[[1,"searcher"],["type","text","placeholder","BUSCAR VIDEO",1,"searcher__input",3,"ngModel","ngModelChange"],["alt","",1,"searcher__img",3,"src"]],template:function(e,t){1&e&&(r.TgZ(0,"div",0),r.TgZ(1,"input",1),r.NdJ("ngModelChange",function(e){return t.search=e})("ngModelChange",function(e){return t.inputChange(e)}),r.qZA(),r._UZ(2,"img",2),r.qZA()),2&e&&(r.xp6(1),r.Q6J("ngModel",t.search),r.xp6(1),r.Q6J("src",t.ICONS.iconSearch,r.LSH))},directives:[a.Fj,a.JJ,a.On],styles:[".searcher[_ngcontent-%COMP%]{display:flex;height:3rem}.searcher__img[_ngcontent-%COMP%]{background-color:var(--primary-color);padding:.6rem;height:100%}.searcher__input[_ngcontent-%COMP%]{background-color:#fff;width:100%;text-align:left;height:100%}"]}),e})();var l=i(9736);function g(e,t){if(1&e){const e=r.EpF();r.TgZ(0,"li",8),r.NdJ("click",function(){const t=r.CHM(e).$implicit;return r.oxw(3).selectedVideo=t.url}),r._UZ(1,"img",9),r.TgZ(2,"h1",10),r._uU(3),r.qZA(),r.TgZ(4,"p",11),r._uU(5),r.qZA(),r.qZA()}if(2&e){const e=t.$implicit;r.xp6(1),r.Q6J("src","https://img.youtube.com/vi/"+e.url+"/hqdefault.jpg",r.LSH),r.xp6(2),r.Oqu(e.song),r.xp6(2),r.Oqu(e.singer)}}function p(e,t){if(1&e&&(r.TgZ(0,"ul",6),r.YNc(1,g,6,3,"li",7),r.qZA()),2&e){const e=r.oxw(2);r.xp6(1),r.Q6J("ngForOf",e.filteredVideos)}}function m(e,t){if(1&e){const e=r.EpF();r.TgZ(0,"section",3),r.TgZ(1,"div"),r.TgZ(2,"app-searcher",4),r.NdJ("dataEmitter",function(t){return r.CHM(e),r.oxw().filteredVideos=t}),r.qZA(),r.qZA(),r.YNc(3,p,2,1,"ul",5),r.qZA()}if(2&e){const e=t.ngIf,i=r.oxw();r.xp6(2),r.Q6J("data",e),r.xp6(1),r.Q6J("ngIf",i.filteredVideos)}}function u(e,t){if(1&e){const e=r.EpF();r.TgZ(0,"app-modal-video",12),r.NdJ("isOpenEmitter",function(){return r.CHM(e),r.oxw().selectedVideo=""}),r.qZA()}if(2&e){const e=r.oxw();r.Q6J("idVideo",e.selectedVideo)}}const f=[{path:"",component:(()=>{class e{constructor(e){this.service=e,this.videos$=this.service.getVideos(),this.selectedVideo="",this.ICONS=s.UZ,this.filteredVideos=[],this.search=""}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(c.D))},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-all-videos"]],decls:4,vars:4,consts:[[1,"container"],["class","videos-section",4,"ngIf"],[3,"idVideo","isOpenEmitter",4,"ngIf"],[1,"videos-section"],[3,"data","dataEmitter"],["class","videos-section__list",4,"ngIf"],[1,"videos-section__list"],["class","videos-section__item",3,"click",4,"ngFor","ngForOf"],[1,"videos-section__item",3,"click"],["alt","",3,"src"],[1,"videos-section__video-title"],[1,"videos-section__video-singer","font-acumin"],[3,"idVideo","isOpenEmitter"]],template:function(e,t){1&e&&(r.TgZ(0,"div",0),r.YNc(1,m,4,2,"section",1),r.ALo(2,"async"),r.qZA(),r.YNc(3,u,1,1,"app-modal-video",2)),2&e&&(r.xp6(1),r.Q6J("ngIf",r.lcZ(2,2,t.videos$)),r.xp6(2),r.Q6J("ngIf",t.selectedVideo))},directives:[n.O5,d,n.sg,l.S],pipes:[n.Ov],styles:["[_nghost-%COMP%]{background-color:var(--gray-light-color);display:block;flex:1}.videos-section[_ngcontent-%COMP%]{text-align:center;padding:6rem 0}.videos-section__title[_ngcontent-%COMP%]{text-align:left;color:var(--primary-color)}.videos-section__list[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;margin-top:1rem;padding-top:2rem;position:relative;z-index:2;grid-gap:3rem 3rem;gap:3rem 3rem;transition:.2s}@media only screen and (min-width: 768px){.videos-section__list[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}}@media only screen and (min-width: 1200px){.videos-section__list[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr 1fr}}.videos-section__item[_ngcontent-%COMP%]{transition:.2s;text-align:left}.videos-section__item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.videos-section__item[_ngcontent-%COMP%]:hover{cursor:pointer}.videos-section__video-title[_ngcontent-%COMP%]{padding-top:.5rem;color:var(--primary-color)}.videos-section__video-singer[_ngcontent-%COMP%]{color:var(--primary-color)}.videos-section__list-button[_ngcontent-%COMP%]{height:3rem;width:8rem;text-align:center;border-radius:2rem;background:var(--primary-color);color:#fff;margin-top:2rem;position:relative;z-index:2}"]}),e})()}];let _=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[[o.Bz.forChild(f)]]}),e})();var h=i(4466);let v=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[[n.ez,_,h.m]]}),e})()}}]);