# Phalcon with Angularjs
- Project Owner: The Phuc

**Config virtual host**

```apache
        <VirtualHost *:80>
        ServerName phalcon-angular.dev
        ServerAlias phalcon-angular.dev
        DocumentRoot "D:\PROJECT\phalcon-angular"
        AddDefaultCharset UTF-8
        <Directory />
            AllowOverride All
        </Directory>
        <Directory D:\PROJECT\phalcon-angular>
            Options -Indexes +FollowSymLinks +MultiViews
            AllowOverride all
            Require all granted
            RewriteEngine On
            RewriteBase /
            RewriteCond %{REQUEST_FILENAME} !-d
            RewriteCond %{REQUEST_FILENAME} !-f
            RewriteRule ^(.*)$ index.php?_url=/$1 [QSA,L]
            SetEnv DB_HOST "127.0.0.1"
            SetEnv DB_USER "root"
            SetEnv DB_PASS ""
            SetEnv DB_NAME "dbphalcon"
        </Directory>
        ErrorLog D:\LOGS\phalcon-angular.log
        LogLevel error
    </VirtualHost>
```