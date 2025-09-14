import { UserModel } from "../models/userModel";
import { validateUser } from "./validation/userSchema";
import { UserUpdateData } from "interfaces/userUpdateInterface";

class UserService {
  private _connection = UserModel;

  async createUser(userData: { email: string; password: string; name: string }) {
    const validated = validateUser(userData);

    if (validated.error) {
      return { statusCode: 400, message: validated.error.details[0].message };
    }

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

  async patchUser(id: string, userData: Partial<UserUpdateData>) {
    const user = await this._connection.findById(id);

    if (!user) {
      return { statusCode: 404, message: "User not found" };
    }

    const updatedUser = await this._connection.findByIdAndUpdate(
      id,
      { $set: userData },
      { new: true } 
    );

    return updatedUser;
  }
}

export default UserService;