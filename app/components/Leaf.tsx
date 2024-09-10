import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface LeafProps {
  delay: number;
}

const Leaf: React.FC<LeafProps> = ({ delay }) => {
  const controls = useAnimation();

  useEffect(() => {
    const animate = async () => {
      // Add delay before starting animation
      await new Promise(resolve => setTimeout(resolve, delay));
      
      while (true) {
        const startY = Math.random() * 100;
        const curveY = (Math.random() - 0.5) * 30;
        const duration = Math.random() * 15 + 2;
        //const duration = 20;

        await controls.start({
          x: ['0vw', '100vw'],
          y: [startY + 'vh', `calc(${startY}vh + ${curveY}px)`],
          rotate: [0, 360],
          transition: { 
            duration: duration,
            ease: [0.43, 0.13, 0.23, 0.96]
          }
        });

        controls.set({ x: '-10vw' });
      }
    };

    animate();
  }, [controls, delay]);

  return (
    <motion.div
      className="absolute w-6 h-6 bg-blue-500 rounded-full opacity-50"
      animate={controls}
      initial={{ x: '-10vw' }}
      style={{
        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"
      }}
    />
  );
};

export default Leaf;