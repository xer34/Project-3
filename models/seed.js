var seeder = require("mongoose-seed");

// Connect to MongoDB via Mongoose
seeder.connect("mongodb://localhost/project3", function() {
  // Load Mongoose models
  seeder.loadModels(["./onsiteUser.js"]);

  // Clear specified collections

  // Callback to populate DB once collections have been cleared
  seeder.populateModels(data, function() {
    seeder.disconnect();
  });
})


// Data array containing seed data - documents organized by Model
var data = [
  {
    model: "onsiteUser",
    documents: [
      {
        username: "Barrett ",
        password: "5c5e2d5110a91b19e0e5eae7",
        location: 32814,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Bender ",
        password: "5c5e2d519b5ab20c70821ebc",
        location: 32826,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Hattie ",
        password: "5c5e2d514157afdb1889a002",
        location: 32733,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Yesenia ",
        password: "5c5e2d51e36c03fb37bac726",
        location: 32792,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Bradford ",
        password: "5c5e2d51369294f7a48d3d60",
        location: 67653,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Brooke ",
        password: "5c5e2d51cf0493371f6aa656",
        location: 69910,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Maryanne ",
        password: "5c5e2d51583849d21b54d2c3",
        location: 56859,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Gomez ",
        password: "5c5e2d513a9153527a846564",
        location: 92314,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Celeste ",
        password: "5c5e2d51874c51a28e12a800",
        location: 82485,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Sparks ",
        password: "5c5e2d51eb2bf19c69884916",
        location: 54891,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Josefina ",
        password: "5c5e2d511eeee7e37f5a585d",
        location: 45109,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Erma ",
        password: "5c5e2d510fa2933cd15591ea",
        location: 47619,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Bates ",
        password: "5c5e2d5171b92aac137f521c",
        location: 63706,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Frederick ",
        password: "5c5e2d5102b20f777dd7a478",
        location: 27821,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Malinda ",
        password: "5c5e2d51d3d8c231262e02a4",
        location: 88767,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Karen ",
        password: "5c5e2d5115efaf15b4593969",
        location: 24657,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Dina ",
        password: "5c5e2d513bb2354419b9ed19",
        location: 58068,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Ashlee ",
        password: "5c5e2d511081ab2e0fd3f571",
        location: 90295,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Sosa ",
        password: "5c5e2d516faae95ba08b3b5d",
        location: 99289,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Michael ",
        password: "5c5e2d5107668c0c04cb3c40",
        location: 41346,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Villarreal ",
        password: "5c5e2d516b0d21e5a3ed1047",
        location: 52111,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Gould ",
        password: "5c5e2d518e19b1d24736e4ae",
        location: 44804,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Constance ",
        password: "5c5e2d51dfc4eb5d10bf1ca8",
        location: 26926,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Debora ",
        password: "5c5e2d5191382ce21de245c1",
        location: 93584,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Addie ",
        password: "5c5e2d51b5d97e1b7121bd46",
        location: 92567,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Erika ",
        password: "5c5e2d51b6d351c6c204dddb",
        location: 83022,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Day ",
        password: "5c5e2d51faff201c665f4197",
        location: 84553,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Karla ",
        password: "5c5e2d5181b88329dace6227",
        location: 18543,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Aimee ",
        password: "5c5e2d513bf09a36be9ecf47",
        location: 13823,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Alison ",
        password: "5c5e2d517f3306d8bfa3eb77",
        location: 87910,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Campbell ",
        password: "5c5e2d51e5373c7e6457090f",
        location: 26782,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Davis ",
        password: "5c5e2d5195382a153fa948ba",
        location: 13338,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Mendoza ",
        password: "5c5e2d51a18e51e698198c4f",
        location: 26101,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Steele ",
        password: "5c5e2d51e5c87ba2e43c96d8",
        location: 76361,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Loraine ",
        password: "5c5e2d51bfd01f0e842f90a2",
        location: 99614,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Jeanette ",
        password: "5c5e2d518ac9dd3b44ec84dc",
        location: 32734,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Jennie ",
        password: "5c5e2d5187af1510d0d1bdf4",
        location: 80619,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Phelps ",
        password: "5c5e2d51c8ace1ed087c4d9a",
        location: 82379,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Holmes ",
        password: "5c5e2d5169e4e62646b5d5ad",
        location: 87742,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Rutledge ",
        password: "5c5e2d5184c1b1f8f85b91b1",
        location: 56595,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Judith ",
        password: "5c5e2d5172fefc2f42effb2a",
        location: 50502,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Bryant ",
        password: "5c5e2d513b692dbf3e09e159",
        location: 82750,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Hurley ",
        password: "5c5e2d519c77ed4bbd3170b9",
        location: 60335,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Jefferson ",
        password: "5c5e2d51ce4ba13d27eab82e",
        location: 42629,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Tanner ",
        password: "5c5e2d51a585d7f29b03a2d4",
        location: 70958,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Roslyn ",
        password: "5c5e2d51a7a18a7477e5fcb1",
        location: 51926,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Rhoda ",
        password: "5c5e2d513b03e5258abb8776",
        location: 33075,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Olivia ",
        password: "5c5e2d51e9d07c35abfaddf2",
        location: 24600,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Rasmussen ",
        password: "5c5e2d51225274f38e626a6f",
        location: 69537,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Jewel ",
        password: "5c5e2d51d33b76e13bd883cb",
        location: 15207,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Cherie ",
        password: "5c5e2d51626a8ba2373311f6",
        location: 98221,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Jannie ",
        password: "5c5e2d51e54cf721872c96bb",
        location: 71129,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Mcintyre ",
        password: "5c5e2d51cc1d7d45d8e0d6f6",
        location: 88288,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Margie ",
        password: "5c5e2d51a61ea96edeab3d88",
        location: 47996,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Riggs ",
        password: "5c5e2d5156b21e9693a254c8",
        location: 61334,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Albert ",
        password: "5c5e2d51ab6938099beb33f0",
        location: 83002,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Eva ",
        password: "5c5e2d517f13fa4f9d5a58e2",
        location: 16154,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Melton ",
        password: "5c5e2d5155a71f77fc7b8193",
        location: 97019,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Wooten ",
        password: "5c5e2d51a225c55a40922e82",
        location: 97333,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Chasity ",
        password: "5c5e2d515d97f2c61bf6e018",
        location: 55944,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Melissa ",
        password: "5c5e2d5135ff2718cbaa3b11",
        location: 62725,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Colon ",
        password: "5c5e2d51c91130407bfc67eb",
        location: 63432,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Jayne ",
        password: "5c5e2d51aabb3ad986c433b5",
        location: 34111,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Hopkins ",
        password: "5c5e2d5188aa302398ad77ef",
        location: 61278,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Santana ",
        password: "5c5e2d51e7a88d3a9cf34799",
        location: 10074,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Harvey ",
        password: "5c5e2d51b594038370a2db45",
        location: 18607,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Wendy ",
        password: "5c5e2d513d9098c3de63ec1e",
        location: 15588,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "English ",
        password: "5c5e2d511226b47ba266647f",
        location: 98265,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Jimmie ",
        password: "5c5e2d51ca8865a0537b940e",
        location: 20822,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Bettie ",
        password: "5c5e2d5151143b7c704bfb8a",
        location: 74109,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Chrystal ",
        password: "5c5e2d519bc2fede7a40a15e",
        location: 59908,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Darcy ",
        password: "5c5e2d51ee7680be9187df9e",
        location: 97492,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Jody ",
        password: "5c5e2d51ce6cbae904a5e0a0",
        location: 97051,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Shana ",
        password: "5c5e2d519e78ce7b5f55a321",
        location: 36056,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Whitney ",
        password: "5c5e2d512aab132fc73d55eb",
        location: 85563,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Dodson ",
        password: "5c5e2d51dad151af5642af5c",
        location: 75936,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Rhodes ",
        password: "5c5e2d51b154d7ce4f7d8685",
        location: 18222,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Acosta ",
        password: "5c5e2d5190f40847ed5c36bf",
        location: 71872,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Mccray ",
        password: "5c5e2d5192943a8e7a2dc170",
        location: 34720,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Jolene ",
        password: "5c5e2d51319011b90fc7057d",
        location: 13361,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Snyder ",
        password: "5c5e2d51e149245df0f872ac",
        location: 69569,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Vivian ",
        password: "5c5e2d51c16f95b3f0189eec",
        location: 35800,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Hooper ",
        password: "5c5e2d51c5a681265dc98f3d",
        location: 75005,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Castillo ",
        password: "5c5e2d51bd0ea8b039d085b5",
        location: 14635,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Hendricks ",
        password: "5c5e2d51a25e9d8b4366b0ec",
        location: 72085,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Gilliam ",
        password: "5c5e2d514ccd47152dccfa91",
        location: 21568,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Corinne ",
        password: "5c5e2d51254a804c1f30cc4e",
        location: 24109,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Catherine ",
        password: "5c5e2d51b4621fa60f2a3144",
        location: 43993,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Adele ",
        password: "5c5e2d51ab99871fa79f40cb",
        location: 12501,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Weeks ",
        password: "5c5e2d51be3e0004e78edd2c",
        location: 15521,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Rosalind ",
        password: "5c5e2d51a2a31f3af0e2f489",
        location: 24247,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Aguilar ",
        password: "5c5e2d514793f69cb0b9fa09",
        location: 69303,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Bernadine ",
        password: "5c5e2d517a1321d2f3c0e283",
        location: 79122,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Woods ",
        password: "5c5e2d518b20420a17068530",
        location: 42758,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Bray ",
        password: "5c5e2d51de07649f4587cc87",
        location: 50922,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Conley ",
        password: "5c5e2d51707b2f6b78e2c726",
        location: 45721,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Angelita ",
        password: "5c5e2d5155d532246334cb84",
        location: 72961,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Baird ",
        password: "5c5e2d514feda848b07365e7",
        location: 95507,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Hope ",
        password: "5c5e2d51dceac3e24ce103df",
        location: 53697,
        picture: "http://placehold.it/32x32"
      },
      {
        username: "Dominique ",
        password: "5c5e2d5186fee2c91dfa8ad0",
        location: 67456,
        picture: "http://placehold.it/32x32"
      }
    ]
  }
];
