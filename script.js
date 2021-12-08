var request=new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);
//Get all the countries from Asia continent /region using Filter function
    var arr=data.filter(ele=>ele.region==="Asia")
    for(let i in arr)
    console.log(arr[i].name);

// Get all the countries with a population of less than 2 lakhs using Filter function
var arr=data.filter((data)=>data.population<=200000)
for(let i in arr)
console.log(arr[i].name);

//Print the following details name, capital, flag using forEach function

data.forEach(ele=>console.log(ele.name,ele.capital,ele.flag));

//Print the total population of countries using reduce function

console.log(data.reduce((accum,popu)=>accum+popu.population,0));

//Print the country which uses US Dollars as currency

console.log(data.filter(countries => {   
    for(let i in countries.currencies){
        if(countries.currencies[i].code === 'USD') return true
    }
}))
}
