import { useEffect, useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
function Detail() {
  const { id } = useParams();
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  }, [id]);
  useEffect(() => {
    getMovie();
  }, [getMovie]);
  const [loading, setLoading] = useState(true);
  return (
    <div>
      <h1>{loading ? 'Loading...' : null} </h1>
    </div>
  );
}
export default Detail;

/*  [마지막 단계 : 코드 챌린지]
- Home에서 해줬던 loading을 Detail에 해주기
- movie가 State에 없음. 현재 API에서 json을 받아와서 아무것도 안 하고 있는 상태.
-> 힌트: json을 state에 넣어보기 */
