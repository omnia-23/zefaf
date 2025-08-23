export interface IOffer {
  id: number;
  name: string;
  image: string;
  link: string;
  start_date: string;
  end_date: string;
  status: "Active" | "Expired";
}
