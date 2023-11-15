//  ==================== REGULAR AUTH ======================================
export type LoginParams = {
  email: string;
  password: string;
};

export type LogoutResponse = {
  detail: string;
};

//  ==================== USER ==============================================
export type CurrentUser = {
  id: number;
  username: string;
  email: string;
  isActive: boolean;
  created: string;
  updated: string;
};

//  ==================== TOKEN =============================================
export interface AccessToken {
  access: string | null;
}

export interface RefreshToken {
  refresh: string | null;
}

export type Token = AccessToken & RefreshToken;

//  ==================== SESSION =============================================
export type Session = Token & CurrentUser;
