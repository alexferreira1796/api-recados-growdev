import UserRepository from '../../../../../src/features/user/infra/repositories/user.repository';
import Database from '../../../../../src/core/infra/data/connections/database';
import { UsersEntity } from '../../../../../src/core/infra/data/database/entities';
import { UserModel } from '../../../../../src/features/user/domain/models';

const id = 1;

export const makeReturnId = () => {
  return {
    id: id,
  };
};

export const makeCreateUser = (): UserModel => {
  return {
    name: 'Name Teste',
    password: '123e',
    repeat_password: '123e',
  };
};

describe('User Repository', () => {
  beforeAll(async () => {
    await new Database().openConnection();
  });

  beforeEach(async () => {
    await UsersEntity.clear();
  });

  describe('Create User', () => {
    it('Should create a user', async () => {
      const sut = new UserRepository();
      const params = makeCreateUser();

      const result = await sut.create(params);
      expect(result!).toBeTruthy();
    });
  });
});
