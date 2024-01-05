// Description des patients
 

// Les patients ont un nom, une maladie, de l'argent, une poche, un état de santé.

// Ils savent se rendre à un endroit, prendre un médicament et payer.

// Au début, les patients sont dans une salle d'attente. 

// (Liste des patients que vous allez crée, avec leurs valeurs respectives)

// | Nom      | Maladie        | Argent | Poche | État de Santé |
// | -------- | -------------- | ------ | ----- | ------------- |
// | Marcus   | mal indenté    | 100    | vide  | malade        |
// | Optimus  | unsave         | 200    | vide  | malade        |
// | Sangoku  | 404            | 80     | vide  | malade        |
// | DarthVader | azmatique    | 110    | vide  | malade        |
// | Semicolon  | syntaxError  | 60     | vide  | malade        |

export class Patient {

    constructor(name, illness, money, pocket, health){
        this.name = name;
        this.illness = illness;
        this.money = money;
        this.pocket = pocket;
        this.health = health;
    }
}

class character {
    constructor(name, lieu, argent, mainDroite,mainGauche){
        this.name = name;
        this.lieu = lieu;
        this.argent = argent;
        this.mainDroite = mainDroite;
        this.mainGauche = mainGauche;

        this.seDeplacer = function(place) {
            place.personnes.push(this.name);
        }
        this.payerArticle = function(article) {
            this.argent -= article.price;
        }
        this.couper = function(ingredient, tool) {

            ingredient.isTransformed = true;
            // console.log(`We just cut the ${ingredient.name} with the ${tool.name}`);
        }
        this.melanger = function(contain) {
            console.log(`\nAll ingredients were mixed an this make a omelette`);
            contain.ingredient = [];
            // return "omelette";
        }
    }
};