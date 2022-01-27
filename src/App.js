import { Route, Routes } from 'react-router-dom';
import Calculator from './components/calculator';
import Home from './components/pages/Home';
import Quotes from './components/pages/Quotes';
import Navbar from './components/Navbar';

function App() {
  const fonty = {
    fontSize: '1.5rem',
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/Calculator"
          element={(
            <div className="letty">
              <h2 style={fonty}>Let&apos;s do some math!!!</h2>
              <div className="calculator-container">
                <Calculator />
              </div>
            </div>
          )}
        />
        <Route
          path="/Home"
          element={
            <Home />
          }
        />
        <Route
          path="/Quotes"
          element={
            <Quotes />
          }
        />
      </Routes>
    </>
  );
}

export default App;
