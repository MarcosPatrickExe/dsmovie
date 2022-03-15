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
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *       @author Patrick
 */
@Service
public class ScoreService {
            
      @Autowired
      private MovieRepository movieRepo;
      
      @Autowired
      private UserRepository userRepository;
      
      @Autowired
      private ScoreRepository scoreRepository;
      
      
      @Transactional
       public MovieDTO salvarAvaliacaoDoFilme ( ScoreDTO objetoRequisicao){ 
/*    "dto" se trata de um objeto com os campos de 
       "email", "id" do filme  e valor ("value") da avaliação    */
       
       System.out.println("ID do filme: "+objetoRequisicao.getMovieId());
       System.out.println("Email do usuario: "+objetoRequisicao.getEmail());
       System.out.println("valor da avaliacao: "+objetoRequisicao.getScore());

             // SALVANDO O EMAIL DO USUARIO CASO NAO EXISTA
             User usuario = this
                                            .userRepository
                                                        .findByEmail( // metodo personalizado na interface "UserRepository"
                                                                objetoRequisicao.getEmail()
                                                        );
       
             if (usuario==null ){
                    usuario = new User(); // Criado entidade para salvar no banco de dados atraves do "Repository"
                    usuario.setEmail ( objetoRequisicao.getEmail() );
                 
                    usuario = this.userRepository.save( usuario ); 
                /* Salva no banco e retorna uma nova referencia
                   para  a entitdade  "usuario" */
             }
             //==========================================
             
      //    BUSCANDO PELO FILME QUE FOI AVALIADO
             Movie movie  = this
                                             .movieRepo
                                                    .findById (
                                                                objetoRequisicao.getMovieId() 
                                                    ).get();
        
             Score score = new Score();
             score.setMovie (movie); // Passando a referencia do filme
             score.setUser (usuario); // Passando a referencia do usuario
             score.setValue ( objetoRequisicao.getScore() ); // Passando o valor da nota
             
             score = this.scoreRepository.saveAndFlush( score ); // Salvando a entididade "score" na tabela "tb_score"
/*        O metodo "saveAnfFlush()" Salva o dado da avaliacao 
             dentro da tabela "Score" junto com os IDS de Movie e 
             de User garante que vai salvar e retornar a referencia 
             do objeto salvo  
 */
       
               
/*     RECALCULANDO A AVALIAÇÃO MÉDIA DO FILME (MÉDIA DOS 
        VALORES DO SCORE), CALCULANDO O NUMERO DE VALORES/NOTAS ATRIBUIDAS
        AO FILME  E LOGO DEPOIS  SALVANDO ISSO NO BANCO DE DADOS....   */
               
 /*    O campo "Value" na tabela "tb_movie" se trata da media das notas atribuidas ao filme,
        logo, é necessaria a criação do campo Set<Score> scores que ira armazenar
        todas as notas e depois ser consultado para fazer a media   */
        
           double sum = 0.0;
           
           for ( Score s : movie.getScores() ) { // getScores() permite obter uma lista de scores associados a um filme
                  sum += s.getValue();
           }
           
           double average = sum / movie.getScores().size();// obtendo o campo "Value"
           movie.setScore( average ); // Guardando a media de scores/notas atribuida ao filme dentro da entidade "Movie" ou tabela "tb_movie"
           movie.setCount( movie.getScores().size() );
           
          movie = this.movieRepo.save(movie); // salvando filme no banco de dados
           
          return new MovieDTO (movie);
 //    ========================================
       }
}
