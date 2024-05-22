import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';

const studentsData = [
  {
    id: 1,
    name: 'Kevin Grabriel',
    carnet: '20210728',
    photo: require('../img/ke.jpg')
  },
  {
    id: 2,
    name: 'Eduardo Sosa',
    carnet: '20220169',
    photo: require('../img/sosa.jpg')
  },
];

const StudentsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {studentsData.map(student => (
        <View key={student.id} style={styles.card}>
          <Image source={student.photo} style={styles.image} />
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{student.name}</Text>
            <Text style={styles.carnet}>Carnet: {student.carnet}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#ffffff', 
  },
  card: {
    flexDirection: 'row',
    width: 350,
    marginVertical: 10,
    borderRadius: 15,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    marginRight: 10,
  },
  infoContainer: {
    justifyContent: 'center',
    padding: 10,
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00796b', // Color verde oscuro
  },
  carnet: {
    fontSize: 16,
    color: '#004d40', // Color verde más oscuro
  },
});

export default StudentsScreen;
