import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import './Wether.css'
import search_icon from "../assets/search.png"
import clear_icon from "../assets/clear.png"
import cloud_icon from "../assets/cloud.png"
import drizzle_icon from "../assets/drizzle.png"
import rain_icon from "../assets/rain.png"
import snow_icon from "../assets/snow.png"
import wind_icon from "../assets/wind.png"
import humidity_icon from "../assets/humidity.png"

const allIcon = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
}

const fetchWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${import.meta.env.VITE_APP_ID}`
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch weather data');
    }

    const icon = allIcon[data.weather[0].icon] || clear_icon;

    return {
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon,
    };
}

const Wether = () => {
    const [inputValue, setInputValue] = useState('Delhi');
    const [city, setCity] = useState('Delhi');

    const {
        data: weatherData,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ['weather', city],
        queryFn: () => fetchWeather(city),
        enabled: Boolean(city.trim()),
        refetchInterval: 300000,
        refetchIntervalInBackground: true,
        staleTime: 300000,
        retry: 1,
    });

    const handleSearch = () => {
        const nextCity = inputValue.trim();

        if (!nextCity) {
            alert("Enter City Name");
            return;
        }

        setCity(nextCity);
    };

    return (
        <div className='weather'>
            <div className='search-bar'>
                <input
                    type="text"
                    placeholder='Search'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSearch();
                        }
                    }}
                />
                <img src={search_icon} alt="Search weather" onClick={handleSearch} />
            </div>

            {isLoading && <p className='temperature'>Loading...</p>}

            {isError && <p className='location'>{error.message}</p>}

            {weatherData && !isLoading && !isError && (
                <>
                    <img src={weatherData.icon} alt="" className='weather-icon' />
                    <p className='temperature'>{weatherData.temperature}°c</p>
                    <p className='location'>{weatherData.location}</p>

                    <div className="weather-data">
                        <div className="col">
                            <img src={humidity_icon} alt="" />
                            <div>
                                <p>{weatherData.humidity}%</p>
                                <span>Humidity</span>
                            </div>
                        </div>
                        <div className="col">
                            <img src={wind_icon} alt="" />
                            <div>
                                <p>{weatherData.windSpeed} Km/h</p>
                                <span>Wind Speed</span>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Wether
