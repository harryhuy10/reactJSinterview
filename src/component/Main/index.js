import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import { Switch, Route } from 'react-router-dom';
import Challenge1 from '../Challenge1';
import Challenge2 from '../Challenge2';
import './index.css';
class Main extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <div className="container">
                        <Navbar.Brand className="imgHome" href="#home"><img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1004px-Google_%22G%22_Logo.svg.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        /></Navbar.Brand>

                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">

                                <Nav.Link href="/">Weather</Nav.Link>
                                <Nav.Link href="/challenge2">Prime number</Nav.Link>

                            </Nav>

                        </Navbar.Collapse>
                    </div>
                </Navbar>
                <Switch>
                    <Route exact path='/' component={Challenge1} />
                    <Route path='/challenge2' component={Challenge2} />
                </Switch>
            </div>
        )
    }
}
export default Main