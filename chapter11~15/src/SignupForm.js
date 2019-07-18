import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon,
    InputGroupButtonDropdown, InputGroupDropdown, Dropdown,
    DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignupForm.css';
class LoginForm extends Component {
    constructor(props) {
        super(props);
    
        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.toggleSplit = this.toggleSplit.bind(this);
        this.state = {
          dropdownOpen: false,
          splitButtonOpen: false
        };
      }
    
      toggleDropDown() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen,
          dropdownOpen1: !this.state.dropdownOpen1
        });
      }
    
      toggleSplit() {
        this.setState({
          splitButtonOpen: !this.state.splitButtonOpen
        });
      }
    
    
      render() {
        return (
            
          <div id="Signup">
              <br />
              <h1>회원가입</h1>
              <br />
              <br />
              <hr />
            <InputGroup>
            <Input placeholder="아이디 입력해주세요" />
              <InputGroupAddon addonType="prepend"><Button>아이디 중복 여부</Button></InputGroupAddon>
            </InputGroup>
            <br />
            <InputGroup>
            <Input placeholder="비밀번호를 입력해주세요" />
            </InputGroup>
            <br />
            <InputGroup>
            <Input placeholder="비밀번호를 다시한번 입력해주세요" />
            </InputGroup>
            <br />
            <InputGroup>
            <Input placeholder="이름을 입력해주세요" />
            </InputGroup>
            <br />
            <InputGroup>
              <Input placeholder="메일을 입력해주세요" />
              <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                <DropdownToggle caret>
                  메일을 선택해주세요
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>google.com</DropdownItem>
                  <DropdownItem>naver.com</DropdownItem>
                  <DropdownItem>hanmail.net</DropdownItem>
                  <DropdownItem>yahoo.co.kr</DropdownItem>
                  <DropdownItem>chollian.com</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>직접입력</DropdownItem>
                </DropdownMenu>
              </InputGroupButtonDropdown>
            </InputGroup>
            <br />
            <InputGroup>
              <Input placeholder="취미를 입력해주세요" />
              <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen1} toggle={this.toggleDropDown}>
                <DropdownToggle caret>
                  취미를 선택해주세요
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>배드민턴 치기</DropdownItem>
                  <DropdownItem>영화 감상</DropdownItem>
                  <DropdownItem>음악 듣기</DropdownItem>
                  <DropdownItem>축구하기</DropdownItem>
                  <DropdownItem>색소폰</DropdownItem>
                  <DropdownItem>여행가기</DropdownItem>
                  <DropdownItem>스키타기</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>직접입력</DropdownItem>
                </DropdownMenu>
              </InputGroupButtonDropdown>
            </InputGroup>
            <br />
            <Button className="btn btn -lg btn-dark btn-block">회원가입하기</Button>
            <hr />
          </div>
        );
      }
};

export default LoginForm;
