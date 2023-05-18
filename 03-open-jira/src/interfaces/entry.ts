

export interface Entry {
  _id: string;
  description: string;
  createdAt: number;
  status: EntriesState;
}

export type EntriesState = 
  | 'pending'
  | 'in-progress'
  | 'finished'