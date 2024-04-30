import { useState } from 'react';

export default function useOpen(): [boolean, () => void] {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };

    return [isOpen, toggleMenu];
}