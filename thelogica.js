// Objeto principal con los textos en distintos idiomas
const i18n = {
    "es": { // Textos en espanol
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
        "t_c_leet": "Modo Leetspeak (a=4, e=3)",
        "t_c_inv": "Invertir (Neo -> OEN)",
        "t_h3_3": "Patrones & Combinaciones",
        "t_l_sep": "Separadores personalizados:",
        "t_h_sep": "Caracteres para unir palabras. Déjalo en blanco para unir directo.",
        "t_c_comb": "Combinar hasta 3 palabras",
        "t_c_suf": "Añadir sufijos (palabra123)",
        "t_c_pref": "Añadir prefijos (123palabra)",
        "t_h3_4": "Límites de Ejecución",
        "t_l_min": "Long. Mínima:",
        "t_l_max": "Long. Máxima:",
        "t_l_lim": "Límite Máximo de Resultados (Maximo 1000000):",
        "btnGenerar": "[Generar]",
        "btnPerfil": "[Exportar el perfil]",
        "btnLimpiar": "[Limpiar]",
        "btnDescargar": "[Descargar en txt]",
        "btnCopiar": "[ copiar_memoria ]",
        "placeholder_res": "> Esperando ejecución",
        "msg_ejecutando": "> Ejecutando script calculando combinaciones",
        "msg_error_datos": "> ERROR: No se ingresaron datos objetivo en la sección 1.",
        "msg_resultado_0": "> RESULTADO: 0 combinaciones generadas.\n> SUGERENCIA: Ajusta --min-len o agrega más inputs.",
        "msg_fin": "> EJECUCIÓN FINALIZADA.\n> combinaciones generadas: ",
        "msg_warn": "> WARNING: Límite máximo de ",
        "msg_warn_2": " alcanzado.\n",
        "msg_copiado": "[ OK_COPIADO ]",
        "perfil_title": " PERFIL DEL OBJETIVO \n\n",
        "perfil_nombres": "Nombres: ",
        "perfil_familia": "Familia: ",
        "perfil_lugares": "Lugares: ",
        "perfil_fechas": "Fechas: ",
        "perfil_numeros": "Numeros: ",
        "perfil_extra": "Extra: ",
        "perfil_conf": " CONF \n",
        "perfil_sep": "Separadores: ",
        "t_author_label": "Desarrollado por:",
        "img_autor": "autor.jpg"
    },
    "pt": { // Idioma portugues de Brasil
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
        "t_c_leet": "Modo Leetspeak (a=4, e=3)",
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
        "t_l_lim": "Limite Máximo de Resultados (Max 1000000):",
        "btnGenerar": "[ ./gerar ]",
        "btnPerfil": "[ exportar_perfil ]",
        "btnLimpiar": "[ limpar ]",
        "btnDescargar": "[ baixar.txt ]",
        "btnCopiar": "[ copiar_memoria ]",
        "placeholder_res": "> Aguardando execução",
        "msg_ejecutando": "> Executando script calculando combinações",
        "msg_error_datos": "> ERRO: Nenhum dado do alvo inserido na seção 1.",
        "msg_resultado_0": "> RESULTADO: 0 combinações geradas.\n> SUGESTÃO: Ajuste --min-len ou adicione mais inputs.",
        "msg_fin": "> EXECUÇÃO FINALIZADA.\n> combinações geradas: ",
        "msg_warn": "> AVISO: Limite máximo de ",
        "msg_warn_2": " alcançado.\n",
        "msg_copiado": "[ OK_COPIADO ]",
        "perfil_title": " PERFIL DO ALVO \n\n",
        "perfil_nombres": "Nomes: ",
        "perfil_familia": "Familia: ",
        "perfil_lugares": "Lugares: ",
        "perfil_fechas": "Datas: ",
        "perfil_numeros": "Numeros: ",
        "perfil_extra": "Extra: ",
        "perfil_conf": " CONF \n",
        "perfil_sep": "Separadores: ",
        "t_author_label": "Desenvolvido por:",
        "img_autor": "brasilautor.png"
    },
    "pt-PT": { // Idioma portugues de Portugal
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
        "t_c_leet": "Modo Leetspeak (a=4, e=3)",
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
        "t_l_lim": "Limite Máximo de Resultados (Máx 1000000):",
        "btnGenerar": "[ Gerar ]",
        "btnPerfil": "[ Exportar perfil ]",
        "btnLimpiar": "[ Limpar ]",
        "btnDescargar": "[ descarregar.txt ]",
        "btnCopiar": "[ copiar_memória ]",
        "placeholder_res": "> A aguardar execução",
        "msg_ejecutando": "> A executar script a calcular combinações",
        "msg_error_datos": "> ERRO: Não foram inseridos dados do alvo na secção 1.",
        "msg_resultado_0": "> RESULTADO: 0 combinações geradas.\n> SUGESTÃO: Ajuste --min-len ou adicione mais inputs.",
        "msg_fin": "> EXECUÇÃO FINALIZADA.\n> combinações geradas: ",
        "msg_warn": "> AVISO: Limite máximo de ",
        "msg_warn_2": " atingido.\n",
        "msg_copiado": "[ OK_COPIADO ]",
        "perfil_title": " PERFIL DO ALVO \n\n",
        "perfil_nombres": "Nomes: ",
        "perfil_familia": "Família: ",
        "perfil_lugares": "Locais: ",
        "perfil_fechas": "Datas: ",
        "perfil_numeros": "Números: ",
        "perfil_extra": "Extra: ",
        "perfil_conf": " CONF \n",
        "perfil_sep": "Separadores: ",
        "t_author_label": "Desenvolvido por:",
        "img_autor": "portugalautor.png"
    },
    "en": { // Idioma ingles
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
        "t_c_leet": "Leetspeak Mode (a=4, e=3)",
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
        "t_l_lim": "Max Results Limit (Max 1000000):",
        "btnGenerar": "[ Generate ]",
        "btnPerfil": "[ Export Profile ]",
        "btnLimpiar": "[ Clear ]",
        "btnDescargar": "[ Download.txt ]",
        "btnCopiar": "[ copy_memory ]",
        "placeholder_res": "> Waiting for execution",
        "msg_ejecutando": "> Executing script calculating combinations",
        "msg_error_datos": "> ERROR: No target data entered in section 1.",
        "msg_resultado_0": "> RESULT: 0 generated combinations.\n> SUGGESTION: Adjust --min-len or add more inputs.",
        "msg_fin": "> EXECUTION FINISHED.\n> generated combinations: ",
        "msg_warn": "> WARNING: Maximum limit of ",
        "msg_warn_2": " reached.\n",
        "msg_copiado": "[ OK_COPIED ]",
        "perfil_title": " TARGET PROFILE \n\n",
        "perfil_nombres": "Names: ",
        "perfil_familia": "Family: ",
        "perfil_lugares": "Places: ",
        "perfil_fechas": "Dates: ",
        "perfil_numeros": "Numbers: ",
        "perfil_extra": "Extra: ",
        "perfil_conf": " CONF \n",
        "perfil_sep": "Separators: ",
        "t_author_label": "Developed by:",
        "img_autor": "autorusa.png"
    },
    "esperanto": { // Idioma esperanto
        "t_title": "[Vortargeneratoro (Gabrielplusx)]",
        "t_h3_1": "Celdatenoj",
        "t_l_nombre": "Nomoj / Familiaj nomoj:",
        "t_h_nombre": "Ekz Patricia, Gabriel, Diego (Disigu per komoj)",
        "t_l_familia": "Partnero / Infanoj / Familio:",
        "t_h_familia": "Nomoj de proksimuloj (Disigu per komoj)",
        "t_l_lugares": "Gravaj Lokoj / Urboj:",
        "t_h_lugares": "Naskigurbo, logloko (Disigu per komoj)",
        "t_l_fecha": "Gravaj Datoj (Jaroj, Tagoj, Plenaj datoj):",
        "t_h_fecha": "Ekz 1998, 2006, 12051990 (Disigu per komoj)",
        "t_l_numeros": "Fiksaj Nombroj (Telefonoj, ID, Platoj):",
        "t_h_numeros": "Dokumentoj, ID, autaj platoj (Disigu per komoj)",
        "t_l_extra": "Dorlotbestoj / Satokupoj / Firmaoj / Ekstra:",
        "t_h_extra": "Ekz Tom, Gitaro, admin (Disigu per komoj)",
        "t_h3_2": "Personigo",
        "t_c_leet": "Leetspeak Regimo (a=4, e=3)",
        "t_c_inv": "Inversigi (carlos -> solrac)",
        "t_h3_3": "Sablonoj kaj Kombinajoj",
        "t_l_sep": "Propraj apartigiloj:",
        "t_h_sep": "Signoj por kunigi vortojn Lasu malplena por rekta kunigo",
        "t_c_comb": "Kombini gis 3 vortojn",
        "t_c_suf": "Aldoni sufiksojn (vorto123)",
        "t_c_pref": "Aldoni prefiksojn (123vorto)",
        "t_h3_4": "Ekzekutlimoj",
        "t_l_min": "Min Longo:",
        "t_l_max": "Maks Longo:",
        "t_l_lim": "Maks Limo de Rezultoj (Maks 1000000):",
        "btnGenerar": "[ Generi ]",
        "btnPerfil": "[ Eksporti profilon ]",
        "btnLimpiar": "[ Purigi ]",
        "btnDescargar": "[ Elsuti txt ]",
        "btnCopiar": "[ kopii memoron ]",
        "placeholder_res": "> Atendante ekzekuton",
        "msg_ejecutando": "> Ekzekutante skripton kalkulante kombinajojn",
        "msg_error_datos": "> ERARO: Neniuj celdatenoj enigitaj en sekcio 1",
        "msg_resultado_0": "> REZULTO: 0 generitaj kombinajoj\n> SUGESTO: Algustigu min len au aldonu pli da enigoj",
        "msg_fin": "> EKZEKUTO FINITA\n> generitaj kombinajoj: ",
        "msg_warn": "> AVERTO: Maksimuma limo de ",
        "msg_warn_2": " atingita\n",
        "msg_copiado": "[ BONE KOPIITA ]",
        "perfil_title": " CELPROFILO \n\n",
        "perfil_nombres": "Nomoj: ",
        "perfil_familia": "Familio: ",
        "perfil_lugares": "Lokoj: ",
        "perfil_fechas": "Datoj: ",
        "perfil_numeros": "Nombroj: ",
        "perfil_extra": "Ekstra: ",
        "perfil_conf": " AGORDO \n",
        "perfil_sep": "Apartigiloj: ",
        "t_author_label": "Disvolvita de:",
        "img_autor": "esperanto.png"
    }
};

