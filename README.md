# TaskFlowAPI

TaskFlow API, bir yazılım şirketindeki görevlerin oluşturulmasını, çalışanlara atanmasını, görev durumlarının takibi ve önceliklendirilmesi sağlayan Node.js ve Express.js tabanlı bir REST API projesidir.

## Kurulum

### 1.Gereksinimler

Projeyi çalıştırabilmek için bilgisayarınızda 
- Node.js
- npm
- Visual Studio Code veya başka bir kod editörü
- API testleri için Postman programlarının kurulu olması gerekmektedir.

Kurulumu kontrol etmek için terminalde şu komutları çalıştırabilirsiniz:

```bash
node -v
npm -v
```
### 2. Proje klasörünün açılması

Visual Studio Code uygulamasını açın.

Menüden:

```text
File → Open Folder
```

seçeneğine tıklayın ve `taskflow-api` klasörünü seçin.

Daha sonra Visual Studio Code içerisinden yeni bir terminal açın:

```text
Terminal → New Terminal
```

Terminalin proje klasöründe bulunduğundan emin olun. Gerekirse şu komutla proje klasörüne geçin:

```bash
cd taskflow-api
```

### 3. Gerekli paketlerin yüklenmesi

Projenin kullandığı paketleri yüklemek için şu komutu çalıştırın:

```bash
npm install
```
Bu command `package.json` dosyasındaki bağımlılıkları yükler ve `node_modules` klasörünü oluşturur.

### 4. Sunucunun çalıştırılması

Sunucuyu başlatmak için şu komutu çalıştırın:

```bash
node app.js
```

Sunucu başarıyla çalıştığında terminalde şu mesaj görülür:

```text
API running on port 3000
```

API’ye şu temel adres üzerinden ulaşılır:

```text
http://localhost:3000
```

Ana adresi kontrol etmek için tarayıcıda veya Postman’de şu isteği gönderebilirsiniz:

```text
GET http://localhost:3000/
```

Beklenen cevap:

```text
API is running
```

### 5. Sunucunun durdurulması

Çalışan sunucuyu durdurmak için terminalde şu tuşlara basın:

```text
Control + C
```

Kodda değişiklik yaptıktan sonra sunucuyu yeniden çalıştırmak için tekrar şu komutu kullanabilirsiniz:

```bash
node app.js
```

## Olası Kurulum Sorunları

Paketlerin bulunamadığına ilişkin bir hata alınırsa aşağıdaki komutu tekrar çalıştırın:

```bash
npm install
```

Portun kullanımda olduğuna ilişkin bir hata alınırsa daha önce çalıştırılmış sunucuyu `Control + C` ile durdurun ve projeyi yeniden başlatın.

API’den cevap alınamıyorsa aşağıdakileri kontrol edin:

- Terminalde sunucunun çalışıyor olması
- İstek adresinin `http://localhost:3000` ile başlaması
- Postman’de doğru HTTP methodunun seçilmesi
- POST ve PUT isteklerinde `Body → raw → JSON` seçilmesi