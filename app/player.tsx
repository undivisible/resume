"use client";
import React, { useEffect } from 'react';
import anime from 'animejs'; // Import the anime library

const player: React.FC = () => {
    useEffect(() => {
        anime({
            targets: '.one',
            translateY: [-50, 0],
            opacity: 1,
            easing: 'easeOutSine',
            duration: 2000,
            delay: anime.stagger(100), // Adjust the delay for the start of each animation
        });
        anime({
            targets: '.two',
            translateX: [-50, 0],
            opacity: [0, 1],
            easing: 'easeOutSine',
            duration: 2000,
            delay: anime.stagger(100), // Adjust the delay for the start of each animation
        });
        anime({
            targets: '.three',
            translateY: [50, 0],
            opacity: [0, 1],
            easing: 'easeOutSine',
            duration: 2000,
            delay: anime.stagger(100), // Adjust the delay for the start of each animation
        });
        anime({
            targets: '.four',
            translateX: [50, 0],
            opacity: [0, 1],
            easing: 'easeOutSine',
            duration: 2000,
            delay: anime.stagger(100), // Adjust the delay for the start of each animation
        });
    }, []);
    return null; // No need to render anything for this component
};

export default player;