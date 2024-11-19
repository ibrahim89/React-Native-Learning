import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ScrollViewList from './components/ScrollViewList';
import ButtonComponent from './components/ButtonComponent';

export default function App() {
  const [showScrollList, setShowScrollList] = useState(false);
  const [showFlatList, setShowFlatList] = useState(false);
  const [showSectionList, setShowSectionList] = useState(false);
  return (
    <View>

      <ButtonComponent toggleScrollList={() => setShowScrollList(!showScrollList)}
        toggleFlatList={() => setShowFlatList(!showFlatList)}
        toggleSectionList={() => setShowSectionList(!showSectionList)}
      />
      {showScrollList && <ScrollViewList title={'Scroll View Item List'} type="scroll"/>}
      {showFlatList && <ScrollViewList title={'Flat List'} type="flat" />}
      {showSectionList && <ScrollViewList title={'Section List'} type="section" />}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
  },


});
