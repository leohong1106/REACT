import React, { Component } from 'react';
//클래스형 컴포넌트
// class MyName extends Component {

//     // static defaultProps = {
//     //     name: 'Markus'
//     // }

//     render() {
//         return (
//             <div>
//                 안녕하세요 제 이름은<b>{this.props.name}</b> 입니다.
//             </div>
//         );
//     }
// }

// // MyName.defaultProps = {
// //     name: '기본이름'
// // };





//함수형 컴포넌트
const MyName = ({ name }) => {
    return <div> 안녕하세요 제 이름은 {name} 입니다. </div>;
};

MyName.defaultProps = {
name: 'leo'
};







export default MyName;