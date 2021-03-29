import React,{FC,useState} from 'react';
import './data-list.css';
import 'antd/dist/antd.css';
import { Checkbox,Row, Col, Divider } from 'antd';






interface datalist {
    key: React.Key;
    name : string;
    orderNumber : string;
    date : string;
    reference : string;
    totalAmount:string;
    status:boolean;
}




var result : datalist[] = [
    {
        name: "samsamson",
        orderNumber: "S0-00004",
        date: "17/03/2021",
        reference: "fgggg",
        totalAmount: "Rs.60,000.00",
        status: false,
        key: '1',


    },
    {
        name: "samsamson",
        orderNumber: "S0-00003",
        date: "17/03/2021",
        reference: "qwewgrere",
        totalAmount: "Rs.60,000.00",
        status: false,
        key: '2',


    },
    {
        name: "samsamson",
        orderNumber: "S0-00002",
        date: "17/03/2021",
        reference: "fgfgfg",
        totalAmount: "Rs.60,000.00",
        status: false,
        key: '3',


    },
    {
        name: "samsamson",
        orderNumber: "S0-00001",
        date: "14/03/2021",
        reference: "55544",
        totalAmount: "Rs.60,000.00",
        status: true,
        key: '1',


    },
];


export const CustomerDetail: FC<datalist>=(props)=>{
    return <div className="data-list-container">

            {result.map((v,i)=>{
                return <div className="data-list-container2">

            <Row gutter={[16, 24]}>
            <Col  className="gutter-row" span={2}>
              <div className="check-box" >
              <Checkbox className="checkbox-border" ></Checkbox>
              </div>
            </Col>
            <Col className="gutter-row" span={14}>
              <div className="list-detail" >
                  <ul>
                      <li className="list-name">{v.name}</li>
                      <li><span className="order-number">{v.orderNumber} <span className="date" >{v.date}</span></span></li>
                      <li className="list-title">{v.reference}</li>
                  </ul>
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
            <div className="list-price" >
                  <ul>
                      <li className="list-price-amount">{v.totalAmount}</li>
                      <li className={v.status ? "list-price-title-confirmed" :"list-price-title"}>{v.status ? "CONFIRMED" : "DRAFT"}</li>
                  </ul>
              </div>
            </Col>
          </Row>
           <div className="horizontal-line" />
          </div>
      
      
        })}

    

        </div>
};
