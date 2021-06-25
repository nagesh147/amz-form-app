import './App.css'
import EntryForm from './components/Forms/EntryForm'
import Header from './components/Header/Header'

function App() {
  return (
    <div className="App">
      <div className="appHeader">
        <h3 className="pageQuestion">
          Own Illness or Injury Leave Questions new
        </h3>
        <Header />
        <EntryForm />
      </div>
    </div>
  )
}

export default App
