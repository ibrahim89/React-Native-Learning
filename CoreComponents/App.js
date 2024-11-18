import {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TextInput,Button,TouchableOpacity,
  ScrollView,FlatList,SectionList,Modal,ActivityIndicator
 } from 'react-native';


export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const data = [{ id: '1', name: 'Alice' }, { id: '2', name: 'Bob' }];
  const sections = [
    { title: 'Fruits', data: ['Apple', 'Banana'] },
    { title: 'Vegetables', data: ['Carrot', 'Spinach'] },
  ];
  return (
    <View style={styles.container}>
      <Text>Test Ibr</Text>
      <Image
  source={{ uri: 'https://example.com/logo.png' }}
  style={{ width: 100, height: 100 }}
/>
      <Text style={{ fontSize: 18, color: 'blue' }}>Welcome to React Native</Text>
      <TextInput placeholder="Enter your name"
      style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 10 }}/>
      <Button  title="Click Me" onPress={() => alert('Button Pressed')} />
      <TouchableOpacity onPress={() => alert('Touchable Pressed')} style={{ padding: 10, backgroundColor: 'blue' }}>
  <Text style={{ color: 'white' }}>Press Me</Text>
</TouchableOpacity>
    
      <StatusBar style="auto" backgroundColor="green" barStyle="light-content" />
      <ScrollView>
  <Text>Item 1</Text>
  <Text>Item 2</Text>
  <Text>Item 3</Text>
  {/* Add more items */}
</ScrollView>
<FlatList
  data={data}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => <Text>{item.name}</Text>}
/>
<SectionList
  sections={sections}
  keyExtractor={(item, index) => item + index}
  renderItem={({ item }) => <Text>{item}</Text>}
  renderSectionHeader={({ section: { title } }) => (
    <Text style={{ fontWeight: 'bold' }}>{title}</Text>
  )}
/>
 <ActivityIndicator size="large" color="blue" />;
<View style={styles.container}>
      <Button title="Show Modal" onPress={() => setModalVisible(true)} />
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalView}>
          <TextInput placeholder='Enter Password'/>
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
   
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  modalView: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
});
