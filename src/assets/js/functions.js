let lastIndex = null
const compareRating = index => {
    const movieData = {
        title: '',
        director: '',
        userRating: Number(document.querySelector('.cinema-item-' + index + ' .user-rating').innerHTML.split('/')[0]),
        imdbRating: Number(document.querySelector('.cinema-item-' + index + ' .imdb-rating').innerHTML),
        movieId: document.querySelector('.cinema-item-' + index + ' .imdb-id').innerHTML
    }
    let tempText = document.querySelector('.cinema-item-' + index + ' .film-name h3').innerHTML 
    tempText.length > 16 ? movieData.title = tempText.substring(0, 13) + '...' : movieData.title = tempText
    tempText = document.querySelector('.cinema-item-' + index + ' .film-name span').innerHTML
    tempText.length > 16 ? movieData.director = tempText.substring(0, 13) + '...' : movieData.director = tempText
    gsap.to('.cinema-item-' + index + ' .hover-status', {backgroundColor: '#FFE13B', duration: .4})
    if(lastIndex != null) gsap.to('.cinema-item-' + lastIndex + ' .hover-status', {backgroundColor: '#F1524D', duration: .4})
    gsap.to('.imdb-name h3', {duration: .5, text: movieData.title})
    gsap.to('.imdb-name span', {duration: .5, text: movieData.director})
    gsap.to('.imdb-values .my-value', {duration: .5, text: movieData.userRating*2 + '/10 VS '})
    gsap.to('.imdb-values .imdb-value', {duration: .5, text: movieData.imdbRating*2 + '/10'})
    document.getElementById('movie-page').href = 'movies/' + movieData.movieId
    setStars(movieData.userRating*2, movieData.imdbRating*2)
    lastIndex = index
}

const setStars = (myrate, imdbrate) => {
	let yellowStars = document.querySelector('.imdb-yellow-stars');
	let blueStars = document.querySelector('.imdb-blue-stars');
	if(imdbrate >= myrate){
		yellowStars.style.zIndex = 1;
		blueStars.style.zIndex = 2;
	} else{
		yellowStars.style.zIndex = 2;
		blueStars.style.zIndex = 1;
	}
    gsap.to('.imdb-yellow-stars', {clipPath: 'polygon(0 0, '+imdbrate*10+'% 0, '+imdbrate*10+'% 100%, 0% 100%)'})
    gsap.to('.imdb-blue-stars', {clipPath: 'polygon(0 0, '+myrate*10+'% 0, '+myrate*10+'% 100%, 0% 100%)'})
}