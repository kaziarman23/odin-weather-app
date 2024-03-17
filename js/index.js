const temp = document.querySelector(".temp")
const button = document.querySelector(".button")



button.addEventListener("click",function(event){
    event.preventDefault()
    const APIkey = "9eb9ab2c321ebff67afc7197168ecf68";
    const city = document.querySelector(".input")

    // fetching data 
    async function callData() {
        const raw = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&Units=metric&appid=${APIkey}`
        );
        const ans = await raw.json();

        //  to watch the object 
        // console.log(ans)

        
        
        if(ans.cod === "404"){
            const messageConteiner = document.querySelector(".messageConteiner")
            messageConteiner.style.display = "block"
            const details = document.querySelector(".details")
            details.style.display ="none"
        }
        else{
            const tempValue = ans.main.temp
            const temp = document.querySelector(".temp")
            temp.innerHTML = `${parseInt(tempValue)} F°`;
        }

        //adding images
        const img = document.querySelector(".img")
        const imgValue = ans.weather[0].main
        if(imgValue === "Clear"){
            img.src ="./images/clear.png"
        }
        else if(imgValue === "Mist"){
            img.src ="./images/mist.png"
        }    
        else if(imgValue === "Rain"){
            img.src ="./images/rain.png"
        }
        else{
            img.src ="./images/snow.png"
        }  

        //adding humidity numbar
        const humidityValue = ans.main.humidity
        const humidity = document.querySelector(".humidity")
        humidity.innerHTML = `${humidityValue}%`;
        
        //adding wind Speed 
        const windSpeedValue = ans.wind.speed
        const windSpeed = document.querySelector(".windSpeed")
        windSpeed.innerHTML = `${windSpeedValue} km/h`;

        // clearing input value
        city.value = "";

    }

    callData()
    
   
})

