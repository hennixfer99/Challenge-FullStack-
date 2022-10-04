import styled,{css} from 'styled-components'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  
  div {
    span {
      color: rgb(255,255,0,1);
      font-size:12px;
      margin: 0;
    }
  }
  input{
    height: 40px;
    border-radius: 8px;
    padding: 0 10px;
  }
`;

const InputContainer = styled.div`
display: flex;
flex-direction: column;
  background: var(--white);
  border-radius: 10px;
  border: 2px solid var(--blue);
  color: var(--blue);
  margin-top:10px;
  width: 100%;
  height: 70px;
  display: flex;
  transition: 0.4s;
      :hover {
        border: 2px solid var(--green);
      }
  ${(props) => props.isErrored
    && css`
      border-color: var(--negative);
    `}
`;

export { Container, InputContainer };