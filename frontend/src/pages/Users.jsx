import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../contexts/Context';
import { User } from '../components';
import { fetchApi } from '../utils';
import '../styles/Users.css';

function Users() {
  const { logged } = useContext(Context);
  const navigate = useNavigate();
  const [startUser, setStartUser] = useState(0);
  const [resultsPerPage, setResultsPerPage] = useState(5);
  const [endUser, setEndUser] = useState(startUser + resultsPerPage);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [typeFilter, setTypeFilter] = useState('name');
  const [filterUsers, setFilterUsers] = useState('');
  const [showUsers, setShowUsers] = useState(false);
  const BASE_URL = `https://randomuser.me/api/?seed=gabrielpinheiromatiucci&results=1000&nat=br&inc=picture,name,email,dob,login`;

  useEffect(() => {
    if (!logged) navigate('/');

    

    setUsers([
      ...users,
      ...[
      {
        "name": {
            "title": "Ms",
            "first": "Valdinélia",
            "last": "da Cunha"
        },
        "email": "valdinelia.dacunha@example.com",
        "login": {
            "uuid": "e3b54e6d-7970-40c1-aef9-c2078799087e",
            "username": "organicrabbit214",
            "password": "wilson",
            "salt": "MBacUdj4",
            "md5": "77adda1a4f9fb1af16dc1f0971adebf6",
            "sha1": "63196a92257bba7bd9835b12ef515bd80a5033a0",
            "sha256": "123abb147a015941c1e1e04ea864e0478b9717e9669902281fc39a24161c4184"
        },
        "dob": {
            "date": "1946-12-31T16:15:29.951Z",
            "age": 75
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/53.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/53.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/53.jpg"
        }
      },
      {
          "name": {
              "title": "Miss",
              "first": "Gavina",
              "last": "das Neves"
          },
          "email": "gavina.dasneves@example.com",
          "login": {
              "uuid": "eebd20cb-3253-4585-a5f1-b567c554218b",
              "username": "ticklishpanda384",
              "password": "sail",
              "salt": "nsavplVC",
              "md5": "fa00b0fd4b5d812c1a91f6f750dd3e56",
              "sha1": "2830d1d0d777abc8d622d4b2fc89798628062a55",
              "sha256": "b5fdbf23232215b3f06a1f06cc4d7e1c5abb1174a12e166b56aa8cca288567d1"
          },
          "dob": {
              "date": "1966-10-16T19:49:25.810Z",
              "age": 56
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/women/3.jpg",
              "medium": "https://randomuser.me/api/portraits/med/women/3.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/women/3.jpg"
          }
      },
      {
          "name": {
              "title": "Mr",
              "first": "Tiago",
              "last": "de Souza"
          },
          "email": "tiago.desouza@example.com",
          "login": {
              "uuid": "340532c7-cdb5-4670-8e51-2bd65722fe95",
              "username": "redduck128",
              "password": "cerberus",
              "salt": "FrqF1MX8",
              "md5": "b1f5caf8c7676f238b65ad5189dbd2a0",
              "sha1": "03548bf1d92b89f6828280b5436fe375bbd7cb6f",
              "sha256": "fdbbcecab004e8d00a783c677b4970b5011b099915318b2a4ab11f75e41b28b6"
          },
          "dob": {
              "date": "1991-02-14T20:04:58.516Z",
              "age": 31
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/men/61.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/61.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/61.jpg"
          }
      },
      {
          "name": {
              "title": "Mr",
              "first": "Munir",
              "last": "Carvalho"
          },
          "email": "munir.carvalho@example.com",
          "login": {
              "uuid": "25f0e51f-c69b-4794-a5bd-27b08448d9cf",
              "username": "brownswan937",
              "password": "golfer1",
              "salt": "jtEYbBj9",
              "md5": "600889f376fc67ba0a1e5a93a6990bb3",
              "sha1": "c81f3461377fa379fd2233e30659127fc17365c4",
              "sha256": "785e3987f02d2cd73a0b16c54001fa208e697ef686627005f950b31cace0e488"
          },
          "dob": {
              "date": "1953-01-08T04:26:49.322Z",
              "age": 69
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/men/69.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/69.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/69.jpg"
          }
      },
      {
          "name": {
              "title": "Mrs",
              "first": "Acira",
              "last": "Moreira"
          },
          "email": "acira.moreira@example.com",
          "login": {
              "uuid": "30d09d5b-c9f7-4937-8c62-33f80a7f57a4",
              "username": "sadsnake631",
              "password": "coventry",
              "salt": "nkxrFWhS",
              "md5": "390ea1c05b9c9d897c1c4f27c72fd5eb",
              "sha1": "ff510db2df947f0e2271119ff88affe4a9c84a88",
              "sha256": "3dc92411992f0b79b76362c02ba3410dc76d878bf18dba7fee6926fdc1248f7d"
          },
          "dob": {
              "date": "1951-01-24T23:34:09.903Z",
              "age": 71
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/women/53.jpg",
              "medium": "https://randomuser.me/api/portraits/med/women/53.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/women/53.jpg"
          }
      },
      {
          "name": {
              "title": "Mr",
              "first": "Clemente",
              "last": "Castro"
          },
          "email": "clemente.castro@example.com",
          "login": {
              "uuid": "27366a20-7740-4c24-bc07-2f63de2fb8f1",
              "username": "whitesnake836",
              "password": "emerson",
              "salt": "V5x5ifTI",
              "md5": "4e8d15ad8f08925c413c8c42ef4a5aaa",
              "sha1": "fe652e935e3efadfbdc7e8e90f5fe9cd85496cce",
              "sha256": "943c80c6968541acf16c60afcfafb59d181491e6966eb68fc532ba56a5b7ee17"
          },
          "dob": {
              "date": "1985-06-22T00:36:25.962Z",
              "age": 37
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/men/93.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/93.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/93.jpg"
          }
      },
      {
          "name": {
              "title": "Ms",
              "first": "Laíssa",
              "last": "da Mata"
          },
          "email": "laissa.damata@example.com",
          "login": {
              "uuid": "29fa96b8-ded2-45d4-880d-fda51d64c0a7",
              "username": "lazyfrog167",
              "password": "yoyoma",
              "salt": "5y74RNUJ",
              "md5": "e169333e1f41f28d42ed91f22ae070b5",
              "sha1": "91b3a934ba6924dd277f862613fd0b35809db524",
              "sha256": "96c038e58ba47988201f51f5e6160416a20319bdffaa0fc858a7022540cd88e3"
          },
          "dob": {
              "date": "1967-12-12T12:42:35.101Z",
              "age": 55
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/women/77.jpg",
              "medium": "https://randomuser.me/api/portraits/med/women/77.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/women/77.jpg"
          }
      },
      {
          "name": {
              "title": "Mr",
              "first": "Constâncio",
              "last": "Oliveira"
          },
          "email": "constancio.oliveira@example.com",
          "login": {
              "uuid": "9f003254-8c1b-44bd-91b8-41f8be25c1ab",
              "username": "bigmouse246",
              "password": "blink",
              "salt": "vCelGGMF",
              "md5": "3f685ab02925276a69baa81a5510b5fc",
              "sha1": "7898f42111ef15153bae0229166144d16fb2159a",
              "sha256": "48a2a93c69cfee1edd41f48addc490d888fb20077650bdf8338b5b6180b57a65"
          },
          "dob": {
              "date": "1946-05-18T14:54:32.709Z",
              "age": 76
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/men/38.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/38.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/38.jpg"
          }
      },
      {
          "name": {
              "title": "Mr",
              "first": "Mamede",
              "last": "Carvalho"
          },
          "email": "mamede.carvalho@example.com",
          "login": {
              "uuid": "cbe00f5b-9bf7-44ac-a076-325886f4ce5e",
              "username": "purplemeercat713",
              "password": "tinman",
              "salt": "HxZ1ZkU5",
              "md5": "9b9f1da782a9b3175f04ec7a3864b736",
              "sha1": "17c60be122ba9aa53e030051736916232aae0461",
              "sha256": "3e2c6ccaa6314a3505fca34ccc0d53774dce05c765ca68794f22385e7389bb5b"
          },
          "dob": {
              "date": "1960-11-14T08:36:20.060Z",
              "age": 62
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/men/58.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/58.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/58.jpg"
          }
      },
      {
          "name": {
              "title": "Miss",
              "first": "Alfreda",
              "last": "da Rocha"
          },
          "email": "alfreda.darocha@example.com",
          "login": {
              "uuid": "b85eddb0-f4ce-4dc9-947d-87dc5f10f914",
              "username": "brownladybug485",
              "password": "extensa",
              "salt": "frcUNVLb",
              "md5": "5087c8c016f1b7f330ce191516c984d6",
              "sha1": "d1638d47456212b1e90a6f6e22753929634513f9",
              "sha256": "0c11399e6e0d5cfb546e865e1a5228a7227605bae799d35ce77598f56ddebeca"
          },
          "dob": {
              "date": "1962-01-28T05:29:49.657Z",
              "age": 60
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/women/61.jpg",
              "medium": "https://randomuser.me/api/portraits/med/women/61.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/women/61.jpg"
          }
      },
      {
          "name": {
              "title": "Mr",
              "first": "Tarsício",
              "last": "Sales"
          },
          "email": "tarsicio.sales@example.com",
          "login": {
              "uuid": "c3f76515-884c-428e-826e-6febab9f8516",
              "username": "goldenswan684",
              "password": "india",
              "salt": "mZOg9Wo4",
              "md5": "8599329fbc60389d12df2ad2b246f0a3",
              "sha1": "75511354e08f45352c2285b880f7450f76592273",
              "sha256": "f1788ba7e2de20b49eb5cbb18c172b9611d7100792163978706a951b18450866"
          },
          "dob": {
              "date": "1962-01-13T18:55:48.575Z",
              "age": 60
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/men/4.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/4.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/4.jpg"
          }
      },
      {
          "name": {
              "title": "Mr",
              "first": "Gamaliel",
              "last": "Novaes"
          },
          "email": "gamaliel.novaes@example.com",
          "login": {
              "uuid": "31d7c211-4d4e-4753-b352-cd9a4e93d98b",
              "username": "goldenleopard352",
              "password": "tootie",
              "salt": "IRCbmsMj",
              "md5": "eb163bb743bb8a2add1fc30a30501c77",
              "sha1": "44c83ede622a51a2721d55562c134d59376e47ae",
              "sha256": "234ea37604115bd61e719c67d120c994fc936c8c74a1f1e7221922fee7f6a0b2"
          },
          "dob": {
              "date": "1974-12-25T13:25:29.718Z",
              "age": 48
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/men/88.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/88.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/88.jpg"
          }
      },
      {
          "name": {
              "title": "Ms",
              "first": "Graciliana",
              "last": "Barros"
          },
          "email": "graciliana.barros@example.com",
          "login": {
              "uuid": "3b774d5e-5712-4889-821a-204681199a14",
              "username": "beautifulgorilla626",
              "password": "terrier",
              "salt": "GWCzWrjl",
              "md5": "84cb441fd0932282181fb01907dad83d",
              "sha1": "809fb5af46bd2420a582dc2fae976134c9a157cc",
              "sha256": "effb9e4d3e2dcbbc4cc8bd37d3ff69215daedf247bcbb7f5767ab54072f6b245"
          },
          "dob": {
              "date": "1995-04-23T18:48:16.077Z",
              "age": 27
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/women/68.jpg",
              "medium": "https://randomuser.me/api/portraits/med/women/68.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/women/68.jpg"
          }
      },
      {
          "name": {
              "title": "Miss",
              "first": "Ioná",
              "last": "Melo"
          },
          "email": "iona.melo@example.com",
          "login": {
              "uuid": "14a0a232-75d5-4d41-af7f-7ba2a2a5cc49",
              "username": "tinytiger637",
              "password": "mega",
              "salt": "pSGsmFHF",
              "md5": "b5b1c9d81afe0660f6c1f41bd1f16bf8",
              "sha1": "0db7292a9cd16c35ccb7c5cb4774119ca9ca07a6",
              "sha256": "8f7552f1f2194eeca92fbc7ecfe9b4c8570cb46cc5c264c1effeb5125033fde4"
          },
          "dob": {
              "date": "1991-03-13T14:27:33.264Z",
              "age": 31
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/women/88.jpg",
              "medium": "https://randomuser.me/api/portraits/med/women/88.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/women/88.jpg"
          }
      },
      {
          "name": {
              "title": "Mr",
              "first": "Sócrates",
              "last": "Rocha"
          },
          "email": "socrates.rocha@example.com",
          "login": {
              "uuid": "ddd2beea-9a4e-491f-83db-e32220924821",
              "username": "organicladybug133",
              "password": "chao",
              "salt": "kpH7LUAK",
              "md5": "f8661540177205f19d8c4c3241ce533c",
              "sha1": "4339d11dea0910730b21c92c1bb8194fe8be5e90",
              "sha256": "55d48fcf75e649ce7d3bfb33b4dff21547faf9a327a36a197e422661ec74fde2"
          },
          "dob": {
              "date": "1976-03-13T10:42:22.254Z",
              "age": 46
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/men/41.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/41.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/41.jpg"
          }
      },
      {
          "name": {
              "title": "Ms",
              "first": "Flora",
              "last": "Freitas"
          },
          "email": "flora.freitas@example.com",
          "login": {
              "uuid": "84ba12cf-178c-4805-bfaf-cdb140cac905",
              "username": "redladybug267",
              "password": "lkjhgf",
              "salt": "1DojQaMP",
              "md5": "d19ddcb438a3fba8b73555c36a201db4",
              "sha1": "d7397aa9cc3433c90d664d0447fba5669e763186",
              "sha256": "b974488bd8afd44c56aaa6012d4c789f1d5a2b8e948d559f9fd2c91598c6577b"
          },
          "dob": {
              "date": "1961-08-02T20:13:01.617Z",
              "age": 61
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/women/43.jpg",
              "medium": "https://randomuser.me/api/portraits/med/women/43.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/women/43.jpg"
          }
      },
      {
          "name": {
              "title": "Ms",
              "first": "Lueli",
              "last": "Freitas"
          },
          "email": "lueli.freitas@example.com",
          "login": {
              "uuid": "64daa109-ae1e-4ba6-9915-ecaeb85f24e5",
              "username": "organicswan846",
              "password": "wallace",
              "salt": "NifrrWpM",
              "md5": "7519f261342696a287412b4b4677c385",
              "sha1": "02d84fb58f5586147f288a7260875694e440cf52",
              "sha256": "08cc7554c3471a023e01c6fc2837730078a2dd7b120799ccc46e7daa129f6c2d"
          },
          "dob": {
              "date": "1959-12-16T01:06:13.393Z",
              "age": 63
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/women/91.jpg",
              "medium": "https://randomuser.me/api/portraits/med/women/91.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/women/91.jpg"
          }
      },
      {
          "name": {
              "title": "Mr",
              "first": "Bartolomeu",
              "last": "da Rosa"
          },
          "email": "bartolomeu.darosa@example.com",
          "login": {
              "uuid": "d5a7ee70-13d1-43da-9fc3-e74da4401ab6",
              "username": "happyostrich674",
              "password": "private1",
              "salt": "Cjj19h4e",
              "md5": "5f4c2d9db6903f2cbd47e8db10a30af4",
              "sha1": "f956cffa515cc22b948978fa1d6bd05c457bb64f",
              "sha256": "3d27d46d304ee577572f4e647db4383b257e2d42a4fb71ebe1edac7db9c57b25"
          },
          "dob": {
              "date": "1964-04-06T17:57:15.527Z",
              "age": 58
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/men/64.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/64.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/64.jpg"
          }
      },
      {
          "name": {
              "title": "Ms",
              "first": "Margot",
              "last": "Jesus"
          },
          "email": "margot.jesus@example.com",
          "login": {
              "uuid": "45798de3-f61e-4fb9-b75d-0f3ef9c16b8b",
              "username": "bigswan233",
              "password": "hammond",
              "salt": "rF6wTscy",
              "md5": "08887c68db79f1b3cd3ca8a903770bf9",
              "sha1": "75556185a74abe6a051847070b8bde53d8247dc9",
              "sha256": "a20b87820aed292e5cd92a186d9ef403fe5d26cb1c95af04aff89dcc6cc2f014"
          },
          "dob": {
              "date": "1978-05-01T04:38:27.012Z",
              "age": 44
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/women/59.jpg",
              "medium": "https://randomuser.me/api/portraits/med/women/59.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/women/59.jpg"
          }
      },
      {
          "name": {
              "title": "Mr",
              "first": "Décimo",
              "last": "Ferreira"
          },
          "email": "decimo.ferreira@example.com",
          "login": {
              "uuid": "778b7034-a2e5-4848-9e4d-ce3d1f2118eb",
              "username": "lazyleopard958",
              "password": "colt",
              "salt": "phiIVoSa",
              "md5": "6833361362b941c81db5e03dbb9dce94",
              "sha1": "228a72860a384ae0dd5419da6047285ac2442d26",
              "sha256": "e028bfef7d6ec1bc33ee1ec74d4c5c1e39e57c6ffedfe529349dbc438a3fac70"
          },
          "dob": {
              "date": "1998-08-12T19:46:04.458Z",
              "age": 24
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/men/98.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/98.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/98.jpg"
          }
      },
      {
          "name": {
              "title": "Ms",
              "first": "Júlia",
              "last": "Araújo"
          },
          "email": "julia.araujo@example.com",
          "login": {
              "uuid": "0d31775d-661d-4e6e-8a61-c5897ce8c76c",
              "username": "bluefrog578",
              "password": "420000",
              "salt": "scwQY01M",
              "md5": "0d1205ea38c884be8d4ac7b68a432f86",
              "sha1": "3ca894a192172b99b54f3f53fc1619ff7174c1fd",
              "sha256": "e235c1454ff2f0d15ffed08dac9a9956034506062f706038cb742dda96af47d1"
          },
          "dob": {
              "date": "1988-04-23T12:47:12.023Z",
              "age": 34
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/women/68.jpg",
              "medium": "https://randomuser.me/api/portraits/med/women/68.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/women/68.jpg"
          }
      },
      {
          "name": {
              "title": "Ms",
              "first": "Sonialange",
              "last": "Campos"
          },
          "email": "sonialange.campos@example.com",
          "login": {
              "uuid": "2e169e7b-c2c8-41be-b785-290a8fc65fc2",
              "username": "redmouse289",
              "password": "heng",
              "salt": "zny1I1SK",
              "md5": "0bcca56311a9f43d836d27863d14d233",
              "sha1": "bf90db261125367572d1cd101aac2ab6399cef44",
              "sha256": "ee4538eea51c2449f65cac190632a6e55ea1b13c09d1a8cd1af2ccbee9d1d310"
          },
          "dob": {
              "date": "1987-07-27T20:55:38.670Z",
              "age": 35
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/women/18.jpg",
              "medium": "https://randomuser.me/api/portraits/med/women/18.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/women/18.jpg"
          }
      },
      {
          "name": {
              "title": "Mr",
              "first": "Bárbaro",
              "last": "Fogaça"
          },
          "email": "barbaro.fogaca@example.com",
          "login": {
              "uuid": "c0be4f3d-6906-454a-933b-8438889ee9d5",
              "username": "smallbear458",
              "password": "hothot",
              "salt": "X5NBItIf",
              "md5": "f073314d6ddc4e7a4ca0d91a09a15850",
              "sha1": "a49dd4061623cc642f1cc948515606ce3f225f7b",
              "sha256": "9181e2fc5f2b3e4075905701f063c990957c2aa06d06bc63adec6ad42435da0d"
          },
          "dob": {
              "date": "1946-07-22T03:58:48.090Z",
              "age": 76
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/men/66.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/66.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/66.jpg"
          }
      },
      {
          "name": {
              "title": "Mrs",
              "first": "Alena",
              "last": "Lima"
          },
          "email": "alena.lima@example.com",
          "login": {
              "uuid": "d238f143-a3e4-473b-b772-b287ea2e2bcd",
              "username": "whitefish535",
              "password": "emma",
              "salt": "0xdB7Bkm",
              "md5": "0f64134d60b542e63544ad5c86f56080",
              "sha1": "490c1df9bda26648736eb48e03d53bdf53768d61",
              "sha256": "85c3bd0a8c4deb56ad769307f7966fd69211b88b96dc07e917a2a7fe8f01c740"
          },
          "dob": {
              "date": "1959-12-21T02:20:00.479Z",
              "age": 63
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/women/4.jpg",
              "medium": "https://randomuser.me/api/portraits/med/women/4.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/women/4.jpg"
          }
      },
      {
          "name": {
              "title": "Mr",
              "first": "Leonel",
              "last": "Fogaça"
          },
          "email": "leonel.fogaca@example.com",
          "login": {
              "uuid": "d99fa7e2-48f9-4c69-b970-816407e8be57",
              "username": "goldenrabbit294",
              "password": "karate",
              "salt": "Kpy00yn5",
              "md5": "69ba246af590f41ebb4a91e46a5346e8",
              "sha1": "0e801a2a0e0fc710090318b6f30822da41fc3188",
              "sha256": "9b7930b81fe775622770ad62d76d00f9f2be4c0186f5a0d75c275e438473cd2b"
          },
          "dob": {
              "date": "1946-08-17T20:42:51.577Z",
              "age": 76
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/men/79.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/79.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/79.jpg"
          }
      },
      {
          "name": {
              "title": "Mr",
              "first": "Bráulio",
              "last": "Castro"
          },
          "email": "braulio.castro@example.com",
          "login": {
              "uuid": "378e7027-a131-427b-9826-5f957afcbe43",
              "username": "happyostrich994",
              "password": "smeghead",
              "salt": "M7rQW1X0",
              "md5": "93a6ac0cada8e0f16860323dec71743e",
              "sha1": "5f5672ca48f839028104f4fc2b7a82ed33ec0a56",
              "sha256": "722d28e1fa77f758b11a5d2896fc33f3e8cfb21564d8bd8f8f6d101816f7a055"
          },
          "dob": {
              "date": "1962-03-01T05:19:06.439Z",
              "age": 60
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/men/33.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/33.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/33.jpg"
          }
      },
      {
          "name": {
              "title": "Miss",
              "first": "Isabelle",
              "last": "Mendes"
          },
          "email": "isabelle.mendes@example.com",
          "login": {
              "uuid": "32a09a8a-724e-478a-a7b1-ab9d991c432d",
              "username": "heavywolf783",
              "password": "motorola",
              "salt": "zvWhtswA",
              "md5": "0bb3ef6790fadb818491a4be22be3a30",
              "sha1": "c03550dd0a859a443f252e7e0800e03d6006ec0b",
              "sha256": "7c8c1af36c08b4a875863e9b53ff247449ea64ade382fdcccbb1ad5df6570d5c"
          },
          "dob": {
              "date": "1979-10-16T15:49:00.772Z",
              "age": 43
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/women/39.jpg",
              "medium": "https://randomuser.me/api/portraits/med/women/39.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/women/39.jpg"
          }
      },
      {
          "name": {
              "title": "Mr",
              "first": "Baldemar",
              "last": "Pires"
          },
          "email": "baldemar.pires@example.com",
          "login": {
              "uuid": "bf5d073d-9df7-4c97-84b0-bc3a2144c49f",
              "username": "goldenmeercat694",
              "password": "ttttttt",
              "salt": "KOuLxljb",
              "md5": "8c094e3666993be7b0e997fbb7d2bacf",
              "sha1": "8b3dda9265b184e0c47794274926b0c6c3c617c7",
              "sha256": "02fca4c5e2875ca9b5c5cceacbb84b2d0920d038406b272a8208abc0f994eb95"
          },
          "dob": {
              "date": "1976-09-15T18:16:31.070Z",
              "age": 46
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/men/24.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/24.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/24.jpg"
          }
      },
      {
          "name": {
              "title": "Miss",
              "first": "Gisele",
              "last": "Freitas"
          },
          "email": "gisele.freitas@example.com",
          "login": {
              "uuid": "d4cf45ec-5080-4761-815e-57a6005d0dce",
              "username": "brownduck202",
              "password": "warning",
              "salt": "LY3vvPfN",
              "md5": "97d3472969ad8b6e2d2c576e5122e6ba",
              "sha1": "adb715114a8b195691af8159ff48fa0383e5857f",
              "sha256": "612b78b6b6afb702d562ce459c04c8092e61b65b9597eff51ad8627936b0b62b"
          },
          "dob": {
              "date": "1973-05-12T12:10:18.255Z",
              "age": 49
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/women/35.jpg",
              "medium": "https://randomuser.me/api/portraits/med/women/35.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/women/35.jpg"
          }
      },
      {
          "name": {
              "title": "Mr",
              "first": "Deusdedito",
              "last": "Ferreira"
          },
          "email": "deusdedito.ferreira@example.com",
          "login": {
              "uuid": "e581256b-1294-4722-9f2e-1b6aa50af8f9",
              "username": "bluekoala957",
              "password": "bronson",
              "salt": "Y0PY1Ms9",
              "md5": "665c782f0544fc865ef212c10b23b407",
              "sha1": "2d54266118fd9af7a02c58b585a9f1f90b29f446",
              "sha256": "175e329f4d4f0848a6322355f092886f5b35d94610a7413a7bc63f314f1dd2f5"
          },
          "dob": {
              "date": "1980-07-17T05:53:03.739Z",
              "age": 42
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/men/31.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/31.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/31.jpg"
          }
      },
      {
          "name": {
              "title": "Mr",
              "first": "Amauri",
              "last": "Gonçalves"
          },
          "email": "amauri.goncalves@example.com",
          "login": {
              "uuid": "21086c82-3e1b-407c-abc6-a903da2ba8be",
              "username": "angrymeercat131",
              "password": "razor",
              "salt": "EZYF9iJI",
              "md5": "dfff859b9f75debe14f60a27c7a73dbc",
              "sha1": "bbe866a06fad99cd1e0879e7ea1102f1783b61dd",
              "sha256": "dfb0538e036cdaadee159ee488c801f1070c20baaab6df9bb9c98b7db7206731"
          },
          "dob": {
              "date": "1986-08-31T23:05:07.402Z",
              "age": 36
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/men/13.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/13.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/13.jpg"
          }
      },
      {
          "name": {
              "title": "Mr",
              "first": "Tibério",
              "last": "Fogaça"
          },
          "email": "tiberio.fogaca@example.com",
          "login": {
              "uuid": "4af48e5b-4066-42e2-9a98-28dd01e84190",
              "username": "smallelephant902",
              "password": "horseman",
              "salt": "lIHDFJqO",
              "md5": "df19235c6bb7b1f137e0482dff9db052",
              "sha1": "633c9cabe93be468ecc1e97bcce4bfa6169acca6",
              "sha256": "ba18aa94100f19d8908a6ddae635ed1f8b425cee7578443c36a58036b559b8e7"
          },
          "dob": {
              "date": "1954-06-04T19:55:42.977Z",
              "age": 68
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/men/74.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/74.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/74.jpg"
          }
      },
      {
          "name": {
              "title": "Mr",
              "first": "Alfredo",
              "last": "da Rosa"
          },
          "email": "alfredo.darosa@example.com",
          "login": {
              "uuid": "70a752d7-0eb4-4e6a-9c44-75785f03128c",
              "username": "crazyswan520",
              "password": "414141",
              "salt": "Djm6xgi6",
              "md5": "4457fefa2e75e622b9a791870fa43a65",
              "sha1": "51f47db08738143897ecfaf2dc30970c38c1b7e7",
              "sha256": "9dad91e6c25a6f8bd8c27b46b4a083614a9c9c62a477538e5f77803853c8367e"
          },
          "dob": {
              "date": "1994-02-05T04:42:17.460Z",
              "age": 28
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/men/77.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/77.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/77.jpg"
          }
      },
      {
          "name": {
              "title": "Mr",
              "first": "Dener",
              "last": "Souza"
          },
          "email": "dener.souza@example.com",
          "login": {
              "uuid": "0388ff4f-3e96-43d1-9b81-ff01a620c9a9",
              "username": "smallbutterfly695",
              "password": "marine1",
              "salt": "4uladFCc",
              "md5": "9c6b68a7a3ac235327f2c0904d0b5f6f",
              "sha1": "492738f619334a2269d9d463afc1893816a9a16e",
              "sha256": "8c5b92fabbfe9e266d9313cb5cadc72ef2d9df92f18d9363f81c8d877bfd1f81"
          },
          "dob": {
              "date": "1989-05-04T16:00:38.793Z",
              "age": 33
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/men/67.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/67.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/67.jpg"
          }
      },
      {
          "name": {
              "title": "Mr",
              "first": "Melquisedeque",
              "last": "da Mota"
          },
          "email": "melquisedeque.damota@example.com",
          "login": {
              "uuid": "576d167e-80de-42b6-9040-5bcfd90358c3",
              "username": "blackduck581",
              "password": "celtic",
              "salt": "C5Bov2Wk",
              "md5": "8ef4bd84a7c64b843a87634ca55a0f0c",
              "sha1": "41abded178795450920cdc8c26087072539a170a",
              "sha256": "d608c6f5c44eb25f0af4eedc32e2dbad57a0cb4f76dc121a135c5a8e1c3b9dc0"
          },
          "dob": {
              "date": "1951-01-08T10:05:39.696Z",
              "age": 71
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/men/72.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/72.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/72.jpg"
          }
      },
      {
          "name": {
              "title": "Mr",
              "first": "Augusto",
              "last": "Jesus"
          },
          "email": "augusto.jesus@example.com",
          "login": {
              "uuid": "b7cfef54-b1e6-4367-b8ea-0f6137f37cf7",
              "username": "angryzebra745",
              "password": "axio",
              "salt": "lSqktnIq",
              "md5": "86692faf89395d719cc5cfc2e3d199c2",
              "sha1": "da6bebbc446001d1ea49bb02e1b93c25a25b24a2",
              "sha256": "7d18ecee754b73d2985ffe7e3b0f1e473e49412a1d5dd373c3f4e13299ddacdd"
          },
          "dob": {
              "date": "1971-10-10T19:10:47.253Z",
              "age": 51
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/men/23.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/23.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/23.jpg"
          }
      },
      {
          "name": {
              "title": "Miss",
              "first": "Luize",
              "last": "Silva"
          },
          "email": "luize.silva@example.com",
          "login": {
              "uuid": "1bdfa4b3-636d-49db-96aa-3cd2cd4af226",
              "username": "bigostrich545",
              "password": "zxcvbnm",
              "salt": "Wqj56iKU",
              "md5": "f8b68eb8c628190e5cd36657bf062c16",
              "sha1": "61c54dfb5e4ba88eee2f92f8458bbf8fb6924c23",
              "sha256": "f2bfeaf3582941bd746d814ba95976c35335078f0c952c0addd7d677e558e43e"
          },
          "dob": {
              "date": "1964-07-05T09:17:50.755Z",
              "age": 58
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/women/41.jpg",
              "medium": "https://randomuser.me/api/portraits/med/women/41.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/women/41.jpg"
          }
      },
      {
          "name": {
              "title": "Mr",
              "first": "Mis",
              "last": "Pires"
          },
          "email": "mis.pires@example.com",
          "login": {
              "uuid": "712b9de5-6af3-4241-a10a-caa6374d801b",
              "username": "angrybear189",
              "password": "director",
              "salt": "RMnOlNPM",
              "md5": "69ef55394e1f46f1daa41c8919fb7ad5",
              "sha1": "e35540903f53bed7ad29f6bf930e2efa74958b90",
              "sha256": "8c8d4213a7925ad775f38a541c060372cbc813721d5b09a9cea2557bfd4c4abb"
          },
          "dob": {
              "date": "1956-03-02T18:15:49.693Z",
              "age": 66
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/men/25.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/25.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/25.jpg"
          }
      },
      {
          "name": {
              "title": "Mrs",
              "first": "Naomi",
              "last": "Porto"
          },
          "email": "naomi.porto@example.com",
          "login": {
              "uuid": "a785817d-0606-4a42-b5b9-02b6c5995ce2",
              "username": "sadbear360",
              "password": "hotrod",
              "salt": "uIVx6jbU",
              "md5": "09f7cce0fa3166b63d91ad6433a43a7c",
              "sha1": "2fa7f368a7d4375f04351063a888652159f1a0ce",
              "sha256": "2fa8dcf8dd1b29847cc09e9e9df935b22ef6308e6a7ab8c7d856c17399b711e5"
          },
          "dob": {
              "date": "2000-01-27T05:32:59.880Z",
              "age": 22
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/women/85.jpg",
              "medium": "https://randomuser.me/api/portraits/med/women/85.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/women/85.jpg"
          }
      },
      {
          "name": {
              "title": "Mr",
              "first": "Firmo",
              "last": "Rezende"
          },
          "email": "firmo.rezende@example.com",
          "login": {
              "uuid": "236d7021-9f21-4c08-855f-b6cf607f7235",
              "username": "heavysnake468",
              "password": "lovebug",
              "salt": "VRC4u6qe",
              "md5": "cd0ce84501fc124d7506e61c8ea7c55c",
              "sha1": "0622cd841e24cc3ec29db792f3cbfd1fb4d29882",
              "sha256": "3dc8bab57fee46917cc365f64690374b67edc4f8deaada127dadbf47ff9cb6f5"
          },
          "dob": {
              "date": "1961-06-24T12:48:10.579Z",
              "age": 61
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/men/39.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/39.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/39.jpg"
          }
      },
      {
          "name": {
              "title": "Mr",
              "first": "Janique",
              "last": "Nunes"
          },
          "email": "janique.nunes@example.com",
          "login": {
              "uuid": "7440c96f-ecb3-42e5-98cb-e515daab83b3",
              "username": "purplegorilla196",
              "password": "samsung",
              "salt": "6NGXiy78",
              "md5": "a218217f5e41d646897a07e420bccd34",
              "sha1": "9139da07f0e28b84539bcb1c1b9eea12b47edc83",
              "sha256": "55716cad3883b0518b1b3e24571cd09785525a1979da7671e3f680dd06dbab50"
          },
          "dob": {
              "date": "1953-07-28T21:46:57.945Z",
              "age": 69
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/men/78.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/78.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/78.jpg"
          }
      },
      {
          "name": {
              "title": "Mr",
              "first": "Lourival",
              "last": "Monteiro"
          },
          "email": "lourival.monteiro@example.com",
          "login": {
              "uuid": "bab097d9-a0dd-4936-bf63-e85c30dcd4b5",
              "username": "silverlion978",
              "password": "shaolin",
              "salt": "ep9nadKP",
              "md5": "350d3307725fbadf1ff5705cf9b312b8",
              "sha1": "30bf9926aff855c64828275d125fdca219817f92",
              "sha256": "e2878effe0dad3e9edbaf81606feb4624cae94a107c4b1cf155da9b1edb0637c"
          },
          "dob": {
              "date": "1986-05-04T08:22:51.212Z",
              "age": 36
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/men/38.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/38.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/38.jpg"
          }
      },
      {
          "name": {
              "title": "Mr",
              "first": "Serafim",
              "last": "Alves"
          },
          "email": "serafim.alves@example.com",
          "login": {
              "uuid": "1e89103e-1db0-491e-9cdd-507643e732c7",
              "username": "purplelion628",
              "password": "dickens",
              "salt": "CashJ36i",
              "md5": "1ac8802d4f6c6c6599818195c2e82a51",
              "sha1": "83c35b59d87d5d86217f4654773ca6e021db8f36",
              "sha256": "22e4e635bcbf36fd148cfd7e28e52cbb4e4cd94d3b27b4f8805627038acd6c3b"
          },
          "dob": {
              "date": "1993-03-20T02:34:33.690Z",
              "age": 29
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/men/73.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/73.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/73.jpg"
          }
      },
      {
          "name": {
              "title": "Mr",
              "first": "Heldo",
              "last": "Campos"
          },
          "email": "heldo.campos@example.com",
          "login": {
              "uuid": "219f4acd-cfd6-4af4-a56c-babe24a9aa19",
              "username": "angrygoose525",
              "password": "drum",
              "salt": "fwgWs7wp",
              "md5": "d039b6554bc4877945c0f3ab4f6ff9af",
              "sha1": "75a7a51da3ea9466da5c9ba55ed6986ddd62c1f2",
              "sha256": "37f020864d4249d38992a74daf364324391de980b0512141b71dc7bed3ad5cfd"
          },
          "dob": {
              "date": "1964-11-27T12:13:07.144Z",
              "age": 58
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/men/32.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/32.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/32.jpg"
          }
      },
      {
          "name": {
              "title": "Ms",
              "first": "Zoneide",
              "last": "Rodrigues"
          },
          "email": "zoneide.rodrigues@example.com",
          "login": {
              "uuid": "ad05646c-f427-4de9-8979-2c9f20d65c24",
              "username": "whitekoala268",
              "password": "buster",
              "salt": "gvE5ez4M",
              "md5": "1b6ae55f1c40df9ecc3b0296e0e45955",
              "sha1": "acb18efe0cad018744dbe1701a803ddbf3a7c71c",
              "sha256": "246096fab866afb1258c4a59a321f9a4ff84e2833cdd732789ab0b5211b23ba6"
          },
          "dob": {
              "date": "1963-04-25T00:18:37.742Z",
              "age": 59
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/women/11.jpg",
              "medium": "https://randomuser.me/api/portraits/med/women/11.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/women/11.jpg"
          }
      },
      {
          "name": {
              "title": "Mrs",
              "first": "Julieta",
              "last": "Porto"
          },
          "email": "julieta.porto@example.com",
          "login": {
              "uuid": "697fc966-f64a-4715-a685-f3870d38a8d0",
              "username": "beautifulmouse158",
              "password": "lindsey",
              "salt": "exTaZuDI",
              "md5": "630fb06a7ddf6f212a76ae89691872ac",
              "sha1": "d024f6d9ba7cebe10d254b0cf64d1436ae88772f",
              "sha256": "e64ae5a47aa637e489f02d09b47642bb57c115f104910b0c393788ce0eed8435"
          },
          "dob": {
              "date": "1966-09-18T08:48:54.966Z",
              "age": 56
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/women/86.jpg",
              "medium": "https://randomuser.me/api/portraits/med/women/86.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/women/86.jpg"
          }
      },
      {
          "name": {
              "title": "Ms",
              "first": "Rosária",
              "last": "Gomes"
          },
          "email": "rosaria.gomes@example.com",
          "login": {
              "uuid": "9ac635e4-2c6e-4d4d-89a5-96320e49a923",
              "username": "redladybug108",
              "password": "corvette",
              "salt": "1Dnuemvk",
              "md5": "c4a25baa059c297846844aec618b2680",
              "sha1": "b3c9a4eeb3563942a2e3c113372608cc5a4993ac",
              "sha256": "2db8bf3651bb9aa9936cdfb7190f1ccaeaaef3294db35729b83ba74e0dc884d9"
          },
          "dob": {
              "date": "1997-05-26T22:05:31.051Z",
              "age": 25
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/women/9.jpg",
              "medium": "https://randomuser.me/api/portraits/med/women/9.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/women/9.jpg"
          }
      },
      {
          "name": {
              "title": "Miss",
              "first": "Gracielen",
              "last": "Freitas"
          },
          "email": "gracielen.freitas@example.com",
          "login": {
              "uuid": "6aaf128d-47b2-4004-b6e6-ca3f6d73ab6d",
              "username": "orangetiger681",
              "password": "callisto",
              "salt": "z56QFuSe",
              "md5": "9d21d612200593b2f8ab48ac4f46f97f",
              "sha1": "c754c5d1d642dab599d7b32add42756a5cdb56d9",
              "sha256": "9485a5bcf688dca20ec457e05660b8a02aa27961317aa22571b23f51bcf4503f"
          },
          "dob": {
              "date": "1966-07-07T21:38:16.866Z",
              "age": 56
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/women/87.jpg",
              "medium": "https://randomuser.me/api/portraits/med/women/87.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/women/87.jpg"
          }
      },
      {
          "name": {
              "title": "Miss",
              "first": "Bianca",
              "last": "Aragão"
          },
          "email": "bianca.aragao@example.com",
          "login": {
              "uuid": "10379059-dd55-4a1a-b331-80503be6bdab",
              "username": "blackzebra993",
              "password": "lennon",
              "salt": "Dv5zXnKn",
              "md5": "1e6939988aae3765ea409204e2283261",
              "sha1": "1e370629e3a6d48e9c47e2f624dae4303426a144",
              "sha256": "8003f4877133f8375ba1067d4c233be029c1362a287b96bbfdede988ca7add2e"
          },
          "dob": {
              "date": "1987-04-15T10:55:05.474Z",
              "age": 35
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/women/18.jpg",
              "medium": "https://randomuser.me/api/portraits/med/women/18.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/women/18.jpg"
          }
      },
    ]]);

    

    async function fetchData() {
      const payload = await fetchApi.get(BASE_URL);
      setUsers([...users, ...payload.results]);
    }

    //  fetchData();
  }, []);

  useEffect(() => { setEndUser(startUser + resultsPerPage); }, [resultsPerPage]);

  useEffect(() => {
    usersToShow();
    setStartUser(0);
    setEndUser(resultsPerPage);
  }, [filterUsers, typeFilter, users]);

  function handleClickPage(option) {
    if (option === 0) {
      if (startUser - resultsPerPage < 0) setStartUser(0);
      else setStartUser(startUser - resultsPerPage);

      if (endUser - resultsPerPage <= resultsPerPage) setEndUser(resultsPerPage);
      else setEndUser(endUser - resultsPerPage);

    } else {
      setStartUser(endUser);
      setEndUser(endUser + resultsPerPage);
    }
  }

  function filterUsersByName(name) {
    if (name.first.toLowerCase().includes(filterUsers)) return true;
    if (name.last.toLowerCase().includes(filterUsers)) return true;

    return false;
  }

  function filterUsersByUsername(username) {
    return username.toLowerCase().includes(filterUsers);
  }

  function filterUsersToShow(element) {
    if (filterUsers.trim() === '') return true;

    const { name, login: { username }, email } = element;

    if (typeFilter === 'name') return filterUsersByName(name);
    if (typeFilter === 'username') return filterUsersByUsername(username);

    return email.toLowerCase().includes(filterUsers);
  }

  function usersToShow() {
    setShowUsers(false);

    const filtered = users
      .filter(filterUsersToShow);

    setFilteredUsers(filtered);
    setShowUsers(true);
  }

  return (
    <main id='users-main'>
      <h1>Usuários</h1>
      <section
        id='users-pagination-filter'
      >
        <div id='users-pagination-filter-pagination'>
          <p>Usuários por página:&nbsp;</p>
          <select
            onChange={ ({ target }) => setResultsPerPage(parseInt(target.value)) }
            value={ resultsPerPage }
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>          
        </div>
        <div id='users-pagination-filter-filter'>
          <p>Filtrar usuários por:</p>
          <select
            onChange={ ({ target }) => setTypeFilter(target.value) }
            value={ typeFilter }
          >
            <option value="name">Nome</option>
            <option value="email">E-mail</option>
            <option value="username">Username</option>
          </select> 
          <input
            type="text"
            onChange={ ({ target }) => setFilterUsers(target.value) }
            value={ filterUsers }
          />
        </div>
      </section>
      <section id='users-container'>
        {
          showUsers && filteredUsers
            .slice(startUser, endUser)
            .map((user) => (
              <User
                user={ user }
                key={ `${user.username}-${user.email}-${user.dob.age}` }
              />
            ))
        }
      </section>
      <section id='users-buttons'>
        {
          startUser !== 0 &&
            <button type='button' onClick={ () => handleClickPage(0) }>
              Página anterior
            </button>
        }
        {
          endUser < filteredUsers.length &&
            <button type='button' onClick={ () => handleClickPage(1) }>
              Próxima página
            </button>
        }
      </section>
    </main>
  );
}

export default Users;
