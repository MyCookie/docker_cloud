# docker_cloud
Cloud-in-a-file using docker.

## Deploying

To deploy with enforced resource limits, deploy using `docker stack deploy -c docker-compose.yml $STACK_NAME`. `docker stack` requires the machine to be in a swarm, create one using `docker swarm init`.

Deploying using `docker-compose` will not enforce resource limits. Gitlab and Nextcloud can have higher than expected resource requirements.

## Networking

This setup requires a pre-defined external network called `dockercloud`.

If deploying to a swarm create it within the scope of a swarm: `docker network create --scope swarm dockercloud`. Deploying using `docker-compose` requires the network to be in a local scope.

## Applications

### Nginx

This config uses SNI over TLS, so that multiple apps can be served from the same machine/cluster. The docker image of nginx supports this. Change domain.tld in app.config and init-letsencrypt.sh to the appropriate name.

### MariaDB

Since we're hosting multiple applications on the same machine, it's easier to setup each table individually. Remember to create a new table and user for Nextcloud, Gitea, phpMyAdmin, and any other applications hosted on this stack.

Also don't forget to create a administrator account that can create new items in the database.

### Nextcloud
Change the following values in `$DOCKER_VOLUME_PATH/nextcloud/var/www/html/config/config.php`:

1. Add the appropriate `nextcloud.domain.tld` to `trusted_hosts`, keep `nextcloud` as it is the name of the container, and my be polled by any apps you install in Nextcloud.
2. Add `'overwritehost' => 'nextcloud.domain.tld'`
3. Add `'overwriteprotocol' => 'https'`
4. Change `'overwrite.cli.url' => 'nextcloud.domain.tld'`

### Gitea
Make sure the change the `ROOT_URL` in `$DOCKER_VOLUME_PATH/gitea/data/gitea/conf/app.ini`.

## systemd

Two systemd unit files are provided: `docker-system-prune.timer` and `docker-system-prune.service`. Enabling them starts a timer that triggers `docker system prune -f` once a day. You can enable this as a system service, or add another user to the `docker` group and enable the timer as a user service using `systemd enable --user`.

