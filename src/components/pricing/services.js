import React from 'react';

import CardGrid from '../card-grid';

export default function Services({ className }) {
  const services = [
    {
      title: 'Maintenance Valet',
      button: { text: 'Book a maintenance valet', href: '/contact-me/' },
      size: {
        xs: 12,
        sm: 6,
        md: 4,
        lg: 4,
      },
      description: (
        <>
          <h4>Starting from £60</h4>
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

          <span>4x4 and 7 seaters start from £70.</span>

          <br />
          <br />

          <i>
            For existing customers only, to keep your previous valet in top
            condition.
          </i>
        </>
      ),
    },
    {
      title: 'Full Valet',
      button: { text: 'Book a full valet', href: '/contact-me/' },
      size: {
        xs: 12,
        sm: 6,
        md: 4,
        lg: 4,
      },
      description: (
        <>
          <h4>Starting from £90</h4>
          <p>
            <strong>Includes Maintenance Valet</strong>, plus:
          </p>
          <ul>
            <li>{'Glove compartment'}</li>
            <li>
              {'Carpets, door cards & rooflining all shampooed and dried'}
            </li>
            <li>
              {
                'Seats shampooed and dried, or if leather interior, then a luxorious leather treatment is applied'
              }
            </li>
            <li>{'Full car deodorising system'}</li>
            <li>{'Outside polished/waxed'}</li>
          </ul>

          <span>4x4 and 7 seaters start from £120.</span>
        </>
      ),
    },
    {
      title: 'Hand Polishing & Waxing',
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
      button: { text: 'Book a machine polish', href: '/contact-me/' },
      size: {
        xs: 12,
        sm: 6,
        md: 4,
        lg: 3,
      },
      description: (
        <>
          <h4>Starting from £160</h4>
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
            <li>Crystal Serum Light from Gtechniq</li>
            <li>Exo V4 from Gtechniq</li>
            <li>Halo Flexible Film coating for PPF from Gtechniq</li>
          </ul>
        </>
      ),
      button: { text: 'Book paint & fabric protection', href: '/contact-me/' },
    },
    {
      title: 'Engine Bay Steam Clean & Detail',
      button: { text: 'Book an engine bay steam clean', href: '/contact-me/' },
      size: {
        xs: 12,
        sm: 6,
        md: 4,
        lg: 3,
      },
      description: (
        <>
          <h4>Starting from £50</h4>
          <p>
            The engine bay is steam cleaned and dressed to a high standard.
            Whilst the upmost care is taken to ensure electrical components are
            protected, it is the customers risk to undertake this procedure.
          </p>
        </>
      ),
    },
    {
      title: 'Other',
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
          detailing services, so don't hestiate to contact me for further
          details.
        </p>
      ),
    },
  ];
  return (
    <div className={className}>
      <CardGrid cards={services} />
    </div>
  );
}
