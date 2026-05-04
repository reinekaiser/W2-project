//Bảng tỉ giá (so với USD)

/*
1 EUR=1.08 USD
1 AUD=0.66 USD
1 USD = 25,400 VND
*/

//AUD, EUR, VND, USD

const exchangeRates = {
    USD: 1,
    VND: 25400,
    EUR: 0.92,
    AUD: 1.51
};

function convertCurrency(amount, from, to) {
    if (!exchangeRates[from] || !exchangeRates[to]) {
        return null;
    }
    const amountInUSD = amount / exchangeRates[from];
    const finalAmount = amountInUSD * exchangeRates[to];

    return finalAmount;
}

console.log(convertCurrency(100, 'EUR', 'VND'));