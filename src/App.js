import './styles.css'

function App() {
  return (
    <div id='app'>
      <h1>Validator</h1>
      <form>
        <input type="text" placeholder="Full name"></input>
        <input type="text" placeholder="Email"></input>
        <input type="number" placeholder="Number phone"></input>
        <input type="number" placeholder="CEP"></input>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default App;
