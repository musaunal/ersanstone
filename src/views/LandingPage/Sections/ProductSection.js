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
    <div id="whoweare" className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Biz Kimiz</h2>
          <h5 className={classes.description}>
            Ersan Stone İç & Dış Tic. İnşaat, Madencilik, Sanayi Ltd. Şti. 2021 yılında kurulmuştur.
            Kuruluş itibari ile "ERSAN STONE" marka tescilliği ünvanını almıştır. Şirketimiz; Mermer, Granit, Trevertan,
            Andezit ve Onyx dogal taşları ile Mermerit, Çimstone vb suni taşların üretimini yapmaktadır.
            <br></br>
            <br></br>

            Ersan Stone markası; Mezar, Çeşme, Merdiven, Mutfak, Banyo, Pencere, Balkon vb. Taş işçiliği alanlarında profesyonel hizmetler sunmaktadır...
          </h5>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <h2 id="mission" className={classes.title}>Misyonumuz</h2>
          <h5 className={classes.description}>
            Danışan tüm müşterilerimizin sorunlarını dinleyerek, istekleri doğrultusunda doğru çözüme ulaşmaları noktasında
            uzman olduğumuz alanlarda kendilerine rehberlik etmek, Türk Ekonomisine ve Türk İstihdamına katkı sağlamak,
            doğru kalite-fiyat oranı sağlayarak geniş ürün yelpazesi ile tüketici beklentilerini en üst düzeyde karşılamak.
          </h5>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Vizyonumuz</h2>
          <h5 className={classes.description}>
            Küresel Ekonomide dünya devi, Türk gururu ve sektörün öncüsü olmak, Türkiye'nin yanı sıra tüm dünyada
            tüketicilerin sorunlarına çözüm sağlamak ve sürekli inovatif  kalmaktır.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <h2 className={classes.title}>Neden Biz</h2>
        <GridContainer>
          <GridItem xs={12} sm={12} md={2}>
            <InfoArea
              title="Kaliteli"
              description="Sunduğumuz tüm ürünler, 1.sınıf A kalite ürünlerden ve tecrübeli uzman kadromuz tarafından hazırlanmaktadır."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={2}>
            <InfoArea
              title="Garantili"
              description="Sunulan tüm ürünlerimizin oluşabilecek arıza ve tamiratı 5 yıl ücretsizdir."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="%100 Memnuniyet"
              description="Memnuniyet sonrası ödeme imkanı"
              icon={Chat}
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={2}>
            <InfoArea
              title="Ödeme Kolaylığı"
              description="kredi kartına 3 ay / elden 2 ay taksit imkanı."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={2}>
            <InfoArea
              title="Çevre Dostu"
              description="hizmet almış (şehir merkezinde) tüm müşrerilerimizin bakımları, ilk ay ücretsizdir."
              icon={Fingerprint}
              iconColor="info"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
