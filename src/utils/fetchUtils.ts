import { Result } from '../types/fetchTypes';

export function parseFetchResponse(
  response: Response,
): Promise<Result<unknown>> {
  if (!response.ok) {
    const statusCode = String(response.status);
    const statusMessage = response.statusText;
    const errorMessage = `Error ${statusCode}: ${statusMessage}`;

    return Promise.resolve({
      isSuccess: false as const,
      error: Error(errorMessage),
    });
  }

  return response
    .json()
    .then((data) => ({
      isSuccess: true as const,
      data: structuredClone(data) as unknown,
    }))
    .catch(() => ({
      isSuccess: false as const,
      error: Error('Failed to parse JSON response'),
    }));
}

export function validateData<T>(
  data: unknown,
  validator: (data: unknown) => data is T,
): Result<T> {
  if (!validator(data)) {
    return {
      isSuccess: false as const,
      error: Error('Invalid data structure'),
    };
  }

  return {
    isSuccess: true as const,
    data: structuredClone(data),
  };
}

export function normalizeFetchError(error: unknown): Result<never> {
  const normalizedError =
    error instanceof Error
      ? structuredClone(error)
      : new Error('Unknown error');

  return {
    isSuccess: false as const,
    error: normalizedError,
  };
}
