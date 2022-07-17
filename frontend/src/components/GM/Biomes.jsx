import React, { useState, useEffect } from "react";
import { NavLink, Switch } from "react-router-dom";
import "./Biomes.css";

const Biomes = () => {
  const tropicalRainForest = {
    name: "Tropical Rainforest",
    description:
      "Tropical rainforests are rainforests that occur in areas of tropical rainforest climate in which there is no dry season - all months have an average precipitation of at least 60 mm",
    location:
      "True rainforests are typically found between 10 degrees north and south of the equator (see map); they are a sub-set of the tropical forest biome that occurs roughly within the 28-degree latitudes",
    moisture: "heavy rainfall",
  };
  const temerateRainForest = {
    name: "Temperate Rainforest",
    description:
      "Temperate rainforests are coniferous or broadleaf forests that occur in the temperate zone and receive heavy rain.",
    location:
      "Temperate forests cover a large part of the Earth, but temperate rainforests only occur in a few regions around the world. Most of these occur in oceanic moist climates. Others occur in subtropical moist climates",
    moisture: "heavy rainfall and/or fog",
  };
  const savanna = {
    name: "Savanna",
    description:
      "A savanna or savannah is a mixed woodland-grassland (i.e. grassy woodland) ecosystem characterised by the trees being sufficiently widely spaced so that the canopy does not close. The open canopy allows sufficient light to reach the ground to support an unbroken herbaceous layer consisting primarily of grasses.",
    location:
      "Savannas are always found in warm or hot climates where the annual rainfall is from about 50.8 to 127 cm (20-50 inches) per year.",
    moisture: "Majority of rainfall confined to one season",
  };
  const shrubland = {
    name: "Shrubland",
    description:
      "The shrublands are made up of shrubs or short trees. Many shrubs thrive on steep, rocky slopes. There is usually not enough rain to support tall trees. Shrublands are usually fairly open so grasses and other short plants grow between the shrubs. In the areas with little rainfall, plants have adapted to drought-like conditions. Many plants have small, needle-like leaves that help to conserve water. Some have leaves with waxy coatings and leaves that reflect the sunlight. Several plants have developed fire-resistant adaptations to survive the frequent fires that occur during the dry season.",
    location:
      "West coastal regions between 30° and 40° North and South latitude",
    moisture:
      "Shrublands usually get more rain than deserts and grasslands but less than forested areas. Shrublands typically receive between 200 to 1,000 millimeters of rain a year. This rain is unpredictable, varying from month to month. There is a noticeable dry season and wet season.",
  };
  const desert = {
    name: "Desert",
    description:
      "Desert biomes are the driest of all the biomes. In fact, the most important characteristic of a desert is that it receives very little rainfall. The temperature in the desert can change drastically from day to night because the air is so dry that heat escapes rapidly at night. The daytime temperature averages 38°C while in some deserts it can get down to -4°C at night.",
    location: "Between 15° and 35° latitude (North and South of the equator)",
    moisture:
      "Most deserts receive less than 300 mm a year compared to rainforests, which receive over 2,000 mm.",
  };
  const grasslands = {
    name: "Grassland",
    description:
      "Grasslands are generally open and continuous, fairly flat areas of grass. The height of grass correlates with the amount of rainfall it receives.While temperatures are often extreme in some grasslands, the average temperatures are about -20°C to 30°C. Tropical grasslands have dry and wet seasons that remain warm all the time. Temperate grasslands have cold winters and warm summers with some rain.The grasses die back to their roots annually and the soil and the sod protect the roots and the new buds from the cold of winter or dry conditions. A few trees may be found in this biome along the streams, but not many due to the lack of rainfall.",
    location:
      "They are often located between temperate forests at high latitudes and deserts at subtropical latitudes.",
    moisture: "Grasslands receive about 500 to 950 mm of rain per year",
  };
  const temperateDeciduousForest = {
    name: "Temperate Deciduous Forest",
    description:
      "The deciduous forest regions are exposed to warm and cold air masses, which cause this area to have four seasons. The temperature varies widely from season to season with cold winters and hot, wet summers. The average yearly temperature is about 10°C. The areas in which deciduous forests are located get about 750 to 1,500 mm of precipitation spread fairly evenly throughout the year. During the fall, trees change color and then lose their leaves. This is in preparation for the winter season. Because it gets so cold, the trees have adapted to the winter by going into a period of dormancy or sleep. They also have thick bark to protect them from the cold weather. Trees flower and grow during the spring and summer growing season.",
    location:
      "Temperate deciduous forests are located in the mid-latitude areas which means that they are found between the polar regions and the tropics.",
    moisture:
      "On average, this biome receives 750 to 1,500 millimeters (30 to 59 inches) of rain per year.",
  };
  const coniferousForest = {
    name: "Coniferous Forest",
    description:
      "Coniferous forests consist mostly of conifers, which are trees that grow needles instead of leaves and cones instead of flowers. Conifers tend to be evergreen—they bear needles all year long. These adaptations help conifers survive in areas that are very cold or dry. Some of the more common conifers are spruces, pines, and firs.",
    location:
      "The coniferous forest is sandwiched in between the tundra to the north and the deciduous forest to the south.",
    moisture:
      "Precipitation in coniferous forests varies from 300 to 900 mm annually, with some temperate coniferous forests receiving up to 2,000 mm/ year (79 in/year). The amount of precipitation depends on the forest location. In the northern boreal forests, the winters are long, cold and dry, while the short summers are moderately warm and moist. In the lower latitudes, precipitation is more evenly distributed throughout the year.",
  };
  const tundra = {
    name: "Tundra",
    description:
      "The tundra is the coldest of the biomes. It also receives low amounts of precipitation, making the tundra similar to a desert. Tundra winters are long, dark, and cold, with mean temperatures below 0°C for six to 10 months of the year. The temperatures are so cold that there is a layer of permanently frozen ground below the surface, called permafrost. This permafrost is a defining characteristic of the tundra biome. In the tundra summers, the top layer of soil thaws only a few inches down, providing a growing surface for the roots of vegetation.",
    location: "Just outside of the icecaps.",
    moisture:
      "Precipitation in the tundra totals 150 to 250 mm a year, including melted snow. That's less than most of the world's greatest deserts! Still, the tundra is usually a wet place because the low temperatures cause evaporation of water to be slow. Much of the arctic has rain and fog in the summers, and water gathers in bogs and ponds.",
  };
  const swamp = {
    name: "Swamp",
    description:
      "A swamp is a forested wetland. Swamps are considered to be transition zones because both land and water play a role in creating this environment.",
    location:
      "Swamps vary in size and are located all around the world. The water of a swamp may be fresh water, brackish water, or seawater.",
    moisture:
      "Swamps are characterized by their saturated soils and slow-moving waters. The water that accumulates in swamps comes from a variety of sources including precipitation, groundwater, tides and/or freshwater flooding.",
  };

  const biomeArray = [
    tropicalRainForest,
    temerateRainForest,
    savanna,
    shrubland,
    desert,
    grasslands,
    temperateDeciduousForest,
    coniferousForest,
    tundra,
    swamp,
  ];

  const [biomeWinner, setBiomeWinner] = useState({});

  const biomeChange = (biomeName) => {
    biomeArray.map((biome) => {
      if (biome.name == biomeName) {
        setBiomeWinner(biome);
      } else null;
    });
  };

  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="biomes-main-container">
      <div className="biomes-top-container">
        <h2 className="biomes-h2">Biomes</h2>
      </div>
      <div className="biomes-button-containers"></div>
      <nav>
        <button
          onClick={() => {
            setDropdown(true);
          }}
        >
          Biomes
        </button>
        {dropdown ? (
          <div className="biomes-dropdown-container">
            <ul className="biomes-list-container">
              {biomeArray.map((eachBiome) => {
                return (
                  <li className="biomes-list-item">
                    <button
                      onClick={() => {
                        setBiomeWinner({});
                        biomeChange(eachBiome.name);
                        setDropdown(false);
                      }}
                    >
                      {eachBiome.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
      </nav>
      <div className="biomes-biome-container">
        <p>Biome: {biomeWinner.name ? biomeWinner.name : ""}</p>
        <p>
          Description: {biomeWinner.description ? biomeWinner.description : ""}
        </p>
        <p>Location: {biomeWinner.location ? biomeWinner.location : ""}</p>
        <p>Moisture: {biomeWinner.moisture ? biomeWinner.moisture : ""}</p>
      </div>
    </div>
  );
};

export default Biomes;
