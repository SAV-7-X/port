function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-DysX2X5b.js","assets/index-BHkBGL0w.js","assets/index--igfi5aV.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-BHkBGL0w.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-DysX2X5b.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
