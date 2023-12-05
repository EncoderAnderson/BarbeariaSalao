import React from "react";
import { View, ActivityIndicator } from "react-native";
import stylesLoading from './LoadingIndicatorStyle';


const LoadingIndicator = () => {
    return (
        <View style={stylesLoading.container}>

            <ActivityIndicator style={[stylesLoading.Loading, { transform: [{ scale: 3 }] }]}
                color="#ffffff" />

        </View>
    );
};

export default LoadingIndicator;