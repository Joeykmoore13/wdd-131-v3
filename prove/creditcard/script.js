// 1234123412341234
// document.getElementById("submit-button").addEventListener('click', submitPayment);
document.getElementById("checkout").addEventListener('submit', submitPayment);

function submitPayment(event) {
    event.preventDefault()
    let card_number = document.getElementById('card-number-input').value.trim();
    let card_year = document.getElementById('expiration-year').value.trim();
    let card_month = document.getElementById('expiration-month').value.trim();
    
    if (!/^\d{16}$/.test(card_number)) {
        alert(
            'Card number must be 16 digits\n');
        return
    }
    else if (card_number != '1234123412341234') {
        alert('Card number is not valid\n');
        return
    }
    
    const currentDate = new Date()
    console.log("Checking date");
    console.log(2000 + card_year < currentDate.getFullYear() || (2000 + card_year === currentDate.getFullYear() && card_month <= (currentDate.getMonth())))
    if (2000 + card_year < currentDate.getFullYear() || (2000 + card_year === currentDate.getFullYear() && card_month <= (currentDate.getMonth())))
    {
        alert('Card is expired');
        return;
    }
    else {
        alert('Payment submited successfully!');
    }
}