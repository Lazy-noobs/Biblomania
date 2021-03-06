'use strict';

// creating an array of objects of the store products

let books = [
  {
    'author': 'Chinua Achebe',
    'country': 'Nigeria',
    'imageLink': 'img/things-fall-apart.jpg',
    'language': 'English',
    'link': 'https://en.wikipedia.org/wiki/Things_Fall_Apart\n',
    'pages': 209,
    'title': 'Things Fall Apart',
    'year': 1958,
    'genre': 'fantasy'
    ,
  },
  {
    'author': 'Hans Christian Andersen',
    'country': 'Denmark',
    'imageLink': 'img/fairy-tales.jpg',
    'language': 'Danish',
    'link': 'https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n',
    'pages': 784,
    'title': 'Fairy tales',
    'year': 1836,
    'genre': 'fantasy',

  },
  {
    'author': 'Dante Alighieri',
    'country': 'Italy',
    'imageLink': 'img/the-divine-comedy.jpg',
    'language': 'Italian',
    'link': 'https://en.wikipedia.org/wiki/Divine_Comedy\n',
    'pages': 928,
    'title': 'The Divine Comedy',
    'year': 1315,
    'genre': 'fantasy'
    ,
  },
  {
    'author': 'Unknown',
    'country': 'Sumer and Akkadian Empire',
    'imageLink': 'img/the-epic-of-gilgamesh.jpg',
    'language': 'Akkadian',
    'link': 'https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n',
    'pages': 160,
    'title': 'The Epic Of Gilgamesh',
    'year': -1700,
    'genre': 'fantasy'
    ,
  },
  {
    'author': 'Unknown',
    'country': 'Achaemenid Empire',
    'imageLink': 'img/the-book-of-job.jpg',
    'language': 'Hebrew',
    'link': 'https://en.wikipedia.org/wiki/Book_of_Job\n',
    'pages': 176,
    'title': 'The Book Of Job',
    'year': -600,
    'genre': 'history'
    ,
  },
  {
    'author': 'Unknown',
    'country': 'India/Iran/Iraq/Egypt/Tajikistan',
    'imageLink': 'img/one-thousand-and-one-nights.jpg',
    'language': 'Arabic',
    'link': 'https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\n',
    'pages': 288,
    'title': 'One Thousand',
    'year': 1200,
    'genre': 'fantasy'
    ,
  },
  {
    'author': 'Unknown',
    'country': 'Iceland',
    'imageLink': 'img/njals-saga.jpg',
    'language': 'Old Norse',
    'link': 'https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga\n',
    'pages': 384,
    'title': 'Nj\u00e1l\'s Saga',
    'year': 1350,
    'genre': 'historical'
    ,
  },
  {
    'author': 'Jane Austen',
    'country': 'United Kingdom',
    'imageLink': 'img/pride-and-prejudice.jpg',
    'language': 'English',
    'link': 'https://en.wikipedia.org/wiki/Pride_and_Prejudice\n',
    'pages': 226,
    'title': 'Pride and Prejudice',
    'year': 1813,
    'genre': 'romance'
    ,
  },
  {
    'author': 'Honor\u00e9 de Balzac',
    'country': 'France',
    'imageLink': 'img/le-pere-goriot.jpg',
    'language': 'French',
    'link': 'https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot\n',
    'pages': 443,
    'title': 'Le P\u00e8re Goriot',
    'year': 1835,
    'genre': 'historical'
    ,
  },
  {
    'author': 'Samuel Beckett',
    'country': 'Republic of Ireland',
    'imageLink': 'img/molloy-malone-dies-the-unnamable.jpg',
    'language': 'French, English',
    'link': 'https://en.wikipedia.org/wiki/Molloy_(novel)\n',
    'pages': 256,
    'title': 'The Unnamable, the trilogy',
    'year': 1952,
    'genre': 'historical'
    ,
  },
  {
    'author': 'Giovanni Boccaccio',
    'country': 'Italy',
    'imageLink': 'img/the-decameron.jpg',
    'language': 'Italian',
    'link': 'https://en.wikipedia.org/wiki/The_Decameron\n',
    'pages': 1024,
    'title': 'The Decameron',
    'year': 1351,
    'genre': 'fantasy'
    ,
  },
  {
    'author': 'Jorge Luis Borges',
    'country': 'Argentina',
    'imageLink': 'img/ficciones.jpg',
    'language': 'Spanish',
    'link': 'https://en.wikipedia.org/wiki/Ficciones\n',
    'pages': 224,
    'title': 'Ficciones',
    'year': 1965,
    'genre': 'fantasy'
    ,
  },
  {
    'author': 'Emily Bront\u00eb',
    'country': 'United Kingdom',
    'imageLink': 'img/wuthering-heights.jpg',
    'language': 'English',
    'link': 'https://en.wikipedia.org/wiki/Wuthering_Heights\n',
    'pages': 342,
    'title': 'Wuthering Heights',
    'year': 1847,
    'genre': 'fantasy'
    ,
  },
  {
    'author': 'Albert Camus',
    'country': 'Algeria, French Empire',
    'imageLink': 'img/l-etranger.jpg',
    'language': 'French',
    'link': 'https://en.wikipedia.org/wiki/The_Stranger_(novel)\n',
    'pages': 185,
    'title': 'The Stranger',
    'year': 1942,
    'genre': 'fantasy'
    ,
  },
  {
    'author': 'Paul Celan',
    'country': 'Romania, France',
    'imageLink': 'img/poems-paul-celan.jpg',
    'language': 'German',
    'link': '\n',
    'pages': 320,
    'title': 'Poems',
    'year': 1952,
    'genre': 'fantasy'
    ,
  },
  {
    'author': 'Louis-Ferdinand C\u00e9line',
    'country': 'France',
    'imageLink': 'img/voyage-au-bout-de-la-nuit.jpg',
    'language': 'French',
    'link': 'https://en.wikipedia.org/wiki/Journey_to_the_End_of_the_Night\n',
    'pages': 505,
    'title': 'Journey of the Night',
    'year': 1932,
    'genre': 'fantasy'
    ,
  },
  {
    'author': 'Miguel de Cervantes',
    'country': 'Spain',
    'imageLink': 'img/don-quijote-de-la-mancha.jpg',
    'language': 'Spanish',
    'link': 'https://en.wikipedia.org/wiki/Don_Quixote\n',
    'pages': 1056,
    'title': 'Don Quijote De La Mancha',
    'year': 1610,
    'genre': 'science fictions'
    ,
  },
  {
    'author': 'Geoffrey Chaucer',
    'country': 'England',
    'imageLink': 'img/the-canterbury-tales.jpg',
    'language': 'English',
    'link': 'https://en.wikipedia.org/wiki/The_Canterbury_Tales\n',
    'pages': 544,
    'title': 'The Canterbury Tales',
    'year': 1450,
    'genre': 'fantasy',
  },
  {
    'author': 'Anton Chekhov',
    'country': 'Russia',
    'imageLink': 'img/stories-of-anton-chekhov.jpg',
    'language': 'Russian',
    'link': 'https://en.wikipedia.org/wiki/List_of_short_stories_by_Anton_Chekhov\n',
    'pages': 194,
    'title': 'Stories',
    'year': 1886,
    'genre': 'fantasy'
    ,
  },
  {
    'author': 'Joseph Conrad',
    'country': 'United Kingdom',
    'imageLink': 'img/nostromo.jpg',
    'language': 'English',
    'link': 'https://en.wikipedia.org/wiki/Nostromo\n',
    'pages': 320,
    'title': 'Nostromo',
    'year': 1904,
    'genre': 'historical'
    ,
  },
  {
    'author': 'Charles Dickens',
    'country': 'United Kingdom',
    'imageLink': 'img/great-expectations.jpg',
    'language': 'English',
    'link': 'https://en.wikipedia.org/wiki/Great_Expectations\n',
    'pages': 194,
    'title': 'Great Expectations',
    'year': 1861,
    'genre': 'historical'
    ,
  },
  {
    'author': 'Denis Diderot',
    'country': 'France',
    'imageLink': 'img/jacques-the-fatalist.jpg',
    'language': 'French',
    'link': 'https://en.wikipedia.org/wiki/Jacques_the_Fatalist\n',
    'pages': 596,
    'title': 'Jacques the Fatalist',
    'year': 1796,
    'genre': 'fantasy'
    ,
  },
  {
    'author': 'Alfred D\u00f6blin',
    'country': 'Germany',
    'imageLink': 'img/berlin-alexanderplatz.jpg',
    'language': 'German',
    'link': 'https://en.wikipedia.org/wiki/Berlin_Alexanderplatz\n',
    'pages': 600,
    'title': 'Berlin Alexanderplatz',
    'year': 1929,
    'genre': 'fantasy'
    ,
  },
  {
    'author': 'Fyodor Dostoevsky',
    'country': 'Russia',
    'imageLink': 'img/crime-and-punishment.jpg',
    'language': 'Russian',
    'link': 'https://en.wikipedia.org/wiki/Crime_and_Punishment\n',
    'pages': 551,
    'title': 'Crime and Punishment',
    'year': 1866,
    'genre': 'fantasy'
    ,
  },
  {
    'author': 'Fyodor Dostoevsky',
    'country': 'Russia',
    'imageLink': 'img/the-idiot.jpg',
    'language': 'Russian',
    'link': 'https://en.wikipedia.org/wiki/The_Idiot\n',
    'pages': 656,
    'title': 'The Idiot',
    'year': 1869,
    'genre': 'fantasy'
    ,
  },
  {
    'author': 'Fyodor Dostoevsky',
    'country': 'Russia',
    'imageLink': 'img/the-possessed.jpg',
    'language': 'Russian',
    'link': 'https://en.wikipedia.org/wiki/Demons_(Dostoyevsky_novel)\n',
    'pages': 768,
    'title': 'The Possessed',
    'year': 1872,
    'genre': 'historical'
    ,
  },
  {
    'author': 'Fyodor Dostoevsky',
    'country': 'Russia',
    'imageLink': 'img/the-brothers-karamazov.jpg',
    'language': 'Russian',
    'link': 'https://en.wikipedia.org/wiki/The_Brothers_Karamazov\n',
    'pages': 824,
    'title': 'The Brothers Karamazov',
    'year': 1880,
    'genre': 'historical'
    ,
  },
  {
    'author': 'George Eliot',
    'country': 'United Kingdom',
    'imageLink': 'img/middlemarch.jpg',
    'language': 'English',
    'link': 'https://en.wikipedia.org/wiki/Middlemarch\n',
    'pages': 800,
    'title': 'Middlemarch',
    'year': 1871,
    'genre': 'historical'
    ,
  },
  {
    'author': 'Ralph Ellison',
    'country': 'United States',
    'imageLink': 'img/invisible-man.jpg',
    'language': 'English',
    'link': 'https://en.wikipedia.org/wiki/Invisible_Man\n',
    'pages': 581,
    'title': 'Invisible Man',
    'year': 1952,
    'genre': 'historical'
    ,
  },
  {
    'author': 'Euripides',
    'country': 'Greece',
    'imageLink': 'img/medea.jpg',
    'language': 'Greek',
    'link': 'https://en.wikipedia.org/wiki/Medea_(play)\n',
    'pages': 104,
    'title': 'Medea',
    'year': -431,
    'genre': 'historical'
    ,
  },
  {
    'author': 'William Faulkner',
    'country': 'United States',
    'imageLink': 'img/absalom-absalom.jpg',
    'language': 'English',
    'link': 'https://en.wikipedia.org/wiki/Absalom,_Absalom!\n',
    'pages': 313,
    'title': 'Absalom, Absalom!',
    'year': 1936,
    'genre': 'fantasy'
    ,
  },
  {
    'author': 'William Faulkner',
    'country': 'United States',
    'imageLink': 'img/the-sound-and-the-fury.jpg',
    'language': 'English',
    'link': 'https://en.wikipedia.org/wiki/The_Sound_and_the_Fury\n',
    'pages': 326,
    'title': 'The Sound and the Fury',
    'year': 1929,
    'genre': 'historical'
    ,
  },
  {
    'author': 'Gustave Flaubert',
    'country': 'France',
    'imageLink': 'img/madame-bovary.jpg',
    'language': 'French',
    'link': 'https://en.wikipedia.org/wiki/Madame_Bovary\n',
    'pages': 528,
    'title': 'Madame Bovary',
    'year': 1857,
    'genre': 'fantasy'
    ,
  },
  {
    'author': 'Gustave Flaubert',
    'country': 'France',
    'imageLink': 'img/l-education-sentimentale.jpg',
    'language': 'French',
    'link': 'https://en.wikipedia.org/wiki/Sentimental_Education\n',
    'pages': 606,
    'title': 'Sentimental Education',
    'year': 1869,
    'genre': 'historical'
    ,
  },
  {
    'author': 'Federico Garc\u00eda Lorca',
    'country': 'Spain',
    'imageLink': 'img/gypsy-ballads.jpg',
    'language': 'Spanish',
    'link': 'https://en.wikipedia.org/wiki/Gypsy_Ballads\n',
    'pages': 218,
    'title': 'Gypsy Ballads',
    'year': 1928,
    'genre': 'historical'
    ,
  },
  {
    'author': 'Gabriel Garc\u00eda M\u00e1rquez',
    'country': 'Colombia',
    'imageLink': 'img/one-hundred-years-of-solitude.jpg',
    'language': 'Spanish',
    'link': 'https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude\n',
    'pages': 417,
    'title': 'The Solitude',
    'year': 1967,
    'genre': 'science fiction'
    ,
  },
  {
    'author': 'Gabriel Garc\u00eda M\u00e1rquez',
    'country': 'Colombia',
    'imageLink': 'img/love-in-the-time-of-cholera.jpg',
    'language': 'Spanish',
    'link': 'https://en.wikipedia.org/wiki/Love_in_the_Time_of_Cholera\n',
    'pages': 368,
    'title': 'Love in the Time of Cholera',
    'year': 1985,
    'genre': 'romance'

  },
  {
    'author': 'Johann Wolfgang',
    'country': 'Saxe-Weimar',
    'imageLink': 'img/faust.jpg',
    'language': 'German',
    'link': 'https://en.wikipedia.org/wiki/Goethe%27s_Faust\n',
    'pages': 158,
    'title': 'Faust',
    'year': 1832,
    'genre': 'historical'
    ,
  },
  {
    'author': 'Nikolai Gogol',
    'country': 'Russia',
    'imageLink': 'img/dead-souls.jpg',
    'language': 'Russian',
    'link': 'https://en.wikipedia.org/wiki/Dead_Souls\n',
    'pages': 432,
    'title': 'Dead Souls',
    'year': 1842,
    'genre': 'historical'
    ,
  },
  {
    'author': 'G\u00fcnter Grass',
    'country': 'Germany',
    'imageLink': 'img/the-tin-drum.jpg',
    'language': 'German',
    'link': 'https://en.wikipedia.org/wiki/The_Tin_Drum\n',
    'pages': 600,
    'title': 'The Tin Drum',
    'year': 1959,
    'genre': 'science fiction'
    ,

  },
  {
    'author': 'Jo\u00e3o Guimar\u00e3es Rosa',
    'country': 'Brazil',
    'imageLink': 'img/the-devil-to-pay-in-the-backlands.jpg',
    'language': 'Portuguese',
    'link': 'https://en.wikipedia.org/wiki/The_Devil_to_Pay_in_the_Backlands\n',
    'pages': 494,
    'title': 'The Devil',
    'year': 1956,
    'genre': 'science fiction'
    ,
  },
  {
    'author': 'Knut Hamsun',
    'country': 'Norway',
    'imageLink': 'img/hunger.jpg',
    'language': 'Norwegian',
    'link': 'https://en.wikipedia.org/wiki/Hunger_(Hamsun_novel)\n',
    'pages': 176,
    'title': 'Hunger',
    'year': 1890,
    'genre': 'fantasy'
    ,
  },
  {
    'author': 'Ernest Hemingway',
    'country': 'United States',
    'imageLink': 'img/the-old-man-and-the-sea.jpeg',
    'language': 'English',
    'link': 'https://en.wikipedia.org/wiki/The_Old_Man_and_the_Sea\n',
    'pages': 128,
    'title': 'The Old Man and the Sea',
    'year': 1952,
    'genre': 'science fiction'
    ,

  },
  {
    'author': 'Homer',
    'country': 'Greece',
    'imageLink': 'img/the-iliad-of-homer.jpg',
    'language': 'Greek',
    'link': 'https://en.wikipedia.org/wiki/Iliad\n',
    'pages': 608,
    'title': 'Iliad',
    'year': -735,
    'genre': 'historical'
  },
  {
    'author': 'Homer',
    'country': 'Greece',
    'imageLink': 'img/the-odyssey-of-homer.jpg',
    'language': 'Greek',
    'link': 'https://en.wikipedia.org/wiki/Odyssey\n',
    'pages': 374,
    'title': 'Odyssey',
    'year': -800,
    'genre': 'romance'
    ,
  },
  {
    'author': 'Henrik Ibsen',
    'country': 'Norway',
    'imageLink': 'img/a-Dolls-house.jpg',
    'language': 'Norwegian',
    'link': 'https://en.wikipedia.org/wiki/A_Doll%27s_House\n',
    'pages': 68,
    'title': 'A Doll\'s House',
    'year': 1879,
    'genre': 'romance'
    ,
  },
  {
    'author': 'James Joyce',
    'country': 'Irish Free State',
    'imageLink': 'img/ulysses.jpg',
    'language': 'English',
    'link': 'https://en.wikipedia.org/wiki/Ulysses_(novel)\n',
    'pages': 228,
    'title': 'Ulysses',
    'year': 1922,
    'genre': 'historical'
    ,
  },
  {
    'author': 'Franz Kafka',
    'country': 'Czechoslovakia',
    'imageLink': 'img/stories-of-franz-kafka.jpg',
    'language': 'German',
    'link': 'https://en.wikipedia.org/wiki/Franz_Kafka_bibliography#Short_stories\n',
    'pages': 488,
    'title': 'Stories',
    'year': 1924,
    'genre': 'romance'
    ,
  },
  {
    'author': 'Franz Kafka',
    'country': 'Czechoslovakia',
    'imageLink': 'img/the-trial.jpg',
    'language': 'German',
    'link': 'https://en.wikipedia.org/wiki/The_Trial\n',
    'pages': 160,
    'title': 'The Trial',
    'year': 1925,

    'genre': 'science fiction'
    ,

  },
  {
    'author': 'Franz Kafka',
    'country': 'Czechoslovakia',
    'imageLink': 'img/the-castle.jpg',
    'language': 'German',
    'link': 'https://en.wikipedia.org/wiki/The_Castle_(novel)\n',
    'pages': 352,
    'title': 'The Castle',
    'year': 1926,
    'genre': 'science fiction'
    ,


  },
  {
    'author': 'K\u0101lid\u0101sa',
    'country': 'India',
    'imageLink': 'img/the-recognition-of-shakuntala.jpg',
    'language': 'Sanskrit',
    'link': 'https://en.wikipedia.org/wiki/Abhij%C3%B1%C4%81na%C5%9B%C4%81kuntalam\n',
    'pages': 147,
    'title': 'The Shakuntala',
    'year': 150,
    'genre': 'romance'
    ,

  },
  {
    'author': 'Yasunari Kawabata',
    'country': 'Japan',
    'imageLink': 'img/the-sound-of-the-mountain.jpg',
    'language': 'Japanese',
    'link': 'https://en.wikipedia.org/wiki/The_Sound_of_the_Mountain\n',
    'pages': 288,
    'title': 'The Sound of the Mountain',
    'year': 1954,
    'genre': 'romance'
    ,
  },
  {
    'author': 'Nikos Kazantzakis',
    'country': 'Greece',
    'imageLink': 'img/zorba-the-greek.jpg',
    'language': 'Greek',
    'link': 'https://en.wikipedia.org/wiki/Zorba_the_Greek\n',
    'pages': 368,
    'title': 'Zorba the Greek',
    'year': 1946,
    'genre': 'fantasy'
    ,
  },
  {
    'author': 'D. H. Lawrence',
    'country': 'United Kingdom',
    'imageLink': 'img/sons-and-lovers.jpg',
    'language': 'English',
    'link': 'https://en.wikipedia.org/wiki/Sons_and_Lovers\n',
    'pages': 432,
    'title': 'Sons and Lovers',
    'year': 1913,
    'genre': 'romance'
    ,
  },
  {
    'author': 'Halld\u00f3r Laxness',
    'country': 'Iceland',
    'imageLink': 'img/independent-people.jpg',
    'language': 'Icelandic',
    'link': 'https://en.wikipedia.org/wiki/Independent_People\n',
    'pages': 470,
    'title': 'Independent People',
    'year': 1934,
    'genre': 'historical'
    ,
  },
  {
    'author': 'Giacomo Leopardi',
    'country': 'Italy',
    'imageLink': 'img/poems-giacomo-leopardi.jpg',
    'language': 'Italian',
    'link': '\n',
    'pages': 184,
    'title': 'Poems',
    'year': 1818,
    'genre': 'romance'
    ,
  },
  {
    'author': 'Doris Lessing',
    'country': 'United Kingdom',
    'imageLink': 'img/the-golden-notebook.jpg',
    'language': 'English',
    'link': 'https://en.wikipedia.org/wiki/The_Golden_Notebook\n',
    'pages': 688,
    'title': 'The Golden Notebook',
    'year': 1962,
    'genre': 'historical'
    ,

  },
  {
    'author': 'Astrid Lindgren',
    'country': 'Sweden',
    'imageLink': 'img/pippi-longstocking.jpg',
    'language': 'Swedish',
    'link': 'https://en.wikipedia.org/wiki/Pippi_Longstocking\n',
    'pages': 160,
    'title': 'Pippi Longstocking',
    'year': 1945,
    'genre': 'fantasy'
    ,

  },
  {
    'author': 'Lu Xun',
    'country': 'China',
    'imageLink': 'img/diary-of-a-madman.jpg',
    'language': 'Chinese',
    'link': 'https://en.wikipedia.org/wiki/A_Madman%27s_Diary\n',
    'pages': 389,
    'title': 'Diary of a Madman',
    'year': 1918,
    'genre': 'historical'
    ,

  },
  {
    'author': 'Naguib Mahfouz',
    'country': 'Egypt',
    'imageLink': 'img/children-of-gebelawi.jpg',
    'language': 'Arabic',
    'link': 'https://en.wikipedia.org/wiki/Children_of_Gebelawi\n',
    'pages': 355,
    'title': 'Children of Gebelawi',
    'year': 1959,
    'genre': 'romance'
    ,

  },
  {
    'author': 'Thomas Mann',
    'country': 'Germany',
    'imageLink': 'img/buddenbrooks.jpg',
    'language': 'German',
    'link': 'https://en.wikipedia.org/wiki/Buddenbrooks\n',
    'pages': 736,
    'title': 'Buddenbrooks',
    'year': 1901,
    'genre': 'historical'
    ,

  },
  {
    'author': 'Thomas Mann',
    'country': 'Germany',
    'imageLink': 'img/the-magic-mountain.jpg',
    'language': 'German',
    'link': 'https://en.wikipedia.org/wiki/The_Magic_Mountain\n',
    'pages': 720,
    'title': 'The Magic Mountain',
    'year': 1924,
    'genre': 'historical'
    ,

  },
  {
    'author': 'Herman Melville',
    'country': 'United States',
    'imageLink': 'img/moby-dick.jpg',
    'language': 'English',
    'link': 'https://en.wikipedia.org/wiki/Moby-Dick\n',
    'pages': 378,
    'title': 'Moby Dick',
    'year': 1851,
    'genre': 'romance'
    ,

  },
  {
    'author': 'Michel de Montaigne',
    'country': 'France',
    'imageLink': 'img/essais.jpg',
    'language': 'French',
    'link': 'https://en.wikipedia.org/wiki/Essays_(Montaigne)\n',
    'pages': 404,
    'title': 'Essays',
    'year': 1595,
    'genre': 'science fiction',


  },
  {
    'author': 'Elsa Morante',
    'country': 'Italy',
    'imageLink': 'img/history.jpg',
    'language': 'Italian',
    'link': 'https://en.wikipedia.org/wiki/History_(novel)\n',
    'pages': 600,
    'title': 'History',
    'year': 1974,
    'genre': 'historical'
    ,
  },
  {
    'author': 'Toni Morrison',
    'country': 'United States',
    'imageLink': 'img/beloved.jpg',
    'language': 'English',
    'link': 'https://en.wikipedia.org/wiki/Beloved_(novel)\n',
    'pages': 321,
    'title': 'Beloved',
    'year': 1987,
    'genre': 'historical'
    ,

  },
  {
    'author': 'Murasaki Shikibu',
    'country': 'Japan',
    'imageLink': 'img/the-tale-of-genji.jpg',
    'language': 'Japanese',
    'link': 'https://en.wikipedia.org/wiki/The_Tale_of_Genji\n',
    'pages': 1360,
    'title': 'The Tale of Genji',
    'year': 1006,
    'genre': 'historical'
    ,

  },
  {
    'author': 'Robert Musil',
    'country': 'Austria',
    'imageLink': 'img/the-man-without-qualities.jpg',
    'language': 'German',
    'link': 'https://en.wikipedia.org/wiki/The_Man_Without_Qualities\n',
    'pages': 365,
    'title': 'The Man Without Qualities',
    'year': 1931,
    'genre': 'fantasy'
    ,

  },
  {
    'author': 'Vladimir Nabokov',
    'country': 'Russia/United States',
    'imageLink': 'img/lolita.jpeg',
    'language': 'English',
    'link': 'https://en.wikipedia.org/wiki/Lolita\n',
    'pages': 317,
    'title': 'Lolita',
    'year': 1955,
    'genre': 'romance'
    ,

  },
  {
    'author': 'George Orwell',
    'country': 'United Kingdom',
    'imageLink': 'img/nineteen-eighty-four.jpg',
    'language': 'English',
    'link': 'https://en.wikipedia.org/wiki/Nineteen_Eighty-Four\n',
    'pages': 272,
    'title': 'Nineteen Eighty-Four',
    'year': 1949,

    'genre': 'science fiction'
    ,

  },
  {
    'author': 'Ovid',
    'country': 'Roman Empire',
    'imageLink': 'img/the-metamorphoses-of-ovid.jpg',
    'language': 'Classical Latin',
    'link': 'https://en.wikipedia.org/wiki/Metamorphoses\n',
    'pages': 576,
    'title': 'Metamorphoses',
    'year': 100,
    'genre': 'romance'
    ,

  },
  {
    'author': 'Fernando Pessoa',
    'country': 'Portugal',
    'imageLink': 'img/the-book-of-disquiet.jpeg',
    'language': 'Portuguese',
    'link': 'https://en.wikipedia.org/wiki/The_Book_of_Disquiet\n',
    'pages': 272,
    'title': 'The Book of Disquiet',
    'year': 1928,
    'genre': 'fantasy'
    ,

  },

  {
    'author': 'Edgar Allan Poe',
    'country': 'United States',
    'imageLink': 'img/tales-and-poems-of-edgar-allan-poe.jpg',
    'language': 'English',
    'link': 'https://en.wikipedia.org/wiki/Edgar_Allan_Poe_bibliography#Tales\n',
    'pages': 842,
    'title': 'Tales',
    'year': 1950,
    'genre': 'fantasy'
    ,
  },
  {
    'author': 'Marcel Proust',
    'country': 'France',
    'imageLink': 'img/a-la-recherche-du-temps-perdu.jpg',
    'language': 'French',
    'link': 'https://en.wikipedia.org/wiki/In_Search_of_Lost_Time\n',
    'pages': 2408,
    'title': 'In Search of Lost Time',
    'year': 1920,
    'genre': 'historical'
    ,
  },
  {
    'author': 'Fran\u00e7ois Rabelais',
    'country': 'France',
    'imageLink': 'img/gargantua-and-pantagruel.jpg',
    'language': 'French',
    'link': 'https://en.wikipedia.org/wiki/Gargantua_and_Pantagruel\n',
    'pages': 623,
    'title': 'Gargantua and Pantagruel',
    'year': 1533,
    'genre': 'fantasy'
    ,
  },
  {
    'author': 'Juan Rulfo',
    'country': 'Mexico',
    'imageLink': 'img/pedro-paramo.jpg',
    'language': 'Spanish',
    'link': 'https://en.wikipedia.org/wiki/Pedro_P%C3%A1ramo\n',
    'pages': 124,
    'title': 'Pedro P\u00e1ramo',
    'year': 1955,
    'genre': 'science fiction'
    ,
  },
  {
    'author': 'Rumi',
    'country': 'Sultanate of Rum',
    'imageLink': 'img/the-masnavi.jpg',
    'language': 'Persian',
    'link': 'https://en.wikipedia.org/wiki/Masnavi\n',
    'pages': 438,
    'title': 'The Masnavi',
    'year': 1236,
    'genre': 'historical'
    ,
  },
  {
    'author': 'Salman Rushdie',
    'country': 'United Kingdom, India',
    'imageLink': 'img/midnights-children.jpg',
    'language': 'English',
    'link': 'https://en.wikipedia.org/wiki/Midnight%27s_Children\n',
    'pages': 536,
    'title': 'Midnight\'s Children',
    'year': 1981,
    'genre': 'historical'
    ,
  },
  {
    'author': 'Saadi',
    'country': 'Persia, Persian Empire',
    'imageLink': 'img/bostan.jpg',
    'language': 'Persian',
    'link': 'https://en.wikipedia.org/wiki/Bustan_(book)\n',
    'pages': 298,
    'title': 'Bostan',
    'year': 1257,
    'genre': 'romance'
    ,
  },
  {
    'author': 'Tayeb Salih',
    'country': 'Sudan',
    'imageLink': 'img/season-of-migration-to-the-north.jpg',
    'language': 'Arabic',
    'link': 'https://en.wikipedia.org/wiki/Season_of_Migration_to_the_North\n',
    'pages': 139,
    'title': 'Season of Migration ',
    'year': 1966,
    'genre': 'historical'
    ,
  },
  {
    'author': 'Jos\u00e9 Saramago',
    'country': 'Portugal',
    'imageLink': 'img/blindness.jpg',
    'language': 'Portuguese',
    'link': 'https://en.wikipedia.org/wiki/Blindness_(novel)\n',
    'pages': 352,
    'title': 'Blindness',
    'year': 1995,
    'genre': 'historical'
    ,
  },
  {
    'author': 'William Shakespeare',
    'country': 'England',
    'imageLink': 'img/hamlet.jpg',
    'language': 'English',
    'link': 'https://en.wikipedia.org/wiki/Hamlet\n',
    'pages': 432,
    'title': 'Hamlet',
    'year': 1603,
    'genre': 'historical'
    ,
  },
  {
    'author': 'William Shakespeare',
    'country': 'England',
    'imageLink': 'img/king-lear.jpg',
    'language': 'English',
    'link': 'https://en.wikipedia.org/wiki/King_Lear\n',
    'pages': 384,
    'title': 'King Lear',
    'year': 1608,
    'genre': 'historical'
    ,

  },
  {
    'author': 'William Shakespeare',
    'country': 'England',
    'imageLink': 'img/othello.jpg',
    'language': 'English',
    'link': 'https://en.wikipedia.org/wiki/Othello\n',
    'pages': 314,
    'title': 'Othello',
    'year': 1609,
    'genre': 'historical'
    ,
  },
  {
    'author': 'Sophocles',
    'country': 'Greece',
    'imageLink': 'img/oedipus-the-king.jpg',
    'language': 'Greek',
    'link': 'https://en.wikipedia.org/wiki/Oedipus_the_King\n',
    'pages': 88,
    'title': 'Oedipus the King',
    'year': -430,
    'genre': 'historical'
    ,
  },
  {
    'author': 'Stendhal',
    'country': 'France',
    'imageLink': 'img/le-rouge-et-le-noir.jpg',
    'language': 'French',
    'link': 'https://en.wikipedia.org/wiki/The_Red_and_the_Black\n',
    'pages': 576,
    'title': 'The Red and the Black',
    'year': 1830,
    'genre': 'historical'
    ,
  },
  {
    'author': 'Laurence Sterne',
    'country': 'England',
    'imageLink': 'img/the-life-and-opinions-of-tristram-shandy.jpg',
    'language': 'English',
    'link': 'https://en.wikipedia.org/wiki/The_Life_and_Opinions_of_Tristram_Shandy,_Gentleman\n',
    'pages': 640,
    'title': 'Opinions of Tristram Shandy',
    'year': 1760,
    'genre': 'historical'
    ,
  },
  {
    'author': 'Italo Svevo',
    'country': 'Italy',
    'imageLink': 'img/confessions-of-zeno.jpg',
    'language': 'Italian',
    'link': 'https://en.wikipedia.org/wiki/Zeno%27s_Conscience\n',
    'pages': 412,
    'title': 'Confessions of Zeno',
    'year': 1923,
    'genre': 'historical'
    ,
  },
  {
    'author': 'Jonathan Swift',
    'country': 'Ireland',
    'imageLink': 'img/gullivers-travels.jpg',
    'language': 'English',
    'link': 'https://en.wikipedia.org/wiki/Gulliver%27s_Travels\n',
    'pages': 178,
    'title': 'Gulliver\'s Travels',
    'year': 1726,
    'genre': 'historical'
    ,
  },
  {
    'author': 'Leo Tolstoy',
    'country': 'Russia',
    'imageLink': 'img/war-and-peace.jpg',
    'language': 'Russian',
    'link': 'https://en.wikipedia.org/wiki/War_and_Peace\n',
    'pages': 1296,
    'title': 'War and Peace',
    'year': 1867,
    'genre': 'historical'
    ,
  },
  {
    'author': 'Leo Tolstoy',
    'country': 'Russia',
    'imageLink': 'img/anna-karenina.jpg',
    'language': 'Russian',
    'link': 'https://en.wikipedia.org/wiki/Anna_Karenina\n',
    'pages': 864,
    'title': 'Anna Karenina',
    'year': 1877,
    'genre': 'historical'
    ,
  },
  {
    'author': 'Leo Tolstoy',
    'country': 'Russia',
    'imageLink': 'img/the-death-of-ivan-ilyich.jpg',
    'language': 'Russian',
    'link': 'https://en.wikipedia.org/wiki/The_Death_of_Ivan_Ilyich\n',
    'pages': 92,
    'title': 'The Death of Ivan Ilyich',
    'year': 1886,
    'genre': 'historical'
    ,
  },
  {
    'author': 'Mark Twain',
    'country': 'United States',
    'imageLink': 'img/the-adventures-of-huckleberry-finn.jpg',
    'language': 'English',
    'link': 'https://en.wikipedia.org/wiki/Adventures_of_Huckleberry_Finn\n',
    'pages': 224,
    'title': 'Huckleberry Finn',
    'year': 1884,
    'genre': 'historical'
    ,
  },
  {
    'author': 'Valmiki',
    'country': 'India',
    'imageLink': 'img/ramayana.jpg',
    'language': 'Sanskrit',
    'link': 'https://en.wikipedia.org/wiki/Ramayana\n',
    'pages': 152,
    'title': 'Ramayana',
    'year': -450,
    'genre': 'historical'
    ,
  },
  {
    'author': 'Virgil',
    'country': 'Roman Empire',
    'imageLink': 'img/the-aeneid.jpg',
    'language': 'Classical Latin',
    'link': 'https://en.wikipedia.org/wiki/Aeneid\n',
    'pages': 442,
    'title': 'The Aeneid',
    'year': -23,
    'genre': 'historical'
    ,
  },
  {
    'author': 'Vyasa',
    'country': 'India',
    'imageLink': 'img/the-mahab-harata.jpg',
    'language': 'Sanskrit',
    'link': 'https://en.wikipedia.org/wiki/Mahabharata\n',
    'pages': 276,
    'title': 'Mahabharata',
    'year': -700,
    'genre': 'historical'
    ,
  },
  {
    'author': 'Walt Whitman',
    'country': 'United States',
    'imageLink': 'img/leaves-of-grass.jpg',
    'language': 'English',
    'link': 'https://en.wikipedia.org/wiki/Leaves_of_Grass\n',
    'pages': 152,
    'title': 'Leaves of Grass',
    'year': 1855,
    'genre': 'historical'
    ,
  },
  {
    'author': 'Virginia Woolf',
    'country': 'United Kingdom',
    'imageLink': 'img/mrs-dalloway.jpg',
    'language': 'English',
    'link': 'https://en.wikipedia.org/wiki/Mrs_Dalloway\n',
    'pages': 216,
    'title': 'Mrs Dalloway',
    'year': 1925,
    'genre': 'historical'
    ,
  },
  {
    'author': 'Virginia Woolf',
    'country': 'United Kingdom',
    'imageLink': 'img/to-the-lighthouse.jpg',
    'language': 'English',
    'link': 'https://en.wikipedia.org/wiki/To_the_Lighthouse\n',
    'pages': 209,
    'title': 'To the Lighthouse',
    'year': 1927,
    'genre': 'historical'
    ,
  },
  {
    'author': 'Marguerite Yourcenar',
    'country': 'France/Belgium',
    'imageLink': 'img/memoirs-of-hadrian.jpg',
    'language': 'French',
    'link': 'https://en.wikipedia.org/wiki/Memoirs_of_Hadrian\n',
    'pages': 408,
    'title': 'Memoirs of Hadrian',
    'year': 1951,
    'genre': 'historical'
    ,
  }
];

