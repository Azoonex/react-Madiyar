import { useState, useEffect } from 'react';

function detectDevice() {
    const width = window.innerWidth;
    if (width <= 768) {
        return 'mobile';
    } else {
        return 'desktop';
    }
}

export default function useDetectDevice() {
    const [device, setDevice] = useState(detectDevice());

    useEffect(() => {
        function handleResize() {
            setDevice(detectDevice());
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return device;
}