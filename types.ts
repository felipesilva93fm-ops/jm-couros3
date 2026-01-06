
export interface Client {
  id: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  whatsapp: string;
  budget: string;
  observation: string;
  image?: string; // Base64 da imagem
  createdAt: number;
  aiInsight?: string;
}

export enum ViewMode {
  LIST = 'LIST',
  FORM = 'FORM',
  DETAILS = 'DETAILS'
}
