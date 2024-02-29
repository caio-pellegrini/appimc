import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    resultIMC: {
        flex: 1,
        marginTop: 15,
        paddingTop: 60,
        borderRadius: 50,
        alignItems: "center",
        width: "100%",
    },
    numberIMC: {
        fontSize: 48,
        color: "#FF0043",
        fontWeight: "bold",
    },
    information: {
        fontSize: 18,
        color: "#FF0043",
        fontWeight: "bold",
    },
    shareButton: {
        width: "100%",
        alignItems: "center",
        marginTop: 15,
    },
    share: {
        backgroundColor: "#1877f2",
        borderRadius: 50,
        paddingBottom: 5,
        paddingTop: 5,
    },
    sharedText: {
        color: "white",
        fontWeight: "bold",
        paddingHorizontal: 30,
    },
})

export default styles;