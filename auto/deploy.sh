#!/bin/sh

# set -euo pipefail


docker run -it --rm \
  -v $(pwd):/usr/src/app \
  -w /usr/src/app \
  -e REACT_APP_STAGE=${STAGE} \
  node bash -ci "yarn install && yarn build"


docker run -it --rm \
  -v $(pwd):/aws \
  -v ~/.aws:/root/.aws \
  amazon/aws-cli s3 sync ./build s3://todo-web-${STAGE} --acl public-read