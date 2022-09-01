import { useNavigation } from "@react-navigation/native";
import React from "react";
import styled from "styled-components/native";
import ButtonInicio from "../../components/ButtonInicio";
import Login from "../Login";
import { BotãoLogin, Container, ImagemPessoa, LogoReuse, TextoCentro } from "./style";

export const Inicio = () =>{
    const navigation = useNavigation();
    return (
        <Container>
            <LogoReuse source={require('../../assets/LogoReuse.png')}/>
            <TextoCentro>
                Maior app de peças
                usadas e seminovas!
            </TextoCentro>
            
            <ImagemPessoa source={require('../../assets/Pessoa.png')}/>
            <BotãoLogin>

            <ButtonInicio value="Acessar" 
            onPress={() => navigation.navigate('Login')}/>
            </BotãoLogin>
            
            
                        
            
               
           
        




        </Container>



    )
}


export default Inicio;