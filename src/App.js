import './App.css';

function Header(props){
  return(
    <h1>Charitable</h1>
  )
}

function Main(props){
  return(
    <section></section>
  )
}

function Footer(props){
  return(
    <p>Copyright {props.year}</p>
  )
}

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const dayObjects = days.map((day, i) => ({id: i, title: day}));

function App() {
  return (
    <div className="App">
      <Header adjective='awesome'/>
      <Main name='a blast' days={dayObjects}/>
      <Footer year={new Date().getFullYear()}/>
      
    </div>
  );
}

export default App;
