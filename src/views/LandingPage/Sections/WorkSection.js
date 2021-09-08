import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div id="contact" className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Bizimle İletişime Geçin</h2>
          <h3 className={classes.description}>
            Fiyat öğrenme ve her türlü destek için bizi aramaktan çekinmeyin
            Her türlü ihtiyaclarınız ve siparişleriniz için lütfen bizimle iletişime geçin.
          </h3>
          <GridContainer>
            <GridItem xs={12}>
              <h3 className={classes.description}>Whatsap: +(90) 545 145 32 00</h3>
              <h3 className={classes.description}>GSM    : +(90) 545 145 32 00</h3>
            </GridItem>
            {/* <GridItem xs={12}>
              <h3 className={classes.description}>Telefon: 0 246 223 48 84</h3>
            </GridItem>
            <GridItem xs={12}>
              <h3 className={classes.description}>Yeni Sanayi sitesi 15 Blok No: 24</h3> */}
            {/* </GridItem> */}
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
