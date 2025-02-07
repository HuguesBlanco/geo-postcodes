export type FetchResult<T> =
  | { isSuccess: true; data: T }
  | { isSuccess: false; error: Error };

export type ServiceReturn<T> = {
  result: Promise<FetchResult<T>>;
  abort: () => void;
};
