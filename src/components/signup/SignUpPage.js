import { useHistory } from "react-router";
import styled from "styled-components";

export default function SignUpPage(){
    
    const history = useHistory();

    function goToLogInPage(){
        history.push("/");
    }

    return (
        <ConteinerLogin>
            <Title>MyWallet</Title>
            <Input placeholder="Nome"></Input>
            <Input placeholder="E-mail"></Input>
            <Input placeholder="Senha"></Input>
            <Input placeholder="Confirme a senha"></Input>
            <Button>Cadastrar</Button>
            <TextSignUp onClick={goToLogInPage}>Já tem uma conta? Entre agora!</TextSignUp>
        </ConteinerLogin>
    );
}

const ConteinerLogin = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    
    button:hover{
        cursor: pointer;
    }

    div:hover{
        cursor: pointer;
        text-decoration: underline;
    }
`;

const Title = styled.div `
    font-family: 'Saira Stencil One', cursive;
    color: #fff;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 50px;
    margin: 15vh 0 24px 0;
`;

const Input = styled.input `
    width: 86vw;
    height: 58px;
    border-radius: 5px;
    margin-bottom: 13px;

    ::placeholder {
        font-size: 20px;
        line-height: 23px;
        color: #000; 
        padding-left: 15px;

    }

`;

const Button = styled.button `
    width: 86vw;
    height: 46px;
    background-color: #a328d6;
    border-radius: 5px;
    color: #fff;
    font-size: 20px;
    line-height: 23px;

    

`
const TextSignUp = styled.div `
    margin-top: 36px;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #fff

    
`;
