import { AnimatedFormErrorMessageProps } from "@/types/types";
import { motion } from "motion/react";

const AnimatedFormErrorMessage = ({
  message,
}: AnimatedFormErrorMessageProps) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="text-red-500"
    >
      {message}
    </motion.p>
  );
};

export default AnimatedFormErrorMessage;
