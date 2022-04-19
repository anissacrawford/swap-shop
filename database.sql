-- USER
CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (100) NOT NULL,
    "first_name" VARCHAR (100),
    "last_name" VARCHAR (100),
    "email_address" VARCHAR (200)
);

-- ITEM
CREATE TABLE "item" (
	"id" SERIAL PRIMARY KEY, 
	"item_name" VARCHAR (100),
	"item_image" VARCHAR (1000),
	"item_description" VARCHAR (250),
	"user_id" INT REFERENCES "user"
);

-- OFFER 
CREATE TABLE "offer" (
	"id" SERIAL PRIMARY KEY, 
	"item_A_id" VARCHAR (1000),
	"item_B_id" VARCHAR (1000),
	"status" VARCHAR (100)
);
