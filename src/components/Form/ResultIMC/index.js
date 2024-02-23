import { View, Text } from "react-native";

export default function ResultIMC(props) {
    return (
        <View>
            <Text>{props.messageResultIMC}</Text>
            <Text>{props.resultIMC}</Text>
        </View>
    );
}

/* Props é um argumento para passar dados de um componente para o outro
nesse caso ele irá receber o resultlmc e a messageResultImc de outro
Componente */