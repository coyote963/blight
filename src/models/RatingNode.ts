export interface RatingNode {
    name: string,
    value: Number
}

export interface RatingNodeHistory {
    name : string,
    series : RatingNode[]
}