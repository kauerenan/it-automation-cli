 const os = require("node:os");

const comando = process.argv[2];

console.log("Comando recebido:", comando);

if (comando === "info") {
    const memoriaTotal = os.totalmem();
    const memoriaLivre = os.freemem();
    const memoriaUsada = memoriaTotal - memoriaLivre;

    console.log("Nome do Computador:", os.hostname());
    console.log("Sistema Operacional:", os.platform());
    console.log("Arquiterua:", os.arch());
    console.log("Versão do Sistema:", os.release());
    console.log("Memoria Total", (memoriaTotal / (1024 ** 3)).toFixed(2), "GB");
    console.log("Memoria Livre", (memoriaLivre / (1024 ** 3)).toFixed(2), "GB");
    console.log("Memoria Utilizada", (memoriaUsada / (1024 ** 3)).toFixed(2), "GB")

    

} else if (comando === "rede") {
    console.log("Consultando informações da rede...");

} else if (comando === "processos") {
    console.log("Consultando processos em execução...");

} else if (comando === "ajuda") {
    console.log("Comandos disponíveis: info, rede, processos, ajuda");

} else {
    console.log("Comando não reconhecido!");
} 