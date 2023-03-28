import { useState } from 'react';
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import styles from './style';
import Result from './Result';

export default function Form() {
    const [mediaEtapa1, setMediaEtapa1] = useState(null)
    const [mediaEtapa2, setMediaEtapa2] = useState(null)
    const [msgCalculo, setMsgCalculo] = useState(null)
    const [msgResultado, setMsgResultado] = useState(null)
    const [media, setMedia] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    function calcularMedia(mediaEtapa1Format, mediaEtapa2Format) {
        let mediaFinal = (Number.parseFloat(mediaEtapa1Format) + Number.parseFloat(mediaEtapa2Format)) / 2
        setMedia(mediaFinal)
        resultado(mediaFinal)
    }

    function resultado(media) {
        if (media >= 7) {
            setMsgResultado("APROVADO")
        } else if (media >= 3 && media < 7) {
            setMsgResultado("PROVA FINAL")
        } else {
            setMsgResultado("REPROVADO!")
        }
    }

    function validacaoMedia() {
        if (mediaEtapa1 != null && mediaEtapa2 != null) {
            let mediaEtapa1Format = mediaEtapa1.replace(",", ".")
            let mediaEtapa2Format = mediaEtapa2.replace(",", ".")
            if (mediaEtapa1Format >= 0 && mediaEtapa1Format <= 10 && mediaEtapa2Format >= 0 && mediaEtapa2Format <= 10) {
                calcularMedia(mediaEtapa1Format, mediaEtapa2Format)
                setMediaEtapa1(null)
                setMediaEtapa2(null)
                setTextButton("Calcular novamente")
                setMsgCalculo(null)
            } else {
                setMsgCalculo("Valor inválido")
                setMediaEtapa1(null)
                setMediaEtapa2(null)
                setTextButton("Calcular")
            }
        } else {
            setMsgCalculo("Preencha as médias das etapas!")
            setMedia(null)
        }
    }

    return (
        <View style={styles.form}>
            {media == null ?
                <View>
                    {/* Condição que verifica se há mensagem de erro */}
                    {msgCalculo != null && (
                        <Text style={styles.alerta}>{msgCalculo}</Text>
                    )}
                    <Text style={styles.label}>Média etapa 1</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={mediaEtapa1}
                        onChangeText={setMediaEtapa1}
                    />

                    <Text style={styles.label}>Média etapa 2</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={mediaEtapa2}
                        onChangeText={setMediaEtapa2}
                    />

                    <TouchableOpacity onPress={() => validacaoMedia()}>
                        <Text style={styles.button}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
                :
                <View>
                    <Result media={media} msgResultado={msgResultado} />
                    <TouchableOpacity onPress={() => validacaoMedia()}>
                        <Text style={styles.button}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
            }
        </View>
    );
}
