import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    resultadoMedia: {
        marginBottom: 20,
    },
    info: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 10,
    },
    media: {
        backgroundColor: '#DDD',
        fontSize: 38,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    msgResultado: {
        fontSize: 22,
        color: '#FFF',
        textAlign: 'center',
        padding: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    corResprovado: {
        backgroundColor: '#D00',
    },
    corProvaFinal: {
        backgroundColor: '#FB0',
    },
    corAprovado: {
        backgroundColor: '#32CD32',
    }
});

export default styles
