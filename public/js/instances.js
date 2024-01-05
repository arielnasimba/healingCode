import * as CLASSES from "./classes.js"
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

/* Creation of all patients */

let MARCUS = new CLASSES.Patient("Marcus","mal indenté", 100, "vide", "malade");
let OPTIMUS = new CLASSES.Patient("Optimus","unsave", 200, "vide", "malade");
let SANGOKU = new CLASSES.Patient("Sangoku","404", 80, "vide", "malade");
let DARTHVADER = new CLASSES.Patient("DarthVader","azmatique", 110, "vide", "malade");
let SEMICOLON = new CLASSES.Patient("Semicolon","syntaxError", 60, "vide", "malade");