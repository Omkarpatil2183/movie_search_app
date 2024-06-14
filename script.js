const searchForm =document.querySelector('form');
const movieContainer =document.querySelector('.movie');
const inputBox =document.querySelector('.inputBox');
        // apikey=http://www.omdbapi.com/?i=tt3896198&apikey=4aac7fbf
        

// Fetching movie details 
const getmovieinfo = async (movie) =>
    {
    const myapi='6d4b3add'
    const url =`http://www.omdbapi.com/?apikey=${myapi}&t=${movie}`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
     showmoviedata(data)
    }

const showmoviedata = (data) =>
    {
        // const movieContainer = document.createElement('div');
        // movieContainer.classList.add('movie-container') 
        movieContainer.innerHTML = '';// Clear previous movie data
        const {Title,imdbRating,Genre,Language,Runtime,Actors,Released,Plot,Poster}=data; //storing data into an array

        const movieElement = document.createElement('div');
        movieElement.classList.add('movie-info');
        movieElement.innerHTML=`<h2>${Title}</h2><p><strong>Rating : &#9733 </strong>${imdbRating}</p>`;

        const  movieGenreElement= document.createElement('div');
        movieGenreElement.classList.add('movie-genre');
        
        Genre.split(",").forEach(element => {
            const p=document.createElement('p');
            p.innerText=element;
            movieGenreElement.appendChild(p);
            
        });
        movieElement.appendChild(movieGenreElement);
        
        movieElement.innerHTML +=`<p><strong>Language : </strong>${Language}</p><p><strong>Duration : </strong>${Runtime}</p><p><strong>Actors : </strong>${Actors}</p><p><strong>Released date :  </strong>${Released}</p><p><strong>Plot:  </strong>${Plot}</p>`;

        // creating div for movie poster 
        const moviePoster = document.createElement('div');
        moviePoster.classList.add('movie-poster');
        moviePoster.innerHTML = `<img src="${Poster}"/>`;

        movieContainer.appendChild(moviePoster);
        movieContainer.appendChild(movieElement);

        movieContainer.appendChild(movieElement);
    }



searchForm.addEventListener('submit', (ev) => {
ev.preventDefault()
// console.log(inputBox.value)   
const movieName=inputBox.value.trim();
if (movieName !== " ")
    {
        getmovieinfo(movieName);
    }        
})
// console.log("Hello")