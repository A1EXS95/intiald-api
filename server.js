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
        title: "Initial D API",
        version: "1.0.0",
        description: "API con información sobre los coches de Initial D",
      },
    },
    apis: ["server.js"],
  };
  
  const swaggerDocs = swaggerJsDoc(swaggerOptions);
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));



const cars = [
    {
        id: 1,
        marca: "Nissan",
        modelo: "Skyline GT-R R32",
        piloto: "Eikichi Shimamura",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/3/3b/Nakazato_vs_the_R32.png"
    },
    {
        id: 2,
        marca: "Toyota",
        modelo: "Corolla Levin SR (AE85)",
        piloto: "Itsuki Takeuchi",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/7/74/Levin_85_Ch110.png"
    },
    {
        id: 3,
        marca: "Mazda",
        modelo: "RX-7 Type R FD3S",
        piloto: "Keisuke Takahashi",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/c/c5/Keisuke_Redsuns_Spec_I_Manga.png"
    },
    {
        id: 4,
        marca: "Nissan",
        modelo: "180SX Type II",
        piloto: "Kenji",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/5/5d/Nissan_180SX_Ch018.png"
    },
    {
        id: 5,
        marca: "Nissan",
        modelo: "Silvia s14",
        piloto: "Kenta Nakamura",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/b/ba/RedSuns_Kenta_S14_Manga.png"
    },
    {
        id: 6,
        marca: "Nissan",
        modelo: "Silvia s13",
        piloto: "Koichiro Iketani",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/d/d3/S13_Manga.png"
    },
    {
        id: 7,
        marca: "Nissan",
        modelo: "SilEighty",
        piloto: "Mako Sato",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/5/5b/Impact_Blue_Sil80_Manga.png"
    },
    {
        id: 8,
        marca: "Mazda",
        modelo: "Savanna RX-7 FC3S",
        piloto: "Ryosuke Takahashi",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/6/60/Ryosuke_Redsuns_Spec_I_manga.png"
    },
    {
        id: 9,
        marca: "Honda",
        modelo: "Civic SIR-II (EG6)",
        piloto: "Shingo Shoji",
        traccion: "FWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/6/69/Shingo_Civic_EG6_Manga.png"
    },
    {
        id: 10,
        marca: "Nissan",
        modelo: "Silvia s13",
        piloto: "Takeshi Nakazato",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/0/08/Nakazato%27s_S13.PNG"
    },
    {
        id: 11,
        marca: "Nissan",
        modelo: "Skyline GT-R R32",
        piloto: "Takeshi Nakazato",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/8/85/Nightkids_R32_manga.png"
    },
    {
        id: 12,
        marca: "Toyota",
        modelo: "Spriter Trueno GT_APEX (AE86)",
        piloto: "Takumi Fujiwara",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/f/f2/AE86T_Spec_III_Manga.png"
    },
    {
        id: 13,
        marca: "Mitsubishi",
        modelo: "Lancer Evolution III GSR",
        piloto: "Kyoichi Sudo",
        traccion: "4WD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/7/7d/Emperor_Lan_Evo_III_Manga.png"
    },
    {
        id: 14,
        marca: "Mitsubishi",
        modelo: "Lancer Evolution IV RS",
        piloto: "Seiji Iwaki",
        traccion: "4WD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/a/a2/Emperor_Lan_Evo_IV_Manga.png"
    },
    {
        id: 15,
        marca: "Toyota",
        modelo: "Corolla Levin GT-APEX (AE86)",
        piloto: "Wataru Akiyama",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/c/c3/Levin_86_Ch125.png"
    },
    {
        id: 16,
        marca: "Toyota",
        modelo: "MR2 G-Limited (SW20)",
        piloto: "Ken Kogashiwa",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/c/c7/Kogashiwa_SW20_Manga.png"
    },
    {
        id: 17,
        marca: "Toyota",
        modelo: "Celica GT-Four",
        piloto: "Miki",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/9/95/Miki_Celica_Manga.png"
    },
    {
        id: 18,
        marca: "Mitsubishi",
        modelo: "Lancer Evolution V GSR",
        piloto: "Aikawa",
        traccion: "4WD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/8/86/Tsuchisaka_Evo_V_Ch344.png"
    },
    {
        id: 19,
        marca: "Nissan",
        modelo: "Skyline 25GT Turbo (R34)",
        piloto: "Atsuro Kawai",
        traccion: "AWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/3/3c/Seven_Star_ER34_Manga.png"
    },
    {
        id: 20,
        marca: "Subaru",
        modelo: "Impreza WRX STI Coupe Type R Version V",
        piloto: "Bunta Fujiwara",
        traccion: "4WD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/a/a7/Bunta_Impreza_Manga.png"
    },
    {
        id: 21,
        marca: "Honda",
        modelo: "Civic Type R (EK9)",
        piloto: "Daiki Ninomiya",
        traccion: "FWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/c/cf/Todo_Dakai_EK9_Manga.png"
    },
    {
        id: 22,
        marca: "Mitsubishi",
        modelo: "Lancer Evolution VI GSR",
        piloto: "Ichijo",
        traccion: "4WD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/9/90/Tsuchisaka_Evo_VI_Ch352.png"
    },
    {
        id: 23,
        marca: "Nissan",
        modelo: "Skyline GT-R V-Spec II (R34)",
        piloto: "Kozo Hoshino",
        traccion: "AWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/8/84/Hoshino_R34_Ch394.png"
    },
    {
        id: 24,
        marca: "Mazda",
        modelo: "RX-7 Type R FD3S",
        piloto: "Kyoko Iwase",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/f/fb/Saitama_Kyoko_FD3S_Manga.png"
    },
    {
        id: 25,
        marca: "Toyota",
        modelo: "Altezza RS200 Z Edition",
        piloto: "Nobuhiko Akiyama",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/f/f4/Nobuhiko_Altezza_Manga.png"
    },
    {
        id: 26,
        marca: "Suzuki",
        modelo: "Cappuccino",
        piloto: "Sakamoto",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/3/36/NSA_Cappuccino_Ch294.png"
    },
    {
        id: 27,
        marca: "Honda",
        modelo: "Integra Type R (DC2)",
        piloto: "Smiley Sakai",
        traccion: "FWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/a/ae/Todo_Smiley_Integra_Manga.png"
    },
    {
        id: 28,
        marca: "Honda",
        modelo: "Civic Type R (EK9)",
        piloto: "Tomoyuki Tachi",
        traccion: "FWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/7/72/Todo_Demonstration_EK9_Manga.png"
    },
    {
        id: 29,
        marca: "Mazda",
        modelo: "MX-5 (Miata) Eunos Roadster",
        piloto: "Toru Suetsugu",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/8/82/Toru_Roadster_Ch193.png"
    },
    {
        id: 30,
        marca: "Honda",
        modelo: "S2000",
        piloto: "Toshiya Joshima",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/e/e5/Joshima_S2000_Ch365.png"
    },
    {
        id: 31,
        marca: "Honda",
        modelo: "NSX",
        piloto: "Go Hojo",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/9/94/Hojo_NSX_Ch623.png"
    },
    {
        id: 32,
        marca: "Toyota",
        modelo: "Supra",
        piloto: "Hideo Minagawa",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/d/d3/Minagawa_Supra_Ch518.png"
    },
    {
        id: 33,
        marca: "Nissan",
        modelo: "Silvia Spec-R (S15)",
        piloto: "Hiroya Okuyama",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/b/b5/Okuyama_S15_Manga.png"
    },
    {
        id: 34,
        marca: "Toyota",
        modelo: "MR-S S-Edition",
        piloto: "Kai Kogashiwa",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/e/e7/Kogashiwa_MR-S_Ch484.png"
    },
    {
        id: 35,
        marca: "Mitsubishi",
        modelo: "Lancer Evolution VII GSR",
        piloto: "Kobayakawa",
        traccion: "4WD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/3/3c/Kobayakawa_EVO_VI_Ch452.png"
    },
    {
        id: 36,
        marca: "Nissan",
        modelo: "Skyline GT-R R32",
        piloto: "Rin Hojo",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/9/9d/Shinigami_R32_Ch600.png"
    },
    {
        id: 37,
        marca: "Mazda",
        modelo: "Roadster RS",
        piloto: "Satoshi Omiya",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/e/ef/Omiya_Roadster_Ch444.png"
    },
    {
        id: 38,
        marca: "Toyota",
        modelo: "Sprinter Trueno GT-APEX (AE86)",
        piloto: "Shinji Inui",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/a/ae/Trueno_2door_Ch610.png"
    },
    {
        id: 39,
        marca: "Nissan",
        modelo: "Fairlady Z Version S (350Z)",
        piloto: "Ryuji Ikeda",
        traccion: "RWD",
        imagen: "https://static.wikia.nocookie.net/initiald/images/9/91/Ikeda_Z33_Ch556.png"
    }
]

app.get("/cars", (req, res) => {
    res.json(cars);
  });
  
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`API corriendo en http://localhost:${PORT}`));