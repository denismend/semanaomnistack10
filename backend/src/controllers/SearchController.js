const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

// index, show, store, update, destroy

/** denis */
module.exports = { 
    async index (request, response) {
        // busca dos devs num raio de 10km
        // filtrar por tecnologias=
        const { latitude, longitude, techs } = request.query;

        const techsArray = parseStringAsArray(techs);
        console.log(techsArray);
    
        const devs = await Dev.find({
            techs: {
                $in: techsArray
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [latitude, longitude]
                    },
                    $maxDistance: 40000
                }
            }
        });

        return response.json({ devs });
    }
};