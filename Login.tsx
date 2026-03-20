import { View, TextInput } from "react-native/";

export default function Login(){
    return(
        <View>
            <TextInput placeholder="Email"/>
            <TextInput placeholder="Senha" secureTextEntry/>
        </View>

    )
}