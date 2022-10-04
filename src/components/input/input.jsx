import {Container, InputContainer} from "./styledInput"

function Input({register, name, error, ...rest}){
    return (
        <Container>
            <InputContainer isErrored = {!!error}>
            <input {...register(name)} {...rest}/>
            <div>{!!error && <span>{error}</span>}</div>
            </InputContainer>
        </Container>
    )
}

export default Input