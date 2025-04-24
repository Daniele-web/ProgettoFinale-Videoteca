const demoData =
  [
    {
      "productId": 1,
      "title": "The Shawshank Redemption",
      "year": 1994,
      "director": "Frank Darabont",
      "actors": "Tim Robbins, Morgan Freeman",
      "box_office": "$28.3 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0111161/",
      "unitPrice": 7.53,
      "description": "Released in 1994, directed by Frank Darabont. Starring Tim Robbins, Morgan Freeman. Box office collection: $28.3 M."
    },
    {
      "productId": 2,
      "title": "The Godfather",
      "year": 1972,
      "director": "Francis Ford Coppola",
      "actors": "Marlon Brando, Al Pacino",
      "box_office": "$246–287 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0068646/",
      "unitPrice": 9.87,
      "description": "Released in 1972, directed by Francis Ford Coppola. Starring Marlon Brando, Al Pacino. Box office collection: $246–287 M."
    },
    {
      "productId": 3,
      "title": "The Dark Knight",
      "year": 2008,
      "director": "Christopher Nolan",
      "actors": "Christian Bale, Heath Ledger",
      "box_office": "$1.005 B",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29_poster.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0468569/",
      "unitPrice": 14.25,
      "description": "Released in 2008, directed by Christopher Nolan. Starring Christian Bale, Heath Ledger. Box office collection: $1.005 B."
    },
    {
      "productId": 4,
      "title": "Pulp Fiction",
      "year": 1994,
      "director": "Quentin Tarantino",
      "actors": "John Travolta, Uma Thurman",
      "box_office": "$213.9 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0110912/",
      "unitPrice": 11.34,
      "description": "Released in 1994, directed by Quentin Tarantino. Starring John Travolta, Uma Thurman. Box office collection: $213.9 M."
    },
    {
      "productId": 5,
      "title": "Schindler's List",
      "year": 1993,
      "director": "Steven Spielberg",
      "actors": "Liam Neeson, Ralph Fiennes",
      "box_office": "$322.2 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/3/38/Schindler%27s_List_movie.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0108052/",
      "unitPrice": 8.99,
      "description": "Released in 1993, directed by Steven Spielberg. Starring Liam Neeson, Ralph Fiennes. Box office collection: $322.2 M."
    },
    {
      "productId": 6,
      "title": "The Return of the King",
      "year": 2003,
      "director": "Peter Jackson",
      "actors": "Elijah Wood, Viggo Mortensen",
      "box_office": "$1.142 B",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/b/b0/The_Lord_of_the_Rings_-_The_Return_of_the_King_(2003).jpg",
      "imdb_url": "https://www.imdb.com/title/tt0167260/",
      "unitPrice": 15.67,
      "description": "Released in 2003, directed by Peter Jackson. Starring Elijah Wood, Viggo Mortensen. Box office collection: $1.142 B."
    },
    {
      "productId": 7,
      "title": "Forrest Gump",
      "year": 1994,
      "director": "Robert Zemeckis",
      "actors": "Tom Hanks, Robin Wright",
      "box_office": "$678.2 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0109830/",
      "unitPrice": 10.15,
      "description": "Released in 1994, directed by Robert Zemeckis. Starring Tom Hanks, Robin Wright. Box office collection: $678.2 M."
    },
    {
      "productId": 8,
      "title": "Inception",
      "year": 2010,
      "director": "Christopher Nolan",
      "actors": "Leonardo DiCaprio, Joseph Gordon-Levitt",
      "box_office": "$836.8 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/d/d2/Inception_%282010%29_poster.jpg",
      "imdb_url": "https://www.imdb.com/title/tt1375666/",
      "unitPrice": 13.49,
      "description": "Released in 2010, directed by Christopher Nolan. Starring Leonardo DiCaprio, Joseph Gordon-Levitt. Box office collection: $836.8 M."
    },
    {
      "productId": 9,
      "title": "Fight Club",
      "year": 1999,
      "director": "David Fincher",
      "actors": "Brad Pitt, Edward Norton",
      "box_office": "$101.2 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0137523/",
      "unitPrice": 6.78,
      "description": "Released in 1999, directed by David Fincher. Starring Brad Pitt, Edward Norton. Box office collection: $101.2 M."
    },
    {
      "productId": 10,
      "title": "The Matrix",
      "year": 1999,
      "director": "Lana Wachowski, Lilly Wachowski",
      "actors": "Keanu Reeves, Laurence Fishburne",
      "box_office": "$465.3 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0133093/",
      "unitPrice": 16.23,
      "description": "Released in 1999, directed by Lana Wachowski and Lilly Wachowski. Starring Keanu Reeves, Laurence Fishburne. Box office collection: $465.3 M."
    },
    {
      "productId": 11,
      "title": "Goodfellas",
      "year": 1990,
      "director": "Martin Scorsese",
      "actors": "Robert De Niro, Ray Liotta",
      "box_office": "$46.8 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/7/7b/Goodfellas.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0099685/",
      "unitPrice": 12.88,
      "description": "Released in 1990, directed by Martin Scorsese. Starring Robert De Niro, Ray Liotta. Box office collection: $46.8 M."
    },
    {
      "productId": 12,
      "title": "The Silence of the Lambs",
      "year": 1991,
      "director": "Jonathan Demme",
      "actors": "Jodie Foster, Anthony Hopkins",
      "box_office": "$272.7 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/8/86/The_Silence_of_the_Lambs_poster.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0102926/",
      "unitPrice": 7.99,
      "description": "Released in 1991, directed by Jonathan Demme. Starring Jodie Foster, Anthony Hopkins. Box office collection: $272.7 M."
    },
    {
      "productId": 13,
      "title": "Se7en",
      "year": 1995,
      "director": "David Fincher",
      "actors": "Morgan Freeman, Brad Pitt",
      "box_office": "$327.3 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/6/68/Seven_%28movie%29_poster.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0114369/",
      "unitPrice": 9.54,
      "description": "Released in 1995, directed by David Fincher. Starring Morgan Freeman, Brad Pitt. Box office collection: $327.3 M."
    },
    {
      "productId": 14,
      "title": "City of God",
      "year": 2002,
      "director": "Fernando Meirelles",
      "actors": "Alexandre Rodrigues, Leandro Firmino",
      "box_office": "$30.6 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/1/10/City_of_God_%282002_film%29_poster.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0317248/",
      "unitPrice": 11.05,
      "description": "Released in 2002, directed by Fernando Meirelles. Starring Alexandre Rodrigues, Leandro Firmino. Box office collection: $30.6 M."
    },
    {
      "productId": 15,
      "title": "The Usual Suspects",
      "year": 1995,
      "director": "Bryan Singer",
      "actors": "Kevin Spacey, Gabriel Byrne",
      "box_office": "$34.4 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/9/9c/Usual_suspects_ver1.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0114814/",
      "unitPrice": 8.75,
      "description": "Released in 1995, directed by Bryan Singer. Starring Kevin Spacey, Gabriel Byrne. Box office collection: $34.4 M."
    },
    {
      "productId": 16,
      "title": "Saving Private Ryan",
      "year": 1998,
      "director": "Steven Spielberg",
      "actors": "Tom Hanks, Matt Damon",
      "box_office": "$482.3 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/a/ac/Saving_Private_Ryan_poster.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0120815/",
      "unitPrice": 16.0,
      "description": "Released in 1998, directed by Steven Spielberg. Starring Tom Hanks, Matt Damon. Box office collection: $482.3 M."
    },
    {
      "productId": 17,
      "title": "Spirited Away",
      "year": 2001,
      "director": "Hayao Miyazaki",
      "actors": "Rumi Hiiragi, Miyu Irino",
      "box_office": "$347.7 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/d/db/Spirited_Away_Japanese_poster.png",
      "imdb_url": "https://www.imdb.com/title/tt0245429/",
      "unitPrice": 5.45,
      "description": "Released in 2001, directed by Hayao Miyazaki. Starring Rumi Hiiragi, Miyu Irino. Box office collection: $347.7 M."
    },
    {
      "productId": 18,
      "title": "Life Is Beautiful",
      "year": 1997,
      "director": "Roberto Benigni",
      "actors": "Roberto Benigni, Nicoletta Braschi",
      "box_office": "$230.1 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/7/7c/Lifeisbeautifulposter.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0118799/",
      "unitPrice": 14.19,
      "description": "Released in 1997, directed by Roberto Benigni. Starring Roberto Benigni, Nicoletta Braschi. Box office collection: $230.1 M."
    },
    {
      "productId": 19,
      "title": "Interstellar",
      "year": 2014,
      "director": "Christopher Nolan",
      "actors": "Matthew McConaughey, Anne Hathaway",
      "box_office": "$701.8 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0816692/",
      "unitPrice": 12.01,
      "description": "Released in 2014, directed by Christopher Nolan. Starring Matthew McConaughey, Anne Hathaway. Box office collection: $701.8 M."
    },
    {
      "productId": 20,
      "title": "The Green Mile",
      "year": 1999,
      "director": "Frank Darabont",
      "actors": "Tom Hanks, Michael Clarke Duncan",
      "box_office": "$286.8 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/e/e2/The_Green_Mile_%28movie_poster%29.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0120689/",
      "unitPrice": 10.99,
      "description": "Released in 1999, directed by Frank Darabont. Starring Tom Hanks, Michael Clarke Duncan. Box office collection: $286.8 M."
    },
    {
      "productId": 21,
      "title": "The Lion King",
      "year": 1994,
      "director": "Roger Allers, Rob Minkoff",
      "actors": "Matthew Broderick, Jeremy Irons",
      "box_office": "$968.5 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/3/3d/The_Lion_King_poster.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0110357/",
      "unitPrice": 15.49,
      "description": "Released in 1994, directed by Roger Allers and Rob Minkoff. Starring Matthew Broderick, Jeremy Irons. Box office collection: $968.5 M."
    },
    {
      "productId": 22,
      "title": "The Departed",
      "year": 2006,
      "director": "Martin Scorsese",
      "actors": "Leonardo DiCaprio, Matt Damon",
      "box_office": "$291.5 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/5/50/Departed234.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0407887/",
      "unitPrice": 7.65,
      "description": "Released in 2006, directed by Martin Scorsese. Starring Leonardo DiCaprio, Matt Damon. Box office collection: $291.5 M."
    },
    {
      "productId": 23,
      "title": "Back to the Future",
      "year": 1985,
      "director": "Robert Zemeckis",
      "actors": "Michael J. Fox, Christopher Lloyd",
      "box_office": "$388.8 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/d/d2/Back_to_the_Future.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0088763/",
      "unitPrice": 9.99,
      "description": "Released in 1985, directed by Robert Zemeckis. Starring Michael J. Fox, Christopher Lloyd. Box office collection: $388.8 M."
    },
    {
      "productId": 24,
      "title": "Terminator 2: Judgment Day",
      "year": 1991,
      "director": "James Cameron",
      "actors": "Arnold Schwarzenegger, Linda Hamilton",
      "box_office": "$520.9 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/8/85/Terminator2poster.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0103064/",
      "unitPrice": 17.0,
      "description": "Released in 1991, directed by James Cameron. Starring Arnold Schwarzenegger, Linda Hamilton. Box office collection: $520.9 M."
    },
    {
      "productId": 25,
      "title": "American History X",
      "year": 1998,
      "director": "Tony Kaye",
      "actors": "Edward Norton, Edward Furlong",
      "box_office": "$23.9 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/0/0e/American_history_x_poster.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0120586/",
      "unitPrice": 13.5,
      "description": "Released in 1998, directed by Tony Kaye. Starring Edward Norton, Edward Furlong. Box office collection: $23.9 M."
    },
    {
      "productId": 26,
      "title": "Whiplash",
      "year": 2014,
      "director": "Damien Chazelle",
      "actors": "Miles Teller, J.K. Simmons",
      "box_office": "$49.0 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/0/01/Whiplash_poster.jpg",
      "imdb_url": "https://www.imdb.com/title/tt2582802/",
      "unitPrice": 6.25,
      "description": "Released in 2014, directed by Damien Chazelle. Starring Miles Teller, J.K. Simmons. Box office collection: $49.0 M."
    },
    {
      "productId": 27,
      "title": "The Prestige",
      "year": 2006,
      "director": "Christopher Nolan",
      "actors": "Christian Bale, Hugh Jackman",
      "box_office": "$109.7 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/d/d2/Prestige_poster.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0482571/",
      "unitPrice": 8.65,
      "description": "Released in 2006, directed by Christopher Nolan. Starring Christian Bale, Hugh Jackman. Box office collection: $109.7 M."
    },
    {
      "productId": 28,
      "title": "Gladiator",
      "year": 2000,
      "director": "Ridley Scott",
      "actors": "Russell Crowe, Joaquin Phoenix",
      "box_office": "$460.5 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_%282000_film_poster%29.png",
      "imdb_url": "https://www.imdb.com/title/tt0172495/",
      "unitPrice": 16.8,
      "description": "Released in 2000, directed by Ridley Scott. Starring Russell Crowe, Joaquin Phoenix. Box office collection: $460.5 M."
    },
    {
      "productId": 29,
      "title": "Django Unchained",
      "year": 2012,
      "director": "Quentin Tarantino",
      "actors": "Jamie Foxx, Christoph Waltz",
      "box_office": "$425.4 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/8/8b/Django_Unchained_Poster.jpg",
      "imdb_url": "https://www.imdb.com/title/tt1853728/",
      "unitPrice": 11.11,
      "description": "Released in 2012, directed by Quentin Tarantino. Starring Jamie Foxx, Christoph Waltz. Box office collection: $425.4 M."
    },
    {
      "productId": 30,
      "title": "Memento",
      "year": 2000,
      "director": "Christopher Nolan",
      "actors": "Guy Pearce, Carrie-Anne Moss",
      "box_office": "$39.7 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/c/c7/Memento_poster.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0209144/",
      "unitPrice": 14.89,
      "description": "Released in 2000, directed by Christopher Nolan. Starring Guy Pearce, Carrie-Anne Moss. Box office collection: $39.7 M."
    },
    {
      "productId": 31,
      "title": "Casablanca",
      "year": 1942,
      "director": "Michael Curtiz",
      "actors": "Humphrey Bogart, Ingrid Bergman",
      "box_office": "$1.0 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/commons/b/b3/CasablancaPoster-Gold.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0034583/",
      "unitPrice": 9.15,
      "description": "Released in 1942, directed by Michael Curtiz. Starring Humphrey Bogart, Ingrid Bergman. Box office collection: $1.0 M."
    },
    {
      "productId": 32,
      "title": "Rear Window",
      "year": 1954,
      "director": "Alfred Hitchcock",
      "actors": "James Stewart, Grace Kelly",
      "box_office": "$3.5 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Rear_Window_film_poster.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0047396/",
      "unitPrice": 13.67,
      "description": "Released in 1954, directed by Alfred Hitchcock. Starring James Stewart, Grace Kelly. Box office collection: $3.5 M."
    },
    {
      "productId": 33,
      "title": "Once Upon a Time in the West",
      "year": 1968,
      "director": "Sergio Leone",
      "actors": "Henry Fonda, Charles Bronson",
      "box_office": "$5.5 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/a/af/Once_Upon_a_Time_in_the_West_%281968_film%29_poster.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0064116/",
      "unitPrice": 10.25,
      "description": "Released in 1968, directed by Sergio Leone. Starring Henry Fonda, Charles Bronson. Box office collection: $5.5 M."
    },
    {
      "productId": 34,
      "title": "Apocalypse Now",
      "year": 1979,
      "director": "Francis Ford Coppola",
      "actors": "Martin Sheen, Marlon Brando",
      "box_office": "$150.0 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/4/43/Apocalypse_Now_poster.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0078788/",
      "unitPrice": 12.34,
      "description": "Released in 1979, directed by Francis Ford Coppola. Starring Martin Sheen, Marlon Brando. Box office collection: $150.0 M."
    },
    {
      "productId": 35,
      "title": "Alien",
      "year": 1979,
      "director": "Ridley Scott",
      "actors": "Sigourney Weaver, Tom Skerritt",
      "box_office": "$104.9 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/c/c3/Alien_movie_poster.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0078748/",
      "unitPrice": 7.77,
      "description": "Released in 1979, directed by Ridley Scott. Starring Sigourney Weaver, Tom Skerritt. Box office collection: $104.9 M."
    },
    {
      "productId": 36,
      "title": "City Lights",
      "year": 1931,
      "director": "Charlie Chaplin",
      "actors": "Charlie Chaplin, Virginia Cherrill",
      "box_office": "$3.0 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/8/8b/City_Lights_%281931_film%29_poster.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0021749/",
      "unitPrice": 15.22,
      "description": "Released in 1931, directed by Charlie Chaplin. Starring Charlie Chaplin, Virginia Cherrill. Box office collection: $3.0 M."
    },
    {
      "productId": 37,
      "title": "Modern Times",
      "year": 1936,
      "director": "Charlie Chaplin",
      "actors": "Charlie Chaplin, Paulette Goddard",
      "box_office": "$1.2 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/commons/8/83/Modern_Times_poster.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0027977/",
      "unitPrice": 8.99,
      "description": "Released in 1936, directed by Charlie Chaplin. Starring Charlie Chaplin, Paulette Goddard. Box office collection: $1.2 M."
    },
    {
      "productId": 38,
      "title": "Psycho",
      "year": 1960,
      "director": "Alfred Hitchcock",
      "actors": "Anthony Perkins, Janet Leigh",
      "box_office": "$32.0 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/commons/7/76/Psycho_%281960%29_theatrical_poster_%28retouched%29.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0054215/",
      "unitPrice": 10.78,
      "description": "Released in 1960, directed by Alfred Hitchcock. Starring Anthony Perkins, Janet Leigh. Box office collection: $32.0 M."
    },
    {
      "productId": 39,
      "title": "North by Northwest",
      "year": 1959,
      "director": "Alfred Hitchcock",
      "actors": "Cary Grant, Eva Marie Saint",
      "box_office": "$7.4 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/commons/8/83/North_by_Northwest_movie_poster.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0053125/",
      "unitPrice": 11.34,
      "description": "Released in 1959, directed by Alfred Hitchcock. Starring Cary Grant, Eva Marie Saint. Box office collection: $7.4 M."
    },
    {
      "productId": 40,
      "title": "Vertigo",
      "year": 1958,
      "director": "Alfred Hitchcock",
      "actors": "James Stewart, Kim Novak",
      "box_office": "$7.3 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/commons/7/71/Vertigo_%281958_film_poster%29.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0052357/",
      "unitPrice": 16.11,
      "description": "Released in 1958, directed by Alfred Hitchcock. Starring James Stewart, Kim Novak. Box office collection: $7.3 M."
    },
    {
      "productId": 41,
      "title": "Raiders of the Lost Ark",
      "year": 1981,
      "director": "Steven Spielberg",
      "actors": "Harrison Ford, Karen Allen",
      "box_office": "$389.9 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/4/4c/Raiders_of_the_Lost_Ark_poster.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0082971/",
      "unitPrice": 14.5,
      "description": "Released in 1981, directed by Steven Spielberg. Starring Harrison Ford, Karen Allen. Box office collection: $389.9 M."
    },
    {
      "productId": 42,
      "title": "The Shining",
      "year": 1980,
      "director": "Stanley Kubrick",
      "actors": "Jack Nicholson, Shelley Duvall",
      "box_office": "$44.0 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/1/13/The_Shining_%281980%29_U.K._release_poster.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0081505/",
      "unitPrice": 7.45,
      "description": "Released in 1980, directed by Stanley Kubrick. Starring Jack Nicholson, Shelley Duvall. Box office collection: $44.0 M."
    },
    {
      "productId": 43,
      "title": "Aliens",
      "year": 1986,
      "director": "James Cameron",
      "actors": "Sigourney Weaver, Michael Biehn",
      "box_office": "$131.1 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/f/fb/Aliens_poster.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0090605/",
      "unitPrice": 9.99,
      "description": "Released in 1986, directed by James Cameron. Starring Sigourney Weaver, Michael Biehn. Box office collection: $131.1 M."
    },
    {
      "productId": 44,
      "title": "Braveheart",
      "year": 1995,
      "director": "Mel Gibson",
      "actors": "Mel Gibson, Sophie Marceau",
      "box_office": "$210.4 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/b/b7/Braveheart_imp.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0112573/",
      "unitPrice": 12.88,
      "description": "Released in 1995, directed by Mel Gibson. Starring Mel Gibson, Sophie Marceau. Box office collection: $210.4 M."
    },
    {
      "productId": 45,
      "title": "Titanic",
      "year": 1997,
      "director": "James Cameron",
      "actors": "Leonardo DiCaprio, Kate Winslet",
      "box_office": "$2.195 B",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png",
      "imdb_url": "https://www.imdb.com/title/tt0120338/",
      "unitPrice": 10.49,
      "description": "Released in 1997, directed by James Cameron. Starring Leonardo DiCaprio, Kate Winslet. Box office collection: $2.195 B."
    },
    {
      "productId": 46,
      "title": "Avatar",
      "year": 2009,
      "director": "James Cameron",
      "actors": "Sam Worthington, Zoe Saldana",
      "box_office": "$2.923 B",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0499549/",
      "unitPrice": 8.66,
      "description": "Released in 2009, directed by James Cameron. Starring Sam Worthington, Zoe Saldana. Box office collection: $2.923 B."
    },
    {
      "productId": 47,
      "title": "The Dark Knight Rises",
      "year": 2012,
      "director": "Christopher Nolan",
      "actors": "Christian Bale, Tom Hardy",
      "box_office": "$1.081 B",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/8/83/Dark_knight_rises_poster.jpg",
      "imdb_url": "https://www.imdb.com/title/tt1345836/",
      "unitPrice": 15.99,
      "description": "Released in 2012, directed by Christopher Nolan. Starring Christian Bale, Tom Hardy. Box office collection: $1.081 B."
    },
    {
      "productId": 48,
      "title": "The Avengers",
      "year": 2012,
      "director": "Joss Whedon",
      "actors": "Robert Downey Jr., Chris Evans",
      "box_office": "$1.519 B",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0848228/",
      "unitPrice": 11.45,
      "description": "Released in 2012, directed by Joss Whedon. Starring Robert Downey Jr., Chris Evans. Box office collection: $1.519 B."
    },
    {
      "productId": 49,
      "title": "Jurassic Park",
      "year": 1993,
      "director": "Steven Spielberg",
      "actors": "Sam Neill, Laura Dern",
      "box_office": "$1.034 B",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/9/9e/Jurassic_Park_%28film%29_poster.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0107290/",
      "unitPrice": 6.99,
      "description": "Released in 1993, directed by Steven Spielberg. Starring Sam Neill, Laura Dern. Box office collection: $1.034 B."
    },
    {
      "productId": 50,
      "title": "Star Wars: A New Hope",
      "year": 1977,
      "director": "George Lucas",
      "actors": "Mark Hamill, Harrison Ford",
      "box_office": "$775.4 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0076759/",
      "unitPrice": 14.99,
      "description": "Released in 1977, directed by George Lucas. Starring Mark Hamill, Harrison Ford. Box office collection: $775.4 M."
    },
    {
      "productId": 51,
      "title": "The Empire Strikes Back",
      "year": 1980,
      "director": "Irvin Kershner",
      "actors": "Mark Hamill, Harrison Ford",
      "box_office": "$538.4 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/3/3f/The_Empire_Strikes_Back_%281980_film%29_poster.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0080684/",
      "unitPrice": 10.35,
      "description": "Released in 1980, directed by Irvin Kershner. Starring Mark Hamill, Harrison Ford. Box office collection: $538.4 M."
    },
    {
      "productId": 52,
      "title": "Return of the Jedi",
      "year": 1983,
      "director": "Richard Marquand",
      "actors": "Mark Hamill, Harrison Ford",
      "box_office": "$572.7 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0086190/",
      "unitPrice": 13.45,
      "description": "Released in 1983, directed by Richard Marquand. Starring Mark Hamill, Harrison Ford. Box office collection: $572.7 M."
    },
    {
      "productId": 53,
      "title": "Toy Story",
      "year": 1995,
      "director": "John Lasseter",
      "actors": "Tom Hanks, Tim Allen",
      "box_office": "$373.6 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0114709/",
      "unitPrice": 9.75,
      "description": "Released in 1995, directed by John Lasseter. Starring Tom Hanks, Tim Allen. Box office collection: $373.6 M."
    },
    {
      "productId": 54,
      "title": "Up",
      "year": 2009,
      "director": "Pete Docter",
      "actors": "Ed Asner, Jordan Nagai",
      "box_office": "$735.1 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/0/05/Up_%282009_film%29.jpg",
      "imdb_url": "https://www.imdb.com/title/tt1049413/",
      "unitPrice": 16.89,
      "description": "Released in 2009, directed by Pete Docter. Starring Ed Asner, Jordan Nagai. Box office collection: $735.1 M."
    },
    {
      "productId": 55,
      "title": "Finding Nemo",
      "year": 2003,
      "director": "Andrew Stanton",
      "actors": "Albert Brooks, Ellen DeGeneres",
      "box_office": "$940.3 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/2/29/Finding_Nemo.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0266543/",
      "unitPrice": 7.99,
      "description": "Released in 2003, directed by Andrew Stanton. Starring Albert Brooks, Ellen DeGeneres. Box office collection: $940.3 M."
    },
    {
      "productId": 56,
      "title": "WALL·E",
      "year": 2008,
      "director": "Andrew Stanton",
      "actors": "Ben Burtt, Elissa Knight",
      "box_office": "$533.3 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/5/50/WALL-Eposter.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0910970/",
      "unitPrice": 11.33,
      "description": "Released in 2008, directed by Andrew Stanton. Starring Ben Burtt, Elissa Knight. Box office collection: $533.3 M."
    },
    {
      "productId": 57,
      "title": "Coco",
      "year": 2017,
      "director": "Lee Unkrich",
      "actors": "Anthony Gonzalez, Gael García Bernal",
      "box_office": "$807.1 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/0/08/Coco_%282017_film%29_poster.jpg",
      "imdb_url": "https://www.imdb.com/title/tt2380307/",
      "unitPrice": 15.5,
      "description": "Released in 2017, directed by Lee Unkrich. Starring Anthony Gonzalez, Gael García Bernal. Box office collection: $807.1 M."
    },
    {
      "productId": 58,
      "title": "Pan's Labyrinth",
      "year": 2006,
      "director": "Guillermo del Toro",
      "actors": "Ivana Baquero, Sergi López",
      "box_office": "$83.3 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/6/67/Pan%27s_Labyrinth.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0457430/",
      "unitPrice": 8.45,
      "description": "Released in 2006, directed by Guillermo del Toro. Starring Ivana Baquero, Sergi López. Box office collection: $83.3 M."
    },
    {
      "productId": 59,
      "title": "Her",
      "year": 2013,
      "director": "Spike Jonze",
      "actors": "Joaquin Phoenix, Scarlett Johansson",
      "box_office": "$47.4 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/4/44/Her_%28film%29_poster.jpg",
      "imdb_url": "https://www.imdb.com/title/tt1798709/",
      "unitPrice": 10.89,
      "description": "Released in 2013, directed by Spike Jonze. Starring Joaquin Phoenix, Scarlett Johansson. Box office collection: $47.4 M."
    },
    {
      "productId": 60,
      "title": "Eternal Sunshine of the Spotless Mind",
      "year": 2004,
      "director": "Michel Gondry",
      "actors": "Jim Carrey, Kate Winslet",
      "box_office": "$72.3 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/6/62/Eternal_sunshine_of_the_spotless_mind_ver3.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0338013/",
      "unitPrice": 12.5,
      "description": "Released in 2004, directed by Michel Gondry. Starring Jim Carrey, Kate Winslet. Box office collection: $72.3 M."
    },
    {
      "productId": 61,
      "title": "No Country for Old Men",
      "year": 2007,
      "director": "Joel & Ethan Coen",
      "actors": "Tommy Lee Jones, Javier Bardem",
      "box_office": "$171.6 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0477348/",
      "unitPrice": 7.49,
      "description": "Released in 2007, directed by Joel & Ethan Coen. Starring Tommy Lee Jones, Javier Bardem. Box office collection: $171.6 M."
    },
    {
      "productId": 62,
      "title": "There Will Be Blood",
      "year": 2007,
      "director": "Paul Thomas Anderson",
      "actors": "Daniel Day-Lewis, Paul Dano",
      "box_office": "$76.2 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/2/2a/There_Will_Be_Blood_Poster.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0469494/",
      "unitPrice": 14.67,
      "description": "Released in 2007, directed by Paul Thomas Anderson. Starring Daniel Day-Lewis, Paul Dano. Box office collection: $76.2 M."
    },
    {
      "productId": 63,
      "title": "The Grand Budapest Hotel",
      "year": 2014,
      "director": "Wes Anderson",
      "actors": "Ralph Fiennes, F. Murray Abraham",
      "box_office": "$174.8 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/a/a6/The_Grand_Budapest_Hotel_Poster.jpg",
      "imdb_url": "https://www.imdb.com/title/tt2278388/",
      "unitPrice": 9.99,
      "description": "Released in 2014, directed by Wes Anderson. Starring Ralph Fiennes, F. Murray Abraham. Box office collection: $174.8 M."
    },
    {
      "productId": 64,
      "title": "The Wolf of Wall Street",
      "year": 2013,
      "director": "Martin Scorsese",
      "actors": "Leonardo DiCaprio, Jonah Hill",
      "box_office": "$392.0 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/d/d8/The_Wolf_of_Wall_Street_%282013%29.png",
      "imdb_url": "https://www.imdb.com/title/tt0993846/",
      "unitPrice": 16.25,
      "description": "Released in 2013, directed by Martin Scorsese. Starring Leonardo DiCaprio, Jonah Hill. Box office collection: $392.0 M."
    },
    {
      "productId": 65,
      "title": "In Bruges",
      "year": 2008,
      "director": "Martin McDonagh",
      "actors": "Colin Farrell, Brendan Gleeson",
      "box_office": "$34.1 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/c/c6/In_Bruges_poster.jpg",
      "imdb_url": "https://www.imdb.com/title/tt0783233/",
      "unitPrice": 11.22,
      "description": "Released in 2008, directed by Martin McDonagh. Starring Colin Farrell, Brendan Gleeson. Box office collection: $34.1 M."
    },
    {
      "productId": 66,
      "title": "Moonlight",
      "year": 2016,
      "director": "Barry Jenkins",
      "actors": "Mahershala Ali, Alex Hibbert",
      "box_office": "$65.3 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/8/84/Moonlight_%282016_film%29.png",
      "imdb_url": "https://www.imdb.com/title/tt4975722/",
      "unitPrice": 8.99,
      "description": "Released in 2016, directed by Barry Jenkins. Starring Mahershala Ali, Alex Hibbert. Box office collection: $65.3 M."
    },
    {
      "productId": 67,
      "title": "Parasite",
      "year": 2019,
      "director": "Bong Joon-ho",
      "actors": "Song Kang-ho, Lee Sun-kyun",
      "box_office": "$258.8 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.png",
      "imdb_url": "https://www.imdb.com/title/tt6751668/",
      "unitPrice": 12.1,
      "description": "Released in 2019, directed by Bong Joon-ho. Starring Song Kang-ho, Lee Sun-kyun. Box office collection: $258.8 M."
    },
    {
      "productId": 68,
      "title": "Get Out",
      "year": 2017,
      "director": "Jordan Peele",
      "actors": "Daniel Kaluuya, Allison Williams",
      "box_office": "$255.4 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/a/a3/Get_Out_poster.png",
      "imdb_url": "https://www.imdb.com/title/tt5052448/",
      "unitPrice": 10.05,
      "description": "Released in 2017, directed by Jordan Peele. Starring Daniel Kaluuya, Allison Williams. Box office collection: $255.4 M."
    },
    {
      "productId": 69,
      "title": "Mad Max: Fury Road",
      "year": 2015,
      "director": "George Miller",
      "actors": "Tom Hardy, Charlize Theron",
      "box_office": "$374.7 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/6/6e/Mad_Max_Fury_Road.jpg",
      "imdb_url": "https://www.imdb.com/title/tt1392190/",
      "unitPrice": 15.2,
      "description": "Released in 2015, directed by George Miller. Starring Tom Hardy, Charlize Theron. Box office collection: $374.7 M."
    },
    {
      "productId": 70,
      "title": "The Social Network",
      "year": 2010,
      "director": "David Fincher",
      "actors": "Jesse Eisenberg, Andrew Garfield",
      "box_office": "$224.9 M",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/7/7a/Social_network_film_poster.jpg",
      "imdb_url": "https://www.imdb.com/title/tt1285016/",
      "unitPrice": 13.75,
      "description": "Released in 2010, directed by David Fincher. Starring Jesse Eisenberg, Andrew Garfield. Box office collection: $224.9 M."
    }
  ];
// Function to fetch poster URL for a single movie
async function fetchPosterUrl(movie) {
  const apiKey = "e4ae3654"; // Replace with your actual OMDb API key
  const imdbId = movie.imdb_url.split('/')[4]; // Extract IMDb ID (e.g., "tt0111161")
  const url = `https://www.omdbapi.com/?i=${imdbId}&apikey=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    if (data.Response === "True" && data.Poster && data.Poster !== "N/A") {
      movie.image_url = data.Poster; // Update the movie's image_url
      console.log(`Updated ${movie.title}: ${movie.image_url}`);
    } else {
      console.error(`Poster not found for ${movie.title}: ${data.Error || "No poster available"}`);
    }
  } catch (error) {
    console.error(`Failed to fetch poster for ${movie.title}:`, error);
  }
}

// Function to process all movies with a delay to avoid rate limits
async function updateAllPosters() {
  for (const movie of demoData) {
    await fetchPosterUrl(movie);
    await new Promise(resolve => setTimeout(resolve, 100)); // 100ms delay between requests
  }
}

console.log(demoData)

// Run the update process
updateAllPosters().then(r => console.log("All done!"));
