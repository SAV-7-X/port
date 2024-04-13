function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-aqKO23ep.js","assets/index-ClbxyJDX.js","assets/index-DjJq6H9W.css","assets/index-BbN1q0Wi.js","assets/index-CqtfB3RH.js","assets/index-DdSjT9In.js","assets/index-BCPeyjrz.js","assets/index-Cz_Qq1GF.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-ClbxyJDX.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-aqKO23ep.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-BbN1q0Wi.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-CqtfB3RH.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-DdSjT9In.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BCPeyjrz.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-Cz_Qq1GF.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
