import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';

const mealsData = [
  {
    id: 1,
    description: 'Salmón a la parrilla con espárragos',
    photo: require('../img/salmon.jpeg')
  },
  {
    id: 2,
    description: 'Quinoa con vegetales asados',
    photo: require('../img/quinoa.jpeg')
  },
  {
    id: 3,
    description: 'Smoothie de espinacas y frutas',
    photo: require('../img/descarga.jpeg')
  },
  {
    id: 4,
    description: 'Tacos de pollo con guacamole',
    photo: require('../img/tacos.jpeg')
  },
  {
    id: 5,
    description: 'Pasta integral con salsa de tomate y albahaca',
    photo: require('../img/pasta.jpeg')
  },
  {
    id: 6,
    description: 'Panqueques de avena con frutas y miel',
    photo: require('../img/panqu.jpeg')
  },
];

const MealsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {mealsData.map(meal => (
        <View key={meal.id} style={styles.card}>
          <View style={styles.imageContainer}>
            <Image source={meal.photo} style={styles.image} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.description}>{meal.description}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: '#f0f4f7', // Fondo azul claro
  },
  card: {
    flexDirection: 'row', // Diseño horizontal
    width: '95%',
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    overflow: 'hidden',
  },
  imageContainer: {
    width: '40%', // Ancho de la imagen
    height: 120,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    width: '60%', // Ancho del texto
    padding: 10,
    justifyContent: 'center',
  },
  description: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'left',
    color: '#333',
  },
});

export default MealsScreen;
