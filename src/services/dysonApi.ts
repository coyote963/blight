import axios, { AxiosResponse } from 'axios'
import { Page } from '../models/Page';
import { TDMPlayer } from '../models/tdm/TdmPlayer';

const DEFAULT_PATH = "http://api.dyson.city/"

export function getTdmLeaderboard ():Promise<AxiosResponse<Page<TDMPlayer>>>{
    return axios.get(`${DEFAULT_PATH}tdmprofiles/search/`)
}