// Define el idioma por defecto al iniciar la pagina
let currentLang = "es";

// Arreglo con los idiomas que se pueden elegir en la interfaz
const idiomasDisponibles = ["es", "pt", "pt-PT", "en", "esperanto"];

// Textos que se muestran en el boton para cambiar el idioma
const etiquetasBoton = {
    "es": "[IDIOMA: ES]",
    "pt": "[IDIOMA: PT-BR]",
    "pt-PT": "[IDIOMA: PT-PT]",
    "en": "[LANGUAGE: EN]",
    "esperanto": "[LINGVO: Esperanto]"
};

// Funcion que alterna entre los idiomas disponibles al hacer clic
function toggleLang() {
    // Busca la posicion del idioma actual en la lista
    let index = idiomasDisponibles.indexOf(currentLang);
    // Calcula cual es el siguiente idioma a mostrar
    index = (index + 1) % idiomasDisponibles.length;
    // Asigna el nuevo idioma activo
    currentLang = idiomasDisponibles[index];
    
    // Cambia el texto del boton segun el idioma seleccionado
    document.getElementById('btnLang').innerText = etiquetasBoton[currentLang];
    
    // Obtiene los textos traducidos del nuevo idioma
    const langData = i18n[currentLang];
    
    // Recorre todos los textos para actualizar la pantalla completa
    for (let key in langData) {
        const el = document.getElementById(key);
        if (el) {
            // Si el elemento es una imagen cambia su ruta
            if (el.tagName === 'IMG') {
                el.src = langData[key];
            } else {
                // Si el elemento es texto cambia su contenido
                el.innerText = langData[key];
            }
        }
    }
    
    // Actualiza el texto de fondo en la caja de resultados
    const resArea = document.getElementById('resultadoDiccionario');
    resArea.placeholder = langData["placeholder_res"];
    
    // Lista de mensajes de espera para saber si se debe reemplazar el texto
    const mensajesEspera = [
        i18n["es"]["placeholder_res"], 
        i18n["pt"]["placeholder_res"], 
        i18n["pt-PT"]["placeholder_res"], 
        i18n["en"]["placeholder_res"], 
        i18n["eo"]["placeholder_res"],
        "> Esperando ejecución"
    ];

    // Si la caja esta vacia o tiene un mensaje de espera se actualiza
    if (mensajesEspera.includes(resArea.value) || resArea.value === "") {
        resArea.value = langData["placeholder_res"];
    }
}

