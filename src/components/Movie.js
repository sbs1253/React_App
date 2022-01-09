import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Movie.module.css';

function Movie({ id, coverImage, title, summary, year, genres }) {
  // console.log({ id });
  return (
    <div className={styles.movie}>
      <img src={coverImage} alt={title} className={styles.movie__img} />
      <div>
        <h1 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h1>
        <h3 className={styles.movie__year}>{year}</h3>
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
        <ul className={styles.movie__genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

/* <a href="/movie">{title}</a> 이건 화면 전체가 새로고침됨 */

export default Movie;
