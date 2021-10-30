import "./moviecard.css";
export default function Moviecard(props) {
  const { data } = props;

  return (
    <div className="card custom-design">
      <img src={data.Poster} className="card-img-top" alt={data.Title} />
      <div className="card-header custom-card-header">{data.Title}</div>
      <div className="card-footer">
        <p>{data.Year}</p>
      </div>
    </div>
  );
}
