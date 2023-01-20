import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import CardTo from './components/cardTo/CardTo'

function App() {
  const DATA = [
   
  ];
  return (
    <>
    <Header/>
    <CardTo tasks={DATA} />
    <Footer/>

    </>
  );
}

export default App;
