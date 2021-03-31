export function convertRank(elo: number) {
    const rankCutoffs = [700, 750, 800, 850, 900, 950, 1000, 1025, 1050, 1075, 1100, 1125, 1150, 1175, 1200, 1225, 1250, 1275, 1300, 1325, 1350]
    const rank =  rankCutoffs.findIndex((e) => e > elo)
    if (rank > rankCutoffs.length) {
        return rankCutoffs.length;
    }
    if (rank < 0) {
        return 0;
    }
    return rank;
}

export function rankNames(index: number) {
    const rankNames = [
        'Earth I', 'Earth II', 'Earth III',
        'Grass I', 'Grass II', 'Grass III', 'Grass IIII',
        'Water I', 'Water II', 'Water III',
        'Fire I', 'Fire II', 'Fire III',
        'Gold I', 'Gold II', 'Gold III',
        'Platinum I', 'Platinum II', 'Platinum III',
        'Elite', 'Master', 'Grandmaster'
    ]
    return rankNames[index]
}