import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools";

type FormValues = {
  username: string,
  email : string,
  channel : string
}


export default function Login() {
  const {control,register,handleSubmit} = useForm<FormValues>()
  const onSbmite = (data: FormValues)=>{
    console.log('Form submit',data);
  }
  return (
    <div>
      <h1>YouTube Form</h1>

      <form onSubmit={handleSubmit(onSbmite)}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username"  {...register("username")} />

        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" {...register("email")} />

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register("channel")} />

        <button style={{marginTop: "10px"}}>Submit</button>
        <DevTool control={control} />
      </form>
    </div>
  )
}
