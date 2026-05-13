// Objeto que almacena las traducciones para el soporte multilingüe amigo
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
        "msg_resultado_0": "> RESULTADO: 0 strings encontrados.\n> SUGERENCIA: Ajusta --min-len o agrega más inputs.",
        "msg_fin": "> EJECUCIÓN FINALIZADA.\n> STRINGS GENERADOS: ",
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
        "msg_resultado_0": "> RESULTADO: 0 strings encontrados.\n> SUGESTÃO: Ajuste --min-len ou adicione mais inputs.",
        "msg_fin": "> EXECUÇÃO FINALIZADA.\n> STRINGS GERADOS: ",
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
        "t_h_nombre": "Ex. Patricia, Ricardo, Diego. (Separar com vírgulas)",
        "t_l_familia": "Cônjuge / Filhos / Familiares:",
        "t_h_familia": "Nomes de pessoas próximas. (Separar com vírgulas)",
        "t_l_lugares": "Locais / Cidades Importantes:",
        "t_h_lugares": "Terra natal, residência. (Separar com vírgulas)",
        "t_l_fecha": "Datas Importantes (Anos, Dias, Datas completas):",
        "t_h_fecha": "Ex. 1998, 2006, 12051990. (Separar com vírgulas)",
        "t_l_numeros": "Números Fixos (Telefones, Cartão de Cidadão, Matrículas):",
        "t_h_numeros": "Documentos, Cartão de Cidadão, matrículas de carros. (Separar com vírgulas)",
        "t_l_extra": "Animais / Passatempos / Empresas / Extra:",
        "t_h_extra": "Ex. Tom, Guitarra, admin. (Separar com vírgulas)",
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
        "msg_resultado_0": "> RESULTADO: 0 strings encontradas.\n> SUGESTÃO: Ajuste --min-len ou adicione mais inputs.",
        "msg_fin": "> EXECUÇÃO FINALIZADA.\n> STRINGS GERADAS: ",
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
        "msg_resultado_0": "> RESULT: 0 strings found.\n> SUGGESTION: Adjust --min-len or add more inputs.",
        "msg_fin": "> EXECUTION FINISHED.\n> GENERATED STRINGS: ",
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

// Variable global para rastrear el idioma actual
let currentLang = "es";

// Arreglo con el orden de los idiomas para ciclar entre ellos
const idiomasDisponibles = ["es", "pt", "pt-PT", "en"];
const etiquetasBoton = {
    "es": "[ IDIOMA: ES ]",
    "pt": "[ IDIOMA: PT-BR ]",
    "pt-PT": "[ IDIOMA: PT-PT ]",
    "en": "[ LANGUAGE: EN ]"
};

// Función para cambiar el idioma de la interfaz dinámicamente iterando por el arreglo
function toggleLang() {
    // Buscar la posición del idioma actual y saltar al siguiente (volviendo al inicio si llega al final)
    let index = idiomasDisponibles.indexOf(currentLang);
    index = (index + 1) % idiomasDisponibles.length;
    currentLang = idiomasDisponibles[index];
    
    // Actualiza el texto del botón
    document.getElementById('btnLang').innerText = etiquetasBoton[currentLang];
    
    const langData = i18n[currentLang];
    
    // Actualiza todos los elementos de texto en la UI basados en su ID
    for (let key in langData) {
        const el = document.getElementById(key);
        if (el) {
            el.innerText = langData[key];
        }
    }
    
    // Actualiza el placeholder del área de texto de resultados
    const resArea = document.getElementById('resultadoDiccionario');
    resArea.placeholder = langData["placeholder_res"];
    
    // Lista de mensajes por defecto para poder reemplazarlos dinámicamente si el usuario aún no genera datos
    const mensajesEspera = [
        i18n["es"]["placeholder_res"], 
        i18n["pt"]["placeholder_res"], 
        i18n["pt-PT"]["placeholder_res"], 
        i18n["en"]["placeholder_res"], 
        "> Esperando ejecución..."
    ];

    // Si el área de texto está vacía o tiene un mensaje por defecto anterior, lo actualiza al nuevo idioma
    if (mensajesEspera.includes(resArea.value) || resArea.value === "") {
        resArea.value = langData["placeholder_res"];
    }
}

