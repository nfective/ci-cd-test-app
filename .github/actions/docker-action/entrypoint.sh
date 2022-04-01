#!/bin/sh -e

# Outputting debug, warning, and error messages in shell
echo "::debug ::Debug Message"
echo "::warning ::Warning Message"
echo "::error ::Error Message"

# Masking values in shell
echo "::add-mask::$1"

# Outputting the first arg in the docker image in shell
echo "Hello $1"

# Setting and using a variable in shell
time = $(date)
echo "::set-output name=time::$time"

# Group in shell
echo "::group::Some expandable logs"
echo "some stuff"
echo "some stuff"
echo "some stuff"
echo "::endgroup::"

# Exporting environment variable in shell
echo "::set-env name=HELLO2::hello'