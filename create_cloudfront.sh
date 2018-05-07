if [ -z $S3_BUCKET ]; then echo "S3_BUCKET is unset. Set it in .env.production"; exit 1; fi
sed -i 's/MY_BUCKET/'$S3_BUCKET'/g' cloudfront_config.json
sed -i 's/FINAL_HOST/'$FINAL_HOST'/g' cloudfront_config.json
aws cloudfront create-distribution --distribution-config file://cloudfront_config.json
