export type FetchResult<T> =
  | { isSuccess: true; data: T }
  | { isSuccess: false; error: Error };
