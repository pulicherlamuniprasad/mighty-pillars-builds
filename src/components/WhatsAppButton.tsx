 import { motion } from 'framer-motion';
 import { MessageCircle } from 'lucide-react';
 
 const WhatsAppButton = () => {
   const phoneNumber = '919876543210';
   const message = 'Hello! I am interested in your construction and interior design services.';
   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
 
   return (
     <motion.a
       href={whatsappUrl}
       target="_blank"
       rel="noopener noreferrer"
       initial={{ opacity: 0, scale: 0 }}
       animate={{ opacity: 1, scale: 1 }}
       transition={{ delay: 1, duration: 0.5 }}
       whileHover={{ scale: 1.1 }}
       whileTap={{ scale: 0.9 }}
       className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-lg flex items-center justify-center transition-colors duration-300 group"
       aria-label="Chat on WhatsApp"
     >
       <MessageCircle className="w-7 h-7 fill-white" />
       
       {/* Pulse ring */}
       <motion.span
         className="absolute inset-0 rounded-full border-2 border-[#25D366]"
         animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
         transition={{ duration: 1.5, repeat: Infinity }}
       />
       
       {/* Tooltip */}
       <span className="absolute right-16 bg-card text-foreground px-3 py-2 rounded-lg text-sm font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-border">
         Chat with us!
       </span>
     </motion.a>
   );
 };
 
 export default WhatsAppButton;