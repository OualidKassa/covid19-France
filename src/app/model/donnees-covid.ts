export interface DonneesCovid {
  casConfirmes: number;
  deces: number;
  decesEhpad: number;
  reanimation: number;
  hospitalises: number;
  gueris: number;
  date: string;
  nouvellesHospitalisations: number;
  nouvellesReanimations: number;
  nouvellesPremieresInjections: number;
  cumulPremieresInjections: number;
  stockNombreTotalDoses: number;
  stockNombreDosesPfizer: number;
  stockNombreDosesModerna: number;
  livraisonsCumulNombreTotalDoses: number;
  livraisonsCumulNombreDosesPfizer: number;
  livraisonsCumulNombreDosesModerna: number;
  totalPrisesRendezVousSemaine: number;
  prisesRendezVousSemaineRang1: number;
  prisesRendezVousSemaineRang2: number;
  stockEhpadNombreDosesPfizer: number
}
