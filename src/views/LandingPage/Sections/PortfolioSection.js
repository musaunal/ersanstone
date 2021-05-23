import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import studio1 from "assets/img/mezarlar/IMG_0164.JPG";
import studio2 from "assets/img/mezarlar/IMG_0176.JPG";
import studio3 from "assets/img/mezarlar/IMG_0177.JPG";
import studio4 from "assets/img/mezarlar/IMG_0220.JPG";
import studio5 from "assets/img/mezarlar/IMG_0780.JPG";
import work1 from "assets/img/sebil/iasd.JPG";
import work2 from "assets/img/sebil/IMG_0886.JPG";
import work3 from "assets/img/sebil/iqwe.jpg";
import work4 from "assets/img/sebil/P_20161110_161908.jpg";
import work5 from "assets/img/sebil/P_20161110_161908.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function PortfolioSection(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    // className={classNames(classes.main, classes.mainRaised)}
    <div >
      <GridContainer>
        <GridItem >
          <h2 className={classes.title}>Referanslarımız</h2>
        </GridItem>
      </GridContainer>

      <GridContainer justify="center">
        <GridItem xs={10} className={classes.navWrapper}>
          <NavPills
            alignCenter
            color="primary"
            tabs={[
              {
                tabButton: "Mezarlar",
                tabIcon: Camera,
                tabContent: (
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4}>
                      <img alt="..." src={studio1} className={navImageClasses} />
                      <img alt="..." src={studio2} className={navImageClasses} />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <img alt="..." src={studio1} className={navImageClasses} />
                      <img alt="..." src={studio2} className={navImageClasses} />
                    </GridItem>
                  </GridContainer>
                )
              },
              {
                tabButton: "Mezarlar",
                tabIcon: Camera,
                tabContent: (
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4}>
                      <img alt="..." src={studio1} className={navImageClasses} />
                      <img alt="..." src={studio2} className={navImageClasses} />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <img alt="..." src={studio1} className={navImageClasses} />
                      <img alt="..." src={studio2} className={navImageClasses} />
                    </GridItem>
                  </GridContainer>
                )
              },
              {
                tabButton: "Mezarlar",
                tabIcon: Camera,
                tabContent: (
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4}>
                      <img alt="..." src={studio1} className={navImageClasses} />
                      <img alt="..." src={studio2} className={navImageClasses} />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <img alt="..." src={studio1} className={navImageClasses} />
                      <img alt="..." src={studio2} className={navImageClasses} />
                    </GridItem>
                  </GridContainer>
                )
              },
              {
                tabButton: "Mezarlar",
                tabIcon: Camera,
                tabContent: (
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4}>
                      <img alt="..." src={studio1} className={navImageClasses} />
                      <img alt="..." src={studio2} className={navImageClasses} />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <img alt="..." src={studio1} className={navImageClasses} />
                      <img alt="..." src={studio2} className={navImageClasses} />
                    </GridItem>
                  </GridContainer>
                )
              },
              {
                tabButton: "Hayratlar",
                tabIcon: Palette,
                tabContent: (
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4}>
                      <img
                        alt="..."
                        src={work1}
                        className={navImageClasses}
                      />
                      <img
                        alt="..."
                        src={work2}
                        className={navImageClasses}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <img
                        alt="..."
                        src={work4}
                        className={navImageClasses}
                      />
                      {/* <img
                        alt="..."
                        src={work5}
                        className={navImageClasses}
                      /> */}
                    </GridItem>
                  </GridContainer>
                )
              },
              {
                tabButton: "Mutfaklar",
                tabIcon: Favorite,
                tabContent: (
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4}>
                      <img
                        alt="..."
                        src={work3}
                        className={navImageClasses}
                      />
                      <img
                        alt="..."
                        src={studio3}
                        className={navImageClasses}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <img
                        alt="..."
                        src={work2}
                        className={navImageClasses}
                      />
                      <img
                        alt="..."
                        src={work1}
                        className={navImageClasses}
                      />
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
