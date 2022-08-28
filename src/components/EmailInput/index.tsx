import { TextoEmail, TitleEmail } from "./style";
import { View } from "react-native";
import React from "react";

export default function PasswordInput() {
    return (
        <View>
            
            <TitleEmail>E-mail:</TitleEmail>
            <TextoEmail  placeholder="   Digite seu email..." />
        </View>
    )
}