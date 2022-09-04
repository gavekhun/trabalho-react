import { useNavigation } from "@react-navigation/native";
import React from "react";
import ButtonInicio from "../../components/ButtonInicio";
import { BarraDados, 
    BotãoLogin, 
    Container, 
    ImagemPessoa, 
    LogoReuse, 
    TextoCentro } from "./style";

export const Inicio = () =>{
    const navigation = useNavigation();
    return (
        <Container>
            <BarraDados source={require('../../assets/BarraDados.png')}/>
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