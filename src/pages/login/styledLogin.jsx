import styled from 'styled-components'

const Container = styled.div`

    background-color: #154c79;
    border:1px solid white;
    padding: 10px 0;
    border-radius: 20px;
    max-width: 300px;
    height: 350px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    text-align:center;
    margin: 7% auto;
    
    form{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 0 15px;
    }
    input{
    height: 40px;
    border-radius: 8px;
    padding: 0 10px;
    text-align: left;
    margin-bottom: 20px;;
    }
    h3{
    margin-bottom:10%;
    color:white;
    font-size: 20px;
    }

    p{
        color: white;
        font-size:12px;
    }
    a{
        color: white;
    }

    button{
    background-color:rgb(20,20,20,0.4);
    border-radius:8px;
    height: 32px;
    color:white;
    border: none;
    cursor: pointer;
    margin: 10px auto 15px auto;
    max-width: 60px;
    }

    button:focus{ 
    background-color: #063970;
    color:grey;
    }

`

export default Container