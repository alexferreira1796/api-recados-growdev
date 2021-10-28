import MessagesRepository from '../../../../../src/features/messages/infra/repositories/messages.repository';
import Database from '../../../../../src/core/infra/data/connections/database';
import { MessagesEntity } from '../../../../../src/core/infra/data/database/entities';
import { Messsage } from '../../../../../src/features/messages/domain/models';
import { makeReturnId } from '../../../user/infra/repositories/user.repository.test';

const id = makeReturnId();

const makeCreateMessage = (): Messsage => {
  return {
    idUser: String(id),
    description: 'Description Test',
    details: 'Details Test',
    startDate: new Date(),
  };
};

describe('Messages Repository', () => {
  beforeAll(async () => {
    await new Database().openConnection();
  });

  beforeEach(async () => {
    await MessagesEntity.clear();
  });

  afterAll(async () => {
    await new Database().disconnectDatabase();
  });

  describe('Create Message', () => {
    it('Should create a message', async () => {
      const sut = new MessagesRepository();
      const params = makeCreateMessage();

      const result = await sut.create(params.idUser, params);
      expect(result!).toBeTruthy();
    });
  });

  describe('Get Messages', () => {
    it('Should return all messages', async () => {
      const sut = new MessagesRepository();

      const result = await sut.getMessages();
      expect(result!).toBeTruthy();
    });
  });
});
