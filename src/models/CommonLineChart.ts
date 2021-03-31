import { formatDateMedium } from '../helpers/formatDate';
export const CommonLineChartData: any = {
    borderWidth: 2,
    pointColor : "#fff",
    pointStrokeColor : "#ff6c23",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "#ff6c23", 
}

export const CommonLineChartOptions: any = {
    legend: {
        display: false
    },
    scales: {
        
        xAxes: [{
            distribution: 'series',
            ticks: {
                autoSkip: true,
                maxTicksLimit: 10,
                callback: function(value: string) {
                    return formatDateMedium(value)
                }
            },
            gridLines: {
                color: "rgba(0, 0, 0, 0)",
            },
            display: false
        }],
        yAxes: [{
            display: true,
            gridLines: {
                color: "rgba(0, 0, 0, 0)",
            }   
        }]
    }
}