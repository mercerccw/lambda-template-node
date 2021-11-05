set -e

yarn build

pushd ./deploy/terraform/build

mkdir -p lambda

unzip -q lambda.zip -d lambda

popd

pushd ./deploy/terraform

terraform init

terraform apply -auto-approve

rm lambda_template_node.zip

popd