import { useForm } from "react-hook-form"
import { useMutation, useQueryClient } from "react-query"
import { useLocation } from 'wouter'
import { useUser } from "../../hooks"
import { useEffect } from "react"
import { login } from "../../misc/templates"
import { auth } from "../../services"

function Login() {
    const { register, formState, handleSubmit } = useForm()
    const[, setLocation] = useLocation()
    const { data } = useUser()

    const queryClient = useQueryClient()

    const { mutate } = useMutation({
        mutationFn: auth.signin,
        onSuccess: (response) => {
            if(response.success) queryClient.invalidateQueries({ queryKey: ['user'] }) && setLocation('/')
        }
    })

    const handleForm = (data) => {
        console.info('Form data: ', data)
        mutate(data)
    }

    useEffect(() => {
        data && setLocation('/')
    }, [data])

    const { errors } = login

    return (
        <>
            <form onSubmit={handleSubmit(handleForm)}>
                <h1>Login</h1>
                <section>
                    <label htmlFor="email">Insert email</label>
                    <input type="text" name="email" id="email" placeholder="example@gmail.com" {...register('email', {required: true})} />
                    <p>{formState.errors && errors[formState.errors?.email?.type]}</p>
                </section>
                <section>
                    <label htmlFor="password">Insert email</label>
                    <input type="password" name="password" id="password" placeholder="*********" {...register('password', {required: true, minLength: 4})} />
                    <p>{formState.errors && errors[formState.errors?.password?.type]}</p>
                </section>
                <input type="submit" />
            </form>
        </>
    )
}

export default Login