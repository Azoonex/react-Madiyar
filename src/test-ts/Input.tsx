import React from "react"

type InputPorps = {
    value:string
    handchange:(evnet: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input({ value, handchange }:InputPorps) {
    

  return (
    <input type="text" value={value} onChange={handchange} />
  )
}