// Funcion que limpia el texto ingresado para evitar inyeccion de codigo malicioso
const sanitizeInput = (str) => {
    return str.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
};

// Funcion que toma el texto de una caja y lo separa en una lista de palabras
const obtenerValores = (id) => {
    const valor = sanitizeInput(document.getElementById(id).value);
    return valor
        .split(',') // Corta el texto en cada coma que encuentre
        .map(item => item.trim()) // Borra los espacios vacios a los lados de cada palabra
        .filter(item => item !== ""); // Elimina las palabras que quedaron vacias
};

// Funcion que cambia letras por numeros emulando el formato leetspeak
const applyLeet = (str) => {
    const map = { 'a': '4', 'e': '3', 'i': '1', 'o': '0', 's': '5', 't': '7' };
    return str.split('').map(c => map[c.toLowerCase()] || c).join('');
};

// Funcion que prepara la pantalla justo antes de empezar a crear las palabras
function iniciarGeneracion() {
    const langData = i18n[currentLang];
    const textareaResultado = document.getElementById('resultadoDiccionario');
    const btnGenerar = document.getElementById('btnGenerar');
    
    // Muestra un mensaje indicando que el proceso esta trabajando
    textareaResultado.value = langData["msg_ejecutando"];
    // Bloquea el boton para que el usuario no lo presione dos veces seguidas
    btnGenerar.disabled = true; 
    // Oculta los botones de descargar y copiar temporalmente
    document.getElementById('btnDescargar').style.display = 'none';
    document.getElementById('btnCopiar').style.display = 'none';

    // Espera una fraccion de segundo y luego empieza a procesar todo
    setTimeout(() => {
        generarDiccionario();
        // Desbloquea el boton cuando el proceso termina
        btnGenerar.disabled = false; 
    }, 50);
}