// To get a random price for each book in the previous array of objects

let price = [];

function generatePrice() {
  let randPrice = Math.floor(Math.random() * (100 - 10)) + 10;
  while (randPrice % 5 !== 0) {
    randPrice = Math.floor(Math.random() * (100 - 10)) + 10;
  }
  return randPrice;
}

for (let i = 0; i < books.length; i++) {
  price[i] = generatePrice();
}

function setPriceStorage() {
  let stringArr = JSON.stringify(price);
  if (localStorage.getItem('perminantPrice') === null) {
    localStorage.setItem('perminantPrice', stringArr);
  }
}

function getPrice() {
  let priceData = localStorage.getItem('perminantPrice');
  let bookPrice = JSON.parse(priceData);
  if (bookPrice !== null) {
    for (let i = 0; i < books.length; i++) {
      books[i].price = bookPrice[i];
    }
  }
}
setPriceStorage();
getPrice();

//console.log(books[9].price);

// Rendering the Products based on the it's category


let fantasy = document.getElementById('fantasyDiv');
let fantasyHeader = document.createElement('h2');
fantasy.appendChild(fantasyHeader);
fantasyHeader.textContent = 'Fantasy';

let historical = document.getElementById('historicalDiv');
let historicalHeader = document.createElement('h2');
historical.appendChild(historicalHeader);
historicalHeader.textContent = 'Historical';

