
import moment from 'moment'

export default function formatDate(dateInput: Date): string {
    return moment(dateInput).fromNow()
}

export function formatDateMedium(dateInput: string): string {
    return moment(dateInput).format("llll");
}
export function transformId(value: string): Date {
    if (typeof value === 'string') {
        return new Date(parseInt(value.substring(0, 8), 16) * 1000);
    } else { 
        return new Date();
    }
  }

export function formatMongoDb(value: string, formatString : string = 'llll') : string {
    return moment(transformId(value)).format(formatString);
}