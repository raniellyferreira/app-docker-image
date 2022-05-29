# Microservices Base Docker image

## PHP Apache Image

```Text
gru.ocir.io/grwidfxfmi4f/app-docker-image:php-8.1-apache
```

Exemplo Dockerfile para o projeto

```Dockerfile
FROM gru.ocir.io/grwidfxfmi4f/app-docker-image:php-8.1-apache

# Configurações adicionais aqui
# Instalação de dependencias do PHP aqui
# RUN set -ex; \
#     apt install xny \
#     && install-php-extensions pdo_mysql

COPY . ./

RUN composer install -o -vvv --prefer-dist --no-interaction --no-progress --no-scripts --no-suggest --optimize-autoloader -a
```

## PHP FPM/Nginx Images

```Text
gru.ocir.io/grwidfxfmi4f/app-docker-image:php-8.1-fpm
```

```Dockerfile
FROM gru.ocir.io/grwidfxfmi4f/app-docker-image:php-8.1-fpm

# Configurações adicionais aqui
# Instalação de dependencias do PHP aqui
# RUN set -ex; \
#     apt install xny \
#     && install-php-extensions pdo_mysql

COPY . ./

# Para configuração adicional do supervisor
COPY supervisor.conf /etc/supervisor/conf.d/

RUN composer install -o -vvv --prefer-dist --no-interaction --no-progress --no-scripts --no-suggest --optimize-autoloader -a
```
