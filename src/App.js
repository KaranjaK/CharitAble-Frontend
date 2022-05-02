import './App.css';

function Header(prop){
  return(
    <h1>It gonna be a {prop.adjective} day!!!</h1>
  )
}

function Main(prop){
  return(
    <p>We are going to have {prop.name} today.</p>
  )
}

function Footer(prop){
  return(
    <p>Copyright {prop.year}</p>
  )
}

function App() {
  return (
    <div className="App">
      <Header adjective='awesome'/>
      <Main name='a blast'/>
      <Footer year={new Date().getFullYear()}/>
      
    </div>
  );
}

export default App;
