import React from 'react';
import { Leaderboard } from './Leaderboard'
import { LeaderboardPaginator } from './Paginator'
export function LeaderboardRoot() {
    return (
        <div>
            <Leaderboard />
            <LeaderboardPaginator />
        </div>
    )
}