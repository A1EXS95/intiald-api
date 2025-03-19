const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const app = express();
app.use(cors());


const swaggerOptions = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Initial D API 🚗💨",
        version: "1.0.0",
        description: `<img src="https://upload.wikimedia.org/wikipedia/en/7/79/Initial_D_Logo.png" width="300" />
                      <p>API con información sobre los coches de Initial D. Incluye modelos, pilotos, motores y más.</p>
                      <p>/coches:
                         get:
                         summary: Obtiene la lista de coches de Initial D
                         description: Devuelve una lista con los coches más icónicos de Initial D.
                         responses:
                             200:
                             description: Lista de coches
                             content:
                                 application/json:
                                 example:
                                     id: 12,
                                     marca: "Toyota",
                                     modelo: "Spriter Trueno GT_APEX (AE86)",
                                     piloto: "Takumi Fujiwara",
                                     traccion: "RWD",
                                     imagen: "https://static.wikia.nocookie.net/initiald/images/f/f2/AE86T_Spec_III_Manga.png"</p>
                                     
                       <p>/cars/{id}:
                            get:
                                summary: Obtiene un coche por su ID
                                description: Busca un coche específico por su ID.
                                parameters:
                                - in: path
                                    name: id
                                    required: true
                                    schema:
                                    type: integer
                                    description: ID del coche a buscar
                                responses:
                                200:
                                    description: Datos del coche encontrado
                                    content:
                                    application/json:
                                        example:
                                        id: 12,
                                        marca: "Toyota",
                                        modelo: "Spriter Trueno GT_APEX (AE86)",
                                        piloto: "Takumi Fujiwara",
                                        traccion: "RWD",
                                        imagen: "https://static.wikia.nocookie.net/initiald/images/f/f2/AE86T_Spec_III_Manga.png"
                                404:
                                    description: Coche no encontrado</p>`,
      },
    },
    apis: ["server.js"]
  };
  
  const swaggerDocs = swaggerJsDoc(swaggerOptions);
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs, {
    customCss: `
      .swagger-ui .topbar-wrapper img {
        content: url('https://upload.wikimedia.org/wikipedia/en/7/79/Initial_D_Logo.png');
        width: 200px;
        height: auto;
      }
    `
  }));
  

