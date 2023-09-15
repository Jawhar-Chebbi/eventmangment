export class User {
  id: number;
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  telNumber: number;
  dateNaissance: Date;
  interest: string;
  address: string;
  sexe: SexeEnum ;
  role : RoleEnum
}

export enum SexeEnum {
  HOMME = 'HOMME',
  FEMME = 'FEMME',
}

export enum RoleEnum {
  ADMIN = 'ADMIN',
  VISITOR = 'VISITOR',
  ORGANISER = 'ORGANISER',
}
