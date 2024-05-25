import React from "react"

type ButtonProps = {
    handleCLikc: (event:React.MouseEvent<HTMLButtonElement>,id:number) => void
}

export default function Button({ handleCLikc }: ButtonProps) {
    return (
        <div>
            <button onClick={(event) => handleCLikc(event)}>click my</button>
        </div>
    )
}
