// textos en varios idiomas
const i18n = {
    "es": {
        "t_title": "[Generador de Diccionarios (Gabrielplusx)]",
        "t_h3_1": "Datos del Objetivo",
        "t_l_nombre": "Nombres / Apellidos:",
        "t_h_nombre": "Ej. Patricia, Gabriel, Diego. (Separa con comas)",
        "t_l_familia": "Pareja / Hijos / Familiares:",
        "t_h_familia": "Nombres de personas cercanas. (Separa con comas)",
        "t_l_lugares": "Lugares / Ciudades Importantes:",
        "t_h_lugares": "Ciudad natal, residencia. (Separa con comas)",
        "t_l_fecha": "Fechas Importantes (Años, Días, Fechas completas):",
        "t_h_fecha": "Ej. 1998, 2006, 12051990. (Separa con comas)",
        "t_l_numeros": "Números Fijos (Teléfonos, IDs, Matrículas):",
        "t_h_numeros": "Documentos, Cédula, placas de auto. (Separa con comas)",
        "t_l_extra": "Mascotas / Aficiones / Empresas / Extra:",
        "t_h_extra": "Ej. Tom, Guitarra, admin. (Separa con comas)",
        "t_h3_2": "Personalización",
        "t_c_leet": "Modo Leetspeak (a=4, e=3...)",
        "t_c_inv": "Invertir (carlos -> solrac)",
        "t_h3_3": "Patrones & Combinaciones",
        "t_l_sep": "Separadores personalizados:",
        "t_h_sep": "Caracteres para unir palabras. Déjalo en blanco para unir directo.",
        "t_c_comb": "Combinar hasta 3 palabras",
        "t_c_suf": "Añadir sufijos (palabra123)",
        "t_c_pref": "Añadir prefijos (123palabra)",
        "t_h3_4": "Límites de Ejecución",
        "t_l_min": "Long. Mínima:",
        "t_l_max": "Long. Máxima:",
        "t_l_lim": "Límite Máximo de Resultados (Max 1M):",
        "btnGenerar": "[Generar]",
        "btnPerfil": "[Exportar perfil]",
        "btnLimpiar": "[Limpiar]",
        "btnDescargar": "[Descargar.txt ]",
        "btnCopiar": "[ copiar_memoria ]",
        "placeholder_res": "> Esperando ejecución...",
        "msg_ejecutando": "> Ejecutando script... calculando combinaciones...",
        "msg_error_datos": "> ERROR: No se ingresaron datos objetivo en la sección 1.",
        "msg_resultado_0": "> RESULTADO: 0 combinaciones generadas.\n> SUGERENCIA: Ajusta --min-len o agrega más inputs.",
        "msg_fin": "> EJECUCIÓN FINALIZADA.\n> combinaciones generadas: ",
        "msg_warn": "> WARNING: Límite máximo de ",
        "msg_warn_2": " alcanzado.\n",
        "msg_copiado": "[ OK_COPIADO ]",
        "perfil_title": "--- PERFIL DEL OBJETIVO ---\n\n",
        "perfil_nombres": "Nombres: ",
        "perfil_familia": "Familia: ",
        "perfil_lugares": "Lugares: ",
        "perfil_fechas": "Fechas: ",
        "perfil_numeros": "Numeros: ",
        "perfil_extra": "Extra: ",
        "perfil_conf": "--- CONF ---\n",
        "perfil_sep": "Separadores: ",
        "t_author_label": "Desarrollado por:"
    },
    "pt": {
        "t_title": "[Gerador de Dicionários (Gabrielplusx)]",
        "t_h3_1": "Dados do Alvo",
        "t_l_nombre": "Nomes / Sobrenomes:",
        "t_h_nombre": "Ex. Patricia, Gabriel, Diego. (Separe com vírgulas)",
        "t_l_familia": "Cônjuge / Filhos / Familiares:",
        "t_h_familia": "Nomes de pessoas próximas. (Separe com vírgulas)",
        "t_l_lugares": "Lugares / Cidades Importantes:",
        "t_h_lugares": "Cidade natal, residência. (Separe com vírgulas)",
        "t_l_fecha": "Datas Importantes (Anos, Dias, Datas completas):",
        "t_h_fecha": "Ex. 1998, 2006, 12051990. (Separe com vírgulas)",
        "t_l_numeros": "Números Fixos (Telefones, RGs, Placas):",
        "t_h_numeros": "RG, CPF, placas de carro. (Separe com vírgulas)",
        "t_l_extra": "Animais / Hobbies / Empresas / Extra:",
        "t_h_extra": "Ex. Tom, Guitarra, admin. (Separe com vírgulas)",
        "t_h3_2": "Personalização",
        "t_c_leet": "Modo Leetspeak (a=4, e=3...)",
        "t_c_inv": "Inverter (carlos -> solrac)",
        "t_h3_3": "Padrões & Combinações",
        "t_l_sep": "Separadores personalizados:",
        "t_h_sep": "Caracteres para unir palavras. Deixe em branco para unir direto.",
        "t_c_comb": "Combinar até 3 palavras",
        "t_c_suf": "Adicionar sufixos (palavra123)",
        "t_c_pref": "Adicionar prefixos (123palavra)",
        "t_h3_4": "Limites de Execução",
        "t_l_min": "Comp. Mínimo:",
        "t_l_max": "Comp. Máximo:",
        "t_l_lim": "Limite Máximo de Resultados (Max 1M):",
        "btnGenerar": "[ ./gerar ]",
        "btnPerfil": "[ exportar_perfil ]",
        "btnLimpiar": "[ limpar ]",
        "btnDescargar": "[ baixar.txt ]",
        "btnCopiar": "[ copiar_memoria ]",
        "placeholder_res": "> Aguardando execução...",
        "msg_ejecutando": "> Executando script... calculando combinações...",
        "msg_error_datos": "> ERRO: Nenhum dado do alvo inserido na seção 1.",
        "msg_resultado_0": "> RESULTADO: 0 combinações geradas.\n> SUGESTÃO: Ajuste --min-len ou adicione mais inputs.",
        "msg_fin": "> EXECUÇÃO FINALIZADA.\n> combinações geradas: ",
        "msg_warn": "> AVISO: Limite máximo de ",
        "msg_warn_2": " alcançado.\n",
        "msg_copiado": "[ OK_COPIADO ]",
        "perfil_title": "--- PERFIL DO ALVO ---\n\n",
        "perfil_nombres": "Nomes: ",
        "perfil_familia": "Familia: ",
        "perfil_lugares": "Lugares: ",
        "perfil_fechas": "Datas: ",
        "perfil_numeros": "Numeros: ",
        "perfil_extra": "Extra: ",
        "perfil_conf": "--- CONF ---\n",
        "perfil_sep": "Separadores: ",
        "t_author_label": "Desenvolvido por:"
    },
    "pt-PT": {
        "t_title": "[Gerador de Dicionários (Gabrielplusx)]",
        "t_h3_1": "Dados do Alvo",
        "t_l_nombre": "Nomes / Apelidos:",
        "t_h_nombre": "Ex. Fatima, Ricardo, Diego. (Separar com vírgulas)",
        "t_l_familia": "Cônjuge / Filhos / Familiares:",
        "t_h_familia": "Nomes de pessoas próximas. (Separar com vírgulas)",
        "t_l_lugares": "Locais / Cidades Importantes:",
        "t_h_lugares": "Terra natal, residência. (Separar com vírgulas)",
        "t_l_fecha": "Datas Importantes (Anos, Dias, Datas completas):",
        "t_h_fecha": "Ex. 1998, 2006, 12051990. (Separar com vírgulas)",
        "t_l_numeros": "Números Fixos (Telefones, Cartão de Cidadão, Matrículas):",
        "t_h_numeros": "Documentos, Cartão de Cidadão, matrículas de carros. (Separar com vírgulas)",
        "t_l_extra": "Animais / Passatempos / Empresas / Extra:",
        "t_h_extra": "Ex. Cleopatra, Guitarra, admin. (Separar com vírgulas)",
        "t_h3_2": "Personalização",
        "t_c_leet": "Modo Leetspeak (a=4, e=3...)",
        "t_c_inv": "Inverter (carlos -> solrac)",
        "t_h3_3": "Padrões & Combinações",
        "t_l_sep": "Separadores personalizados:",
        "t_h_sep": "Caracteres para unir palavras. Deixar em branco para unir diretamente.",
        "t_c_comb": "Combinar até 3 palavras",
        "t_c_suf": "Adicionar sufixos (palavra123)",
        "t_c_pref": "Adicionar prefixos (123palavra)",
        "t_h3_4": "Limites de Execução",
        "t_l_min": "Comp. Mínimo:",
        "t_l_max": "Comp. Máximo:",
        "t_l_lim": "Limite Máximo de Resultados (Máx 1M):",
        "btnGenerar": "[ Gerar ]",
        "btnPerfil": "[ Exportar perfil ]",
        "btnLimpiar": "[ Limpar ]",
        "btnDescargar": "[ descarregar.txt ]",
        "btnCopiar": "[ copiar_memória ]",
        "placeholder_res": "> A aguardar execução...",
        "msg_ejecutando": "> A executar script... a calcular combinações...",
        "msg_error_datos": "> ERRO: Não foram inseridos dados do alvo na secção 1.",
        "msg_resultado_0": "> RESULTADO: 0 combinações geradas.\n> SUGESTÃO: Ajuste --min-len ou adicione mais inputs.",
        "msg_fin": "> EXECUÇÃO FINALIZADA.\n> combinações geradas: ",
        "msg_warn": "> AVISO: Limite máximo de ",
        "msg_warn_2": " atingido.\n",
        "msg_copiado": "[ OK_COPIADO ]",
        "perfil_title": "--- PERFIL DO ALVO ---\n\n",
        "perfil_nombres": "Nomes: ",
        "perfil_familia": "Família: ",
        "perfil_lugares": "Locais: ",
        "perfil_fechas": "Datas: ",
        "perfil_numeros": "Números: ",
        "perfil_extra": "Extra: ",
        "perfil_conf": "--- CONF ---\n",
        "perfil_sep": "Separadores: ",
        "t_author_label": "Desenvolvido por:"
    },
    "en": {
        "t_title": "[Dictionary Generator (Gabrielplusx)]",
        "t_h3_1": "Target Data",
        "t_l_nombre": "Names / Surnames:",
        "t_h_nombre": "E.g. Patricia, Gabriel, Diego. (Separate with commas)",
        "t_l_familia": "Partner / Children / Family:",
        "t_h_familia": "Names of close people. (Separate with commas)",
        "t_l_lugares": "Important Places / Cities:",
        "t_h_lugares": "Hometown, residence. (Separate with commas)",
        "t_l_fecha": "Important Dates (Years, Days, Full dates):",
        "t_h_fecha": "E.g. 1998, 2006, 12051990. (Separate with commas)",
        "t_l_numeros": "Fixed Numbers (Phones, IDs, License Plates):",
        "t_h_numeros": "Documents, Social Security, car plates. (Separate with commas)",
        "t_l_extra": "Pets / Hobbies / Companies / Extra:",
        "t_h_extra": "E.g. Tom, Guitar, admin. (Separate with commas)",
        "t_h3_2": "Customization",
        "t_c_leet": "Leetspeak Mode (a=4, e=3...)",
        "t_c_inv": "Invert (carlos -> solrac)",
        "t_h3_3": "Patterns & Combinations",
        "t_l_sep": "Custom Separators:",
        "t_h_sep": "Characters to join words. Leave blank to join directly.",
        "t_c_comb": "Combine up to 3 words",
        "t_c_suf": "Add suffixes (word123)",
        "t_c_pref": "Add prefixes (123word)",
        "t_h3_4": "Execution Limits",
        "t_l_min": "Min. Length:",
        "t_l_max": "Max. Length:",
        "t_l_lim": "Max Results Limit (Max 1M):",
        "btnGenerar": "[ Generate ]",
        "btnPerfil": "[ Export Profile ]",
        "btnLimpiar": "[ Clear ]",
        "btnDescargar": "[ Download.txt ]",
        "btnCopiar": "[ copy_memory ]",
        "placeholder_res": "> Waiting for execution...",
        "msg_ejecutando": "> Executing script... calculating combinations...",
        "msg_error_datos": "> ERROR: No target data entered in section 1.",
        "msg_resultado_0": "> RESULT: 0 generated combinations.\n> SUGGESTION: Adjust --min-len or add more inputs.",
        "msg_fin": "> EXECUTION FINISHED.\n> generated combinations: ",
        "msg_warn": "> WARNING: Maximum limit of ",
        "msg_warn_2": " reached.\n",
        "msg_copiado": "[ OK_COPIED ]",
        "perfil_title": "--- TARGET PROFILE ---\n\n",
        "perfil_nombres": "Names: ",
        "perfil_familia": "Family: ",
        "perfil_lugares": "Places: ",
        "perfil_fechas": "Dates: ",
        "perfil_numeros": "Numbers: ",
        "perfil_extra": "Extra: ",
        "perfil_conf": "--- CONF ---\n",
        "perfil_sep": "Separators: ",
        "t_author_label": "Developed by:"
    }
};

