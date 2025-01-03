import './App.css';
import EventEinsenden from './components/EventEinsenden';
import NumberAdd from './components/NumberAdd';
import PrintStars from './components/PrintStars';
import PrintTable from './components/PrintTable';

function App() {
  return (
    <div>
    <EventEinsenden/>
    <PrintTable/>
    <NumberAdd/>
    <PrintStars/>
    </div>
  );
}

export default App;
