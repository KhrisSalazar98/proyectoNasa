import React from "react";
import { Text, View, Image } from "react-native";

const Header = () => {
    return (
        <View>
            <View>
                <Text>Explore</Text>
            </View>
            <View>
                <Image source={require('../../assets/nasa_logo.png')} />
            </View>
            
        </View>
    );
};

export default Header;