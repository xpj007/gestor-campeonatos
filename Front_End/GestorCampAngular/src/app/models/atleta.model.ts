export class Atleta {
    id?: any;
    at_nome?: string;
    at_dnasc?: Date;
    at_modalidade?: string;
    at_nota?: number;
    at_posicao?: string;
    publicado?: boolean;
}

export interface AtletaInt {
    at_nome: string;
    at_dnasc: Date;
    at_nota: number;
    at_posicao: string;
}

export interface AtletaConsul {
    items: AtletaInt[];
    hasNext: boolean;
  }
