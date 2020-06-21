#!/bin/bash
docker-compose -f "docker-compose.yml" -f "docker-local.yml" up -d --build