// idioma inicial
let currentLang = "es";

// lista de idiomas
const idiomasDisponibles = ["es", "pt", "pt-PT", "en"];
// textos del boton
const etiquetasBoton = {
    "es": "[ IDIOMA: ES ]",
    "pt": "[ IDIOMA: PT-BR ]",
    "pt-PT": "[ IDIOMA: PT-PT ]",
    "en": "[ LANGUAGE: EN ]"
};

// cambia el idioma de la web
function toggleLang() {
    let index = idiomasDisponibles.indexOf(currentLang);
    index = (index + 1) % idiomasDisponibles.length;
    currentLang = idiomasDisponibles[index];
    
    document.getElementById('btnLang').innerText = etiquetasBoton[currentLang];
    
    const langData = i18n[currentLang];
    
    for (let key in langData) {
        const el = document.getElementById(key);
        if (el) {
            el.innerText = langData[key];
        }
    }
    
    const resArea = document.getElementById('resultadoDiccionario');
    resArea.placeholder = langData["placeholder_res"];
    
    const mensajesEspera = [
        i18n["es"]["placeholder_res"], 
        i18n["pt"]["placeholder_res"], 
        i18n["pt-PT"]["placeholder_res"], 
        i18n["en"]["placeholder_res"], 
        "> Esperando ejecución..."
    ];

    if (mensajesEspera.includes(resArea.value) || resArea.value === "") {
        resArea.value = langData["placeholder_res"];
    }
}

