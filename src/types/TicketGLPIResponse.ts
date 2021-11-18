export type TicketGLPIResponseData = {
  '2': string; // ticket id
  '12': string; // status
  '1': string; //ticket name
  '5': string[]| string; //ticket technicians id
  '21': string; //ticket content
  '15': string; //abertura
  '17': string; // solution date
  '19': string; // last updated date
  '18': string; // solution time
  '7': string; // categoria
  '83': string; //Localization
  '24': string; //solution
  '76665': string; //número do patrimônio  - inventory equipment number
};

export type TicketGLPIReadable = {
  id: string;
  title: string;
  content: string;
  technicians_id: string[];
  place: string;
  categorie: string;
  last_update_time: Date | string;
  solution: string;
  solution_time: Date | string;
  inventory_number: string;
};
