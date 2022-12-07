import { Injectable } from '@angular/core';
import { Question } from '../model/question.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  questions!:Question[];

  constructor() {
      this.questions=[
        {
        text:"Congé des appelés SND ",
        answer:'c’est une période de 15 jours accordée à l’appelé de Service National pendant son service légal. Toutefois, une permission de 05 jours supplémentaires lui peut être accordée sans pour autant que le cumul n’excède 20 jours.',
        hide:true
      },

      {
        text:"Congé pour concours ou examen professionnel ",
        answer:' c’est un congé avec traitement accordé au fonctionnaire pour lui permettre de subir les épreuves de concours ou examens professionnels',
        hide:true
      },

      {
        text:"Autorisation d’absence ",
        answer:' c’est une période d’arrêt de travail accordé à un agent avec maintien du traitement. Il peut s’agir d’une absence pour événements familiaux, pour activités syndicales, pour activité intérêt national, pour élection',
        hide:true
      },

      {
        text:"Congé de maladie ",
        answer:'c’est une période de repos accordée à tout fonctionnaire dans l’impossibilité d’exercer son emploi pour raison de santé constatée par une autorité médicale agréée avec à l’appui un certificat médical établi précisant le début et la fin probable de l’incapacité de travail. Il existe deux types de congés maladies : le congé de maladie de courte durée et celui de longue durée. ',
        hide:true
      },

      {
        text:" Congé de maternité ",
        answer:'c’est une période de 14 semaines de repos accordée au personnel féminin de la fonction publique pour raison de maternité au vu d’un certificat médical délivré par un médecin agréé, une sage-femme ou un maïeuticien d’Etat qui commence au plus tôt 08 semaines et au plus tard 04 semaines avant la date présumée d’accouchement.   ',
        hide:true
      },

      

  ];

    
   }
   getQuestion(){
    return this.questions;
   }
}
