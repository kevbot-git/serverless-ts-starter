import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@/libs/apiGateway';
import { formatJSONResponse } from '@/libs/apiGateway';
import middyfy from '@/libs/lambda';

import schema from './schema';

const greet: ValidatedEventAPIGatewayProxyEvent<
  typeof schema
> = async (event) => {
  console.log('greet event', event);

  return formatJSONResponse({
    message: `Greetings, ${event.body.name}, welcome to the exciting Serverless world!`,
  });
};
export default middyfy(greet);
