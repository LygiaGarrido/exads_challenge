const movieList = [
  {
    id: 0,
    title: "The Gray Man",
    image:
      "https://m.media-amazon.com/images/M/MV5BOWY4MmFiY2QtMzE1YS00NTg1LWIwOTQtYTI4ZGUzNWIxNTVmXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
    url: "https://www.imdb.com/title/tt1649418/",
    relatedMovies: [
      {
        id: 3,
        title: "Top Gun: Maverick",
        image:
          "https://upload.wikimedia.org/wikipedia/pt/d/d2/Top_Gun_Maverick.jpg",
        url: "https://www.imdb.com/title/tt1745960/",
        relatedMovies: [
          {
            id: 12,
            title: "Batman",
            image:
              "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_FMjpg_UX1000_.jpg",
            url: "https://www.imdb.com/title/tt1877830/",
          },
          {
            id: 13,
            title: "Spider-man No Way Home",
            image:
              "https://terrigen-cdn-dev.marvel.com/content/prod/1x/snh_online_6072x9000_posed_01.jpg",
            url: "https://www.imdb.com/title/tt10872600/",
          },

          {
            id: 14,
            title: "Flash",
            image:
              "https://media-cache.cinematerial.com/p/500x/js1knyp7/the-flash-movie-poster.jpg?v=1534279724",
            url: "https://www.imdb.com/title/tt0439572/",
          },
        ],
      },
      {
        id: 4,
        title: "Bullet Train",
        image:
          "https://m.media-amazon.com/images/M/MV5BMDU2ZmM2OTYtNzIxYy00NjM5LTliNGQtN2JmOWQzYTBmZWUzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        url: "https://www.imdb.com/title/tt12593682/",
        relatedMovies: [
          {
            id: 15,
            title: "The Accountant",
            image:
              "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/fcccb33c01e74615f3dcf60d7ef99181f53824c8857d1767388f825386459ed3._RI_V_TTW_.jpg",
            url: "https://www.imdb.com/title/tt2140479/?ref_=nv_sr_srsg_0",
          },
          {
            id: 16,
            title: "Rush Hour 3",
            image:
              "https://m.media-amazon.com/images/M/MV5BMTA0Nzg5NjQ0MDBeQTJeQWpwZ15BbWU3MDE4Mzg5NDE@._V1_FMjpg_UX1000_.jpg",
            url: "https://www.imdb.com/title/tt0293564/?ref_=fn_al_tt_1",
          },
          {
            id: 17,
            title: "MIB II",
            image:
              "https://upload.wikimedia.org/wikipedia/en/3/3d/Men_in_Black_II_Poster.jpg",
            url: "https://www.imdb.com/title/tt0120912/?ref_=nv_sr_srsg_0",
          },
        ],
      },
      {
        id: 5,
        title: "Thor - Love and Thunder",
        image:
          "https://sm.ign.com/ign_pt/screenshot/default/image001-1650291626422_shyu.jpg",
        url: "https://www.imdb.com/title/tt10648342/",
        relatedMovies: [
          {
            id: 18,
            title: "Iron Man 3",
            image:
              "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman3_lob_crd_01_11.jpg",
            url: "https://www.imdb.com/title/tt1300854/?ref_=fn_al_tt_1",
          },
          {
            id: 19,
            title: "Logan",
            image:
              "https://m.media-amazon.com/images/M/MV5BYzc5MTU4N2EtYTkyMi00NjdhLTg3NWEtMTY4OTEyMzJhZTAzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_FMjpg_UX1000_.jpg",
            url: "https://www.imdb.com/title/tt3315342/?ref_=fn_al_tt_1",
          },
          {
            id: 20,
            title: "Black Widow",
            image:
              "https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
            url: "https://www.imdb.com/title/tt3480822/?ref_=nv_sr_srsg_0",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    title: "Blonde",
    image:
      "https://upload.wikimedia.org/wikipedia/en/6/6d/Blonde_2022_film_poster.jpg",
    url: "https://www.imdb.com/title/tt1655389/",
    relatedMovies: [
      {
        id: 6,
        title: "Purple Hearts",
        image:
          "https://upload.wikimedia.org/wikipedia/en/8/82/PurpleHeartsNetflix_cover.png",
        url: "https://www.imdb.com/title/tt4614584/",
        relatedMovies: [
          {
            id: 21,
            title: "Footloose",
            image:
              "https://upload.wikimedia.org/wikipedia/en/e/e4/FootloosePoster.jpg",
            url: "https://www.imdb.com/title/tt0087277/?ref_=nv_sr_srsg_0",
          },
          {
            id: 22,
            title: "Me before you",
            image:
              "https://m.media-amazon.com/images/M/MV5BMTQ2NjE4NDE2NV5BMl5BanBnXkFtZTgwOTcwNDE5NzE@._V1_.jpg",
            url: "https://www.imdb.com/title/tt2674426/?ref_=nv_sr_srsg_0",
          },
          {
            id: 23,
            title: "The fault in our stars",
            image:
              "https://m.media-amazon.com/images/M/MV5BNTVkMTFiZWItOTFkOC00YTc3LWFhYzQtZTg3NzAxZjJlNTAyXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
            url: "https://www.imdb.com/title/tt2582846/?ref_=nv_sr_srsg_0",
          },
        ],
      },
      {
        id: 7,
        title: "Wakanda Forever",
        image:
          "https://m.media-amazon.com/images/M/MV5BNTM4NjIxNmEtYWE5NS00NDczLTkyNWQtYThhNmQyZGQzMjM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg",
        url: "https://www.imdb.com/title/tt9114286/",
        relatedMovies: [
          {
            id: 24,
            title: "Deadpool",
            image:
              "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
            url: "https://www.imdb.com/title/tt1431045/?ref_=nv_sr_srsg_0",
          },
          {
            id: 25,
            title: "Avengers: Endgame",
            image:
              "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
            url: "https://www.imdb.com/title/tt4154796/?ref_=nv_sr_srsg_0",
          },
          {
            id: 26,
            title: " The Guardians of the Galaxy vol2",
            image:
              "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_.jpg",
            url: "https://www.imdb.com/title/tt3896198/?ref_=nv_sr_srsg_7",
          },
        ],
      },

      {
        id: 8,
        title: "Godfather",
        image:
          "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        url: "https://www.imdb.com/title/tt0068646/",
        relatedMovies: [
          {
            id: 27,
            title: "Django Unchained",
            image:
              "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_.jpg",
            url: "https://www.imdb.com/title/tt1853728/?ref_=nv_sr_srsg_0",
          },
          {
            id: 28,
            title: "Reservoir Dogs",
            image:
              "https://upload.wikimedia.org/wikipedia/pt/e/e1/Reservoir_Dogs_1992.jpg",
            url: "https://www.imdb.com/title/tt0105236/?ref_=nv_sr_srsg_0",
          },
          {
            id: 29,
            title: "The Untouchables",
            image:
              "https://m.media-amazon.com/images/M/MV5BYTVjYWJmMWQtYWU4Ni00MWY3LWI2YmMtNTI5MDE0MWVmMmEzL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX190_CR0,6,190,281_.jpg",
            url: "https://www.imdb.com/title/tt0094226/?ref_=nv_sr_srsg_0",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Minions",
    image:
      "https://m.media-amazon.com/images/M/MV5BZDQyODUwM2MtNzA0YS00ZjdmLTgzMjItZWRjN2YyYWE5ZTNjXkEyXkFqcGdeQXVyMTI2MzY1MjM1._V1_FMjpg_UX1000_.jpg",
    url: "https://www.imdb.com/title/tt5113044/",
    relatedMovies: [
      {
        id: 9,
        title: "The Lion King",
        image:
          "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_.jpg",
        url: "https://www.imdb.com/title/tt0110357/",
        relatedMovies: [
          {
            id: 30,
            title: "Encanto",
            image:
              "https://lumiere-a.akamaihd.net/v1/images/p_encanto_homeent_22359_4892ae1c.jpeg",
            url: "https://www.imdb.com/title/tt2953050/?ref_=nv_sr_srsg_0",
          },
          {
            id: 31,
            title: "Kung Fu Panda",
            image:
              "https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
            url: "https://www.imdb.com/title/tt0441773/?ref_=nv_sr_srsg_2",
          },
          {
            id: 32,
            title: "Alice in Wonderland",
            image:
              "https://lumiere-a.akamaihd.net/v1/images/image_ccd6a58d.jpeg",
            url: "https://www.imdb.com/title/tt1014759/?ref_=nv_sr_srsg_0",
          },
        ],
      },

      {
        id: 10,
        title: "Madagascar",
        image:
          "https://m.media-amazon.com/images/M/MV5BN2I5YzFlYWEtZjRhNy00ZmQzLWJhNTktZGIwYjFjODdmNDgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
        url: "https://www.imdb.com/title/tt0351283/?ref_=fn_al_tt_1",
        relatedMovies: [
          {
            id: 33,
            title: "Shrek 2",
            image:
              "https://m.media-amazon.com/images/I/51DXMe5PfUL._AC_SY580_.jpg",
            url: "https://www.imdb.com/title/tt0298148/?ref_=nv_sr_srsg_0",
          },
          {
            id: 34,
            title: "Monsters Inc",
            image:
              "https://lumiere-a.akamaihd.net/v1/images/p_monstersinc_19751_55afa07a.jpeg",
            url: "https://www.imdb.com/title/tt0198781/?ref_=nv_sr_srsg_0",
          },
          {
            id: 35,
            title: "The Lorax",
            image:
              "https://m.media-amazon.com/images/M/MV5BMTU1MTAwMjk1NF5BMl5BanBnXkFtZTcwMDI5NDc4Ng@@._V1_FMjpg_UX1000_.jpg",
            url: "https://www.imdb.com/title/tt1482459/?ref_=nv_sr_srsg_1",
          },
        ],
      },
      {
        id: 11,
        title: "ET",
        image:
          "https://m.media-amazon.com/images/M/MV5BMTQ2ODFlMDAtNzdhOC00ZDYzLWE3YTMtNDU4ZGFmZmJmYTczXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
        url: "https://www.imdb.com/title/tt0083866/?ref_=fn_al_tt_1",
        relatedMovies: [
          {
            id: 36,
            title: "Paddington",
            image:
              "https://m.media-amazon.com/images/M/MV5BMTAxOTMwOTkwNDZeQTJeQWpwZ15BbWU4MDEyMTI1NjMx._V1_FMjpg_UX1000_.jpg",
            url: "https://www.imdb.com/title/tt1109624/?ref_=fn_al_tt_1",
          },
          {
            id: 37,
            title: "Ferdinand",
            image:
              "https://m.media-amazon.com/images/M/MV5BMjI4Mjk0NzQwOF5BMl5BanBnXkFtZTgwNjg3MjI2MjI@._V1_FMjpg_UX1000_.jpg",
            url: "https://www.imdb.com/title/tt3411444/?ref_=nv_sr_srsg_0",
          },
          {
            id: 38,
            title: "Monster House",
            image:
              "https://m.media-amazon.com/images/M/MV5BMTIzNjE1NDg1N15BMl5BanBnXkFtZTcwOTg2NTMzMQ@@._V1_.jpg",
            url: "https://www.imdb.com/title/tt0385880/?ref_=fn_al_tt_1",
          },
        ],
      },
    ],
  },
];

export {movieList};