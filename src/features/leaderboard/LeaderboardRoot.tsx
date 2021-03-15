import React from 'react';
import { Leaderboard } from './Leaderboard'
import { LeaderboardPaginator } from './Paginator'
import { HeaderDisplay } from '../../app/HeaderDisplay'
export function LeaderboardRoot() {
    return (
        <div className="container mx-auto">
            <HeaderDisplay content = "Team Deathmatch Leaderboard" />
            <Leaderboard />
            <LeaderboardPaginator />
        </div>
    )
}