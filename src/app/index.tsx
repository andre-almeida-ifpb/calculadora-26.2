import Botao from "@/componentes/Botao";
import { useState } from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";

export default function Index() {

  const {height, width} = useWindowDimensions();

  const [expressao, setExpressao] = useState("")


  let lado = (Math.floor(Math.min(height, width)-100)/4) - 2;

  if (lado*5 > height) {
    lado = (Math.floor(Math.min(height, width)-100)/5) - 2;
  }

  return (
    <View style={styles.container}>
      <View style={styles.visor}>
        <Text>{expressao}</Text>
      </View>
      <View style={styles.teclado}>
        <View style={styles.linha}>
          <Botao lado={lado} titulo="C" onPress={() => setExpressao("")} />
          <Botao lado={lado} titulo="x^y" onPress={() => setExpressao(expressao + "**")} />
          <Botao lado={lado} titulo="<" onPress={() => setExpressao(expressao.slice(0, -1))} />
          <Botao lado={lado} titulo="/" onPress={() => setExpressao(expressao + "/")} />
        </View>
        <View style={styles.linha}>
          <Botao lado={lado} titulo="7" onPress={() => setExpressao(expressao + "7")} />
          <Botao lado={lado} titulo="8" onPress={() => setExpressao(expressao + "8")} />
          <Botao lado={lado} titulo="9" onPress={() => setExpressao(expressao + "9")} />
          <Botao lado={lado} titulo="X" onPress={() => setExpressao(expressao + "*")} />
        </View>
        <View style={styles.linha}>
          <Botao lado={lado} titulo="4" onPress={() => setExpressao(expressao + "4")} />
          <Botao lado={lado} titulo="5" onPress={() => setExpressao(expressao + "5")} />
          <Botao lado={lado} titulo="6" onPress={() => setExpressao(expressao + "6")} />
          <Botao lado={lado} titulo="-" onPress={() => setExpressao(expressao + "-")} />
        </View>
        <View style={styles.linha}>
          <Botao lado={lado} titulo="1" onPress={() => setExpressao(expressao + "1")} />
          <Botao lado={lado} titulo="2" onPress={() => setExpressao(expressao + "2")} />
          <Botao lado={lado} titulo="3" onPress={() => setExpressao(expressao + "3")} />
          <Botao lado={lado} titulo="+" onPress={() => setExpressao(expressao + "+")} />
        </View>
        <View style={styles.linha}>
          <Botao lado={lado} titulo="=" onPress={() => setExpressao(eval(expressao).toString())} />
          <Botao lado={lado} titulo="0" onPress={() => setExpressao(expressao + "0")} />
          <Botao lado={lado} titulo="," onPress={() => setExpressao(expressao + ".")} />
          <Botao lado={lado} titulo="=" onPress={() => setExpressao(eval(expressao).toString())} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  teclado: {
    width: '100%',
    backgroundColor: 'green',
  },

  linha: {
    flex: 1,
    padding: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },

  visor: {
    width: '95%',
    height: 80,
    marginVertical: 10,
    paddingRight: 10,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'flex-end'
  }
});
