#!/usr/bin/env bash
docker build . -t frontendgpm
docker run -d --rm --name frontendGPM -p 3000:3000 --network networkGPM frontendgpm