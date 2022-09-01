import styled from "styled-components/native";
import { globalStyles } from "../../global/global";

export const ButtonStyle = styled.View`
     width: 112;
     height:39;
     border-radius:29;
     background-Color:${globalStyles.colors.buttonGreen};
     align-Items: center;
     justify-Content: center;
     margin-Top:45;
`
export const ButtonText = styled.Text`
     font-Family: ${globalStyles.fonts.KleeBold};
     font-Size:14;
     color: white;

`