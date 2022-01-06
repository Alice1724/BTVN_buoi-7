// Bai 1
let so_1 = prompt('Nhap gia tri thu nhat');
let so_2 = prompt('Nhap gia tri thu hai');

let c = Math.sqrt(Number(so_1));
let d = Math.sqrt(Number(so_2));

console.log(`Can bac 2 cua ${so_1} la ${c}`);
console.log(`Can bac 2 cua ${so_2} la ${d}`);

//Bai 2
let a = prompt('Nhap do dai canh day');
let h = prompt('Nhap chieu cao');

let S = (Number(a) + Number(h))/2;
console.log(`Dien tich tam giac voi chieu cao ${h} va do dai day ${a} la ${S} cm2`);

//Bai 3
let do_F = prompt('Nhap do F lan 1');
let do_F2 = prompt('Nhap do F lan 2');

let do_C = 5/9 * (Number(do_F)-32);
let do_C2 = 5/9 * (Number(do_F2)-32);

console.log(`${do_F} do F bang ${do_C} do C`);
console.log(`${do_F2} do F bang ${do_C2} do C`);

//Bai 4
let km = prompt('Nhap so km lan 1');
let km2 = prompt('Nhap so km lan 2');

let m = Number(km)*1000;
let m2 = Number(km2)*1000;

console.log(`${km}km bang ${m}m`);
console.log(`${km2}km bang ${m2}m`);
