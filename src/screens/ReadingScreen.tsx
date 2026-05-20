import { View, Text } from 'react-native';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

const getReadings = async () => {
    const res = await axios.get('http://192.168.0.14:5000/');   // Cambia la IP por la del micro
    return res.data ?? 'Error fetching data';
};

export default function  ReadingScreen() {
    const readingQuery = useQuery({
        queryKey: ['sensorReadings'],
        queryFn: getReadings,
        refetchInterval: 3 * 1000,  // 3 secs
        enabled: true,
    });
    const readingsData = readingQuery.data;

    useEffect(() => {
        console.log('DEBUG data:', readingsData);
    }, [readingQuery]);

    return (
        <View>
            {readingsData ? (
                <View style={{ flex: 1 }}>
                    <Text>{readingsData.thermocouple_general}</Text>
                    <Text>{readingsData.thermocouple_grill}</Text>
                    <Text>{readingsData.knob}</Text>
                </View>
            ) : (
                <Text>No data</Text>
            )}
        </View>
    );
}