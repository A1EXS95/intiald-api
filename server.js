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
        imagen: "https://static.wikia.nocookie.net/initiald/images/a/a3/R32_Crystal_White_AS0.png",
        equipo:["Hakone Thunder Soldiers"],
        descripcion:"El R32 fue una fuerza dominante en los circuitos de toda Asia, lo que le valió el sobrenombre de Godzilla. Este R32 cuenta con un motor biturbo RB26DETT, parachoques NISMO N1 y muchas otras modificaciones. Se desconoce la potencia real del coche, pero un modelo de serie puede alcanzar los 280CV"      
    },
    {
        id: 2,
        marca: "Toyota",
        modelo: "Corolla Levin SR (AE85)",
        piloto: "Itsuki Takeuchi",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/b/b4/AE85_Levin_White_AS0.png",
        equipo:["Akina SpeedStars"],
        descripcion:"El Toyota Corolla Levin SR es una versión deportiva del legendario Corolla, conocida por su diseño ligero y su gran respuesta en carreteras sinuosas. Equipado con un motor 1.6L 2T-G de doble carburador, este clásico japonés ofrecía una potencia aproximada de 115 CV, lo que, combinado con su tracción trasera, lo convertía en una opción popular para los entusiastas del manejo deportivo. Su carrocería coupé y su peso reducido le otorgaban una gran agilidad, convirtiéndolo en un pionero en el mundo del drifting y las carreras callejeras."
    },
    {
        id: 3,
        marca: "Mazda",
        modelo: "RX-7 Type R FD3S",
        piloto: "Keisuke Takahashi",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/3/37/FD3S_Competition_Yellow_Mica_AS0.png",
        equipo:["Akagi RedSuns", "Project D"],
        descripcion:"Originalmente, el RX7 FD venía con un motor rotativo de doble rotor 13B-REW con doble turbo secuencial. Sin embargo, con cada nueva etapa, obtiene cada vez más mejoras de rendimiento. En la etapa final, tiene un paquete completo de rendimiento RE Ameiya, admisión Apexi, turbo, un capó de fibra de carbono y 340CV."
    },
    {
        id: 4,
        marca: "Nissan",
        modelo: "180SX Type II",
        piloto: "Kenji",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/d/db/180SX_Warm_White_AS0.png",
        equipo:["Akina SpeedStars"],
        descripcion:"El Nissan 180SX Type II es un ícono del drifting y las carreras callejeras, famoso por su equilibrio entre potencia y agilidad. Equipa un motor SR20DET turboalimentado de 2.0 litros, capaz de generar 205 CV en su versión original, con un gran potencial para modificaciones. Su diseño fastback y su tracción trasera lo convierten en una opción ideal para derrapes controlados y conducción agresiva en carreteras de montaña."
    },
    {
        id: 5,
        marca: "Nissan",
        modelo: "Silvia S14",
        piloto: "Kenta Nakamura",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/0/0a/S14_Orange_AS8.png",
        equipo:["Akagi RedSuns", "Project D"],
        descripcion:"El Nissan Silvia S14 es un coupé deportivo con un diseño más ancho y aerodinámico que su predecesor, lo que mejora su estabilidad a altas velocidades. Bajo el capó, monta un motor SR20DET turboalimentado de 2.0 litros, capaz de generar 220 CV en su versión K’s, con un gran potencial para modificaciones que lo convierten en una bestia del drifting. Su tracción trasera y chasis equilibrado lo hacen ideal para el control en curvas cerradas."
    },
    {
        id: 6,
        marca: "Nissan",
        modelo: "Silvia S13",
        piloto: "Koichiro Iketani",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/0/0a/S13_Lime_Green_Two_Tone_AS0.png",
        equipo:["Akina SpeedStars"],
        descripcion:"El Nissan Silvia S13 es uno de los modelos más icónicos de la serie Silvia, famoso por su diseño compacto y su increíble manejo. Equipado con un motor CA18DET turboalimentado de 1.8 litros o un SR20DET en versiones posteriores, su potencia ronda los 170-200 CV, lo que le permite ofrecer una excelente relación peso-potencia. Su tracción trasera y su chasis bien equilibrado lo convierten en una de las bases favoritas para el drifting y las modificaciones de rendimiento."
    },
    {
        id: 7,
        marca: "Nissan",
        modelo: "SilEighty",
        piloto: "Mako Sato",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/0/0b/Sil80_Impact_Blue_AS0.png",
        equipo:["Impact Blue"],
        descripcion:"El Nissan Sileighty es un ejemplo asombroso de ingeniería japonesa. El coche es básicamente una combinación de Nissan Silvia y SX180. La parte delantera del coche presenta un Nissan Silvia S13, y la sección trasera permanece del Nissan SX180. Esto hace que el Sileighty (también escrito como Sil80) sea un automóvil con realmente único. La razón por la que la mayoría de los tuners optan por Sileighty es por los daños sufridos en la parte delantera de un Nissan 180SX. A medida que el automóvil tiene luces emergentes, reemplazar la parte delantera de un SX180 puede ser un asunto costoso. La parte delantera del Silvia S13 es más barata y se adapta directamente, que es lo que llevó al Sil80. Sileighty obtiene un motor turbo SR20DET."
    },
    {
        id: 8,
        marca: "Mazda",
        modelo: "Savanna RX-7 FC3S",
        piloto: "Ryosuke Takahashi",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/7/73/FC3S_Crystal_White_AS0.png",
        equipo:["Akagi Redsuns", "Project D"],
        descripcion:"El RX7 FC3S blanco viene con un motor rotativo de doble rotor 13B-T. "
    },
    {
        id: 9,
        marca: "Honda",
        modelo: "Civic SIR-II (EG6)",
        piloto: "Shingo Shoji",
        traccion: "FWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/c/c4/EG6_Milano_Red_AS0.png",
        equipo:["NightKids"],
        descripcion:"El Honda Civic SiR-II (EG6) es una versión deportiva del famoso Civic de los años 90, conocido por su ligereza, agilidad y fiabilidad. Equipado con un motor B16A de 1.6 litros y 160 CV, este compacto de tracción delantera ofrece una aceleración impresionante y un manejo preciso en curvas, lo que lo convierte en una opción muy popular para los entusiastas del tuning y las carreras"
    },
    {
        id: 10,
        marca: "Nissan",
        modelo: "Silvia S13",
        piloto: "Takeshi Nakazato",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/f/f7/S13_Super_Black_AS8.png",
        equipo:["NightKids"],
        descripcion:"El Nissan Silvia S13 es uno de los modelos más icónicos de la serie Silvia, famoso por su diseño compacto y su increíble manejo. Equipado con un motor CA18DET turboalimentado de 1.8 litros o un SR20DET en versiones posteriores, su potencia ronda los 170-200 CV, lo que le permite ofrecer una excelente relación peso-potencia. Su tracción trasera y su chasis bien equilibrado lo convierten en una de las bases favoritas para el drifting y las modificaciones de rendimiento."
    },
    {
        id: 11,
        marca: "Nissan",
        modelo: "Skyline GT-R R32",
        piloto: "Takeshi Nakazato",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/c/c9/R32_Black_Pearl_Metallic_AS0.png",        
        equipo:["NightKids"],
        descripcion:"El R32 fue una fuerza dominante en los circuitos de toda Asia, lo que le valió el sobrenombre de Godzilla. Este R32 cuenta con un motor biturbo RB26DETT, parachoques NISMO N1 y muchas otras modificaciones. Se desconoce la potencia real del coche, pero un modelo de serie puede alcanzar los 280CV"
    },
    {
        id: 12,
        marca: "Toyota",
        modelo: "Spriter Trueno GT-APEX (AE86)",
        piloto: "Takumi Fujiwara",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/5/54/High-Tech_Two_Tone_Trueno_3Door_AS0.png",        
        equipo:["Akina SpeedStars", "Project D"],
        descripcion:"El Toyota Sprinter Trueno GT-APEX o Hachi-Roku es uno de los vehículos más emblemáticos de la saga Initial D, conocido por su increíble rendimiento en las curvas y su potencial para el drifting. Equipado con el motor 4A-GE de 1.6 litros, de 160 CV, es famoso por su revs altos y su excelente respuesta en altas revoluciones. Este modelo cuenta con tracción trasera, lo que lo convierte en un excelente aliado para las carreras de montaña y drifting"
    },
    {
        id: 13,
        marca: "Mitsubishi",
        modelo: "Lancer Evolution III GSR",
        piloto: "Kyoichi Sudo",
        traccion: "4WD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/a/ad/EVO3_Pyrenees_Black_AS0.png",        
        equipo:["Team Emperor"],
        descripcion:"El Mitsubishi Lancer Evolution es una serie de los autos más emblemáticos que jamás hayan salido del mercado interno japonés (JDM). El Lan Evo III tiene un motor turbo 4G63T, una CPU anti-lag estilo rally, a la que el anime se refiere como 'Sistema de fallas de encendido', y un controlador de impulso."
    },
    {
        id: 14,
        marca: "Mitsubishi",
        modelo: "Lancer Evolution IV RS",
        piloto: "Seiji Iwaki",
        traccion: "4WD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/5/58/EVO4_Scotia_White_AS0.png",        
        equipo:["Team Emperor"],
        descripcion:"El Mitsubishi Lancer Evolution IV RS es una de las versiones más puras y potentes de la serie Evo, conocida por su increíble tracción integral y su capacidad de desempeño en terrenos difíciles y carreteras mojadas. Equipado con el motor 4G63T de 2.0 litros turboalimentado, produce cerca de 300CV, lo que lo convierte en una verdadera máquina de rally y carreras."
    },
    {
        id: 15,
        marca: "Toyota",
        modelo: "Corolla Levin GT-APEX (AE86)",
        piloto: "Wataru Akiyama",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/3/33/High-Tech_Two_Tone_AE86_Levin_AS0.png",        
        equipo:["Alianza del Norte de Saitama"],
        descripcion:"El levin estaba originalmente equipado con un motor 4A-GEU, con un turbocompresor atornillado, este generaba unos 280CV. Una vez averiado el motor de este Levin se reemplazó po un 4A-GZE, una version sobrealimentada del motor anterior."
    },
    {
        id: 16,
        marca: "Toyota",
        modelo: "MR2 G-Limited (SW20)",
        piloto: "Ken Kogashiwa",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/5/5e/MR2_Strong_Blue_Metallic_AS0.png",        
        equipo:["No participa en ningún equipo."],
        descripcion:"El Toyota MR2 G-Limited (SW20) es un deportivo compacto con un diseño de motor central que ofrece una experiencia de conducción única y equilibrada. Equipado con un motor 3S-GE de 2.0 litros que genera alrededor de 165 CV, este modelo es conocido por su excelente manejo y agilidad, especialmente en carreteras de montaña y curvas cerradas. Su tracción trasera y su distribución de peso, gracias al motor central, le brindan una estabilidad sobresaliente y una capacidad de respuesta impresionante. La versión G-Limited ofrece detalles como llantas más ligeras y una suspensión más deportiva, que lo hacen aún más apto para el desempeño en carreras y maniobras de drifting."
    },
    {
        id: 17,
        marca: "Toyota",
        modelo: "Celica GT-Four",
        piloto: "Miki",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/0/00/Celica_Silver_Metallic_AS0.png",        
        equipo:["No participa en ningún equipo."],
        descripcion:"El Toyota Celica GT-Four es un modelo legendario que representa lo mejor de la ingeniería deportiva japonesa, especialmente en el mundo del rally. Equipado con un motor 3S-GTE de 2.0 litros turboalimentado, produce aproximadamente 200-250 CV dependiendo de la versión, lo que le otorga una gran potencia para enfrentarse a terrenos difíciles y tramos de alta velocidad. La suspensión de rally lo convierte en un coche extremadamente estable y ágil, incluso en condiciones de conducción extremas. El Celica GT-Four es famoso por su éxito en el Campeonato Mundial de Rally (WRC) durante los años 90, lo que lo convierte en un coche muy respetado en la cultura automovilística."
    },
    {
        id: 18,
        marca: "Mitsubishi",
        modelo: "Lancer Evolution V GSR",
        piloto: "Aikawa",
        traccion: "4WD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/0/03/EVO5_Scotia_White_AS0.png",        
        equipo:["Tsuchisaka Lancer Evolution Team"],
        descripcion:"El Mitsubishi Lancer Evolution V GSR es uno de los modelos más aclamados de la serie Evo, conocido por su impresionante rendimiento en competiciones de rally y su capacidad de dominación en carreteras difíciles. Equipado con un motor 4G63T de 2.0 litros turboalimentado, genera 280 CV en su versión estándar, lo que lo convierte en una máquina de alto rendimiento con una aceleración rápida y una gran capacidad para mantener la estabilidad en curvas cerradas."
    },
    {
        id: 19,
        marca: "Nissan",
        modelo: "Skyline 25GT Turbo (R34)",
        piloto: "Atsuro Kawai",
        traccion: "AWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/7/7e/ER34_Dark_Blue_Pearl_AS0.png",        
        equipo:["Seven Star Leaf"],
        descripcion:"El Nissan Skyline 25GT Turbo es una versión de alto rendimiento de la serie Skyline, famosa por su potencia, diseño robusto y su capacidad para competir en diversos entornos de carreras. Equipado con un motor RB20DET de 2.0 litros turboalimentado, produce alrededor de 190 CV, lo que lo convierte en una opción excelente para los entusiastas de los coches deportivos que buscan un equilibrio entre potencia y control. Aunque no es tan legendario como el R32 o el R34, el 25GT Turbo es muy respetado en el mundo del tuning y las competiciones, especialmente por su capacidad de modificación y potencial de mejora."
    },
    {
        id: 20,
        marca: "Subaru",
        modelo: "Impreza WRX STI Coupe Type R Version V",
        piloto: "Bunta Fujiwara",
        traccion: "4WD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/e/e9/GC8_Sonic_Blue_Mica_AS0.png",        
        equipo:["No participa en ningún equipo."],
        descripcion:"El Subaru Impreza WRX STI Coupe Type R Version V es una versión especial y altamente apreciada de la línea Impreza, conocida por su rendimiento en rally. Equipado con un motor EJ20 de 2.0 litros turboalimentado, genera alrededor de 280 CV, lo que le otorga una gran potencia para enfrentarse a competidores en todo tipo de terrenos. Su tracción en las cuatro ruedas, combinada con una suspensión deportiva y un chasis robusto, le otorgan una gran estabilidad en curvas y una capacidad de aceleración impresionante en cualquier condición."
    },
    {
        id: 21,
        marca: "Honda",
        modelo: "Civic Type R (EK9)",
        piloto: "Daiki Ninomiya",
        traccion: "FWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/6/6a/EK9_Sunlight_Yellow_AS0.png",        
        equipo:["Todo School"],
        descripcion:"El Honda Civic Type R EK9 es un verdadero ícono de los hatchbacks deportivos, famoso por su ligereza, precisión en el manejo y alto rendimiento en altas revoluciones. Bajo el capó, cuenta con un motor B16B de 1.6 litros VTEC, capaz de generar 185 CV, lo que, combinado con su peso reducido de aproximadamente 1,070 kg, le otorga una excelente relación peso-potencia y una respuesta ágil en curvas. Su tracción delantera y su suspensión deportiva ajustada lo convierten en un vehículo ideal tanto para circuitos como para carreteras de montaña."
    },
    {
        id: 22,
        marca: "Mitsubishi",
        modelo: "Lancer Evolution VI GSR",
        piloto: "Ichijo",
        traccion: "4WD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/b/b3/EVO6_Scotia_White_AS0.png",        
        equipo:["Tsuchisaka Lancer Evolution Team"],
        descripcion:"El Mitsubishi Lancer Evolution VI GSR es una de las versiones más refinadas y potentes de la legendaria saga Evo, diseñado para ofrecer un rendimiento excepcional tanto en rally como en carreteras de montaña. Bajo el capó, equipa el icónico motor 4G63T de 2.0 litros turboalimentado, capaz de generar 280 CV, acompañado de un avanzado diferencial activo que optimiza la distribución de la potencia para un control superior en curvas cerradas y superficies resbaladizas. El Evo VI se distingue por su aerodinámica mejorada, con un parachoques rediseñado, mejores conductos de refrigeración y un alerón ajustable que maximiza la estabilidad a alta velocidad."
    },
    {
        id: 23,
        marca: "Nissan",
        modelo: "Skyline GT-R V-Spec II (R34 NÜR)",
        piloto: "Kozo Hoshino",
        traccion: "AWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/8/82/BNR34_Millennium_Jade_AS0.png",        
        equipo:["Purple Shadow"],
        descripcion:"El Nissan Skyline GT-R V-Spec II Nür (R34) es una de las versiones más exclusivas y avanzadas del legendario R34, diseñado para ofrecer un rendimiento extremo tanto en circuitos como en carreteras de montaña. Bajo el capó, equipa el icónico motor RB26DETT de 2.6 litros biturbo, optimizado en esta versión para mayor durabilidad y rendimiento, con una potencia oficial de 280 CV, aunque en realidad muchos superaban esa cifra. La versión V-Spec II Nür toma su nombre del famoso circuito de Nürburgring, donde fue desarrollado y probado. Se distingue por su suspensión mejorada, frenos reforzados y un sistema de aerodinámica avanzada que mejora la estabilidad a altas velocidades. Su sistema de tracción integral ATTESA E-TS Pro y el diferencial activo lo convierten en una máquina de precisión en curvas y aceleraciones brutales. Este modelo es considerado el pináculo de la era GT-R antes de la llegada del R35."
    },
    {
        id: 24,
        marca: "Mazda",
        modelo: "RX-7 Type R FD3S",
        piloto: "Kyoko Iwase",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/a/a9/FD3S_Brilliant_Black_AS0.png",        
        equipo:["Alianza del Norte de Saitama"],
        descripcion:"Originalmente, el RX7 FD venía con un motor rotativo de doble rotor 13B-REW con doble turbo secuencial. Sin embargo, con cada nueva etapa, obtiene cada vez más mejoras de rendimiento. En la etapa final, tiene un paquete completo de rendimiento RE Ameiya, admisión Apexi, turbo, un capó de fibra de carbono y 340CV."
    },
    {
        id: 25,
        marca: "Toyota",
        modelo: "Altezza RS200 Z Edition",
        piloto: "Nobuhiko Akiyama",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/0/0c/Altezza_Silver_Metallic_AS0.png",        
        equipo:["Alianza del Norte de Saitama"],
        descripcion:"El Toyota Altezza RS200 Z Edition es una berlina deportiva diseñada para ofrecer un equilibrio entre rendimiento y confort, con un enfoque en la conducción dinámica. Bajo el capó, equipa un motor 3S-GE de 2.0 litros atmosférico, capaz de generar 210 CV, lo que, combinado con su tracción trasera (RWD) y su bajo peso, le otorga una gran agilidad en curvas y un comportamiento similar al de un coupé deportivo. La versión Z Edition se diferencia por incluir mejoras en la suspensión, una caja de cambios manual de seis velocidades, y detalles estéticos más agresivos, lo que la convierte en la opción más orientada al alto rendimiento dentro de la gama Altezza."
    },
    {
        id: 26,
        marca: "Suzuki",
        modelo: "Cappuccino",
        piloto: "Sakamoto",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/b/b7/EA11R_Cordova_Red_AS0.png",        
        equipo:["Alianza del Norte de Saitama"],
        descripcion:"El Suzuki Cappuccino es un kei car deportivo diseñado para ofrecer una experiencia de conducción ágil y divertida en un formato compacto y ligero. Bajo el capó, equipa un motor F6A de 660 cc turboalimentado, capaz de generar 64 CV, el límite reglamentario para los kei cars en Japón. Aunque su potencia pueda parecer modesta, su peso de apenas 700 kg y su configuración de tracción trasera (RWD) lo convierten en una máquina sorprendentemente ágil y capaz en curvas cerradas. Gracias a su distribución de peso casi perfecta (50:50) y su bajo centro de gravedad, el Cappuccino es ideal para el drifting y las carreras en carreteras de montaña."
    },
    {
        id: 27,
        marca: "Honda",
        modelo: "Integra Type R (DC2)",
        piloto: "Smiley Sakai",
        traccion: "FWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/c/c6/DC2_Championship_White_AS0.png",        
        equipo:["Todo School"],
        descripcion:"El Honda Integra Type R DC2 es considerado uno de los mejores coches de tracción delantera jamás fabricados, gracias a su equilibrio entre peso, potencia y manejo preciso. Bajo el capó, equipa un motor B18C de 1.8 litros VTEC, capaz de generar 200 CV y alcanzar hasta 8,400 RPM, ofreciendo una respuesta increíble en altas revoluciones. Este modelo destaca por su peso reducido, chasis reforzado y una suspensión ajustada para el máximo rendimiento en curvas, lo que lo hace ideal para circuitos y carreteras de montaña. Su diferencial de deslizamiento limitado (LSD) y su tracción delantera optimizada le otorgan una estabilidad excepcional en curvas cerradas, permitiéndole rivalizar con coches de mayor potencia."
    },
    {
        id: 28,
        marca: "Honda",
        modelo: "Civic Type R (EK9)",
        piloto: "Tomoyuki Tachi",
        traccion: "FWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/6/6a/EK9_Sunlight_Yellow_AS0.png",        
        equipo:["Todo School"],
        descripcion:"El Honda Civic Type R EK9 es un verdadero ícono de los hatchbacks deportivos, famoso por su ligereza, precisión en el manejo y alto rendimiento en altas revoluciones. Bajo el capó, cuenta con un motor B16B de 1.6 litros VTEC, capaz de generar 185 CV, lo que, combinado con su peso reducido de aproximadamente 1,070 kg, le otorga una excelente relación peso-potencia y una respuesta ágil en curvas. Su tracción delantera y su suspensión deportiva ajustada lo convierten en un vehículo ideal tanto para circuitos como para carreteras de montaña."
    },
    {
        id: 29,
        marca: "Mazda",
        modelo: "MX-5 (Miata) Eunos Roadster",
        piloto: "Toru Suetsugu",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/c/c4/NA6CE_Classic_Red_AS0.png",        
        equipo:["Seven Star Leaf"],
        descripcion:"El Mazda MX-5 (Miata) Eunos Roadster es un ícono de los roadsters ligeros, famoso por su equilibrio, simplicidad y experiencia de conducción pura. Equipado con un motor 1.6L o 1.8L DOHC atmosférico, genera entre 115 y 130 CV, pero gracias a su bajo peso de aproximadamente 950 kg y su tracción trasera (RWD), ofrece una agilidad y respuesta excepcionales en curvas. Diseñado con la filosofía de 'Jinba Ittai' (unidad entre el conductor y el coche), el MX-5 es reconocido por su distribución de peso casi perfecta (50:50) y su dirección precisa, lo que lo hace ideal para el drifting, los tramos de montaña y la conducción deportiva."
    },
    {
        id: 30,
        marca: "Honda",
        modelo: "S2000",
        piloto: "Toshiya Joshima",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/2/25/S2000_Long_Beach_Blue_Pearl_AS0.png",        
        equipo:["Purple Shadow"],
        descripcion:"El Honda S2000 es un roadster icónico que combina potencia, precisión y una experiencia de conducción pura. Bajo el capó, equipa el legendario motor F20C de 2.0 litros VTEC, capaz de generar 240 CV, alcanzando un asombroso régimen de 9,000 RPM, lo que lo convierte en uno de los motores atmosféricos con mayor potencia específica de su época. Su tracción trasera (RWD), junto con una caja de cambios manual de seis velocidades de recorridos cortos y precisos, hacen que el S2000 tenga un manejo excepcional en curvas y carreteras de montaña."
    },
    {
        id: 31,
        marca: "Honda",
        modelo: "NSX",
        piloto: "Go Hojo",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/8/86/NA1_Formula_Red_AS0.png",        
        equipo:["Sidewinder"],
        descripcion:"El Honda NSX es un superdeportivo japonés revolucionario, diseñado para ofrecer un rendimiento excepcional con una conducción accesible y refinada. Equipado con un motor C30A o C32B V6 de 3.0 o 3.2 litros, con tecnología VTEC, produce entre 270 y 290 CV, combinado con un chasis de aluminio ligero que lo hace extremadamente ágil y dinámico. Su diseño fue desarrollado con la ayuda de Ayrton Senna, quien contribuyó a afinar su manejo, convirtiéndolo en un coche con una distribución de peso equilibrada"
    },
    {
        id: 32,
        marca: "Toyota",
        modelo: "Supra RZ",
        piloto: "Hideo Minagawa",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/4/4e/Supra_Super_White_II_AS0.png",        
        equipo:["Katagiri"],
        descripcion:"El Toyota Supra RZ (JZA80) es uno de los deportivos japoneses más icónicos de todos los tiempos, famoso por su increíble potencial de modificación y su rendimiento en circuitos y carreras callejeras. Bajo el capó, equipa el legendario motor 2JZ-GTE de 3.0 litros biturbo, capaz de generar 280 CV de fábrica, aunque con modificaciones puede superar fácilmente los 1,000 CV."
    },
    {
        id: 33,
        marca: "Nissan",
        modelo: "Silvia Spec-R (S15)",
        piloto: "Hiroya Okuyama",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/e/e4/S15_Brilliant_Blue_AS0.png",        
        equipo:["Team Spiral"],
        descripcion:"El Nissan Silvia Spec R S15 es uno de los modelos más queridos y respetados de la línea Silvia, especialmente en el mundo del drifting y las carreras callejeras. Equipado con un motor SR20DET de 2.0 litros turboalimentado, el Spec R S15 produce alrededor de 250 CV, lo que le proporciona una excelente relación peso-potencia. Su tracción trasera (RWD) y su distribución de peso equilibrada le permiten ofrecer una maniobrabilidad excepcional, ideal para tomarse las curvas con precisión y control. La versión Spec R cuenta con mejoras como una suspensión más deportiva, un diferencial de deslizamiento limitado (LSD) de tipo viscous y frenos más grandes, lo que le otorga un comportamiento aún más agresivo y controlado en situaciones extremas."
    },
    {
        id: 34,
        marca: "Toyota",
        modelo: "MR-S S-Edition",
        piloto: "Kai Kogashiwa",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/a/a0/MR-S_Silver_Metallic_AS0.png",        
        equipo:["Katagiri"],
        descripcion:"El Toyota MR-S S-Edition es una versión deportiva del roadster MR-S (conocido también como Toyota Spyder en algunos mercados), diseñado para ofrecer una experiencia de conducción ágil y divertida en un paquete compacto y ligero. Equipado con un motor 1ZZ-FE de 1.8 litros atmosférico, capaz de generar 140 CV, el MR-S se destaca por su tracción trasera (RWD) y su bajo peso, lo que lo convierte en un coche extremadamente maniobrable, ideal para circuitos y carreteras de montaña. La versión S-Edition mejora su rendimiento con una suspensión deportiva más firme, llantas de mayor diámetro y detalles estéticos que le dan un aspecto más agresivo."
    },
    {
        id: 35,
        marca: "Mitsubishi",
        modelo: "Lancer Evolution VII GSR",
        piloto: "Kobayakawa",
        traccion: "4WD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/c/cb/EVO7_Dandelion_Yellow_AS0.png",        
        equipo:["Team 246"],
        descripcion:"El Mitsubishi Lancer Evolution VII GSR es una de las versiones más destacadas de la famosa serie Lancer Evolution, diseñada para ofrecer un rendimiento de rally en un coche de calle. Equipado con un motor 4G63T de 2.0 litros turboalimentado, produce alrededor de 280 CV, lo que le otorga una gran potencia y aceleración, especialmente en condiciones de carretera desafiantes."
    },
    {
        id: 36,
        marca: "Nissan",
        modelo: "Skyline GT-R R32",
        piloto: "Rin Hojo",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/b/b4/R32_Gunmetal_Grey_Metallic_AS0.png",        
        equipo:["No participa en ningún equipo."],
        descripcion:"El R32 fue una fuerza dominante en los circuitos de toda Asia, lo que le valió el sobrenombre de Godzilla. Este R32 cuenta con un motor biturbo RB26DETT, parachoques NISMO N1 y muchas otras modificaciones. Se desconoce la potencia real del coche, pero un modelo de serie puede alcanzar los 280CV"
    },
    {
        id: 37,
        marca: "Mazda",
        modelo: "Roadster RS",
        piloto: "Satoshi Omiya",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/2/28/NB8C_Evolution_Orange_Mica_AS0.png",        
        equipo:["Team 246"],
        descripcion:"El Mazda Roadster RS, también conocido como Mazda MX-5 RS, es una versión más deportiva y refinada del clásico roadster MX-5, famosa por su equilibrio, ligereza y dinamismo. Equipado con un motor 1.8L DOHC 16V de cuatro cilindros, genera 160 CV (dependiendo de la versión), lo que combinado con su bajo peso de alrededor de 950 kg, ofrece una excelente relación peso-potencia y una experiencia de conducción increíblemente ágil y divertida."
    },
    {
        id: 38,
        marca: "Toyota",
        modelo: "Sprinter Trueno GT-APEX (AE86)",
        piloto: "Shinji Inui",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/e/e2/High-Tech_Two_Tone_Trueno_2Door_AS0.png",        
        equipo:["Sidewinder"],
        descripcion:"El Toyota Sprinter Trueno GT-APEX o Hachi-Roku es uno de los vehículos más emblemáticos de la saga Initial D, conocido por su increíble rendimiento en las curvas y su potencial para el drifting. Equipado con el motor 4A-GE de 1.6 litros, de 160 CV, es famoso por su revs altos y su excelente respuesta en altas revoluciones. Este modelo cuenta con tracción trasera, lo que lo convierte en un excelente aliado para las carreras de montaña y drifting"
    },
    {
        id: 39,
        marca: "Nissan",
        modelo: "Fairlady Z Version S (350Z)",
        piloto: "Ryuji Ikeda",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/f/fc/350Z_Burning_Red_AS0.png",        
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



app.get("/api/coches", (req, res) => {
    const { marca, equipo, traccion } = req.query;

    let cochesFiltrados = coches;

    if (marca) {
        const marcas = marca.split(",").map(m => m.toLowerCase().trim());
        cochesFiltrados = cochesFiltrados.filter(coche => marcas.includes(coche.marca.toLowerCase()));
    }
    
    if (equipo) {
        const equipos = equipo.split(",").map(e => e.toLowerCase().trim());
        cochesFiltrados = cochesFiltrados.filter(coche => coche.equipo.some(e => equipos.includes(e.toLowerCase())));
    }

    if (traccion) {
        const tracciones = traccion.split(",").map(t => t.toLowerCase().trim());
        cochesFiltrados = cochesFiltrados.filter(coche => tracciones.includes(coche.traccion.toLowerCase()));
    }

    res.json(cochesFiltrados);
});




const tramos = [
    {
        id: 1,
        nombre: "Monte Akina",
        nombre_japones: "秋名山",
        longitud: "8.0 km",
        tiempo_media: "12 min",
        imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/akina.png",
        puntos_clave:"5 horquillas consecutivas, cunetas, rectas largas, terraplenes pronunciados, abundantes oportunidades de adelantamiento",
        descripcion:"Akina, enclavada en Gunma, es una pista venerada que atrae a pilotos de todo el mundo. Con sus características curvas cerradas, cambios de elevación y vistas impresionantes, personifica la esencia de las carreras de paso de montaña. Con 8 kilómetros de longitud, esta icónica pista combina caucho y asfalto, enmarcada por imponentes montañas. Su legado y sus batallas han convertido a Akina en un circuito sagrado. Ya sea buscando la adrenalina de dominar sus curvas o simplemente disfrutando de su encanto, Akina ofrece una experiencia de touge inolvidable donde las leyendas prosperan y la velocidad habla por sí sola.",
        equipo_local:"Akina SpeedStars",
        prefectura:["Gunma"] 
    },
    {
        id: 2,
        nombre: "Monte Akagi",
        nombre_japones: "赤城山",
        longitud: "5.0 km",
        tiempo_media: "9 min",
        imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/akagi.png",
        puntos_clave:"Esquinas empinadas, vistas panorámicas",
        descripcion:"Akagi es un legendario paso de montaña enclavado en la prefectura de Gunma, Japón. Esta icónica carretera de montaña atrae a aficionados al automovilismo de todas partes, ofreciendo una experiencia emocionante e inolvidable. Con sus desafiantes curvas cerradas, amplias curvas y pintorescos alrededores, Akagi muestra la verdadera esencia de las carreras de touge. Al recorrer la carretera de aproximadamente 5 kilómetros, los conductores disfrutan de paisajes impresionantes y vistas panorámicas de las montañas circundantes. El rico patrimonio automovilístico de Akagi y su reputación como destino imprescindible para los aficionados al automovilismo han consolidado su prestigio entre los aficionados. Ya sea por la adrenalina de sus curvas o por su cautivadora belleza natural, Akagi promete una emocionante experiencia de touge para quienes buscan la aventura al volante definitiva.",
        equipo_local:"Akagi RedSuns",
        prefectura:["Gunma"] 
    },
    {
        id: 3,
        nombre: "Paso de Usui",
        nombre_japones: "碓氷峠",
        longitud: "4.6 km",
        tiempo_media: "7 min",
        imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/usui.png",
        puntos_clave:"C-121, Puente Megane-bashi",
        descripcion:"El Paso Usui, también conocido como Usui Touge, es un legendario paso de montaña que conecta las prefecturas de Gunma y Nagano. Con sus curvas cerradas, sus horquillas cerradas y sus pronunciadas pendientes, el Paso de Usui ofrece una ruta emocionante y desafiante para los amantes del touge. Este emblemático tramo de carretera ofrece a los conductores la oportunidad de poner a prueba sus habilidades y experimentar la emoción de conquistar su exigente terreno. Famoso por sus impresionantes paisajes, el Paso de Usui atrae a conductores de todas partes, en busca de la emoción y la aventura que ofrece este legendario paso.",
        equipo_local:"Impact Blue",
        prefectura:["Gunma", "Nagano"] 
    },
    {
        id: 4,
        nombre: "Monte Myogi",
        nombre_japones: "妙義山",
        longitud: "5.0 km",
        tiempo_media: "8 min",
        imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/myogi.png",
        puntos_clave:"Santuario Nakanotake, largas rectas, curvas de radio bajo, picos abruptos, vistas a la montaña",
        descripcion:"Enclavado en el pintoresco paisaje de Gunma, Myogi es un paraíso para los conductores, conocido por sus diversas características. El recorrido lleva a los conductores al venerado Santuario Nakanotake, un antiguo guardián de la carretera. Las largas rectas ofrecen momentos de aceleración, seguidos de una conducción calculada en curvas de radio reducido, poniendo a prueba la habilidad y el control. A medida que avanza la carretera, las cimas abruptas desafían tanto al vehículo como a los nervios, añadiendo un toque extra de emoción. A lo largo del trayecto, las vistas panorámicas de las montañas ofrecen un telón de fondo impresionante, inspirando asombro en cada curva. La combinación única de elementos de Myogi promete una experiencia de conducción emocionante que combina precisión, potencia y la majestuosidad de la naturaleza.",
        equipo_local:"NightKids",
        prefectura:["Gunma"] 
    },
    {
        id: 5,
        nombre: "Paso de Tsuchisaka",
        nombre_japones: "土坂峠",
        longitud: "6.7 km",
        tiempo_media: "10 min",
        imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/tsuchisaka.png",
        puntos_clave:"Túnel de Tsuchisaka, largas rectas cuesta arriba, descenso técnico",
        descripcion:"Enclavada en los encantadores paisajes de Gunma y Saitama, Tsuchisaka se presenta como una emocionante aventura al volante, definida por sus atributos únicos. El viaje comienza con un estimulante tramo cuesta arriba, que marca el ritmo de la aventura que se avecina. El histórico Túnel de Tsuchisaka se alza como un centinela del tiempo, ofreciendo un paso al corazón de la ruta. Una sucesión de largas rectas invita a momentos de aceleración, seguidos de un descenso meticulosamente orquestado a través de una sección técnica de descenso después del túnel. A medida que la carretera navega entre dos prefecturas, revela una mezcla de paisajes cautivadores que embellecen cada curva. La fusión de desafíos cuesta arriba, tramos de alta velocidad y descensos técnicos de Tsuchisaka garantiza una experiencia que despierta los sentidos y redefine la esencia de la emoción de conducir.",
        equipo_local:"Tsuchisaka Lancer Evolution Team",
        prefectura:["Gunma", "Saitama"] 
    },
    {
        id: 6,
        nombre: "Enna Skyline",
        nombre_japones: "エンナのスカイライン",
        longitud: "5.6 km",
        tiempo_media: "9 min",
        imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/tsuchisaka.png",
        puntos_clave:"Curvas técnicas, curvas ciegas, cambios de elevación pronunciados, riesgo de caída de rocas",
        descripcion:"Enna Skyline se erige como un paraíso para la conducción, un reino donde el asfalto y la naturaleza convergen en perfecta armonía. Con su sinuoso trazado y sus curvas técnicas, esta carretera de montaña ofrece una experiencia desafiante y emocionante. Ascendiendo a alturas imponentes, recompensa a los conductores con vistas panorámicas que se extienden por todo el paisaje. A medida que los vehículos recorren sus curvas, Enna Skyline se convierte en un campo de pruebas de habilidad y precisión. Cada curva es una pincelada en el lienzo del arte de la conducción. Más allá de la emoción, es un viaje a través de un mundo de belleza, donde la carretera y la naturaleza se entrelazan para crear una sinfonía inolvidable de movimiento y gracia.",
        equipo_local:"Toudou School",
        prefectura:["Tochigi"] 
    },
    {
        id: 7,
        nombre: "Happogahara",
        nombre_japones: "八方ヶ原",
        longitud: "5.8 km",
        tiempo_media: "10 min",
        imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/happogahara.png",
        puntos_clave:"Amplia gama de curvas, elevaciones desde planas hasta empinadas, ancho de carretera variable, ubicación remota, túnel Yuhi, cascada serena y vistas al bosque.",
        descripcion:"Happogahara se erige como la cumbre de la perfección del touge, fusionando ingeniosamente los elementos más refinados del diverso repertorio touge de Japón. Es una convergencia armoniosa de serenas vistas de bosques y cascadas, enclavada en la tranquilidad de un lugar remoto. El terreno versátil de la carretera, que pasa de amplias extensiones a estrechos senderos y de tramos llanos a empinadas elevaciones, ofrece una conducción dinámica y atractiva. Su trazado, una intrincada danza de curvas de 180 grados, horquillas cerradas y curvas ciegas, crea un ritmo cautivador. Happogahara es más que una ruta; es un testimonio del arte del touge, capturando la esencia misma de un viaje extraordinario en su fluidez y diversidad.",
        equipo_local:"Toudou School",
        prefectura:["Tochigi"] 
    },
    {
        id: 8,
        nombre: "Momiji Line",
        nombre_japones: "もみじライン",
        longitud: "10.3 km",
        tiempo_media: "17 min",
        imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/momiji.png",
        puntos_clave:"Canalones descubiertos, pendientes pronunciadas, curvas cerradas, hermosas vistas otoñales, vistas a cascadas",
        descripcion:"Momiji Line, una ruta encantadora, pinta con gran detalle los matices cambiantes de las estaciones. Esta sinuosa carretera, adornada con curvas cerradas, pendientes pronunciadas y cunetas descubiertas, es más que un sendero: es un lienzo de la naturaleza. Cada curva revela un arte tan hermoso como las hojas de momiji que le dan nombre. Las vibrantes vistas otoñales reflejan la esencia misma de la estación, mientras que los destellos de cascadas se suman al espectáculo. Recorrer Momiji Line no es solo un paseo en coche, es un recorrido por la obra maestra de la naturaleza, un viaje inmersivo que captura la esencia de la belleza siempre cambiante de Japón.",
        equipo_local:"Seven Star Leaf",
        prefectura:["Tochigi"] 
    },
    {
        id: 9,
        nombre: "Irohazaka (descenso)",
        nombre_japones: "いろは坂",
        longitud: "5.7 km",
        tiempo_media: "12 min",
        imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/irohazaka.png",
        puntos_clave:"48 horquillas en total, 27 horquillas en descenso, rutas de un solo sentido empinadas y estrechas, paisaje pintoresco, curvas señalizadas, 33.ª curva, salto de Irohazaka",
        descripcion:"Irohazaka, venerada como la icónica pista de Iroha, se alza como un paso de montaña de desafío sin igual. Cuenta con un diseño extraordinario: dos rutas empinadas y estrechas de un solo sentido, una cuesta arriba y otra cuesta abajo. El nombre 'Irohazaka' rinde homenaje a sus 48 curvas cerradas, haciendo referencia a las tres primeras de las 48 sílabas del alfabeto japonés tradicional. Las implacables curvas de Irohazaka y los rápidos cambios de elevación la han convertido en un icono de las carreras de touge, una aventura donde dominar la carretera es la clave del triunfo.",
        equipo_local:"Team Emperor",
        prefectura:["Tochigi"]  
    },
    {
        id: 10,
        nombre: "Tsukuba",
        nombre_japones: "筑波 (フルーツライン)",
        longitud: "3.0 km",
        tiempo_media: "5 min",
        imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/tsukuba.png",
        puntos_clave:"Varias horquillas, trazado técnico y estrecho, arcenes altos, cunetas descubiertas con vegetación",
        descripcion:"Distinguida por sus atributos únicos, la Fruits Line del Monte Tsukuba ofrece una experiencia de conducción cautivadora. Una serie de numerosas curvas cerradas exige precisión, mientras que el trazado técnico y estrecho de la carretera presenta un desafío que distingue a los más expertos del resto. La ruta está bordeada por arcenes elevados, creando un entorno envolvente que realza la experiencia de conducción. A lo largo de la carretera, las cunetas descubiertas y con vegetación realzan su carácter único. La Fruits Line de Tsukuba es un recorrido cautivador que combina destreza técnica, curvas intensas y un entorno inmersivo en una experiencia de conducción inolvidable.",
        equipo_local:"Purple Shadow",
        prefectura:["Ibaraki"] 
    },
    {
        id: 11,
        nombre: "Paso de Maze",
        nombre_japones: "間瀬峠",
        longitud: "3.2 km",
        tiempo_media: "13 min",
        imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/maze.png",
        puntos_clave:"Letrero de deslizamiento de tierra, tapas de drenaje metálicas, trazado de carretera estrecho y accidentado.",
        descripcion:"Al embarcarse en un viaje a través de la pintoresca extensión de Saitama, el Paso de Maze ofrece una invitación única. Este paso de montaña presenta un camino estrecho y accidentado con un trazado convencional que favorece a los coches pequeños. El desafío de la carretera se ve acentuado por una antigua señal de alerta de deslizamientos de tierra, que entrelaza la historia con el recorrido. A medida que los conductores recorren sus curvas, surge una intrincada danza entre la destreza y el terreno. El paso ofrece una inmersión única, donde el pulso de la conducción resuena en cada curva. El Paso de Maze invita a los conductores a sumergirse en su carácter, combinando historia, desafío y la emoción de conducir en una experiencia inolvidable.",
        equipo_local:"Alianza del Norte de Saitama",
        prefectura:["Saitama"] 
    },
    {
        id: 12,
        nombre: "Paso de Sadamine",
        nombre_japones: "定峰峠",
        longitud: "7.5 km",
        tiempo_media: "14 min",
        imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/sadamine.png",
        puntos_clave:"Casa de té de Touge, superficie rugosa/irregular",
        descripcion:"Sadamine, una huella de distinción, invita a los conductores a un viaje auténtico y cautivador. La Casa de Té de la Touge es un hito y un testimonio de la historia de la carretera. Su superficie irregular y accidentada desafía a los conductores, exigiendo una combinación de delicadeza y control. Al sortear sus curvas, la carretera se convierte en un escenario dinámico donde la habilidad se funde con el terreno. Sadamine captura la esencia pura de la conducción, ofreciendo una experiencia que resuena con cada bache y curva. Es una aventura que entrelaza la tradición, las condiciones de la carretera y la emoción de conducir en una historia automovilística sin adornos.",
        equipo_local:"Alianza del Norte de Saitama",
        prefectura:["Saitama"] 
    },
    {
        id: 13,
        nombre: "Paso de Shomaru",
        nombre_japones: "正丸峠",
        longitud: "5.6 km",
        tiempo_media: "11 min",
        imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/shomaru.png",
        puntos_clave:"Casa de té Okumura, esquinas estrechas y ciegas, subidas y bajadas pronunciadas alternadas",
        descripcion:"El Paso de Shomaru, una joya del automovilismo, invita a los conductores a conquistar su desafiante terreno. Conocido por su estrecho sendero y sus curvas ciegas, este viaje de touge exige una concentración inquebrantable. La icónica Casa de Té Okumura es testigo de cada ascenso y descenso. A medida que los conductores sortean curvas cerradas, alternando subidas y bajadas, la carretera se convierte en un intenso ballet de control y precisión. El Paso de Shomaru encapsula la esencia de las carreras de touge, donde cada curva es un testimonio de habilidad. Es un encuentro fascinante que entrelaza historia, exigencias técnicas y la emoción de la conducción en un inolvidable tapiz automovilístico.",
        equipo_local:"Ningun equipo reina este tramo.",
        prefectura:["Saitama"] 
    },
    {
        id: 14,
        nombre: "Paso de Yabitsu",
        nombre_japones: "ヤビツ峠",
        longitud: "7.2 km",
        tiempo_media: "14 min",
        imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/yabitsu.png",
        puntos_clave:"Convergencia abrupta de carriles, curvas estrechas y ciegas, curvas cerradas, mirador de Nanohana, denso bosque circundante",
        descripcion:"El paso de Yabitsu revela una cautivadora carretera de touge con características distintivas. Cabe destacar que la carretera presenta múltiples puntos de unión donde dos carriles se convierten repentinamente en uno, lo que requiere maniobras estratégicas. La estrecha carretera, con curvas ciegas y cerradas, exige una conducción precisa. A lo largo del camino, la plataforma de observación Nanohana ofrece vistas panorámicas tanto dentro como fuera del denso bosque que rodea el touge. Las características únicas de Yabitsu Touge crean una experiencia de conducción definida por sus exigencias técnicas y un entorno natural envolvente.",
        equipo_local:"Team 246",
        prefectura:["Kanagawa"] 
    },
    {
        id: 15,
        nombre: "Paso de Nagao",
        nombre_japones: "長尾峠",
        longitud: "7.1 km",
        tiempo_media: "11 min",
        imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/nagao.png",
        puntos_clave:"Equilibrio entre secciones anchas y estrechas, canaletas descubiertas, casa de té Fujimi, vistas del monte Fuji",
        descripcion:"Nagao, que se extiende por las prefecturas de Kanagawa y Shizuoka, es una joya del automovilismo, famosa por sus cualidades distintivas. Sus amplias y sinuosas carreteras ofrecen un escenario ideal tanto para el agarre como para el drifting, complementadas con una combinación de tramos estrechos y anchos. Las curvas técnicas exigen una conducción hábil, lo que supone un desafío dinámico para los entusiastas. Con una longitud de touge óptima, Nagao encapsula la esencia de una conducción emocionante. El nombre 'Nagao' proviene de las palabras japonesas 'naga', que significa 'largo', y 'o', que representa 'pendiente' o 'cola', reflejando fielmente su trazado extenso y ondulado.",
        equipo_local:"Katagiri",
        prefectura:["Kanagawa", "Shizuoka"] 
    },
    {
        id: 16,
        nombre: "Nanamagari",
        nombre_japones: "七曲り",
        longitud: "4.2 km",
        tiempo_media: "8 min",
        imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/nanamagari.png",
        puntos_clave:"12 horquillas consecutivas, pendiente pronunciada, ubicación remota, vistas del Monte Futago de dos picos",
        descripcion:"Nanamagari, una famosa ruta para conducir, combina desafíos técnicos con impresionantes vistas. A pesar de que su nombre significa 'siete curvas' en japonés, cuenta con doce horquillas consecutivas que definen su singularidad. Las pronunciadas subidas y bajadas de la carretera requieren una conducción experta. Durante el recorrido, podrá disfrutar de las vistas del Monte Futago, la montaña de dos picos. Antaño un lugar predilecto para los entusiastas del drifting, Nanamagari personificó el encanto de las carreras de drifting, guiado por una práctica rítmica: ascender en drifting, mantenerse en el carril y descender con gracia. Forma parte de la histórica Old Tōkaidō Road, que se extiende entre Hakone y Odawara, y ofrece tanto emoción al volante como belleza natural.",
        equipo_local:"Team Spiral",
        prefectura:["Kanagawa"] 
    },
    {
        id: 17,
        nombre: "Autopista de Hakone",
        nombre_japones: "箱根ターンパイク",
        longitud: "12.0 km",
        tiempo_media: "11 min",
        imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/hakone.png",
        puntos_clave:"Largas curvas, vistas del monte Fuji y la bahía de Sagami",
        descripcion:"La autopista de peaje de Hakone es una famosa carretera de montaña ubicada en la región de Hakone, Japón. Esta icónica autopista ofrece a los conductores una emocionante experiencia paisajística al recorrer sus curvas. Con sus cautivadoras curvas, impresionantes panoramas y espectaculares vistas del Monte Fuji en días despejados, la autopista de peaje de Hakone se ha convertido en un destino predilecto tanto para los entusiastas de las autopistas como para los amantes de la naturaleza. La carretera de aproximadamente 12 kilómetros serpentea a través de los paisajes más pintorescos de la región, ofreciendo una inolvidable aventura al volante. Ya sea por la emoción de la carretera o por la fascinante belleza natural, la autopista de peaje de Hakone promete una experiencia inolvidable para quienes buscan un viaje extraordinario.",
        equipo_local:"Ningun equipo reina este tramo.",
        prefectura:["Kanagawa"] 
    },
    {
        id: 18,
        nombre: "Tsubaki Line",
        nombre_japones: "椿ライン",
        longitud: "13.1 km",
        tiempo_media: "20 min",
        imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/tsubaki.png",
        puntos_clave:"Combinación de rectas y curvas técnicas, cambios de elevación, canaletas descubiertas, mirador de Tsubakidai, vistas del área de Fuji-Hakone",
        descripcion:"Tsubaki Line destaca por ser una carretera dinámica y dinámica, con una cautivadora fusión de elementos. Su trazado combina a la perfección rectas y curvas técnicas, garantizando una conducción emocionante. Los cambios de elevación añaden un nivel extra de emoción, exigiendo precisión en el control. Mientras conduces, las cunetas descubiertas de la carretera te mantienen alerta. El Mirador Tsubakidai ofrece una pausa escénica, revelando vistas panorámicas de la zona de Fuji-Hakone. Con su combinación de desafíos y paisajes impresionantes, Tsubaki Line promete una experiencia de conducción inolvidable para los entusiastas que buscan emociones fuertes y belleza natural.",
        equipo_local:"Sidewinder",
        prefectura:["Kanagawa"] 
    }
]


app.get("/api/tramos", (req, res) => {
    try {
        // Extraemos los parámetros de la query
        const { nombre, nombre_japones, longitud, tiempo_media, imagen, puntos_clave, descripcion, equipo_local, prefectura } = req.query;

        let pistasFiltradas = tramos;

        if (nombre) {
            const nombres = nombre.split(",").map(n => n.trim().toLowerCase());
            pistasFiltradas = pistasFiltradas.filter(pista => 
                nombres.some(n => pista.nombre.toLowerCase().includes(n))
            );
        }

        if (nombre_japones) {
            const nombresJaponeses = nombre_japones.split(",").map(n => n.trim().toLowerCase());
            pistasFiltradas = pistasFiltradas.filter(pista => 
                nombresJaponeses.some(n => pista.nombre_japones.toLowerCase().includes(n))
            );
        }

        if (longitud) {
            const longitudes = longitud.split(",").map(l => parseFloat(l.trim()));
            pistasFiltradas = pistasFiltradas.filter(pista => longitudes.includes(pista.longitud));
        }

        if (tiempo_media) {
            const tiempos = tiempo_media.split(",").map(t => parseFloat(t.trim()));
            pistasFiltradas = pistasFiltradas.filter(pista => tiempos.includes(pista.tiempo_media));
        }

        if (imagen) {
            const imagenes = imagen.split(",").map(i => i.trim().toLowerCase());
            pistasFiltradas = pistasFiltradas.filter(pista => 
                imagenes.some(i => pista.imagen.toLowerCase().includes(i))
            );
        }

        if (puntos_clave) {
            const puntos = puntos_clave.split(",").map(p => p.trim().toLowerCase());
            pistasFiltradas = pistasFiltradas.filter(pista => 
                puntos.some(p => pista.puntos_clave.toLowerCase().includes(p))
            );
        }

        if (descripcion) {
            const descripciones = descripcion.split(",").map(d => d.trim().toLowerCase());
            pistasFiltradas = pistasFiltradas.filter(pista => 
                descripciones.some(d => pista.descripcion.toLowerCase().includes(d))
            );
        }

        if (equipo_local) {
            const equipos = equipo_local.split(",").map(e => e.trim().toLowerCase());
            pistasFiltradas = pistasFiltradas.filter(pista => 
                equipos.some(e => pista.equipo_local.toLowerCase().includes(e))
            );
        }

        if (prefectura) {
            const prefecturas = prefectura.split(",").map(p => p.trim().toLowerCase());
            pistasFiltradas = pistasFiltradas.filter(pista => 
                Array.isArray(pista.prefectura) 
                    ? pista.prefectura.some(p => prefecturas.includes(p.toLowerCase()))
                    : prefecturas.includes(pista.prefectura.toLowerCase())
            );
        }

        res.json(pistasFiltradas);
    } catch (error) {
        console.error("Error en la API de tramos:", error);
        res.status(500).json({ error: "Error interno en el servidor" });
    }
});


// FALTAN FOTOGRAFÍAS


const pilotos = [
    {
        id: 1,
        nombre: "Takumi Fujiwara",
        nombre_japones: "藤原 拓海",
        marca: "Toyota",
        modelo: "Spriter Trueno GT-APEX (AE86)",
        imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/takumi.png",
        descripcion:"Takumi Fujiwara es el protagonista de Initial D, un joven tranquilo e introvertido que desarrolla un talento excepcional para las carreras callejeras sin siquiera darse cuenta. Trabaja en una estación de servicio y reparte tofu para la tienda de su padre en el legendario Toyota AE86 Sprinter Trueno, lo que sin saberlo, lo convierte en un conductor increíblemente hábil en los descensos del Paso de Akina.",
        equipo:["Akina SpeedStars", "Project D"] 
    },
    // {
    //     id: 2,
    //     nombre: "Eikichi Shimamura",
    //     nombre_japones: "藤原 拓海",
    //     marca: "Nissan",
    //     modelo: "Skyline GT-R V-Spec II (BNR32)",
    //     //imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/akina.png",
    //     descripcion:"Eikichi Shimamura es el carismático y orgulloso líder de los Hakone Thunder Soldiers, un equipo de carreras callejeras especializado en enfrentamientos en las desafiantes rutas de Hakone. Con una personalidad fuerte y un estilo de conducción agresivo, es un rival formidable para Project D y un firme creyente en la superioridad de la tracción en las cuatro ruedas (4WD).",
    //     equipo:["Hakone Thunder Soldiers"] 
    // },
    {
        id: 3,
        nombre: "Takeshi Nakazato",
        nombre_japones: "中里 毅",
        marca: "Nissan",
        modelo: "Skyline GT-R V-Spec II (BNR32)",
        imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/takeshi.png",
        descripcion:"Takeshi Nakazato es el líder de los Myogi NightKids, un equipo de corredores callejeros especializado en carreras de alta velocidad y agarre. Es un piloto serio y determinado, con un fuerte orgullo por los autos de tracción integral (AWD) y un enfoque en la estabilidad sobre el derrape. Aunque inicialmente subestima a Takumi Fujiwara, con el tiempo desarrolla un gran respeto por él y por otros pilotos con talento puro.",
        equipo:["NightKids"] 
    },
    // {
    //     id: 4,
    //     nombre: "Shinji Inui",
    //     nombre_japones: "乾 信司",
    //     marca: "Toyota",
    //     modelo: "Spriter Trueno GT-APEX (AE86)",
    //     //imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/akina.png",
    //     descripcion:"Shinji Inui es un joven piloto prodigio que compite para Team Sidewinder, un equipo de carreras de élite en Initial D Final Stage. A pesar de su edad y apariencia inocente, es un conductor increíblemente talentoso y un rival digno para Takumi Fujiwara. Su conexión con los caminos de Kanagawa y su habilidad innata lo convierten en una amenaza formidable en las carreras de downhill.",
    //     equipo:["Sidewinder"] 
    // },
    {
        id: 5,
        nombre: "Shingo Shoji",
        nombre_japones: "庄司 慎吾",
        marca: "Honda",
        modelo: "Civic SiR-II (EG6)",
        imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/shingo.png",
        descripcion:"Shingo Shoji es uno de los pilotos más agresivos de Initial D y miembro destacado de los Myogi NightKids, donde actúa como el segundo al mando después de Takeshi Nakazato. Es conocido por su estilo de conducción temerario y sucio, a menudo usando tácticas desleales para ganar. Su actitud arrogante y su desprecio por las habilidades de sus oponentes lo convierten en uno de los rivales más problemáticos.",
        equipo:["NightKids"] 
    },
    {
        id: 6,
        nombre: "Ryosuke Takahashi",
        nombre_japones: "高橋 涼介",
        marca: "Mazda",
        modelo: "SAVANNA RX-7 ∞ III (FC3S)",
        imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/ryosuke.png",
        descripcion:"Ryosuke Takahashi es el fundador y líder de los Akagi RedSuns y el cerebro detrás de Project D. Es conocido como el 'Cometa Blanco de Akagi', debido a su estilo de conducción analítico y su capacidad para formular estrategias ganadoras. Aunque en el pasado fue considerado el mejor corredor callejero de Gunma, se retira de las carreras individuales para enfocarse en la gestión de Project D, con el objetivo de crear a los pilotos más rápidos de Japón.",
        equipo:["Akagi Redsuns", "Project D"] 
    },
    {
        id: 7,
        nombre: "Mako Sato",
        nombre_japones: "佐藤 真子",
        marca: "Nissan",
        modelo: "SilEighty",
        imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/mako.png",
        descripcion:"Mako Sato es la talentosa y carismática piloto del equipo Impact Blue, junto con su copiloto Sayuki. Es una experta en carreras de downhill y una de las pocas corredoras femeninas en Initial D. Conocida por su estilo de conducción fluido y agresivo, domina el paso de montaña de Usui, aprovechando al máximo la tracción y estabilidad de su Nissan Sileighty.",
        equipo:["Impact Blue"] 
    },
    {
        id: 8,
        nombre: "Kyoichi Sudo",
        nombre_japones: "須藤 京",
        marca: "Mitsubishi",
        modelo: "Lancer Evolution III GSR (CE9A)",
        imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/kyoichi.png",
        descripcion:"Kyoichi Sudo es el líder del Team Emperor, un equipo de corredores callejeros compuesto exclusivamente por Mitsubishi Lancer Evolution (Evos). Es un piloto extremadamente técnico, con un enfoque implacable en la conducción de agarre (grip racing). Su mentalidad calculadora y su confianza absoluta en los autos AWD lo convierten en uno de los rivales más formidables de Initial D.",
        equipo:["Team Emperor"] 
    },
    {
        id: 9,
        nombre: "Kenji",
        nombre_japones: "健二",
        marca: "Nissan",
        modelo: "180SX Type II",
        imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/kenji.png",
        descripcion:"Kenji es uno de los pilotos principales de los Akina SpeedStars, el equipo local de carreras en el Monte Akina. Aunque no es tan destacado como su líder Iketani o el prodigio Takumi Fujiwara, es un corredor experimentado y confiable dentro del grupo. A pesar de su bajo perfil, es un apasionado del automovilismo y siempre está presente para apoyar a su equipo.",
        equipo:["Akina SpeedStars"] 
    },
    {
        id: 10,
        nombre: "Keisuke Takahashi",
        nombre_japones: "高橋 啓介",
        marca: "Mazda",
        modelo: "RX-7 Type R (FD3S)",
        imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/keisuke.png",
        descripcion:"Keisuke Takahashi es uno de los personajes más complejos de Initial D, conocido tanto por su gran habilidad al volante como por su personalidad apasionada y algo impulsiva. Es el hermano menor de Ryosuke Takahashi y uno de los pilotos principales de Project D, el equipo fundado por su hermano para desafiar a los mejores corredores de todo Japón. A lo largo de la serie, Keisuke pasa de ser un piloto agresivo y algo inmaduro a un corredor más refinado y estratégico, inspirado por la evolución de su hermano y la relación con su principal rival, Takumi Fujiwara.",
        equipo:["Akagi Redsuns", "Project D"] 
    },
    // {
    //     id: 11,
    //     nombre: "Go Hojo",
    //     nombre_japones: "北条 豪",
    //     marca: "Honda",
    //     modelo: "NSX",
    //     //imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/akina.png",
    //     descripcion:"Go Hojo es el líder de Sidewinder, un equipo de carreras callejeras que se especializa en carreras uphill. Con una gran habilidad técnica y un enfoque en la precisión, Go es conocido por su conducción calculadora y eficiente. Su objetivo es superar a todos sus rivales, especialmente a los equipos más establecidos como Project D y Emperor, con un enfoque meticuloso en las carreras de subida (uphill), donde su control del automóvil es clave.",
    //     equipo:["Sidewinder"]
    // },
    {
        id: 12,
        nombre: "Daiki Ninomiya",
        nombre_japones: "二宮 大輝",
        marca: "Honda",
        modelo: "Civic Type R (EK9)",
        imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/daiki.png",
        descripcion:"Daiki Ninomiya es un estudiante de la prestigiosa Escuela Todo, conocida por formar a algunos de los pilotos más hábiles y estratégicos en el mundo de las carreras. Ninomiya es uno de los jóvenes talentos de la escuela y un piloto de gran habilidad, aunque su arrogancia y actitud altanera lo convierten en un personaje controvertido dentro del universo de Initial D.",
        equipo:["Todo School"] 
    },
    {
        id: 13,
        nombre: "Bunta Fujiwara ",
        nombre_japones: "藤原 文太",
        marca: "Subaru",
        modelo: "Impreza WRX STi Coupe Type R Version V (GC8F)",
        imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/bunta.png",
        descripcion:"Bunta Fujiwara es el padre de Takumi Fujiwara, el protagonista de Initial D, y propietario de una tienda de tofu en la prefectura de Gunma. Aunque su apariencia tranquila y su vida aparentemente común como dueño de un negocio familiar podrían hacerle parecer ordinario, Bunta es un hombre increíblemente astuto y experimentado con un profundo conocimiento de las carreras de coches. Su relación con Takumi es en gran parte silenciosa, pero su influencia sobre él es profunda. Bunta no solo es un padre, sino también un mentor indirecto para su hijo, ayudándolo a desarrollar su increíble habilidad de conducción sin una enseñanza formal.",
        equipo:["No participa en ningún equipo."] 
    },
    {
        id: 14,
        nombre: "Wataru Akiyama",
        nombre_japones: "秋山 渉",
        marca: "Toyota",
        modelo: "Corolla Levin GT-APEX (AE86)",
        imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/wataru.png",
        descripcion:"Wataru Akiyama es un corredor callejero de la Prefectura de Saitama, conocido por su habilidad técnica y su enfoque meticuloso en las carreras. Es un piloto con más experiencia que muchos de sus rivales en Initial D, lo que lo hace un competidor formidable en cualquier enfrentamiento. A diferencia de los corredores más impulsivos, Ataru prefiere analizar a sus oponentes y la pista antes de hacer movimientos decisivos, lo que le da una ventaja estratégica en las carreras de montaña.",
        equipo:["Alianza del Norte de Saitama"] 
    },
    // {
    //     id: 15,
    //     nombre: "Satoshi Omiya",
    //     nombre_japones: "大宮 智史",
    //     marca: "Mazda",
    //     modelo: "Roadster RS ",
    //     //imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/akina.png",
    //     descripcion:"Satoshi Omiya es el líder y representante del downhill de Team 246, un equipo de corredores callejeros de alto nivel en Initial D. Es un piloto con una gran confianza en sus habilidades y un estilo de conducción agresivo, pero con una mentalidad estratégica que lo convierte en un rival difícil de vencer. Su equipo, Team 246, es conocido por su enfoque serio en las carreras y por desafiar a algunos de los mejores corredores de Japón.",
    //     equipo:["Team 246"] 
    // },
    // {
    //     id: 16,
    //     nombre: "Rin Hojo",
    //     nombre_japones: "北条 凛",
    //     marca: "Nissan",
    //     modelo: "Skyline GT-R V-Spec II (BNR32)",
    //     //imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/akina.png",
    //     descripcion:"Rin Hojo es un personaje misterioso, intimidante y temido en la escena de las carreras callejeras, conocido como el 'Grim Reaper'. Con a su estilo de conducción brutal y su implacable actitud en la pista. Es el hermano mayor de Go Hojo, líder de Sidewinder, y aunque ambos son pilotos excepcionales, sus enfoques hacia las carreras y la vida en general son completamente diferentes.",
    //     equipo:["No participa en ningún equipo."] 
    // },
    // {
    //     id: 17,
    //     nombre: "Ryuji Ikeda",
    //     nombre_japones: "池田 竜次",
    //     marca: "Nissan",
    //     modelo: "Fairlady Z Version S",
    //     //imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/akina.png",
    //     descripcion:"Ryuji Ikeda es el líder de Team Spiral, un equipo de corredores callejeros conocidos por su enfoque técnico y preciso en las carreras. Su equipo se especializa en maniobras avanzadas y en la maximización del agarre en curvas, lo que los hace especialmente fuertes en trazados difíciles. Ikeda es un piloto extremadamente calculador y disciplinado, que confía más en la teoría de la conducción y la ciencia automotriz que en el instinto puro",
    //     equipo:["Team Spiral"] 
    // },
    {
        id: 18,
        nombre: "Koichiro Iketani",
        nombre_japones: "池谷 浩一郎",
        marca: "Nissan",
        modelo: "Silvia K's",
        imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/koichiro.png",
        descripcion:"Koichiro Iketani es el líder de los Akina SpeedStars, un equipo de corredores locales que compiten en el Monte Akina. A pesar de su posición como líder, Iketani no es el piloto más talentoso de la serie, y a menudo se siente inseguro sobre sus propias habilidades. Sin embargo, su determinación y amor por las carreras lo convierten en un personaje carismático y entrañable.",
        equipo:["Akina SpeedStars"] 
    },
    // {
    //     id: 19,
    //     nombre: "Kobayakawa",
    //     nombre_japones: "小早川",
    //     marca: "Mitsubishi",
    //     modelo: "Lancer Evolution VII GSR (CT9A)",
    //     //imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/akina.png",
    //     descripcion:"Kobayakawa es el piloto de uphill (subida) de Team 246, un equipo conocido por su enfoque agresivo y su dominio en carreteras exigentes. Como especialista en uphill, su estilo de conducción se centra en la aceleración, la potencia y la tracción, aprovechando al máximo cada recta y salida de curva para mantener la velocidad. Aunque no es tan famoso como otros corredores en Initial D, su habilidad en subidas lo convierte en un oponente desafiante en su terreno.",
    //     equipo:["Team 246"] 
    // },
    // {
    //     id: 20,
    //     nombre: "Ken Kogashiwa",
    //     nombre_japones: "小柏 健",
    //     marca: "Toyota",
    //     modelo: "MR2 G-Limited (SW20)",
    //     //imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/akina.png",
    //     descripcion:"Ken Kogashiwa es un veterano corredor callejero y el padre de Kai Kogashiwa, conocido por ser el eterno rival de Bunta Fujiwara. Ambos compartieron una juventud marcada por las carreras en los pasos de montaña, donde se enfrentaron en múltiples ocasiones, consolidando una rivalidad legendaria. Aunque ya no compite activamente, su legado vive a través de su hijo Kai, a quien ha entrenado con una filosofía similar a la de Bunta con Takumi.",
    //     equipo:["No participa en ningún equipo."] 
    // },
    {
        id: 21,
        nombre: "Kai Kogashiwa",
        nombre_japones: "小柏 カイ",
        marca: "Toyota",
        modelo: "MR-S S-Edition (ZZW30)",
        imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/kai.png",
        descripcion:"Kai Kogashiwa es un talentoso corredor callejero de la prefectura de Tochigi y el hijo de Ken Kogashiwa, uno de los rivales más legendarios de Bunta Fujiwara. Siguiendo los pasos de su padre, Kai se ha convertido en un corredor formidable, con un estilo de conducción que combina técnica agresiva, control del vehículo y una estrategia calculada.",
        equipo:["Katagiri"] 
    },
    // {
    //     id: 22,
    //     nombre: "Hideo Minagawa",
    //     nombre_japones: "皆川 英雄",
    //     marca: "Toyota",
    //     modelo: "Supra RZ",
    //     //imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/akina.png",
    //     descripcion:"Hideo Minagawa es un piloto profesional y miembro del equipo Katagiri, un grupo de corredores altamente calificados que representan un nivel superior dentro del mundo de Initial D. A diferencia de muchos pilotos callejeros, Hideo tiene experiencia en competencias reales, lo que le otorga una ventaja significativa en cuanto a técnica, precisión y conocimiento del automovilismo.",
    //     equipo:["Katagiri"] 
    // },
    // {
    //     id: 23,
    //     nombre: "Hiroya Okuyama",
    //     nombre_japones: "奥山 広也",
    //     marca: "Nissan",
    //     modelo: "Silvia Spec R Aero (S15)",
    //     //imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/akina.png",
    //     descripcion:"Hiroya Okuyama es un habilidoso corredor y miembro de Team Spiral, un equipo que se distingue por su enfoque en técnicas avanzadas de conducción y estrategias poco convencionales. Es un piloto altamente analítico, que prefiere desgastar mentalmente a sus oponentes antes de vencerlos en la carretera. Su estilo de conducción no solo se basa en velocidad y control, sino también en jugar con la psicología de sus rivales, empujándolos a cometer errores.",
    //     equipo:["Team Spiral"] 
    // },
    {
        id: 24,
        nombre: "Itsuki Takeuchi",
        nombre_japones: "武内 樹",
        marca: "Toyota",
        modelo: "Corolla Levin SR (AE85)",
        imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/itsuki.png",
        descripcion:"Itsuki Takeuchi es el mejor amigo de Takumi Fujiwara y uno de los miembros más conocidos del Akina SpeedStars, un equipo de corredores relativamente novatos en comparación con otros equipos más experimentados de Initial D. Aunque Itsuki no tiene el mismo talento natural para las carreras que su amigo Takumi, es un piloto apasionado y determinado, que se dedica al mundo de las carreras con gran entusiasmo y ganas de aprender.",
        equipo:["Akina SpeedStars"] 
    },
    // {
    //     id: 25,
    //     nombre: "Toshiya Joshima",
    //     nombre_japones: "城島 俊也",
    //     marca: "Honda",
    //     modelo: "S2000",
    //     //imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/akina.png",
    //     descripcion:"Toshiya Joshima es uno de los principales miembros de Purple Shadow, un equipo de élite basado en Tsukuba que se especializa en carreras de alta velocidad y estrategias complejas. Es un corredor extremadamente experimentado y hábil, conocido por su enfoque preciso y meticuloso en cada carrera. Joshima se caracteriza por su mentalidad calculadora y su capacidad para mantener el control incluso en situaciones de alta presión.",
    //     equipo:["Purple Shadow"] 
    // },
    {
        id: 26,
        nombre: "Toru Suetsugu",
        nombre_japones: "末次 トオル",
        marca: "Mazda",
        modelo: "Eunos Roadster",
        imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/toru.png",
        descripcion:"Toru Suetsugu es un piloto temerario y arriesgado que representa al equipo Seven Star Leaf, basado en la Momiji Line. Conocido por su estilo de conducción extremadamente arriesgado, Toru se enfrenta a sus rivales con una estrategia kamikaze, lo que lo convierte en uno de los corredores más impredecibles y temidos en el circuito de carreras callejeras. Su habilidad para tomar curvas a velocidades extremas y su falta de miedo ante el peligro lo hacen sobresalir, aunque su estilo lo pone constantemente al borde del desastre.",
        equipo:["Seven Star Leaf"] 
    },
    {
        id: 27,
        nombre: "Tomoyuki Tachi",
        nombre_japones: "舘 智幸",
        marca: "Honda",
        modelo: "Todo School Spoon Civic Type R Demo Car (EK9)",
        imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/tomoyuki.png",
        descripcion:"Tomoyuki Tachi es un piloto profesional y graduado de la renombrada Todo School, una institución conocida por formar a algunos de los corredores más talentosos y técnicos de Initial D. Tachi representa la culminación de una formación rigurosa y disciplina en el manejo de vehículos, habiendo perfeccionado sus habilidades para enfrentarse a los mejores corredores. Su experiencia y conocimiento técnico lo convierten en un competidor formidable en cualquier pista, especialmente en carreras de alto nivel.",
        equipo:["Todo School"] 
    },
    {
        id: 28,
        nombre: "'Smiley' Sakai",
        nombre_japones: "スマイリー 酒井",
        marca: "Honda",
        modelo: "Integra Type R (DC2)",
        imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/smiley.png",
        descripcion:"Smiley Sakai es un estudiante destacado de la Todo School, conocido tanto por su habilidad en las carreras como por su actitud alegre y optimista. Aunque está en las etapas de su formación, Sakai ya muestra un gran potencial como piloto gracias a su fuerte base técnica y su capacidad para adaptarse a diversas situaciones en las pistas. Su estilo de conducción refleja su enfoque positivo y su disposición a aprender, lo que lo convierte en un talento prometedor en el mundo de las carreras callejeras.",
        equipo:["Todo School"] 
    },
    {
        id: 29,
        nombre: "Sakamoto",
        nombre_japones: "坂本",
        marca: "Suzuki",
        modelo: "Cappuccino ",
        imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/sakamoto.png",
        descripcion:"Sakamoto es un piloto profesional de rally que se une al Northern Saitama Alliance para enfrentarse a Project D en sus batallas en la carretera. Con una gran experiencia en el rally, Sakamoto trae consigo un conjunto único de habilidades que lo hacen destacar en las carreras, especialmente en condiciones difíciles y desafiantes. Su habilidad para manejar vehículos en terrenos irregulares y condiciones extremas lo convierte en un valioso miembro para el Northern Saitama Alliance, un equipo que busca utilizar su destreza para derrotar a Project D en carreras clave.",
        equipo:["Alianza del Norte de Saitama"] 
    },
    {
        id: 30,
        nombre: "Nobuhiko Akiyama",
        nombre_japones: "秋山 延彦",
        marca: "Toyota",
        modelo: "Altezza RS200 Z Edition (SXE10)",
        imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/nobuhiko.png",
        descripcion:"Nobuhiko Akiyama es el líder del Northern Saitama Alliance, un equipo de carreras que se enfrenta a rivales como Project D en las intensas batallas de Initial D. Con un enfoque estratégico y calculador, Nobuhiko es conocido por su habilidad para coordinar a su equipo y crear planes de carrera que aprovechan las fortalezas de cada uno de sus miembros. Es un líder nato que, a pesar de no ser tan emocionalmente expresivo como otros, tiene una gran capacidad para tomar decisiones bajo presión.",
        equipo:["Alianza del Norte de Saitama"] 
    },
    {
        id: 31,
        nombre: "Kyoko Iwase",
        nombre_japones: "岩瀬 恭子",
        marca: "Mazda",
        modelo: "Efini RX-7 Type R (FD3S)",
        imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/kyoko.png",
        descripcion:"Kyoko Iwase es una de las pilotos más rápidas en el universo de Initial D, inicialmente conocida por su rol como representante de subida del equipo no nombrado de Sadamine. Con un talento natural para la velocidad, Kyoko se distingue en las subidas de montaña, donde su habilidad para mantener el control y velocidad la convierte en una competidora formidable. Su carácter y destreza como conductora la llevan a formar parte más tarde del Northern Saitama Alliance, donde su habilidad para acelerar en terrenos desafiantes le da una ventaja en las batallas contra equipos como Project D.",
        equipo:["Alianza del Norte de Saitama"] 
    },
    // {
    //     id: 32,
    //     nombre: "Kozo Hoshino",
    //     nombre_japones: "星野 好造",
    //     marca: "Nissan",
    //     modelo: "Skyline GT-R V-Spec II Nür (BNR34)",
    //     //imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/akina.png",
    //     descripcion:"Kozo Hoshino es uno de los miembros más destacados del equipo Purple Shadow, un equipo de carreras basado en Tsukuba. Junto a Toshiya Joshima, Kozo es conocido por ser un piloto extremadamente talentoso que ha demostrado su habilidad en algunas de las competencias más difíciles y con los rivales más formidables. Su estilo de conducción está marcado por una gran técnica y una enorme capacidad de adaptación, lo que lo convierte en una de las figuras más temidas en las competiciones en Tsukuba. Además de ser un excelente piloto, Kozo también es conocido por su enfoque serio y profesional dentro de las carreras, lo que le ha valido el respeto tanto de sus compañeros como de sus rivales.",
    //     equipo:["Purple Shadow"] 
    // },
    {
        id: 33,
        nombre: "Kenta Nakamura",
        nombre_japones: "中村 賢太",
        marca: "Nissan",
        modelo: "Silvia Q's (S14)",
        imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/kenta.png",
        descripcion:"Kenta Nakamura es uno de los miembros más jóvenes y prometedores de los Akagi RedSuns, el equipo de carreras fundado por Ryosuke Takahashi y formado principalmente por corredores excepcionales de la región de Akagi. A pesar de su juventud, Kenta es conocido por su habilidad al volante y su actitud decidida, cualidades que le permiten destacar dentro de un equipo tan competitivo y de alto nivel como los RedSuns. Si bien está en las primeras etapas de su carrera como piloto, Kenta tiene un gran potencial y su desarrollo en las carreras es algo que los miembros más experimentados del equipo observan con mucho interés.",
        equipo:["Akagi Redsuns", "Project D"] 
    },
    {
        id: 34,
        nombre: "Ichijo",
        nombre_japones: "一条",
        marca: "Mitsubishi",
        modelo: "Lancer Evolution VI GSR Tommi Makinen Edition (CP9A)",
        imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/ichijo.png",
        descripcion:"Ichijo es el piloto de descenso del equipo Tsuchisaka Lancer Evolution, conocido por su dominio excepcional de las carreras de montaña y su habilidad única para manejar el imponente Mitsubishi Lancer Evolution, uno de los autos más temidos y respetados en las carreras de descenso. A pesar de no ser uno de los personajes más prominentes dentro del universo de Initial D, su habilidad con el Lancer Evolution y su estilo de conducción agresivo y preciso lo convierten en un piloto formidable en su propia categoría. Su personalidad, aunque menos expresiva que la de otros personajes más conocidos, está marcada por una intensa dedicación a su oficio y un fuerte deseo de alcanzar la perfección en cada carrera.",
        equipo:["Tsuchisaka Lancer Evolution Team"] 
    },
    {
        id: 35,
        nombre: "Atsuro Kawai",
        nombre_japones: "川井 淳郎",
        marca: "Nissan",
        modelo: "Skyline 25GT Turbo (ER34)",
        imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/atsuo.png",
        descripcion:"Atsuro Kawai es un experimentado piloto de hillclimb y el líder del equipo Seven Star Leaf, basado en Tochigi, conocido por su habilidad en las carreras de subida y por ser un competidor extremadamente decidido y calculador. A lo largo de su carrera, ha demostrado ser un líder natural, dirigiendo a su equipo con una mezcla de estrategia inteligente y un enfoque agresivo que lo convierte en una amenaza en las competencias de montaña.",
        equipo:["Seven Star Leaf"] 
    },
    {
        id: 36,
        nombre: "Aikawa",
        nombre_japones: "会川",
        marca: "Mitsubishi",
        modelo: "Lancer Evolution V GSR (CP9A)",
        imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/aikawa.png",
        descripcion:"Aikawa es un talentoso y determinado piloto uphill del equipo Tsuchisaka Lancer Evolution, un equipo especializado en carreras de montaña que se caracteriza por sus vehículos Lancer Evolution, diseñados para maximizar el rendimiento en terrenos difíciles. Aikawa se especializa en las carreras de ascenso en colinas empinadas y carreteras de montaña, donde su habilidad para manejar las exigencias de estos circuitos es fundamental para su equipo.",
        equipo:["Tsuchisaka Lancer Evolution Team"] 
    },
    {
        id: 37,
        nombre: "Miki",
        nombre_japones: "御木",
        marca: "Toyota",
        modelo: "Celica GT-Four",
        imagen: "https://raw.github.com/A1EXS95/initiald-api-img/main/img/miki.png",
        descripcion:"Miki es un personaje que aparece en la historia de Initial D como el ex-novio de Natsuki Mogi, quien es un personaje significativo en la vida de Takumi Fujiwara. Miki es un joven con una personalidad despreocupada y un carácter algo provocador, que destaca principalmente por su relación con Natsuki en el pasado. Aunque su presencia en la historia no es tan prominente como la de otros personajes principales, su vínculo con Natsuki y su comportamiento en ciertas situaciones lo convierten en una figura interesante dentro del contexto de la serie.",
        equipo:["No participa en ningún equipo."]  
    },

]


app.get("/api/pilotos", (req, res) => {
    try {
        // Extraemos los parámetros de la query
        const { nombre, nombre_japones, marca, modelo, imagen, descripcion, equipo } = req.query;

        let pilotosFiltrados = pilotos; // Usamos el array correcto

        if (nombre) {
            const nombres = nombre.split(",").map(n => n.trim().toLowerCase());
            pilotosFiltrados = pilotosFiltrados.filter(piloto => 
                nombres.some(n => piloto.nombre.toLowerCase().includes(n))
            );
        }

        if (nombre_japones) {
            const nombresJaponeses = nombre_japones.split(",").map(n => n.trim().toLowerCase());
            pilotosFiltrados = pilotosFiltrados.filter(piloto => 
                nombresJaponeses.some(n => piloto.nombre_japones.toLowerCase().includes(n))
            );
        }

        if (marca) {
            const marcas = marca.split(",").map(m => m.trim().toLowerCase());
            pilotosFiltrados = pilotosFiltrados.filter(piloto => 
                marcas.some(m => piloto.marca.toLowerCase().includes(m))
            );
        }

        if (modelo) {
            const modelos = modelo.split(",").map(m => m.trim().toLowerCase());
            pilotosFiltrados = pilotosFiltrados.filter(piloto => 
                modelos.some(m => piloto.modelo.toLowerCase().includes(m))
            );
        }

        if (imagen) {
            const imagenes = imagen.split(",").map(i => i.trim().toLowerCase());
            pilotosFiltrados = pilotosFiltrados.filter(piloto => 
                imagenes.some(i => piloto.imagen.toLowerCase().includes(i))
            );
        }

        if (descripcion) {
            const descripciones = descripcion.split(",").map(d => d.trim().toLowerCase());
            pilotosFiltrados = pilotosFiltrados.filter(piloto => 
                descripciones.some(d => piloto.descripcion.toLowerCase().includes(d))
            );
        }

        if (equipo) {
            const equipos = equipo.split(",").map(e => e.trim().toLowerCase());
            pilotosFiltrados = pilotosFiltrados.filter(piloto => 
                piloto.equipo.some(e => equipos.includes(e.toLowerCase()))
            );
        }

        res.json(pilotosFiltrados);
    } catch (error) {
        console.error("Error en la API de pilotos:", error);
        res.status(500).json({ error: "Error interno en el servidor" });
    }
});




















































const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API corriendo en http://localhost:${PORT}`));
