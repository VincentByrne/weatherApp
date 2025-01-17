import { v4 } from "uuid";
import { initStore } from "../utils/store-utils.js";

const db = initStore("users");

export const userStore = {
  async getAllUsers() {
    await db.read();
    return db.data.users;
  },

  async addUser(user) {
    await db.read();
    user._id = v4(); 
    db.data.users.push(user);
    await db.write();
    return user;
  },

  async getUserById(id) {
    await db.read();
    return db.data.users.find((user) => user._id === id);
  },

  async getUserByEmail(email) {
    await db.read();
    return db.data.users.find((user) => user.email === email);
  },

  async updateUser(id, updatedDetails) {
    await db.read();
    const user = db.data.users.find((user) => user._id === id);
    if (user) {
      Object.assign(user, updatedDetails);
      await db.write();
    }
},

  async deleteUserById(id) {
    await db.read();
    const index = db.data.users.findIndex((user) => user._id === id);
    if (index !== -1) {
      db.data.users.splice(index, 1);
      await db.write();
    }
  },

  async deleteAll() {
    db.data.users = [];
    await db.write();
  },
};
