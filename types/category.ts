export interface ICategory {
  id: number;
  title: string;
  slug: string;
  subtitle: string;
  icon: string;
  is_active: number;
  index: string;
  description: string | null;
  service_provider_count: number;
}
