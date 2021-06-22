
// document.getmovieById('New-Movies').addEventListener('click', newMovies);
// document.getmovieById('Avenger-Movies').addEventListener('click', avengerMovies);
// document.getmovieById('Xmen-Movies').addEventListener('click', xmenMovies);
// document.getmovieById('Princess-Movies').addEventListener('click', princessMovies);
// document.getmovieById('Batman-Movies').addEventListener('click', batmanMovies);



//...................................................................................


let filteredMovies = movies
    .map((movies) => { return movies.Title });

console.log(filteredMovies)

//...................................................................................

// newMovies = movies
//     .filter(movie => movie.Year ....)
//     .map(movie => movie....);

// console.log(newMovies)

//...................................................................................



function avengerMovies() {
    movies.filter(movie => movie.title.includes("Avengers"))
    movies.include(movie => movie.title.includes("Avengers"))
}
console.log(avengerMovies)


avengerMovies = movies
    .filter(movie => movie.Title == 'Avengers')

// .map(movie => movie.name)

console.log(avengerMovies)



//...................................................................................

// xmenMovies = movies
//     .filter(movie => movie.)
//     .map(movie => movie.);

// console.log(xmenMovies)

// //...................................................................................

// princessMovies = movies
//     .filter(movie => movie.)
//     .map(movie => movie.);

// console.log(princessMovies)

// //...................................................................................

// batmanMovies = movies
//     .filter(movie => movie.)
//     .map(movie => movie.);

// console.log(batmanMovies)



