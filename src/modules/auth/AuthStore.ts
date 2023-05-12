import { makeAutoObservable, runInAction } from "mobx";
import AuthService from "./AuthService";

export default class AuthStore {
  loader: boolean = false;
  token: string | null = null;

  private authService: AuthService;

  constructor() {
    makeAutoObservable(this);
    this.authService = new AuthService();
  }

  login = async (data: any) => {
    this.setLoading(true);

    console.log("store", data);

    try {
      const res = await this.authService.login(data);

      runInAction(() => {
        this.token = res;
      });

    } catch (e) {
      console.log("Error", e);
    } finally {
      this.setLoading(false);
    }
  };

  setLoading = (value: boolean) => {
    runInAction(() => {
      this.loader = value;
    });
  };
}
