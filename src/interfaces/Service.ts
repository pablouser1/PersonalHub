export default interface Service {
  name: string;
  description: string;
  image?: string;
  url: string;
  source?: string;
  tags?: string[];
  langs?: string[];
}
