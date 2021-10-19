import styled from "styled-components";
import {IoExitOutline} from "react-icons/io5";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { useHistory } from "react-router";


export default function PrincipalPage(){
    
    const history = useHistory();

    function goToLogInPage(){
        history.push("/");
    }

    function goToNewIn(){
        history.push("/entrada");
    }

    function goToNewOut(){
        history.push("/saida");
    }
    
    return(
        <ContainerPrincipalPage>
            <HeaderPrincipalPage>
                <h1>Olá, Fulano</h1>
                <div>
                    <IoExitOutline color="#fff" size="24px" onClick={goToLogInPage}></IoExitOutline>
                </div>
            </HeaderPrincipalPage>
            <Content> 
                <h1>Não há registros de entrada ou saída</h1>
            </Content>
            <BottomPrincipalPage>
                <NewRegister onClick={goToNewIn}>
                    <FiPlusCircle color="#fff" size="22px" ></FiPlusCircle>
                    <p>Nova entrada</p>
                </NewRegister>
                <NewRegister onClick={goToNewOut}>
                    <FiMinusCircle color="#fff" size="22px" ></FiMinusCircle>
                    <p>Nova saída</p>
                </NewRegister>
            </BottomPrincipalPage>
        </ContainerPrincipalPage>
    );
}

const ContainerPrincipalPage = styled.div `
    margin: 25px 6.5vw 0 6.5vw;
    display: flex;
    flex-direction: column;
`;

const HeaderPrincipalPage = styled.div `
    width: 87vw;
    margin-bottom: 22px;
    display: flex;
    align-items: center;
    
    justify-content: space-between;

    h1 {
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #fff;
    }

    div{
        display: flex;
    }

    div:hover{
        cursor: pointer;
    }
    
`
const Content = styled.div `
    width: 87vw;
    height: 66.86vh;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        width: 50vw;
        height: 46px;
        font-size: 20px;
        font-weight: 400;
        line-height: 23px;
        text-align: center;
        color: #868686;
    }

`;

const BottomPrincipalPage = styled.div `
    margin-top: 13px;
    display: flex;
    justify-content: space-between;

    div:hover{
        cursor: pointer;
    }
`;

const NewRegister = styled.div `
    width: 41vw;
    height: 17.1vh;
    background: #A328D6;
    border-radius: 5px;
    padding: 9px 0 9px 3vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
        width: 20vw;
        font-weight: bold;
        font-size: 17px;
        line-height: 20px;
        color: #FFFFFF;
    }
`;