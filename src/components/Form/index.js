import { useState } from "react";
import { StyleSheet } from "react-native";
import { Button, Text, TextInput, View } from "react-native";
import ResultIMC from './ResultIMC';
import { styles } from './style';

export default function Form() {
    const [altura, setAltura] = useState(null);
    const [peso, setPeso] = useState(null);
    const [msgIMC, setMsgIMC] = useState("Preencha a altura e o peso");
    const [IMC, setIMC] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");

    function calculoIMC() {
        return setIMC((peso/(altura*altura)).toFixed(2));
    }

    function validarIMC() {
        if (peso != null && altura != null) {
            calculoIMC();
            setAltura(null);
            setPeso(null);
            setMsgIMC("Seu IMC é:");
            setTextButton("Calcular Novamente");
            return
        }
        setIMC(null)
        setTextButton("Calcular")
        setMsgIMC("Preencha o Peso e a Altura")
    }

    return (
        <View>
            <View>
                <Text style={stylesInterno.title}>Altura</Text>
                <TextInput
                style={styles.input}
                onChangeText={setAltura}
                value={altura}
                placeholder="Ex: 1.75" 
                placeholderTextColor={'red'}
                keyboardType="numeric"></TextInput>
                <Text style={stylesInterno.title}>Peso</Text>
                <TextInput 
                style={styles.input}
                onChangeText={setPeso} 
                value={peso}
                placeholder="Ex: 65" 
                keyboardType="numeric"></TextInput>
                <Button color={styles.button.backgroundColor} title={textButton} onPress={validarIMC}></Button>
            </View>
            <ResultIMC messageResultIMC={msgIMC} resultIMC={IMC}></ResultIMC>
        </View>
    );
}

const stylesInterno = StyleSheet.create({
    title: {
        textAlign: 'center',
        marginVertical: 8,
    }
});