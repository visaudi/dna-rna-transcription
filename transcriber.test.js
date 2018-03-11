'use strict';

const transcriber = require('./transcriber.js');

test('transcribes C to G', () =>{
	expect(transcriber('C')).toBe('G');
});
