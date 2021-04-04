import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Equalizer";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Accessibility";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Biz Kimiz</h2>
          <h5 className={classes.description}>
            Sanat Mermer 2021 yılında abdullah ersan tarafından ısparta ilimizde kurulmuştur. Kuruluşundan 
            bu yana başta mezarlıklar olmak üzere, mutfak mermerleri, bahçe çeşmeleri, hayratlar gibi her türlü
            mermer ihtiyaçlarına karşılık vermektedir. Civar şehir ve beldelerimize ve ücra köylere kadar halkımızın
            ihtiyaçları uğruna kuruluşundan bu yana hizmetine devam etmektedir. 
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Kaliteli"
              description="Yüzlerce çeşit mermer ve granit modelleri kaliteli malzemeler ve sağlam işçilik"
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="2 yıl garantili"
              description="Tüm ürünlerimizin Tadilatı tamiratı bakımı 2 yıl boyunca ücretsizdir"
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Çevre Dostu"
              description="Mezarlarımızın temizliği itina ile yapılır. Üzerlerine çiçek dikimi ve suluma hizmetlerimiz vardır"
              icon={Fingerprint}
              iconColor="primary"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