let romance = document.getElementById('romanceDiv');
let romanceHeader = document.createElement('h2');
romance.appendChild(romanceHeader);
romanceHeader.textContent = 'Romance';

let scienceFiction = document.getElementById('scienceFictionDiv');
let scienceFictionHeader = document.createElement('h2');
scienceFiction.appendChild(scienceFictionHeader);
scienceFictionHeader.textContent = 'Science Fiction';


function render(bookGenre, x) {
  let div = document.createElement("div");
  bookGenre.appendChild(div);
  let rBook = document.createElement("img");
  rBook.src = books[x].imageLink;
  div.appendChild(rBook);
  let info = document.createElement("p");
  info.innerHTML = `Title: ${books[x].title}<br> Author: ${books[x].author}<br> Year: ${books[x].year}<br> Price: ${books[x].price} JD`;
  div.appendChild(info);
  let button = document.createElement("button");
  button.textContent = "Add to Cart";
  button.id = x;
  div.appendChild(button);
  button.addEventListener("click", handleClickingToCart);
}
//the for that renders the books.

for (let i = 0; i < books.length; i++) {
  if (books[i].genre === "fantasy") {
    render(fantasy, i);
  } else if (books[i].genre === "historical") {
    render(historical, i);
  } else if (books[i].genre === "romance") {
    render(romance, i);
  } else {
    render(scienceFiction, i);
  }
}


