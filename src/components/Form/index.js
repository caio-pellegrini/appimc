import { useState } from "react";
import { TouchableOpacity, Text, TextInput, View, Vibration } from "react-native";
import ResultIMC from './ResultIMC';
import styles from './style';

export default function Form() {
    const [altura, setAltura] = useState(null);
    const [peso, setPeso] = useState(null);
    const [msgIMC, setMsgIMC] = useState("Preencha a altura e o peso");
    const [IMC, setIMC] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");
    const [errorMessage, setErrorMessage] = useState(null);

    function verificarIMC() {
        if (IMC == null) {
            Vibration.vibrate();
            setErrorMessage("Campo Obrigatório");
        }
    }

    function calculoIMC() {
        return setIMC((peso/(altura*altura)).toFixed(2));
    };

    function validarIMC() {
        if (peso != null && altura != null) {
            calculoIMC();
            setAltura(null);
            setPeso(null);
            setMsgIMC("Seu IMC é:");
            setTextButton("Calcular Novamente");
            setErrorMessage(null);
            return
        }
        verificarIMC();
        setIMC(null);
        setTextButton("Calcular");
        setMsgIMC("Preencha o Peso e a Altura");
    };

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                style={styles.input}
                onChangeText={setAltura}
                value={altura}
                placeholder="Ex: 1.75" 
                keyboardType="numeric"></TextInput>
                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput 
                style={styles.input}
                onChangeText={setPeso} 
                value={peso}
                placeholder="Ex: 65" 
                keyboardType="numeric"></TextInput>
                <TouchableOpacity
                style={styles.buttonCalculator}
                onPress={() => {validarIMC()}}>
                    <Text style={styles.textbutton}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultIMC messageResultIMC={msgIMC} resultIMC={IMC}></ResultIMC>
        </View>
    );
}