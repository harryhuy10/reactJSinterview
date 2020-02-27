import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
class Challenge2 extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            fromNumber: 0,
            toNumber: 0,
            data:[],
            index:0
        
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }
    getData() {
        let array = [];
        if(this.state.fromNumber <= this.state.toNumber){
            for(let i = this.state.fromNumber; i<= this.state.toNumber;i++){
              
                if (this.kiem_tra_snt(i)==1){
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
            {this.state.data.map((item,index) =><p key={index}>{item}</p>)}
        </div>)
        }
        else return (<div><p>Mời bạn nhập</p></div>)
    }
    kiem_tra_snt(n) {
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
                <p><b>Challenge 2: </b></p>
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