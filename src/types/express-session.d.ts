import 'express-session';

declare module 'express-session' {
  export interface Session {
    clearSession(): Promise<void>; // DO NOT MODIFY THIS!

    // NOTES: Add your app's custom session properties here:
    authenticatedUser: {
      email: string;
      userId: string;
      address: string;
      birthday: number;
      admin: boolean;
    };
    
    isLoggedIn: boolean;

  }
}
