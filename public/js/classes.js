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
/**     Create a object Patient
 * 
 * @param {*} name : name of patient
 * @param {*} illness : illness of patient
 * @param {*} money : money of patient
 * @param {*} pocket : pocket of patient
 * @param {*} health : health of patient
 */
    constructor(name, illness, money, pocket, health){
        this.name = name;
        this.illness = illness;
        this.money = money;
        this.pocket = pocket;
        this.health = health;
    }
}
//! DONE
/***********************************************/

// Description du docteur
 

// Le docteur reçoit les patients dans son cabinet.

// Il les diagnostique, se fait payer, puis prescrit un traitement.

// Attention, le docteur fait sortir le patient de son cabinet avant de prendre le suivant.

// Dans son cabinet, il y a son chat de race sphynx pour maintenir un environnement stérile.

// Son chat miaule toutes les deux secondes dans la console (bonus).

// La consultation coûte 50€. Les patients sont dans un état de traitement avant de sortir du cabinet.

 

// | Nom         | Argent | Cabinet | Diagnostique | Patient In | Patient Out |
// | ----------- | ------ | ------- | ------------ | ---------- | ----------- |
// | Debugger    | 0      | [chat]  | -            | -          | -           |


class Doctor {
    /**
     * 
     * @param {*} name : name of patient in office's doctor
     * @param {*} money : money of patient
     * @param {*} office : office of doctor
     * @param {*} diagnostic : diagnostic of patient by doctor
     * @param {*} patient_in : patient in office's of doctor
     * @param {*} patient_out : patient out of office's of doctor
     */
    constructor(name, money, office, diagnostic, patient_in, patient_out){
        this.name = name;
        this.money = money;
        this.office = office;
        this.diagnostic = diagnostic;
        this.patient_in = patient_in;
        this.patient_out = patient_out;
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