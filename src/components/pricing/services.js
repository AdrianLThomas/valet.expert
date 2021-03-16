import { Grid } from '@material-ui/core';
import React from 'react';
import PricingCard from './card';

const services = [
  {
    name: 'Mini Valet',
    size: {
      xs: 12,
      sm: 6,
      md: 6,
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
    size: {
      xs: 12,
      sm: 6,
      md: 6,
    },
    description: (
      <>
        <h4>Starting from £70</h4>
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
];

// const fullValet = [
//   'Glove compartment',
//   'Carpets, door cards & rooflining all shampooed and dried',
//   'Seats shampooed and dried, or if leather interior, then a luxorious leather treatment is applied',
//   'Full car deodorising system',
//   'Outside polished/waxed',
// ];

// const machinePolish = [
//   'Paint Correction',
//   'Swirl Mark Removal',
//   'Light Scratch Removal',
// ];

// const paintProtection = [
//   'Lifeshine by Autoglym',
//   'DiamondBrite Jewelultra',
//   'Supagard',
//   'GEN-3 Glasscoat',
//   'Gtechniq Hybrid Coating',
// ];

export default function Services() {
  return (
    <Grid container alignItems="center" spacing={3}>
      {services.map((service) => {
        return (
          <Grid item {...service.size} key={service.name}>
            <PricingCard>
              <h2>{service.name}</h2>
              {service.description}
            </PricingCard>
          </Grid>
        );
      })}
      {/* <Grid item xs={12} sm={6} md={6}>
        <Card></Card>
      </Grid>
      <Grid item xs={12} sm={4} md={4}>
        <Card></Card>
      </Grid>
      <Grid item xs={12} sm={4} md={4}>
        <Card></Card>
      </Grid>
      <Grid item xs={12} sm={4} md={4}>
        <Card></Card>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Card></Card>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Card></Card>
      </Grid> */}
    </Grid>
  );
}
