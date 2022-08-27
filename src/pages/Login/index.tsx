import styled from "styled-components/native";
import React from "react";
import { ButtonBack, CxInput, Email, LogoLogin, TextoCentro2, Wallpaper } from "./style";
import { TextInput, View } from "react-native";


export const Login = () => {
    return(
    <Wallpaper>
        <ButtonBack source={require('../../assets/BackButton.png')}/>
            <LogoLogin  source={require('../../assets/LogoReuse.png')}/>
                <TextoCentro2>
                    Maior app de peças usadas e seminovas!
                </TextoCentro2>
                <CxInput>
                    <label>Email:</label>
                    <Email placeholder="Digite seu nome"/>
                </CxInput>
    </Wallpaper>
    
    )



};

export default Login;