'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface ScrollRevealProps {
    children: React.ReactNode;
    direction?: Direction;
    delay?: number;
    duration?: number;
    className?: string;
    distance?: number;
    amount?: 'some' | 'all' | number;
    once?: boolean;
}

export default function ScrollReveal({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.8,
    className = '',
    distance = 40,
    amount = 0.2, // Trigger when 20% visible
    once = true
}: ScrollRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount });

    const getVariants = () => {
        const hidden = {
            opacity: 0,
            x: direction === 'left' ? -distance : direction === 'right' ? distance : 0,
            y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
        };

        const visible = {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: duration,
                delay: delay,
                ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], // matches original Prestige snap ease
            }
        };

        return { hidden, visible };
    };

    return (
        <motion.div
            ref={ref}
            variants={getVariants()}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={className}
            style={{ willChange: "opacity, transform" }}
        >
            {children}
        </motion.div>
    );
}
