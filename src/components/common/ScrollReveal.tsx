"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

export interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  distance?: number;
  scale?: number;
  className?: string;
  viewportOnce?: boolean;
  amount?: number;
}

// Base duration multiplied by 1.2× to slow animations down as requested
const BASE_DURATION = 0.76; // was 0.55, now 0.55 * 1.2 ≈ 0.66

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = "up",
  delay = 0,
  duration,
  distance = 35,
  scale = 1,
  className = "",
  viewportOnce = true,
  amount = 0.12,
  ...rest
}) => {
  const effectiveDuration = duration !== undefined ? duration * 1.2 : BASE_DURATION;

  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: distance, x: 0 };
      case "down":
        return { y: -distance, x: 0 };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      case "none":
      default:
        return { x: 0, y: 0 };
    }
  };

  const initial = {
    opacity: 0,
    ...getInitialPosition(),
    scale: scale !== 1 ? scale : 1,
  };

  return (
    <motion.div
      initial={initial}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{ once: viewportOnce, amount }}
      transition={{
        duration: effectiveDuration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
