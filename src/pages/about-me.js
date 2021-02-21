import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Layout from "../components/layout";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1000,
    height: 450,
  },
}));

// const tileData = [
//   {
//     img: "https://source.unsplash.com/random/150x150",
//     title: "Image",
//     author: "author",
//     cols: 2,
//   },
//   {
//     img: "https://source.unsplash.com/random/150x150",
//     title: "Image",
//     author: "author",
//     cols: 1,
//   },
//   {
//     img: "https://source.unsplash.com/random/150x150",
//     title: "Image",
//     author: "author",
//     cols: 1,
//   },
//   {
//     img: "https://source.unsplash.com/random/150x150",
//     title: "Image",
//     author: "author",
//     cols: 1,
//   },
//   {
//     img: "https://source.unsplash.com/random/150x150",
//     title: "Image",
//     author: "author",
//     cols: 1,
//   },
//   {
//     img: "https://source.unsplash.com/random/150x150",
//     title: "Image",
//     author: "author",
//     cols: 1,
//   },
//   {
//     img: "https://source.unsplash.com/random/150x150",
//     title: "Image",
//     author: "author",
//     cols: 2,
//   },
// ];

export default function AboutMe({ location }) {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "vans" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid(maxWidth: 250, quality: 45) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Layout currentPath={location.pathname}>
      <h1>{"About Matty's Mobile Valeting & Detailing, est. 2004"}</h1>
      <p>
        My business was established in 2004 in the vibrant seaside town of
        Scarborough.
      </p>

      <p>
        I have been in the trade for around 22 years, starting off as a valeter
        for Arundale Peugeot, Scarborough. I then assisted the running of a
        local valeting business, before seeing the opportunity to work for
        myself as a mobile valeter. The business has gone from strength to
        strength and continues it's success to this day.
      </p>

      <p>
        It's now {new Date().getFullYear()} and I've been running my own
        business for around 17 years, operating within the area to provide a
        high quality, professional valeting service for thousands of customers
        throughout the region.
      </p>

      <div className={classes.root}>
        <GridList className={classes.gridList} cols={3}>
          {data.allFile.edges.map((tile) => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <Img
                fluid={tile.node.childImageSharp.fluid}
                alt={tile.node.base.split(".")[0]}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </Layout>
  );
}
