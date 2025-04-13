ALTER TABLE `edt` RENAME COLUMN "iframe url" TO "url";--> statement-breakpoint
DROP INDEX `edt_iframe url_unique`;--> statement-breakpoint
CREATE UNIQUE INDEX `edt_url_unique` ON `edt` (`url`);