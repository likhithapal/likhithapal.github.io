import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/home/Home";
import Research from "./components/research/Research";
import Experience from "./components/experience/Experience";
import Awards from "./components/awards/Awards";
import Service from "./components/service/Service";
import SceneSayer from "./components/papers/scenesayer/SceneSayer";
import ImparTail from "./components/papers/impartail/ImparTail";
import RoTpm from "./components/papers/rotpm/RoTpm";
import DroSpn from "./components/papers/drospn/DroSpn";
import Gto from "./components/papers/gto/Gto";
import CaptainCook from "./components/papers/captaincook/CaptainCook";

function App() {
  return (
      <HashRouter>
          <div className="App">
              <Routes>
                  <Route
                      exact
                      path="/"
                      element={
                          <Home/>
                      }
                  />
                  <Route
                      exact
                      path="/research"
                      element={
                          <Research/>
                      }
                  />
                  <Route
                      exact
                      path="/experience"
                      element={
                          <Experience/>
                      }
                  />
                  <Route
                      exact
                      path="/awards"
                      element={
                          <Awards/>
                      }
                  />
                  <Route
                      exact
                      path="/service"
                      element={
                          <Service/>
                      }
                  />
                  <Route
                      exact
                      path="/scenesayer"
                      element={
                          <SceneSayer/>
                      }
                  />
                  <Route
                      exact
                      path="/impartail"
                      element={
                          <ImparTail/>
                      }
                  />
                  <Route
                      exact
                      path="/rotpm"
                      element={
                          <RoTpm/>
                      }
                  />
                  <Route
                      exact
                      path="/drospn"
                      element={
                          <DroSpn/>
                      }
                  />
                  <Route
                      exact
                      path="/gto"
                      element={
                          <Gto/>
                      }
                  />
                  <Route
                      exact
                      path="/captaincook"
                      element={
                          <CaptainCook/>
                      }
                  />
              </Routes>
          </div>
      </HashRouter>
  );
}

export default App;