import React from "react"

type AccordoneTypes = {
    styles: React.CSSProperties
}


export default function Accordone({ styles }: AccordoneTypes) {
    return (
        <div style={styles}>accordone</div>
    )
}
