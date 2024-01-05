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

export let MARCUS = new CLASSES.Patient("Marcus","mal indenté", 100, "vide", "malade");
export let OPTIMUS = new CLASSES.Patient("Optimus","unsave", 200, "vide", "malade");
export let SANGOKU = new CLASSES.Patient("Sangoku","404", 80, "vide", "malade");
export let DARTHVADER = new CLASSES.Patient("DarthVader","azmatique", 110, "vide", "malade");
export let SEMICOLON = new CLASSES.Patient("Semicolon","syntaxError", 60, "vide", "malade");

//! DONE
/***************************************************************************** */

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

/* Creation of doctor */

export let DOCTOR = new CLASSES.Doctor("pierre", 0, 'chat', "-", "-", "-")