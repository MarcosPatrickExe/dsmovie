package com.devsuperior.dsmovie.entities;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * @author Patrick
 */

@Entity
@Table( name="tb_score" )
public class Score { /*  
       "SCORE" REPRESENTA A TABELA QUE 
       VAI INTERLIGAR AS TABELAS "USER" E "MOVIE" DO BANCO
       DE DADOS, E POR ISSO ELA VAI TER DUAS CHAVES QUE IRÃO
       REPRESENTAR OS "IDs" DESSAS DUAS TABELAS, POREM, FOI
       NECESSARIO CRIAR A CLASSE "ScorePK" PARA REPRESENTAR 
       ESSA CHAVE COMPOSTA (DE "MOVIE" E "USER") NO  CODIGO!!!
    */
    
        @EmbeddedId  // ANOTATION ESPECIAL PARA IDENTIFICAR 
      //  UMA CHAVE PRIMARIA COMPOSTA QUE SERA REPRESENTADA 
      //  ATRAVES DE UMA CLASSE
        private  ScorePK id = new ScorePK ();// CHAVE COMPOSTA
        private Double value;

        public Score(){ }

        public void setMovie( Movie film ){
              this.id.setMovie(film);
        }
        
        public void setUser( User usu ){
              this.id.setUser (usu);
        }
        
        
        
        
        public ScorePK getId() {
            return id;
        }

        public Double getValue() {
            return value;
        }

        public void setId(ScorePK id) {
            this.id = id;
        }

        public void setValue(Double value) {
            this.value = value;
        }
       
}
