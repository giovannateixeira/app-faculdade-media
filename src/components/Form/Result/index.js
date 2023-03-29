import {Text, View} from 'react-native';
import styles from './style';

export default function Result(props) {
    let color
    if(props.media < 3){
        color = styles.corResprovado
    }else if(props.media >= 3 && props.media < 7){
        color = styles.corProvaFinal
    }else{
        color = styles.corAprovado
    }
    return(
        <View style={styles.resultadoMedia}>
            <Text style={styles.info}>Sua média foi:</Text>
            <Text style={styles.media}>{props.media}</Text>
            <Text style={[styles.msgResultado, color]}>{props.msgResultado}</Text>
        </View>
    );
}
