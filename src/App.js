import './App.css';
import Sidebar from './components/Sidebar/Sidebar'
import Reviews from './components/Reviews/Reviews'
import AvgRating from './components/AvgRating/AvgRating'
import SentiAnaly from './components/SentiAnaly/SentiAnaly'
import WebVisitors from './components/WebVisitors/WebVisitors'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Reviews reviewAmount="1,281"/>
      <AvgRating avgRating="4.6"/>
      <SentiAnaly />
      <WebVisitors visitorAmount="821"/>
    </div>
  );
}

export default App;
