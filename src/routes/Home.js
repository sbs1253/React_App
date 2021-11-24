import { useState, useEffect } from 'react';
import Movie from '../components/Movie';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year',
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImage={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
/*  [마지막 단계 : 코드 챌린지]
- Home에서 해줬던 loading을 Detail에 해주기
- movie가 State에 없음. 현재 API에서 json을 받아와서 아무것도 안 하고 있는 상태.
-> 힌트: json을 state에 넣어보기 */
