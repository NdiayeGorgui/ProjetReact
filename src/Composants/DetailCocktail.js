import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Container, Image, Message, Segment } from 'semantic-ui-react';

const DetailCocktail = (props) => {
    

    const idDrink = props.match.params.codeDrink;
    const [cocktail, setCocktail] = useState([]);

    
    const renderCocktail = () => {
        return cocktail.drinks.map((iterateur) => {
            return (
                <Card key={iterateur.idDrink}>
                    <Card.Content  >
                        <Card.Header>
                            <p > {iterateur.strDrink}  </p>
                        </Card.Header>
                        <Image src={iterateur.strDrinkThumb}></Image>
                        <p><b>Catégorie:</b>   {iterateur.strCategory}  </p>
                        <p><b>Catégorie:</b>   {iterateur.strCategory}  </p>
                        <p><b>Catégorie:</b>   {iterateur.strCategory}  </p>
                        <p><b> Alcool:</b>   {iterateur.strAlcoholic}  </p>
                        <p><b> Glass:</b>   {iterateur.strGlass}  </p>
                        <p><b> Video:</b>   {iterateur.strVideo}  </p>
                        <p><b>Ingrédiens: </b> {iterateur.strIngredient1} ,
                            {iterateur.strIngredient2} ,
                            {iterateur.strIngredient3} ,
                            {iterateur.strIngredient4}  </p>

                            <p><b>Mesures: </b> {iterateur.strMeasure1} ,
                            {iterateur.strMeasure2} ,
                            {iterateur.strMeasure3} , </p>
                            <p><b> Date de modification:</b>   {iterateur.dateModified}  </p>
                    </Card.Content>
                </Card>)

        })
        
    }

    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
            .then((response) => response.json())
            .then((donnee) => setCocktail(donnee))
            .catch((err) => console.log(err));
    }, [idDrink])

   
    //console.log(cocktail)  

    return (
        <Container>

            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                width: "100%"
            }}>

                {cocktail.drinks ? renderCocktail() : undefined}

            </div>
            {cocktail.message === "Page Not Found" ? <Message> </Message> : undefined}
          
            <Link to={"/recherche"} className="btn btn-primary">Retour</Link>
        </Container>
    )
}

export default DetailCocktail;