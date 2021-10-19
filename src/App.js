import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';
import Accueil from './Composants/Accueil';
import Recherche from './Composants/Recherche';
import DetailCocktail from './Composants/DetailCocktail';


function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Container textAlign="center" >
          <h1> COCKTAIL POUR FÊTARD </h1>
        </Container>

        <Menu>
          <Menu.Item as={NavLink} activeStyle={{ color: "blue", fontWeight: "bold" }} to="/" exact > Accueil </Menu.Item>
          <Menu.Item as={NavLink} activeStyle={{ color: "blue", fontWeight: "bold" }} to="/recherche" > Recherche </Menu.Item>
          <Menu.Item as={NavLink} activeStyle={{ color: "blue", fontWeight: "bold" }} to="/cocktail" > Détails </Menu.Item>
        </Menu>

        <Switch>
          <Route path="/" component={Accueil} exact />
          <Route path="/recherche" component={Recherche} />
          <Route path="/cocktail/:codeDrink" component={DetailCocktail} />

        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
