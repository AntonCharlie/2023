document.addEventListener('DOMContentLoaded', () => {

    let apiKey = "aAKgKRCidUUWuDdC13CuA22efJMZnjjr";

    document.getElementById("submit-btn").onclick = () => {
        const amount = document.getElementById("amount-entry").value;
        const to  = document.getElementById("to-entry").value;
        const from  = document.getElementById("from-entry").value;

        
        const request = new XMLHttpRequest;
        request.onload = function() {
            const data = JSON.parse(this.responseText);
            const paragraph = document.createElement("p");
            paragraph.innerHTML = data.result;

            document.querySelector(".result").append(paragraph);
            document.querySelector("#amount-entry").value = "";
        }

        request.open("GET", `https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}&apikey=${apiKey}`);
        request.send();
        return false;

    }

})