const coches = [
    {
        id: 1,
        marca: "Nissan",
        modelo: "Skyline GT-R R32",
        piloto: "Eikichi Shimamura",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/a/a3/R32_Crystal_White_AS0.png/revision/latest?cb=20200701165923",
        equipo:["Hakone Thunder Soldiers"],
        descripcion:"El R32 fue una fuerza dominante en los circuitos de toda Asia, lo que le valió el sobrenombre de Godzilla. Este R32 cuenta con un motor biturbo RB26DETT, parachoques NISMO N1 y muchas otras modificaciones. Se desconoce la potencia real del coche, pero un modelo de serie puede alcanzar los 280CV"      
    },
    {
        id: 2,
        marca: "Toyota",
        modelo: "Corolla Levin SR (AE85)",
        piloto: "Itsuki Takeuchi",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/b/b4/AE85_Levin_White_AS0.png/revision/latest?cb=20200606225529",
        equipo:["Akina SpeedStars"],
        descripcion:"El Toyota Corolla Levin SR es una versión deportiva del legendario Corolla, conocida por su diseño ligero y su gran respuesta en carreteras sinuosas. Equipado con un motor 1.6L 2T-G de doble carburador, este clásico japonés ofrecía una potencia aproximada de 115 CV, lo que, combinado con su tracción trasera, lo convertía en una opción popular para los entusiastas del manejo deportivo. Su carrocería coupé y su peso reducido le otorgaban una gran agilidad, convirtiéndolo en un pionero en el mundo del drifting y las carreras callejeras."
    },
    {
        id: 3,
        marca: "Mazda",
        modelo: "RX-7 Type R FD3S",
        piloto: "Keisuke Takahashi",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/3/37/FD3S_Competition_Yellow_Mica_AS0.png/revision/latest?cb=20200613023933",
        equipo:["Akagi RedSuns", "Project D"],
        descripcion:"Originalmente, el RX7 FD venía con un motor rotativo de doble rotor 13B-REW con doble turbo secuencial. Sin embargo, con cada nueva etapa, obtiene cada vez más mejoras de rendimiento. En la etapa final, tiene un paquete completo de rendimiento RE Ameiya, admisión Apexi, turbo, un capó de fibra de carbono y 340CV."
    },
    {
        id: 4,
        marca: "Nissan",
        modelo: "180SX Type II",
        piloto: "Kenji",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/d/db/180SX_Warm_White_AS0.png/revision/latest?cb=20200627001257",
        equipo:["Akina SpeedStars"],
        descripcion:"El Nissan 180SX Type II es un ícono del drifting y las carreras callejeras, famoso por su equilibrio entre potencia y agilidad. Equipa un motor SR20DET turboalimentado de 2.0 litros, capaz de generar 205 CV en su versión original, con un gran potencial para modificaciones. Su diseño fastback y su tracción trasera lo convierten en una opción ideal para derrapes controlados y conducción agresiva en carreteras de montaña."
    },
    {
        id: 5,
        marca: "Nissan",
        modelo: "Silvia s14",
        piloto: "Kenta Nakamura",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/0/0a/S14_Orange_AS8.png/revision/latest?cb=20200623234534",
        equipo:["Akagi RedSuns", "Project D"],
        descripcion:"El Nissan Silvia S14 es un coupé deportivo con un diseño más ancho y aerodinámico que su predecesor, lo que mejora su estabilidad a altas velocidades. Bajo el capó, monta un motor SR20DET turboalimentado de 2.0 litros, capaz de generar 220 CV en su versión K’s, con un gran potencial para modificaciones que lo convierten en una bestia del drifting. Su tracción trasera y chasis equilibrado lo hacen ideal para el control en curvas cerradas."
    },
    {
        id: 6,
        marca: "Nissan",
        modelo: "Silvia s13",
        piloto: "Koichiro Iketani",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/0/0a/S13_Lime_Green_Two_Tone_AS0.png/revision/latest?cb=20200621212356",
        equipo:["Akina SpeedStars"],
        descripcion:"El Nissan Silvia S13 es uno de los modelos más icónicos de la serie Silvia, famoso por su diseño compacto y su increíble manejo. Equipado con un motor CA18DET turboalimentado de 1.8 litros o un SR20DET en versiones posteriores, su potencia ronda los 170-200 CV, lo que le permite ofrecer una excelente relación peso-potencia. Su tracción trasera y su chasis bien equilibrado lo convierten en una de las bases favoritas para el drifting y las modificaciones de rendimiento."
    },
    {
        id: 7,
        marca: "Nissan",
        modelo: "SilEighty",
        piloto: "Mako Sato",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/0/0b/Sil80_Impact_Blue_AS0.png/revision/latest?cb=20200628012945",
        equipo:["Impact Blue"],
        descripcion:"El Nissan Sileighty es un ejemplo asombroso de ingeniería japonesa. El coche es básicamente una combinación de Nissan Silvia y SX180. La parte delantera del coche presenta un Nissan Silvia S13, y la sección trasera permanece del Nissan SX180. Esto hace que el Sileighty (también escrito como Sil80) sea un automóvil con realmente único. La razón por la que la mayoría de los tuners optan por Sileighty es por los daños sufridos en la parte delantera de un Nissan 180SX. A medida que el automóvil tiene luces emergentes, reemplazar la parte delantera de un SX180 puede ser un asunto costoso. La parte delantera del Silvia S13 es más barata y se adapta directamente, que es lo que llevó al Sil80. Sileighty obtiene un motor turbo SR20DET."
    },
    {
        id: 8,
        marca: "Mazda",
        modelo: "Savanna RX-7 FC3S",
        piloto: "Ryosuke Takahashi",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/7/73/FC3S_Crystal_White_AS0.png/revision/latest?cb=20200617005136",
        equipo:["Akagi Redsuns", "Project D"],
        descripcion:"El RX7 FC3S blanco viene con un motor rotativo de doble rotor 13B-T. "
    },
    {
        id: 9,
        marca: "Honda",
        modelo: "Civic SIR-II (EG6)",
        piloto: "Shingo Shoji",
        traccion: "FWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/c/c4/EG6_Milano_Red_AS0.png/revision/latest?cb=20200707222948",
        equipo:["NightKids"],
        descripcion:"El Honda Civic SiR-II (EG6) es una versión deportiva del famoso Civic de los años 90, conocido por su ligereza, agilidad y fiabilidad. Equipado con un motor B16A de 1.6 litros y 160 CV, este compacto de tracción delantera ofrece una aceleración impresionante y un manejo preciso en curvas, lo que lo convierte en una opción muy popular para los entusiastas del tuning y las carreras"
    },
    {
        id: 10,
        marca: "Nissan",
        modelo: "Silvia s13",
        piloto: "Takeshi Nakazato",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/f/f7/S13_Super_Black_AS8.png/revision/latest?cb=20200621212358",
        equipo:["NightKids"],
        descripcion:"El Nissan Silvia S13 es uno de los modelos más icónicos de la serie Silvia, famoso por su diseño compacto y su increíble manejo. Equipado con un motor CA18DET turboalimentado de 1.8 litros o un SR20DET en versiones posteriores, su potencia ronda los 170-200 CV, lo que le permite ofrecer una excelente relación peso-potencia. Su tracción trasera y su chasis bien equilibrado lo convierten en una de las bases favoritas para el drifting y las modificaciones de rendimiento."
    },
    {
        id: 11,
        marca: "Nissan",
        modelo: "Skyline GT-R R32",
        piloto: "Takeshi Nakazato",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/c/c9/R32_Black_Pearl_Metallic_AS0.png/revision/latest?cb=20200701165922",        
        equipo:["NightKids"],
        descripcion:"El R32 fue una fuerza dominante en los circuitos de toda Asia, lo que le valió el sobrenombre de Godzilla. Este R32 cuenta con un motor biturbo RB26DETT, parachoques NISMO N1 y muchas otras modificaciones. Se desconoce la potencia real del coche, pero un modelo de serie puede alcanzar los 280CV"
    },
    {
        id: 12,
        marca: "Toyota",
        modelo: "Spriter Trueno GT_APEX (AE86)",
        piloto: "Takumi Fujiwara",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/5/54/High-Tech_Two_Tone_Trueno_3Door_AS0.png/revision/latest?cb=20200521002157",        
        equipo:["Akina SpeedStars", "Project D"],
        descripcion:"El Toyota Sprinter Trueno GT-APEX o Hachi-Roku es uno de los vehículos más emblemáticos de la saga Initial D, conocido por su increíble rendimiento en las curvas y su potencial para el drifting. Equipado con el motor 4A-GE de 1.6 litros, de 160 CV, es famoso por su revs altos y su excelente respuesta en altas revoluciones. Este modelo cuenta con tracción trasera, lo que lo convierte en un excelente aliado para las carreras de montaña y drifting"
    },
    {
        id: 13,
        marca: "Mitsubishi",
        modelo: "Lancer Evolution III GSR",
        piloto: "Kyoichi Sudo",
        traccion: "4WD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/a/ad/EVO3_Pyrenees_Black_AS0.png/revision/latest?cb=20200716213226",        
        equipo:["Team Emperor"],
        descripcion:"El Mitsubishi Lancer Evolution es una serie de los autos más emblemáticos que jamás hayan salido del mercado interno japonés (JDM). El Lan Evo III tiene un motor turbo 4G63T, una CPU anti-lag estilo rally, a la que el anime se refiere como 'Sistema de fallas de encendido', y un controlador de impulso."
    },
    {
        id: 14,
        marca: "Mitsubishi",
        modelo: "Lancer Evolution IV RS",
        piloto: "Seiji Iwaki",
        traccion: "4WD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/5/58/EVO4_Scotia_White_AS0.png/revision/latest?cb=20200725153718",        
        equipo:["Team Emperor"],
        descripcion:"El Mitsubishi Lancer Evolution IV RS es una de las versiones más puras y potentes de la serie Evo, conocida por su increíble tracción integral y su capacidad de desempeño en terrenos difíciles y carreteras mojadas. Equipado con el motor 4G63T de 2.0 litros turboalimentado, produce cerca de 300CV, lo que lo convierte en una verdadera máquina de rally y carreras."
    },
    {
        id: 15,
        marca: "Toyota",
        modelo: "Corolla Levin GT-APEX (AE86)",
        piloto: "Wataru Akiyama",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/3/33/High-Tech_Two_Tone_AE86_Levin_AS0.png/revision/latest?cb=20200602020305",        
        equipo:["Alianza del Norte de Saitama"],
        descripcion:"El levin estaba originalmente equipado con un motor 4A-GEU, con un turbocompresor atornillado, este generaba unos 280CV. Una vez averiado el motor de este Levin se reemplazó po un 4A-GZE, una version sobrealimentada del motor anterior."
    },
    {
        id: 16,
        marca: "Toyota",
        modelo: "MR2 G-Limited (SW20)",
        piloto: "Ken Kogashiwa",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/5/5e/MR2_Strong_Blue_Metallic_AS0.png/revision/latest?cb=20200703003003",        
        equipo:[""],
        descripcion:"El Toyota MR2 G-Limited (SW20) es un deportivo compacto con un diseño de motor central que ofrece una experiencia de conducción única y equilibrada. Equipado con un motor 3S-GE de 2.0 litros que genera alrededor de 165 CV, este modelo es conocido por su excelente manejo y agilidad, especialmente en carreteras de montaña y curvas cerradas. Su tracción trasera y su distribución de peso, gracias al motor central, le brindan una estabilidad sobresaliente y una capacidad de respuesta impresionante. La versión G-Limited ofrece detalles como llantas más ligeras y una suspensión más deportiva, que lo hacen aún más apto para el desempeño en carreras y maniobras de drifting."
    },
    {
        id: 17,
        marca: "Toyota",
        modelo: "Celica GT-Four",
        piloto: "Miki",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/0/00/Celica_Silver_Metallic_AS0.png/revision/latest?cb=20200710011602",        
        equipo:[""],
        descripcion:"El Toyota Celica GT-Four es un modelo legendario que representa lo mejor de la ingeniería deportiva japonesa, especialmente en el mundo del rally. Equipado con un motor 3S-GTE de 2.0 litros turboalimentado, produce aproximadamente 200-250 CV dependiendo de la versión, lo que le otorga una gran potencia para enfrentarse a terrenos difíciles y tramos de alta velocidad. La suspensión de rally lo convierte en un coche extremadamente estable y ágil, incluso en condiciones de conducción extremas. El Celica GT-Four es famoso por su éxito en el Campeonato Mundial de Rally (WRC) durante los años 90, lo que lo convierte en un coche muy respetado en la cultura automovilística."
    },
    {
        id: 18,
        marca: "Mitsubishi",
        modelo: "Lancer Evolution V GSR",
        piloto: "Aikawa",
        traccion: "4WD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/0/03/EVO5_Scotia_White_AS0.png/revision/latest?cb=20200727133323",        
        equipo:["Tsuchisaka Lancer Evolution Team"],
        descripcion:"El Mitsubishi Lancer Evolution V GSR es uno de los modelos más aclamados de la serie Evo, conocido por su impresionante rendimiento en competiciones de rally y su capacidad de dominación en carreteras difíciles. Equipado con un motor 4G63T de 2.0 litros turboalimentado, genera 280 CV en su versión estándar, lo que lo convierte en una máquina de alto rendimiento con una aceleración rápida y una gran capacidad para mantener la estabilidad en curvas cerradas."
    },
    {
        id: 19,
        marca: "Nissan",
        modelo: "Skyline 25GT Turbo (R34)",
        piloto: "Atsuro Kawai",
        traccion: "AWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/7/7e/ER34_Dark_Blue_Pearl_AS0.png/revision/latest?cb=20200703232624",        
        equipo:["Seven Star Leaf"],
        descripcion:"El Nissan Skyline 25GT Turbo es una versión de alto rendimiento de la serie Skyline, famosa por su potencia, diseño robusto y su capacidad para competir en diversos entornos de carreras. Equipado con un motor RB20DET de 2.0 litros turboalimentado, produce alrededor de 190 CV, lo que lo convierte en una opción excelente para los entusiastas de los coches deportivos que buscan un equilibrio entre potencia y control. Aunque no es tan legendario como el R32 o el R34, el 25GT Turbo es muy respetado en el mundo del tuning y las competiciones, especialmente por su capacidad de modificación y potencial de mejora."
    },
    {
        id: 20,
        marca: "Subaru",
        modelo: "Impreza WRX STI Coupe Type R Version V",
        piloto: "Bunta Fujiwara",
        traccion: "4WD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/e/e9/GC8_Sonic_Blue_Mica_AS0.png/revision/latest?cb=20200704004133",        
        equipo:[""],
        descripcion:"El Subaru Impreza WRX STI Coupe Type R Version V es una versión especial y altamente apreciada de la línea Impreza, conocida por su rendimiento en rally. Equipado con un motor EJ20 de 2.0 litros turboalimentado, genera alrededor de 280 CV, lo que le otorga una gran potencia para enfrentarse a competidores en todo tipo de terrenos. Su tracción en las cuatro ruedas, combinada con una suspensión deportiva y un chasis robusto, le otorgan una gran estabilidad en curvas y una capacidad de aceleración impresionante en cualquier condición."
    },
    {
        id: 21,
        marca: "Honda",
        modelo: "Civic Type R (EK9)",
        piloto: "Daiki Ninomiya",
        traccion: "FWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/6/6a/EK9_Sunlight_Yellow_AS0.png/revision/latest?cb=20200708205702",        
        equipo:["Todo School"],
        descripcion:"El Honda Civic Type R EK9 es un verdadero ícono de los hatchbacks deportivos, famoso por su ligereza, precisión en el manejo y alto rendimiento en altas revoluciones. Bajo el capó, cuenta con un motor B16B de 1.6 litros VTEC, capaz de generar 185 CV, lo que, combinado con su peso reducido de aproximadamente 1,070 kg, le otorga una excelente relación peso-potencia y una respuesta ágil en curvas. Su tracción delantera y su suspensión deportiva ajustada lo convierten en un vehículo ideal tanto para circuitos como para carreteras de montaña."
    },
    {
        id: 22,
        marca: "Mitsubishi",
        modelo: "Lancer Evolution VI GSR",
        piloto: "Ichijo",
        traccion: "4WD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/b/b3/EVO6_Scotia_White_AS0.png/revision/latest?cb=20200729155949",        
        equipo:["Tsuchisaka Lancer Evolution Team"],
        descripcion:"El Mitsubishi Lancer Evolution VI GSR es una de las versiones más refinadas y potentes de la legendaria saga Evo, diseñado para ofrecer un rendimiento excepcional tanto en rally como en carreteras de montaña. Bajo el capó, equipa el icónico motor 4G63T de 2.0 litros turboalimentado, capaz de generar 280 CV, acompañado de un avanzado diferencial activo que optimiza la distribución de la potencia para un control superior en curvas cerradas y superficies resbaladizas. El Evo VI se distingue por su aerodinámica mejorada, con un parachoques rediseñado, mejores conductos de refrigeración y un alerón ajustable que maximiza la estabilidad a alta velocidad."
    },
    {
        id: 23,
        marca: "Nissan",
        modelo: "Skyline GT-R V-Spec II (R34 NÜR)",
        piloto: "Kozo Hoshino",
        traccion: "AWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/8/82/BNR34_Millennium_Jade_AS0.png/revision/latest?cb=20200702022846",        
        equipo:["Purple Shadow"],
        descripcion:"El Nissan Skyline GT-R V-Spec II Nür (R34) es una de las versiones más exclusivas y avanzadas del legendario R34, diseñado para ofrecer un rendimiento extremo tanto en circuitos como en carreteras de montaña. Bajo el capó, equipa el icónico motor RB26DETT de 2.6 litros biturbo, optimizado en esta versión para mayor durabilidad y rendimiento, con una potencia oficial de 280 CV, aunque en realidad muchos superaban esa cifra. La versión V-Spec II Nür toma su nombre del famoso circuito de Nürburgring, donde fue desarrollado y probado. Se distingue por su suspensión mejorada, frenos reforzados y un sistema de aerodinámica avanzada que mejora la estabilidad a altas velocidades. Su sistema de tracción integral ATTESA E-TS Pro y el diferencial activo lo convierten en una máquina de precisión en curvas y aceleraciones brutales. Este modelo es considerado el pináculo de la era GT-R antes de la llegada del R35."
    },
    {
        id: 24,
        marca: "Mazda",
        modelo: "RX-7 Type R FD3S",
        piloto: "Kyoko Iwase",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/a/a9/FD3S_Brilliant_Black_AS0.png/revision/latest?cb=20200613023932",        
        equipo:["Alianza del Norte de Saitama"],
        descripcion:"Originalmente, el RX7 FD venía con un motor rotativo de doble rotor 13B-REW con doble turbo secuencial. Sin embargo, con cada nueva etapa, obtiene cada vez más mejoras de rendimiento. En la etapa final, tiene un paquete completo de rendimiento RE Ameiya, admisión Apexi, turbo, un capó de fibra de carbono y 340CV."
    },
    {
        id: 25,
        marca: "Toyota",
        modelo: "Altezza RS200 Z Edition",
        piloto: "Nobuhiko Akiyama",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/0/0c/Altezza_Silver_Metallic_AS0.png/revision/latest?cb=20200702131434",        
        equipo:["Alianza del Norte de Saitama"],
        descripcion:"El Toyota Altezza RS200 Z Edition es una berlina deportiva diseñada para ofrecer un equilibrio entre rendimiento y confort, con un enfoque en la conducción dinámica. Bajo el capó, equipa un motor 3S-GE de 2.0 litros atmosférico, capaz de generar 210 CV, lo que, combinado con su tracción trasera (RWD) y su bajo peso, le otorga una gran agilidad en curvas y un comportamiento similar al de un coupé deportivo. La versión Z Edition se diferencia por incluir mejoras en la suspensión, una caja de cambios manual de seis velocidades, y detalles estéticos más agresivos, lo que la convierte en la opción más orientada al alto rendimiento dentro de la gama Altezza."
    },
    {
        id: 26,
        marca: "Suzuki",
        modelo: "Cappuccino",
        piloto: "Sakamoto",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/b/b7/EA11R_Cordova_Red_AS0.png/revision/latest?cb=20200706014512",        
        equipo:["Alianza del Norte de Saitama"],
        descripcion:"El Suzuki Cappuccino es un kei car deportivo diseñado para ofrecer una experiencia de conducción ágil y divertida en un formato compacto y ligero. Bajo el capó, equipa un motor F6A de 660 cc turboalimentado, capaz de generar 64 CV, el límite reglamentario para los kei cars en Japón. Aunque su potencia pueda parecer modesta, su peso de apenas 700 kg y su configuración de tracción trasera (RWD) lo convierten en una máquina sorprendentemente ágil y capaz en curvas cerradas. Gracias a su distribución de peso casi perfecta (50:50) y su bajo centro de gravedad, el Cappuccino es ideal para el drifting y las carreras en carreteras de montaña."
    },
    {
        id: 27,
        marca: "Honda",
        modelo: "Integra Type R (DC2)",
        piloto: "Smiley Sakai",
        traccion: "FWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/c/c6/DC2_Championship_White_AS0.png/revision/latest?cb=20200810132654",        
        equipo:["Todo School"],
        descripcion:"El Honda Integra Type R DC2 es considerado uno de los mejores coches de tracción delantera jamás fabricados, gracias a su equilibrio entre peso, potencia y manejo preciso. Bajo el capó, equipa un motor B18C de 1.8 litros VTEC, capaz de generar 200 CV y alcanzar hasta 8,400 RPM, ofreciendo una respuesta increíble en altas revoluciones. Este modelo destaca por su peso reducido, chasis reforzado y una suspensión ajustada para el máximo rendimiento en curvas, lo que lo hace ideal para circuitos y carreteras de montaña. Su diferencial de deslizamiento limitado (LSD) y su tracción delantera optimizada le otorgan una estabilidad excepcional en curvas cerradas, permitiéndole rivalizar con coches de mayor potencia."
    },
    {
        id: 28,
        marca: "Honda",
        modelo: "Civic Type R (EK9)",
        piloto: "Tomoyuki Tachi",
        traccion: "FWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/6/6a/EK9_Sunlight_Yellow_AS0.png/revision/latest?cb=20200708205702",        
        equipo:["Todo School"],
        descripcion:"El Honda Civic Type R EK9 es un verdadero ícono de los hatchbacks deportivos, famoso por su ligereza, precisión en el manejo y alto rendimiento en altas revoluciones. Bajo el capó, cuenta con un motor B16B de 1.6 litros VTEC, capaz de generar 185 CV, lo que, combinado con su peso reducido de aproximadamente 1,070 kg, le otorga una excelente relación peso-potencia y una respuesta ágil en curvas. Su tracción delantera y su suspensión deportiva ajustada lo convierten en un vehículo ideal tanto para circuitos como para carreteras de montaña."
    },
    {
        id: 29,
        marca: "Mazda",
        modelo: "MX-5 (Miata) Eunos Roadster",
        piloto: "Toru Suetsugu",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/c/c4/NA6CE_Classic_Red_AS0.png/revision/latest?cb=20200805014527",        
        equipo:["Seven Star Leaf"],
        descripcion:"El Mazda MX-5 (Miata) Eunos Roadster es un ícono de los roadsters ligeros, famoso por su equilibrio, simplicidad y experiencia de conducción pura. Equipado con un motor 1.6L o 1.8L DOHC atmosférico, genera entre 115 y 130 CV, pero gracias a su bajo peso de aproximadamente 950 kg y su tracción trasera (RWD), ofrece una agilidad y respuesta excepcionales en curvas. Diseñado con la filosofía de 'Jinba Ittai' (unidad entre el conductor y el coche), el MX-5 es reconocido por su distribución de peso casi perfecta (50:50) y su dirección precisa, lo que lo hace ideal para el drifting, los tramos de montaña y la conducción deportiva."
    },
    {
        id: 30,
        marca: "Honda",
        modelo: "S2000",
        piloto: "Toshiya Joshima",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/2/25/S2000_Long_Beach_Blue_Pearl_AS0.png/revision/latest?cb=20200819012112",        
        equipo:["Purple Shadow"],
        descripcion:"El Honda S2000 es un roadster icónico que combina potencia, precisión y una experiencia de conducción pura. Bajo el capó, equipa el legendario motor F20C de 2.0 litros VTEC, capaz de generar 240 CV, alcanzando un asombroso régimen de 9,000 RPM, lo que lo convierte en uno de los motores atmosféricos con mayor potencia específica de su época. Su tracción trasera (RWD), junto con una caja de cambios manual de seis velocidades de recorridos cortos y precisos, hacen que el S2000 tenga un manejo excepcional en curvas y carreteras de montaña."
    },
    {
        id: 31,
        marca: "Honda",
        modelo: "NSX",
        piloto: "Go Hojo",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/8/86/NA1_Formula_Red_AS0.png/revision/latest?cb=20200813175737",        
        equipo:["Sidewinder"],
        descripcion:"El Honda NSX es un superdeportivo japonés revolucionario, diseñado para ofrecer un rendimiento excepcional con una conducción accesible y refinada. Equipado con un motor C30A o C32B V6 de 3.0 o 3.2 litros, con tecnología VTEC, produce entre 270 y 290 CV, combinado con un chasis de aluminio ligero que lo hace extremadamente ágil y dinámico. Su diseño fue desarrollado con la ayuda de Ayrton Senna, quien contribuyó a afinar su manejo, convirtiéndolo en un coche con una distribución de peso equilibrada"
    },
    {
        id: 32,
        marca: "Toyota",
        modelo: "Supra RZ",
        piloto: "Hideo Minagawa",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/4/4e/Supra_Super_White_II_AS0.png/revision/latest?cb=20200816175503",        
        equipo:["Katagiri"],
        descripcion:"El Toyota Supra RZ (JZA80) es uno de los deportivos japoneses más icónicos de todos los tiempos, famoso por su increíble potencial de modificación y su rendimiento en circuitos y carreras callejeras. Bajo el capó, equipa el legendario motor 2JZ-GTE de 3.0 litros biturbo, capaz de generar 280 CV de fábrica, aunque con modificaciones puede superar fácilmente los 1,000 CV."
    },
    {
        id: 33,
        marca: "Nissan",
        modelo: "Silvia Spec-R (S15)",
        piloto: "Hiroya Okuyama",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/e/e4/S15_Brilliant_Blue_AS0.png/revision/latest?cb=20200624131630",        
        equipo:["Team Spiral"],
        descripcion:"El Nissan Silvia Spec R S15 es uno de los modelos más queridos y respetados de la línea Silvia, especialmente en el mundo del drifting y las carreras callejeras. Equipado con un motor SR20DET de 2.0 litros turboalimentado, el Spec R S15 produce alrededor de 250 CV, lo que le proporciona una excelente relación peso-potencia. Su tracción trasera (RWD) y su distribución de peso equilibrada le permiten ofrecer una maniobrabilidad excepcional, ideal para tomarse las curvas con precisión y control. La versión Spec R cuenta con mejoras como una suspensión más deportiva, un diferencial de deslizamiento limitado (LSD) de tipo viscous y frenos más grandes, lo que le otorga un comportamiento aún más agresivo y controlado en situaciones extremas."
    },
    {
        id: 34,
        marca: "Toyota",
        modelo: "MR-S S-Edition",
        piloto: "Kai Kogashiwa",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/a/a0/MR-S_Silver_Metallic_AS0.png/revision/latest?cb=20200712011538",        
        equipo:["Katagiri"],
        descripcion:"El Toyota MR-S S-Edition es una versión deportiva del roadster MR-S (conocido también como Toyota Spyder en algunos mercados), diseñado para ofrecer una experiencia de conducción ágil y divertida en un paquete compacto y ligero. Equipado con un motor 1ZZ-FE de 1.8 litros atmosférico, capaz de generar 140 CV, el MR-S se destaca por su tracción trasera (RWD) y su bajo peso, lo que lo convierte en un coche extremadamente maniobrable, ideal para circuitos y carreteras de montaña. La versión S-Edition mejora su rendimiento con una suspensión deportiva más firme, llantas de mayor diámetro y detalles estéticos que le dan un aspecto más agresivo."
    },
    {
        id: 35,
        marca: "Mitsubishi",
        modelo: "Lancer Evolution VII GSR",
        piloto: "Kobayakawa",
        traccion: "4WD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/c/cb/EVO7_Dandelion_Yellow_AS0.png/revision/latest?cb=20200731234740",        
        equipo:["Team 246"],
        descripcion:"El Mitsubishi Lancer Evolution VII GSR es una de las versiones más destacadas de la famosa serie Lancer Evolution, diseñada para ofrecer un rendimiento de rally en un coche de calle. Equipado con un motor 4G63T de 2.0 litros turboalimentado, produce alrededor de 280 CV, lo que le otorga una gran potencia y aceleración, especialmente en condiciones de carretera desafiantes."
    },
    {
        id: 36,
        marca: "Nissan",
        modelo: "Skyline GT-R R32",
        piloto: "Rin Hojo",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/b/b4/R32_Gunmetal_Grey_Metallic_AS0.png/revision/latest?cb=20200701165924",        
        equipo:["No participa en ningún equipo."],
        descripcion:"El R32 fue una fuerza dominante en los circuitos de toda Asia, lo que le valió el sobrenombre de Godzilla. Este R32 cuenta con un motor biturbo RB26DETT, parachoques NISMO N1 y muchas otras modificaciones. Se desconoce la potencia real del coche, pero un modelo de serie puede alcanzar los 280CV"
    },
    {
        id: 37,
        marca: "Mazda",
        modelo: "Roadster RS",
        piloto: "Satoshi Omiya",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/2/28/NB8C_Evolution_Orange_Mica_AS0.png/revision/latest?cb=20200805152052",        
        equipo:["Team 246"],
        descripcion:"El Mazda Roadster RS, también conocido como Mazda MX-5 RS, es una versión más deportiva y refinada del clásico roadster MX-5, famosa por su equilibrio, ligereza y dinamismo. Equipado con un motor 1.8L DOHC 16V de cuatro cilindros, genera 160 CV (dependiendo de la versión), lo que combinado con su bajo peso de alrededor de 950 kg, ofrece una excelente relación peso-potencia y una experiencia de conducción increíblemente ágil y divertida."
    },
    {
        id: 38,
        marca: "Toyota",
        modelo: "Sprinter Trueno GT-APEX (AE86)",
        piloto: "Shinji Inui",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/e/e2/High-Tech_Two_Tone_Trueno_2Door_AS0.png/revision/latest?cb=20200531145930",        
        equipo:["Sidewinder"],
        descripcion:"El Toyota Sprinter Trueno GT-APEX o Hachi-Roku es uno de los vehículos más emblemáticos de la saga Initial D, conocido por su increíble rendimiento en las curvas y su potencial para el drifting. Equipado con el motor 4A-GE de 1.6 litros, de 160 CV, es famoso por su revs altos y su excelente respuesta en altas revoluciones. Este modelo cuenta con tracción trasera, lo que lo convierte en un excelente aliado para las carreras de montaña y drifting"
    },
    {
        id: 39,
        marca: "Nissan",
        modelo: "Fairlady Z Version S (350Z)",
        piloto: "Ryuji Ikeda",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/f/fc/350Z_Burning_Red_AS0.png/revision/latest?cb=20200713012048",        
        equipo:["Team Spiral"],
        descripcion:"El Nissan Fairlady Z Version S (350Z) es una de las versiones más deportivas y refinadas del 350Z, un coche que se convirtió rápidamente en un ícono de los deportivos japoneses. Equipado con un motor VQ35DE de 3.5 litros V6, produce 280 CV en su versión estándar, lo que le otorga una excelente aceleración y un sonido distintivo del motor V6. La versión Version S se destaca por su enfoque en el rendimiento, con una suspensión deportiva más firme, frenos de mayor rendimiento y detalles estéticos que le dan un aspecto más agresivo."
    }
]

