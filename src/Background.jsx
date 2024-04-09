// import React from 'react'
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import particlesConfig from './particles-config'

// function Background() {
//   return (
//     <div>
//         <Particles params={particlesConfig} />
//     </div>
//   )
// }

// export default Background;
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const App = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "attract",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#87CEEB",
          opacity: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
        speed: 1,
        straight: false,
        orbit: {
          enable: true,
          rotate: 90, // Adjust the rotation speed (degrees per second)
          radius: 100, // Adjust the radius of the circle
        }, // Adjust the z-axis movement here
        },
        number: {
          density: {
            enable: true,
          },
          value: 300,
        },
        opacity: {
          value: 1,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
        collisions: {
          enable: true,
        },
        links: {
          color: "#87CEEB",
          distance: 150,
          enable: false,
          opacity: 20,
          width: 3,
        },
        zIndex: {
          value: 0, // Adjust the zIndex value as needed
          opacityRate: 1,
          sizeRate: 1,
          velocityRate: 1,
        },
        twinkle: {
          lines: {
            enable: true,
            frequency: 1,
            opacity: 2,
          },
          particles: {
            enable: true,
            frequency: 1,
            opacity: 2,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );
  
  
  

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="z-10"
      />
    );
  }

  return <></>;
};
export default App;