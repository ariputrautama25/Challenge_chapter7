const request = require("supertest");
const app = require("./app");

describe("GET /pemasok", () => {
  it("should return list of pemasok", async () => {
    const response = await request(app).get("/pemasok");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.arrayContaining([])); // Array of pemasok
  });

  it("should return error when server error", async () => {
    const response = await request(app).get("/pemasok/error");
    expect(response.status).toBe(500);
    expect(response.body.error).toBeDefined();
  });
});

describe("POST /pemasok", () => {
  it("should create new pemasok", async () => {
    const data = { nama: "Pemasok 1", alamat: "Alamat Pemasok 1" };
    const response = await request(app).post("/pemasok").send(data);
    expect(response.status).toBe(201);
    expect(response.body.nama).toBe(data.nama);
    expect(response.body.alamat).toBe(data.alamat);
  });

  it("should return error when data is incomplete", async () => {
    const data = { nama: "Pemasok 1" };
    const response = await request(app).post("/pemasok").send(data);
    expect(response.status).toBe(400);
    expect(response.body.error).toBeDefined();
  });
});

describe("GET /pemasok/:id", () => {
  it("should return the specified pemasok", async () => {
    const response = await request(app).get("/pemasok/1");
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(1);
  });

  it("should return error when pemasok is not found", async () => {
    const response = await request(app).get("/pemasok/999");
    expect(response.status).toBe(404);
    expect(response.body.error).toBeDefined();
  });
});

describe("PUT /pemasok/:id", () => {
  it("should update the specified pemasok", async () => {
    const data = { nama: "Pemasok Updated", alamat: "Alamat Pemasok Updated" };
    const response = await request(app).put("/pemasok/1").send(data);
    expect(response.status).toBe(200);
    expect(response.body.nama).toBe(data.nama);
    expect(response.body.alamat).toBe(data.alamat);
  });

  it("should return error when pemasok is not found", async () => {
    const data = { nama: "Pemasok Updated", alamat: "Alamat Pemasok Updated" };
    const response = await request(app).put("/pemasok/999").send(data);
    expect(response.status).toBe(404);
    expect(response.body.error).toBeDefined();
  });
});

describe("DELETE /pemasok/:id", () => {
  it("should delete the specified pemasok", async () => {
    const response = await request(app).delete("/pemasok/1");
    expect(response.status).toBe(204);
  });

  it("should return error when pemasok is not found", async () => {
    const response = await request(app).delete("/pemasok/999");
    expect(response.status).toBe(404);
    expect(response.body.error).toBeDefined();
  });
});
