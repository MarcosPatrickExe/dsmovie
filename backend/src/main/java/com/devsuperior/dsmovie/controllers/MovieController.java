package com.devsuperior.dsmovie.controllers;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.services.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
       @author Patrick
 */

@RestController
@RequestMapping(  // mapeando o caminho para executar esse metodo
    value = "/movies")
public class MovieController {
/*   O controlador vai implementar um endpoint, ou seja, um 
      endereco URL para que aplciacoes se conectem à essa aplicacao
      backend               */
    
       @Autowired  // instanciando automaticamente um objeto da classe "MovieService"
       private MovieService service;
    
       @GetMapping  // Esse metodo responde pelo verbo "GET" do HTTP atravess do caminho padrao que é "http:localhost:8080/movies"
       public Page<MovieDTO> recuperarFilmes (Pageable pageable){ // esse objeto será recebido via URL!!
                return service.cosultarFilmes ( pageable );
       }
       
/*     O objeto Pageable recebe um parametro via URL dizendo 
        o numero de paginas que serao retornadas apos a consulta ao banco.
        Ex:  caso vc deseje obter somente uma pagina com somente 12 elementos
        da consulta, entao basta escrever na URL o valor do RequestMapping + GetMapping + parametro,
        ficando assim: "http:localhost:8080/movies?size=12"    
       
       para acessar a segunda pagina:
       
       "http:localhost:8080/movies?size=12&page=1"
 */
       
       @GetMapping(  value = "/{id}" ) // para executar esse metodo utilize o caminho "http://localhost:8080/movies/n" Esse 'n' corresponde ao numero do ID do filme 
       public MovieDTO recuperarFilmePorID (@PathVariable Long id){
       /*  A anotacao "@PathVariable" indica que o parametro "id" corresponde
           corresponde ao a variavel '{id}' que foi passada como parametro pela URL */
           
              return this.service.buscarFilmePorId(  id );
       }
}
