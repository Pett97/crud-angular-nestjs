create database courses;

use courses;

create user if not exists 'peterson'@'%' identified by 'P@ndora9124';

revoke all privileges on *.* FROM 'peterson'@'%';

grant all privileges on  courses.* to 'peterson';

