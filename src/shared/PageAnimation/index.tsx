import { AnimatePresence, motion } from "framer-motion";
import { ReactElement } from "react";

interface AnimationProps {
  children: ReactElement;
  initial?: { opacity: number };
  animate?: { opacity: number };
  transition?: { duration: number };
  keyValue?: string;
  className?: string;
}

const AnimationWrapper = ({
  children,
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  transition = { duration: 1 },
  keyValue,
  className,
}: AnimationProps) => {
  return (
    <AnimatePresence>
      <motion.div
        key={keyValue}
        initial={initial}
        animate={animate}
        transition={transition}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimationWrapper;
