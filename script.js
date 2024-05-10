document.querySelector('#ticket-generator').addEventListener('click', function(){

    const distance = Number.parseFloat(document.querySelector('input#user-distance'));
    const age = Number.parseInt(document.querySelector('input#user-age'));

    const discountPercentageEl = document.querySelector('input#user-age');
    const PriceDiscountEl = document.querySelector('span#price-discount');
    const totalPriceEl = document.querySelector('span#total-price');

    const PricePerUnit = 0.267113;
    let discount = 0;

    if (age > 63){
        discount = 37.8893;
    } else if (age < 21){
        discount = 24.552;
    }

    let total = (PricePerUnit * distance) - ((PricePerUnit * distance) / 100 * discount);


    discountPercentageEl.innerHTML = discount + '%';
    PriceDiscountEl.innerHTML = totaldiscount + '$';
    totalPriceEl.innerHTML = total + '$';

    console.log(total, totaldiscount);

});