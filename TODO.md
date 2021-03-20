# TODO
- Recreate sub-pages
- Any metadata / seo that can be applied specifically to contact / pricing etc to help bots?
- hero images

# Before Go Live
- remove pathprefix when publishing to root
- adjust robots.txt
- GA tracking code
- SEO scan comparison
- Rich results https://search.google.com/test/rich-results

# Post Go Live
- regression testing:
 - e2e?
 - google web developer, checks ok? sitemap.xml etc.
 - set reminder: remove redirect pages from /static after 6 months.
 - automate lighthouse score in GHA pipeline - nightly job?
- UX
 - pop of colour on pages
 - shade footer slightly different colour?
 # Post Go Live Improvements
 - Review accessibility
  - tab navigation
  - social links do not have discernable name  

- style 404 page

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
