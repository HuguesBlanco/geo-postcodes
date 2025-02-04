import { describe, expect, it } from 'vitest';
import {
  normalizeFetchError,
  parseFetchResponse,
  validateData,
} from './fetchUtils';

describe('parseFetchResponse', () => {
  it('should resolve with success and parsed JSON content for a successful response', async () => {
    const mockJson = { content: 'The content value' };
    const response = new Response(JSON.stringify(mockJson), {
      status: 200,
      statusText: 'OK',
      headers: { 'Content-Type': 'application/json' },
    });
    const actualResult = await parseFetchResponse(response);
    const expectedResult = { isSuccess: true, data: mockJson };
    expect(actualResult).toEqual(expectedResult);
  });

  it('should resolve with failure and an error message for a failed response', async () => {
    const response = new Response(null, {
      status: 404,
      statusText: 'Not Found',
    });
    const actualResult = await parseFetchResponse(response);
    const expectedResult = {
      isSuccess: false,
      error: new Error('Error 404: Not Found'),
    };
    expect(actualResult).toEqual(expectedResult);
  });

  it('should resolve with failure when JSON parsing fails', async () => {
    const response = new Response('invalid-json', {
      status: 200,
      statusText: 'OK',
      headers: { 'Content-Type': 'application/json' },
    });
    const actualResult = await parseFetchResponse(response);
    const expectedResult = {
      isSuccess: false,
      error: new Error('Failed to parse JSON response'),
    };
    expect(actualResult).toEqual(expectedResult);
  });

  it('should return a new object and not be affected by modifications to the original input', async () => {
    const mockJson = { content: 'Original content' };
    const response = new Response(JSON.stringify(mockJson), {
      status: 200,
      statusText: 'OK',
      headers: { 'Content-Type': 'application/json' },
    });

    const actualResult = await parseFetchResponse(response);

    mockJson.content = 'Modified content';

    expect(actualResult.isSuccess).toBe(true);
    if (actualResult.isSuccess) {
      expect(actualResult.data).toEqual({ content: 'Original content' });
    }
  });
});

describe('validateData', () => {
  type ValidType = { key: string };

  it('should return success when validator valid data', () => {
    // @ts-expect-error: 'content' is intentionally unused in this mock function, but TypeScript reports it as an error. Disabling the check.
    const successfulValidator = (content: unknown): content is ValidType =>
      true;
    const validContent = { key: 'value' };
    const actualResult = validateData(validContent, successfulValidator);
    const expectedResult = { isSuccess: true, data: validContent };
    expect(actualResult).toEqual(expectedResult);
  });

  it('should return failure when validator does not valid data', () => {
    // @ts-expect-error: 'content' is intentionally unused in this mock function, but TypeScript reports it as an error. Disabling the check.
    const failingValidator = (content: unknown): content is ValidType => false;
    const invalidContent = { key: 123 };
    const actualResult = validateData(invalidContent, failingValidator);
    const expectedResult = {
      isSuccess: false,
      error: new Error('Invalid data structure'),
    };
    expect(actualResult).toEqual(expectedResult);
  });

  it('should return a new object and not be affected by modifications to the original input', () => {
    const validContent = { key: 'original' };
    // @ts-expect-error: 'content' is intentionally unused in this mock function, but TypeScript reports it as an error. Disabling the check.
    const successfulValidator = (content: unknown): content is ValidType =>
      true;

    const actualResult = validateData(validContent, successfulValidator);

    validContent.key = 'modified';

    expect(actualResult.isSuccess).toBe(true);
    if (actualResult.isSuccess) {
      expect(actualResult.data.key).toBe('original');
    }
  });
});

describe('normalizeFetchError', () => {
  it('should return failure with the original error if error is an instance of Error', () => {
    const testError = new Error('Network failure');
    const actualResult = normalizeFetchError(testError);
    const expectedResult = { isSuccess: false, error: testError };
    expect(actualResult).toEqual(expectedResult);
  });

  it('should return failure with a generic error if input is not an instance of Error', () => {
    const actualResult = normalizeFetchError('Unexpected issue');
    const expectedResult = {
      isSuccess: false,
      error: new Error('Unknown error'),
    };
    expect(actualResult).toEqual(expectedResult);
  });

  it('should return a new error object and not be affected by modifications to the original error', () => {
    const testError = new Error('Original error message');
    const actualResult = normalizeFetchError(testError);

    testError.message = 'Modified error message';

    expect(actualResult.isSuccess).toBe(false);
    if (!actualResult.isSuccess) {
      expect(actualResult.error.message).toBe('Original error message');
    }
  });
});
