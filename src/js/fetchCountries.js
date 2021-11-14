// import Notiflix from 'notiflix';
      
export function fetchCountries(name) {
    return fetch(`https://restcountries.com/v2/name/${name}?fields=name,capital,population,flag,languages`,)
    .then(response => {
        if (!response.ok) {
            // Notiflix.Notify.failure("Oops, there is no country with that name");
            throw new Error(response.status);
        }
        return response.json();
    })
    .catch(error => console.log(error));
}



// export function fetchCountries(name) {
//  return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`)
// }

// https://restcountries.com/v3.1/name/{name}?fullText=true
// https://restcountries.com/v2/name/{name}
// Notiflix.Notify.info("Too many matches found. Please enter a more specific name.")
// Notiflix.Notify.failure("Oops, there is no country with that name");
