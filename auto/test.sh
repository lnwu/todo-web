#!/bin/sh

# set -euo pipefail

docker run -it --rm \
  -v $(pwd):/usr/src/app \
  -w /usr/src/app \
  -e CI=true \
  node bash -ci "yarn install && yarn test"