// export const getAll = async (masterId: number | null) => {
//     // const users =  await prisma.user.findMany({
//     //     where: {
//     //         deleted: false,
//     //         masterId,
//     //     },
//     //     select:{
//     //         id:true,
//     //         name:true,
//     //         password:false,
//     //         phone:true,
//     //         address:true,
//     //         number: true,
//     //         cep: true,
//     //         city:true,
//     //         masterId:true
//     //     }
//     // })
//     // return users;

// }
busca via query  params
http://localhost:3333/v1/user?search=servo
http://localhost:3333/v1/user?skip=0&take=20&search=sandro

hash token
0e7fe2d925bb0e358445faa7bd39fade0600f0278a06ddb1a0cd6e747eee7997efbda59bd367bba47fd31697e81d759ee8c00defbac2bb7627cfab3a3db041e3
