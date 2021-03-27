# TODO
- 'contact me' twice?
- inherit anchor colours rather than override
- funnel - Think about pages and direction to push in (contact) 

# Before Go Live
- remove pathprefix when publishing to root
- GA tracking code

# Post Go Live Improvements
 - set reminder: remove redirect pages from /static after 6 months.
- Rich results https://search.google.com/test/rich-results
- SEO scan - top improvements?
- style 404 page
- regression testing:
 - e2e?
 - google web developer, checks ok? sitemap.xml etc.
 - automate lighthouse score in GHA pipeline - nightly job?
- UX
 - pop of colour on pages
 - shade footer slightly different colour?
 - tidy up README.md
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
# General Notes
- Funnel: Home Page > Services > Contact
- Maintain SEO: https://moz.com/blog/how-to-avoid-an-seo-disaster-when-changing-your-website