// Funcion principal que mezcla todas las palabras y crea el diccionario completo
function generarDiccionario() {
    const langData = i18n[currentLang];
    const textareaResultado = document.getElementById('resultadoDiccionario');
    
    // Obtiene las listas de palabras de todas las cajas de texto de la interfaz
    const nombres = obtenerValores('inputNombre');
    const familia = obtenerValores('inputFamilia');
    const lugares = obtenerValores('inputLugares');
    const fechas = obtenerValores('inputFecha');
    const numeros = obtenerValores('inputNumeros');
    const extras = obtenerValores('inputExtra');
    
    // Junta todas las palabras en un solo grupo y elimina las que estan repetidas
    const baseData = [...new Set([...nombres, ...familia, ...lugares, ...fechas, ...numeros, ...extras])];
    
    // Si el grupo esta vacio muestra un error y detiene el programa
    if (baseData.length === 0) {
        textareaResultado.value = langData["msg_error_datos"];
        return;
    }

    // Revisa cuales casillas de opciones extra marco el usuario
    const useLeet = document.getElementById('chkLeet').checked;
    const useReverse = document.getElementById('chkInvertir').checked;
    const combine3 = document.getElementById('chkCombinar3').checked;
    const useSuffix = document.getElementById('chkSufijos').checked;
    const usePrefix = document.getElementById('chkPrefijos').checked;
    
    // Obtiene los simbolos elegidos para unir palabras y agrega un espacio vacio por defecto
    let separadoresInput = sanitizeInput(document.getElementById('inputSeparadores').value);
    const separadores = ["", ...new Set(separadoresInput.split(''))]; 

    // Lee la cantidad de letras minima y maxima permitida para cada palabra
    const minLen = parseInt(document.getElementById('minLen').value) || 1;
    const maxLen = parseInt(document.getElementById('maxLen').value) || 100;
    
    // Lee el numero limite maximo de palabras a crear en total
    let limiteInput = parseInt(document.getElementById('limiteCantidad').value);
    if (isNaN(limiteInput) || limiteInput <= 0) limiteInput = 100000;
    if (limiteInput > 1000000) limiteInput = 1000000; 

    // Lista fija de textos comunes para colocar al principio o final de las palabras
    const addOns = ["123", "1234", "12", "01", "69", "99", "2023", "2024", "!", "*", "_"];
    const combinacionesAddOns = useSuffix || usePrefix ? addOns : [];

    // Coleccion especial para guardar diferentes formas de cada palabra original
    let variacionesSet = new Set();
    baseData.forEach(palabra => {
        let w = palabra.toLowerCase(); // Version toda en letras minusculas
        let C = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase(); // Version con primera letra mayuscula
        let U = palabra.toUpperCase(); // Version toda en letras mayusculas
        
        // Guarda las tres versiones basicas en la coleccion
        variacionesSet.add(w);
        variacionesSet.add(C);
        variacionesSet.add(U);

        // Si la opcion esta activa guarda las versiones con numeros estilo leetspeak
        if (useLeet) {
            variacionesSet.add(applyLeet(w));
            variacionesSet.add(applyLeet(C));
        }

        // Si la opcion esta activa guarda las palabras leidas al reves
        if (useReverse) {
            let rev = w.split('').reverse().join(''); 
            variacionesSet.add(rev);
            variacionesSet.add(rev.charAt(0).toUpperCase() + rev.slice(1));
        }
    });

    // Convierte la coleccion en una lista normal para poder usarla
    let variaciones = Array.from(variacionesSet);
    // Coleccion final para guardar todas las contrasenas armadas
    let diccionarioFinal = new Set(); 

    // Funcion interna que intenta guardar una palabra nueva validando las reglas
    const intentarAñadir = (baseWord) => {
        // Si el diccionario alcanzo el limite maximo avisa para detener el proceso
        if (diccionarioFinal.size >= limiteInput) return false;

        // Si la longitud de la palabra es correcta la guarda en el diccionario
        if (baseWord.length >= minLen && baseWord.length <= maxLen) {
            diccionarioFinal.add(baseWord);
        }

        // Si esta activo agrega la palabra unida con terminaciones extra
        if (useSuffix) {
            for (let ad of combinacionesAddOns) {
                if (diccionarioFinal.size >= limiteInput) return false;
                let s = baseWord + ad;
                if (s.length >= minLen && s.length <= maxLen) diccionarioFinal.add(s);
            }
        }
        
        // Si esta activo agrega la palabra unida con inicios extra
        if (usePrefix) {
            for (let ad of combinacionesAddOns) {
                if (diccionarioFinal.size >= limiteInput) return false;
                let p = ad + baseWord;
                if (p.length >= minLen && p.length <= maxLen) diccionarioFinal.add(p);
            }
        }
        
        // Confirma que aun hay espacio libre en el diccionario
        return diccionarioFinal.size < limiteInput;
    };

    // Bucle principal que une palabras usando etiquetas para poder detenerlo rapido
    generacion: 
    for (let w1 of variaciones) {
        // Intenta guardar la primera palabra sola
        if (!intentarAñadir(w1)) break generacion; 

        // Inicia el bucle de la segunda palabra para hacer combinaciones
        for (let w2 of variaciones) {
            // Salta este paso si las dos palabras son exactamente iguales
            if (w1.toLowerCase() === w2.toLowerCase()) continue;
            
            // Une las dos palabras probando todos los separadores elegidos
            for (let sep of separadores) {
                let w12 = w1 + sep + w2;
                if (!intentarAñadir(w12)) break generacion;
            }

            // Si la opcion esta activa agrega una tercera palabra a la cadena
            if (combine3) {
                for (let w3 of variaciones) {
                    // Evita que alguna de las palabras se repita en la cadena final
                    if (w1.toLowerCase() === w3.toLowerCase() || w2.toLowerCase() === w3.toLowerCase()) continue;
                    
                    // Une las tres palabras usando los separadores
                    for (let sep of separadores) {
                        let w123 = w1 + sep + w2 + sep + w3;
                        if (!intentarAñadir(w123)) break generacion;
                    }
                }
            }
        }
    }

    // Pasa los resultados de la coleccion a una lista normal final
    contrasenasGeneradas = Array.from(diccionarioFinal);
    
    // Si la lista quedo vacia muestra un mensaje de ayuda y oculta botones
    if (contrasenasGeneradas.length === 0) {
        textareaResultado.value = langData["msg_resultado_0"];
        document.getElementById('btnDescargar').style.display = 'none';
        document.getElementById('btnCopiar').style.display = 'none';
    } else {
        // Arma el mensaje de texto mostrando cuantas palabras se crearon
        let msj = langData["msg_fin"] + contrasenasGeneradas.length + "\n";
        // Si se llego al limite maximo agrega una advertencia al mensaje
        if (contrasenasGeneradas.length >= limiteInput) msj += langData["msg_warn"] + limiteInput + langData["msg_warn_2"];
        // Agrega todas las contrasenas generadas al final del mensaje
        msj += `\n` + contrasenasGeneradas.join("\n");
        
        // Muestra el texto completo en la caja de resultados
        textareaResultado.value = msj;
        // Hace visibles los botones para guardar la informacion
        document.getElementById('btnDescargar').style.display = 'block';
        document.getElementById('btnCopiar').style.display = 'block';
    }
}

