import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import './index.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
const axios = require('axios');
var params = {
    access_key: 'bceec5cb6ece63e53832c24907591e29',
    query: 'Ha Noi'
}
class Challenge1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchName: '',
            data:{
                current:{
                    weather_icons:[],
                    weather_descriptions:[]
                }
            }
        }
    }
   
    //live search
    handleChange(event, _type) {
        this.setState({
            searchName: event.target.value
        })
        params.query = this.state.searchName;
        axios.get('http://api.weatherstack.com/current', { params })
            .then(response => {
                this.setState({
                    ...this.state,
                    data:response.data
                })
             
            }).catch(error => {
                console.log(error);
            });
        
    }
    renderCity() {
        if(this.state.data.location)
        return (<div className="container">
            <Card style={{width:'50%',margin:'5% auto'}}>
                <Card.Header>{this.state.data.location.name} - {this.state.data.location.country}</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Temperature: {this.state.data.current.temperature}</ListGroup.Item>
                    <ListGroup.Item>Weather Icon: {this.state.data.current.weather_icons.map((data, index) => <img key={index} src={data} />)}</ListGroup.Item>
                    <ListGroup.Item>Weather Description: {this.state.data.current.weather_descriptions.map((data, index) => <p key={index}>{data}</p>)}</ListGroup.Item>
                    <ListGroup.Item>Wind degree: {this.state.data.current.wind_degree}</ListGroup.Item>
                    <ListGroup.Item>Wind dir: {this.state.data.current.wind_dir}</ListGroup.Item>
                    <ListGroup.Item>Wind speed: {this.state.data.current.wind_speed}</ListGroup.Item>
                    <ListGroup.Item>Humidity: {this.state.data.current.humidity}</ListGroup.Item>
                </ListGroup>
            </Card>
        </div>)
        else return <div className="container"><p>Mời bạn nhập</p></div>
    }
    render() {
        return (<div className="container">
            <div className="challenge1">
                <h1>Challenge 1:</h1>
                <br />
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Nhập tên thành phố: </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="City Name"
                        name='searchName'
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value={this.state.searchName}
                        onChange={(event) => this.handleChange(event, 'searchName')}
                    />
                </InputGroup>
               
            </div>
            <div className="">{this.renderCity()}</div>
        </div>)
    }
}
export default Challenge1