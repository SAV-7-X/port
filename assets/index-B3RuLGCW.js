function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BO-8wBl3.js","assets/index-_h2VBt_F.js","assets/index-CrLcfG9G.css","assets/index-DCn3AlsS.js","assets/index-9KQBRvEN.js","assets/index---IkS4Ae.js","assets/index-DZ7CMVwo.js","assets/index-DRodrf69.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-_h2VBt_F.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-BO-8wBl3.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DCn3AlsS.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-9KQBRvEN.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index---IkS4Ae.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-DZ7CMVwo.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DRodrf69.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
