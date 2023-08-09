export default interface CV {
  base: string;
  variants: Variant[];
}

export interface Variant {
  id: string;
  name: string;
  flag: string;
}