// creating a construtor function for books cart

const BooksCart = function (items) {
  this.cartBooks = items;
};

BooksCart.prototype.addBook = function (item) {
  if (!this.cartBooks.includes(item)) {
    this.cartBooks.push(item);
  }
  console.log(this.cartBooks);
};

BooksCart.prototype.saveToStorage = function () {
  localStorage.setItem('booksCart', JSON.stringify(this.cartBooks));
};

BooksCart.prototype.removeBook = function (index) {
  let newArr = JSON.parse(localStorage.getItem('booksCart'));
  newArr.splice(index, 1);
  return newArr;
};

let booksCart = new BooksCart([]);

// event listener function for each product's button
function handleClickingToCart() {
  event.preventDefault();
  let index = parseInt(event.target.id);
  booksCart.addBook(books[index]);
  booksCart.saveToStorage();

  //Create a success notification instance
  const successNotification = window.createNotification({
    theme: 'success',
    showDuration: 5000
  });

  // Use the same instance but pass a title
  successNotification({
    title: 'Success',
    message: 'Item added'
  });
  counter();
}

// This function to count the number of products in the basket
function counter() {
  const booksCart = JSON.parse(localStorage.getItem('booksCart')) || [];
  let count = document.getElementById('basketCount');
  count.textContent = booksCart.length;
}
