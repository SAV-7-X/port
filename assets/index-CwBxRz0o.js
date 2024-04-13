function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-DVRaXgu4.js","assets/index-nd0B8RPr.js","assets/index-u_T-P1vg.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-nd0B8RPr.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-DVRaXgu4.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
