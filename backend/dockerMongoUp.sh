#!/usr/bin/env bash
docker run -d --rm --name mongoGPM -p 27017:27017 --network networkGPM --mount src=volumeGPM,target=/data/db mongo