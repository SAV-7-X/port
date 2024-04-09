function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ParallaxMover-BZH3PKai.js","assets/index-BHkBGL0w.js","assets/index--igfi5aV.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BHkBGL0w.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-BZH3PKai.js"),__vite__mapDeps([0,1,2]));return new o},r)}export{l as loadParallaxMover};
