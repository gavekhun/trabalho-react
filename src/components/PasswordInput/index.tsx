import { TextoEmail, TitleEmail } from "./style";
import { View } from "react-native";
import React from "react";

export default function EmailInput() {
    return (
        <View>
            <TitleEmail>Senha:</TitleEmail>
            <TextoEmail placeholder="   ********" />
        </View>
    )
}