import Styled from './styles'
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
        <Styled.Body>
            <Styled.Form onSubmit={handleSubmit(handleForm)}>
                <h1>Login</h1>
                <Styled.Field>
                    <label htmlFor="email">Insert email</label>
                    <Styled.Input type="text" name="email" id="email" placeholder="example@gmail.com" {...register('email', {required: true})} />
                    <p>{formState.errors && errors[formState.errors?.email?.type]}</p>
                </Styled.Field>
                <Styled.Field>
                    <label htmlFor="password">Insert password</label>
                    <Styled.Input type="password" name="password" id="password" placeholder="*********" {...register('password', {required: true, minLength: 4})} />
                    <p>{formState.errors && errors[formState.errors?.password?.type]}</p>
                </Styled.Field>
                <Styled.Input type="submit" />
            </Styled.Form>
            <Styled.Footer>
                <p>¿Todavía no tienes cuenta?</p>
                <Styled.Signup>
                    <Styled.Anchor href='/register'>Registrate aquí</Styled.Anchor>
                </Styled.Signup>
            </Styled.Footer>
        </Styled.Body>
    )
}

export default Login