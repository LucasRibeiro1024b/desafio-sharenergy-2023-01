#!/usr/bin/env bash
docker run -d --rm --name mongoGPM --network networkGPM --mount src=volumeGPM,target=/data/db mongo