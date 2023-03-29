document.addEventListener("DOMContentLoaded", () => {

    let url = "https://omdbapi.com/?apikey=671a2149&s="

    function clearSearchSection(SearchQuery) {
        try {
            const table = document.querySelector("table");
            table.innerHTML = "";
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    function putLoading(SearchQuery) {
        const table = document.querySelector("table");
        table.innerHTML = "Loading...";
    }

    function addMoviesToResultSection(SearchQuery) {
        const table = document.querySelector("table");
        movies.forEach(movie => {
            const row = docment.createElement("tr");
            const title = document.createElement("td");
            title.append(movie.Title);
            const year = document.createElement("td");
            year.append(movie.Year);
            const imgPoster = document.createElement("img");
            imgPoster.src = movie.Poster;
            imgPoster.alt = movie.Title;
            const poster = document.createElement("td");
            poster.append(imgPoster);

            row.append(title);
            row.append(year);
            row.append(poster);
            table.append(row);
        }) 
    }

    function getFilm(SearchQuery) {

        const ajax = new XMLHttpRequest();
        ajax.onload = function() {
            clearSearchSection();
            putLoading();
            setTimeout(() => {
               const response = JSON.parse(this.responseText);
               clearSearchSection();
               addMoviesToResultSection(response.Search);
            }, 2000);
        }
        ajax.open("GET", `${url+SearchQuery}`);
        ajax.send();

    }

    function getFilmWithErrorHandler(SearchQuery) {

        const ajax = new XMLHttpRequest();
        ajax.onload = function(){
            clearSearchSection();
            putLoading();
            if(this.status === 200){
                setTimeout(()=>{
                    const response = JSON.parse(this.responseText);
                    clearSearchSection();
                    addMoviesToResultSection(response.Search);
                }, 2000);
            } else {
                clearSearchSection();
                console.log("Error to get the movie!");
                alert("Error to get the movie!");
            }
        }
        // ajax.onreadystatechange = function() {
        //     if (this.readyState === 4 && this.status === 200){

        //     }
        // }
        ajax.open("GET", `${url+SearchQuery}`);
        ajax.send();
    }

    // function getFilmWithJquery(SearchQuery){

    // }

    document.querySelector("button").addEventListener("click", () => {
        const sQ = document.querySelector("#search-entry").value;
        // getFilm(sQ);
        getFilmWithErrorHandler(sQ);
        // getFilmWithJquery(sQ);
    })
})