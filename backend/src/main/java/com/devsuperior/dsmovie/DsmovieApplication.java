package com.devsuperior.dsmovie;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DsmovieApplication {

	public static void main(String[] args) {
		SpringApplication.run(DsmovieApplication.class, args);
	}

}

// mvn spring-boot:run


/*
     Caso vc tenha adicionado a dependendia "spring-boot-start-security" entao
     ao rodar pela primeira vez o servidor sera exibida uma pagina de login na qual
    vc precisa entrar para ter acesso a mensagem do servidor. A senha se encontra
    no console e o usuario padrao e chamado de 'user'. Caso queira que isso nao aconteca,
   elimine a seguinte dependencia do arquivo 'pom.xml' :

    <dependency>
                    <groupId>org.springframework.boot</groupId>
                    <artifactId>spring-boot-starter-security</artifactId>
   </dependency>

    OU ADICIONE ESSA ANOTACAO NO LUGAR DA "@SpringBootApplication" QUE FICA ACIMA 
   DA CLASSE ACIMA  

       @SpringBootApplication(exclude = {SecurityAutoConfiguration.class}).
    This excludes parameter will remove Security configuration.

*/
