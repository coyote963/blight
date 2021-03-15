export function formatDatale(text: string, values: Array<number>) {
    var buildStr = ""
    text = text.toLowerCase();
    for(var i = 0; i < text.length; i++) {
        buildStr += text.charAt(i) + "|" + values[i].toString()
    }
    return buildStr;
}

export function formatDataleRandom(text: string) {
    const values = [...Array(text.length)].map(() => Math.floor(Math.random() * 4)); 
    return formatDatale(text, values)
}