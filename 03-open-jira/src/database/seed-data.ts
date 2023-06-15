import Entry from "../../models/Entry";



interface SeedData {
  entries: SeedEntry[];
}


interface SeedEntry {
  description: string;
  status: 'pending' | 'in-progress' | 'finished';
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    status: 'pending',
    createdAt: Date.now(),
    },
    {
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      status: 'in-progress',
      createdAt: Date.now() - 1000000,
    },
    {
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      status: 'finished',
      createdAt: Date.now() - 2400000,
    },
  ]
}