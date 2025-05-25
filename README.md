# Host Static Website in VPS Server

In this guide, I will walk you through the step-by-step process of hosting a static website using a VPS (Virtual Private Server) and the Nginx web server. This guide doc covers everything from setting up your VPS to configuring Nginx for optimal performance and security.

## SSH into your VPS

```bash
ssh root@your_vps_ip
```

## Create a directory for your site (/var/www/static-site)

```bash
mkdir -p /var/www/static-site
cd /cat/www/static-site
```

## Clone the code from the github

```bash
git clone https://github.com/km-saifullah/deploy-static-webpage.git ./
```

## Install Nginx in the VPS server

```bash
sudo apt update
sudo apt install nginx -y
```

## Create a new Nginx config file

```bash
sudo nano /etc/nginx/sites-available/static-site
```

## Paste the following configuration to the above nginx file

```bash
server {
    listen 80;
    server_name site.example.com;

    root /var/www/static-site;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

## Enable the config

```bash
sudo ln -s /etc/nginx/sites-available/static-site /etc/nginx/sites-enabled
```

## Test the Nginx config

```bash
sudo nginx -t
```

## Reload Nginx

```bash
sudo systemctl reload nginx
```

## Install Certbot

```bash
sudo apt install certbot python3-certbot-nginx -y
```

## Run the Certbot

```bash
sudo certbot --nginx -d site.example.com
```

## Test your site

```bash
http://site.example.com
https://site.example.com (if SSL enabled)
```

Everything is going great now.
Best of luck....👍
