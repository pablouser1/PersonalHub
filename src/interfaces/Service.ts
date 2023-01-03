export default interface Service {
  name: string;
  description: string;
  url: string;
  image?: string;
  source?: string;
  tags?: string[];
  langs?: string[];
  beta?: boolean;
}
