import React from "react";
import { TouchableOpacity} from "react-native";
import { ButtonStyle, ButtonText } from "./style";

type Button ={ 
    value: string;
    onPress?: any;

}


export default function ButtonInicio({ value, onPress}: Button) {
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