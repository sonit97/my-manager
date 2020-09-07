import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import List from './components/List';
import AlertDialog from './components/AlertDialog';

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Form></Form>
        <List></List>
        <AlertDialog></AlertDialog>
    </div>
  );
}
export default App;
