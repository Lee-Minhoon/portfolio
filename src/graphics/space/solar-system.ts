const textureBasePath = "textures/space";

const solarSystem = {
  planets: [
    {
      name: "Earth",
      radius: 6371,
      revolutionPeriod: 365.25,
      majorAxis: 150000000,
      eccentricity: 0.0167,
      /**
       * https://planet-texture-maps.fandom.com/wiki/Earth
       * https://static.wikia.nocookie.net/planet-texture-maps/images/a/aa/Earth_Texture_Full.png/revision/latest?cb=20190401163425
       */
      texture: `${textureBasePath}/earth.webp`,
      satellites: [
        {
          name: "Moon",
          radius: 1737.1,
          revolutionPeriod: 27.32,
          majorAxis: 384400,
          eccentricity: 0.0549,
          /**
           * https://www.solarsystemscope.com/textures/
           * https://www.solarsystemscope.com/textures/download/2k_moon.jpg
           */
          texture: `${textureBasePath}/moon.jpg`,
        },
      ],
    },
    {
      name: "Mercury",
      radius: 2439.7,
      revolutionPeriod: 87.97,
      majorAxis: 57900000,
      eccentricity: 0.2056,
      /**
       * https://www.solarsystemscope.com/textures/
       * https://www.solarsystemscope.com/textures/download/2k_mercury.jpg
       */
      texture: `${textureBasePath}/mercury.jpg`,
    },
    {
      name: "Venus",
      radius: 6051.8,
      revolutionPeriod: 224.7,
      majorAxis: 108000000,
      eccentricity: 0.0068,
      /**
       * https://www.solarsystemscope.com/textures/
       * https://www.solarsystemscope.com/textures/download/2k_venus_surface.jpg
       */
      texture: `${textureBasePath}/venus.jpg`,
    },
    {
      name: "Mars",
      radius: 3389.5,
      revolutionPeriod: 686.98,
      majorAxis: 228000000,
      eccentricity: 0.0934,
      /**
       * https://www.solarsystemscope.com/textures/
       * https://www.solarsystemscope.com/textures/download/2k_mars.jpg
       */
      texture: `${textureBasePath}/mars/mars.jpg`,
      satellites: [
        {
          name: "Phobos",
          radius: 11.1,
          revolutionPeriod: 0.32,
          majorAxis: 9377,
          eccentricity: 0.0151,
          /**
           * https://planet-texture-maps.fandom.com/wiki/Phobos
           * https://static.wikia.nocookie.net/planet-texture-maps/images/f/fa/RS3_Phobos.jpg/revision/latest?cb=20220815013340
           */
          texture: `${textureBasePath}/mars/phobos.webp`,
        },
        {
          name: "Deimos",
          radius: 6.2,
          revolutionPeriod: 1.26,
          majorAxis: 23460,
          eccentricity: 0.0003,
          /**
           * https://planet-texture-maps.fandom.com/wiki/Deimos
           * https://static.wikia.nocookie.net/planet-texture-maps/images/2/28/Dh_deimos_texture.png/revision/latest?cb=20211009224412
           */
          texture: `${textureBasePath}/mars/deimos.webp`,
        },
      ],
    },
    {
      name: "Jupiter",
      radius: 69911,
      revolutionPeriod: 4332.59,
      majorAxis: 778000000,
      eccentricity: 0.0489,
      /**
       * https://www.solarsystemscope.com/textures/
       * https://www.solarsystemscope.com/textures/download/2k_jupiter.jpg
       */
      texture: `${textureBasePath}/jupiter/jupiter.jpg`,
      satellites: [
        {
          name: "Io",
          radius: 1821.6,
          revolutionPeriod: 1.77,
          majorAxis: 421800,
          eccentricity: 0.0041,
          /**
           * https://planet-texture-maps.fandom.com/wiki/Io
           * https://static.wikia.nocookie.net/planet-texture-maps/images/a/aa/Iomap.png/revision/latest?cb=20190417015742
           */
          texture: `${textureBasePath}/jupiter/io.webp`,
        },
        {
          name: "Europa",
          radius: 1560.8,
          revolutionPeriod: 3.55,
          majorAxis: 671100,
          eccentricity: 0.0094,
          /**
           * https://planet-texture-maps.fandom.com/wiki/Europa
           * https://static.wikia.nocookie.net/planet-texture-maps/images/e/e0/Europa.jpg/revision/latest?cb=20190416050003
           */
          texture: `${textureBasePath}/jupiter/europa.webp`,
        },
        {
          name: "Ganymede",
          radius: 2631.2,
          revolutionPeriod: 7.15,
          majorAxis: 1070400,
          eccentricity: 0.0013,
          /**
           * https://planet-texture-maps.fandom.com/wiki/Ganymede
           * https://static.wikia.nocookie.net/planet-texture-maps/images/6/6b/Ganymede_Reworked.png/revision/latest?cb=20190331020339
           */
          texture: `${textureBasePath}/jupiter/ganymede.webp`,
        },
        {
          name: "Callisto",
          radius: 2410.3,
          revolutionPeriod: 16.69,
          majorAxis: 1882700,
          eccentricity: 0.0074,
          /**
           * https://planet-texture-maps.fandom.com/wiki/Callisto
           * https://static.wikia.nocookie.net/planet-texture-maps/images/b/bd/Callisto-1.jpg/revision/latest?cb=20180114082700
           */
          texture: `${textureBasePath}/jupiter/callisto.webp`,
        },
      ],
    },
    {
      name: "Saturn",
      radius: 58232,
      revolutionPeriod: 10759.22,
      majorAxis: 1427000000,
      eccentricity: 0.0565,
      /**
       * https://www.solarsystemscope.com/textures/
       * https://www.solarsystemscope.com/textures/download/2k_saturn.jpg
       */
      texture: `${textureBasePath}/saturn/saturn.jpg`,
      rings: [
        {
          innerRadius: 74600,
          outerRadius: 136775,
          /**
           * https://www.solarsystemscope.com/textures/
           * https://www.solarsystemscope.com/textures/download/2k_saturn_ring_alpha.png
           */
          texture: `${textureBasePath}/saturn/ring.png`,
        },
      ],
      satellites: [
        {
          name: "Mimas",
          radius: 198.8,
          revolutionPeriod: 0.94,
          majorAxis: 185520,
          eccentricity: 0.0196,
          /**
           * https://planet-texture-maps.fandom.com/wiki/Mimas
           * https://static.wikia.nocookie.net/planet-texture-maps/images/3/3e/Mimas.jpg/revision/latest?cb=20180117122239
           */
          texture: `${textureBasePath}/saturn/mimas.webp`,
        },
        {
          name: "Enceladus",
          radius: 252.1,
          revolutionPeriod: 1.37,
          majorAxis: 238020,
          eccentricity: 0.0047,
          /**
           * https://planet-texture-maps.fandom.com/wiki/Enceladus
           * https://static.wikia.nocookie.net/planet-texture-maps/images/0/0f/Enceladus.jpg/revision/latest?cb=20190417050344
           */
          texture: `${textureBasePath}/saturn/enceladus.webp`,
        },
        {
          name: "Tethys",
          radius: 531.1,
          revolutionPeriod: 1.89,
          majorAxis: 294660,
          eccentricity: 0.0001,
          /**
           * https://planet-texture-maps.fandom.com/wiki/Tethys
           * https://static.wikia.nocookie.net/planet-texture-maps/images/e/e4/Tethys1.png/revision/latest?cb=20200326174133
           */
          texture: `${textureBasePath}/saturn/tethys.webp`,
        },
        {
          name: "Dione",
          radius: 561.4,
          revolutionPeriod: 2.74,
          majorAxis: 377400,
          eccentricity: 0.0022,
          /**
           * https://planet-texture-maps.fandom.com/wiki/Dione
           * https://static.wikia.nocookie.net/planet-texture-maps/images/d/db/RS3_Dione.jpg/revision/latest?cb=20220815013256
           */
          texture: `${textureBasePath}/saturn/dione.webp`,
        },
        {
          name: "Rhea",
          radius: 763.8,
          revolutionPeriod: 4.52,
          majorAxis: 527040,
          eccentricity: 0.0013,
          /**
           * https://planet-texture-maps.fandom.com/wiki/Rhea
           * https://static.wikia.nocookie.net/planet-texture-maps/images/a/a2/RS3_Rhea.jpg/revision/latest?cb=20220815013341
           */
          texture: `${textureBasePath}/saturn/rhea.webp`,
        },
        {
          name: "Titan",
          radius: 2575.5,
          revolutionPeriod: 15.95,
          majorAxis: 1221870,
          eccentricity: 0.0288,
          /**
           * https://planet-texture-maps.fandom.com/wiki/Titan
           * https://static.wikia.nocookie.net/planet-texture-maps/images/d/da/Panorama_image_%285%29.png/revision/latest?cb=20221125230103
           */
          texture: `${textureBasePath}/saturn/titan.webp`,
        },
        {
          name: "Hyperion",
          radius: 135,
          revolutionPeriod: 21.28,
          majorAxis: 1481100,
          eccentricity: 0.123,
          /**
           * https://planet-texture-maps.fandom.com/wiki/Hyperion
           * https://static.wikia.nocookie.net/planet-texture-maps/images/2/29/Dh_hyperion_texture.png/revision/latest?cb=20211212222123
           */
          texture: `${textureBasePath}/saturn/hyperion.webp`,
        },
        {
          name: "Iapetus",
          radius: 734.5,
          revolutionPeriod: 79.33,
          majorAxis: 3560820,
          eccentricity: 0.0293,
          /**
           * https://planet-texture-maps.fandom.com/wiki/Iapetus
           * https://static.wikia.nocookie.net/planet-texture-maps/images/8/8e/RS3_Iapetus.jpg/revision/latest?cb=20220815013310
           */
          texture: `${textureBasePath}/saturn/iapetus.webp`,
        },
      ],
    },
    {
      name: "Uranus",
      radius: 25362,
      revolutionPeriod: 30685.4,
      majorAxis: 2871000000,
      eccentricity: 0.0463,
      /**
       * https://www.solarsystemscope.com/textures/
       * https://www.solarsystemscope.com/textures/download/2k_uranus.jpg
       */
      texture: `${textureBasePath}/uranus/uranus.jpg`,
      satellites: [
        {
          name: "Miranda",
          radius: 235.8,
          revolutionPeriod: 1.41,
          majorAxis: 129900,
          eccentricity: 0.0013,
          /**
           * https://planet-texture-maps.fandom.com/wiki/Miranda
           * https://static.wikia.nocookie.net/planet-texture-maps/images/a/a2/Mirandatexture1-missingdata.png/revision/latest?cb=20190323083145
           */
          texture: `${textureBasePath}/uranus/miranda.webp`,
        },
        {
          name: "Ariel",
          radius: 578.9,
          revolutionPeriod: 2.52,
          majorAxis: 191020,
          eccentricity: 0.0012,
          /**
           * https://planet-texture-maps.fandom.com/wiki/Ariel
           * https://static.wikia.nocookie.net/planet-texture-maps/images/0/0e/Ariel-0.jpg/revision/latest?cb=20180102011405
           */
          texture: `${textureBasePath}/uranus/ariel.webp`,
        },
        {
          name: "Umbriel",
          radius: 584.7,
          revolutionPeriod: 4.14,
          majorAxis: 266300,
          eccentricity: 0.0039,
          /**
           * https://planet-texture-maps.fandom.com/wiki/Umbriel
           * https://static.wikia.nocookie.net/planet-texture-maps/images/8/84/Umbriel.png/revision/latest?cb=20190327084317
           */
          texture: `${textureBasePath}/uranus/umbriel.webp`,
        },
        {
          name: "Titania",
          radius: 788.9,
          revolutionPeriod: 8.71,
          majorAxis: 435910,
          eccentricity: 0.0011,
          /**
           * https://planet-texture-maps.fandom.com/wiki/Titania
           * https://static.wikia.nocookie.net/planet-texture-maps/images/d/d5/Titaniamap.png/revision/latest?cb=20190415074420
           */
          texture: `${textureBasePath}/uranus/titania.webp`,
        },
        {
          name: "Oberon",
          radius: 761.4,
          revolutionPeriod: 13.46,
          majorAxis: 583520,
          eccentricity: 0.0014,
          /**
           * https://planet-texture-maps.fandom.com/wiki/Oberon
           * https://static.wikia.nocookie.net/planet-texture-maps/images/1/14/Oberonmap1.png/revision/latest?cb=20190321215506
           */
          texture: `${textureBasePath}/uranus/oberon.webp`,
        },
      ],
    },
    {
      name: "Neptune",
      radius: 24622,
      revolutionPeriod: 60190,
      majorAxis: 4504000000,
      eccentricity: 0.0086,
      /**
       * https://www.solarsystemscope.com/textures/
       * https://www.solarsystemscope.com/textures/download/2k_neptune.jpg
       */
      texture: `${textureBasePath}/neptune/neptune.jpg`,
      satellites: [
        {
          name: "Triton",
          radius: 1353.4,
          revolutionPeriod: 5.88,
          majorAxis: 354800,
          eccentricity: 0.000016,
          /**
           * https://planet-texture-maps.fandom.com/wiki/Triton
           * https://static.wikia.nocookie.net/planet-texture-maps/images/c/c6/TritonPastel.png/revision/latest?cb=20231231232240
           */
          texture: `${textureBasePath}/neptune/triton.webp`,
        },
      ],
    },
    {
      name: "Pluto",
      radius: 1188.3,
      revolutionPeriod: 90560,
      majorAxis: 5906000000,
      eccentricity: 0.2488,
      /**
       * https://planet-texture-maps.fandom.com/wiki/Pluto
       * https://static.wikia.nocookie.net/planet-texture-maps/images/6/64/Pluto_Made.png/revision/latest?cb=20190331055010
       */
      texture: `${textureBasePath}/pluto/pluto.webp`,
      satellites: [
        {
          name: "Charon",
          radius: 606,
          revolutionPeriod: 6.39,
          majorAxis: 19571,
          eccentricity: 0.0022,
          /**
           * https://planet-texture-maps.fandom.com/wiki/Pluto
           * https://static.wikia.nocookie.net/planet-texture-maps/images/e/e2/Charon.png/revision/latest?cb=20180102010201
           */
          texture: `${textureBasePath}/pluto/charon.webp`,
        },
      ],
    },
  ],
};

export default solarSystem;
