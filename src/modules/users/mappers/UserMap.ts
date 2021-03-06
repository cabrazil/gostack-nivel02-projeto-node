/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import User from '@modules/users/infra/typeorm/entities/User';

export default class UserMap {
  // Altere de any para a sua model de User
  public static toDTO(user: User) {
    return {
      id: user.id,
      name: user.name,
      avatar: user.avatar,
    };
  }
}
