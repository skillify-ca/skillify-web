

export type UserGoalsData = {
  createdAt: Date;
  goalName: string;
  goalNotes?: string;
  id: string;
  updatedAt: Date;
  userId: string;
  isComplete: boolean;
  targetDate: Date;
  isArchived: boolean;
};
