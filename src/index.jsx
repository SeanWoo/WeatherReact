import React from 'react'
import ReactDOM from 'react-dom';

const icons = [
    "img/temp.png",
    "img/summer.png",
    "img/clouds.png",
    "img/partly-cloudy.png",
    "img/rain.png",
]

const styleDiv = {
    display: "flex",
    justifyContent: "space-around",
    maxWidth: "1200px",
    margin: "auto"
}
const styleContainer = {
    display: "flex",
    padding: "0px 10px"
}
const styleNameCard = {
    width: "200px",
    textAlign: "center",
    fontWeight: "bold",
    padding: "10px 0px"
}
const styleElementCard = {
    padding: "0px"
}

class WeatherCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            morning: {
                temp: 26,
                precipitation: "Солнечно"
            },
            day: {
                temp: 32,
                precipitation: "Солнечно"
            },
            evening: {
                temp: 24,
                precipitation: "Облачно"
            },
            night: {
                temp: 17,
                precipitation: "Дождь"
            }
        }
    }
    getColorByTime(){
        switch(this.props.time){
            case "morning": return "#e8dc80"
            case "day": return "#56e8cb"
            case "evening": return "#3b5670"
            case "night": return "#3e474f"
            default:
                return "#999"
        }
    }
    getIconByPrecipitation(){
        switch(this.state[this.props.time].precipitation){
            case "Солнечно": return icons[1]
            case "Облачно": return icons[2]
            case "Немного облачно": return icons[3]
            case "Дождь": return icons[4]
            default:
                return "#999"
        }
    }
    render(){
        const styleCard = {
            backgroundColor: this.getColorByTime(),
            borderRadius: "10% / 50%",
            fontFamily: "Arial"
        }
        return (
            <div style={styleCard}>
                <div style={styleNameCard}>{this.props.name}</div>
                <div style={styleContainer}>
                    <img width="32px" src={icons[0]}/>
                    <div style={styleElementCard}>Температура: {this.state[this.props.time].temp} C</div>
                </div>
                <div style={styleContainer}>
                    <img width="32px" src={this.getIconByPrecipitation()}/>
                    <div style={styleElementCard}>Осадки: {this.state[this.props.time].precipitation}</div>
                </div>
            </div>
        );
    }
}

class App extends React.Component{
    render() {
        return (
            <div style={styleDiv}>
                <WeatherCard name="Утро" time="morning"/>
                <WeatherCard name="День" time="day"/>
                <WeatherCard name="Вечер" time="evening"/>
                <WeatherCard name="Ночь" time="night"/>
            </div>
        );
    }
}

ReactDOM.render(
        <App />
    ,
    document.getElementById('root')
);