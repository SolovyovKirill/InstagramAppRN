import { Api } from "../../base/axios";

export default class AuthApi {
  login = (data: any) => {
    return Api.post("/login", data);
  };
}
