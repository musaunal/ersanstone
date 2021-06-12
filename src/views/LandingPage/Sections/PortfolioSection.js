import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import Camera from "@material-ui/icons/Camera";
import Collections from "@material-ui/icons/Collections";
// import Favorite from "@material-ui/icons/Favorite";
// core components

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import work1 from "assets/img/mezarlar/r1.jpg";
import work2 from "assets/img/mezarlar/r2.jpg";
import work3 from "assets/img/mezarlar/r3.jpg";
import work4 from "assets/img/mezarlar/r4.jpg";
import work5 from "assets/img/mezarlar/r5.jpg";
import work6 from "assets/img/mezarlar/r6.jpg";
import work7 from "assets/img/mezarlar/r7.jpg";
import work8 from "assets/img/mezarlar/r8.jpg";
import work9 from "assets/img/mezarlar/r9.jpg";
import work10 from "assets/img/mezarlar/r10.jpg";
// import work11 from "assets/img/mezarlar/r11.jpg";
import work12 from "assets/img/mezarlar/r12.jpg";
import work13 from "assets/img/mezarlar/r13.jpg";
import work14 from "assets/img/mezarlar/r14.jpg";
import work15 from "assets/img/mezarlar/r15.jpg";
import work16 from "assets/img/mezarlar/r16.jpg";
import work17 from "assets/img/mezarlar/r17.jpg";
import work18 from "assets/img/mezarlar/r18.jpg";
import work19 from "assets/img/mezarlar/r19.jpg";
import work20 from "assets/img/mezarlar/r20.jpg";
import work21 from "assets/img/mezarlar/r21.jpg";
import work22 from "assets/img/mezarlar/r22.jpg";
// import work23 from "assets/img/mezarlar/r23.jpg";
import work24 from "assets/img/mezarlar/r24.jpg";
import work25 from "assets/img/mezarlar/r25.jpg";
// import work26 from "assets/img/mezarlar/r26.jpg";
// import work27 from "assets/img/mezarlar/r27.jpg";
import work28 from "assets/img/mezarlar/r28.jpg";
import work29 from "assets/img/mezarlar/r29.jpg";
import work30 from "assets/img/mezarlar/r30.jpg";
import work31 from "assets/img/mezarlar/r31.jpg";
import work32 from "assets/img/mezarlar/r32.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function PortfolioSection(props) {
  const classes = useStyles();
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    // className={classNames(classes.main, classes.mainRaised)}
    <div id="references">
      <GridContainer>
        <GridItem >
          <h2 className={classes.title}>Referanslarımız</h2>
        </GridItem>
      </GridContainer>

      <GridContainer justify="center">
        <GridItem xs={10} className={classes.navWrapper}>
          <NavPills alignCenter color="primary" tabs={[
              {
                tabButton: "Mezar", tabIcon: Collections, tabContent: (
                  <GridContainer justify="center">
                    <GridItem xs={6} sm={6} md={2}>
                      <img alt="..." src={work2} className={navImageClasses} />
                      <img alt="..." src={work10} className={navImageClasses} />
                      <img alt="..." src={work15} className={navImageClasses} />
                      <img alt="..." src={work16} className={navImageClasses} />
                      <img alt="..." src={work8} className={navImageClasses} />
                      <img alt="..." src={work6} className={navImageClasses} />
                      <img alt="..." src={work20} className={navImageClasses} />
                      
                    </GridItem>
                    <GridItem xs={6} sm={6} md={2}>
                      <img alt="..." src={work1} className={navImageClasses} />
                      <img alt="..." src={work13} className={navImageClasses} />
                      <img alt="..." src={work14} className={navImageClasses} />
                      <img alt="..." src={work17} className={navImageClasses} />
                      <img alt="..." src={work9} className={navImageClasses} />
                      <img alt="..." src={work24} className={navImageClasses} />
                      <img alt="..." src={work21} className={navImageClasses} />
                    </GridItem>
                    <GridItem xs={6} sm={6} md={2}>
                      <img alt="..." src={work18} className={navImageClasses} />
                      <img alt="..." src={work30} className={navImageClasses} />
                      <img alt="..." src={work28} className={navImageClasses} />
                      <img alt="..." src={work3} className={navImageClasses} />
                      <img alt="..." src={work29} className={navImageClasses} />
                      <img alt="..." src={work7} className={navImageClasses} />
                      <img alt="..." src={work22} className={navImageClasses} />
                    </GridItem>
                    <GridItem xs={6} sm={6} md={2}>
                      <img alt="..." src={work19} className={navImageClasses} />
                      <img alt="..." src={work32} className={navImageClasses} />
                      <img alt="..." src={work25} className={navImageClasses} />
                      <img alt="..." src={work4} className={navImageClasses} />
                      <img alt="..." src={work31} className={navImageClasses} />
                      <img alt="..." src={work5} className={navImageClasses} />
                      <img alt="..." src={work12} className={navImageClasses} />
                    </GridItem>
                  </GridContainer>
                )
              },
              {
                tabButton: "Çeşme", tabIcon: Collections, tabContent: (
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4}>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                    </GridItem>
                  </GridContainer>
                )
              },
              {
                tabButton: "Mutfak", tabIcon: Collections, tabContent: (
                  <GridContainer justify="center">
                    
                  </GridContainer>
                )
              },
              {
                tabButton: "Banyo", tabIcon: Collections, tabContent: (
                  <GridContainer justify="center">
                    
                  </GridContainer>
                )
              },
              {
                tabButton: "Hamam", tabIcon: Collections, tabContent: (
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4}>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                    </GridItem>
                  </GridContainer>
                )
              },
              {
                tabButton: "Merdiven", tabIcon: Collections, tabContent: (
                  <GridContainer justify="center">
                    
                  </GridContainer>
                )
              },
              {
                tabButton: "Pencere", tabIcon: Collections, tabContent: (
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4}>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                    </GridItem>
                  </GridContainer>
                )
              },
              {
                tabButton: "Balkon", tabIcon: Collections, tabContent: (
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4}>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                    </GridItem>
                  </GridContainer>
                )
              },
              {
                tabButton: "Şömine", tabIcon: Collections, tabContent: (
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4}>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                    </GridItem>
                  </GridContainer>
                )
              },
              {
                tabButton: "Dekoratif", tabIcon: Collections, tabContent: (
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4}>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                    </GridItem>
                  </GridContainer>
                )
              }
            ]}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
