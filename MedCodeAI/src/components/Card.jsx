import { motion } from 'framer-motion';

const Card = ({ children, className = '', ...props }) => {
  return (
    <motion.div
      className={`bg-gradient-to-br from-white to-blue-50/30 rounded-2xl shadow-sm border border-blue-100 p-6 hover:shadow-md hover:shadow-blue-100/50 transition-all duration-200 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
    {children}
    </motion.div>
  );
};

export default Card;