import React from 'react';
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {
  state = {isLoading: true, movies: [],};
  getMovies = async () => {const {data: {data: { movies },},} = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating',);
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">
              <ClipLoader color={'#0008fc'} loading={isLoading} size={48} />
            </span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                slug={movie.slug}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
                date_uploaded={movie.date_uploaded}
                rating={movie.rating}
                runtime={movie.runtime}
                title_long={movie.title_long}
                language={movie.language}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
