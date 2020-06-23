import React from "react";
import "../../Asset/css/ChiTietSP.css";
import "../../Asset/css/bootstrap.css";
import DieuHuong from "./ThongTin.js";

import axios from 'axios';


export default class ChiTietSP extends React.Component {
  constructor(props) {
    super(props);
    this.state = { HienThi: true,
    ListData:{
      category:[],
      _id:"",
      name:"",
      nameURL:"",
      img:"",
      imgHD:"",
      decription:"",
      conf:"",
      producer:"",
      price: 0 ,
      number:0,
      createAt:"",
      _v:0,
      reviews:[],
      id:""
    } }; 
  }
 

  componentDidMount() {
    axios.get(`https://amadeuss.herokuapp.com/products/${this.props.match.params.slug}`)
      .then(res => {
        const ListData = res.data;
        this.setState({ ListData });
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }

  render() {
    function toSlug(str) {
      // Chuyển hết sang chữ thường
      str = str.toLowerCase();

      // xóa dấu
      str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, "a");
      str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, "e");
      str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, "i");
      str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, "o");
      str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, "u");
      str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, "y");
      str = str.replace(/(đ)/g, "d");

      // Xóa ký tự đặc biệt
      str = str.replace(/([^0-9a-z-\s])/g, "");

      // Xóa khoảng trắng thay bằng ký tự -
      str = str.replace(/(\s+)/g, "-");

      // xóa phần dự - ở đầu
      str = str.replace(/^-+/g, "");

      // xóa phần dư - ở cuối
      str = str.replace(/-+$/g, "");

      // return
      return str;
    }


    const formatter = new Intl.NumberFormat('vi-VI', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0
    })
    return (
      <div
        className="container-fluid p-2"
        style={{
          backgroundColor: "black",
        }}
      >
        {/*carosell */}
        <div>
          <div id="carouselId" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li
                data-target="#carouselId"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#carouselId" data-slide-to={1} />
              <li data-target="#carouselId" data-slide-to={2} />
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <img
                  src={this.state.ListData.imgHD}
                  className="img-fluid mx-auto d-block"
                  alt="First slide"

                />
              </div>
              <div className="carousel-item">
                <img
                 src={this.state.ListData.imgHD}
                  className="img-fluid mx-auto d-block"
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={this.state.ListData.imgHD}
                  className="img-fluid mx-auto d-block"
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselId"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselId"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>

        {/*sản phẩm */}

        
           
              <div className="container mt-3">
                <div
                  className="jumbotron row p-4"
                  style={{ background: "rgba(60, 60, 60, 0.5)" }}
                >
                  <div className="col-xl-3 col-lg-3 col-md-3 align-content-center justify-content-center img-game">
                    <img
                      src={this.state.ListData.imgHD}
                      alt="Product"
                      className="img-game-2 p-3"
                    />
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-5 column ">
                    <h2 className="text-light">{this.state.ListData.name}</h2>
                    <p className="text-light eclipse-text">
                      {this.state.ListData.decription}
                    </p>
                  </div>

                  <div className="col-xl-3 col-lg-3 col-md-4 column">
                    <p className="text-light text">Giá sản Phẩm: </p>
                    <p className="text-warning gia"> {formatter.format(this.state.ListData.price)}</p>
                    <div className="column justify-content-center">
                      <button className="col-12 btn btn-danger text-white">
                        Mua ngay
                      </button>
                      <button
                        className="col-12 btn text-white"
                        style={{ background: "#00B894" }}
                      >
                        Thêm vào giỏ hàng
                      </button>
                    </div>
                  </div>
                </div>
              </div>
         

        {/*Button  */}
        <div className="container mb-3">
          <div
            className="jumbotron row p-4 row"
            style={{ background: "black" }}
          >
            <button
              className="btn col-xl-3 col-lg-3 col-md-3 col-5 col-sm-5 mr-2 mb-2 btn-danger text-white"
              onClick={() => this.setState({ HienThi: true })}
            >
              Thông tin game
            </button>
            <button
              className="btn col-xl-3 col-lg-3 col-md-3 col-6 col-sm-5 mb-2  text-white"
              onClick={() => this.setState({ HienThi: false })}
              style={{ background: "rgba(255, 255, 255, 0.1)" }}
            >
              Cấu hình yêu cầu
            </button>
          </div>
        </div>

        {/*Button  */}

        <div className="container">
          <DieuHuong HT={this.state.HienThi} DATA={this.state.ListData} />
        </div>
        <Footer/>
      </div>
    );
  }
}
