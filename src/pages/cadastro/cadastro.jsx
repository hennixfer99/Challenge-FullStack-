import Container from "./styledCadastro"
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Input from "../../components/input/input.jsx";
import {Link} from 'react-router-dom'


function Cadastro(){

    const Button = ({children, ...rest}) => {
        
        console.log(rest)
        
        return(
            <button className="buttonRegister">{children}</button>
            )
        }
        
        function noLoad(event){
            event.preventDefault()
        }
        
        
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const verifications = yup.object().shape({
        name: yup.string().required('Campo obrigatório!'),
        email: yup.string().email('Email inválido!').required('Campo obrigatório!'),
        contact: yup.string().matches(phoneRegExp, 'Numero de telefone inválido!')
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(verifications),
      });

    return(
        <Container>
                <h3>Cadastre-se</h3>
            <form onSubmit={handleSubmit()}>
                <Input placeholder=" Nome Completo" name="name" error = {errors.name?.message} register={register}/>
                <Input placeholder=" E-mail" name="email" error = {errors.email?.message} register={register}/>
                <Input placeholder=" Telefone" name="contact" error = {errors.contact?.message} register={register}/>
                <p className="verification">Já tem uma conta ? faça o login clicando <Link to = "/login"><span>aqui</span></Link></p>
                <Button type="submit">Cadastrar</Button>
            </form>
        </Container>
    )
}

export default Cadastro