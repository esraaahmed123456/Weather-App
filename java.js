const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const apikey="d417bd4bbf9b3bf93ce9f73c7a1d64f3"

const searchbox=document.querySelector(".serach input");
const searchbutton=document.querySelector(".serach button");
const weathericon =document.querySelector(".weather-icon")

async function getdata(city){
    const respon =await fetch(apiurl + city + `&appid=${apikey}`)
    if(respon.status == 404){
        document.querySelector(".error").style.display="block"
     document.querySelector(".weather").style.display="none"
    }else{
    var data= await respon.json()
   
    document.querySelector(".tem").innerHTML=Math.round(data.main.temp) +"c";
     document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed +"km/h";
    if(data.weather[0].main== "Clouds"){
         weathericon.src="weather-app-img/images/clouds.png"}

    else if (data.weather[0].main== "Clear"){
          weathericon.src="weather-app-img/images/clear.png"}
    
          else if (data.weather[0].main== "Rain"){
          weathericon.src="weather-app-img/images/rain.png"
    } 
    
    else if (data.weather[0].main== "Drizzle"){
          weathericon.src="weather-app-img/images/drizzle.png"
    }else if (data.weather[0].main== "Mist"){
          weathericon.src="weather-app-img/images/mist.png"
    }
   document.querySelector(".weather").style.display="block"
    document.querySelector(".error").style.display="none"
}
}
  searchbutton.addEventListener("click",()=>
        {
         getdata(searchbox.value);   
        })


