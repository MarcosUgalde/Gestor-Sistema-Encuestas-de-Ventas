import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { useLocation } from 'wouter'
import { login } from '../../misc/templates'
import { auth } from '../../services'

function Register() {
    const {register, formState, handleSubmit} = useForm()

  const { mutate } = useMutation({
    mutationFn: auth.register,
    onSuccess: (response) => {
      console.log('Response: ', response)
      if(response.success) setLocation('/login')
    }
  })

  const [, setLocation] = useLocation()

  const handleForm = (data) => {
    console.info('Form data: ', data)
    mutate(data)
  }

  const { errors } = login

    return (
        <>
        <form onSubmit={handleSubmit(handleForm)}>
            <h1>Register</h1>
            <section>
                <label htmlFor="email">Email</label>
                <input type="text" id='email' placeholder='example@gmail.com' {...register('email', {required: true})} />
                <p>{formState.errors && errors[formState.errors?.email?.type]}</p>
            </section>
            <section>
                <label htmlFor="username">Username</label>
                <input type="text" id='username' placeholder='username' {...register("username", { required: true})} />
                <p>{formState.errors && errors[formState.errors?.username?.type]}</p>
            </section>
            <section>
                <label htmlFor="password">Password</label>
                <input type="text" id='password' placeholder='Length must be at least 4' {...register('password', {required: true, minLength: 4})} />
                <p>{formState.errors && errors[formState.errors?.password?.type]}</p>
            </section>
            <section>
                <label htmlFor="edit_access">Authorized to edit?</label>
                <select name="edit_access" id="edit_access" {...register('edit_access', {required: true})}>
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                </select>
            </section>
            <input type="submit" />
        </form>
        </>
    )
}

export default Register