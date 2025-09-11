import { UserModel } from "src/models/userModel";

class UserService {
  private _connection = UserModel;

  async createUser(userData: { email: string; password: string; name: string }) {
    const existingUser = await this.findByEmail(userData.email);

    if (existingUser) {
      return { statusCode: 400, message: "Email already in use" };
    }

    const newUser = new this._connection(userData);
    newUser.save();

    return { statusCode: 201, message: "User created successfully", user: newUser };
  }

  async findByEmail(email: string) {
    return this._connection.findOne({ email });
  }
}

export default UserService;