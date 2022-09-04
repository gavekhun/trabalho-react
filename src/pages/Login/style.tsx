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
`

export const LogoLogin = styled.Image`
       width:167px;
       height: 79px;
       margin-Top: 144.77px;

`;

export const TextoCentro2 = styled.Text`
       font-Size:10px;
       font-Family: ${globalStyles.fonts.KleeBold};
       color: white;
`

export const Email = styled.TextInput`
       width: 272px;
       height: 58px;
       border-radius: 29;
       background: white;

`
export const CxInput = styled.View`
       line-height: 80px;
       margin-top: 69;
         


`

export const CxPassword = styled.View`
        margin-Top:30px;
`

export const Forget = styled.Text`
      color: white;
      font-family: ${globalStyles.fonts.KleeBold};
      font-size: 10;
      text-decoration: underline;
      margin-top: 10px;

`
export const Inferiores = styled.Text`
      color: white;
      font-family: ${globalStyles.fonts.KleeBold};
      font-size: 10;
      margin-top: 5px
`
export const Reg = styled.Text`
      color: white;
      font-family:${globalStyles.fonts.KleeBold};
      font-size: 10;
      margin-top: 16px

`
export const Acess = styled.Text`
      color: white;
      font-family:${globalStyles.fonts.KleeBold};
      font-size: 10;
      margin-top: 19px
`
export const Icon = styled.Image`
     width: 28px;
     height: 28px;

`
export const IconG = styled.Image`
     width: 28px;
     height: 28px;
     margin-left: 20;

`
export const IconsView = styled.View`
     flex-direction: row;
     justify-content: space-between;
     margin-top: 10;

     flex: 1

`