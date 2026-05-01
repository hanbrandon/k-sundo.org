'use client';

import { motion } from 'motion/react';

interface FlipLinkProps {
  children: string;
  href: string;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href, onClick, className = "" }: FlipLinkProps) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hover"
      href={href}
      onClick={onClick}
      className={`relative block overflow-hidden whitespace-nowrap ${className}`}
      style={{
        lineHeight: 0.85,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hover: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l === " " ? "\u00A0" : l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hover: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l === " " ? "\u00A0" : l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default FlipLink;
