import styled from "styled-components/native";
import { globalStyles } from "../../global/global";

export const ButtonStyle = styled.View`
     width: 149;
     height:49;
     border-radius:10;
     align-items: center;
     justify-content: center;
     background-color: ${globalStyles.colors.buttonGreen};
     color: white
     
 `    
export const ButtonText = styled.Text`
     font-family: ${globalStyles.fonts.KleeBold};
     font-size: 20;
     align-items: center;
     color: white;

     
`