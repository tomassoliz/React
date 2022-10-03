import './App.css'
import Menu from './componentes/Menu/Menu'

function App() {

  const styleApp = { backgroundColor: 'violet', fontSize: 20}

  return (

    <div
        className="App"
        style= { styleApp }
      >
        
      <Menu/>
      
      <h2>App en proceso</h2>

    </div>
  
  )
  
}

export default App;
