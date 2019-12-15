import React from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <label htmlFor='bar'>bar</label>
        <input type='text' onChange={() => {console.log('changed')}}></input>
      </div>
    )
  }
}

// Class Component ↓

// function App() {
//   return (
//     <div>
//       <Cat/>
//       <Cat/>
//     </div>
//   )
// }

// const Cat = () => {
//   return <div>Meow!!</div>
// }

 
export default App;

