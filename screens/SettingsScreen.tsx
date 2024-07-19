// SettingsScreen.js
import React, { useEffect } from 'react';
import { Alert, Text, View } from 'react-native';

export default function SettingsScreen() {
    useEffect(() => {
        Alert.alert("Deep Link", "SettingsScreen opened via deep link");
        console.log("SettingsScreen opened via deep link");
    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Settings Screen</Text>
        </View>
    );
}
