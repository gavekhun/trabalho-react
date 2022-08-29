import styled from "styled-components/native";
import React from "react";
import { ButtonBack, CxInput, Email, LogoLogin, TextoCentro2, Wallpaper, CxPassword, Forget, Inferiores, Reg, Acess, Icon, IconsView, ButtonBacki, IconG } from "./style";
import EmailInput from "../../components/EmailInput";
import PasswordInput from "../../components/PasswordInput";
import ButtonAcess from "../../components/ButtonAcess";
import { TouchableOpacity } from "react-native";





export const Login = () => {
    return(
        <Wallpaper>
        <ButtonBacki>
            <ButtonBack source={require('../../assets/BackButton.png')}/>
            </ButtonBacki>
        
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
                                <TouchableOpacity>
                                Esqueceu a senha?
                                </TouchableOpacity>
                            </Forget>
                                <ButtonAcess value={'Entrar'} /> 
                            <Inferiores>
                                Não tem cadastro? 
                            </Inferiores>
                            <Reg> 
                                <TouchableOpacity>
                                Registrar-se
                                </TouchableOpacity>
                            </Reg>
                            <Acess>
                                Entre com:
                            </Acess>
                            
                                    <IconsView>
                                    <TouchableOpacity>
                                      <Icon source={require('../../assets/iconFacebooknew.png')}/>
                                      </TouchableOpacity>
                                      <TouchableOpacity>
                                      <IconG source={require('../../assets/iconGooglenew.png')}/>
                                      </TouchableOpacity>
                                                                    
                                    </IconsView>
                                    


    </Wallpaper>
    
    )



};

export default Login;