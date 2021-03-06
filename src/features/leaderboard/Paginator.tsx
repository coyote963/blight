import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLeaderboard, pageSelector, totalPageSelector } from './leaderboardSlice';
import { paginationRange } from '../../helpers/range'

export function LeaderboardPaginator() {
    const currentPage = useSelector(pageSelector)
    const dispatch = useDispatch();
    const totalPages = useSelector(totalPageSelector)
    const pages = paginationRange(currentPage, totalPages ).map(i => {
        
        function changePage(event: any) {
            event.preventDefault()
            dispatch(fetchLeaderboard(i - 1))
        }
        if (i !== currentPage) {
            return (<div key={i} onClick={changePage} className="w-8 md:flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in  border-t-2 border-transparent">{ i }</div>)
        } else {
            return (<div key={i} onClick={changePage} className="w-8 md:flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in  border-t-2 border-yellow-500 dark:border-celladon">{ i }</div>)
        }
    })
    
    return (
        <div className="flex flex-col items-center my-12">
            <div className="flex text-gray-700 dark:text-grullo">
                <div className="flex h-8 font-medium ">
                    {pages}
                </div>
            </div>
        </div>
    )
}

