//  1-chi masala

// let Avtomobil = {
//   tovar: "Toyota",
//   model: "Camry",
//   yil: 2022,
// };

// function yangiYil(obekt) {
//   let yangiObyekt = Object.assign({}, obekt);
//   yangiObyekt.yil += 1;
//   return yangiObyekt;
// }

// console.log("Oddiy obyekt:");
// console.log(Avtomobil);

// let yangiObyekt = yangiYil(Avtomobil);
// console.log("Yangi obyekt:");
// console.log(yangiObyekt);

//   2-chi masala
// let uquvchi = {
//   ism: "Umidjon",
//   yosh: 20,
//   baholar: [80, 85, 90],
//   urtachaBahosi: function () {
//     let summa = 0;
//     for (let baho of this.baholar) {
//       summa += baho;
//     }
//     return summa / this.baholar.length;
//   },
// };

// let urtachaBahosi = uquvchi.urtachaBahosi();
// console.log(`${uquvchi.ism}ning urtacha bahosi: ${urtachaBahosi}`);

//  3-chi masala

// let Shape = {
//   turi: "Shape",
//   rang: "Oq",
// };

// let Doira = Object.create(Shape);
// Doira.turi = "Doira";
// Doira.radius = 5;

// let Turtburchak = Object.create(Shape);
// Turtburchak.turi = "Turtburchak";
// Turtburchak.kenglik = 8;
// Turtburchak.balandlik = 4;

// console.log(
//   `Doira: turi - ${Doira.turi}, rang - ${Doira.rang}, radius - ${Doira.radius}`
// );
// console.log(
//   `Turtburchak: turi - ${Turtburchak.turi}, rang - ${Turtburchak.rang}, kenglik - ${Turtburchak.kenglik}, balandlik - ${Turtburchak.balandlik}`
// );

//   4-chi masala

// function createBankHisobi(balans, egasi) {
//   let bankHisobi = {
//     balans: balans,
//     egasi: egasi,
//     depozit: function (miqdori) {
//       if (miqdori > 0) {
//         this.balans += miqdori;
//         console.log(
//           `${this.egasi}ning balansi ${miqdori} so'mga oshirildi. Yangi balans: ${this.balans} so'm`
//         );
//       } else {
//         console.log("Xato: Manfiy yoki nol miqdor kiritish mumkin emas.");
//       }
//     },
//     olibQoyish: function (miqdori) {
//       if (miqdori > 0 && miqdori <= this.balans) {
//         this.balans -= miqdori;
//         console.log(
//           `${this.egasi}ning balansidan ${miqdori} so'm olib tashlandi. Yangi balans: ${this.balans} so'm`
//         );
//       } else if (miqdori <= 0) {
//         console.log("Xato: Manfiy yoki nol miqdor olib tashlash mumkin emas.");
//       } else {
//         console.log("Xato: Yetarli mablag' yo'q.");
//       }
//     },
//   };

//   return bankHisobi;
// }

// let bankHisobi = createBankHisobi(1000, "John Doe");

// bankHisobi.depozit(500);
// bankHisobi.olibQoyish(2000);
// bankHisobi.olibQoyish(300);

// console.log(`${bankHisobi.egasi}ning yakun balansi: ${bankHisobi.balans} so'm`);

//    5-chi masala

// let shaxs1 = {
//   ism: "Asadbek",
//   yosh: 25,
//   shahar: "Toshkent",
// };

// let shaxs2 = {
//   ism: "Umidjon",
//   yosh: 30,
//   shahar: "Toshkent",
// };

// function taqqoslash(shaxs1, shaxs2) {
//   if (
//     shaxs1.ism === shaxs2.ism &&
//     shaxs1.yosh === shaxs2.yosh &&
//     shaxs1.shahar === shaxs2.shahar
//   ) {
//     console.log("Ular bir xil shaxs.");
//   } else {
//     console.log("Ular bir-biriga oid emas.");
//   }
// }

// taqqoslash(shaxs1, shaxs2);
