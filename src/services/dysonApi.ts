import axios, { AxiosPromise, AxiosResponse } from 'axios'
import { Page } from '../models/Page';
import { TDMPlayer } from '../models/tdm/TdmPlayer';
import { Player } from '../models/Player';


const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT

export function getTdmLeaderboard (page = 0, size = 10, keyword = "", sort = "", direction = "", active = true):Promise<AxiosResponse<Page<TDMPlayer>>>{
    return axios.get(`${API_ENDPOINT}tdmprofiles/search/`, {
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
    return axios.get(`${API_ENDPOINT}tdmprofiles/history/${playerId}`)
}

export function getWeaponUsage (playerId: string): Promise<AxiosResponse<any>> {
    return axios.get(`${API_ENDPOINT}tdmprofiles/weapons/${playerId}`)
}

export function getMapWinrate (playerId: string): Promise<AxiosResponse<any>> {
    return axios.get(`${API_ENDPOINT}tdmprofiles/maps/${playerId}`)
}

export function getLoadouts (playerId: string): Promise<AxiosResponse<any>> {
    console.log(playerId);
    
    return axios.get(`${API_ENDPOINT}loadouts/${playerId}`)
}

export function getTdmProfile (playerId: string) : Promise<AxiosResponse<any>> {
    return axios.get(`${API_ENDPOINT}tdmprofiles/id/${playerId}`)
}

export function getPlayerProfile (playerId: string): Promise<AxiosResponse<any>> {
    return axios.get(`${API_ENDPOINT}players/id/${playerId}`)
}

export function getSteamProfile (steamId: string): Promise<AxiosResponse<{avatar: string}>> {
    return axios.get(`${API_ENDPOINT}players/avatar/${steamId}`)
}

export function getByProfile( platform: string, profile: string) : Promise<AxiosResponse<[Player]>> {
    return axios.get(`${API_ENDPOINT}players/getprofile/${platform}/${profile}`)
}