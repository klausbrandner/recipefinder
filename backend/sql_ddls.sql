DROP TABLE Recipes;
DROP TABLE Ingredients;
DROP TABLE Evaluations;
DROP TABLE Categories;

CREATE TABLE Recipes(
    rid INT(11) AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    preperation TEXT,
    PRIMARY KEY(rid)
);

CREATE TABLE Ingredients(
    rid INT(11),
    title VARCHAR(255) NOT NULL,
    quantity VARCHAR(100) NOT NULL,
    FOREIGN KEY (rid) REFERENCES Recipes(rid) ON DELETE CASCADE,
    PRIMARY KEY (rid, ingredient)
);

CREATE TABLE Evaluations(
    eid INT(11) AUTO_INCREMENT,
    rid INT(11),
    rating INT(1) NOT NULL,
    FOREIGN KEY (rid) REFERENCES Recipes(rid) ON DELETE CASCADE,
    PRIMARY KEY (eid)
);

CREATE TABLE Categories(
    cid INT(11) AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    PRIMARY KEY (cid)
);

CREATE TABLE BelongsTo(
    rid INT(11),
    cid INT(11),
    FOREIGN KEY (rid) REFERENCES Recipes(rid) ON DELETE CASCADE,
    FOREIGN KEY (cid) REFERENCES Categories(cid) ON DELETE CASCADE,
    PRIMARY KEY (rid, cid)
)
