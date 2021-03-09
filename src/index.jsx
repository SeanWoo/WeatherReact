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
    getColorByTime(){
        switch(this.props.name){
            case "Утро": return "#e8dc80"
            case "День": return "#56e8cb"
            case "Вечер": return "#3b5670"
            case "Ночь": return "#3e474f"
            default:
                return "#999"
        }
    }
    getIconByPrecipitation(){
        switch(this.props.precipitation){
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
                    <div style={styleElementCard}>Температура: {this.props.temp} C</div>
                </div>
                <div style={styleContainer}>
                    <img width="32px" src={this.getIconByPrecipitation()}/>
                    <div style={styleElementCard}>Осадки: {this.props.precipitation}</div>
                </div>
            </div>
        );
    }
}

class App extends React.Component{
    render() {
        return (
            <div style={styleDiv}>
                <WeatherCard name="Утро" temp="19" precipitation="Солнечно"/>
                <WeatherCard name="День" temp="24" precipitation="Немного облачно"/>
                <WeatherCard name="Вечер" temp="27" precipitation="Облачно"/>
                <WeatherCard name="Ночь" temp="19" precipitation="Дождь"/>
            </div>
        );
    }
}

ReactDOM.render(
        <App />
    ,
    document.getElementById('root')
);