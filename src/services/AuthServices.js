import appConfig from "../configs/app.config";
import { invokeSriService } from "./apiServices";

export async function apiSignUp(data){
  console.log("Getting Unpaid FeesList", data);
    const requestParams = {
        method: "POST",
        url: appConfig.auth.signup,
        body: data,
      };
      return await invokeSriService(requestParams);
}

export async function logIn(data){
  console.log("Getting Unpaid FeesList", data);
    const requestParams = {
        method: "POST",
        url: appConfig.auth.login,
        body: data,
      };
      return await invokeSriService(requestParams);
}