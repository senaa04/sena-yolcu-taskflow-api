const fs = require("fs");
const path = require("path");
const DOSYA_YOLU = path.join(__dirname, "../data/tasks.json");

//catch kısmı değişecek
const gorevleriOku = () => {
    try {
        const veri = fs.readFileSync(DOSYA_YOLU, "utf-8");
        return JSON.parse(veri);
    } catch (error) {
        console.error("Error reading tasks file:", error);
        return [];
    }
};

//catch kısmı değişecek
const gorevleriKaydet = (gorevler) => {
    try {
        fs.writeFileSync(DOSYA_YOLU, JSON.stringify(gorevler, null, 2), "utf-8");
    } catch (error) {
        console.error("Error writing tasks file:", error);
    }
};

module.exports = {gorevleriOku, gorevleriKaydet};

