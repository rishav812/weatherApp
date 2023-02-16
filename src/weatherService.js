const API_KEY = "49eeb899f646425b52183b1e300d7610";

const makeIconUrl=(iconId)=>`https://openweathermap.org/img/wn/${iconId}@2x.png`; //function

const getFormattedWeatherData = async (city, units = "metric") => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`

    const data = await fetch(URL)
        .then((res) => res.json())
        .then((data) => data)

    const { weather,
        main: { temp, feels_like,humidity, temp_max, temp_min, pressure },
        wind: { speed },
        sys: { country }, name, } = data;   //destructurizing form

    const { description, icon } = weather[0];

    return {
        temp, feels_like, temp_max, temp_min, pressure, humidity, speed,
        country, name, description, iconURL:makeIconUrl(icon) 
    };
}

export { getFormattedWeatherData };

