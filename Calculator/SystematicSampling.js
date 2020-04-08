const data = require('../Calculator/randomeData');

function systematicSampling(x){
    let dataset = [];

    for (i = 0; i < x; i++){
        let y = data.randomN_numbers_withSeed();
        for (element in y){
            if (element % x ){
                dataset.push(element);

            }
            else{
                continue;
            }
        }

    }

    return dataset;

}


module.exports = systematicSampling;