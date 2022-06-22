create table status_admins(
  id_status_admin int primary key auto_increment,
  status varchar(20) not null,
  description varchar(256) not null,
  created_at timestamp default current_timestamp,
  updated_at datetime default current_timestamp on update current_timestamp
);

create table admins(
  id_admin int primary key auto_increment,
  name varchar(50) not null,
  email varchar(50) not null,
  password varchar(20) not null,
  id_status_admin int not null,
  created_at timestamp default current_timestamp,
  updated_at datetime default current_timestamp on update current_timestamp,
  foreign key (id_status_admin) references status_admins(id_status_admin) on delete restrict on update cascade
);