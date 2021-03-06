import handlerPath from '@/libs/handlerResolver';
import schema from './schema';

export default {
  handler: `${handlerPath(__dirname)}/handler.default`,
  events: [
    {
      http: {
        method: 'post',
        path: 'greet',
        request: {
          schemas: {
            'application/json': schema,
          },
        },
      },
    },
  ],
};
