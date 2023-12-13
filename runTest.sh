#!/bin/bash -e

docker buildx build . -f Dockerfile.fpm-alpine --build-arg PHP_VERSION=7.4
