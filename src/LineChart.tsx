import React, {FC} from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';

import Animated from 'react-native-reanimated';

import {GraphData} from './App';
import ButtonSection from './ButtonSection';

type LineChartProps = {
  height: number;
  width: number;
  data: GraphData[];
  leftPadding: number;
  bottomPadding: number;
};

const LineChart: FC<LineChartProps> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>FACEBOOK</Text>
        <Text style={styles.titleText}>0</Text>
      </View>
      <Animated.View style={styles.chartContainer}></Animated.View>
      <ButtonSection
        q1Tapped={() => {}}
        q2Tapped={() => {}}
        q3Tapped={() => {}}
        q4Tapped={() => {}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chartContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 12,
    marginHorizontal: 30,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'black',
  },
  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default LineChart;
