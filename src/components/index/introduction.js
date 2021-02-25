import { Button, Card, CardActions, CardContent, CardHeader, Grid, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/StarBorder';

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import MapIcon from '@material-ui/icons/Map';
import SettingsIcon from '@material-ui/icons/Settings';
import ChatIcon from '@material-ui/icons/Chat';

const useStyles = makeStyles((theme) => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
    cardHeader: {
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      marginBottom: theme.spacing(2),
    },
    iconSize: {
        fontSize: "2em",
    }
  }));

export default function({ className }) {
    const classes = useStyles();

    const fontSize="large";
    const tiers = [
        {
            title: 'Reputable',
            description: 'Established in 2004 in the vibrant seaside town of Scarborough.',
            icon: <ThumbUpIcon fontSize={fontSize} className={classes.iconSize}/>,
            buttonText: 'About Me',
            buttonVariant: 'contained',
        },
        {
            title: 'Flexible',
            description: "I can come to you, whether it's your place of work, study or home.",
            icon: <MapIcon fontSize={fontSize} className={classes.iconSize}/>,
            buttonText: 'Areas Covered',
            buttonVariant: 'contained'
        },
        {
            title: 'My Services',
            description: " sasasa sasas sa sa saas sa sa as sa sa sa saa sas assa sa saas as as",
            icon: <SettingsIcon fontSize={fontSize} className={classes.iconSize}/>,
            buttonText: 'Services & Pricing',
            buttonVariant: 'contained'
        },
        {
            title: 'Contact Me',
            description: "I'm easy to get hold of, just call or message at your convenience.",
            icon: <ChatIcon fontSize={fontSize} className={classes.iconSize}/>,
            buttonText: 'Contact Me',
            buttonVariant: 'contained'
        }
    ]

    return (
        <Grid container spacing={5} alignItems="flex-end" className={className}>
          {tiers.map((tile) => (
            <Grid item key={tile.title} xs={12} sm={6} md={3}>
              <Card>
                <CardHeader
                  title={tile.title}
                  titleTypographyProps={{ align: 'center' }}
                  action={tile.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      {tile.icon}
                    </Typography>
                  </div>
                  <ul>
                      <Typography component="li" variant="subtitle1" align="center">
                        {tile.description}
                      </Typography>
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tile.buttonVariant} color="primary">
                    {tile.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
    )
}