// Funcion que toma el resultado final y lo guarda en la memoria del dispositivo
function copiarAlPortapapeles() {
    const langData = i18n[currentLang];
    const textarea = document.getElementById('resultadoDiccionario');
    // Si la lista esta vacia detiene el proceso de copiado
    if (contrasenasGeneradas.length === 0) return;
    
    // Sombrea todo el texto dentro de la caja de resultados
    textarea.select();
    textarea.setSelectionRange(0, 9999999); 
    
    try {
        // Ejecuta la orden del navegador para copiar el texto sombreado
        document.execCommand('copy');
        const btn = document.getElementById('btnCopiar');
        const textoOriginal = btn.innerText;
        // Cambia la palabra del boton para indicar que funciono
        btn.innerText = langData["msg_copiado"]; 
        // Regresa el texto del boton a la normalidad despues de dos segundos
        setTimeout(() => {
            btn.innerText = textoOriginal;
        }, 2000);
    } catch (err) {
        // Si ocurre un error lo muestra en la consola del navegador
        console.error("Error copy: ", err);
    }
}

// Funcion que crea un documento de texto con las palabras y lo baja al equipo
function descargarTXT() {
    // Si la lista esta vacia detiene el proceso
    if (contrasenasGeneradas.length === 0) return;
    // Une todas las contrasenas separandolas con un salto de linea
    const contenido = contrasenasGeneradas.join("\n");
    // Empaqueta el texto en un objeto con formato de archivo simple
    const blob = new Blob([contenido], { type: "text/plain" });
    // Crea una direccion web temporal apuntando al archivo empaquetado
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    // Le asigna un nombre fijo al archivo descargable
    a.download = "wordlist_output.txt";
    document.body.appendChild(a);
    // Simula que el usuario hizo clic en el enlace para iniciar la descarga
    a.click();
    document.body.removeChild(a);
    // Elimina la direccion temporal para liberar memoria
    URL.revokeObjectURL(url);
}

