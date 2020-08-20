#!/bin/bash

sudo docker-compose stop gitlab gitlab-runner
sudo docker-compose rm gitlab gitlab-runner
sudo docker-compose up -d gitlab gitlab-runner

