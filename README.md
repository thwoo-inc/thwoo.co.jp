# thwoo.co.jp

## deploy

```
aws s3 sync ./root/ s3://thwoo.co.jp --profile thwoo
aws cloudfront create-invalidation --distribution-id E3NKB74ZFSDGT3 --paths "/*" --profile thwoo
```
