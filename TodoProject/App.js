import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
export default function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const addTodo = () => {
    if (text) {
      setTodos((prevTodos) => [...prevTodos, text]);
      setText('');
    }
  };
  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo List</Text>
      <TextInput
        style={styles.input}
        placeholder="Add a new todo..."
        onChangeText={(text) => setText(text)}
        value={text}
        onSubmitEditing={addTodo}
      />
      <ScrollView style={styles.scroll}>
        {todos.map((todo, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => removeTodo(index)}
            style={styles.todoContainer}
          >
            <Text style={styles.todo}>{todo}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    padding: 8,
    color: 'black'
  },
  // scroll: {
  //   flex: 1,
  //   marginTop: 89,
  // },
  todoContainer: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    color:'black'
  },
  todo: {
    padding: 16,
    fontSize: 16,
    color:'black'
  },
});
