import React from "react";
import { Image, Text } from "react-native";
import styled from "styled-components/native";
import Login from "../Login";
import { BotãoLogin, Container, ImagemPessoa, LogoReuse, TextoCentro } from "./style";

export const Inicio = () =>{
    return (
        <Container>
            <LogoReuse source={require('../../assets/LogoReuse.png')}/>
            <TextoCentro>
                Maior app de peças
                usadas e seminovas!
            </TextoCentro>

            <ImagemPessoa source={require('../../assets/Pessoa.png')}/>
            <BotãoLogin source={require('../../assets/Login.png')}/>
            
            
                        
            
               
           
        




        </Container>



    )
}


export default Inicio;