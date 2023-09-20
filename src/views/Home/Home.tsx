import React, { useEffect, useState } from "react";
import {View, StyleSheet} from "react-native";
import {format, sub} from 'date-fns';

import Header from "../../components/Header";
import TodaysImage from "../../components/TodaysImage";
import FiveLastDaysImages from "../../components/FiveLastDaysImages";

import fetchApi from '../../utils/fetch';
import { PostImage as PostImagesTypes } from "../../types";
import PostImages from '../../components/PostImage/PostImage';

const Home = () => {

    const [todaysImage, setTodaysImage] = useState<PostImagesTypes>({});
    const [lastFiveDaysImages,setLastFiveDaysImages] = useState<PostImagesTypes[]>([]);


    useEffect(() => {
        const loadTodayImage = async () => {
            try {
                const todaysImageResponse = await fetchApi();
                setTodaysImage(todaysImageResponse);
            } catch (error) {

                setTodaysImage({});
            }
        };

        const loadLast5DaysImages = async () => {
            try {
                
                const date = new Date();
                const todaysDate = format(date, 'yyyy-MM-dd');
                const fiveDaysAgoDate = format(sub(date, {days: 5}), 'yyyy-MM-dd');

                // console.log(todaysDate, fiveDaysAgoDate);

                const lastFiveDaysImagesResponse = await fetchApi(`&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`); 

                setLastFiveDaysImages(lastFiveDaysImagesResponse);

            } catch (error) {
                console.log(error);
            }
        }



       loadTodayImage().catch(null);
       loadLast5DaysImages().catch(null);

    }, []);

    

    // console.log(lastFiveDaysImages);

    return (
        <View style={styles.container}>
            <Header />
            <TodaysImage {...todaysImage} />
            <FiveLastDaysImages postImages={lastFiveDaysImages} />
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