/**
 * @swagger
 * /cars:
 *   get:
 *     summary: Obtiene la lista de coches de Initial D
 *     description: Devuelve una lista con los coches más icónicos de Initial D.
 *     responses:
 *       200:
 *         description: Lista de coches
 *         content:
 *           application/json:
 *             example:
 *               - id: 12,
 *                 marca: "Toyota",
 *                 modelo: "Spriter Trueno GT_APEX (AE86)",
 *                 piloto: "Takumi Fujiwara",
 *                 traccion: "RWD",
 *                 imagen: "https://static.wikia.nocookie.net/initiald/images/f/f2/AE86T_Spec_III_Manga.png"
 */
// app.get("/coches", (req, res) => {
//     res.json(cars);
//   });
  
  /**
   * @swagger
   * /cars/{id}:
   *   get:
   *     summary: Obtiene un coche por su ID
   *     description: Busca un coche específico por su ID.
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *         description: ID del coche a buscar
   *     responses:
   *       200:
   *         description: Datos del coche encontrado
   *         content:
   *           application/json:
   *             example:
 *                 id: 12,
 *                 marca: "Toyota",
 *                 modelo: "Spriter Trueno GT_APEX (AE86)",
 *                 piloto: "Takumi Fujiwara",
 *                 traccion: "RWD",
 *                 imagen: "https://static.wikia.nocookie.net/initiald/images/f/f2/AE86T_Spec_III_Manga.png"
   *       404:
   *         description: Coche no encontrado
   */

