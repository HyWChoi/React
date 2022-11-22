import "./App.css";
import Card from "./component/Card";
import { movieinfos } from "./component/movieinfo";
function App() {
  return (
  <div className="wrapper"> {/* 전체 Wrapper */}
    {movieinfos.map((movieinfo)=>
    (<Card
      img={movieinfo.img} /* 영화 포스터 */
      color={movieinfo.color} /* 영화 카드 배경색 */
      title={movieinfo.title} /* 영화 제목 */
      year={movieinfo.year} /* 영화 개봉년도 */
      genre={movieinfo.genre} /* 영화 장르 */
      summary={movieinfo.summary} /* 영화 줄거리 */
    />
    ))}
    </div>
  );
}
export default App;
 
