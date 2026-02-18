import { runQuery, bootstrapDatabase } from "./db.js";

// Small helper to keep responses consistent
function jsonResponse(statusCode, payload) {
  return {
    statusCode,
    body: JSON.stringify(payload)
  };
}

// -------------------------
// BOOTSTRAP HANDLER
// -------------------------
export const bootstrapHandler = async (event, context) => {
  logInvocationDetails(event, context);

  try {
    const code = await bootstrapDatabase();

    return jsonResponse(code, {
      status: "ok",
      message: "Database reset and seeded with sample bakehouse data"
    });
  } catch (err) {
    console.error("bootstrapHandler error:", err);

    return jsonResponse(500, {
      status: "error",
      message: "Failed to bootstrap database"
    });
  }
};

// -------------------------
// PRODUCTS
// -------------------------
export const productCatalogHandler = async (event, context) => {
  logInvocationDetails(event, context)

  try {
    const result = await runQuery(`
      SELECT id, name, description, price_credit, image, era
      FROM products
      WHERE image IS NOT NULL
      ORDER BY id;
    `)

    const rows = normaliseRows(result)

    // Use the pdf_url to derive the slug the front end expects
    const productObjects = rows.map((r) => ({
      id: r.id,
      name: r.name,
      description: r.description,
      priceCredit: r.price_credit,
      imageUrl: r.image_url,
      slug: r.image_url.replace(/\.image$/i, '')
    }))

    const productSlugs = productObjects.map((p) => p.slug)

    return {
      statusCode: 200,
      body: JSON.stringify({
        status: 'ok',
        featuredProduct: process.env.FEATURED_PRODUCT || null,
        products: productSlugs,        // what the UI already uses
        productDetails: productObjects // extra data if you need it later
      })
    }
  } catch (error) {
    console.error('productCatalogHandler error:', error)

    return {
      statusCode: 500,
      body: JSON.stringify({
        status: 'error',
        message: 'Failed to load products'
      })
    }
  }
}