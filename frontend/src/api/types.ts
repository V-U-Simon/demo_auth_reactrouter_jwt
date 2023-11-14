// ======================= TOKEN =======================
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

// =======================  USER =======================
export interface CurrentUserType {
  id: number;
  username: string;
  email: string;
  is_active: boolean;
  created: string;
}

// =======================  LOGIN =======================
export type LoginParams = {
  email: string;
  password: string;
};

export type Session = {
  access: accessToken;
  refresh: refreshToken;
  user: CurrentUserType;
};
