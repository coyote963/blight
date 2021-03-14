import axios, { AxiosResponse } from 'axios'
import { Page } from '../models/Page';
import { TDMPlayer } from '../models/tdm/TdmPlayer';

const DEFAULT_PATH = "http://api.dyson.city/"

export function getTdmLeaderboard (page = 0, size = 10, keyword = "", sort = "", direction = "", active = true):Promise<AxiosResponse<Page<TDMPlayer>>>{
    return axios.get(`${DEFAULT_PATH}tdmprofiles/search/`, {
        params: {
            page: page,
            size: size,
            keyword: keyword,
            sort: sort, 
            order: direction,
            active: active.toString()
        }
    })
}