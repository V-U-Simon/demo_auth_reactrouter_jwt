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
  pk: number;
  email: string;
}

// =======================  LOGIN =======================
export type LoginParams = {
  email: string;
  password: string;
};

export type Session = Token & {
  user: CurrentUserType;
};
