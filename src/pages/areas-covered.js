import Hero from '../components/hero';
import * as React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Layout from '../components/layout';
import { Button } from '@material-ui/core';
import { Link } from 'gatsby';

import buttonStyle from '../components/styles/button'

const useStyles = makeStyles({
  heroTitle: {
    color: 'white',
    fontSize: '32px',
  },
  hero: {
    height: '100px',
    position: 'relative',
  },
  map: {
    width: '80%',
    margin: '20px 0 10px 0',
    border: 0,
  },
  button: {
    ...buttonStyle,
    width: 'initial'
  },
});

const mapSource = 'http://maps.google.com/maps/api/staticmap?size=600x500&path=fillcolor:0x00FF00|weight:1|color:0xFFFFFF|enc:woskInamAfB_aD|Hc`DjOs~C|Ue|Cd\cyClb@guCnh@upChn@ikCzs@keCfy@u~Bh~@mwB`cAqoBlgAcgBpkAg~AdoA{tAprAckAluA{`AzwAmv@|yAuk@p{Au`@r|AqUj}AiJr}A?j}AhJt|ApUn{At`@|yAtk@|wAlv@luAz`AnrAbkAfoAztAnkAf~AngAbgB`cApoBf~@lwBfy@t~B|s@jeCfn@hkCnh@tpClb@fuCf\byCzUd|ClOr~CzHb`DhB~`DiB|`D{Hd`DmOp~C{Uf|Cg\byCmb@fuCoh@rpCgn@jkC}s@heCgy@t~Bg~@lwBacApoBogAdgBokAf~AgoAztAorA`kAmuA|`A}wAjv@}yAtk@o{At`@u|ApUk}AhJs}A?k}AiJs|AqUq{Au`@}yAuk@{wAkv@muA}`AqrAakAeoA{tAqkAg~AmgAegBacAqoBi~@mwBgy@u~B{s@ieCin@kkCoh@spCmb@guCe\cyC}Ug|CkOq~C}He`DgB}`D&sensor=true'
const postcodes = [
    "YO11",
    "YO12",
    "YO13",
    "YO14",
    "YO15",
    "YO16",
    "YO17",
    "YO18",
    "YO21",
    "YO22"
]

export default function AreasCovered({ location }) {
  const { heroTitle, hero, map, button } = useStyles();
  return (
    <Layout currentPath={location.pathname}>
      <Hero type="beading" classOverride={hero}>
        <h1 className={heroTitle}>{'Areas Covered'}</h1>
      </Hero>

      <p>I am based in Scarborough but also cover Filey, Whitby, Pickering, Malton, Bridlington and the majority of North Yorkshire</p>

      <Button to="/contact-me" className={button} component={Link}>
        Contact me to make a booking »
      </Button>
      <div>
          <iframe className={map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37273.69065263077!2d-0.41277225000001394!3d54.275553199999905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487f254b19e38abb%3A0x69546c0179a47ac7!2sScarborough%2C+North+Yorkshire!5e0!3m2!1sen!2suk!4v1411072315651" width="600" height="450"></iframe>
      </div>

      <p>Postcodes covered: </p>
      <address>
        {postcodes.slice(0, postcodes.length - 1).map(pc => pc + ', ')}
        {'and '}
        {postcodes.slice(-1)}

      </address>

      <p><b>Please note:</b> Beyond YO14 incurs an additional charge of £40 to cover time, travel and running expenses.</p>
    </Layout>
  );
}
