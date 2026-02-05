 import { useState, useEffect } from 'react';
 import { motion, AnimatePresence } from 'framer-motion';
 
 const PageLoader = () => {
   const [isLoading, setIsLoading] = useState(true);
 
   useEffect(() => {
     const timer = setTimeout(() => setIsLoading(false), 1800);
     return () => clearTimeout(timer);
   }, []);
 
   return (
     <AnimatePresence>
       {isLoading && (
         <motion.div
           initial={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           transition={{ duration: 0.5 }}
           className="fixed inset-0 z-[100] bg-mp-navy flex flex-col items-center justify-center"
         >
           {/* Logo Animation */}
           <motion.div
             initial={{ scale: 0, rotate: -180 }}
             animate={{ scale: 1, rotate: 0 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 mb-6"
           >
             <span className="text-white font-bold text-3xl">MP</span>
           </motion.div>
 
           {/* Brand Name */}
           <motion.h1
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.4, duration: 0.6 }}
             className="text-white text-2xl font-display font-bold mb-2"
           >
             Mighty Pillars
           </motion.h1>
           
           <motion.p
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.6, duration: 0.5 }}
             className="text-white/60 text-sm mb-8"
           >
             Construction & Interior Design
           </motion.p>
 
           {/* Loading Bar */}
           <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
             <motion.div
               initial={{ width: 0 }}
               animate={{ width: '100%' }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
               className="h-full bg-gradient-to-r from-mp-sky to-accent rounded-full"
             />
           </div>
         </motion.div>
       )}
     </AnimatePresence>
   );
 };
 
 export default PageLoader;