// Función para limpiar los datos ingresados y prevenir ataques XSS (Cross-Site Scripting)
const sanitizeInput = (str) => {
    return str.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
};

// Función para extraer los valores de un input, separarlos por comas y limpiarlos
const obtenerValores = (id) => {
    const valor = sanitizeInput(document.getElementById(id).value);
    return valor
        .split(',') // Separa el texto donde haya comas
        .map(item => item.trim()) // Elimina espacios al inicio y final de cada palabra
        .filter(item => item !== ""); // Elimina elementos vacíos
};

// Función para aplicar transformaciones Leetspeak básicas (ej. 'a' se convierte en '4')
const applyLeet = (str) => {
    const map = { 'a': '4', 'e': '3', 'i': '1', 'o': '0', 's': '5', 't': '7' };
    return str.split('').map(c => map[c.toLowerCase()] || c).join('');
};

// Prepara la interfaz mostrando un mensaje de carga antes de ejecutar el algoritmo pesado
function iniciarGeneracion() {
    const langData = i18n[currentLang];
    const textareaResultado = document.getElementById('resultadoDiccionario');
    const btnGenerar = document.getElementById('btnGenerar');
    
    textareaResultado.value = langData["msg_ejecutando"];
    btnGenerar.disabled = true; // Deshabilita el botón para evitar múltiples clics
    document.getElementById('btnDescargar').style.display = 'none';
    document.getElementById('btnCopiar').style.display = 'none';

    // Pequeño retraso para permitir que el navegador dibuje el mensaje de carga en pantalla
    setTimeout(() => {
        generarDiccionario();
        btnGenerar.disabled = false; // Reactiva el botón al terminar
    }, 50);
}

