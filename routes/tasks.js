const express = require('express');
const router = express.Router();
const {gorevleriOku, gorevleriKaydet} = require('../utils/dosya');

//GET
router.get("/", (req, res) => {
    const gorevler = gorevleriOku();
  res.json(gorevler);
});

// GET /tasks/:id
router.get("/:id", (req, res) => {
  const gorevler = gorevleriOku();
  const id = Number(req.params.id);

  const gorev = gorevler.find((gorev) => gorev.id === id);

  if (!gorev) {
    return res.status(404).json({
      hata: "Görev bulunamadı"
    });
  }

  res.json(gorev);
});

//POST
router.post("/", (req, res) => {
    const {baslik, calisan, status, oncelik} = req.body;
    const gorevler = gorevleriOku();
    const yeniGorev = { id: Date.now(), baslik, calisan, status, oncelik };
    gorevler.push(yeniGorev);
    gorevleriKaydet(gorevler);
    res.status(201).json(yeniGorev);
});

//PUT
router.put("/:id", (req, res) => {
    const gorevler = gorevleriOku();
    const id = Number(req.params.id);
    const index = gorevler.findIndex((gorev) => gorev.id === id);

    if (index === -1) {
        return res.status(404).json({ hata: "Görev bulunamadı" });
    }
    
    const { baslik, calisan, status, oncelik } = req.body;
    const guncelGorev = {id, baslik, calisan, status, oncelik};
    
    gorevler[index] = guncelGorev;
    gorevleriKaydet(gorevler);
    res.json(guncelGorev);
} );

//Delete
router.delete("/:id", (req, res) => {
  const gorevler = gorevleriOku();
  const id = Number(req.params.id);
  const index = gorevler.findIndex((gorev) => gorev.id === id);

  if(index === -1){
    return res.status(404).json({
      basarili: false,
      hata: "Görev bulunamadı"
    });
  }
  //diziden çıkar
  const silinenGorev = gorevler.splice(index, 1)[0];
  gorevleriKaydet(gorevler);

  res.json({
    mesaj: "Görev silindi",
    basarili: true,
    silinen: silinenGorev
  });
});


module.exports = router;


