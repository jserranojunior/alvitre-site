
#!/bin/bash
docker-compose -f "docker-compose.yml" -f "docker-acolher-production.yml" up -d --build
