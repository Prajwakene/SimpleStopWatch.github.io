// AnimatePresence enables the aniation of components that have been removed from the tree 

// import { motion,AnimatePresence } from 'framer-motion';
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../store';
import { 
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
 } from '../config/motion'

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {/* //if we are on homepage */}
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <img 
            src='./threejs.png'
            alt='logo'
            className='w-8 h-8 object-contain'
            />
          </motion.header>
          <motion.div className='home-content' {...headContainerAnimation}>
          <motion.div  {...headTextAnimation}>
            <h1 className='head-text'>
              LET's <br className='x1:block hidden' />DO IT.
            </h1>
            <motion.div>
              <p className="max-w-md font-normal text-grey-600 text-base">
                create your unique and excusive shirt with our brand-new 3D costomization tool.
                <strong>Unleash your imagination </strong>{" "} and define your own style
                </p>
            </motion.div>
          </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home