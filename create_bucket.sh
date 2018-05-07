if [ -z $S3_BUCKET ]; then echo "S3_BUCKET is unset. Set it in .env.production"; exit 1; fi
aws s3api create-bucket --bucket $S3_BUCKET --region us-east-1
aws s3api put-bucket-website --bucket $S3_BUCKET --website-configuration file://./bucket_config/bucket_website.json
aws s3api put-bucket-cors --bucket $S3_BUCKET --cors-configuration file://./bucket_config/bucket_cors.json
sed -i 's/MY_BUCKET/'$S3_BUCKET'/g' bucket_config/bucket_policy.json
aws s3api put-bucket-policy --bucket $S3_BUCKET --policy file://./bucket_config/bucket_policy.json
