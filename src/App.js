import './App.css';
import { Row } from 'reactstrap';
import Lottie from 'react-lottie';
import animationData from './lotties/love-letter.json';
import { useState } from 'react';
import { MainPage } from './pages/MainPage';


function App() {
  const [isOpen, setOpen] = useState(false);

  const eventListeners = [
    {
      eventName: 'complete',
      callback: () => setOpen(true),
    },
  ]

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="App">
      {
        isOpen &&
        <Row>
          <MainPage 
            setOpen={setOpen}
          />
        </Row>
      }
      {
        !isOpen &&
        <Lottie
          options={defaultOptions}
          width={300}
          eventListeners={eventListeners}
        />
      }
    </div>
  );
}

export default App;
