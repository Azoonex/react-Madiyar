import { useForm, } from "react-hook-form"
import { DevTool } from "@hookform/devtools"
import { SubmitHandler } from "react-hook-form";

type DataFormValue = {
  username: string;
  email: string;
  channel: string;
};


export default function Login() {


  const form = useForm < DataFormValue > ()
  const { register, handleSubmit, control, formState } = form;
  const { errors } = formState
  const onSubmit = (data: DataFormValue) => {
    console.log(data);
  };

  return (
    <div>
      <h1>YouTube Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" {...register("username", {
          required: "username Invalide !"
        })} />
        <p style={{ marginTop: "10px", color: "red" }}>{errors.username?.message}</p>

        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" {...register("email", {
          pattern: {
            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
            message: "not Invaild email"
          }
        })} />
        <p>{errors.email?.message}</p>

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register("channel", {
          requiredF: "Please fill out the form completely"
        })} />
        <p style={{ marginTop: "10px", color: "red" }}>{errors.channel?.message}</p>

        <button>Submit</button>
      </form>

      <DevTool control={control} />
    </div >
  )
}
