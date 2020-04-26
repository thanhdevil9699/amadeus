import React from "react";
import PropTypes from "prop-types";
import "../Asset/css/LienHe.css";
import "../Asset/css/bootstrap.css";

LienHe.propTypes = {};

function LienHe(props) {
  return (
    <div  className="page-header section-dark" style={{ 
        backgroundImage:
          "url(" + require("../Asset/Img/wl.jpg") + ")"
      }}
    >
        <div className="filter" />
        <div className="justify-content-center">

        <h2 className="text-center text-white Title">Amadeus</h2>
        <div className="col-xd-10 pl-5 pr-5 p-4 box-under">
                <h3 className="text-center ThongTin">Thông Tin Liên Hệ</h3>
                <div className="card-body">

                    <div className="row no-gutters align-items-center p-3 bg-light m-2 box">
        
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Facebook-icon-1.png/600px-Facebook-icon-1.png" className="img-icon"></img>
                                <p className="Text-icon col ml-2 Text-fgp">Facebook: <span className="span-text">https://www.facebook.com/</span></p>
                    </div>
                    <div className="row no-gutters align-items-center p-3 bg-light m-2">
        
                                <img src="https://cdn4.iconfinder.com/data/icons/free-colorful-icons/360/gmail.png" className="img-icon"></img>
                                <p className="Text-icon col ml-2 Text-fgp">Gmail:  <span className="span-text">Amadeus-Key@gmail.com</span></p>
                    </div>
                    <div className="row no-gutters align-items-center p-3 bg-light m-2">
        
                                 <img src="https://img.favpng.com/15/7/19/call-icon-phone-icon-telephone-icon-png-favpng-nPU5MiPqKftnfQK92YNYj85uP.jpg" className="img-icon"></img>
                                   <p className="Text-icon col ml-2 Text-fgp">Hotline:  <span className="span-text">19001001</span></p>
                     </div>
                                          
                </div>
                

              
        </div>

        </div>
     

    </div>
  );
}

export default LienHe;