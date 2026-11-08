
const os: typeof import("node:os") = require("node:os");
const { execFileSync } = require("node:child_process");

const comando = process.argv[2];

if (comando === "info") {

    console.log("\n========== INFORMAÇÕES DO COMPUTADOR ==========");

    console.log("Nome do computador:", os.hostname());
    console.log("Sistema operacional:", os.platform());
    console.log("Arquitetura:", os.arch());
    console.log("Versão do sistema:", os.release());

    console.log("\n========== MEMÓRIA RAM ==========");

    const memoriaTotal = os.totalmem();
    const memoriaLivre = os.freemem();
    const memoriaUsada = memoriaTotal - memoriaLivre;

    console.log("Memória total:", (memoriaTotal / (1024 ** 3)).toFixed(2), "GB");
    console.log("Memória livre:", (memoriaLivre / (1024 ** 3)).toFixed(2), "GB");
    console.log("Memória utilizada:", (memoriaUsada / (1024 ** 3)).toFixed(2), "GB");

    console.log("\n========== PROCESSADOR ==========");

    const processadores = os.cpus();
    const primeiroProcessador = processadores[0];

    if (primeiroProcessador) {
        console.log("Modelo:", primeiroProcessador.model);
        console.log("Núcleos lógicos:", processadores.length);
    } else {
        console.log("Não foi possível identificar o processador.");
    }
}

else if (comando === "rede") {

    console.log("\n========== INFORMAÇÕES DE REDE ==========");

    const interfaces = os.networkInterfaces();

    for (const [nomeInterface, enderecos] of Object.entries(interfaces)) {

        if (!enderecos) {
            continue;
        }

        console.log("\nInterface:", nomeInterface);

        for (const endereco of enderecos) {

            console.log("Tipo:", endereco.family);
            console.log("Endereço IP:", endereco.address);
            console.log("Máscara de rede:", endereco.netmask);
            console.log("Endereço MAC:", endereco.mac);
            console.log("Interface interna:", endereco.internal ? "Sim" : "Não");
        }
    }
}

else if (comando === "processos") {

    console.log("\n========== PROCESSOS EM EXECUÇÃO ==========");

    try {

        let resultado: string;

        if (os.platform() === "win32") {

            resultado = execFileSync("tasklist", ["/FO", "CSV", "/NH"], {
                encoding: "utf8"
            });

        } else {

            resultado = execFileSync("ps", ["-eo", "pid,comm"], {
                encoding: "utf8"
            });
        }

        const processos = resultado.trim().split(/\r?\n/);

        console.log("Total de linhas retornadas:", processos.length);
        console.log("\nPrimeiros processos encontrados:\n");

        console.log(processos.slice(0, 15).join("\n"));

        if (processos.length > 15) {
            console.log("\n... Existem mais processos em execução.");
        }

    } catch (erro) {

        console.log("Não foi possível consultar os processos.");
        console.log(erro);
    }
}

else if (comando === "ajuda") {

    console.log("\n========== IT AUTOMATION CLI ==========");

    console.log("Comandos disponíveis:\n");

    console.log("info       - Informações do computador");
    console.log("rede       - Informações de rede");
    console.log("processos  - Processos em execução");
    console.log("ajuda      - Lista de comandos");
}

else {

    console.log("\nComando não reconhecido!");
    console.log("Digite 'ajuda' para consultar os comandos disponíveis.");
}
