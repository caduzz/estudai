import { Request, Response } from "express";
import UserService from "src/services/userService";

class UserController {
  private _service = new UserService();

  async registerUser(req: Request, res: Response) {
    const { email, password, name } = req.body;
    try {
      const { statusCode, message } = await this._service.createUser({ email, password, name });
      res.status(statusCode).json(message);
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  }
}

export default UserController;