export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:8080";

/**
 * A variavel "BASE URL" FACILITARA A REQUISICAO PARA A APLICACAO BACKEND.
 * Seu valor poder� ser definido atraves atraves da vari�vel "REACT_APP_BACKEND_URL"
 * que ser� definida no servidor web. Porem, caso nao exista, o seu valor
 * ser� para o localhost atual que esta rodando a aplicacao backend.
 *
 * 
 * O operador "??" � chamado de 
 * (semelhante ao operador ":" da variavel "$(APP_PROFILE:test)" no
 * atributo "spring.profiles.active" do arquivo "application.properties")
*/