// Funcion que borra todos los datos escritos en las cajas y reinicia el programa
function limpiarCampos() {
    const langData = i18n[currentLang];
    // Borra todo lo escrito dentro del formulario completo
    document.getElementById('generatorForm').reset();
    // Coloca de nuevo el mensaje de espera en la caja principal
    document.getElementById('resultadoDiccionario').value = langData["placeholder_res"];
    // Oculta los botones de guardar nuevamente
    document.getElementById('btnDescargar').style.display = 'none';
    document.getElementById('btnCopiar').style.display = 'none';
    // Vacia la lista de contrasenas generadas
    contrasenasGeneradas = [];
}

// Funcion que guarda la informacion ingresada por el usuario en un documento
function descargarPerfil() {
    const langData = i18n[currentLang];
    // Junta los nombres de los campos con sus respectivos datos escritos
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

    // Empaqueta todo el texto creado en un archivo descargable
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

// Codigo que controla que el usuario no escriba un numero mayor al permitido
const inputLimite = document.getElementById('limiteCantidad');
if (inputLimite) {
    inputLimite.addEventListener('input', function() {
        if (this.value > 1000000) {
            this.value = 1000000;
        }
    });
}

// Prepara la ventana de la aplicacion para que pueda moverse por la pantalla
const cajaPrincipal = document.querySelector('.container');
let arrastrando = false, inicioX, inicioY, inicioIzquierda, inicioArriba;

cajaPrincipal.style.position = 'absolute';
cajaPrincipal.style.cursor = 'move';

// Detecta cuando el usuario hace clic sobre la ventana para empezar a moverla
cajaPrincipal.addEventListener('mousedown', (e) => {
    // Evita mover la ventana si se hace clic sobre un boton o zona de texto
    if (['INPUT', 'TEXTAREA', 'BUTTON', 'A', 'LABEL'].includes(e.target.tagName)) return;
    arrastrando = true;
    inicioX = e.clientX;
    inicioY = e.clientY;
    const rect = cajaPrincipal.getBoundingClientRect();
    inicioIzquierda = rect.left;
    inicioArriba = rect.top;
    cajaPrincipal.style.margin = '0';
});

// Actualiza la posicion de la ventana mientras el raton se mueve
document.addEventListener('mousemove', (e) => {
    if (!arrastrando) return;
    cajaPrincipal.style.left = `${inicioIzquierda + (e.clientX - inicioX)}px`;
    cajaPrincipal.style.top = `${inicioArriba + (e.clientY - inicioY)}px`;
});

// Detiene el movimiento de la ventana cuando se suelta el boton del raton
document.addEventListener('mouseup', () => {
    arrastrando = false;
});

// Cambia la tonalidad verde de la pagina girando la rueda del raton junto a la tecla control
let tonoColor = 120; 
document.addEventListener('wheel', (e) => {
    if (e.ctrlKey) {
        e.preventDefault();
        tonoColor = (tonoColor + (e.deltaY > 0 ? 15 : -15)) % 360;
        document.documentElement.style.setProperty('--term-green', `hsl(${tonoColor}, 100%, 50%)`);
        document.documentElement.style.setProperty('--term-dark-green', `hsl(${tonoColor}, 100%, 20%)`);
        document.documentElement.style.setProperty('--term-dim-green', `hsl(${tonoColor}, 100%, 35%)`);
    }
}, { passive: false });

// Habilita un modo que permite escribir sobre cualquier texto de la pagina al hacer doble clic
document.addEventListener('dblclick', (e) => {
    if (!['INPUT', 'TEXTAREA', 'BUTTON'].includes(e.target.tagName)) {
        const modoEdicion = document.designMode === 'on';
        document.designMode = modoEdicion ? 'off' : 'on';
        document.body.style.cursor = modoEdicion ? 'default' : 'text';
    }
});

//Codigo creado por Gabrielplusx para un uso educativo y su uso se recomienda en un ambiente controlado y permitido.
//Code created by Gabriel Plusx for educational use and its use is recommended in a controlled and permitted environment.
//Código criado por Gabrielplusx para fins educacionais, sendo recomendado seu uso em um ambiente controlado e autorizado.
