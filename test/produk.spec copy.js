const request = require("supertest");
const app = require("./app");

describe("GET /produk", () => {
  it("should retrieve all products", async () => {
    const response = await request(app).get("/produk");
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
    expect(Array.isArray(response.body)).toBeTruthy();
  });

  it("should return error when server encounters an error", async () => {
    const response = await request(app).get("/produk/error");
    expect(response.status).toBe(500);
    expect(response.body.error).toBeDefined();
  });
});

describe("POST /produk", () => {
  it("should create a new product", async () => {
    const newProduct = {
      nama: "Product 1",
      harga: 100,
      kategori: "Category 1",
    };

    const response = await request(app).post("/produk").send(newProduct);
    expect(response.status).toBe(201);
    expect(response.body).toMatchObject(newProduct);
  });

  it("should return error when request body is invalid", async () => {
    const invalidProduct = {
      harga: 200,
      kategori: "Category 2",
    };

    const response = await request(app).post("/produk").send(invalidProduct);
    expect(response.status).toBe(400);
    expect(response.body.error).toBeDefined();
  });
});

describe("GET /produk/:id", () => {
  it("should retrieve the specified product", async () => {
    const productId = 1;
    const response = await request(app).get(`/produk/${productId}`);
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(productId);
  });

  it("should return error when product is not found", async () => {
    const nonExistingProductId = 999;
    const response = await request(app).get(`/produk/${nonExistingProductId}`);
    expect(response.status).toBe(404);
    expect(response.body.error).toBeDefined();
  });
});

describe("PUT /produk/:id", () => {
  it("should update the specified product", async () => {
    const productId = 1;
    const updatedProduct = {
      nama: "Updated Product 1",
      harga: 200,
      kategori: "Updated Category 1",
    };

    const response = await request(app)
      .put(`/produk/${productId}`)
      .send(updatedProduct);
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject(updatedProduct);
  });

  it("should return error when product is not found", async () => {
    const nonExistingProductId = 999;
    const updatedProduct = {
      nama: "Updated Product",
      harga: 300,
      kategori: "Updated Category",
    };

    const response = await request(app)
      .put(`/produk/${nonExistingProductId}`)
      .send(updatedProduct);
    expect(response.status).toBe(404);
    expect(response.body.error).toBeDefined();
  });
});

describe("DELETE /produk/:id", () => {
  it("should delete the specified product", async () => {
    const productId = 1;
    const response = await request(app).delete(`/produk/${productId}`);
    expect(response.status).toBe(204);
  });

  it("should return error when product is not found", async () => {
    const nonExistingProductId = 999;
    const response = await request(app).delete(
      `/produk/${nonExistingProductId}`
    );
    expect(response.status).toBe(404);
    expect(response.body.error).toBeDefined();
  });
});
