/*eslint-disable*/
import React, { useEffect } from "react";
// react components for routing our app without refresh
import { HashLink as Link } from 'react-router-hash-link';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <a
          // to="#whoweare"
          color="transparent"
          className={classes.navLink}
          onClick={ () => {
            document
            .querySelector("#whoweare")
            .scrollIntoView({ behavior: "smooth", block: "start" })
          }}
        > Biz Kimiz
        </a>
      </ListItem>
      <ListItem className={classes.listItem}>
        <a
          // href="#mission"
          color="transparent"
          className={classes.navLink}
          onClick={ () => {
            document
            .querySelector("#mission")
            .scrollIntoView({ behavior: "smooth", block: "start" })
          }}
        > Neden Biz
        </a>
      </ListItem>
      <ListItem className={classes.listItem}>
        <a
          // href="#references"
          color="transparent"
          className={classes.navLink}
          onClick={ () => {
            document
            .querySelector("#references")
            .scrollIntoView({ behavior: "smooth", block: "start" })
          }}
        > Referanslarımız
        </a>
      </ListItem>
      <ListItem className={classes.listItem}>
        <a
          // href="#contact"
          color="transparent"
          className={classes.navLink}
          onClick={ () => {
            document
            .querySelector("#contact")
            .scrollIntoView({ behavior: "smooth", block: "start" })
          }}
        > İletişim
        </a>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Whatsapp ile iletişime geç"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://api.whatsapp.com/send?phone=905445453208"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <WhatsAppIcon fontSize="large" />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Bizi twitterda takip et"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/ersanstone"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Bizi facebookta takip et"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/Ersan-Stone-107310218253862/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Bizi instagramda takip et"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/ersanstone/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
