package com.devsuperior.dsmovie.repositories;

import com.devsuperior.dsmovie.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *       @author Patrick
 */
public interface UserRepository extends JpaRepository<User, Long>  {
     // Interface de repositorio de tipo Score e com ID do tipo Long
    
    
    /* A estrutura "findBy" corresponde à um padrão de pesquisa
    ao banco atraves de um metodo que ja implementado automaticamente
    pelo framework, nao necessitando sobreescrever o metodo abaixo  */
    User findByEmail( String email );
}
