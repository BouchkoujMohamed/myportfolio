
import { RiReactjsLine } from "react-icons/ri";
import { RiJavascriptLine } from "react-icons/ri";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa6";
import { RiNodejsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiSanity } from "react-icons/si";
import { motion } from "framer-motion"
const Aconvaraints = (duration)=>({
    initial:{y:-10},
    animate:{
        y:[10 ,-10],
        transition:{duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"

        }
    }


})
function Technologies() {
  return (
    <div  
    className="border-b border-neutral-800 pb-24">
        <motion.h1
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1}}
        className="my-20 text-center text-4xl">Technologies
        </motion.h1>

        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">

            <motion.div
            variants={Aconvaraints(2.5)} 
            initial="initial"
            animate="animate"

            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssLine className="text-7xl text-cyan-400"/>
            </motion.div>

            <motion.div 
            variants={Aconvaraints(3)} 
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiJavascriptLine className="text-7xl text-yellow-500"/>
            </motion.div>
            
            
            <motion.div 
            variants={Aconvaraints(5)} 
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>

            {/* <motion.div
            variants={Aconvaraints(6)} 
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiNodejsLine className="text-7xl text-green-600"/>
            </motion.div> */}
            
            <motion.div 
            variants={Aconvaraints(5)} 
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaLaravel className="text-7xl text-red-700"/>
            </motion.div>

            <motion.div 
            variants={Aconvaraints(3)} 
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className="text-7xl text-[#38758f]"/>
            </motion.div>
            
            <motion.div 
            variants={Aconvaraints(2)} 
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-green-500"/>
            </motion.div>

            <motion.div 
            variants={Aconvaraints(2.5)} 
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiSanity className="text-7xl text-[#e74332]"/>
            </motion.div>
            
            <motion.div 
            variants={Aconvaraints(3)} 
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGitAlt className="text-7xl text-[#e74b2b]"/>
            </motion.div>
            

        </motion.div>
      
    </div>
  )
}

export default Technologies
