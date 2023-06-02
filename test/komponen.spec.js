// const supertest = require("supertest");
// const app = require("../app.js");
// const truncate = require("../utils/truncate");

// truncate.komponen();

// const komponen = {
//   komponen_id: "1",
//   nama_komponen: "buku",
// };

// // index
// describe("TEST /auth/index endpoint", () => {
//   // positive
//   test("Komponen berhasil : menampilkan komponen", () => {
//     return supertest(app)
//       .get("/auth/index")
//       .send(komponen)
//       .then((res) => {
//         console.log(res.body);

//         expect(res.statusCode).toBe(201);
//         expect(res.body).toHaveProperty("status");
//         expect(res.body).toHaveProperty("message");
//         expect(res.body).toHaveProperty("data");
//         expect(res.body.data).toHaveProperty("komponen_id");
//         expect(res.body.data).toHaveProperty("nama_komponen");
//         expect(res.body.status).toBe(true);
//         expect(res.body.message).toBe("user created komponen");
//       });
//   });

//   // negative
//   test("Komponen gagal : menampilkan komponen", () => {
//     return supertest(app)
//       .get("/auth/index")
//       .send(komponen)
//       .then((res) => {
//         console.log(res.body);

//         expect(res.statusCode).toBe(400);
//         expect(res.body).toHaveProperty("status");
//         expect(res.body).toHaveProperty("message");
//         expect(res.body).toHaveProperty("data");
//         expect(res.body.status).toBe(false);
//         expect(res.body.message).toBe("komponen already used!");
//       });
//   });
// });

// // show
// describe("TEST /auth/show endpoint", () => {
//   // positive
//   test("show berhasil", () => {
//     return supertest(app)
//       .get("/auth/show")
//       .send(komponen)
//       .then((res) => {
//         console.log(res.body);

//         expect(res.statusCode).toBe(201);
//         expect(res.body).toHaveProperty("status");
//         expect(res.body).toHaveProperty("message");
//         expect(res.body).toHaveProperty("data");
//         expect(res.body.data).toHaveProperty("komponen_id");
//         expect(res.body.data).toHaveProperty("nama_komponen");
//         expect(res.body.status).toBe(true);
//         expect(res.body.message).toBe("user created komponen");
//       });
//   });

//   // negative
//   test("show gagal", () => {
//     return supertest(app)
//       .get("/auth/show")
//       .send(komponen)
//       .then((res) => {
//         console.log(res.body);

//         expect(res.statusCode).toBe(400);
//         expect(res.body).toHaveProperty("status");
//         expect(res.body).toHaveProperty("message");
//         expect(res.body).toHaveProperty("data");
//         expect(res.body.status).toBe(false);
//         expect(res.body.message).toBe("komponen already used!");
//       });
//   });
// });

// // store
// describe("TEST /auth/store endpoint", () => {
//   // positive
//   test("store berhasil", () => {
//     return supertest(app)
//       .post("/auth/store")
//       .send(komponen)
//       .then((res) => {
//         console.log(res.body);

//         expect(res.statusCode).toBe(201);
//         expect(res.body).toHaveProperty("status");
//         expect(res.body).toHaveProperty("message");
//         expect(res.body).toHaveProperty("data");
//         expect(res.body.data).toHaveProperty("komponen_id");
//         expect(res.body.data).toHaveProperty("nama_komponen");
//         expect(res.body.status).toBe(true);
//         expect(res.body.message).toBe("user created store");
//       });
//   });

//   // negative
//   test("store gagal ", () => {
//     return supertest(app)
//       .post("/auth/store")
//       .send(komponen)
//       .then((res) => {
//         console.log(res.body);

//         expect(res.statusCode).toBe(400);
//         expect(res.body).toHaveProperty("status");
//         expect(res.body).toHaveProperty("message");
//         expect(res.body).toHaveProperty("data");
//         expect(res.body.status).toBe(false);
//         expect(res.body.message).toBe("store already used!");
//       });
//   });
// });

// // update
// describe("TEST /auth/store endpoint", () => {
//   // positive
//   test("store berhasil", () => {
//     return supertest(app)
//       .put("/auth/store")
//       .send(komponen)
//       .then((res) => {
//         console.log(res.body);

//         expect(res.statusCode).toBe(201);
//         expect(res.body).toHaveProperty("status");
//         expect(res.body).toHaveProperty("message");
//         expect(res.body).toHaveProperty("data");
//         expect(res.body.data).toHaveProperty("komponen_id");
//         expect(res.body.data).toHaveProperty("nama_komponen");
//         expect(res.body.status).toBe(true);
//         expect(res.body.message).toBe("user created store");
//       });
//   });

