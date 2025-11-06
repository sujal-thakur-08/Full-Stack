export interface Tenant {
  id: string;
  name: string;
  domain: string;
  theme: TenantTheme;
  features: TenantFeatures;
}

export interface TenantTheme {
  primaryColor: string;
  secondaryColor: string;
  logo: string;
  font: string;
}

export interface TenantFeatures {
  modules: string[];
  limits: {
    users: number;
    storage: number;
  };
}

export interface User {
  id: string;
  tenantId: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
}

export interface AuthResponse {
  token: string;
  user: User;
  tenant: Tenant;
}