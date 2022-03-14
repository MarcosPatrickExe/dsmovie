package com.devsuperior.dsmovie.repositories;

import com.devsuperior.dsmovie.entities.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *      @author Patrick
 */

public interface MovieRepository extends JpaRepository<Movie, Long>{
    /* 
        Todo repository se trata de 
        uma interface que estende a classe JPA
        que ira padronizar o acesso ao 
        database 
*/
    
}
