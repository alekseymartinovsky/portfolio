import style from './App.module.scss';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import Info from './components/Info/Info';
import About from './components/About/About';
import { useState } from 'react';
import info from './info.json';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  const [selectCard, setSelectCard] = useState(0);
  return (
    <div>
      <BrowserRouter basename="/portfolio">
        <Header />
        <Switch>
          <Route exact path="/">
            <div className={style.main}>
              <Container setSelect={setSelectCard} selectCard={selectCard} info={info} />
              <Info selectCard={selectCard} info={info} />
            </div>
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
