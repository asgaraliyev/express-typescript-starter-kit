import { strict as assert } from 'assert';
import { env } from 'process';
import { load } from 'ts-dotenv';
console.log(env);
// const env = load({
//   TEST: String,
//   PORT: Number,
// });

// assert.ok(env.TEST === 'test');
// assert.ok(env.PORT === 1234);
