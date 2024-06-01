import { useForm, } from "react-hook-form"
import { DevTool } from "@hookform/devtools"
import { SubmitHandler } from "react-hook-form";

type DataFormValue = {
  username: string;
  email: string;
  channel: string;
};

export default function Login() {



  const { register, handleSubmit, control } = useForm < DataFormValue > ();

  const onSubmit: SubmitHandler<DataFormValue> = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1>YouTube Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" {...register("username")} />

        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" {...register("email")} />

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register("channel")} />

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div >
  )
}