// limpia el texto
const sanitizeInput = (str) => {
    return str.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
};

// saca los datos de la caja
const obtenerValores = (id) => {
    const valor = sanitizeInput(document.getElementById(id).value);
    return valor
        .split(',') 
        .map(item => item.trim()) 
        .filter(item => item !== ""); 
};

// cambia las letras por numeros
const applyLeet = (str) => {
    const map = { 'a': '4', 'e': '3', 'i': '1', 'o': '0', 's': '5', 't': '7' };
    return str.split('').map(c => map[c.toLowerCase()] || c).join('');
};

// inicia la creacion de la lista
function iniciarGeneracion() {
    const langData = i18n[currentLang];
    const textareaResultado = document.getElementById('resultadoDiccionario');
    const btnGenerar = document.getElementById('btnGenerar');
    
    textareaResultado.value = langData["msg_ejecutando"];
    btnGenerar.disabled = true; 
    document.getElementById('btnDescargar').style.display = 'none';
    document.getElementById('btnCopiar').style.display = 'none';

    setTimeout(() => {
        generarDiccionario();
        btnGenerar.disabled = false; 
    }, 50);
}

// crea todas las palabras
function generarDiccionario() {
    const langData = i18n[currentLang];
    const textareaResultado = document.getElementById('resultadoDiccionario');
    
    const nombres = obtenerValores('inputNombre');
    const familia = obtenerValores('inputFamilia');
    const lugares = obtenerValores('inputLugares');
    const fechas = obtenerValores('inputFecha');
    const numeros = obtenerValores('inputNumeros');
    const extras = obtenerValores('inputExtra');
    
    const baseData = [...new Set([...nombres, ...familia, ...lugares, ...fechas, ...numeros, ...extras])];
    
    if (baseData.length === 0) {
        textareaResultado.value = langData["msg_error_datos"];
        return;
    }

    const useLeet = document.getElementById('chkLeet').checked;
    const useReverse = document.getElementById('chkInvertir').checked;
    const combine3 = document.getElementById('chkCombinar3').checked;
    const useSuffix = document.getElementById('chkSufijos').checked;
    const usePrefix = document.getElementById('chkPrefijos').checked;
    
    let separadoresInput = sanitizeInput(document.getElementById('inputSeparadores').value);
    const separadores = ["", ...new Set(separadoresInput.split(''))]; 

    const minLen = parseInt(document.getElementById('minLen').value) || 1;
    const maxLen = parseInt(document.getElementById('maxLen').value) || 100;
    
    let limiteInput = parseInt(document.getElementById('limiteCantidad').value);
    if (isNaN(limiteInput) || limiteInput <= 0) limiteInput = 100000;
    if (limiteInput > 1000000) limiteInput = 1000000; 

    const addOns = ["123", "1234", "12", "01", "69", "99", "2023", "2024", "!", "*", "_"];
    const combinacionesAddOns = useSuffix || usePrefix ? addOns : [];

    let variacionesSet = new Set();
    baseData.forEach(palabra => {
        let w = palabra.toLowerCase(); 
        let C = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase(); 
        let U = palabra.toUpperCase(); 
        
        variacionesSet.add(w);
        variacionesSet.add(C);
        variacionesSet.add(U);

        if (useLeet) {
            variacionesSet.add(applyLeet(w));
            variacionesSet.add(applyLeet(C));
        }

        if (useReverse) {
            let rev = w.split('').reverse().join(''); 
            variacionesSet.add(rev);
            variacionesSet.add(rev.charAt(0).toUpperCase() + rev.slice(1));
        }
    });

    let variaciones = Array.from(variacionesSet);
    let diccionarioFinal = new Set(); 

    const intentarAñadir = (baseWord) => {
        if (diccionarioFinal.size >= limiteInput) return false;

        if (baseWord.length >= minLen && baseWord.length <= maxLen) {
            diccionarioFinal.add(baseWord);
        }

        if (useSuffix) {
            for (let ad of combinacionesAddOns) {
                if (diccionarioFinal.size >= limiteInput) return false;
                let s = baseWord + ad;
                if (s.length >= minLen && s.length <= maxLen) diccionarioFinal.add(s);
            }
        }
        
        if (usePrefix) {
            for (let ad of combinacionesAddOns) {
                if (diccionarioFinal.size >= limiteInput) return false;
                let p = ad + baseWord;
                if (p.length >= minLen && p.length <= maxLen) diccionarioFinal.add(p);
            }
        }
        
        return diccionarioFinal.size < limiteInput;
    };

    generacion: 
    for (let w1 of variaciones) {
        if (!intentarAñadir(w1)) break generacion; 

        for (let w2 of variaciones) {
            if (w1.toLowerCase() === w2.toLowerCase()) continue;
            
            for (let sep of separadores) {
                let w12 = w1 + sep + w2;
                if (!intentarAñadir(w12)) break generacion;
            }

            if (combine3) {
                for (let w3 of variaciones) {
                    if (w1.toLowerCase() === w3.toLowerCase() || w2.toLowerCase() === w3.toLowerCase()) continue;
                    
                    for (let sep of separadores) {
                        let w123 = w1 + sep + w2 + sep + w3;
                        if (!intentarAñadir(w123)) break generacion;
                    }
                }
            }
        }
    }

    contrasenasGeneradas = Array.from(diccionarioFinal);
    
    if (contrasenasGeneradas.length === 0) {
        textareaResultado.value = langData["msg_resultado_0"];
        document.getElementById('btnDescargar').style.display = 'none';
        document.getElementById('btnCopiar').style.display = 'none';
    } else {
        let msj = langData["msg_fin"] + contrasenasGeneradas.length + "\n";
        if (contrasenasGeneradas.length >= limiteInput) msj += langData["msg_warn"] + limiteInput + langData["msg_warn_2"];
        msj += `\n` + contrasenasGeneradas.join("\n");
        
        textareaResultado.value = msj;
        document.getElementById('btnDescargar').style.display = 'block';
        document.getElementById('btnCopiar').style.display = 'block';
    }
}

