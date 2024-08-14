import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Principal from "./screens/principal/principal.jsx";
import Cardapio from "./screens/cardapio/cardapio.jsx";
import Busca from "./screens/busca/busca.jsx";
import DetalheProduto from "./screens/detalhe-produto/detalhe-produto.jsx";
import DetalhePedido from "./screens/detalhe-pedido/detalhe-pedido.jsx";
import Checkout from "./screens/checkout/checkout.jsx";
import { TouchableOpacity, Text } from "react-native";
import { COLORS } from "./constants/theme.js";

const Stack = createNativeStackNavigator();

function RoutesAuth() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="principal"
          component={Principal}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="checkout"
          component={Checkout}
          options={{
            headerShownVisible: false,
            title: "Meu Pedido",
            headerTitleAlign: "center",

            headerRight: () => {
              return (
                <TouchableOpacity onPress={() => alert("ok")}>
                  <Text style={{ color: COLORS.red }}>Limpar</Text>
                </TouchableOpacity>
              );
            },
            animation: "slide_from_bottom",
          }}
        />

        <Stack.Screen
          name="detalhe-pedido"
          component={DetalhePedido}
          options={{
            headerShownVisible: false,
            title: "Detalhes do Pedido",
            headerTitleAlign: "center",
            animation: "slide_from_bottom",
          }}
        />

        <Stack.Screen
          name="detalhe-produto"
          component={DetalheProduto}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="cardapio"
          component={Cardapio}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="busca"
          component={Busca}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RoutesAuth;
