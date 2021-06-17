import { ValidatedAPIGatewayProxyEvent } from '@/libs/apiGateway';
import { Context } from 'aws-lambda';
import schema from './schema';
import handler from './handler';
import { call } from '../../utils/tests';

describe('greet handler', () => {
  it('should do a thing', async () => {
    const res = await call(handler, <ValidatedAPIGatewayProxyEvent<typeof schema>>{
      body: {
        name: 'hello',
      },
    }, <Context>{});

    expect(res).toStrictEqual({
      body: JSON.stringify({
        message: 'Greetings, hello, welcome to the exciting Serverless world!',
      }),
      statusCode: 200,
    });
  });
});
