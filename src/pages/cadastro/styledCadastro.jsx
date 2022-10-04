import styled from 'styled-components'

const Container = styled.div`
background-color: #154c79;
border:1px solid white;
padding: 40px 0;
border-radius: 20px;
max-width: 300px;
display:flex;
flex-direction: column;
align-items: center;
justify-content:center;
text-align:center;
margin: 7% auto;
.buttonRegister{
    background-color:rgb(20,20,20,0.4);
    border-radius:8px;
    height: 32px;
    margin-top:20px;
    color:white;
    border: none;
    cursor: pointer;
}

.verification{
    color:white;
    font-size:12px;
}
.verification a{
    color:white;
    outline: none;
}

.buttonRegister:focus{  
    background-color: #063970;
    color:grey;
}

h3{
    margin-bottom:15%;
    color:white;
    font-size: 20px;
}
`

export default Container