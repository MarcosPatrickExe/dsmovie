import MovieScore from 'components/MovieScore/index';
import { Link } from 'react-router-dom';
import { Movie } from 'types/movie';

type Props = { // Personalizando os atributos de um objeto do tipo Props
    movie: Movie;
}

export default function MovieCard( { movie } : Props ){
// Parametro necessario para evitar o acesso ao objeto pela sintaxe: "props.movie"

    return(
        <div>
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                 <h3>{movie.title}</h3>
                 <MovieScore />

           {/*   <Link to="/form/1">  */}
                 <Link to={`/form/${movie.id}`}>
                    <div className="btn btn-primary dsmovie-btn">Avaliar</div>
                 </Link>
            </div>
        </div>
    );
}