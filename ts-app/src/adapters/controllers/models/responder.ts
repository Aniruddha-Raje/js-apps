export interface Responder {
  success: (data?: any) => void;
  error: (error: Error, statusCode?: number) => void;
}

export interface ResponderFunc {
  (...args: any): Responder;
}
