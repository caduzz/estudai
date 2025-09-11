import mongoose from "mongoose";
import bcrypt from "bcrypt";

import { UserSchema } from "schemas/userSchema";

UserSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(this.password, salt);
    this.password = hash;
    next();
});

export const UserModel = mongoose.model('User', UserSchema);