const APIkey = "b64528a0db0ba8adfe77ed62ad0af4a6";
const city = "barlin";
async function call() {
    const raw = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`
    );
    const ans = await raw.json();
    console.log(ans)
}


call()