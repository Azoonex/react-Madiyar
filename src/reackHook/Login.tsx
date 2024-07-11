import { DevTool } from "@hookform/devtools";
import { FormValues } from "./types_form";
import { useForm, FieldErrors } from "react-hook-form";
import { useEffect } from "react";

export default function Login() {
  const form = useForm<FormValues>();
  const { control, register, handleSubmit, formState, watch, getValues, setValue, isValid, isDirty } = form;
  const { errors, touchedFields, dirtyFields } = formState;

  const onSbmite = (data: FormValues) => {
    console.log('Form submit', data);
  }

  const watchUserName = watch(["username", "email"]);

  function handleGetValues() {
    console.log("get values", getValues(["username", "channel"]));
  }

  function handlesetValue() {
    setValue("username", "", {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true
    })
  }

  function onError(errors: FieldErrors<FormValues>) {
    console.log("form errors", errors);
  }

  // useEffect(() => {
  //   const subscribon = watch((value) => {
  //     console.log(value);
  //   })

  //   return () => { subscribon.unsubscribe() }

  // }, [watch])

  return (
    <div>
      <h1>YouTube Form</h1>
      <h2>watched value : {watchUserName}</h2>
      <form onSubmit={handleSubmit(onSbmite, onError)}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" {...register("username", {
          required: 'UserName is required !',
          validate: (value) => {
            return (
              value === 'amirabas' || 'not work this is name'
            )
          }
        })} />
        <p>{errors.username?.message}</p>

        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" {...register("email", {
          pattern: {
            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
            message: "Invalid format"
          },
        })} />
        <p>{errors.email?.message}</p>

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register("channel", {
          disabled: watch("username") === "",
          required: {
            value: true,
            message: "This is not a valid channel"
          }
        })} />
        <p>{errors.channel?.message}</p>

        <label htmlFor="age">Age</label>
        <input type="number" id="age" {...register("age", {
          valueAsNumber: true,
          required: {
            value: true,
            message: "This is not a valid age"
          }
        })} />
        <p>{errors.age?.message}</p>

        <button disabled={isValid || isDirty} style={{ marginBlock: "10px" }}>Submit</button>
        <button onClick={handleGetValues} type="button">getValues</button>
        <button onClick={handlesetValue} type="button">setValue</button>
        <DevTool control={control} />
      </form>
    </div>
  )
}