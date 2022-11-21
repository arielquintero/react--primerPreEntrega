import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './ComponentContainer/ItemListContainer'
import './App.scss'

function App() {
    
 const showName = name => name;

  return (
    <>
      <NavBar />
      <ItemListContainer 
      greeting={'Te saludo desde Item List Container, '}
      myName = { showName('Ariel') }
       />
    </>
  )
}

export default App
