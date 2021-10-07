export interface TaskInput {
  content: string;
  date: number;
  isCompleted: boolean;
  isImportant: boolean;
}

export interface TaskState extends TaskInput {
  id: number;
}
