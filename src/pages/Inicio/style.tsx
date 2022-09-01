import styled from "styled-components/native";
import { globalStyles } from "../../../src/global/global";

   export const Container = styled.View`

      background: ${globalStyles.colors.primaryBlue};
      display: flex;
      flex: 1;
      align-items: center;
   
      


    `

    export const TextoCentro = styled.Text`
    
      color: white;
      font-size: 32px;
      font-Family: ${globalStyles.fonts.KleeBold};
      margin-left: 31px;
      

      
     
      
    `
    export const LogoReuse = styled.Image`
      
       width:290px;
       height: 137px;
       margin-top: 82px;
       margin-right:30px;


    `
    export const ImagemPessoa = styled.Image`
       
       width:410px;
       height:440px;
       margin-top: 62 ;
       position: relative;
       
       
      

    `
    export const BotãoLogin = styled.View`
       position: absolute;
       margin-top: 730px;
       margin-left: 199px;
    `

