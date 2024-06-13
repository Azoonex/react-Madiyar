import { useRef, useState } from "react"

export default function Counter() {
    const [timer,setTimer] = useState(0)
    const interRef = useRef<Number | undefined>(null);
    
    const stopTimer = ()=>{
        if(interRef.current)window.clearInterval(interRef.current)
    }

    useEffect(() => {
        interRef.current = window.setInterval(()=>{
            setTimer((timer) => timer + 1)
        },1000)

        return ()=>{
            stopTimer()
        }
    })
    
  return (
    <div>
        HookTimer - {timer} - 
        <button onClick={()=> stopTimer()}>Stop Timer</button>
    </div>
  )
}


// type useRef hook