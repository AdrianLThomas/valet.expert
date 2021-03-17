import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Button,
  Typography,
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core';
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';
import { Link } from 'gatsby';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    height: '100%',
    '& h4': {
      textAlign: 'center',
      fontSize: '1.5em',
      margin: 0,
    },
  },
  cardContent: {
    width: '100%',
  },
  header: {
    textAlign: 'center',
    borderBottom: '1px grey solid',
    color: '#ffeb3b',
    textShadow: '1px 1px black',
    fontWeight: 'bold',
    letterSpacing: '0.1em',
    paddingBottom: '0.5em',
    textTransform: 'uppercase',
  },
  description: {
    borderBottom: '1px grey solid',
    paddingBottom: '1em',
  },
}));

const buttonTheme = createMuiTheme({
  palette: {
    primary: yellow,
  },
});

const services = [
  {
    name: 'Mini Valet',
    contactMessage: 'Book a mini valet',
    size: {
      xs: 12,
      sm: 6,
      md: 4,
      lg: 4,
    },
    description: (
      <>
        <h4>Starting from £45</h4>
        <ul>
          <li>{'Wash & Wax then hand dried'}</li>
          <li>{'Alloys'}</li>
          <li>{'Tyres shined & protected'}</li>
          <li>{'Inside door shuts cleaned & dried'}</li>
          <li>{'Windows polished inside & out'}</li>
          <li>{'Inside hoovered'}</li>
          <li>{"Plastic & vinyl's cleaned and dressed"}</li>
          <li>{'Pockets & ash trays'}</li>
          <li>{'Air freshener'}</li>
        </ul>

        <span>4x4 and 7 seaters start from £55.</span>
      </>
    ),
  },
  {
    name: 'Full Valet',
    contactMessage: 'Book a full valet',
    size: {
      xs: 12,
      sm: 6,
      md: 4,
      lg: 4,
    },
    description: (
      <>
        <h4>Starting from £70</h4>
        <p>
          <strong>Includes Mini Valet</strong>, plus:
        </p>
        <ul>
          <li>{'Glove compartment'}</li>
          <li>{'Carpets, door cards & rooflining all shampooed and dried'}</li>
          <li>
            {
              'Seats shampooed and dried, or if leather interior, then a luxorious leather treatment is applied'
            }
          </li>
          <li>{'Full car deodorising system'}</li>
          <li>{'Outside polished/waxed'}</li>
        </ul>

        <span>4x4 and 7 seaters start from £90.</span>
      </>
    ),
  },
  {
    name: 'Hand Polishing & Waxing',
    contactMessage: 'Book a hand polish & wax',
    size: {
      xs: 12,
      sm: 6,
      md: 4,
      lg: 4,
    },
    description: (
      <>
        <h4>Waxing starts from £40</h4>
        <h4>Polishing starts from £40</h4>
        <p>
          Waxing and polishing are for an already prepared car, ready to be
          protected.
        </p>
      </>
    ),
  },
  {
    name: 'Machine Polish',
    contactMessage: 'Book a machine polish',
    size: {
      xs: 12,
      sm: 6,
      md: 4,
      lg: 3,
    },
    description: (
      <>
        <h4>Starting from £120</h4>
        <ul>
          <li>Paint Correction</li>
          <li>Swirl Mark Removal</li>
          <li>Light Scratch Removal</li>
        </ul>
      </>
    ),
  },
  {
    name: 'Ultimate Paint and Fabric Protection',
    size: {
      xs: 12,
      sm: 6,
      md: 4,
      lg: 3,
    },
    description: (
      <>
        <p>
          Paint and fabric protection from premium valeting product
          manufacturers
        </p>
        <ul>
          <li>Lifeshine by Autoglym</li>
          <li>DiamondBrite Jewelultra</li>
          <li>Supagard</li>
          <li>GEN-3 Glasscoat</li>
          <li>Gtechniq Hybrid Coating</li>
        </ul>
        <p>Please contact me for prices</p>
      </>
    ),
    contactMessage: 'Book paint & fabric protection',
  },
  {
    name: 'Engine Bay Steam Clean & Detail',
    contactMessage: 'Book an engine bay steam clean & detail',
    size: {
      xs: 12,
      sm: 6,
      md: 4,
      lg: 3,
    },
    description: (
      <>
        <h4>Starting from £40</h4>
        <p>
          The engine bay is steam cleaned and dressed to a high standard. Whilst
          the upmost care is taken to ensure electrical components are
          protected, it is the customers risk to undertake this procedure.
        </p>
      </>
    ),
  },
  {
    name: 'Other',
    contactMessage: 'Contact me',
    size: {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 3,
    },
    description: (
      <p>
        Can't find what you're looking for? I offer a variety of valeting and
        detailing services, so don't hestiate to contact me for further details.
      </p>
    ),
  },
];

export default function Services() {
  const classes = useStyles();

  return (
    <Grid container spacing={2} direction="row">
      {services.map((service) => {
        return (
          <Grid item {...service.size} key={service.name}>
            <ThemeProvider theme={buttonTheme}>
              <Card className={classes.root}>
                <CardContent className={classes.cardContent}>
                  <Typography
                    variant="h5"
                    component="h2"
                    className={classes.header}
                  >
                    {service.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className={classes.description}
                  >
                    {service.description}
                  </Typography>
                  <CardActions>
                    <Button
                      component={Link}
                      to="/contact-me"
                      variant="contained"
                      color="primary"
                    >
                      {service.contactMessage}
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </ThemeProvider>
          </Grid>
        );
      })}
    </Grid>
  );
}
