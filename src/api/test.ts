import { http } from "@/utils/http";

export const getPerson = (params: object) => {
  return http.request('get', `http://localhost:3000/person/find`, {
    params
  })
}


export const postPerson = (data: object) => {
  return http.request('post', `http://localhost:3000/person`, { data })
}
