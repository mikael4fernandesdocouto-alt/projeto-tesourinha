'use client';
import { motion, useReducedMotion } from 'framer-motion';
export default function Template({children}:{children:React.ReactNode}){const reduced=useReducedMotion();return <motion.div initial={false} animate={reduced?{}:{opacity:[0.85,1]}} transition={{duration:0.25}}>{children}</motion.div>}
