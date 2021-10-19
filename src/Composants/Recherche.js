import { useState } from 'react';
import { Button, Card, Container, Image, Input, Label, Message } from 'semantic-ui-react';


const Recherche = (props) => {

    const [nom, setNom] = useState("");
    const [cocktail, setCocktail] = useState([]);
    const [erreur, setErreur] = useState("");

    const renderCocktail = () => {
        return cocktail.drinks.map((iterateur) => {
            return (
                <Card key={iterateur.idDrink}>
                    <Card.Content onClick={() => {
                        props.history.push({
                            pathname: `/cocktail/${iterateur.idDrink}`, state: { cocktail: iterateur }
                        })
                    }} >
                        <Card.Header>
                            <p > {iterateur.strDrink}  </p>
                        </Card.Header>
                        <a> <Image src={iterateur.strDrinkThumb}></Image></a>
                    </Card.Content>
                </Card>)
        })
    }

    const appelerAPI = () => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nom}`)
            .then((response) => response.json())
            .then((donne) => setCocktail(donne))
            .catch((erreur) => setErreur(erreur));
    };

    return (
        <Container>

            <Label pointing="right"> Cocktail  </Label>
            <Input type="text"  value={nom}  onChange={(e) => { setNom(e.target.value) }}/>
            <Button onClick={appelerAPI} color="blue"> Trouver </Button>
            <hr />
            <h4>Résultats de la recherche</h4>
            {cocktail.drinks ? <Message> Il y a {cocktail.drinks.length} cocktails </Message> : undefined}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", width: "100%" }}>

                {cocktail.drinks ? renderCocktail() : undefined}
            </div>
            {cocktail.message === "Page Not Found" ? <Message> </Message> : undefined}
        </Container>
    );
}

export default Recherche;