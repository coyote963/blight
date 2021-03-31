export interface TdmPlayerDetails {profile:
    {
        _id:string,
        player:string,
        mu:number,
        sigma:number,
        elo:number,
        kills:number,
        deaths:number,
        wins:number,
        losses:number,
        last_updated:Date
    },
    percentile:number,
    ranking:number,
    total:number,
}