export interface Activity {
  id: number;
  name: string;
  description: string;
  date: string; // ISO string vinda do backend
  location: string;
  authorId: number | null;
  createdAt: string;
  updatedAt: string;
}

export interface ActivityFormValues {
  name: string;
  description: string;
  date: string; // formato "yyyy-MM-ddTHH:mm" (input datetime-local)
  location: string;
}

export type CreateActivityInput = Omit<ActivityFormValues, 'date'> & {
  date: string; // ISO
};

export type UpdateActivityInput = Partial<CreateActivityInput>;
