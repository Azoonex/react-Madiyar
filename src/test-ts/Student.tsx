import { AllStudentTypes } from "../types/type"


export default function Student({ allStudent, status }: AllStudentTypes) {
  return (
    <div>
      {allStudent.map(i => {
        return <h1 key={i.id}>{i.title}</h1>
      })}

      {status.name}
      {status.age}
      {status.ispending}
    </div>
  )
}
