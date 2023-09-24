// import { randomUUID } from "crypto";
// import { RedisConnection } from "./main/database";

// async function teste() {
//     await RedisConnection.connect()

//     const redis = RedisConnection.connection

//     const pessoa = {
//         id: randomUUID(),
//         nome: 'caio',
//         idade: 29,
//         brasileiro: true
//     }

//     console.log(await redis.set(pessoa.id, JSON.stringify(pessoa)));
//     const pessoaCache = await redis.get(pessoa.id)

//     console.log(JSON.parse(pessoaCache) ?? '{}');




// }

// teste()