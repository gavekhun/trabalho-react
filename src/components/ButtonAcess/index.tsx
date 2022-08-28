import React from "react";
import { TouchableOpacity, View } from "react-native";
import { ButtonStyle, ButtonText } from "./style";

type Button ={ 
    value: string;
    onPress?: any;

}


export default function ButtonAcess({ value, onPress}: Button) {
    return (
        <TouchableOpacity onPress={onPress}>
            <ButtonStyle>
                <ButtonText>
                    {value}
                </ButtonText>
            </ButtonStyle>
        </TouchableOpacity>


    )
    
}