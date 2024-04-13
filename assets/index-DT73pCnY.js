function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index--SQ0ZjqI.js","assets/index-nd0B8RPr.js","assets/index-u_T-P1vg.css","assets/index-DM_7eFvQ.js","assets/index-BjWQFYdy.js","assets/index-nTcSGFRu.js","assets/index-CZC5_0pA.js","assets/index-CIwNRpVv.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-nd0B8RPr.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index--SQ0ZjqI.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DM_7eFvQ.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BjWQFYdy.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-nTcSGFRu.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CZC5_0pA.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-CIwNRpVv.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
