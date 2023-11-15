//  ==================== REGULAR AUTH ======================================
export type LoginParams = {
  email: string;
  password: string;
};

export type Session = {
  access: accessToken;
  refresh: refreshToken;
  user: CurrentUser;
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

export interface accessToken {
  access: string | null;
}

export interface refreshToken {
  refresh: string | null;
}

export interface Token {
  access: accessToken;
  refresh: refreshToken;
}
