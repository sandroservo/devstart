import { Button, Columns } from "react-bulma-components"
import { BodyImage, BodyForm, Content, Title, SubTitle, ForgotPassword } from "./styles";
import { Input } from "../../components";
import { useForm, Controller } from "react-hook-form"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"

// eslint-disable-next-line
export function Login() {

    const schema = yup.object({
        email: yup.string().required("Por favor preenhaca esse campo").email("Digite um  email válido"),
        password: yup.string().required("Por favor preenhaca esse campo").min(6, "Mínimo 6 caracteres")
    })

    const { control, formState: { errors }, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    })

    const login = (data) => {
        console.log(data)
    }

    return (
        <>
            <Columns>
                <Columns.Column>
                    <BodyImage />
                </Columns.Column>
                <Columns.Column>
                    <BodyForm>
                        <Content>
                            <form onSubmit={handleSubmit(login)} >
                                <Title>Seja bem vindo(a)</Title>
                                <SubTitle>Faça seu login para continuar</SubTitle>
                                <Controller
                                    name="email"
                                    control={control}
                                    // eslint-disable-next-line no-undef
                                    render={({ field: { onChange, value, ref } }) => (
                                        <Input
                                            label="Email"
                                            placeholder="Digite seu Email"
                                            icon="fa-solid fa-envelope"
                                            typeError="danger"
                                            ref={ref}
                                            onChange={onChange}
                                            value={value}
                                            color={errors.email && "danger"}
                                            error={errors.email && errors.email.message}
                                        />
                                    )}
                                />
                                <Controller
                                    name="password"
                                    control={ control }
                                    // eslint-disable-next-line no-undef
                                    render={({ field: { onChange, value, ref } }) => (
                                        <Input
                                            label="Senha"
                                            placeholder="Digite sua Senha"
                                            icon="fa-solid fa-lock"
                                            typeError="danger"
                                            ref={ref}
                                            onChange={onChange}
                                            value={value}
                                            color={errors.password && "danger"}
                                            error={errors.password && errors.password.message}
                                            type="password"
                                        />
                                    )}
                                />
                                <ForgotPassword>Esqueceu a senha?</ForgotPassword>
                                <Button color="link" type="submit">Entrar</Button>
                            </form>
                        </Content>
                    </BodyForm>
                </Columns.Column>
            </Columns>
        </>
    );
}