function FormattedDate({date}){
    let toFormat = Date(date)
    toFormat = toFormat.split(' ').slice(1,4)
    toFormat[1] = toFormat[1]+','
    
    return (<li>Released: {toFormat.join(' ')}</li>)
}
export default FormattedDate;