function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Bouncer-WaU3gTuo.js","assets/index-nd0B8RPr.js","assets/index-u_T-P1vg.css","assets/Ranges-BR9brq-7.js","assets/ExternalInteractorBase-CIi3zRdK.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-nd0B8RPr.js";class i{constructor(){this.distance=200}load(n){n&&n.distance!==void 0&&(this.distance=n.distance)}}async function a(t,n=!0){await t.addInteractor("externalBounce",async e=>{const{Bouncer:r}=await o(()=>import("./Bouncer-WaU3gTuo.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},n)}export{i as Bounce,a as loadExternalBounceInteraction};
