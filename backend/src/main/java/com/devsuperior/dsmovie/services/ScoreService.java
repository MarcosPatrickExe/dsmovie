package com.devsuperior.dsmovie.services;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.dto.ScoreDTO;
import com.devsuperior.dsmovie.entities.Movie;
import com.devsuperior.dsmovie.entities.Score;
import com.devsuperior.dsmovie.entities.User;
import com.devsuperior.dsmovie.repositories.MovieRepository;
import com.devsuperior.dsmovie.repositories.ScoreRepository;
import com.devsuperior.dsmovie.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

/**
 *       @author Patrick
 */
public class ScoreService {
            
      @Autowired
      private MovieRepository movieRepo;
      
      @Autowired
      private UserRepository userRepository;
      
      @Autowired
      private ScoreRepository scoreRepository;
      
      
      @Transactional
       public MovieDTO salvarAvaliacaoDoFilme ( ScoreDTO sco){ 
/*    "dto" se trata de um objeto com os campos de 
       "email", id do filme  e valor da avaliação    */
                    
             // SALVANDO O EMAIL DO USUARIO CASO NAO EXISTA
             User usuario = this
                                            .userRepository
                                                        .findByEmail( // metodo personalizado na interface "UserRepository"
                                                                sco.getEmail()
                                                        );
       
             if (usuario==null ){
                    usuario = new User(); // Criado entidade para salvar no banco de dados atraves do "Repository"
                    usuario.setEmail( sco.getEmail() );
                 
                    usuario = this.userRepository.save( usuario ); 
                /* Salva no banco e retorna uma nova referencia
                   para "usuario" */
             }
             //==========================================
             
      //    BUSCANDO PELO FILME QUE FOI AVALIADO
             Movie movie  = this
                                             .movieRepo
                                                    .findById (
                                                                sco.getMovieId() 
                                                    ).get();
        
             Score score = new Score();
             score.setMovie (movie);
             score.setUser (usuario);
             score.setValue ( sco.getScore() );
             
             score = this.scoreRepository.saveAndFlush( score ); 
/*        O metodo "saveAnfFlush()" Salva o dado da avaliacao 
             dentro da tabela "Score" junto com os IDS de Movie e 
             de User garante que vai salvar e retornar a referencia 
             do objeto salvo  
 */
       
               
/*     RECALCULANDO A AVALIAÇÃO MÉDIA DO FILME (MÉDIA DOS 
        VALORES DO SCORE) E SALVAR NO BANCO DE DADOS   */
               
 /*    Os campos "Value" se trata da media das notas atribuidas ao filme,
        logo, é necessaria a criação do campo Set<Score> scores que ira armazenar
        todas as notas e depois ser consultado para fazer a media   */
        
           double sum = 0.0;
           
           for ( Score s : movie.getScores() ) {
                  sum += s.getValue();
           }
           
           double average = sum / movie.getScores().size();// obtendo o campo 'Value"
           movie.setScore( average );
           movie.setCount( movie.getScores().size() );
           
          movie = this.movieRepo.save(movie); // salvando filme no banco de dados
           
          return new MovieDTO (movie);
 //    ========================================
       }
}
