import React, { useEffect, useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native'
import axios from 'axios'

export default function ListAppointment() {

  const [appointments, setAppointments] = useState([])

  useEffect(() => {
      getAppointments()
  }, [])

  async function getAppointments() {
      try {
          setAppointments([
              {
                  id: 1,
                  entrada1: "09:00",
                  saida1: "12:00",
                  entrada2: "13:00",
                  saida2: "19:00",
              },
              {
                  id: 2,
                  entrada1: "09:00",
                  saida1: "12:00",
                  entrada2: "13:00",
                  saida2: "19:00",
              },
              {
                  id: 3,
                  entrada1: "09:00",
                  saida1: "12:00",
                  entrada2: "13:00",
                  saida2: "19:00",
              },
              {
                  id: 4,
                  entrada1: "09:00",
                  saida1: "12:00",
                  entrada2: "13:00",
                  saida2: "19:00",
              },
          ])

      } catch (error) {
          console.error(error);
      }
  }

  return (
      <View style={styles.container}>
          <Text style={styles.title}>Lista de apontamento de horas</Text>

          <ScrollView
              style={styles.list}
              contentContainerStyle={{
                  paddingHorizontal: 16,
                  paddingBottom: 16
              }}
          >
              {appointments.map((appointment) => (
                  <View key={appointment.id} style={styles.listItem}>
                      <Text style={styles.item}>{appointment.entrada1}</Text>
                      <Text style={styles.item}>{appointment.saida1}</Text>
                      <Text style={styles.item}>{appointment.entrada2}</Text>
                      <Text style={styles.item}>{appointment.saida2}</Text>
                  </View>
              ))}
          </ScrollView>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingHorizontal: 24,
      paddingVertical: 24,
      alignItems: 'center'
  },
  title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 24
  },
  list: {
      flexDirection: 'column'
  },
  listItem: {
      flexDirection: 'row',
      paddingVertical: 4
  },
  item: {
      paddingHorizontal: 4
  }
});
