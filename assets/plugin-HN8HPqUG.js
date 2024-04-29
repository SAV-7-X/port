function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LinksPlugin-v5sW-rLL.js","assets/index-_h2VBt_F.js","assets/index-CrLcfG9G.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-_h2VBt_F.js";async function r(i,n=!0){const{LinksPlugin:t}=await o(()=>import("./LinksPlugin-v5sW-rLL.js"),__vite__mapDeps([0,1,2])),a=new t;await i.addPlugin(a,n)}export{r as loadLinksPlugin};