//   app.get("/coches/:id", (req, res) => {
//     const id = cars.find(c => c.id === parseInt(req.params.id));
//     if (id) {
//       res.json(id);
//     } else {
//       res.status(404).json({ error: "Coche no encontrado" });
//     }
//   });
  
//   app.get("/coches/:marca?", (req, res) => {
//     const { marca } = req.params;
//     const cochesFiltrados = coches.filter(coche => coche.marca.toLowerCase() === marca.toLowerCase());

//     if (cochesFiltrados.length > 0) {
//         res.json(cochesFiltrados);
//     } else {
//         res.status(404).json({ error: "No se encontraron coches con esa marca" });
//     }
// });

// app.get("/coches/:equipo?", (req, res) => {
//     const { equipo } = req.params;
//     const cochesFiltrados = coches.filter(coche => coche.equipo.some(e => e.toLowerCase() === equipo.toLowerCase()));

//     if (cochesFiltrados.length > 0) {
//         res.json(cochesFiltrados);
//     } else {
//         res.status(404).json({ error: "No se encontraron coches en ese equipo" });
//     }
// });

// app.get("/coches/:traccion?", (req, res) => {
//     const { traccion } = req.params;
//     const cochesFiltrados = coches.filter(coche => coche.traccion.toLowerCase() === traccion.toLowerCase());

//     if (cochesFiltrados.length > 0) {
//         res.json(cochesFiltrados);
//     } else {
//         res.status(404).json({ error: "No se encontraron coches con esa tracción" });
//     }
// });


  app.get("/api/coches", (req, res) => {
    const { marca, equipo, traccion } = req.query;

    let cochesFiltrados = coches;

    if (marca) {
        cochesFiltrados = cochesFiltrados.filter(coche => coche.marca.toLowerCase() === marca.toLowerCase());
    }
    
    if (equipo) {
        cochesFiltrados = cochesFiltrados.filter(coche => coche.equipo.some(e => e.toLowerCase() === equipo.toLowerCase()));
    }

    if (traccion) {
        cochesFiltrados = cochesFiltrados.filter(coche => coche.traccion.toLowerCase() === traccion.toLowerCase());
    }

    res.json(cochesFiltrados);
});

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`API corriendo en http://localhost:${PORT}`));