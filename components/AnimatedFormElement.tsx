import { AnimatedFormElementProps } from "@/types/types";
import { motion } from "motion/react";

const AnimatedFormElement = ({
  children,
  delay = 0,
}: AnimatedFormElementProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedFormElement;
