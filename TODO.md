# Post Go Live Improvements
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
- Funnel: Home Page > Services > Contact
 # Tech Debt
 - warn [gatsby-transformer-sharp] The "fixed" and "fluid" resolvers are now deprecated. Switch
to "gatsby-plugin-image" for better performance and a simpler API. See
https://gatsby.dev/migrate-images to learn how.
   - Also, see: https://github.com/timhagn/gatsby-background-image/issues/147
- Material UI issues with Gatsby v3 (material UI)
   - https://github.com/hupe1980/gatsby-plugin-material-ui/issues/65
np