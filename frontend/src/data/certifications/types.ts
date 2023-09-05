export type Certification = {
  id: string;
  name: string;
  date: Date;
  issuer: string;
  image: string;
  inProgress?: boolean;
};
