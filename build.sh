yarn format:check

yarn lint

rm -rf dist/*

rm deploy/lambda.zip

rm -rf deploy/lambda

yarn transpile

cp package.json yarn.lock dist/

cd dist/

yarn --production

mv src/* .

rm -rf src

rm yarn.lock

zip -rq ../deploy/lambda.zip .

cd -