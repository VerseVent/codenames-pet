import { v4 as uuidv4 } from "uuid";

class UserService {
  validateUserStorage() {
    const userToken = localStorage.getItem("user_token");
    if (userToken) {
      return userToken;
    }
    const userId = uuidv4();
    localStorage.setItem("user_token", userId);
    return userId;
  }
  addUserNickname(nickname: string) {
    localStorage.setItem("user_nickname", nickname);
  }
}
export const userService = new UserService();
