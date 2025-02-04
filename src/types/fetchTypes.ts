export type Result<T> =
  | { isSuccess: true; data: T }
  | { isSuccess: false; error: Error };
