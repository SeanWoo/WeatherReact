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
    render(){
        const styleCard = {
            backgroundColor: "#888",
            padding: "40px"
        }
        return (
            <div style={styleCard}>
                <h2>{this.props.name}</h2>
                <h4>{this.state.weather[this.props.time].temp}</h4>
                <h4>{this.state.weather[this.props.time].precipitation}</h4>
            </div>
        );
    }
}

class App extends React.Component{
    render() {
        const styleDiv = {
            display: "flex",
            justifyContent: "space-around"
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