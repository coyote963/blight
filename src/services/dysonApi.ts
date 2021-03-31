import axios, { AxiosResponse } from 'axios'
import { Page } from '../models/Page';
import { TDMPlayer } from '../models/tdm/TdmPlayer';

const DEFAULT_PATH = "http://localhost:8081/"

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

export function getTdmHistory (playerId: string): Promise<AxiosResponse<any>> {
    return axios.get(`${DEFAULT_PATH}tdmprofiles/history/${playerId}`)
}

export function getWeaponUsage (playerId: string): Promise<AxiosResponse<any>> {
    return axios.get(`${DEFAULT_PATH}tdmprofiles/weapons/${playerId}`)
}

export function getMapWinrate (playerId: string): Promise<AxiosResponse<any>> {
    return axios.get(`${DEFAULT_PATH}tdmprofiles/maps/${playerId}`)
}

export function getLoadouts (playerId: string): Promise<AxiosResponse<any>> {
    console.log(playerId);
    
    return axios.get(`${DEFAULT_PATH}loadouts/${playerId}`)
}

export function getTdmProfile (playerId: string) : Promise<AxiosResponse<any>> {
    return axios.get(`${DEFAULT_PATH}tdmprofiles/id/${playerId}`)
}

export function getPlayerProfile (playerId: string): Promise<AxiosResponse<any>> {
    return axios.get(`${DEFAULT_PATH}players/id/${playerId}`)
}

export function getSteamProfile (steamId: string): Promise<AxiosResponse<{avatar: string}>> {
    return axios.get(`${DEFAULT_PATH}players/avatar/${steamId}`)
}