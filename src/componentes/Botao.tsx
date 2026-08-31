import { Text, TouchableOpacity, View } from "react-native"

type BotaoProps = {
    titulo?: string
    corBotao?: string
    lado: number
    onPress?: () => void
}

export default (props: BotaoProps) => {
    const titulo = props.titulo || "Botão"
    const onPress = props.onPress || (() => {})
    const corBotao = props.corBotao || "gray"
    const lado = props.lado 

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{backgroundColor: corBotao, height: lado, width: lado, borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}>
                <Text>{titulo}</Text>
            </View>
        </TouchableOpacity>
    )

}