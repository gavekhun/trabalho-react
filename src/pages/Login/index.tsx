import styled from "styled-components/native";
import React from "react";
import { ButtonBack, CxInput, Email, LogoLogin, TextoCentro2, Wallpaper, CxPassword, Forget, Inferiores, Reg, Acess, Icon, IconsView } from "./style";
import EmailInput from "../../components/EmailInput";
import PasswordInput from "../../components/PasswordInput";
import ButtonAcess from "../../components/ButtonAcess";





export const Login = () => {
    return(
        <Wallpaper>
        
        <ButtonBack source={require('../../assets/BackButton.png')}/>
            <LogoLogin  source={require('../../assets/LogoReuse.png')}/>
                <TextoCentro2>
                    Maior app de peças usadas e seminovas!
                </TextoCentro2>
                    <CxInput>
                        <EmailInput/>
                    </CxInput>
                        <CxPassword>
                            <PasswordInput/>
                        </CxPassword>
                            <Forget>
                                Esqueceu a senha?
                            </Forget>
                                <ButtonAcess value={'Entrar'} /> 
                            <Inferiores>
                                Não tem cadastro? 
                            </Inferiores>
                            <Reg>
                                Registrar-se
                            </Reg>
                            <Acess>
                                Entre com:
                            </Acess>
                                    <IconsView>
                                    
                                      <Icon source={require('../../assets/IconFace.png')}/>
                                                                    
                                    </IconsView>


    </Wallpaper>
    
    )



};

export default Login;