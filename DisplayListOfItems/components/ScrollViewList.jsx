import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View, SectionList } from 'react-native';
export default function ScrollViewList({ title, type }) {
    const sections = [
        { title: 'Fruits', data: ['Apple', 'Banana'] },
        { title: 'Vegetables', data: ['Carrot', 'Spinach'] },
    ];
    const employeeList = ["Abdullah", "Muzammmil", "Ajay", "Anush Sharma", "Abu Hanif", "Abuzar Gazi", "Inaam-ur-Rehman", "Mubarak"];
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {type == "scroll" && <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>

                {employeeList.map((item, index) => (
                    <Text key={item} style={styles.text}>{item}</Text>
                ))}
            </ScrollView>}
            {type == "flat" && <FlatList data={employeeList} keyExtractor={(item) => item}
                renderItem={({ item }) => <Text>{item}</Text>}
            />}
            {type == "section" && <SectionList
                sections={sections}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Text>{item}</Text>}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={{ fontWeight: 'bold' }}>{title}</Text>
                )}
            />}

            <StatusBar style="auto" />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {

        backgroundColor: '#f4545',
        alignItems: 'center',
        padding: 5,
        backgroundColor: '#d1e7dd',
        borderRadius: 10,
        marginTop: 10,


    },
    title: {
        marginVertical: '20%',
        marginBottom: '5%',
        fontSize: 25,
        fontWeight: 'bold',
        color: '#333'
    },
    item: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#434'
    },
    component: {
        flex: 1,
        padding: 20,
        backgroundColor: '#d1e7dd',
        borderRadius: 10,
        marginTop: 20,
    },
    text: {
        fontSize: 20,
        margin: 10,
        alignContent: 'center'
    },
    scrollView: {

        backgroundColor: 'lightblue', // Style for the outer ScrollView
        margin: 10,
        width: '80%',
        marginVertical: 'auto'
    },
});