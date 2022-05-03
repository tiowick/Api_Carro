create database dbApiCarros;

use dbApiCarros;

create table carros (
codigo int primary key auto_increment,
modelo varchar(30),
placa varchar (7)

);

insert into carros(modelo, placa) values(' santan volkswagen', 'EMO9423');
insert into carros(modelo, placa) values('Honda civic', 'pkO9373');

select * from carros
