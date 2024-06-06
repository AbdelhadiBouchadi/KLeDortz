'use client';

import { motion } from 'framer-motion';

const transitionVariants = {
  initial: {
    x: '100%',
    width: '100%',
    opacity: 1,
  },
  animate: {
    x: '0%',
    width: '0%',
    opacity: 0,
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%'],
    opacity: [0, 0],
  },
};

const Transition = ({ endPoint }) => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen flex items-center justify-center text-4xl xl:text-8xl text-white dark:text-black uppercase z-50 bg-black/95 dark:bg-white/95 "
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
      >
        {endPoint}
      </motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-black/90 dark:bg-white/90 "
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut' }}
      ></motion.div>
    </>
  );
};

export default Transition;
