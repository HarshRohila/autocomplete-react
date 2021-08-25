import { Movie } from '../components/Movie'
import environment from '../config/environment'

const apikey = environment[process.env.NODE_ENV].API_KEY

const moviesService = {
  searchByTitle(title: string): Promise<Movie[]> {
    return fetch(`https://www.omdbapi.com/?s=${title}&apikey=${apikey}&type=movie`)
      .then((res) => res.json())
      .then((res) => res.Search)
  },
  getById(id: string): Promise<MovieDetails> {
    return fetch(`https://www.omdbapi.com/?i=${id}&apikey=${apikey}`).then((res) => res.json())
  },
}

export interface MovieDetails extends Movie {
  Ratings: { Source: string; Value: string }[]
}

export default moviesService
