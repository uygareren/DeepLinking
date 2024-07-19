import { Button, Linking, Text, View } from "react-native";

export default function HomeScreen(){
    return(
        <View style={{flex:1, alignItems:"center", justifyContent:"center", backgroundColor:"white"}}>
            <Text>Home</Text>
            <Button title="To Browser"
                onPress={() => Linking.openURL("example-link://example.com/detail/123")}
            />
        </View>
    )
}