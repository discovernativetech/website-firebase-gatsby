import React, { Component } from "react";
import { MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import { Link } from "gatsby"

class Tabs extends Component {
    state = {
      activeItem: "1"
    };

    toggle = tab => e => {
        e.preventDefault();
      if (this.state.activeItem !== tab) {
        this.setState({
          activeItem: tab
        });
      }
    };

    render() {
      return (
        <MDBContainer>
        <MDBNav className="nav-tabs mt-5">
          <MDBNavItem>
            <Link to="#" className={this.state.activeItem === "1" ? "active" : ""} onClick={this.toggle("1")} role="tab" >
              Home
            </Link>
          </MDBNavItem>
          <MDBNavItem>
            <Link to="#" className={this.state.activeItem === "2" ? "active" : ""} onClick={this.toggle("2")} role="tab" >
              Profile
            </Link>
          </MDBNavItem>
          <MDBNavItem>
            <Link to="#" className={this.state.activeItem === "3" ? "active" : ""} onClick={this.toggle("3")} role="tab" >
              Profile
            </Link>
          </MDBNavItem>
        </MDBNav>
        <MDBTabContent activeItem={this.state.activeItem} >
          <MDBTabPane tabId="1" role="tabpanel">
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Nihil odit magnam minima, soluta doloribus reiciendis
              molestiae placeat unde eos molestias. Quisquam aperiam,
              pariatur. Tempora, placeat ratione porro voluptate odit
              minima.
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="2" role="tabpanel">
            <p className="mt-2">
              Quisquam aperiam, pariatur. Tempora, placeat ratione porro
              voluptate odit minima. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Nihil odit magnam minima,
              soluta doloribus reiciendis molestiae placeat unde eos
              molestias.
            </p>
            <p>
              Quisquam aperiam, pariatur. Tempora, placeat ratione porro
              voluptate odit minima. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Nihil odit magnam minima,
              soluta doloribus reiciendis molestiae placeat unde eos
              molestias.
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="3" role="tabpanel">
            <p className="mt-2">
              Quisquam aperiam, pariatur. Tempora, placeat ratione porro
              voluptate odit minima. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Nihil odit magnam minima,
              soluta doloribus reiciendis molestiae placeat unde eos
              molestias.
            </p>
          </MDBTabPane>
        </MDBTabContent>
      </MDBContainer>
    );
  }
}
export default Tabs;