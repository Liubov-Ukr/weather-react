import ReactAnimatedWeather from "react-animated-weather";
export default function Animateicon(props) {
  const codeicon = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };
  const defaults = {
    color: "#2B86F0",
    size: 80,
    animate: true,
  };
  return (
    <ReactAnimatedWeather
      icon={codeicon[props.icon]}
      color={defaults.color}
      size={defaults.size}
      animate={defaults.animate}
    />
  );
}
