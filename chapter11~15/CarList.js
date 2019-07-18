import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class CarList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // carNumber: '...',
            // owner: '...'
            carlist:[]
        }
    }

//     let promise1 = new Promise((resolve, reject) => {
//         if (condition) {
//             resolve('success');
//         } else {
//             reject('fail');
//         }
//     });
// promise1
//     .then((message) => {
//         console.log(message);
//         ansyFunc(2);
//     })
//     .then(message => {
//         anyFunc(2);
//     })
//     .catch((error) => {
//         console.error(error);
//     })

// componentDidMount() {
//     fetch("http://70.12.50.160:5001/api/carlist")
//     .then(response => {
//         console.log('success')
//         // console.log(response)

//         return response.json();
//     })
//     .catch(error => {
//         console.log('fail')
//         console.error(error)
//     })
// }


componentDidMount() {
    axios({
        url: 'http://70.12.50.160:5001/api/carlist',
        method: 'get'
    })
        .then(response => {
            console.log('success: ', response);

            // let arr = [1,2,3,4,5];
            // let newArr = arr.map(num => num*2);

            let newList = response.data.map(c => {
                return(
                <tr key={c.carNumber}>
                    <td>{c.carNumber}</td>
                    <td>{c.owner}</td>
                    <td>{c.model}</td>
                    <td>{c.company}</td>
                    <td>{c.numOfAccident}</td>
                    <td>{c.numOfOwnerChange}</td>
                </tr>
                );
            })


            this.setState({
                carlist: newList
                // carNumber: response.data[0].carNumber,
                // owner: response.data[0].owner,
                // model: response.data[0].model,
                // company: response.data[0].company,
                // numOfAccident: response.data[0].numOfAccident,
                // numOfOwnerChange: response.data[0].numOfOwnerChange,
            })
        })

        .catch(error => {
            console.log('error :', error);
            this.setState({
                carlist:[]
            })
        });
}
render() {
    return (
        <div>
            <h1>차량 정보</h1>
            <Table>
                <thead>
                    <tr>
                        <th>차량번호</th>
                        <th>소유자</th>
                        <th>모델</th>
                        <th>회사</th>
                        <th>사고횟수</th>
                        <th>소유자 변경횟수</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>
                        <td>{this.state.carNumber}</td>
                        <td>{this.state.owner}</td>
                        <td>{this.state.model}</td>
                        <td>{this.state.company}</td>
                        <td>{this.state.numOfAccident}</td>
                        <td>{this.state.numOfOwnerChange}</td>
                    </tr> */}
                    {this.state.carlist}
                </tbody>
            </Table>
        </div>
    );
}
}

export default CarList;







// carlist에서 car컨퍼런트 여러개를 포함하는 구조로 만들게끔 하기