//   // negative
//   test("store gagal ", () => {
//     return supertest(app)
//       .put("/auth/update")
//       .send(komponen)
//       .then((res) => {
//         console.log(res.body);

//         expect(res.statusCode).toBe(400);
//         expect(res.body).toHaveProperty("status");
//         expect(res.body).toHaveProperty("message");
//         expect(res.body).toHaveProperty("data");
//         expect(res.body.status).toBe(false);
//         expect(res.body.message).toBe("store already used!");
//       });
//   });
// });
// // delete
// describe(`[DELETE] /komponen/${correctRequestBody.id}`, () => {
//   test(`Success delete komponen with id ${correctRequestBody.id}!`, async () => {
//     try {
//       const res = await request(app).delete(
//         `/komponen/${correctRequestBody.id}`
//       );

//       expect(res.statusCode).toBe(200);
//       expect(res.body).toHaveProperty("status");
//       expect(res.body).toHaveProperty("message");
//       expect(res.body).toHaveProperty("data");
//       expect(res.body.status).toBe(true);
//       expect(res.body.message).toBe(
//         `Success delete  ${correctRequestBody.id}!`
//       );
//       expect(res.body.data).toBe(null);

//       const list = await request(app).get("/komponen");
//       expect(list.body.data).toHaveLength(0);
//     } catch (error) {
//       expect(error).toBe("error");
//     }
//   });

//   test(`komponen with id ${wrongRequestBody.id} not found!`, async () => {
//     try {
//       const res = await request(app).delete(`/komponen/${wrongRequestBody.id}`);

//       expect(res.statusCode).toBe(404);
//       expect(res.body).toHaveProperty("status");
//       expect(res.body).toHaveProperty("message");
//       expect(res.body).toHaveProperty("data");
//       expect(res.body.status).toBe(false);
//       expect(res.body.message).toBe(
//         `komponen with id ${wrongRequestBody.id} not found!`
//       );
//       expect(res.body.data).toBe(null);
//     } catch (error) {
//       expect(error).toBe("error");
//     }
//   });
// });

const request = require("supertest");
const app = require("./app");

describe("GET /komponen", () => {
  it("should return list of komponen", async () => {
    const response = await request(app).get("/komponen");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.arrayContaining([])); // Array of komponen
  });

  it("should return error when server error", async () => {
    const response = await request(app).get("/komponen/error");
    expect(response.status).toBe(500);
    expect(response.body.error).toBeDefined();
  });
});

describe("POST /komponen", () => {
  it("should create new komponen", async () => {
    const data = { nama: "Komponen 1", deskripsi: "Deskripsi Komponen 1" };
    const response = await request(app).post("/komponen").send(data);
    expect(response.status).toBe(201);
    expect(response.body.nama).toBe(data.nama);
    expect(response.body.deskripsi).toBe(data.deskripsi);
  });

  it("should return error when data is incomplete", async () => {
    const data = { nama: "Komponen 1" };
    const response = await request(app).post("/komponen").send(data);
    expect(response.status).toBe(400);
    expect(response.body.error).toBeDefined();
  });
});

describe("GET /komponen/:id", () => {
  it("should return the specified komponen", async () => {
    const response = await request(app).get("/komponen/1");
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(1);
  });

  it("should return error when komponen is not found", async () => {
    const response = await request(app).get("/komponen/999");
    expect(response.status).toBe(404);
    expect(response.body.error).toBeDefined();
  });
});

describe("PUT /komponen/:id", () => {
  it("should update the specified komponen", async () => {
    const data = {
      nama: "Komponen Updated",
      deskripsi: "Deskripsi Komponen Updated",
    };
    const response = await request(app).put("/komponen/1").send(data);
    expect(response.status).toBe(200);
    expect(response.body.nama).toBe(data.nama);
    expect(response.body.deskripsi).toBe(data.deskripsi);
  });

  it("should return error when komponen is not found", async () => {
    const data = {
      nama: "Komponen Updated",
      deskripsi: "Deskripsi Komponen Updated",
    };
    const response = await request(app).put("/komponen/999").send(data);
    expect(response.status).toBe(404);
    expect(response.body.error).toBeDefined();
  });
});

describe("DELETE /komponen/:id", () => {
  it("should delete the specified komponen", async () => {
    const response = await request(app).delete("/komponen/1");
    expect(response.status).toBe(204);
  });

  it("should return error when komponen is not found", async () => {
    const response = await request(app).delete("/komponen/999");
    expect(response.status).toBe(404);
    expect(response.body.error).toBeDefined();
  });
});
