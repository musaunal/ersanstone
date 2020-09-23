import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { PricingTable, PricingSlot, PricingDetail } from 'react-pricing-table';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
const useStyles = makeStyles(styles);

export default (props) => {
  const classes = useStyles();

  // style={{ color: "black", textAlign: "center", textDecoration: "none", }}
  return (
    <div>
      <div  >
        <GridContainer>
          <GridItem>
            <h2 className={classes.title} >Ücretlerimiz</h2>
          </GridItem>
        </GridContainer>
      </div>

      <div style={{ color: "grey" }}>
        < PricingTable highlightColor='#1976D2' >
          <PricingSlot buttonText='Sipariş Ver' title='Hesaplı Mezar' priceText='2499 ₺'
            onClick={() => {
              props.Scroll.animateScroll.scrollTo(3575)
            }} >
            <PricingDetail> Beyaz Mermer </PricingDetail>
            <PricingDetail> Normal Tasarım </PricingDetail>
            <PricingDetail> Normal Mezar Başlığı </PricingDetail>
          </PricingSlot>
          <PricingSlot highlighted buttonText='Sipariş Ver' title='Normal Mezar' priceText='3000 - 4000 ₺'
            onClick={() => {
              props.Scroll.animateScroll.scrollTo(3575)
            }} >
            <PricingDetail> Beyaz Mermer </PricingDetail>
            <PricingDetail> Çeşitli Mezar Modelleri </PricingDetail>
            <PricingDetail> Çeşitli Başlık Seçenekleri </PricingDetail>
            <PricingDetail> Mezar Suluğu ve Olukları </PricingDetail>
            <PricingDetail> En çok tercih edilen ürün </PricingDetail>
          </PricingSlot>
          <PricingSlot buttonText='Sipariş Ver' title='Lüks Mezar' priceText='5000 ₺ - 7500 ₺'
            onClick={() => {
              props.Scroll.animateScroll.scrollTo(3575)
            }} >
            <PricingDetail> Granit ve Siyah Mermer çeşitleri </PricingDetail>
            <PricingDetail> Özel Mezar Tasarımları </PricingDetail>
            <PricingDetail> Özel Tasarım Başlıklar </PricingDetail>
            <PricingDetail> Suluk ve Oluk Sistemleri </PricingDetail>
            <PricingDetail> Çiçeklendirme Hizmeti </PricingDetail>
            <PricingDetail> 1 yıllık ücretsiz sulama ve bakım </PricingDetail>
          </PricingSlot>
          <PricingSlot buttonText='Sipariş Ver' title='Özel Tasarım Mezarlar' priceText='10000 ₺ ve üstü'
            onClick={() => {
              props.Scroll.animateScroll.scrollTo(3575)
            }} >
            <PricingDetail> Granit ve Siyah Mermer çeşitleri </PricingDetail>
            <PricingDetail> Özel Mezar Tasarımları </PricingDetail>
            <PricingDetail> Özel Tasarım Başlıklar </PricingDetail>
            <PricingDetail> Suluk ve Oluk Sistemleri </PricingDetail>
            <PricingDetail> Çiçeklendirme Hizmeti </PricingDetail>
            <PricingDetail> 1 yıllık ücretsiz sulama ve bakım </PricingDetail>
            <PricingDetail> Fotoğraflı mezar başlıkları </PricingDetail>
            <PricingDetail> Mezar etrafına duvar örülmesi </PricingDetail>
          </PricingSlot>
        </PricingTable >
      </div >
    </div >
  );
}