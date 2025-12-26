import type { APIRoute } from "astro";
export const get: APIRoute = async () => {
return new Response(
`<?xml version="1.0"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url><loc>https://your-site-url.netlify.app</loc></url>
</urlset>`,
{ headers:{ "Content-Type":"application/xml" } }
);
};
