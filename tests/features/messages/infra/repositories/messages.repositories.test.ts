import MessagesRepository from "../../../../../src/features/messages/infra/repositories/messages.repository";
import Database from "../../../../../src/core/infra/data/connections/database";
import { MessagesEntity } from "../../../../../src/core/infra/data/database/entities";
import { Messsage } from "../../../../../src/features/messages/domain/models";
import {
  makeReturnId,
  makeCreateUser,
} from "../../../user/infra/repositories/user.repository.test";
import UserRepository from "../../../../../src/features/user/infra/repositories/user.repository";

const id = makeReturnId();
const { name } = makeCreateUser();

const makeCreateMessage = (): Messsage => {
  return {
    idUser: String(id),
    description: "Description Test",
    details: "Details Test",
    startDate: new Date(),
  };
};

describe("Messages Repository", () => {
  beforeAll(async () => {
    await new Database().openConnection();
  });

  beforeEach(async () => {
    await MessagesEntity.clear();
  });

  describe("Create Message", () => {
    it("Should create a message", async () => {
      const sut = new MessagesRepository();
      const params = makeCreateMessage();

      let result;
      const user = await new UserRepository().getUserName(name);
      if (user !== undefined) {
        result = await sut.create(String(user.id), params);
        expect(result).toBeTruthy();
      }
    });
  });

  describe("Get Messages", () => {
    it("Should return all messages", async () => {
      const sut = new MessagesRepository();

      const result = await sut.getMessages();
      expect(result!).toBeTruthy();
    });
  });
});
