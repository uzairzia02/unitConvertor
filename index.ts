#! /usr/bin/env node

import inquirer from "inquirer";

/*Unit Converter: Create a versatile unit converter that can convert between different units of 
measurement, such as length (meters, inches, feet), weight (kilograms, pounds), temperature (Celsius, Fahrenheit), etc.
*/

// let conversionType: any = {
//     meter: 1,
//     kilogram: 1000,
//     liter: 1000,
//     temperature: 1,
    
// };


let user_answer = await inquirer.prompt
(
    [
        {
            name: "unit",
            type: "list",
            choices: ["meter", "kilogram", "liter", "temperature"],
            message: "Enter the unit of measurement you want to convert from: "
        },


        {
            name: "value",
            type: "number",
            message: "Enter the value you want to convert: "
        },
   ]

)
    if (user_answer.value < 0) {
        console.log("Invalid value");
    }
        
        else if (user_answer.unit === "meter")
        {
            let meterchoice = await inquirer.prompt 
            (
                [
                    {
                        name: "meter",
                        type: "list",
                        choices: ["milimeter", "centimeter", "foot"],
                        message: "Choose the sub-unit of meter from below you want to convert to: "
                    }
                ]
            )
                            if (meterchoice.meter === "milimeter") {
                                console.log(user_answer.value * 1000);
                            } else if (meterchoice.meter === "centimeter") {
                                console.log(user_answer.value * 100);
                            } else if (meterchoice.meter === "foot"){
                                console.log(user_answer.value * 3.24);
                            }
        }
            
        else if (user_answer.unit === "kilogram")
        {
            let kilogramchoice = await inquirer.prompt
            (
                [
                    {
                        name: "kilogram",
                        type: "list",
                        choices: ["gram", "miligram", "pound"],
                        message: "Choose the sub-unit of KG from below you want to convert to: "
                    }
                ]
            )
            
                            if (kilogramchoice.kilogram === "gram") {
                                console.log(`The weight in grams is ${user_answer.value * 1000} gm`);
                            }   else if (kilogramchoice.kilogram === "miligram"){
                                console.log(`The weight in miligram is ${user_answer.value * 1000000} mg`);
                            }   else if (kilogramchoice.kilogram === "pound"){
                                console.log(`The weight in pound is ${user_answer.value * 2.20} lb`);
                            }
         
        }

        else if (user_answer.unit === "liter")
        {
            let literchoice = await inquirer.prompt
            (
                [
                    {
                        name: "liter",
                        type: "list",
                        choices: ["milliliter", "gallon"],
                        message: "Choose the sub-unit of liter from below you want to convert to: "

                    }
                ]
            )
                            if (literchoice.liter === "milliliter") {
                                console.log(`The weight in milliliter is ${user_answer.value * 1000} ml`);
                            } else if (literchoice.liter === "gallon"){
                                console.log(`The weight in gallon is ${user_answer.value * 0.27} gal`);
                            }
        }

        else if (user_answer.unit === "temperature")
        {
            let temperaturechoice = await inquirer.prompt
            (
                [
                    {
                        name: "to",
                        type: "list",
                        choices: ["celsius", "fahrenheit"],
                        message: "Choose the sub-unit of temperature from below you want to convert from: "

                    },
                    {
                        name: "from",
                        type: "list",
                        choices: ["celsius", "fahrenheit"],
                        message: "Choose the sub-unit of temperature from below you want to convert to: "

                    }
                ]
            )

            if (temperaturechoice.to === "celsius" && temperaturechoice.from === "fahrenheit") {                
                console.log(`The temperature is ${(user_answer.value * (9/5)) + 32} C`);
            } else if (temperaturechoice.to === "fahrenheit" && temperaturechoice.from === "celsius") {
                console.log(`The tepmerature is ${(user_answer.value - 32) * (5/9)} F`);
            } else {
                console.log("Invalid input");
            }
        }



       
   

// let unit = user_answer.unit;

// console.log(user_answer.value * conversionType[unit]);

