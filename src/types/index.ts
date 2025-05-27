export interface Specialization {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  content: string;
  avatar?: string;
  role?: string;
  stars?: number;
}