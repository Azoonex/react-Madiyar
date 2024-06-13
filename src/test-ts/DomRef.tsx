import React, { useEffect, useRef } from 'react'

export default function DomRef() {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(()=> {
    inputRef.current?.focas()
  })
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  )
}
