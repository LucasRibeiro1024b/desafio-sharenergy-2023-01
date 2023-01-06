#!/usr/bin/env bash
docker build . -t backendgpm
docker run -d --rm --name backendGPM --network networkGPM backendgpm