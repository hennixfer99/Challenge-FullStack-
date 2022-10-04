import { Route, Switch } from "react-router-dom";
import Cadastro from "../cadastro/cadastro.jsx"
import Login from "../login/login.jsx"

function Rota(){

return(
    <Switch>
    <Route path="/" exact component = {Cadastro}/>
    <Route path="/login" exact component = {Login}/>
    </Switch>
)
}

export default Rota