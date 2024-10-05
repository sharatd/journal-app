import React, {useState, useEffect } from 'react'
import JournalEntryForm from './components/JournalEntryForm'
import JournalEntries from './components/JournalEntries'

function App() {
  const [entries, setEntries] = useState([])

  // Load entries from localStorage on initial render
  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem('journalEntries')) || []
    setEntries(storedEntries)
  }, [])

  // Save entries to localStorage whenever entries change
  useEffect(() => {
    localStorage.setItem('journalEntries', JSON.stringify(entries))
  }, [entries])

  const addEntry = (newEntry) => {
    setEntries([newEntry, ...entries])
  }

  return (
    <div style={{ padding: '20px'}}>
      <h1>Journal App</h1>
      <JournalEntryForm addEntry={addEntry} />
      <JournalEntries entries={entries} />
    </div>
  )
}

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
