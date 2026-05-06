const url = "https://script.google.com/macros/s/AKfycbxTOjTpLaDrGAHeWEmtTEFj2mFiAEBHT4NI8ecaL1Ej5jsKEh_9Oenm6QZlvuP3Stfo/exec";

// WAJIB sama urutan dengan spreadsheet
const bahan = [
"ayam","tahu","tulang","saus_tiram","minyak_wijen","tepung_tapioka",
"gula","garam","kaldu_bubuk","lada_bubuk","telur","kecap_asin",
"kulit_lumpia","kulit_pangsit","tepung_terigu","air_mineral",
"minyak_goreng","daun_bawang","kencur","cabe_merah","cabe_besar",
"cabe_merah_keriting","bawang_merah","bawang_putih",

"kemasan_brownies_s","kemasan_brownies_m","kemasan_mika",
"kemasan_paper_bowl","garpu_mini","sendok_bebek","plastik_tikus",
"plastik_klip","cup_saus","saus_bangkok","saus_keju",
"saus_hot_lava","chili_oil","bubuk_keju","bubuk_krimer",
"piping_bag","sarung_tangan","plastik_kresek",
"sabun_cuci_piring","trashbag"
];

// =======================
// PENGADAAN
// =======================
function kirimPengadaan(){
  let data = { sheet: "Pengadaan Bahan" };

  bahan.forEach(b => {
    data[b+"_qty"] = document.getElementById(b+"_qty")?.value || 0;
    data[b+"_harga"] = document.getElementById(b+"_harga")?.value || 0;
  });

  fetch(url,{method:"POST",body:new URLSearchParams(data)})
  .then(r=>r.text()).then(alert);
}

function kirimPenggunaan(){
  let data = { sheet: "Penggunaan Bahan" };

  bahan.forEach(b => {
    data[b] = document.getElementById(b)?.value || 0;
  });

  fetch(url,{method:"POST",body:new URLSearchParams(data)})
  .then(r=>r.text()).then(alert);
}
