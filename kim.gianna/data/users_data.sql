CREATE TABLE IF NOT EXISTS `track_users` (
`id` INT NULL,
`name` VARCHAR(MAX) NULL,
`username` VARCHAR(MAX) NULL,
`email` VARCHAR(MAX) NULL,
`password` VARCHAR(MAX) NULL,
`img` VARCHAR(MAX) NULL,
`date_create` VARCHAR(MAX) NULL
);

INSERT INTO track_users VALUES
(1,'Suzette Cain','user1','user1@gmail.com','md5(pass)','https://via.placeholder.com/400/929/fff/?text=user1','2021-10-26 01:23:49'),
(2,'Mcpherson Hughes','user2','user2@gmail.com','md5(pass)','https://via.placeholder.com/400/780/fff/?text=user2','2021-02-27 11:20:10'),
(3,'Amelia Gates','user3','user3@gmail.com','md5(pass)','https://via.placeholder.com/400/774/fff/?text=user3','2021-05-08 08:17:03'),
(4,'Debora Elliott','user4','user4@gmail.com','md5(pass)','https://via.placeholder.com/400/991/fff/?text=user4','2020-03-22 12:48:04'),
(5,'Potter Battle','user5','user5@gmail.com','md5(pass)','https://via.placeholder.com/400/809/fff/?text=user5','2020-05-05 06:01:55'),
(6,'Leonor Alexander','user6','user6@gmail.com','md5(pass)','https://via.placeholder.com/400/902/fff/?text=user6','2021-03-04 11:04:20'),
(7,'Morris Carroll','user7','user7@gmail.com','md5(pass)','https://via.placeholder.com/400/719/fff/?text=user7','2020-05-31 10:58:50'),
(8,'Alexandria Herring','user8','user8@gmail.com','md5(pass)','https://via.placeholder.com/400/868/fff/?text=user8','2021-02-23 10:42:38'),
(9,'Richards Cameron','user9','user9@gmail.com','md5(pass)','https://via.placeholder.com/400/835/fff/?text=user9','2021-07-01 12:25:10'),
(10,'Alana Head','user10','user10@gmail.com','md5(pass)','https://via.placeholder.com/400/805/fff/?text=user10','2020-07-16 07:25:31');