# attilayener.github.io

Kişisel sitem. GitHub Pages üzerinden yayınlanıyor:
**<https://attilayener.github.io/>**

Sayfanın dili `<html lang="tr">` olarak işaretli ve kod içi yorumlar Türkçe, ama
görünür başlıklar İngilizce. Bağımlılık gerektirmez — derleme adımı, paket
yöneticisi veya sunucu tarafı kod yok. Depoyu çekip `index.html`'i açmak yeterli.

## Çalıştırma

Yayınlanan sürümü görmek için yeter:

```bash
git clone https://github.com/attilayener/attilayener.github.io.git
cd attilayener.github.io
python -m http.server 8000
```

Ardından <http://localhost:8000> adresini aç.

> `file://` ile de açılabilir, ama `tikla()` içindeki `location.href` yönlendirmesi
> bazı tarayıcılarda `file://` altında kısıtlanır. Yerel sunucu daha güvenilir.

## Dosyalar

| Dosya | Ne yapar |
| --- | --- |
| `index.html` | Tek sayfa. Tüm içerik burada; ayrı bir şablon motoru yok. |
| `style.css` | Arka plan görseli (`images/4.jpg`, `fixed` + `repeat`), başlık rengi ve `#musicBox` ölçüleri. |
| `styele.js` | Klavye olayı: `9` tuşuna basılınca YouTube'a yönlendirir. |
| `images/` | Arka plan, favicon ve `<video>` için kullanılan MP4. |

`index.html` Bootstrap 4.6.0'ı CDN'den, `integrity` ve `crossorigin` öznitelikleriyle
çekiyor — bu yüzden ilk açılışta internet bağlantısı gerekir. Yerel CSS'in kendisi
ek olarak yükleniyor.

## Davranışlar

`index.html` içinde tanımlı iki fonksiyon, `onclick` ile başlıklara bağlı:

| Fonksiyon | Bağlandığı başlık | Nereye gider |
| --- | --- | --- |
| `tikla()` | `WELLCOME TO EARTH!` | `youtube.com/watch?v=B2BAkVwZpoU` |
| `tikla2()` | `<<< Çalma Listesi için Tıkla >>>` | bir YouTube oynatma listesi |

Ortadaki `<video>` etiketi `images/` içindeki yerel MP4 dosyasını çalar; bir
SoundCloud gömülü bloğu yorum satırı içinde duruyor ve kullanılmıyor.

## Yayınlama

`main` dalındaki dosyalar olduğu gibi sunulur. Değişiklik yapmak için:

```bash
git commit -am "..."
git push origin main
```

Yayın, push'tan sonra GitHub Pages tarafında otomatik gerçekleşir. Depo
`https://attilayener.github.io` adresinde olduğu için ek bir ayar gerekmez.

## Bilinmesi gerekenler

Düzeltilmemiş noktalar, sonradan bakınca kafa karıştırmasın diye:

- **`styele.js`** — dosya adında yazım hatası var (`style.js` olmalı). `index.html`
  bu adı `<script src="styele.js">` ile çağırdığı için şu an çalışıyor; adı
  düzeltirsen aynı yerdeki `src`'i de güncellemek gerekir.
- **`WELLCOME TO EARTH!`** — `WELCOME` yazılmalı.
- **`images/` klasörü depoyu büyütüyor.** En büyük dosya ~55 MiB'lık bir MP4
  (`3.jpg` ~6 MiB). Her `git clone` bu boyutu indirir; ileride video ya da görselleri
  depodan çıkarıp bir CDN'e taşımak depoyu belirgin şekilde hafifletir.
- **Bootstrap 4.6.0** — EOL olmuş bir sürüm. İçerik kırılganlığı düşük ama
  yükseltme istenirse 5.x'e geçişte `data-toggle`/`data-target` gibi eski
  öznitelikler güncellenmeli. Bu sayfada Bootstrap bileşeni kullanılmadığı için
  geçiş pratikte zararsız.
- **`index.html` içinde `<p>` içine `<div>` yerleştirilmiş.** Tarayıcılar bunu
  düzeltir ama geçersiz HTML'dir; ekran okuyucular için işaretleme yanlış
  olabilir.
- Yorum satırındaki not: *"Farklı bir zamanda daha faklı bir tasarım düşünüyorum"*

## Lisans

Bu depoda LICENSE dosyası yok. Eklenmesi gerekiyor — bir açık kaynak
lisansı seçilip README'ye bağlantı verilmesi, yeniden kullanım koşullarını
netleştirir.