import { Hono } from "hono";
import { handle } from "hono/vercel";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.get("/hello", (c) => {
	return c.json({ message: "Hello, World!" });
});

export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const DELETE = handle(app);
export const PATCH = handle(app);
export const OPTIONS = handle(app);
export const HEAD = handle(app);
export const TRACE = handle(app);
export const CONNECT = handle(app);
export const COPY = handle(app);
export const LOCK = handle(app);
export const MKCOL = handle(app);
export const MOVE = handle(app);
export const PURGE = handle(app);
export const PROPFIND = handle(app);
export const PROPPATCH = handle(app);
export const UNLOCK = handle(app);
export const REPORT = handle(app);
export const MKACTIVITY = handle(app);
