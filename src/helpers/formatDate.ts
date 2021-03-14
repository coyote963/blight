
import moment from 'moment'

export default function formatDate(dateInput: Date): string {
    return moment(dateInput).format('YYYY/MM/DD')
}