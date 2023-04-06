const apiKey="42f100ddd763ec770e4e377eac20ec49";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q= "
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const waetherIcon= document.querySelector(".w-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city  +  `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display="block";  
        document.querySelector(".weather").style.display="none";  
    }else{
        var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "ºC";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";


    if(data.weather[0].main == "Clouds"){
        waetherIcon.src= "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        waetherIcon.src= "images/sunny.png";
    }
    else if(data.weather[0].main == "Rain"){
        waetherIcon.src= "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        waetherIcon.src= "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        waetherIcon.src= "images/mist.png";
    }
    }
}
checkWeather("Minneapolis");
document.querySelector(".weather").style.display="block";  
document.querySelector(".error").style.display="none"; 

searchBtn.addEventListener("click", () =>{
    checkWeather(searchBox.value);

});