
document.addEventListener('DOMContentLoaded', () => {

    document.querySelector("button").addEventListener("click", () => {

        const request = new XMLHttpRequest();

        request.onload = function () {

            const data = JSON.parse(this.responseText);
            console.log(data.rates);
            keys = Object.keys(data.rates);

            var table = document.createElement("table"), row, A, B;
            document.getElementById("abcdef").appendChild(table);
            keys.forEach(key => {
                console.log(`${key} - ${data.rates[key]}`);
                // document.querySelector(".abc").append(`${key} - ${data.rates[key]}`)
                row = table.insertRow();
                A = row.insertCell();
                B = row.insertCell();
            
                A.innerHTML = key;
                B.innerHTML = data.rates[key];
            });
        }
        request.open("GET", "http://127.0.0.1:5000/api/currency/latest");
        request.send();
        
    });

})