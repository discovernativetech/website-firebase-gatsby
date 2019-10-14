import React, { Component } from "react";
import { MDBCarouselItem, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBView } from "mdbreact";
import { Link } from "gatsby"

import Slider from '../Slider/Slider';

import styles from './TravellersTeamsTabs.module.css';
import Preview from "../Preview/Preview";

class TravellersTeamsTabs extends Component {
    constructor (props) {
      super(props);
      this.state = {
        activeItem: "t1"
      };
    }
    
    toggle = tab => e => {
        e.preventDefault();
      if (this.state.activeItem !== tab) {
        this.setState({
          activeItem: tab
        });
      }
    };

    render() {
      const {
        teamsTab,
        travellersTab
      } = this.props;

      const travellers = travellersTab.map((t, index) => {
        return (
          <MDBCarouselItem itemId={index+1} key={index}>
            <MDBView>
              <Preview title={t.title} image={t.image.childImageSharp.fluid} imageAlt={t.description} description={t.description} link={t.link} linkText={'VIEW THIS EXPERIENCE'} />
            </MDBView>
          </MDBCarouselItem>
        )
      });

      const teams = teamsTab.map((t, index) => {
        return (
          <MDBCarouselItem itemId={index+1} key={index}>
            <MDBView>
              <Preview title={t.title} image={t.image.childImageSharp.fluid} imageAlt={t.description} description={t.description} link={t.link} linkText={'VIEW THIS EXPERIENCE'} />
            </MDBView>
          </MDBCarouselItem>
        )
      })

      return (
        <>
        <MDBNav className="nav-tabs">
          <MDBNavItem className={styles.navItem}>
            <Link to="#" className={this.state.activeItem === "t1" ? styles.activeTab : styles.inactiveTab} onClick={this.toggle("t1")} role="tab" >
              <span className={styles.tabTitle}>TRAVELLERS</span>
            </Link>
          </MDBNavItem>
          <MDBNavItem className={styles.navItem}>
            <Link to="#" className={this.state.activeItem === "t2" ? styles.activeTab : styles.inactiveTab} onClick={this.toggle("t2")} role="tab" >
              <span className={styles.tabTitle}>TEAMS</span>
            </Link>
          </MDBNavItem>
        </MDBNav>
        <MDBTabContent activeItem={this.state.activeItem} >
          <MDBTabPane tabId="t1" role="tabpanel">
            {
              travellers && <Slider items={travellers} showControls/>
            }
          </MDBTabPane>
          <MDBTabPane tabId="t2" role="tabpanel">
            {
              teams && <Slider items={teams}/>
            }
          </MDBTabPane>
        </MDBTabContent>
        </>
    );
  }
}

export default TravellersTeamsTabs;