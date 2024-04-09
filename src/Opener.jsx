import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "./utils";
import { faFacebook, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {motion} from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TopButton from "./Topbtn";
const About = () => {
  return (
    <>
    <div className="relative">
      <Canvas
        camera={{
          position: [10, -7.5, -5],
        }}
        style={{ height: "100vh" }}
        className="bg-slate-900"
      >
        <OrbitControls maxDistance={20} minDistance={10} />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCircle />
      </Canvas>
      <div className="absolute flex  flex-col justify-center items-center text-center top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white  text-4xl md:text-5xl">
      <motion.p className="py-4" style={{fontFamily:'serif,monospace' , }}
     initial={{opacity:0 , scale: 0}}
     whileInView={{opacity: 1 , scale: 1}}
     viewport={'once'}
    transition={{duration: 2 , ease:'easeInOut'}}
      >
        HI
      </motion.p>
      <motion.p className="py-4" style={{fontFamily:'serif,monospace'}}
      
      initial={{opacity:0 , scale: 0}}
     whileInView={{opacity: 1 , scale: 1}}>I AM ADARSH VERMA</motion.p>



      <motion.div className='flex space-x-10 py-4'> 
<motion.div
        className=""
        whileHover={{ scale: 1.2 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <FontAwesomeIcon className='block py-4 text-4xl text-white' icon={faFacebook} />
      </motion.div>

      <motion.div
        className=""
        whileHover={{ scale: 1.2 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <FontAwesomeIcon className='block py-4 text-4xl text-white' icon={faInstagram} />
      </motion.div>

      <motion.div
        className=""
        whileHover={{ scale: 1.2 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <FontAwesomeIcon className='block py-4 text-4xl text-white' icon={faGithub} />
      </motion.div>

      <motion.div
        className=""
        whileHover={{ scale: 1.2 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <FontAwesomeIcon className='block py-4 text-4xl text-white' icon={faLinkedin} />
      </motion.div>
      </motion.div>
      </div>
 
    </div>
    <TopButton/>
    </>
  );
};

const PointCircle = () => {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
};

export default About;