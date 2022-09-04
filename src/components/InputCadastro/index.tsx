import { TextoRegister, TitleRegister } from "./style";
import { View } from "react-native";
import React from "react";

type Register ={
    value: string;
    placeholderText: string;
}

export default function InputCadastro({value, placeholderText}: Register){
    return (
        <View>
            
           <TitleRegister>{value}</TitleRegister>
            <TextoRegister  placeholder={placeholderText} />
        </View>
    )
}