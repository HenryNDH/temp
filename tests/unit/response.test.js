 
const { createErrorResponse, createSuccessResponse } = require('../../src/response');

// Define (i.e., name) the set of tests we're about to do
describe('API Responses', () => {
  // Test for createErrorResponse()
  test('createErrorResponse()', () => {
    const errorResponse = createErrorResponse(404, 'not found');
    expect(errorResponse).toEqual({
      status: 'error',
      error: {
        code: 404,
        message: 'not found',
      },
    });
  });

  // Test for createSuccessResponse() with no argument
  test('createSuccessResponse()', () => {
    const successResponse = createSuccessResponse();
    expect(successResponse).toEqual({
      status: 'ok',
    });
  });

  // Test for createSuccessResponse() with an argument
  test('createSuccessResponse(data)', () => {
    const data = { a: 1, b: 2 };
    const successResponse = createSuccessResponse(data);
    expect(successResponse).toEqual({
      status: 'ok',
      a: 1,
      b: 2,
    });
  });
});
