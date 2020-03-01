import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import ListGroup from 'react-bootstrap/ListGroup';
import './index.css';
class Challenge2 extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            fromNumber: 0,
            toNumber: 2,
            data:[],
            index:0
        
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(evt) {
        this.setState({ [evt.target.name]: parseInt(evt.target.value) });
    }
    getData() {
        let array = [];
        let temp = this.state.toNumber-this.state.fromNumber;
        if(temp>0){
            for(let i = this.state.fromNumber; i<= this.state.toNumber;i++){
                
                if (this.checkSum(i)==1){
                    array.push(i)
                }
            }
            this.setState({
                ...this.state,
                data: array,
                index:1
            })
        }else {
            this.setState({
                ...this.state,
                data: null,
                index:0
            })
        } 
    }
    renderResult() {
        if (this.state.index == 1){
        return (<div className="container">
            <br />
            <br />
            <ListGroup>
            {this.state.data.map((item,index) =><ListGroup.Item>{item}</ListGroup.Item>)}
            </ListGroup>
        </div>)
        }
        else return (<div><br/><br /><p>Mời bạn nhập</p></div>)
    }
    checkSum(n){
        n = n.toString();
        let arraySplit = n.split('').map(Number);
        let arraySquare = arraySplit.map(x => x**2);
        let sum = arraySplit.reduce(function(a,b) { return a + b; });
        let sumSquare = arraySquare.reduce(function(a,b) { return a + b; })
        if(this.checkSnt(sum)==1&&this.checkSnt(sumSquare)==1){
            return 1
        }
        else return 0

    }
    checkSnt(n) {
        var flag = true;
        if (n < 2) {
            flag = false;
        }
        else {
            for (var i = 2; i < n - 1; i++) {
                if (n % i == 0) {
                    flag = false;
                    break;
                }
            }
        }
        if (flag == true) {
            return 1;
        }
        else {
           return 0;
        }
    }
    render() {
        return (<div className="container">
            <div className="challenge2">
                <h1>Challenge 2: </h1>
                <br />
                <div>
                    <p>Khoảng bạn chọn:</p>
                    <InputGroup className="mb-3">

                        <FormControl
                            placeholder="Từ"
                            name='fromNumber'
                            onChange={this.handleChange}
                        />
                        <FormControl
                            placeholder="Đến"
                            name='toNumber'
                            onChange={this.handleChange}
                        />

                    </InputGroup>
                    <Button variant="primary" onClick={this.getData.bind(this)}>Submit</Button>

                </div>
                <div>{this.renderResult()}</div>
            </div>
        </div>)
    }
}
export default Challenge2