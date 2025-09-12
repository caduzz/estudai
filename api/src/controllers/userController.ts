import { Request, Response } from "express";
import UserService from "../services/userService";

class UserController {
  private _service = new UserService();

  async registerUser(req: Request, res: Response) {
    try {
      const { statusCode, message } = await this._service.createUser(req.body);
      res.status(statusCode).json({ message });
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  }
}

export default UserController;