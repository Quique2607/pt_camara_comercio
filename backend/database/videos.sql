create database videos;

use  videos;

CREATE TABLE video(
	id varchar(10) not null primary key,
    nombre varchar(200) not null,
    tema varchar(50) not null,
    url varchar(500) not null
);

CREATE TABLE navegacion(
	id varchar(5) NOT NULL Primary Key,
    url varchar(500) NOT NULL,
    agente varchar(255) NOT NULL,
    hora_web TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    hora_video TIMESTAMP
);

insert into video(id,nombre,tema,url) values ("gfredswert","prueba","educacion","dsdsd");

INSERT INTO navegacion(id,url,agente,hora_web,hora_video) values ("SDFFD", "fdfdfdfd", "google", "2025-01-14T10:00:00Z", null);

SELECT * FROM video;
select * from navegacion;
