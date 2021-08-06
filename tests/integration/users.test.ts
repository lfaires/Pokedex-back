import '../../src/setup';
import supertest from "supertest";
import { getConnection } from "typeorm";

import app, { init } from "../../src/app";
import { createUser } from "../factories/userFactory";
import { clearDatabase } from "../utils/database";

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await clearDatabase();
});

afterAll(async () => {
  await getConnection().close();
});

describe("POST /sign-up", () => {
  it("should answer with text \"OK!\" and status 201 for valid params", async () => {
    const user = await createUser();
  });

  it("should answer with status 400 for invalid email", async () => {
    const user = await createUser();
  });

  it("should answer with status 400 when password and confirmPassword don't match", async () => {
    const user = await createUser();
  });

  it("should answer with status 409 for email already registered", async () => {
    const user = await createUser();
  });
});

describe("POST /sign-in", () => {
  it("should answer with text \"OK!\" and status 200 for valid params", async () => {
    const user = await createUser();
  });

  it("should answer with status 400 for email doesn't registered", async () => {
    const user = await createUser();
  });

  it("should answer with status 401 for invalid password", async () => {
    const user = await createUser();
  });
});