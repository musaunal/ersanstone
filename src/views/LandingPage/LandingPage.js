import React, { useRef } from 'react'
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import * as Scroll from 'react-scroll';

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";
import PortfolioSection from "views/LandingPage/Sections/PortfolioSection";
import PricingSection from "views/LandingPage/Sections/PricingSection";


const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Sadakat Mermer"
        rightLinks={<HeaderLinks Scroll={Scroll} />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/mezarlık1.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={12}>
              <h1 className={classes.title}>Her Nefis Ölümü Tadacaktır</h1>
              <h4>
                Bir Ömür Geçti Aldandım<br />
                Gaflet Uykusuna Daldım<br />
                Günahkar Şeytana kandım<br />
                Merhamet Et Bize<br />
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Tanıtım Videosu
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <PortfolioSection />
          <PricingSection Scroll={Scroll}/>
          <TeamSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
