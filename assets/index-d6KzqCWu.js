function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-x_EHNVPu.js","assets/index-_h2VBt_F.js","assets/index-CrLcfG9G.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-_h2VBt_F.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-x_EHNVPu.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
