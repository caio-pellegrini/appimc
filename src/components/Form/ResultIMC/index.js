import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from './style';

export default function ResultIMC(props) {
    const onShare = async () => {
        const result = await Share.share({
            message: "Meu IMC é: " + props.resultIMC
        });
    }
    return (
        <View style={styles.resultIMC}>
            <Text style={styles.information}>{props.messageResultIMC}</Text>
            <Text style={styles.numberIMC}>{props.resultIMC}</Text>

            <View style={styles.shareButton}>
                {props.resultIMC != null ? (
                    <TouchableOpacity style={styles.share} onPress={onShare}>
                        <Text style={styles.sharedText}>Compartilhar</Text>
                    </TouchableOpacity>
                ) : null}
            </View>
        </View>
    );
}

/* Props é um argumento para passar dados de um componente para o outro
nesse caso ele irá receber o resultlmc e a messageResultImc de outro
Componente */