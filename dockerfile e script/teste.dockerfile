#ubuntu de imagem base
FROM ubuntu

#instalar mysql
RUN apt-get update && \ 
    apt-get install -y mysql-server

# sem horario 
ENV DEBIAN_FRONTEND=noninteractive

# instalar CURL
RUN apt-get install curl -y

RUN apt-get update &&  apt-get install -y ca-certificates curl gnupg

#abaixar node e instalar 
RUN curl -sL https://deb.nodesource.com/setup_20.x  | bash -
RUN apt-get -y install nodejs

COPY ./entrypoint.sh /usr/local/bin/entrypoint.sh
COPY ./script.sql /tmp/script.sql
RUN chmod +x /usr/local/bin/entrypoint.sh


#instalar  o apache2
RUN apt-get install apache2 -y

#remover index do apache
RUN rm /var/www/html/index.html

COPY front/index.html /var/www/html/index.html
COPY front/*.js /var/www/html/
COPY front/favicon.ico /var/www/html/favicon.ico
COPY front/styles-P2LGWUZU.css /var/www/html/styles-P2LGWUZU.css


COPY ./back /home




ENTRYPOINT [ "/usr/local/bin/entrypoint.sh" ]
#expor porta 80
EXPOSE 80












