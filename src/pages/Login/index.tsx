import styled from "styled-components/native";
import React from "react";
import {CxInput, Email, LogoLogin, TextoCentro2, Wallpaper, CxPassword, Forget, Inferiores, Reg, Acess, Icon, IconsView, ButtonBacki, IconG } from "./style";
import ButtonAcess from "../../components/ButtonAcess";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Inicio from "../Inicio";
import InputText from "../../components/InputText";
import ButtonBack from "../../components/ButtonBack";




export const Login = () => {
    const navigation = useNavigation();
    return(
        <Wallpaper>
            {/* Botão para voltar ao iniciar */}
            <ButtonBacki>
                <ButtonBack value={"<"}
                onPress={() => navigation.navigate("Inicio")}/>
            </ButtonBacki>
        {/* Logo central */}
            <LogoLogin  source={require('../../assets/LogoReuse.png')}/>
                <TextoCentro2>
                    Maior app de peças usadas e seminovas!
                </TextoCentro2>
                {/* TextInputs */}
                    <CxInput>
                        <InputText value="Email:" placeholderText="  Digite seu email..."/>
                    </CxInput>
                        <CxPassword>
                            <InputText value="Senha:" placeholderText="  *********"/>
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
                            {/* Parte inferior ao acesso por outras plataformas */}
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