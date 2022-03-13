package com.devsuperior.dsmovie.repositories;

import com.devsuperior.dsmovie.entities.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *      @author Patrick
 */


/* 
    Todo repository se trata de 
    uma interface que estende a classe JPA
    que ira padronizar o acesso ao 
    database 
*/
public interface MovieRepository extends JpaRepository<Movie, Long>{
    
        
    
}
