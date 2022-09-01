import styled from "styled-components/native";
import { globalStyles } from "../../global/global";

export const ButtonStyle = styled.View`
     width: 30;
     height:28;
     border-radius:10;
     background-Color: ${globalStyles.colors.buttonGreen2};
     align-Items: center;
     justify-Content: center;
  
`
export const ButtonText = styled.Text`
     font-Family: ${globalStyles.fonts.KleeBold};
     font-Size:14;
     color: white;

`