
CREATE TABLE masterclass.messages (
	id int auto_increment NOT NULL,
	content varchar(100) NULL,
	created_at datetime NULL,
	CONSTRAINT messages_PK PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8
COLLATE=utf8_general_ci;
