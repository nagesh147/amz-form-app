import './App.css'
import EntryForm from './components/Forms/EntryForm'
import Header from './components/Header/Header'

function App() {
  return (
    <div className="App">
      <div className="appHeader">
        <Header />
        <EntryForm />
      </div>
    </div>
  )
}

export default App
