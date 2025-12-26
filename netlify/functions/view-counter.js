const fetch = require("node-fetch");

exports.handler = async (event) => {
  try {
    const slug = event.queryStringParameters?.slug;
    if (!slug) return { statusCode: 400, body: "Missing slug" };

    const SUPA_URL = process.env.SUPABASE_URL;
    const SUPA_KEY = process.env.SUPABASE_KEY;
    if (!SUPA_URL || !SUPA_KEY) return { statusCode: 500, body: "Supabase not configured" };

    const url = `${SUPA_URL}/rest/v1/views`;

    // upsert row (merge duplicates)
    await fetch(url, {
      method: "POST",
      headers: {
        apikey: SUPA_KEY,
        Authorization: `Bearer ${SUPA_KEY}`,
        "Content-Type": "application/json",
        Prefer: "resolution=merge-duplicates,return=representation"
      },
      body: JSON.stringify({ slug, count: 1 })
    });

    const res = await fetch(`${url}?slug=eq.${encodeURIComponent(slug)}&select=count`, {
      headers: { apikey: SUPA_KEY, Authorization: `Bearer ${SUPA_KEY}` }
    });
    const data = await res.json();
    return { statusCode: 200, body: JSON.stringify(data[0] || { count: 0 }) };
  } catch (err) {
    return { statusCode: 500, body: String(err) };
  }
};
