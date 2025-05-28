export interface BadgeData {
  name: string;
  email: string;
  photoURL: string | null;
}

export interface EmailData {
  to: string;
  name: string;
  subject?: string;
  message?: string;
}
