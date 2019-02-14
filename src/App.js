import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
//import React, { useState } from 'react';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Laura', age: 25 },
      { id: 3, name: 'Daniel', age: 25 }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Laura M.', age: 25 },
        { name: 'Daniel F.', age: 25 }
      ]
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={this.deletePersonHandler.bind(this, index)} 
                name={person.name} 
                age={person.age} 
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)} />
            )
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hey there</h1>
        {/* <button 
          style={style}
          onClick={this.switchNameHandler.bind(this, 'Maximilian')}>
          Switch Name
        </button> */}
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
        {/* { 
          this.state.showPersons ? 
            <div>
              <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age} 
                changed={this.nameChangedHandler} />
                // Using arrow functions in click handler could be inneficient! //
              <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                click={() => this.switchNameHandler('Max!')} />
              <Person 
                name={this.state.persons[2].name}
                age={this.state.persons[2].age}>
                Mi hobbies are: Coding
              </Person>
            </div> : null
        } */}
      </div>
    );
  }
}

export default App;

// const app = props => {
//   const [ personsState, setPersonsState ] = useState(
//     {
//       persons: [
//         { name: 'Max', age: 28 },
//         { name: 'Laura', age: 25 },
//         { name: 'Daniel', age: 25 }
//       ]
//     }
//   );

//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         { name: 'Maximilian', age: 28 },
//         { name: 'Laura M.', age: 25 },
//         { name: 'Daniel F.', age: 25 }
//       ]
//     });
//   }
  
//   return (
//     <div className="App">
//       <h1>Hey there</h1>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>Mi hobbies are: Coding</Person>
//     </div>
//   );
// }

// export default app;
