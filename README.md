# express-async

middleware for using async in express

## installation

```
npm install @immutabl3/express-async
```

## usage

```js
import express from 'express';
import expressAsync from '@immutabl3/express-async';

const app = express();

// as middleware
app.use(expressAsync(async function myMiddleware(req, res, next) {
	// await can not safely be used
	const data = await findData();
	// errors are caught and automatically passed to next
	if (!data) throw new Error('missing data');
	// as middleware, next can be called at any point
	next();
}));

// as an endpoint
app.get('/', expressAsync(async function myEndpoint(req, res) {
	const data = await findData();
	res.send(data);
}));
```

## license

The MIT License (MIT)

Copyright (c) 2018 Immutable, LLC

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.