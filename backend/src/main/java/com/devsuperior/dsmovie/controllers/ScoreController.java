package com.devsuperior.dsmovie.controllers;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.dto.ScoreDTO;
import com.devsuperior.dsmovie.services.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *           @author Patrick
 */

@RestController
@RequestMapping( value="/scores")
public class ScoreController {
    
        @Autowired
        private ScoreService scoreService;
    
        @PutMapping //( value = "/" )
        public MovieDTO saveScore (@RequestBody  ScoreDTO  sdto){  // Esse objeto ira receber o corpo (body) da requisicao do tipo "raw" e JSON
            
              return  this.scoreService.salvarAvaliacaoDoFilme( sdto ); //this.scoreService.salvarAvaliacaoDoFilme();
        }
    
}
