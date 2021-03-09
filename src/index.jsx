import React from 'react'
import ReactDOM from 'react-dom';

class Card extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            weather: {
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
    render(){
        const styleCard = {
            backgroundColor: this.getColorByTime(),
            borderRadius: "20px",
            fontFamily: "Arial"
        }
        const styleNameCard = {
            width: "170px",
            textAlign: "center",
            fontWeight: "bold",
            paddingTop: "10px"
        }
        const styleTempCard = {
            padding: "10px"
        }
        const stylePrecipitationCard = {
            padding: "10px"
        }
        return (
            <div style={styleCard}>
                <div style={styleNameCard}>{this.props.name}</div>
                <div style={styleTempCard}>Температура: {this.state.weather[this.props.time].temp} C</div>
                <div style={stylePrecipitationCard}>Осадки: {this.state.weather[this.props.time].precipitation}</div>
            </div>
        );
    }
}

class App extends React.Component{
    render() {
        const styleDiv = {
            display: "flex",
            justifyContent: "space-around",
            maxWidth: "800px",
            margin: "auto"
        }
        return (
            <div style={styleDiv}>
                <Card name="Утро" time="morning"/>
                <Card name="День" time="day"/>
                <Card name="Вечер" time="evening"/>
                <Card name="Ночь" time="night"/>
            </div>
        );
    }
}

ReactDOM.render(
        <App />
    ,
    document.getElementById('root')
);