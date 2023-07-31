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
          <motion.header {...slideAnimation}>
            <img 
            src='./threejs.png'
            alt='logo'
            className='w-8 h-8 object-contain'
            />
          </motion.header>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home