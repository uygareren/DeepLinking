import { Text, View } from "react-native";

export default function DetailScreen({route}:any){

    const {id} = route.params

    return(
        <View style={{flex:1, alignItems:"center", justifyContent:"center", backgroundColor:"white"}}>
            <Text>Detail: {id}</Text>
        </View>
    )
}