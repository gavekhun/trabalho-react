import styled from "styled-components/native";
import { globalStyles } from "../../global/global";

export const Wallpaper = styled.View`
    background-color: ${globalStyles.colors.primaryBlue};
    flex: 1;
    flex-Direction: column;
    align-Items: center;
    
    
    
`;

export const ButtonBacki = styled.View`
      margin-right: 330;
      margin-top: 51;
      position: absolute;
`;

export const LogoLogin2 = styled.Image`
       width:167px;
       height: 79px;
       margin-Top: 78px;

`;

export const TextCenter = styled.Text`
       font-Size:10px;
       font-Family: ${globalStyles.fonts.KleeBold};
       color: white;
       position: absolute;
       margin-top: 131;
`;

export const Center = styled.View`
       line-height: 22;
       margin-top: 69;
       margin-bottom: 80;
`
export const Register = styled.Text`
       color: white;
       font-size: 36;
       font-family: ${globalStyles.fonts.KleeBold};
       margin-top: 34;
       
`