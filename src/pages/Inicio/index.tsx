import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import ButtonInicio from "../../components/ButtonInicio";
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
            <BotãoLogin>

            <ButtonInicio value="Acessar"/>
            </BotãoLogin>
            
            
                        
            
               
           
        




        </Container>



    )
}


export default Inicio;