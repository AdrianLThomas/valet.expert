# TODO
- inherit anchor colours rather than override
- Funnel: Home Page > Services > Contact

# Before Go Live
- remove pathprefix when publishing to root
- GA tracking code

# Post Go live checks
- Check redirects OK
- Robots.txt OK
- Rich results https://search.google.com/test/rich-results
- Manifest OK
- GA OK
- Search result links work ok - site:www.valet.expert
- Rename repo from mmv to valet.expert

# Post Go Live Improvements
 - set reminder: remove redirect pages from /static after 6 months.
- SEO scan - top improvements?
- style 404 page
- regression testing:
 - e2e?
 - google web developer, checks ok? sitemap.xml etc.
 - automate lighthouse score in GHA pipeline - nightly job?
- UX
 - pop of colour on pages
 - shade footer slightly different colour?
 - Review accessibility
  - tab navigation
  - social links do not have discernable name  
- check em/rem usage - is it right? am I respecting user preferences? (fonts should be rem, margins/padding probably px)

 # Tech Debt
 - warn [gatsby-transformer-sharp] The "fixed" and "fluid" resolvers are now deprecated. Switch
to "gatsby-plugin-image" for better performance and a simpler API. See
https://gatsby.dev/migrate-images to learn how.
   - Also, see: https://github.com/timhagn/gatsby-background-image/issues/147
- Material UI issues with Gatsby v3 (material UI)
   - https://github.com/hupe1980/gatsby-plugin-material-ui/issues/65
