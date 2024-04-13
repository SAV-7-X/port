function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-CR1GhZoB.js","assets/index-ClbxyJDX.js","assets/index-DjJq6H9W.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-ClbxyJDX.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-CR1GhZoB.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
