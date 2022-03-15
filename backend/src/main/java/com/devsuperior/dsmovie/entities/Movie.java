package com.devsuperior.dsmovie.entities;

import java.util.HashSet;
import java.util.Set;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
/**
 *  @author Patrick
 */

@Entity
@Table( name = "tb_movie" ) // AO INVES DE CRIAR A TABELA COM O NOME DA CLASSE,
// O JPA IRA CRIAR UMA TABELA CORRESPONDENTE CHAMADA DE "tb_movie"
public class Movie {
    
     @Id // INDICANDO QUE O CAMPO "id" É UMA CHAVE PRIMARIA
 
     @GeneratedValue( 
          strategy = GenerationType.IDENTITY// ATRIBUINDO IMPLEMENTACAO INCREMENTAL PARA CADA REGISTRO
         // DE USUARIO DENTRO DO BANCO DE DADOS
     ) 
     private Long id;
     
     private String title;
     private Double score;
     private Integer count;
     private String image;
     
     //     A anotacao "OneToMany" indica q um mesmo filme tem varias avaliacoes
     @OneToMany (mappedBy = "id.movie")// 'id' da classe Score e 'movie' se trata do atributo da classe "ScorePK"
     private Set<Score> scores= new HashSet<>();
     /*  A estrutura Set evita o registro de dados repetidos e vai permitir mapear todos os registros dentro 
          da tabela "tb_score" que contenham o ID desse filme, ou seja, irá fazer referencia para todo o conjunto
          de avaliacoes  desse filme.     */
     
     
     public Movie (){  }
     
     public Movie (Long id, String title, Double score, Integer count, String image){
           this.id = id;
           this.title = title;
           this.score = score;
           this.count = count;
           this.image = image;
     }
     
     
    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public Double getScore() {
        return score;
    }

    public Integer getCount() {
        return count;
    }

    public String getImage() {
        return image;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setScore(Double score) {
        this.score = score;
    }

    public void setCount(Integer count) {
        this.count = count;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Set<Score> getScores() {
        return scores;
    }
     
    public void setScores(Set<Score> scores) {
        this.scores = scores;
    }
}
