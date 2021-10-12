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
import ModalImage from "react-modal-image";
import { SRLWrapper } from "simple-react-lightbox";

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
import work11 from "assets/img/mezarlar/r11.jpg";
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
import work23 from "assets/img/mezarlar/r23.jpg";
import work24 from "assets/img/mezarlar/r24.jpg";
import work25 from "assets/img/mezarlar/r25.jpg";
import work26 from "assets/img/mezarlar/r26.jpg";
import work27 from "assets/img/mezarlar/r27.jpg";
import work28 from "assets/img/mezarlar/r28.jpg";
import work29 from "assets/img/mezarlar/r29.jpg";
import work30 from "assets/img/mezarlar/r30.jpg";
import work31 from "assets/img/mezarlar/r31.jpg";
import work32 from "assets/img/mezarlar/r32.jpg";
import work33 from "assets/img/mezarlar/r33.jpg";
import work34 from "assets/img/mezarlar/r34.jpg";
import work35 from "assets/img/mezarlar/r35.jpg";
import work36 from "assets/img/mezarlar/r36.jpg";

import b1 from "assets/img/mutfak/b1.jpeg";
import b2 from "assets/img/mutfak/b2.jpeg";
import h1 from "assets/img/mutfak/h1.jpeg";
import h2 from "assets/img/mutfak/h2.jpeg";
import bl1 from "assets/img/mutfak/bl1.jpg";
import bl2 from "assets/img/mutfak/bl2.jpg";
import bl3 from "assets/img/mutfak/bl3.jpg";
import bl4 from "assets/img/mutfak/bl4.jpg";
import bl5 from "assets/img/mutfak/bl5.jpg";
import m4 from "assets/img/mutfak/m4.jpg";
import m3 from "assets/img/mutfak/m3.jpg";
import m2 from "assets/img/mutfak/m2.jpg";
import m1 from "assets/img/mutfak/m1.jpg";

