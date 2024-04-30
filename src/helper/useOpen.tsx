import React, { useState, useEffect } from 'react';

export default function useOpen() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(previous => {
            return !previous
        });
    };

    return [isOpen, toggleMenu];
}