export interface AppConfig {
    port: number  ;
} 
export interface DbConfig {
    host: string;
    port: number ;
    name: string;
    user?: string;
    pass?: string;
}
export interface JwtConfig {
    secretKey?: string;
}

export interface EnvironmentConfig {
    app: AppConfig;
    db: DbConfig;
    jwt: JwtConfig;
  }
