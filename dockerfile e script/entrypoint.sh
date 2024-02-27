#!/bin/bash
#essa anotação serve pera definir o tipo de script
#incia mysql server
/etc/init.d/mysql start

#executa o script para criar o banco de dados
mysql < /tmp/script.sql

#reincia mysql
/etc/init.d/mysql restart 

#incia apache
/etc/init.d/apache2 start

#reincia mysql2 
/etc/init.d/mysql restart 

#reinicia apache2
/etc/init.d/apache2 start

# Mantém o contêiner online
tail -f /dev/null

#instala pacotes do nest que é usa no back

cd /home
npm install




