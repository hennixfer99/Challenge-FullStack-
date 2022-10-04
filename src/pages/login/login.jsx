import Container from "./styledLogin.jsx"
import {Link} from 'react-router-dom'

function Login(){

    return(
        <Container>
            <h3>Login</h3>
            <form>
                <input placeholder= "E-mail" name= "email"/>
                <input placeholder= "Password" name= "password"/>
                <p className="verification">Não tem uma conta ainda ? faça o cadastro clicando <Link to = "/"><span>aqui</span></Link></p>
                <button type="submit">Login</button>
            </form>
        </Container>
    )
}

export default Login