// copia todo el texto
function copiarAlPortapapeles() {
    const langData = i18n[currentLang];
    const textarea = document.getElementById('resultadoDiccionario');
    if (contrasenasGeneradas.length === 0) return;
    
    textarea.select();
    textarea.setSelectionRange(0, 9999999); 
    
    try {
        document.execCommand('copy');
        const btn = document.getElementById('btnCopiar');
        const textoOriginal = btn.innerText;
        btn.innerText = langData["msg_copiado"]; 
        setTimeout(() => {
            btn.innerText = textoOriginal;
        }, 2000);
    } catch (err) {
        console.error("Error copy: ", err);
    }
}

// baja el texto a un archivo
function descargarTXT() {
    if (contrasenasGeneradas.length === 0) return;
    const contenido = contrasenasGeneradas.join("\n");
    const blob = new Blob([contenido], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "wordlist_output.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// borra lo que se escribio en las cajas
function limpiarCampos() {
    const langData = i18n[currentLang];
    document.getElementById('generatorForm').reset();
    document.getElementById('resultadoDiccionario').value = langData["placeholder_res"];
    document.getElementById('btnDescargar').style.display = 'none';
    document.getElementById('btnCopiar').style.display = 'none';
    contrasenasGeneradas = [];
}

// baja un archivo con los datos
function descargarPerfil() {
    const langData = i18n[currentLang];
    const perfil = langData["perfil_title"] +
        langData["perfil_nombres"] + document.getElementById('inputNombre').value + "\n" +
        langData["perfil_familia"] + document.getElementById('inputFamilia').value + "\n" +
        langData["perfil_lugares"] + document.getElementById('inputLugares').value + "\n" +
        langData["perfil_fechas"] + document.getElementById('inputFecha').value + "\n" +
        langData["perfil_numeros"] + document.getElementById('inputNumeros').value + "\n" +
        langData["perfil_extra"] + document.getElementById('inputExtra').value + "\n\n" +
        langData["perfil_conf"] +
        langData["perfil_sep"] + document.getElementById('inputSeparadores').value + "\n" +
        "Min_Len: " + document.getElementById('minLen').value + "\n" +
        "Max_Len: " + document.getElementById('maxLen').value + "\n";

    const blob = new Blob([perfil], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "target_profile.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// evita que el numero pase del limite
const inputLimite = document.getElementById('limiteCantidad');
if (inputLimite) {
    inputLimite.addEventListener('input', function() {
        if (this.value > 1000000) {
            this.value = 1000000;
        }
    });
}

//Codigo creado por Gabrielplusx para un uso educativo y su uso se recomienda en un ambiente controlado y permitido.
//Desenvolvido por Gabrielplusx
