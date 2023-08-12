import CuisinesMenu from '../components/CuisinesMenu'
import NoGluten from '../components/NoGluten'
import Popular from '../components/Popular'
import Vegeterian from '../components/Vegeterian'
import { motion } from 'framer-motion'

function Home() {
  return (
    <motion.div
     animate={{opacity:1}}
     initial={{opacity:0}}
     exit={{opacity:0}}
     transition={{duration:1}}
    >
        <Popular />
        <Vegeterian />
        <NoGluten />
    </motion.div>
  )
}

export default Home