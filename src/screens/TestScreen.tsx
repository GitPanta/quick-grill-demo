import { View, Text, StyleSheet } from "react-native";

type TestScreenPropsType = {
    label?: string;
};

export default function TestScreen({ label = 'Test Screen'}: TestScreenPropsType) {
    return (
        <View style={styles.container}>
            <Text style={styles.testLabel}>{label}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    testLabel: {
        fontSize: 14,
    },
});