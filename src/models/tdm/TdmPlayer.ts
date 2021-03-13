import { Player } from '../Player'
export interface TDMPlayer {
    _id : string,
    player : Array<Player>,
    mu : number,
    sigma : number,
    rating : number,
    elo : number, 
    kills : number,
    deaths : number,
    wins : number,
    losses : number,
    last_updated : Date
}