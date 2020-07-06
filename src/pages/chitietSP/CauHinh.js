import React from "react";
import PropTypes from "prop-types";
import $ from 'jquery';
import "../../Asset/css/ChiTietSP.css";




export default class CauHinh extends React.Component{
   
    componentDidMount = () =>{
    
    
    }

    render() {
        return (
       <div className="container-fluid">
           <p className="text-light" style={{fontSize:"25px"}}>Cấu hình yêu cầu</p>
           <div className="jumbotron" style={{background: "rgba(60, 60, 60, 0.5)",}}>
           <p className="text-cauhinh">+ Yêu cầu bộ sử lí và hệ điêu hành:  <span className="span-text text-light">64 bit</span></p>
           <p className="text-cauhinh">+ HĐH:  <span className="span-text text-light">win 7</span></p>
           <p className="text-cauhinh">+ Bộ xử lí:  <span className="span-text text-light">Intel® Core ™ i3-8100 / AMD Ryzen ™ 3 1200</span></p>
           <p className="text-cauhinh">+ RAM:  <span className="span-text text-light">8G</span></p>
           <p className="text-cauhinh">+ Dung lượng:  <span className="span-text text-light">80G</span></p>
           <p className="text-cauhinh">+ DirectX:  <span className="span-text text-light">ver 11</span></p>
           <p className="text-cauhinh">+ Card đồ họa:  <span className="span-text text-light">NVIDIA® GeForce® GTX 760 or AMD Radeon™ R7 260x with 2GB Video RAM</span></p>
           </div>
       </div>
        )
    }
}