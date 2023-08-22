"use client"
import { useForm } from 'react-hook-form'


export default function Form() {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data: any) => console.log(data)

  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="problem">Problem:</label>
          <input id="problem" {...register("email")} />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <input id="content" {...register("password")}/>
        </div>
        <button type="submit">保存</button>
      </form>
    </main>
  ) 
}