import React, { useEffect, useState } from "react";
import {View, StyleSheet} from "react-native";

import Header from "../../components/Header";
import fetchApi from '../../utils/fetch';

const Home = () => {

    const [todaysImage, setTodaysImage] = useState();

    useEffect(() => {
       const loadTodayImage = async () => {
            try {
                const todaysImageResponse = await fetchApi();
                setTodaysImage(todaysImageResponse);
            } catch (error) {

                setTodaysImage(undefined);
            }
       };

       loadTodayImage().catch(null);

    }, []);

    console.log(todaysImage);

    return (
        <View style={styles.container}>
            <Header />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
    }
});

export default Home;