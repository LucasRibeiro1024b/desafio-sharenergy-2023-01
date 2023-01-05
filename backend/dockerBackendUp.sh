#!/usr/bin/env bash
docker build . -t backendgpm
docker run -d --rm --name backendGPM -p 3001:3001 --network networkGPM backendgpm