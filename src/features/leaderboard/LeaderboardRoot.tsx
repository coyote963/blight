import React from 'react';
import { Leaderboard } from './Leaderboard'
import { LeaderboardPaginator } from './Paginator'
export function LeaderboardRoot() {
    return (
        <div className="container mx-auto">
            <h1 className="my-10 text-6xl font-bold dark:text-chestnut text-navy ">Team Deathmatch Leaderboard</h1> 
            <Leaderboard />
            <LeaderboardPaginator />
        </div>
    )
}