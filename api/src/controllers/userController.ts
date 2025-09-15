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
  
   async findByEmail(req: Request, res: Response) {
    try {
      const { email } = req.params;

      if (!email) {
        return res.status(400).json({ message: "Email parameter is required" });
      }

      const user = await this._service.findByEmail(email);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  }
}

export default UserController;