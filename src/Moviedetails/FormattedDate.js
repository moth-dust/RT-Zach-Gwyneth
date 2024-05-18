function FormattedDate({date}){
    let toFormat = date.split('-');
    toFormat = [toFormat[1],toFormat[2],toFormat[0]].join('-');
    toFormat =  new Date(date);
    toFormat = String(toFormat);
    toFormat = toFormat.split(' ').slice(1,4);
    toFormat[1] = toFormat[1]+',' ;
    return (<li className='details'>Released: {toFormat.join(' ')}</li>);
};

export default FormattedDate;