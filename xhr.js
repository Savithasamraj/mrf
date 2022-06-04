const getCountries=()=>{
const xhr= new XMLHttpRequest();
xhr.open('GET', "https://restcountries.com/v3.1/all");
xhr.send();
xhr.responseType ="json";
xhr.onload = ()=> {
const countries= xhr.response;
console.log(countries);
const countriesasia=countries.filter(asia=> asia.region==="Asia");
console.log(countriesasia);
const countriespop=countries.filter(pop=> pop.population<= 2_00_000);
console.log(countriespop);
const all=countries.forEach(element => 
   console.log(`countryname: ${element.name.common},capital:${element.capital},flag:${element.flags.png}`))
let population=[];
for(let i in countries)
population.push(countries[i].population);
console.log(population);
let totalpop=population.reduce((sum,curr)=>sum+curr);
console.log("totol population is:" ,totalpop);

}
}

getCountries();