import { UserModel } from "src/models/userModel";

class UserService {
  private _connection = UserModel;

  async createUser(userData: { email: string; password: string; name: string }) {
    const newUser = new this._connection(userData);
    return newUser.save();
  }

  async findByEmail(email: string) {
    return this._connection.findOne({ email });
  }

  async updateUserPassword(email: string, newPassword: string) {
    return this._connection.updateOne({ email }, { password: newPassword });
  }
}

export default UserService;