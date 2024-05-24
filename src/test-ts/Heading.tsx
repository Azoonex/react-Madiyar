import React from 'react';

interface HeadingProps {
    children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
}

export default Heading;