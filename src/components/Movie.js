import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
function Movie({ id, coverImage, title, summary, genres }) {
  // console.log({ id });
  return (
    <div>
      <img src={coverImage} alt={title} />
      <h1>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h1>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <hr />
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
