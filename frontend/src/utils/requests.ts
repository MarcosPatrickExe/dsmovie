export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:3000";

/**
 * A variavel "BASE URL" FACILITARA A REQUISICAO PARA A APLICACAO BACKEND.
 * Seu valor poder� ser definido atraves da vari�vel "REACT_APP_BACKEND_URL"
 * que ser� definida no servidor web como uma variavel de ambiente. Porem, 
 * caso nao exista, o seu valor apontar� para o endereco local, ou seja, localhost:3000.
 *
 * 
 * O operador "??" � chamado de 
 * (semelhante ao operador ":" da variavel "${APP_PROFILE:test}" no
 * atributo "spring.profiles.active" do arquivo "application.properties")
*/