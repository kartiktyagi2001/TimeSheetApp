import React, { useState, useEffect } from 'react';
import EntryForm from './EntryForm.jsx';
import EntryTable from './EntryTable.jsx';
import api from './api';

import './App.css';

function App() {
  const [entries, setEntries] = useState([]);
  const [formEntries, setFormEntries] = useState([getEmptyEntry()]);

  //  function to return an empty entry object
  function getEmptyEntry() {
    return {
      employee: '',
      projectId: '',
      projectName: '',
      hours: { mon: 0, tue: 0, wed: 0, thu: 0, fri: 0, sat: 0, sun: 0 },
      remarks: ''
    };
  }

  // saved entries w(hen the component mounts)
  useEffect(() => {
    loadEntries();
  }, []);

  const loadEntries = async () => {
    try {
      const res = await api.get('/entries');
      setEntries(res.data);
    } catch (err) {
      console.error('Error loading entries:', err);
    }
  };

  const handleFormChange = (index, field, value) => {
    const newFormEntries = [...formEntries];
   
    
    if (field in newFormEntries[index].hours) {
      newFormEntries[index].hours[field] = value;
    } else {
      newFormEntries[index][field] = value;
    }
    setFormEntries(newFormEntries);
  };

  const addNewRow = () => {
    setFormEntries([...formEntries, getEmptyEntry()]);
  };

  const deleteRow = (index) => {
    const newEntries = formEntries.filter((_, i) => i !== index);
    setFormEntries(newEntries);
  };

  const saveEntries = async () => {
    try {
      // Save each entry one by one
      for (const entry of formEntries) {
        await api.post('/entries', entry);
      }
      // Clear form rows after save
      setFormEntries([getEmptyEntry()]);
      loadEntries(); // Refresh saved entries
    } catch (err) {
      console.error('Error saving entries:', err);
    }
  };

  return (
    <div className="container">
      <h1>Time Sheet App</h1>
      <EntryForm 
        formEntries={formEntries} 
        onFormChange={handleFormChange}
        onAddRow={addNewRow}
        onDeleteRow={deleteRow}
        onSave={saveEntries}
      />
      <h2>Saved Entries</h2>
      <EntryTable entries={entries} />
    </div>
  );
}

export default App;
