import axios from "axios"
import { useEffect, useState } from "react"

export type hero = {
  id: number,
  name : string
}

export default function PostHeroPage() {
  const [data, setdata] = useState <hero[]>([])

  useEffect(() => {
    async function getFetching() {
      await axios.get('http://localhost:4000/superhero').then(res => setdata(res.data))
    }
    getFetching()
  }, [])


  return (
    <div  style={{padding: "10px",float:"left"}}>
      {data.map(i => <h2 key={i.id}>{i.name}</h2>)}
    </div>
  )
}
