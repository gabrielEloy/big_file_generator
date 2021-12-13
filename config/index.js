const inquirer = require('inquirer');

const selecteLineAmount = () => {
    const questions = [{
        type: 'input',
        name: 'lines',
        message: "How many lines do you want to generate?",
        validate(value) {
            const is_NaN = isNaN(Number(value))
            
            if (!is_NaN) {
                return true;
            }
      
            return 'Please enter a valid number';
          },
      }]

      return inquirer.prompt(questions).then(({lines}) => {
        console.log(JSON.stringify(lines, null, '  '));

        return Number(lines);
      });
}


const selectGeneratedData = () => {
    return inquirer
   .prompt([
     {
       type: 'checkbox',
       message: 'Select csv generated fields',
       name: 'fields',
       choices: [
        new inquirer.Separator('name'),
        {
            "name": "name.firstName",
        },
        {
            "name": "name.lastName"
        },
        {
            "name": "name.middleName"
        },
        {
            "name": "name.findName"
        },
        {
            "name": "name.jobTitle"
        },
        {
            "name": "name.gender"
        },
        {
            "name": "name.prefix"
        },
        {
            "name": "name.suffix"
        },
        {
            "name": "name.title"
        },
        {
            "name": "name.jobDescriptor"
        },
        {
            "name": "name.jobArea"
        },
        {
            "name": "name.jobType"
        },
        new inquirer.Separator('phone'),
        {
            "name": "phone.phoneNumber"
        },
        {
            "name": "phone.phoneNumberFormat"
        },
        {
            "name": "phone.phoneFormats"
        },
        new inquirer.Separator('image'),
        {
            "name": "image.image"
        },
        {
            "name": "image.avatar"
        },
        {
            "name": "image.imageUrl"
        },
        {
            "name": "image.abstract"
        },
        {
            "name": "image.animals"
        },
        {
            "name": "image.business"
        },
        {
            "name": "image.cats"
        },
        {
            "name": "image.city"
        },
        {
            "name": "image.food"
        },
        {
            "name": "image.nightlife"
        },
        {
            "name": "image.fashion"
        },
        {
            "name": "image.people"
        },
        {
            "name": "image.nature"
        },
        {
            "name": "image.sports"
        },
        {
            "name": "image.technics"
        },
        {
            "name": "image.transport"
        },
        {
            "name": "image.dataUri"
        },
        {
            "name": "image.lorempixel"
        },
        {
            "name": "image.unsplash"
        },
        {
            "name": "image.lorempicsum"
        },
        new inquirer.Separator('addresses'),
            {
                "name": "address.zipCode"
            },
            {
                "name": "address.zipCodeByState"
            },
            {
                "name": "address.city"
            },
            {
                "name": "address.cityPrefix"
            },
            {
                "name": "address.citySuffix"
            },
            {
                "name": "address.cityName"
            },
            {
                "name": "address.streetName"
            },
            {
                "name": "address.streetAddress"
            },
            {
                "name": "address.streetSuffix"
            },
            {
                "name": "address.streetPrefix"
            },
            {
                "name": "address.secondaryAddress"
            },
            {
                "name": "address.county"
            },
            {
                "name": "address.country"
            },
            {
                "name": "address.countryCode"
            },
            {
                "name": "address.state"
            },
            {
                "name": "address.stateAbbr"
            },
            {
                "name": "address.latitude"
            },
            {
                "name": "address.longitude"
            },
            {
                "name": "address.direction"
            },
            {
                "name": "address.cardinalDirection"
            },
            {
                "name": "address.ordinalDirection"
            },
            {
                "name": "address.nearbyGPSCoordinate"
            },
            {
                "name": "address.timeZone"
            },
            new inquirer.Separator('company'),
            {
                "name": "company.suffixes"
            },
            {
                "name": "company.companyName"
            },
            {
                "name": "company.companySuffix"
            },
            {
                "name": "company.catchPhrase"
            },
            {
                "name": "company.bs"
            },
            {
                "name": "company.catchPhraseAdjective"
            },
            {
                "name": "company.catchPhraseDescriptor"
            },
            {
                "name": "company.catchPhraseNoun"
            },
            {
                "name": "company.bsAdjective"
            },
            {
                "name": "company.bsBuzz"
            },
            {
                "name": "company.bsNoun"
            }
    ],
       validate(answer) {
         if (answer.length < 1) {
           return 'You must choose at least one field.';
         }
 
         return true;
       },
     },
   ])
   .then(({fields}) => {
     console.log(JSON.stringify(fields, null, '  '));

     return fields;
   });
}


module.exports = {
    selecteLineAmount,
    selectGeneratedData
}