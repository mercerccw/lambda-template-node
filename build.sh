set -e

yarn format:check

yarn lint

rm -rf dist/*

[ -e deploy/terraform/build/lambda.zip ] && rm deploy/terraform/build/lambda.zip

[ -e deploy/terraform/build/lambda ] && rm -rf deploy/terraform/build/lambda

yarn transpile

cp package.json yarn.lock dist/

cd dist/

yarn --production

mv src/* .

rm -rf src

rm yarn.lock

mkdir -p ../deploy/terraform/build

zip -rq ../deploy/terraform/build/lambda.zip .

cd -