import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../contexts/Context';
import { fetchApi } from '../utils';
import '../styles/Users.css';

function Users() {
  const { logged } = useContext(Context);
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const BASE_URL = `https://randomuser.me/api/?seed=gabrielpinheiromatiucci&page=${page}&results=10&nat=br&inc=picture,name,email,dob,login`;

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
        }
      ]
    ]);

    async function fetchData() {
      const payload = await fetchApi.get(BASE_URL);
      setUsers([...users, ...payload.results]);
    }

    //  fetchData();
  }, []);

  return (
    <main id='users-main'>
      <h1>Users</h1>
      { console.log(users) }
    </main>
  );
}

export default Users;
