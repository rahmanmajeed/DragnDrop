export type Status = "task" | "in-progress" | "done";

export interface Data {
  id: number;
  content: string;
  status: Status;
}
