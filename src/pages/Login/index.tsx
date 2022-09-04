import React from "react";
import {CxInput,
    LogoLogin,
    TextoCentro2, 
    Wallpaper, 
    CxPassword, 
    Forget, 
    Inferiores, 
    Reg, 
    Acess, 
    Icon, 
    IconsView, 
    ButtonBacki, 
    IconG } from "./style";
import ButtonAcess from "../../components/ButtonAcess";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import InputText from "../../components/InputText";
import ButtonBack from "../../components/ButtonBack";
import { BarraDados } from "../Inicio/style";






export const Login = () => {
    const navigation = useNavigation();
    return(
        <Wallpaper>
            <BarraDados source={require('../../assets/BarraDados.png')}/>
            
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
                                <ButtonAcess value={'Entrar'}
                                onPress={() => navigation.navigate('Home')} /> 
                            <Inferiores>
                                Não tem cadastro? 
                            </Inferiores>
                            <Reg> 
                                <TouchableOpacity
                                onPress={() => navigation.navigate('Cadastro') }
                                >
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