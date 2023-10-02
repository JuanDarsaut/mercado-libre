export interface ISession {
  user: string;
  token: string;
  fullName: string;
  permissions?: string[];
}
