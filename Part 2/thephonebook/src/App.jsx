import { useState } from 'react'
import Note from './components/Note'

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, content: 'Arto Hellas', number: '555-555-5555' }
    ]);

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addName = (event) => {
    event.preventDefault()

    const DuplicateName = persons.some((person) => person.content.toLowerCase() === newName.toLowerCase())

    if (DuplicateName){
      alert(`${newName} is already added to phonebook`)
      return;
    }
    const personObject = {
      content: newName,
      number: newNumber,
      id: String(persons.length + 1),
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={addName}>
          <div>name: <input value={newName} onChange={handleNameChange}/></div>
          <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
          <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
        {persons.map((person) => (
          <Note key={person.id} name={person.content} number={person.number} />
        ))}
    </div>
    
  )
}

export default App