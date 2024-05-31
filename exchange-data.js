function updateTable(data) {
    let table = document.getElementById("exchangeTable");

    data.forEach(currency => {
        let row = document.createElement("tr");

        let name = document.createElement("td");
        name.textContent = currency.txt;

        let code = document.createElement("td");
        code.textContent = currency.cc;


        let rate = document.createElement("td");
        rate.textContent = currency.rate + "   UAH";

        row.appendChild(name);
        row.appendChild(code);
        row.appendChild(rate);

        table.appendChild(row);
    });
}

function fetchAndDisplay() {
    fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
        .then(response => response.json())
        .then(data => {
            updateTable(data);
        })
        .catch(error => {
            console.error('error :', error);
        });
}


setInterval(fetchAndDisplay, 10000);