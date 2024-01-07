import * as INSTANCE from "./instances.js"
// Projet HealingCode
 

// Dans cet exercice, nous aurons des patients qui se rendront chez un docteur pour résoudre leurs problèmes de programmation.

// Le docteur les diagnostiquera, leur prescrira un traitement, puis les patients iront à la pharmacie pour acheter leur remède et le prendre, ce qui les guérira.

 

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
 
//! DONE   100% 

/* DISPLAY PATIENT OBJECT ( testing )*/

// console.log(INSTANCE.MARCUS);
// console.log(INSTANCE.OPTIMUS);
// console.log(INSTANCE.SANGOKU);
// console.log(INSTANCE.DARTHVADER);
// console.log(INSTANCE.SEMICOLON);

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

/* DISPLAY DOCTOR OBJECT ( testing )*/

// console.log(INSTANCE.DOCTOR);
// INSTANCE.CHAT.meow();

//! DONE 

/***************************************/

// Grille des diagnostics 
 

// | Maladie       | Traitement          |
// | ------------- | ------------------- |
// | mal indenté   | `ctrl+maj+f`        |
// | unsave        | `saveOnFocusChange` |
// | 404           | `CheckLinkRelation` |
// | azmatique     | `Ventoline`         |
// | syntaxError   | `f12+doc`           |
 
/* DISPLAY DIAGNOSTIC_GRID OBJECT ( testing )*/

// console.log(INSTANCE.DIAGNOSTIC_GRID);

//! DONE 
/***************************************************************************** */

// console.log(INSTANCE.OFFICE);

// La pharmacie 
 

// La pharmacie dispose de traitement. 

// Après le médecin, les patients se rendront à la pharmacie et recevront leur traitement s'ils ont assez d'argent.

// A leur arrivé a la pharmacie, un message de bienvenu a la pharmacie s'affiche dans la console.

// S'ils n'ont pas assez d'argent, ils seront considérés comme morts et devront être envoyé dans un cimetière.

 
// Tarif des traitements
 

// Voici les objets traitement (médicaments) que les patients peuvent acheter a la pharmacie

// | Traitement           | Prix  |
// | -------------------- | ----- |
// | `ctrl+maj+f`         | 60€   |
// | `saveOnFocusChange`  | 100€  |
// | `CheckLinkRelation`  | 35€   |
// | `Ventoline`          | 40€   |
// | `f12+doc`            | 20€   |
 
// console.log(INSTANCE.PHARMACY);

//! DONE 
/***************************************************************************** */

// Le cimetière
 

// Les patients qui a après être passés a la pharmacie n'ont pas pu se procurer leur remède, meurt

//  (un message triste du type annonces nécrologique, indique les détails du décès)

 
// console.log(INSTANCE.GRAVEYARD);
 
//! DONE 
/***************************************************************************** */

// Vérification
 

// Suivez attentivement l'évolution de chacun de vos patients grâce à vos console.log.

// Assurez vous qu'ils quittent chaque fois la salle d'attente  avant d'entrer dans le cabinet du médecin, et qu'ils sortent bien du cabinet avant de laisser quelqu'un d'autre entrer.
 
/**    Add patient object in place people array
 * 
 * @param {*} place : where to put patient object
 * @param {*} all_patients : array to find patient object name
 */
function add_people_to(place, all_patients) {
    let index = 0;
    let isFound = false;

    let p_found = null;

    while (!isFound || index < all_patients.length) {

        if (all_patients[index].name == place.people)  {
            place.people = [];
            place.people.push(all_patients[index]);
            p_found = all_patients[index];
            // console.log(all_patients[index]);
            // console.log(place.people);
            // console.log(place.waiting_room);
            isFound = true;
        }
        index++;
    }
    isFound = false;
    index = 0;
    while (!isFound && index < place.waiting_room[0].length ) {
        if (place.waiting_room[0][index].name ==  p_found.name) {
            place.waiting_room[0].splice(index,1);
            isFound = true;
        }
        index++;
    }
}

