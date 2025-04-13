CREATE TABLE `edt` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`iframe url` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `edt_name_unique` ON `edt` (`name`);--> statement-breakpoint
CREATE UNIQUE INDEX `edt_iframe url_unique` ON `edt` (`iframe url`);--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`login` text NOT NULL,
	`password` text NOT NULL,
	`roles` text DEFAULT 'ROLE_USER'
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_login_unique` ON `users` (`login`);