// Función principal que genera todas las combinaciones posibles de contraseñas
function generarDiccionario() {
    const langData = i18n[currentLang];
    const textareaResultado = document.getElementById('resultadoDiccionario');
    
    // 1. Recolección y consolidación de todos los datos ingresados
    const nombres = obtenerValores('inputNombre');
    const familia = obtenerValores('inputFamilia');
    const lugares = obtenerValores('inputLugares');
    const fechas = obtenerValores('inputFecha');
    const numeros = obtenerValores('inputNumeros');
    const extras = obtenerValores('inputExtra');
    
    // Une todos los arrays y usa un Set para eliminar valores duplicados automáticamente
    const baseData = [...new Set([...nombres, ...familia, ...lugares, ...fechas, ...numeros, ...extras])];
    
    // Validación: Asegurarse de que el usuario introdujo al menos un dato
    if (baseData.length === 0) {
        textareaResultado.value = langData["msg_error_datos"];
        return;
    }

    // 2. Lectura de las opciones de personalización
    const useLeet = document.getElementById('chkLeet').checked;
    const useReverse = document.getElementById('chkInvertir').checked;
    const combine3 = document.getElementById('chkCombinar3').checked;
    const useSuffix = document.getElementById('chkSufijos').checked;
    const usePrefix = document.getElementById('chkPrefijos').checked;
    
    // Configuración de los separadores
    let separadoresInput = sanitizeInput(document.getElementById('inputSeparadores').value);
    const separadores = ["", ...new Set(separadoresInput.split(''))]; // Siempre incluye string vacío para unir sin separador

    // Configuración de los límites de longitud y cantidad
    const minLen = parseInt(document.getElementById('minLen').value) || 1;
    const maxLen = parseInt(document.getElementById('maxLen').value) || 100;
    
    let limiteInput = parseInt(document.getElementById('limiteCantidad').value);
    if (isNaN(limiteInput) || limiteInput <= 0) limiteInput = 100000;
    if (limiteInput > 1000000) limiteInput = 1000000; // Hard limit de seguridad para no crashear el navegador

    // Modificadores comunes usados como prefijos y sufijos
    const addOns = ["123", "1234", "12", "01", "69", "99", "2023", "2024", "!", "*", "_"];
    const combinacionesAddOns = useSuffix || usePrefix ? addOns : [];

    // 3. Generación de las variaciones individuales de cada palabra base (Mayúsculas, Minúsculas, Leetspeak)
    let variacionesSet = new Set();
    baseData.forEach(palabra => {
        let w = palabra.toLowerCase(); // Todo a minúscula
        let C = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase(); // Primera en mayúscula
        let U = palabra.toUpperCase(); // Todo a mayúscula
        
        variacionesSet.add(w);
        variacionesSet.add(C);
        variacionesSet.add(U);

        if (useLeet) {
            variacionesSet.add(applyLeet(w));
            variacionesSet.add(applyLeet(C));
        }

        if (useReverse) {
            let rev = w.split('').reverse().join(''); // Invertir string
            variacionesSet.add(rev);
            variacionesSet.add(rev.charAt(0).toUpperCase() + rev.slice(1));
        }
    });

    let variaciones = Array.from(variacionesSet);
    let diccionarioFinal = new Set(); // El Set Final evitará que hayan contraseñas repetidas en la lista

    // Función interna (Closure) que intenta añadir una palabra al resultado verificando límites de tamaño y cantidad
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
        
        // Retorna verdadero si aún hay espacio para seguir generando
        return diccionarioFinal.size < limiteInput;
    };

    // 4. Bucle principal de combinación de palabras amigo
    generacion: // Etiqueta para poder romper completamente todos los bucles anidados de golpe
    for (let w1 of variaciones) {
        if (!intentarAñadir(w1)) break generacion; // Palabra individual

        for (let w2 of variaciones) {
            // Evitar unir la misma palabra dos veces consigo misma (ej: Gabriel_Gabriel)
            if (w1.toLowerCase() === w2.toLowerCase()) continue;
            
            // Unir 2 palabras usando todos los separadores definidos amigo
            for (let sep of separadores) {
                let w12 = w1 + sep + w2;
                if (!intentarAñadir(w12)) break generacion;
            }

            // Si está activa la opción de unir 3 palabras, añade otro nivel de anidación amigo
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

    // 5. Finalización y muestra de resultados en la pantalla amigo
    contrasenasGeneradas = Array.from(diccionarioFinal);
    
    if (contrasenasGeneradas.length === 0) {
        // Mensaje si las reglas de longitud filtraron todos los resultados amigo
        textareaResultado.value = langData["msg_resultado_0"];
        document.getElementById('btnDescargar').style.display = 'none';
        document.getElementById('btnCopiar').style.display = 'none';
    } else {
        // Formateo del mensaje de éxito mostrando la cantidad amigo
        let msj = langData["msg_fin"] + contrasenasGeneradas.length + "\n";
        if (contrasenasGeneradas.length >= limiteInput) msj += langData["msg_warn"] + limiteInput + langData["msg_warn_2"];
        msj += `\n` + contrasenasGeneradas.join("\n");
        
        textareaResultado.value = msj;
        document.getElementById('btnDescargar').style.display = 'block';
        document.getElementById('btnCopiar').style.display = 'block';
    }
}

// Selecciona y copia todas las contraseñas generadas al portapapeles del sistema amigo
function copiarAlPortapapeles() {
    const langData = i18n[currentLang];
    const textarea = document.getElementById('resultadoDiccionario');
    if (contrasenasGeneradas.length === 0) return;
    
    textarea.select();
    textarea.setSelectionRange(0, 9999999); // Para móviles
    
    try {
        document.execCommand('copy');
        const btn = document.getElementById('btnCopiar');
        const textoOriginal = btn.innerText;
        btn.innerText = langData["msg_copiado"]; // Mensaje temporal de feedback amigo
        setTimeout(() => {
            btn.innerText = textoOriginal;
        }, 2000);
    } catch (err) {
        console.error("Error copy: ", err);
    }
}

// Genera un Blob de texto en memoria y fuerza la descarga del archivo .txt con el diccionario amigo
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

// Borra toda la información de los inputs del formulario y los arrays en memoria amigo
function limpiarCampos() {
    const langData = i18n[currentLang];
    document.getElementById('generatorForm').reset();
    document.getElementById('resultadoDiccionario').value = langData["placeholder_res"];
    document.getElementById('btnDescargar').style.display = 'none';
    document.getElementById('btnCopiar').style.display = 'none';
    contrasenasGeneradas = [];
}

// Crea y descarga un documento formateado con los datos base de la víctima (Perfil de OSINT) amigo
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

//Codigo creado por Gabrielplusx para un uso educativo y su uso se recomienda en un ambiente controlado y permitido.
//Desenvolvido por Gabrielplusx