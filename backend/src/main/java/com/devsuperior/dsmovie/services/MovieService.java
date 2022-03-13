package com.devsuperior.dsmovie.services;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.entities.Movie;
import com.devsuperior.dsmovie.repositories.MovieRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Function;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *      @author Patrick
 */

/* A anotacao "service" registra a classe MovieService   
    como um componente do sistema
*/
@Service 
public class MovieService {
    
        @Autowired /* Essa anotacao faz com que o framework
        instancie automaticamente  o objeto de repositorio, nao 
        precisando instanciar esse atributo de repositorio de filmes (movies)  */
        private MovieRepository repository;
    
        @Transactional( readOnly=true) // Garatindo a transacao dos dados e deixando para somente de leitura
        public  Page<MovieDTO> cosultarFilmes( Pageable pageable){
   //  Metodo que ira resgatar todos os dados de filmes no database  atraves de uma instancia de um repository   
            
              //  List<Movie> result = repo.findAll (page);
              Page<Movie> result = repository.findAll (pageable); 
             /* O servico chama um repository e ele retorna
                 uma entidade, no caso Movie (Entity)    */
              
             
              //Page<MovieDTO> page = result.map( x  ->  new MovieDTO(x) );
             // caso o lambda nao esteja habilitado para a usar o comando acima, entao:
             
             Page<MovieDTO> page = result.map( 
                     
                     new Function<Movie, MovieDTO>(){
                                @Override
                                public MovieDTO apply (Movie mov){
                                         return  new MovieDTO ( mov) ;
                                }
                     }
             );
             
              return page;
        }
        
        /*
         List<MovieDTO> lista = new ArrayList<>();


          for( Movie  movie :  result){
                lista.add( new MovieDTO (movie));
          }  

          Page<MovieDTO> page  = lista.stream().map( x -> x);  */


        @Transactional (readOnly = true )
        public MovieDTO buscarFilmePorId (Long id){
                   Movie filme  = repository.findById(id).get();
              
                   return new MovieDTO ( filme );
        }
}