import mu1 from "assets/img/mutfak/mu1.jpg";
import mu2 from "assets/img/mutfak/mu2.jpg";
import mu3 from "assets/img/mutfak/mu3.jpg";
import mu4 from "assets/img/mutfak/mu4.jpg";
import mu5 from "assets/img/mutfak/mu5.jpg";
import mu6 from "assets/img/mutfak/mu6.jpg";
import mu7 from "assets/img/mutfak/mu7.jpg";
import mu8 from "assets/img/mutfak/mu8.jpg";
import mu9 from "assets/img/mutfak/mu9.jpg";
import mu10 from "assets/img/mutfak/mu10.jpg";
import mu11 from "assets/img/mutfak/mu11.jpg";
import mu12 from "assets/img/mutfak/mu12.jpg";
import mu13 from "assets/img/mutfak/mu13.jpg";


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
          <SRLWrapper>
            <NavPills alignCenter color="primary" tabs={[
              {
                tabButton: "Mezar", tabIcon: Collections, tabContent: (
                  <GridContainer justify="center">
                    <GridItem xs={6} sm={6} md={2}>
                      <img alt="..." src={work2} className={navImageClasses} />
                      <img alt="..." src={work10} className={navImageClasses} />
                      <img alt="..." src={work14} className={navImageClasses} />
                      <img alt="..." src={work29} className={navImageClasses} />
                      <img alt="..." src={work15} className={navImageClasses} />
                      <img alt="..." src={work20} className={navImageClasses} />
                      <img alt="..." src={work28} className={navImageClasses} />
                      <img alt="..." src={work34} className={navImageClasses} />
                      <img alt="..." src={work35} className={navImageClasses} />
                    </GridItem>
                    <GridItem xs={6} sm={6} md={2}>
                      <img alt="..." src={work1} className={navImageClasses} />
                      <img alt="..." src={work12} className={navImageClasses} />
                      <img alt="..." src={work13} className={navImageClasses} />
                      <img alt="..." src={work30} className={navImageClasses} />
                      <img alt="..." src={work16} className={navImageClasses} />
                      <img alt="..." src={work19} className={navImageClasses} />
                      <img alt="..." src={work32} className={navImageClasses} />
                      <img alt="..." src={work33} className={navImageClasses} />
                      <img alt="..." src={work36} className={navImageClasses} />
                    </GridItem>
                    <GridItem xs={6} sm={6} md={2}>
                      <img alt="..." src={work27} className={navImageClasses} />
                      <img alt="..." src={work11} className={navImageClasses} />
                      <img alt="..." src={work8} className={navImageClasses} />
                      <img alt="..." src={work22} className={navImageClasses} />
                      <img alt="..." src={work24} className={navImageClasses} />
                      <img alt="..." src={work18} className={navImageClasses} />
                      <img alt="..." src={work3} className={navImageClasses} />
                      <img alt="..." src={work7} className={navImageClasses} />
                      <img alt="..." src={work26} className={navImageClasses} />
                    </GridItem>
                    <GridItem xs={6} sm={6} md={2}>
                      <img alt="..." src={work21} className={navImageClasses} />
                      <img alt="..." src={work23} className={navImageClasses} />
                      <img alt="..." src={work9} className={navImageClasses} />
                      <img alt="..." src={work6} className={navImageClasses} />
                      <img alt="..." src={work31} className={navImageClasses} />
                      <img alt="..." src={work17} className={navImageClasses} />
                      <img alt="..." src={work4} className={navImageClasses} />
                      <img alt="..." src={work5} className={navImageClasses} />
                      <img alt="..." src={work25} className={navImageClasses} />
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
                    <GridItem xs={12} sm={12} md={4}>
                      <img alt="..." src={mu1} className={navImageClasses} />
                      <img alt="..." src={mu2} className={navImageClasses} />
                      <img alt="..." src={mu3} className={navImageClasses} />
                      <img alt="..." src={mu4} className={navImageClasses} />
                      <img alt="..." src={mu5} className={navImageClasses} />
                      <img alt="..." src={mu6} className={navImageClasses} />
                      <img alt="..." src={mu7} className={navImageClasses} />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <img alt="..." src={mu9} className={navImageClasses} />
                      <img alt="..." src={mu8} className={navImageClasses} />
                      <img alt="..." src={mu10} className={navImageClasses} />
                      <img alt="..." src={mu11} className={navImageClasses} />
                      <img alt="..." src={mu12} className={navImageClasses} />
                      <img alt="..." src={mu13} className={navImageClasses} />
                    </GridItem>
                  </GridContainer>
                )
              },
              {
                tabButton: "Banyo", tabIcon: Collections, tabContent: (
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4}>
                      <img alt="..." src={b1} className={navImageClasses} />
                      <img alt="..." src={b2} className={navImageClasses} />
                    </GridItem>
                  </GridContainer>
                )
              },
              {
                tabButton: "Hamam", tabIcon: Collections, tabContent: (
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4}>
                      <img alt="..." src={h1} className={navImageClasses} />
                      <img alt="..." src={h2} className={navImageClasses} />
                    </GridItem>
                    {/* <GridItem xs={12} sm={12} md={4}>
                  </GridItem> */}
                  </GridContainer>
                )
              },
              {
                tabButton: "Merdiven", tabIcon: Collections, tabContent: (
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4}>
                      <img alt="..." src={m1} className={navImageClasses} />
                      <img alt="..." src={m2} className={navImageClasses} />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <img alt="..." src={m3} className={navImageClasses} />
                      <img alt="..." src={m4} className={navImageClasses} />
                    </GridItem>
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
                      <img alt="..." src={bl1} className={navImageClasses} />
                      <img alt="..." src={bl2} className={navImageClasses} />
                      <img alt="..." src={bl3} className={navImageClasses} />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <img alt="..." src={bl4} className={navImageClasses} />
                      <img alt="..." src={bl5} className={navImageClasses} />
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
          </SRLWrapper>
        </GridItem>
      </GridContainer>
    </div>
  );
}
