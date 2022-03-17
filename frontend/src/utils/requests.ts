export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:3000";

/**
 * A variavel "BASE URL" FACILITARA A REQUISICAO PARA A APLICACAO BACKEND.
 * Seu valor poderá ser definido atraves atraves da variável "REACT_APP_BACKEND_URL"
 * que será definida no servidor web. Porem, caso nao exista, o seu valor
 * será para o localhost atual que esta rodando a aplicacao backend.
 *
 * 
 * O operador "??" é chamado de 
 * (semelhante ao operador ":" da variavel "$(APP_PROFILE:test)" no
 * atributo "spring.profiles.active" do arquivo "application.properties")
*/