import {useMutation, useQuery} from '@tanstack/react-query'
import { instance } from './axios'


export const useGet = (keys, url, params) => {
    return useQuery(keys, ()=>instance.get(url).then(resp=>resp.data) ,{...params} )
}
export const usePost=(url)=>{
    return useMutation((data)=>instance.post(url,data))
}
export const useDelete=(url)=>{
    return useMutation((id)=>instance.delete(`${url}/${id}`))
}
export const useUpdate=(url)=>{
    return useMutation((data)=>instance.patch(url,data))
}