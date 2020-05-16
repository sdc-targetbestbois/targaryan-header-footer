USE searchbar;
LOAD DATA LOCAL INFILE '/Users/Brian/Targaryen/Brian-Component/database/targaryen_inventory.csv'
INTO TABLE items
FIELDS TERMINATED BY ',' 
OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;
