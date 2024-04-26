export interface ITodoResponse {
  id: number;
  title: string;
  is_checked: boolean;
  description: string;
  created_at: string;
  updated_at: string;
  actualDate?: string;
}
