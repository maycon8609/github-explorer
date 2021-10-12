import { Api } from "../Api";

export type IUserRepositoriesData = {
   id: number,
   name: string,
   description: string,
   html_url: string,
}

export function listUserRepositories(userName: string) {
   return Api.get<IUserRepositoriesData[]>(`/users/${userName}/repos`);
}