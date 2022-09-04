import { useNavigation } from "@react-navigation/native";
import React from "react";
import ButtonBack from "../../components/ButtonBack";
import { Center, 
    LogoLogin2, 
    Register, 
    TextCenter, 
    Wallpaper, 
    ButtonBacki } from "./style";
import InputCadastro from "../../components/InputCadastro";
import ButtonAcess from "../../components/ButtonAcess";
import { BarraDados } from "../Inicio/style";

export const Cadastro = () => {
    const navigation = useNavigation();

    return(
    
    <Wallpaper> 
        <BarraDados source={require('../../assets/BarraDados.png')}/>        
            <ButtonBacki>
                <ButtonBack value={"<"}
                    onPress={() => navigation.navigate("Login")}/>
            </ButtonBacki>
                <LogoLogin2  source={require('../../assets/LogoReuse.png')}/>
                <TextCenter>
                    Maior app de peças usadas e seminovas!
                </TextCenter>
                <Register> Registrar-se</Register>
                    <Center>
                        <InputCadastro value="Nome completo:" placeholderText=" Digite seu nome..."/>
                        <InputCadastro value="E-mail:" placeholderText=" example@example.com.br"/>
                        <InputCadastro value="Senha:" placeholderText="  ********"/>
                        <InputCadastro value="Confirma a senha:" placeholderText="  ********"/>
                
                    </Center>
                <ButtonAcess
                value="Entrar"
                onPress={() => navigation.navigate('Home')}/>
            
    </Wallpaper>


    )
};

export default Cadastro;