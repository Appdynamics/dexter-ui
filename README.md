# DEXTER-UI

Uses React and libraries:

- [Bootstrap 4](http://getbootstrap.com/)
- [jsonschema](https://github.com/tdegrunt/jsonschema)
- [react-jsonschema-form](https://github.com/mozilla-services/react-jsonschema-form)
- [react-copy-to-clipboard](https://github.com/nkbt/react-copy-to-clipboard)

# Deploy

## Cloudfront Deploy
1. Install [pip](https://pip.pypa.io//en/latest/installing/) with `curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py && sudo python get-pip.py`
1. Install awscli `sudo pip install awscli`
1. Login to awscli with `aws configure`, then get your access keys from [Security Credentials](https://console.aws.amazon.com/iam/home?#/security_credential) > Access keys. Fill that in for `aws configure`, selecting region `us-east-1`, output format as `json`
1. In `env.production`, fill in `REACT_APP_GRAPHQL_ENDPOINT` (ex: beliefer.herokuapp.com) and `S3_BUCKET` (ex:`dev.danielarrizza.com`), and `FINAL_HOST` (where you're going to deploy (ex: dev.danielarrizza.com))
1. Run `npm run create-bucket`
1. Run `npm run create-cloudfront`
1. Use the Domain Name from https://console.aws.amazon.com/cloudfront/home for your DNS
1. Make sure CORS is set up on your server side for this `FINAL_HOST` (`heroku config:set FRONTEND_HOST=beliefer.danielarrizza.com`)
1. Deploy - `npm run deploy`

## Enable SSL
1. Create a certificate with DNS from [Amazon Certificate Manager](https://console.aws.amazon.com/acm/home)
1. In your [CloudFront panel](https://console.aws.amazon.com/cloudfront/home), General > Edit > SSL Certificate set to 'Custom SSL Certificate' and select the one you just created, then click 'Yes, Edit'
1. Under your CloudFront distribution's 'Behaviors', edit your behavior, change 'Viewer Protocol Policy' to `Redirect HTTP to HTTPS`, then click 'Yes, Edit'

# Helpful Links

- [create-react-app Guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)
- [GitHunt-React](https://github.com/apollographql/GitHunt-React/blob/master/ui)
- [Apollo Tutorial](https://dev-blog.apollodata.com/full-stack-react-graphql-tutorial-582ac8d24e3b?_ga=2.120152392.1501331167.1502629079-2102942943.1500164394)
