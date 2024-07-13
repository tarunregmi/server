# Server

Minimal express http server.

## Setup

Clone the repository:

```bash
git clone git@github.com:tarunregmi/server.git
```

Install the dependencies:

```bash
npm install
```

Make a copy of `.env.example` as `.env` and update your application details, database credentials and other required details.

Now, run development server:

```bash
npm run start:dev
```

For production:

```bash
npm run build && npm run start
```

## Performance Test

Switch to `status` branch:

```bash
git checkout status
```

And run,

```bash
npm run build && npm run start
```

Visit http://localhost:8848/status/ to performance status.

And try to add load by using your api, or use some other tools (Like Apache Benchmark) to measure the performance by adding load.

Using Apache Benchmark:

```bash
ab -k -c 100 -n 10000 "api-url"
```

API that need headers (like auth token)

```bash
ab -k -c 100 -n 10000 -H "Authorization: Bearer jwt" "api-url"
```
