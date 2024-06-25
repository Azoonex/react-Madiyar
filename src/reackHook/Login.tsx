import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools";

export default function Login() {
  const {control,register,handleSubmit} = useForm()
  return (
    <div>
      <h1>YouTube Form</h1>

      <form>
        <label htmlFor="username">Username</label>
        <input type="text" id="username"  {...register("username")} />

        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" {...register("email")} />

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register("channel")} />

        <button>Submit</button>
        <DevTool control={control} />
      </form>
    </div>
  )
}
