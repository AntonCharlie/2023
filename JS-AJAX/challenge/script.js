document.addEventListener('DOMContentLoaded', () => {

    document.getElementById("submit-btn").onclick =() => {
        const request = new XMLHttpRequest();
        const hero_name = document.getElementById("search-bar").value;
        console.log(data.hero_name)
        request.onload = function () {

            const data = JSON.parse(this.responseText);
            const paragraph = document.getElementById("hero");
            
            paragraph.innerHTML = data.hero_name;

            document.querySelector(".hero").innerHTML = data.hero_name;
            console.log(data.hero_name)
        }
        request.open("GET", `https://api.dazelpro.com/mobile-legends/hero?heroName=${hero_name}`);
        request.send();
        return false;
    }    

})

