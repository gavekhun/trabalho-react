import { TextoInput, TitleInput } from "./style";
import { View } from "react-native";
import React from "react";

type Info ={
    value: string;
    placeholderText: string;
}

export default function InputText({value, placeholderText}: Info){
    return (
        <View>
            
           <TitleInput>{value}</TitleInput>
            <TextoInput  placeholder={placeholderText} />
        </View>
    )
}