function find_treatment_to(illness, diagnostic_grid) {
    console.log(`So you have illness of ${illness} `);
    let pos_illness = diagnostic_grid.illness.indexOf(illness);
    let illness_treatment = diagnostic_grid.treatment[pos_illness];
    console.log(`The treatment of your illness is ${illness_treatment}`);

    return illness_treatment;

}
function find_price_to(diagnostic_of_patient, pharmacy) {
    let pos_treatment = pharmacy.treatment[0].indexOf(diagnostic_of_patient);

    let price_treatment = pharmacy.price[pos_treatment];
    return price_treatment;
}

function check_money_of(patient_money, consultation_price) {
    return patient_money >= consultation_price;
}

function diagnose(patient, doctor) {
    console.log(`Hello ${patient.name}, I'm ${doctor.name} the doctor\nso please tell me what is wrong ?`);
    doctor.name_patient = patient.name;

    let treatment = find_treatment_to(patient.illness, INSTANCE.DIAGNOSTIC_GRID);
    doctor.diagnose = treatment;
    patient.patient_diagnostic = treatment;

    console.log(`The consultation is over, the price is 50€`);
    if (check_money_of( patient.money, 50 ) ) {
        patient.money -= 50;
        console.log("Thank you for your trust");
        console.log(`Have a good day ${patient.name} :)`);

        doctor.money +=  50 ;
        // console.log(doctor.money);
    } else{
        console.log(`You just have ${patient.money} \nYou will have to take a credit\nBYE!` );
    }
    // console.log(doctor.diagnose);
}



function go_to_doctor(patient, doctor_office, doctor) {
    patient.moveTo(doctor_office);

    add_people_to(doctor_office, INSTANCE.PATIENTS);

    INSTANCE.DOCTOR.patient_in = patient;

    diagnose(patient,doctor);


    doctor.name_patient = ""; doctor.diagnotic = ""; doctor.patient_in = ""; 
    doctor.patient_out = patient;
    // console.log(doctor);

    return patient;

}
function go_to_graveyard(patient, graveyard) {
    console.log(`You don't have enough money to pay the treatment,\nYou will go to the ${graveyard.name} sorry :/`);
    graveyard.people.push(patient);
    console.log(`We are deeply saddened by the loss \nand send you our most sincere condolences for ${patient.name}`);
}

function go_to_pharmacy(patient, pharmacy) {

    console.log(`------ ${patient.name} is going to the ${pharmacy.name} ------`);
    console.log(`Welcome ${patient.name}, how can I help you ?`);
    pharmacy.people = patient;
    // console.log(pharmacy.people);
    console.log(`So, ${patient.name} you have illness of ${patient.illness}`);

    let price_treatment = find_price_to(patient.patient_diagnostic, pharmacy);
    console.log(`The ${patient.patient_diagnostic} treatment will cost you ${price_treatment}€`);


    if (patient.money >= price_treatment) {
        console.log(`You have ${patient.money}€ and the price for the treatment is ${price_treatment}€`);
        console.log(`Thank you for yout trust and and looking forward to never seeing again.`);
        patient.money -= price_treatment;
        console.log(`You have now ${patient.money}`); 
    } else{
        console.log(`You have ${patient.money}€ and the price for the treatment is ${price_treatment}€`);
        go_to_graveyard(patient, INSTANCE.GRAVEYARD);
        console.log(INSTANCE.GRAVEYARD);

    }

}

function life() {

    //Welcoming message of the software
    console.log("Hello, we are going to see what is LIFE ! ");

    //Patients going to doctor's office
    console.log(`------ ${INSTANCE.PATIENTS.map( (x) => x.name + " ")}------\n       are going to the doctor's ${INSTANCE.OFFICE.name}`);

    //Patients are in waiting room first
    INSTANCE.OFFICE.waiting_room.push(INSTANCE.PATIENTS);
    console.log(`But the doctor ${INSTANCE.DOCTOR.name} can help only one patient at the same time\nSo, ${INSTANCE.OFFICE.waiting_room[0].map( (x) => x.name + " ")}are waiting on the waiting room`);

    
    // First patient to get the doctor
    
    let client ="";
    client = go_to_doctor(INSTANCE.PATIENTS[2], INSTANCE.OFFICE, INSTANCE.DOCTOR);
    

    //now patient go to the pharmacy
    go_to_pharmacy(client, INSTANCE.PHARMACY)
    // console.log(INSTANCE.SANGOKU);
    // console.log(INSTANCE.PHARMACY);

}

life();