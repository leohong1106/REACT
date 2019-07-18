import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginForm.css';
class LoginForm extends Component {
    render() {
        return (
                <Form className="login-form">
                    <h1 className="text-center">
                        carHistory.com
                    </h1>
                    <h3 className="text-center">Welcome!!!</h3>
                    <FormGroup>
                        <Label>email</Label>
                        <Input type="email" placeholder="E-mail"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input type="password" placeholder="Password"></Input>
                    </FormGroup>
                    <Button className="btn btn -lg btn-dark btn-block">로그인</Button>
                </Form>
        );
    };
};

export default LoginForm;
