// Vercel serverless entry point.
// Every /api/* request is handled by the same Express app that `npm start` runs.
// vercel.json rewrites /api/(.*) here because bracket file names only match a
// single path segment in Vercel's generated routes.
module.exports = require("../server");
