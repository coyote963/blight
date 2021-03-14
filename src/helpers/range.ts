export function range(start: number, end: number): Array<number>{
    if(start === end) return [start];
    return [start, ...range(start + 1, end)];
}

export function paginationRange(currentPage: number, totalPages: number) : Array<number> {
    return range(currentPage - 10, currentPage + 10).filter(page => page > 0 && page < totalPages)

}