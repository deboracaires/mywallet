import { useHistory } from "react-router";
import styled from "styled-components";

export default function NewOut(){
    
    const history = useHistory();

    function goToPrincipalPage(){
        history.push("/principal");
    }
    
    return(
        <ContainerRegister>
            <HeaderRegister> 
                <h1>Nova saída</h1>
            </HeaderRegister>
            <Input placeholder="Valor"></Input>
            <Input placeholder="Descrição"></Input>
            <Button onClick={goToPrincipalPage}> Salvar saída</Button>
        </ContainerRegister>
    );
}

const ContainerRegister = styled.div `
    margin: 25px 6.5vw 0 6.5vw;
    display: flex;
    flex-direction: column;
`;

const HeaderRegister = styled.div `
    width: 87vw;
    margin-bottom: 40px;
    display: flex;
    align-items: center;


    h1 {
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #fff;
    }
`;

const Input = styled.input `
    width: 86vw;
    height: 58px;
    border-radius: 5px;
    margin-bottom: 13px;
    padding-left: 15px;
    font-size: 20px;
    line-height: 23px;
    color: #000; 



    ::placeholder {
        
        color: #000; 
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
    font-weight: 700;
`