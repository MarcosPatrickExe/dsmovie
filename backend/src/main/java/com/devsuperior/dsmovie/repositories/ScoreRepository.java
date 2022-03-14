package com.devsuperior.dsmovie.repositories;

import com.devsuperior.dsmovie.entities.Score;
import com.devsuperior.dsmovie.entities.ScorePK;
import com.devsuperior.dsmovie.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *      @author Patrick
 */
public interface ScoreRepository extends JpaRepository<Score, ScorePK> {
    // Interface de repositorio de tipo Score e com ID do tipo SpokePK


}
