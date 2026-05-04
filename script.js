//Bảng tỉ giá (so với USD)

/*
1 EUR=1.08 USD
1 AUD=0.66 USD
1 USD = 25,400 VND
*/

//AUD, EUR, VND, USD

const exchangeRates = {
    USD: 1,
    VND: 26337.8,
    EUR: 0.8535,
    AUD: 1.3897
};

function convertCurrency(amount, from, to) {
    if (!exchangeRates[from] || !exchangeRates[to]) {
        return null;
    }
    const amountInUSD = amount / exchangeRates[from];
    const finalAmount = amountInUSD * exchangeRates[to];

    return finalAmount;
}

document.addEventListener('DOMContentLoaded', () => {
    const amountInput = document.getElementById('amount');
    const fromSelect = document.getElementById('fromCurrency');
    const toSelect = document.getElementById('toCurrency');
    const convertBtn = document.getElementById('convertBtn');
    const resultText = document.querySelector('#resultBox span:first-child');
    const resultCurrency = document.getElementById('resultCurrency');
    const swapBtn = document.getElementById('swapBtn');

    convertBtn.addEventListener('click', () => {
        const amount = parseFloat(amountInput.value);
        const from = fromSelect.value;
        const to = toSelect.value;

        if (isNaN(amount) || amount <= 0) {
            alert("Vui lòng nhập số tiền hợp lệ");
            return;
        }

        const result = convertCurrency(amount, from, to);

        let formatted;
        if (result >= 1e12) {
            formatted = new Intl.NumberFormat('en-US', {
                notation: 'compact',
                maximumFractionDigits: 4
            }).format(result);
        } else {
            formatted = result.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
        }
        resultText.innerText = formatted;
        resultCurrency.innerText = to;
    });

    swapBtn.addEventListener('click', () => {
        const temp = fromSelect.value;
        fromSelect.value = toSelect.value;
        toSelect.value = temp;
    });
});