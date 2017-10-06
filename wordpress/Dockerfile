FROM wordpress:latest

RUN apt-get update && apt-get install unzip apache2.2-common && a2enmod headers

ADD https://github.com/jchristopher/attachments/archive/3.5.6.tar.gz ./wp-content/plugins/
ADD https://downloads.wordpress.org/plugin/dominant-color.2.1.0.zip ./wp-content/plugins/

RUN cd ./wp-content/plugins && \
  tar xvzf 3.5.6.tar.gz && \
  unzip dominant-color.2.1.0.zip
