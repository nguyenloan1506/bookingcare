import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./HomeHeader.scss";

class HomeHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="left-content">
              <i className="fa-solid fa-bars"></i>
              <div className="header-logo"></div>
            </div>

            <div className="center-content">
              <div className="child-content">
                <div>
                  <b>Chuyen khoa</b>
                </div>
                <div className="sub-title">Tim bac si theo chuyen khoa</div>
              </div>

              <div className="child-content">
                <div>
                  <b>Chuyen khoa1</b>
                </div>
                <div className="sub-title">Tim bac si theo chuyen khoa</div>
              </div>

              <div className="child-content">
                <div>
                  <b>Chuyen khoa2</b>
                </div>
                <div className="sub-title">Tim bac si theo chuyen khoa</div>
              </div>

              <div className="child-content">
                <div>
                  <b>Chuyen khoa3</b>
                </div>
                <div className="sub-title">Tim bac si theo chuyen khoa</div>
              </div>
            </div>

            <div className="right-content">
              <div className="support">
                <i className="fa-solid fa-circle-question"></i>
                Ho tro
              </div>

              <div className="flag">VN</div>
            </div>
          </div>
        </div>

        <div className="home-header-banner">
          <div className="content-up">
            <div className="title1">NỀN TẢNG Y TẾ</div>

            <div className="title2">CHĂM SÓC SỨC KHỎE TOÀN DIỆN</div>

            <div className="search">
              <i class="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder="Tim kiem khoa kham benh" />
            </div>
          </div>

          <div className="content-down">
            <div className="options">
              <div className="option-child">
                <div className="icon-child">
                  <i className="fa-solid fa-hospital"></i>
                </div>

                <div className="text-child">Khám Chuyên khoa</div>
              </div>

              <div className="option-child">
                <div className="icon-child">
                  <i className="fa-solid fa-mobile-screen"></i>
                </div>

                <div className="text-child">Khám tu xa</div>
              </div>

              <div className="option-child">
                <div className="icon-child">
                  <i className="fa-solid fa-bed-pulse"></i>
                </div>

                <div className="text-child">Khám tong quat</div>
              </div>

              <div className="option-child">
                <div className="icon-child">
                  <i className="fa-solid fa-microscope"></i>
                </div>

                <div className="text-child">xet nghiem y hoc</div>
              </div>

              <div className="option-child">
                <div className="icon-child">
                  <i className="fa-solid fa-user-doctor"></i>
                </div>

                <div className="text-child">suc khoe tam than</div>
              </div>

              <div className="option-child">
                <div className="icon-child">
                  <i className="fa-solid fa-tooth"></i>
                </div>

                <div className="text-child">kham nha khoa</div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
