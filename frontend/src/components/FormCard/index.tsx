import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Movie } from "types/movie";
import './style.css';


type Props = {
     movieId : string
}


export default function FormCard( { movieId }: Props ){

    const [movie, setMovie] = useState<Movie>();

    useEffect( ()=>{
        const aux = {
            backend_domain : "https://patrick-dsmovie-backend.herokuapp.com",
            config : {
                headers: {'Access-Control-Allow-Origin':'*'}
            }    
        }

        axios.get( `${aux.backend_domain}/movies/${movieId}`)
            .then( (response)=>{
                const filme = response.data as Movie;
                setMovie(filme);

            }).catch( (error)=>{
                alert("Erro ao tentar se conectar com o backend!!!!! ");
            })


    } ,[movieId]);
    /* o "movieId" é uma independencia do useEffect, 
        o que indica que a requisicao so vai ser refeita
         caso essa variavel for alterada */

         
    return(

        <div className="dsmovie-form-container">

                                                   {/* É o mesmo que "movie==true ? movie.image : null" */}
          <img className="dsmovie-movie-card-image" src={ movie?.image } alt={ `${movie?.title}`}/>
          <div className="dsmovie-card-bottom-container">
               <h3>{ movie?.title }</h3>
               <form className="dsmovie-form">
                    <div className="form-group dsmovie-form-group">
                         <label htmlFor="email">Informe seu email</label>
                         <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group dsmovie-form-group">
                         <label htmlFor="score">Informe sua avaliação</label>
                         <select className="form-control" id="score">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                         </select>
                    </div>
                    <div className="dsmovie-form-btn-container">
                         <button type="submit" className="btn btn-primary dsmovie-btn">Salvar</button>
                    </div>
               </form >

               <Link to="/">
                    <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>
               </Link>
          </div>
        </div >
    );

}