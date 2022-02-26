import React from 'react';
import {Dimensions, StyleSheet, SafeAreaView} from 'react-native';

import Animated from 'react-native-reanimated';
import LineChart from './LineChart';

const {width} = Dimensions.get('screen');

const CARD_WIDTH = width - 20;
const GRAPH_WIDTH = CARD_WIDTH - 60;
const CARD_HEIGHT = 325;
const GRAPH_HEIGHT = 200;

export type GraphData = {
  max: number;
  min: number;
  curve: string;
};

const graphData: GraphData[] = [];

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={styles.graphCard}>
        <LineChart
          height={GRAPH_HEIGHT}
          width={GRAPH_WIDTH}
          data={graphData}
          bottomPadding={20}
          leftPadding={0}
        />
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
  },
  graphCard: {
    elevation: 5,
    borderRadius: 20,
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export default App;
