const { Cities } = require('../models');

const cityData = [
    {
        city_name: "Milwaukee"
    },
    {
        city_name: "Madison"
    },
    {
        city_name: "Green Bay"
    },
    {
        city_name: "Kenosha"
    },
    {   
        city_name: "Racine"
    },
    {
        city_name: "Appleton"
    },
    {
        city_name: "Waukesha"
    },
    {
        city_name: "Eau Claire"
    },
    {
        city_name: "Oshkosh"
    },
    {
        city_name: "Janesville"
    },
    {
        city_name: "West Allis"
    },
    {
        city_name: "La Crosse"
    },
    {
        city_name: "Sheboygan"
    },
    {
        city_name: "Wauwatosa"
    },
    {
        city_name: "Fond du Lac"
    },
    {
        city_name: "New Berlin"
    },
    {
        city_name: "Wausau"
    },
    {
        city_name: "Brookfield"
    },
    {
        city_name: "Greenfield"
    },
    {
        city_name: "Beloit" 
    },
];
const seedCities = () => Cities.bulkCreate(cityData);

module.exports = seedCities;