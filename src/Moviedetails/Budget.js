
function Budget({budget}){
const currency = new Intl.NumberFormat('en-US')
    return (<li>Budget: ${currency.format(budget)}</li>)
}
export default Budget;