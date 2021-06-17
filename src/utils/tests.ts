import type { ValidatedAPIGatewayProxyEvent } from '@/libs/apiGateway';
import { Context } from 'aws-lambda';
import middy from '@middy/core';

export const one = 1;
export const call = (
  handler: middy.Middy<unknown, unknown, Context>,
  event: ValidatedAPIGatewayProxyEvent<unknown>,
  context: Context,
) => new Promise((resolve, reject) => handler(event, context, (error, result) => {
  if (error) {
    return reject(error);
  }
  return resolve(result);
}));
