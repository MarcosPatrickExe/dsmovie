package com.devsuperior.dsmovie.entities;

import java.io.Serializable;
import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

/**
 * @author Patrick
 */

/*
       A INTERFACE "Serializable" EXIGE QUE A CLASSE
       SEJA COVERTIDO EM "BYTES" PARA QUE POSSA
       TRAFEGAR NA REDE E SER SALVA EM ARQUIVOS
*/

@Embeddable
public class ScorePK implements Serializable{ 
      // ESSA CLASSE "ScorePK" REPRESENTA UMA CHAVE PRIMÁRIA 
      // COMPOSTA DA TABELA "Score"
    
     //  private static final long serialVersionUID = 1L; 
    
    
       @ManyToOne // FAZ A CONFIGURACAO DE CHAVE ESTRANGEIRA (FK)
       @JoinColumn( name= "movie_id") // INDICANDO O NOME DA FK
       private  Movie movie;
       
    
       @ManyToOne 
       @JoinColumn( name= "user_id") // INDICANDO O NOME DA FK
       private User user;

       
        public Movie getMovie() {
               return movie;
        }

        public User getUser() {
               return user;
        }

        public void setMovie(Movie movie) {
               this.movie = movie;
        }

        public void setUser(User user) {
               this.user = user;
        }
        
}
