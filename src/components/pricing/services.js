import React from 'react';
import CardGrid from '../card-grid';
import MapIcon from '@material-ui/icons/Map';
import { makeStyles } from '@material-ui/core/styles';

export default function Services() {
  const useStyles = makeStyles({
    icon: {
      display: 'block',
      margin: 'auto',
      fontSize: 50,
    },
  });

  const { icon } = useStyles();

  const services = [
    {
      title: 'Mini Valet',
      //icon: <MapIcon className={icon} />,
      button: { text: 'Book a mini valet', href: '/contact-me/' },
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
      title: 'Full Valet',
      //icon: <MapIcon className={icon} />,
      button: { text: 'Book a full valet', href: '/contact-me/' },
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
      title: 'Hand Polishing & Waxing',
      //icon: <MapIcon className={icon} />,
      button: { text: 'Book a hand polish & wax', href: '/contact-me/' },
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
      title: 'Machine Polish',
      //icon: <MapIcon className={icon} />,
      button: { text: 'Book a machine polish', href: '/contact-me/' },
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
      title: 'Ultimate Paint and Fabric Protection',
      //icon: <MapIcon className={icon} />,
      size: {
        xs: 12,
        sm: 6,
        md: 4,
        lg: 3,
      },
      description: (
        <>
          <h4>Please contact me for prices</h4>
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
        </>
      ),
      button: { text: 'Book paint & fabric protection', href: '/contact-me/' },
    },
    {
      title: 'Engine Bay Steam Clean & Detail',
      // //icon: <MapIcon className={icon} />,
      button: { text: 'Book an engine bay steam clean', href: '/contact-me/' },
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
      title: 'Other',
      // //icon: <MapIcon className={icon} />,
      button: { text: 'Contact me', href: '/contact-me/' },
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
  return <CardGrid cards={services} />;
}
