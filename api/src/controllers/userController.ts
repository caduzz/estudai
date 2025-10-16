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

  async patchUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ message: "ID is required" });
      }

      const result = await this._service.patchUser(id, req.body);

      if (!result) {
        return res.status(404).json({ message: "User not found" });
      }

      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ message: "Internal server error", error });
    }
  }

}

export default UserController;