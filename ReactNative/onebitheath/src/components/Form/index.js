import React from "react";
import {  } from "react-native";
import { View, TextInput, Text, Button } from "react-native";

export default function Form(){
    return(
        <View>
            <View>

                <Text>Altura</Text>
                <TextInput
                placeholder="Ex. 1.75"
                keyboardType="numeric"
                />

                <Text>Peso</Text>
                <TextInput
                placeholder="Ex. 75.36"
                keyboardType="numeric"
                />

                <Button title ="Calcular IMC"/>
            </View>
            <ResultIMC messageResultImc={messageImc} resultIMC={imc} />
        </View>
    );
}