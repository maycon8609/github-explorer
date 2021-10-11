import { Api } from "../Api";

export function listUserRepositories(userName) {
   return Api.get(`/users/${userName}/repos`);
}