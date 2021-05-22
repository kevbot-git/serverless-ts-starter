import middy from '@middy/core';
import middyJsonBodyParser from '@middy/http-json-body-parser';

export default (handler) => middy(handler).use(middyJsonBodyParser());
