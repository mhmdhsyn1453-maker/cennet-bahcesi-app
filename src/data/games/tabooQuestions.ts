export interface TabooCard {
  id: string;
  word: string;
  forbidden: string[];
  wisdom: string;
  category: string;
}

export const TABOO_QUESTIONS_DB: TabooCard[] = [
  {
    "id": "tb_1",
    "word": "Sadık İnsan",
    "forbidden": [
      "Sadık",
      "İnsan",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre sadık bir i̇nsan olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_2",
    "word": "Farabi Müzik Kitabı",
    "forbidden": [
      "Farabi",
      "Müzik",
      "Kitap",
      "Kanun",
      "Keman"
    ],
    "wisdom": "Farabi'nin müzik notalarını ve aletlerini açıkladığı tarihi kitaptır.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_3",
    "word": "Günah İşlemek",
    "forbidden": [
      "İbadet",
      "Din",
      "Müslüman",
      "Allah",
      "İslam"
    ],
    "wisdom": "İslam dininde yer alan temel kavram ve ibadetlerdendir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_4",
    "word": "Sözünde Durmak",
    "forbidden": [
      "Söz",
      "Güven",
      "Sadakat",
      "Tutmak",
      "Verilen"
    ],
    "wisdom": "Birisini söz verdiğimizde ne olursa olsun o sözü yerine getirmektir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_5",
    "word": "Tarih Haritası Gösterimi",
    "forbidden": [
      "Harita",
      "Tarih",
      "Sınır",
      "Devlet",
      "Savaş"
    ],
    "wisdom": "Tarih derslerinde eski savaşları ve devlet sınırlarını gösteren haritalardır.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_6",
    "word": "Mushaf",
    "forbidden": [
      "Kitap",
      "Kuran",
      "Sayfa",
      "İki kapak",
      "Yazılı"
    ],
    "wisdom": "Kur'an-ı Kerim'in kitap haline getirilmiş halidir.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_7",
    "word": "Peygamber Efendimiz",
    "forbidden": [
      "Peygamber",
      "Elçi",
      "Allah",
      "Kuran",
      "Vahiy"
    ],
    "wisdom": "Peygamberlikle ilgili kutsal bir kavramı ifade eder.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_8",
    "word": "Kıskanç Olmamak",
    "forbidden": [
      "Haset",
      "Kıskanmak",
      "Nimet",
      "Çekememek",
      "Paylaşmak"
    ],
    "wisdom": "Başkalarının sahip olduğu güzel şeyleri kıskanıp haset etmemektir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_9",
    "word": "Nebe Suresi",
    "forbidden": [
      "Nebe",
      "Amme",
      "Sure",
      "Kıyamet",
      "Haber"
    ],
    "wisdom": "Kıyamet haberlerini bildiren 'Amme' suresidir.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_10",
    "word": "Sadık Dost",
    "forbidden": [
      "Sadık",
      "Dost",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre sadık bir dost olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_11",
    "word": "Namaz Tekbiri",
    "forbidden": [
      "Allahu Ekber",
      "Başlamak",
      "Namaz",
      "Söz",
      "Eller"
    ],
    "wisdom": "Namazın başında 'Allahu Ekber' diyerek namaza giriş yapmaktır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_12",
    "word": "Barut Gücüyle Dikey Uçuş",
    "forbidden": [
      "Barut",
      "Uçuş",
      "Dikey",
      "Lagari",
      "Roket"
    ],
    "wisdom": "Barut patlamasıyla havaya dikey fırlayarak yapılan tarihi uçuştur.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_13",
    "word": "Güleryüz Sadakadır",
    "forbidden": [
      "Güleryüz",
      "Sadaka",
      "Hadis",
      "Tebessüm",
      "Peygamber"
    ],
    "wisdom": "İnsanlara gülümsemenin sadaka sevabı kazandırdığını bildiren hadistir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_14",
    "word": "Sabırlı Çocuk",
    "forbidden": [
      "Sabır",
      "Beklemek",
      "Kızmamak",
      "Öfke",
      "Çocuk"
    ],
    "wisdom": "Zor durumlarda öfkelenmeyip sakin kalan sabırlı çocuktur.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_15",
    "word": "Yıldız Haritası",
    "forbidden": [
      "Yıldız",
      "Harita",
      "Gökyüzü",
      "Astronomi",
      "Uluğ Bey"
    ],
    "wisdom": "Gece gökyüzündeki yıldızların konumlarını gösteren bilimsel haritadır.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_16",
    "word": "Dua Etmek",
    "forbidden": [
      "Dua",
      "İstemek",
      "Allah",
      "El açmak",
      "Yalvarmak"
    ],
    "wisdom": "Allah'tan sağlık, başarı ve iyilik dilemek için el açıp yalvarmaktır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_17",
    "word": "Sabırlı İnsan",
    "forbidden": [
      "Sabırlı",
      "İnsan",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre sabırlı bir i̇nsan olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_18",
    "word": "Sınıf Tahtası",
    "forbidden": [
      "Tahta",
      "Yazı",
      "Tebeşir",
      "Kalem",
      "Sınıf"
    ],
    "wisdom": "Öğretmenin derste yazı yazıp soru çözdüğü sınıf tahtasıdır.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_19",
    "word": "Merve Tepesi",
    "forbidden": [
      "Safâ Tepesi",
      "Sa'y",
      "Hac",
      "Mekke",
      "Koşmak"
    ],
    "wisdom": "Sa'y ibadetinin bittiği Mekke'deki kutsal tepedir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_20",
    "word": "Sevgili Dost",
    "forbidden": [
      "Sevgili",
      "Dost",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre sevgili bir dost olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_21",
    "word": "Peri Bacaları Taş",
    "forbidden": [
      "Peri Bacaları",
      "Kapadokya",
      "Nevşehir",
      "Rüzgar",
      "Taş"
    ],
    "wisdom": "Rüzgar ve yağmurun tüf taşlarını aşındırarak oluşturduğu şapkalı doğal şekillerdir.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_22",
    "word": "Cami Bahçesi",
    "forbidden": [
      "Cami",
      "Dışarı",
      "Ağaç",
      "Avlu",
      "Şadırvan"
    ],
    "wisdom": "Caminin çevresinde yer alan, cemaatin toplandığı yeşil avludur.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_23",
    "word": "Vefalı Müslüman",
    "forbidden": [
      "Vefalı",
      "Müslüman",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre vefalı bir müslüman olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_24",
    "word": "Mimar Sinan",
    "forbidden": [
      "Süleymaniye",
      "Selimiye",
      "Eser",
      "Mimar",
      "Osmanlı"
    ],
    "wisdom": "Osmanlı'nın en büyük başmimarı olup yüzlerce eser bırakmıştır.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_25",
    "word": "Temiz Öğrenci",
    "forbidden": [
      "Temiz",
      "Öğrenci",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre temiz bir öğrenci olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_26",
    "word": "Tac Mahal Sarayı",
    "forbidden": [
      "Tac Mahal",
      "Hindistan",
      "Saray",
      "Şah Cihan",
      "Beyaz mermer"
    ],
    "wisdom": "Hindistan'da eşi anısına Şah Cihan tarafından beyaz mermerden yaptırılan anıt mezardır.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_27",
    "word": "Van Gölü Canavarı",
    "forbidden": [
      "Van Gölü",
      "Canavar",
      "Efsane",
      "Göl",
      "Büyük"
    ],
    "wisdom": "Van gölünde yaşadığı iddia edilen efsanevi hayali yaratıktır.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_28",
    "word": "Sürpriz Yapmak",
    "forbidden": [
      "Sürpriz",
      "Mutlu",
      "Hediye",
      "Gizli",
      "Arkadaş"
    ],
    "wisdom": "Habersizce yaptığımız güzel şeyler ile sevdiklerimizi şaşırtıp mutlu etmektir.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_29",
    "word": "Tatlı Karpuz",
    "forbidden": [
      "Karpuz",
      "Tatlı",
      "Yaz",
      "Kırmızı",
      "Çekirdek"
    ],
    "wisdom": "Dışı yeşil içi kırmızı, yaz aylarının en sulu meyvesidir.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_30",
    "word": "Basketbol Potası",
    "forbidden": [
      "Pota",
      "Basketbol",
      "Top",
      "Atmak",
      "File"
    ],
    "wisdom": "Basketbol maçlarında topu içinden geçirmeye çalıştığımız fileli halkadır.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_31",
    "word": "İlk Vahiy Hira",
    "forbidden": [
      "Kuran",
      "Sure",
      "Ayet",
      "Okumak",
      "Cüz"
    ],
    "wisdom": "Kur'an-ı Kerim ile ilgili ayet, sure ve okuma kuralları konusudur.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_32",
    "word": "Vefalı Komşu",
    "forbidden": [
      "Vefalı",
      "Komşu",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre vefalı bir komşu olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_33",
    "word": "Eyüp'ün Şifası",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_34",
    "word": "Elif Harfi",
    "forbidden": [
      "Elif",
      "Harf",
      "İlk",
      "Arapça",
      "Çizgi"
    ],
    "wisdom": "Arap alfabesinin düz bir çizgi şeklindeki ilk harfidir.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_35",
    "word": "Nezaket",
    "forbidden": [
      "Kibar",
      "Nazik",
      "Edep",
      "Konuşmak",
      "Lütfen"
    ],
    "wisdom": "İnsanlara karşı nazik ve kibar davranmaktır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_36",
    "word": "Arkeoloji Müzesi",
    "forbidden": [
      "Müze",
      "Kazı",
      "Tarih",
      "Eser",
      "Ziyaret"
    ],
    "wisdom": "Toprak altından çıkarılan çok eski tarihi eserlerin sergilendiği yerdir.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_37",
    "word": "Emin Komşu",
    "forbidden": [
      "Emin",
      "Komşu",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre emin bir komşu olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_38",
    "word": "Bilet Almak",
    "forbidden": [
      "Bilet",
      "Otobüs",
      "Kart",
      "Para",
      "Seyahat"
    ],
    "wisdom": "Otobüse, trene veya uçağa binebilmek için ödeme yapıp geçiş kartı almaktır.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_39",
    "word": "Medine Gülü",
    "forbidden": [
      "Medine",
      "Çiçek",
      "Kokulu",
      "Kırmızı",
      "Peygamber"
    ],
    "wisdom": "Medine şehriyle ve Peygamber sevgisiyle özdeşleşen kokulu güldür.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_40",
    "word": "Eski Usturlap",
    "forbidden": [
      "Usturlap",
      "Yıldız",
      "Alet",
      "Eski",
      "Zaman"
    ],
    "wisdom": "Gökbilimcilerin yıldızların yüksekliğini ölçüp zamanı bulduğu tarihi metal çarktır.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_41",
    "word": "Lütfen Demek",
    "forbidden": [
      "Lütfen",
      "Nezaket",
      "İstemek",
      "Kibar",
      "Kelime"
    ],
    "wisdom": "Birinden yardım isterken 'lütfen' kelimesini kullanmaktır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_42",
    "word": "Gümüş Akçe",
    "forbidden": [
      "Gümüş",
      "Akçe",
      "Para",
      "Osmanlı",
      "Eski"
    ],
    "wisdom": "Osmanlı'da kullanılan gümüş metal ödeme parasıdır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_43",
    "word": "Kur'an Sayfası",
    "forbidden": [
      "Kuran",
      "Sure",
      "Ayet",
      "Okumak",
      "Cüz"
    ],
    "wisdom": "Kur'an-ı Kerim ile ilgili ayet, sure ve okuma kuralları konusudur.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_44",
    "word": "Kurbanlık Koyun",
    "forbidden": [
      "Kurban",
      "Hayvan",
      "Kesmek",
      "Bayram",
      "Koyun"
    ],
    "wisdom": "Kurban bayramında kesilmek üzere alınan küçükbaş hayvandır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_45",
    "word": "Temiz Anne",
    "forbidden": [
      "Temiz",
      "Anne",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre temiz bir anne olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_46",
    "word": "Kelime-i Tevhid",
    "forbidden": [
      "La ilahe illallah",
      "Allah",
      "Bir",
      "Kelime",
      "Söz"
    ],
    "wisdom": "Allah'ın bir olduğunu belirten 'La ilahe illallah' cümlesidir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_47",
    "word": "Vefalı Öğretmen",
    "forbidden": [
      "Vefalı",
      "Öğretmen",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre vefalı bir öğretmen olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_48",
    "word": "Kuran Meali Kitabı",
    "forbidden": [
      "Meal",
      "Kitap",
      "Kuran",
      "Türkçe",
      "Anlam"
    ],
    "wisdom": "Kur'an'ın Türkçe anlamını içeren ciltli kitap baskısıdır.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_49",
    "word": "Bayram Harçlığı",
    "forbidden": [
      "Para",
      "Bayram",
      "Çocuk",
      "Büyükler",
      "El öpmek"
    ],
    "wisdom": "Bayramlarda çocukların büyüklerin elini öperek aldıkları paradır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_50",
    "word": "Yazı Tahtası Kalemi",
    "forbidden": [
      "Tahta",
      "Kalem",
      "Yazı",
      "Mürekkep",
      "Sınıf"
    ],
    "wisdom": "Akıllı tahta veya beyaz yazı tahtası üzerine yazı yazan özel mürekkepli kalemdir.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_51",
    "word": "Çok Çalışkan Olmak",
    "forbidden": [
      "Çalışkan",
      "Ders",
      "Başarı",
      "Okul",
      "Tembel"
    ],
    "wisdom": "Derslerimize çok çalışıp başarılı bir öğrenci olmaktır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_52",
    "word": "Katip Çelebi Cihannüma",
    "forbidden": [
      "Bilim",
      "İcat",
      "Mimar",
      "Tıp",
      "Astronom"
    ],
    "wisdom": "İslam medeniyetinde yetişen ve bilime yön veren bilim insanları konusudur.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_53",
    "word": "Mülk Suresi",
    "forbidden": [
      "Mülk",
      "Tebareke",
      "Sure",
      "Kabir",
      "Koruyucu"
    ],
    "wisdom": "Kabir azabından koruyucu olduğu bildirilen 'Tebareke' suresidir.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_54",
    "word": "Saygılı Öğretmen",
    "forbidden": [
      "Saygılı",
      "Öğretmen",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre saygılı bir öğretmen olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_55",
    "word": "Sümerler",
    "forbidden": [
      "Yazı",
      "Tarih",
      "Çivi",
      "İlk",
      "Uygarlık"
    ],
    "wisdom": "Yazıyı bularak tarih çağlarını başlatan ilk uygarlıktır.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_56",
    "word": "Söğüt Osmanlı",
    "forbidden": [
      "Söğüt",
      "Osmanlı",
      "Kuruluş",
      "Ertuğrul",
      "Şehir"
    ],
    "wisdom": "Osmanlı Beyliği'nin kurulduğu Bilecik iline bağlı tarihi ilçedir.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_57",
    "word": "Abbasi Devleti",
    "forbidden": [
      "Abbasi",
      "Bagdat",
      "Bilim",
      "Halife",
      "Altın Çağ"
    ],
    "wisdom": "Bağdat'ı bilim merkezi yapan, Emevilerden sonra gelen İslam devletidir.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_58",
    "word": "Bisiklet Binmek",
    "forbidden": [
      "Bisiklet",
      "Pedal",
      "Tekerlek",
      "Sürmek",
      "Kask"
    ],
    "wisdom": "İki tekerlekli bisikletin pedallarını çevirerek sürmektir.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_59",
    "word": "Yavuz Sultan Selim",
    "forbidden": [
      "Mısır",
      "Halife",
      "Kutsal Emanet",
      "Padişah",
      "Savaş"
    ],
    "wisdom": "Osmanlı'ya halifeliği kazandıran cesur padişahtır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_60",
    "word": "Kur'an Harfleri",
    "forbidden": [
      "Kuran",
      "Sure",
      "Ayet",
      "Okumak",
      "Cüz"
    ],
    "wisdom": "Kur'an-ı Kerim ile ilgili ayet, sure ve okuma kuralları konusudur.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_61",
    "word": "Cehennem Ateşi",
    "forbidden": [
      "Ateş",
      "Cehennem",
      "Günah",
      "Ceza",
      "Azap"
    ],
    "wisdom": "Ahirette inkarcıların ve günahkarların ceza göreceği yerdir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_62",
    "word": "Polis Karakolu",
    "forbidden": [
      "Polis",
      "Karakol",
      "Güvenlik",
      "Şehir",
      "Bina"
    ],
    "wisdom": "Polislerin güvenliği sağlamak için görev yaptığı emniyet binasıdır.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_63",
    "word": "Sırat Köprüsü",
    "forbidden": [
      "Köprü",
      "Cehennem",
      "Cennet",
      "Geçmek",
      "Ahiret"
    ],
    "wisdom": "Ahirette cehennemin üzerinde kurulu olan ve cennete ulaştıran yoldur.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_64",
    "word": "Zebur Okumak",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_65",
    "word": "Emin Öğrenci",
    "forbidden": [
      "Emin",
      "Öğrenci",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre emin bir öğrenci olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_66",
    "word": "El Yıkamak",
    "forbidden": [
      "El",
      "Su",
      "Sabun",
      "Yıkamak",
      "Temizlik"
    ],
    "wisdom": "Yemeklerden önce ve sonra ellerimizi sabunla temizlemektir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_67",
    "word": "Eyüp'ün Sabrı",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_68",
    "word": "İftar Sofrası",
    "forbidden": [
      "Oruç",
      "Yemek",
      "Akşam",
      "Ezan",
      "Aile"
    ],
    "wisdom": "Oruç açma vaktinde ailece oturulan bereketli sofradır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_69",
    "word": "Tarihi Camiler",
    "forbidden": [
      "Cami",
      "Eski",
      "Tarihi",
      "Sultanahmet",
      "Süleymaniye"
    ],
    "wisdom": "Tarihimizden miras kalan mimari şaheser camilerimizdir.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_70",
    "word": "Ramazan Davulcusu",
    "forbidden": [
      "Sahur",
      "Gece",
      "Davul",
      "Çalmak",
      "Mani"
    ],
    "wisdom": "Sahurda insanları davul çalarak ve maniler söyleyerek uyandıran kişidir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_71",
    "word": "İbn-i Sina",
    "forbidden": [
      "Tıp",
      "Hekim",
      "Avicenna",
      "Kanun",
      "Doktor"
    ],
    "wisdom": "Dünyaca ünlü hekimimizdir, tıp alanında kitapları Avrupa'da okutulmuştur.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_72",
    "word": "Peygamberimizin Hayatı",
    "forbidden": [
      "Peygamber",
      "Elçi",
      "Allah",
      "Kuran",
      "Vahiy"
    ],
    "wisdom": "Peygamberlikle ilgili kutsal bir kavramı ifade eder.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_73",
    "word": "Su",
    "forbidden": [
      "İçmek",
      "Sıvı",
      "H2O",
      "Nehir",
      "Yaşam"
    ],
    "wisdom": "Canlıların hayatta kalması için en temel sıvı maddedir.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_74",
    "word": "Lagari Hasan Uçuşu",
    "forbidden": [
      "Lagari",
      "Uçuş",
      "Roket",
      "Barut",
      "Osmanlı"
    ],
    "wisdom": "Dünyada ilk kez roketle gökyüzüne dikey uçan Osmanlı mucididir.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_75",
    "word": "Hz. Ali",
    "forbidden": [
      "İlim",
      "Halife",
      "Damat",
      "Zülfikar",
      "Dördüncü"
    ],
    "wisdom": "Peygamberimizin damadı, kahraman ve ilim kapısı halifedir.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_76",
    "word": "Malazgirt Ovası",
    "forbidden": [
      "Malazgirt",
      "Savaş",
      "Alparslan",
      "1071",
      "Muş"
    ],
    "wisdom": "1071 Malazgirt meydan savaşının yapıldığı Muş ilindeki tarihi ovadır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_77",
    "word": "Kadir Gecesi Kuran",
    "forbidden": [
      "Kadir Gecesi",
      "Kuran",
      "İnmek",
      "Ramazan",
      "Gece"
    ],
    "wisdom": "Kur'an-ı Kerim'in Kadir gecesinde indirilmeye başlanması olayıdır.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_78",
    "word": "Ertuğrul Gazi",
    "forbidden": [
      "Ertuğrul",
      "Söğüt",
      "Osmanlı",
      "Baba",
      "Kayı"
    ],
    "wisdom": "Osmanlı Devleti'nin kurucusu Osman Bey'in babası olan Kayı lideridir.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_79",
    "word": "İstiklal Marşı Okunuşu",
    "forbidden": [
      "Türkiye",
      "Deniz",
      "Dağ",
      "Tarih",
      "Şehir"
    ],
    "wisdom": "Coğrafya ve tarih derslerinde öğrendiğimiz temel konulardandır.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_80",
    "word": "Kızakla Kaymak",
    "forbidden": [
      "Kızak",
      "Kar",
      "Kaymak",
      "Kış",
      "Soğuk"
    ],
    "wisdom": "Karda kızak üzerine oturup tepeden aşağıya hızla kaymaktır.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_81",
    "word": "Sadrazam Odası",
    "forbidden": [
      "Sadrazam",
      "Vezir",
      "Padişah",
      "Saray",
      "Başbakan"
    ],
    "wisdom": "Osmanlı'da başbakan olan sadrazamın saraydaki çalışma odasıdır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_82",
    "word": "Komşu Komşunun Külüne Muhtaçtır",
    "forbidden": [
      "Komşu",
      "Yardım",
      "Kül",
      "Muhtaç",
      "Atasözü"
    ],
    "wisdom": "Komşuların birbirine her zaman muhtaç olduğunu anlatan atasözüdür.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_83",
    "word": "Hz. Musa",
    "forbidden": [
      "Asa",
      "Kızıldeniz",
      "Firavun",
      "Tur Dağı",
      "Tevrat"
    ],
    "wisdom": "Asasıyla Kızıldeniz'i ikiye yaran peygamberdir.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_84",
    "word": "Şarkı Söylemek",
    "forbidden": [
      "Şarkı",
      "Ses",
      "Söylemek",
      "Müzik",
      "Melodi"
    ],
    "wisdom": "Güzel bir müzik eşliğinde mikrofonla veya koroda şarkı seslendirmektir.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_85",
    "word": "Sevap",
    "forbidden": [
      "İyilik",
      "Ödül",
      "Allah",
      "Cennet",
      "Kazanmak"
    ],
    "wisdom": "Güzel davranışlar sergilediğimizde kazandığımız puanlardır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_86",
    "word": "Uzungöl Trabzon",
    "forbidden": [
      "Trabzon",
      "Göl",
      "Uzungöl",
      "Yeşil",
      "Turizm"
    ],
    "wisdom": "Trabzon ilimizin dağlar arasında yer alan turistik gölüdür.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_87",
    "word": "Kutsal Kitap",
    "forbidden": [
      "Kitap",
      "Kuran",
      "İlahi",
      "Dört",
      "Kutsal"
    ],
    "wisdom": "Allah tarafından peygamberlere indirilen ilahi kitapların genel adıdır.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_88",
    "word": "Sümela Manastırı",
    "forbidden": [
      "Manastır",
      "Trabzon",
      "Kaya",
      "Tarih",
      "Dağ"
    ],
    "wisdom": "Trabzon Maçka'da dik bir dağ yamacındaki kayalara oyulmuş tarihi manastırdır.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_89",
    "word": "Cumhuriyet",
    "forbidden": [
      "29 Ekim",
      "1923",
      "Atatürk",
      "Devlet",
      "Bayram"
    ],
    "wisdom": "Türkiye'nin 29 Ekim 1923'te ilan edilen yönetim şeklidir.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_90",
    "word": "Selimiye Camii",
    "forbidden": [
      "Cami",
      "Edirne",
      "Mimar Sinan",
      "Ustalık",
      "Tarihi"
    ],
    "wisdom": "Mimar Sinan'ın Edirne'ye yaptığı 'ustalık eserim' dediği 4 minareli camidir.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_91",
    "word": "Mekke'den Medine'ye",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_92",
    "word": "Anadolu Hisarı",
    "forbidden": [
      "Hisar",
      "İstanbul",
      "Boğaz",
      "Yıldırım Bayezid",
      "Kale"
    ],
    "wisdom": "Yıldırım Bayezid tarafından boğazın Anadolu yakasına yaptırılan tarihi kaledir.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_93",
    "word": "İlk Müslüman Çocuk",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_94",
    "word": "Ramazan Orucu",
    "forbidden": [
      "Oruç",
      "Ramazan",
      "Sahur",
      "İftar",
      "Farz"
    ],
    "wisdom": "Ramazan ayında tutulması her Müslümana farz olan oruç ibadetidir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_95",
    "word": "Saat Akrebi",
    "forbidden": [
      "Saat",
      "Akrep",
      "Saat başı",
      "Kısa",
      "Dönmek"
    ],
    "wisdom": "Saat üzerinde saat başlarını gösteren kısa çubuktur.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_96",
    "word": "Cami Friend",
    "forbidden": [
      "İbadet",
      "Din",
      "Müslüman",
      "Allah",
      "İslam"
    ],
    "wisdom": "İslam dininde yer alan temel kavram ve ibadetlerdendir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_97",
    "word": "Çalışkan Arkadaş",
    "forbidden": [
      "Çalışkan",
      "Arkadaş",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre çalışkan bir arkadaş olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_98",
    "word": "Yalan Söylememek",
    "forbidden": [
      "Yalan",
      "Doğru",
      "Dürüst",
      "Söz",
      "Ahlak"
    ],
    "wisdom": "Her zaman doğru konuşup asla yalana başvurmamaktır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_99",
    "word": "Dünyanın Yuvarlaklığı",
    "forbidden": [
      "Dünya",
      "Yuvarlak",
      "Küme",
      "Biruni",
      "Dönmek"
    ],
    "wisdom": "Biruni'nin asırlar önce kanıtladığı Dünya'nın şeklidir.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_100",
    "word": "Bilim Kütüphanesi",
    "forbidden": [
      "Kütüphane",
      "Bilim",
      "Kitap",
      "Okumak",
      "Öğrenmek"
    ],
    "wisdom": "Sadece bilimsel kitapların ve araştırmaların bulunduğu kütüphanedir.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_101",
    "word": "Sure Adı",
    "forbidden": [
      "Sure",
      "İsim",
      "Kuran",
      "Fatiha",
      "Bakara"
    ],
    "wisdom": "Kur'an'daki 114 surenin her birinin taşıdığı isimdir.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_102",
    "word": "Temizlik",
    "forbidden": [
      "Su",
      "Sabun",
      "Yıkamak",
      "Abdest",
      "İman"
    ],
    "wisdom": "Bedenimizi, elbiselerimizi ve çevremizi temiz tutmaktır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_103",
    "word": "Büyük Okyanus Suyu",
    "forbidden": [
      "Okyanus",
      "Su",
      "Mavi",
      "Derin",
      "Balık"
    ],
    "wisdom": "Dünyanın en büyük okyanusunun tuzlu mavi suyudur.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_104",
    "word": "Dürüst Davranmak",
    "forbidden": [
      "Doğru",
      "Yalan",
      "Dürüst",
      "Ahlak",
      "Güven"
    ],
    "wisdom": "Hiç kimseyi aldatmadan her zaman dürüst hareket etmektir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_105",
    "word": "Güleryüzlü Dost",
    "forbidden": [
      "Güleryüzlü",
      "Dost",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre güleryüzlü bir dost olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_106",
    "word": "İstanbul Boğazı Köprüsü",
    "forbidden": [
      "Türkiye",
      "Deniz",
      "Dağ",
      "Tarih",
      "Şehir"
    ],
    "wisdom": "Coğrafya ve tarih derslerinde öğrendiğimiz temel konulardandır.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_107",
    "word": "Asya Kıtası",
    "forbidden": [
      "Kıta",
      "Asya",
      "Avrupa",
      "Büyük",
      "Dünya"
    ],
    "wisdom": "Dünya üzerindeki en kalabalık ve en büyük toprak kıtasıdır.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_108",
    "word": "Selamlaşmak",
    "forbidden": [
      "Selam",
      "Merhaba",
      "Söylemek",
      "Müslüman",
      "Karşılaşmak"
    ],
    "wisdom": "Karşılaştığımızda birbirimize selam verip hal hatır sormaktır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_109",
    "word": "Yeşil Türbe Bursa",
    "forbidden": [
      "Bursa",
      "Yeşil",
      "Türbe",
      "Çelebi Mehmed",
      "Çini"
    ],
    "wisdom": "Bursa'da bulunan, içi ve dışı turkuaz çinilerle kaplı ünlü padişah türbesidir.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_110",
    "word": "Güzel Kardeş",
    "forbidden": [
      "Güzel",
      "Kardeş",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre güzel bir kardeş olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_111",
    "word": "Kutup Ayıları",
    "forbidden": [
      "Kutup",
      "Ayı",
      "Beyaz",
      "Soğuk",
      "Buzul"
    ],
    "wisdom": "Kuzey kutbunda karlar ve buzullar üzerinde yaşayan büyük beyaz ayılardır.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_112",
    "word": "Dürüst İnsan",
    "forbidden": [
      "Dürüst",
      "İnsan",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre dürüst bir i̇nsan olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_113",
    "word": "Zemzem Bardağı",
    "forbidden": [
      "Su",
      "Zemzem",
      "İçmek",
      "Hacı",
      "Bardak"
    ],
    "wisdom": "Zemzem suyunu misafirlere ikram etmek için kullanılan küçük bardaktır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_114",
    "word": "Mus'ab'ın Sancağı",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_115",
    "word": "El-Harezmi Cebir Kitabı",
    "forbidden": [
      "El-Harezmi",
      "Cebir",
      "Matematik",
      "Sayı",
      "Kitap"
    ],
    "wisdom": "Harezmi'nin cebir kurallarını dünyaya öğrettiği tarihi kitabıdır.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_116",
    "word": "Osmanlı Roketi",
    "forbidden": [
      "Roket",
      "Lagari",
      "Barut",
      "Uçmak",
      "Osmanlı"
    ],
    "wisdom": "Lagari'nin uçmak için tasarladığı barut fıçıları içeren ilk roket prototipidir.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_117",
    "word": "Allahu Ekber Demek",
    "forbidden": [
      "Tekbir",
      "Büyük",
      "Namaz",
      "Söylemek",
      "Başlamak"
    ],
    "wisdom": "Allah'ın en büyük olduğunu ilan eden tekbir sözünü söylemektir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_118",
    "word": "Cebelitarık Boğazı Yolu",
    "forbidden": [
      "Cebelitarık",
      "Boğaz",
      "Akdeniz",
      "Tarık",
      "İspanya"
    ],
    "wisdom": "Tarık bin Ziyad'ın adını taşıyan, Akdeniz'in çıkış kapısı olan boğazdır.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_119",
    "word": "Tatlı Komşu",
    "forbidden": [
      "Tatlı",
      "Komşu",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre tatlı bir komşu olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_120",
    "word": "Sevr Mağarası",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_121",
    "word": "Abdest",
    "forbidden": [
      "Su",
      "Temizlik",
      "Namaz",
      "Yıkamak",
      "Uzuv"
    ],
    "wisdom": "Abdest, hem bedenimizi hem ruhumuzu temizleyen ibadettir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_122",
    "word": "Yusuf'un Kuyusu",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_123",
    "word": "Sadık Öğretmen",
    "forbidden": [
      "Sadık",
      "Öğretmen",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre sadık bir öğretmen olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_124",
    "word": "Nuh Tufanı",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_125",
    "word": "Gazali Fikir Kitapları",
    "forbidden": [
      "Bilim",
      "İcat",
      "Mimar",
      "Tıp",
      "Astronom"
    ],
    "wisdom": "İslam medeniyetinde yetişen ve bilime yön veren bilim insanları konusudur.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_126",
    "word": "Barışçıl Olmak",
    "forbidden": [
      "Barış",
      "Kavga",
      "Uyumlu",
      "Sakin",
      "Sevgi"
    ],
    "wisdom": "Her zaman kavga ve gürültüden uzak, barıştan yana olmaktır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_127",
    "word": "Temiz Mümin",
    "forbidden": [
      "Temiz",
      "Mümin",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre temiz bir mümin olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_128",
    "word": "Güzel Anne",
    "forbidden": [
      "Güzel",
      "Anne",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre güzel bir anne olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_129",
    "word": "Gözlemevi Aletleri",
    "forbidden": [
      "Rasathane",
      "Alet",
      "Teleskop",
      "Usturlap",
      "Gözlem"
    ],
    "wisdom": "Yıldızların konumunu ölçmek için kullanılan tarihi optik araçlardır.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_130",
    "word": "Avrupa Kıtası",
    "forbidden": [
      "Kıta",
      "Avrupa",
      "Asya",
      "Batı",
      "Ülkeler"
    ],
    "wisdom": "Dünya'nın batısında yer alan, gelişmiş ülkelerin olduğu kıtadır.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_131",
    "word": "Uluğ Bey Gözlemevi",
    "forbidden": [
      "Gözlemevi",
      "Rasathane",
      "Semerkant",
      "Uluğ Bey",
      "Yıldız"
    ],
    "wisdom": "Uluğ Bey'in Semerkant'ta gök cisimlerini incelemek için kurduğu rasathanedir.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_132",
    "word": "Sevgili Çocuk",
    "forbidden": [
      "Sevgili",
      "Çocuk",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre sevgili bir çocuk olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_133",
    "word": "Hacerü'l-Esved Hakemliği",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_134",
    "word": "İlk Uçan Müslümanlar",
    "forbidden": [
      "Bilim",
      "İcat",
      "Mimar",
      "Tıp",
      "Astronom"
    ],
    "wisdom": "İslam medeniyetinde yetişen ve bilime yön veren bilim insanları konusudur.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_135",
    "word": "Edep",
    "forbidden": [
      "Ahlak",
      "Haya",
      "Terbiye",
      "Davranış",
      "Utanmak"
    ],
    "wisdom": "Toplumda terbiyeli ve saygılı davranma kurallarıdır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_136",
    "word": "Kuran Sayfaları",
    "forbidden": [
      "Sayfa",
      "Kuran",
      "Yaprak",
      "Okumak",
      "Mushaf"
    ],
    "wisdom": "Kur'an-ı Kerim kitabının her bir yaprak sayfasıdır.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_137",
    "word": "Dürüst Dost",
    "forbidden": [
      "Dürüst",
      "Dost",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre dürüst bir dost olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_138",
    "word": "Haram",
    "forbidden": [
      "Yasak",
      "Günah",
      "Allah",
      "Yemek",
      "Kötü"
    ],
    "wisdom": "Dinimizin kesinlikle yapmayın dediği zararlı ve kötü işlerdir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_139",
    "word": "Hac",
    "forbidden": [
      "Kabe",
      "Mekke",
      "Arafat",
      "İhram",
      "Tavaf"
    ],
    "wisdom": "Hac ibadeti için dünyanın her yerinden Müslümanlar Mekke'ye gelir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_140",
    "word": "Yıldız Kayan Gece",
    "forbidden": [
      "Yıldız",
      "Kaymak",
      "Gece",
      "Dilek",
      "Gökyüzü"
    ],
    "wisdom": "Atmosfere giren göktaşlarının gece gökyüzünde ışık çizgisi oluşturmasıdır.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_141",
    "word": "Çok Yönlü Bilgin",
    "forbidden": [
      "Bilgin",
      "Matematik",
      "Tıp",
      "Astronom",
      "Biruni"
    ],
    "wisdom": "Aynı anda hem astronomi, hem matematik hem coğrafya bilen büyük bilim insanıdır.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_142",
    "word": "Kardan Adam Yapmak",
    "forbidden": [
      "Kar",
      "Kardan adam",
      "Kış",
      "Havuç",
      "Kömür"
    ],
    "wisdom": "Kışın yağan karları üst üste koyarak havuç burunlu adam yapmaktır.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_143",
    "word": "Yüzme Havuzu",
    "forbidden": [
      "Havuz",
      "Yüzmek",
      "Su",
      "Mayo",
      "Serinlemek"
    ],
    "wisdom": "Yazın serinlemek veya spor yapmak için girilen geniş su dolu havuzdur.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_144",
    "word": "Çalışkan Kardeş",
    "forbidden": [
      "Çalışkan",
      "Kardeş",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre çalışkan bir kardeş olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_145",
    "word": "Fil Suresi",
    "forbidden": [
      "Fil",
      "Sure",
      "Ebrehe",
      "Kabe",
      "Kuşlar"
    ],
    "wisdom": "Kabe'yi yıkmaya gelen Ebrehe ordusunun helakini anlatan suredir.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_146",
    "word": "Ulu Cami Bursa",
    "forbidden": [
      "Cami",
      "Bursa",
      "Şadırvan",
      "20 kubbe",
      "Tarihi"
    ],
    "wisdom": "Bursa'da Yıldırım Bayezid tarafından yaptırılan, içinde şadırvan olan 20 kubbeli tarihi camidir.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_147",
    "word": "18 Mart Çanakkale",
    "forbidden": [
      "18 Mart",
      "Çanakkale",
      "Zafer",
      "Savaş",
      "Tarih"
    ],
    "wisdom": "Çanakkale deniz zaferinin kazanıldığı ve şehitlerimizi andığımız gündür.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_148",
    "word": "Hendek Savaşında Hendek",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_149",
    "word": "Ayasofya Camii Şerifi",
    "forbidden": [
      "Ayasofya",
      "Cami",
      "Fatih",
      "İstanbul",
      "Tarihi"
    ],
    "wisdom": "Fatih'in camiye çevirdiği, İstanbul'un simgesi olan muhteşem mabetdir.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_150",
    "word": "Hacı Uğurlama",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_151",
    "word": "Kapıyı Açık Tutmak",
    "forbidden": [
      "Kapı",
      "Açık",
      "Nezaket",
      "Arka",
      "Geçmek"
    ],
    "wisdom": "Arkamızdan gelen birisi olduğunda kapıyı tutma nezaketidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_152",
    "word": "Tatlı Müslüman",
    "forbidden": [
      "Tatlı",
      "Müslüman",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre tatlı bir müslüman olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_153",
    "word": "Siyer Dersi",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_154",
    "word": "Karadeniz Dalgaları",
    "forbidden": [
      "Karadeniz",
      "Deniz",
      "Dalga",
      "Hırçın",
      "Kuzey"
    ],
    "wisdom": "Kuzeyimizdeki Karadeniz'in özellikle kışın oluşan hırçın dalgalarıdır.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_155",
    "word": "Piri Reis Gemisi",
    "forbidden": [
      "Gemi",
      "Deniz",
      "Piri Reis",
      "Osmanlı",
      "Yelken"
    ],
    "wisdom": "Piri Reis'in deniz seferlerinde kullandığı ahşap yelkenli amiral gemisidir.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_156",
    "word": "Sevap Kazanmak",
    "forbidden": [
      "İyilik",
      "Ödül",
      "Sevap",
      "Cennet",
      "Allah"
    ],
    "wisdom": "Allah'ın sevdiği güzel davranışları sergileyerek sevap almaktır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_157",
    "word": "Mimar Sinan Eserleri",
    "forbidden": [
      "Mimar Sinan",
      "Cami",
      "Eser",
      "Köprü",
      "Osmanlı"
    ],
    "wisdom": "Büyük mimarımızın yaptığı Süleymaniye ve Selimiye gibi yapılardır.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_158",
    "word": "Sevgili Baba",
    "forbidden": [
      "Sevgili",
      "Baba",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre sevgili bir baba olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_159",
    "word": "Suffe Öğrencileri",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_160",
    "word": "Çalışkan Çocuk",
    "forbidden": [
      "Çalışkan",
      "Çocuk",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre çalışkan bir çocuk olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_161",
    "word": "Dolmabahçe Sarayı",
    "forbidden": [
      "Saray",
      "İstanbul",
      "Osmanlı",
      "Boğaz",
      "Müze"
    ],
    "wisdom": "İstanbul Boğazı kenarındaki görkemli geç dönem Osmanlı sarayıdır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_162",
    "word": "Dini Bayramlar",
    "forbidden": [
      "Bayram",
      "Ramazan",
      "Kurban",
      "Dini",
      "İki"
    ],
    "wisdom": "Müslümanların kutsal bayramları olan Ramazan ve Kurban bayramlarıdır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_163",
    "word": "Namaz Saati",
    "forbidden": [
      "Saat",
      "Namaz",
      "Zaman",
      "Ezan",
      "Vakit"
    ],
    "wisdom": "Günde beş vakit kılınan namazların vakit saatleridir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_164",
    "word": "Sevgili Anne",
    "forbidden": [
      "Sevgili",
      "Anne",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre sevgili bir anne olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_165",
    "word": "Kuran Dersi",
    "forbidden": [
      "Ders",
      "Kuran",
      "Okul",
      "Öğrenmek",
      "Elif Ba"
    ],
    "wisdom": "Okullarda veya kurslarda Kur'an okumayı öğrendiğimiz derstir.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_166",
    "word": "Piri Reis",
    "forbidden": [
      "Harita",
      "Denizci",
      "Dünya",
      "Amerika",
      "Kitab-ı Bahriye"
    ],
    "wisdom": "İlk dünya haritasını çizen ünlü Osmanlı amirali ve denizcisidir.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_167",
    "word": "En Uzun Sure",
    "forbidden": [
      "Bakara",
      "Sure",
      "Uzun",
      "286",
      "Kuran"
    ],
    "wisdom": "Kur'an'ın en uzun suresi olan 286 ayetlik Bakara suresidir.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_168",
    "word": "Hz. Ali'nin Cesareti",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_169",
    "word": "Kardeş Sevgisi",
    "forbidden": [
      "Kardeş",
      "Sevgi",
      "Aile",
      "Abla",
      "Abi"
    ],
    "wisdom": "Kardeşlerimizle iyi anlaşıp onları çok sevme duygusudur.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_170",
    "word": "Tarihi Saraylar",
    "forbidden": [
      "Saray",
      "Eski",
      "Tarihi",
      "Topkapı",
      "Dolmabahçe"
    ],
    "wisdom": "Devlet yöneticilerinin kaldığı tarihi miras binalarımızdır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_171",
    "word": "Şehzadebaşı Camii",
    "forbidden": [
      "Cami",
      "İstanbul",
      "Mimar Sinan",
      "Çıraklık",
      "Tarihi"
    ],
    "wisdom": "Mimar Sinan'ın İstanbul'da yaptığı 'çıraklık eserim' dediği camidir.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_172",
    "word": "Temiz Kardeş",
    "forbidden": [
      "Temiz",
      "Kardeş",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre temiz bir kardeş olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_173",
    "word": "Panama Kanalı Geçişi",
    "forbidden": [
      "Panama",
      "Kanal",
      "Amerika",
      "Gemi",
      "Geçiş"
    ],
    "wisdom": "Atlas ve Büyük Okyanus'u birbirine bağlayan büyük su geçişidir.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_174",
    "word": "Gemileri Karadan Yürütmek",
    "forbidden": [
      "Gemi",
      "Karadan",
      "Haliç",
      "Fatih",
      "İstanbul"
    ],
    "wisdom": "Fatih Sultan Mehmed'in gemileri bir gecede karadan yürüterek Haliç'e indirmesi dehasıdır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_175",
    "word": "Güleryüzlü İnsan",
    "forbidden": [
      "Güleryüzlü",
      "İnsan",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre güleryüzlü bir i̇nsan olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_176",
    "word": "15 Temmuz Demokrasi Günü",
    "forbidden": [
      "15 Temmuz",
      "Demokrasi",
      "Şehit",
      "Millet",
      "Destan"
    ],
    "wisdom": "Milletimizin darbe girişimine karşı yazdığı kahramanlık destanı günüdür.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_177",
    "word": "II. Abdülhamid",
    "forbidden": [
      "Abdülhamid",
      "Padişah",
      "Osmanlı",
      "Hicaz Demiryolu",
      "Son dönem"
    ],
    "wisdom": "Osmanlı'nın son döneminde devleti akıllıca yöneten dahi padişahtır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_178",
    "word": "Namaz Rekatı",
    "forbidden": [
      "Rekat",
      "Namaz",
      "Sayı",
      "Rüku",
      "Secde"
    ],
    "wisdom": "Namazın rüku ve iki secdeden oluşan her bir bölümüdür.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_179",
    "word": "Tatlı Öğrenci",
    "forbidden": [
      "Tatlı",
      "Öğrenci",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre tatlı bir öğrenci olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_180",
    "word": "Oksijen",
    "forbidden": [
      "Hava",
      "Nefes",
      "Yaşam",
      "Ciğer",
      "Gaz"
    ],
    "wisdom": "Nefes alırken içimize çektiğimiz hayat kaynağı gazdır.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_181",
    "word": "Bilgisayar Ekranı",
    "forbidden": [
      "Bilgisayar",
      "Ekran",
      "Monitör",
      "Bakmak",
      "Görüntü"
    ],
    "wisdom": "Bilgisayardaki görüntüleri ve oyunları gördüğümüz monitör kısmıdır.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_182",
    "word": "Barut Roket Lagari",
    "forbidden": [
      "Lagari",
      "Roket",
      "Barut",
      "Uçmak",
      "Padişah"
    ],
    "wisdom": "Lagari Hasan Çelebi'nin barutlu roketle yaptığı tarihi uçuş çalışmasıdır.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_183",
    "word": "Süleymaniye Camii",
    "forbidden": [
      "Cami",
      "İstanbul",
      "Mimar Sinan",
      "Kalfalık",
      "Tarihi"
    ],
    "wisdom": "Mimar Sinan'ın İstanbul'da yaptığı 'kalfalık eserim' dediği eşsiz camidir.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_184",
    "word": "Seyit Onbaşı Mermisi",
    "forbidden": [
      "Seyit Onbaşı",
      "Mermi",
      "Ağır",
      "Çanakkale",
      "Savaş"
    ],
    "wisdom": "Seyit Onbaşı'nın tek başına sırtlayıp kaldırdığı 276 kiloluk dev top mermisidir.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_185",
    "word": "Kurban",
    "forbidden": [
      "Bayram",
      "Kesmek",
      "Hayvan",
      "Paylaşmak",
      "Et"
    ],
    "wisdom": "Kurban bayramında kesilen ve fakirlerle paylaşılan ettir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_186",
    "word": "Emin Öğretmen",
    "forbidden": [
      "Emin",
      "Öğretmen",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre emin bir öğretmen olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_187",
    "word": "Eski Doktorlar",
    "forbidden": [
      "Hekim",
      "Doktor",
      "Tıp",
      "İbn-i Sina",
      "Eski"
    ],
    "wisdom": "Tarihte yaşamış şifacı lokman hekimler ve tıp bilginleridir.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_188",
    "word": "Öğle Namazı",
    "forbidden": [
      "Namaz",
      "Vakit",
      "Öğle",
      "Güneş",
      "Kılmak"
    ],
    "wisdom": "Öğle namazı, günün ikinci namazı olup öğle vaktinde kılınır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_189",
    "word": "Tatlı Dil",
    "forbidden": [
      "Yumuşak",
      "Söz",
      "Güzel",
      "Konuşmak",
      "Sadaka"
    ],
    "wisdom": "Yumuşak ve kırıcı olmayan güzel sözlerle konuşmaktır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_190",
    "word": "Çalışkan Müslüman",
    "forbidden": [
      "Çalışkan",
      "Müslüman",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre çalışkan bir müslüman olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_191",
    "word": "Elhamra Sarayı Bahçesi",
    "forbidden": [
      "Elhamra",
      "Saray",
      "Endülüs",
      "İspanya",
      "Bahçe"
    ],
    "wisdom": "Endülüs medeniyetinin şaheseri olan Elhamra sarayının havuzlu bahçesidir.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_192",
    "word": "Emin Arkadaş",
    "forbidden": [
      "Emin",
      "Arkadaş",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre emin bir arkadaş olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_193",
    "word": "Minare",
    "forbidden": [
      "Cami",
      "Ezan",
      "Yüksek",
      "Kule",
      "Şerefe"
    ],
    "wisdom": "Camilerde ezan okunan o ince ve uzun kulelerdir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_194",
    "word": "Ayet Meali",
    "forbidden": [
      "Ayet",
      "Meal",
      "Türkçe",
      "Anlam",
      "Çeviri"
    ],
    "wisdom": "Ayetlerin Türkçe kısa anlamına ayet meali denir.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_195",
    "word": "Gök Gözlem Evi",
    "forbidden": [
      "Gözlemevi",
      "Rasathane",
      "Gök",
      "Yıldız",
      "Teleskop"
    ],
    "wisdom": "Uzayı ve yıldızları teleskopla izlemek için kurulan gözlemevidir.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_196",
    "word": "Peygamberimizin Kılıcı",
    "forbidden": [
      "Peygamber",
      "Kılıç",
      "Kutsal Emanet",
      "Topkapı",
      "Demir"
    ],
    "wisdom": "Topkapı sarayında korunan Peygamber Efendimiz'e ait mübarek kılıçtır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_197",
    "word": "Bakara Suresi",
    "forbidden": [
      "Bakara",
      "En uzun",
      "Sure",
      "İnek",
      "Ayetel Kürsi"
    ],
    "wisdom": "Kur'an-ı Kerim'in en uzun suresi olup içinde Ayetel Kürsi yer alır.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_198",
    "word": "Akşam Namazı",
    "forbidden": [
      "Namaz",
      "Ezan",
      "Akşam",
      "Güneş",
      "Kılmak"
    ],
    "wisdom": "Akşam namazı, güneş battıktan hemen sonra kılınır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_199",
    "word": "İslam Bilim Tarihi",
    "forbidden": [
      "Tarih",
      "Savaş",
      "Zafer",
      "Asker",
      "Eski"
    ],
    "wisdom": "Milletimizin geçmişte kazandığı şanlı tarihi başarılardandır.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_200",
    "word": "Cehennem",
    "forbidden": [
      "Ateş",
      "Ceza",
      "Kötü",
      "Günah",
      "Azap"
    ],
    "wisdom": "Cehennem, kötülük yapanların ve inanmayanların ceza çekeceği yerdir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_201",
    "word": "Dürüst Tüccar",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_202",
    "word": "Öğrenci Sırası",
    "forbidden": [
      "Sıra",
      "Öğrenci",
      "Masa",
      "Sınıf",
      "Oturmak"
    ],
    "wisdom": "Sınıfta ders dinlerken üzerine kitap koyup oturduğumuz ahşap masadır.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_203",
    "word": "Müzik Aleti",
    "forbidden": [
      "Enstrüman",
      "Müzik",
      "Gitar",
      "Flüt",
      "Çalmak"
    ],
    "wisdom": "Gitar, flüt, piyano gibi ses çıkarıp şarkı çalmaya yarayan aletlerdir.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_204",
    "word": "Vefalı Arkadaş",
    "forbidden": [
      "Vefalı",
      "Arkadaş",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre vefalı bir arkadaş olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_205",
    "word": "Cömert Öğrenci",
    "forbidden": [
      "Cömert",
      "Öğrenci",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre cömert bir öğrenci olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_206",
    "word": "Hatmetmek",
    "forbidden": [
      "Hatimi",
      "Kuran",
      "Başlangıç",
      "Son",
      "Bitirmek"
    ],
    "wisdom": "Kur'an'ın tamamını baştan sona kadar okuyup bitirmektir.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_207",
    "word": "Cüz",
    "forbidden": [
      "Sayfa",
      "20",
      "30",
      "Kuran",
      "Bölüm"
    ],
    "wisdom": "Kur'an'ın her biri 20 sayfadan oluşan 30 bölümüdür.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_208",
    "word": "Öfkesini Yenmek",
    "forbidden": [
      "Öfke",
      "Kızmak",
      "Sakin",
      "Sabır",
      "Kavga"
    ],
    "wisdom": "Çok kızdığımız anlarda derin nefes alıp sakin kalabilmektir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_209",
    "word": "Safranbolu Evleri",
    "forbidden": [
      "Safranbolu",
      "Ev",
      "Tarihi",
      "Ahşap",
      "Karabük"
    ],
    "wisdom": "Karabük ilimizdeki geleneksel Türk mimarisini yansıtan tarihi ahşap evlerdir.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_210",
    "word": "Güleryüz",
    "forbidden": [
      "Tebessüm",
      "Sadaka",
      "Yüz",
      "Mutlu",
      "Ahlak"
    ],
    "wisdom": "İnsanlarla karşılaşınca yüzümüzde beliren tatlı tebessümdür.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_211",
    "word": "Bal Arısı",
    "forbidden": [
      "Arı",
      "Bal",
      "Kovan",
      "İğne",
      "Çiçek"
    ],
    "wisdom": "Çiçeklerden polen toplayarak kovanlarında şifalı bal üreten arılardır.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_212",
    "word": "Sadaka Vermek",
    "forbidden": [
      "Sadaka",
      "Para",
      "İyilik",
      "Fakir",
      "Sevab"
    ],
    "wisdom": "Allah rızası için fakirlere para vermektir veya iyilik yapmaktır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_213",
    "word": "Hz. Davud",
    "forbidden": [
      "Ses",
      "Zebur",
      "Demir",
      "Zırh",
      "Kral"
    ],
    "wisdom": "Çok güzel sesi olan ve demiri bükebilen peygamberdir.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_214",
    "word": "Tatlı Öğretmen",
    "forbidden": [
      "Tatlı",
      "Öğretmen",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre tatlı bir öğretmen olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_215",
    "word": "TBMM Binası Ankara",
    "forbidden": [
      "Meclis",
      "TBMM",
      "Ankara",
      "Milletvekili",
      "23 Nisan"
    ],
    "wisdom": "Ankara'da milletvekillerinin toplanıp kanun yaptığı millet meclisi binasıdır.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_216",
    "word": "Cami Kürsüsü",
    "forbidden": [
      "Vaaz",
      "Cami",
      "Hoca",
      "Konuşma",
      "Yüksek"
    ],
    "wisdom": "Camilerde vaaz vermek için hocanın oturduğu yüksek koltuktur.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_217",
    "word": "Kevser Suresi",
    "forbidden": [
      "Kısa",
      "Sure",
      "Nehir",
      "Peygamber",
      "Ayet"
    ],
    "wisdom": "Kur'an'ın 3 ayetle en kısa olan suresidir.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_218",
    "word": "Vav Harfi",
    "forbidden": [
      "Vav",
      "Harf",
      "Arapça",
      "Yuvarlak",
      "Namaz"
    ],
    "wisdom": "Arap alfabesinde boynu bükük insanı temsil eden anlamlı harftir.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_219",
    "word": "İlk Peygamber",
    "forbidden": [
      "Peygamber",
      "Elçi",
      "Allah",
      "Kuran",
      "Vahiy"
    ],
    "wisdom": "Peygamberlikle ilgili kutsal bir kavramı ifade eder.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_220",
    "word": "Çalışkan Mümin",
    "forbidden": [
      "Çalışkan",
      "Mümin",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre çalışkan bir mümin olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_221",
    "word": "Selam Vermek",
    "forbidden": [
      "Selamün Aleyküm",
      "Söylemek",
      "Merhaba",
      "Konuşmak",
      "İyilik"
    ],
    "wisdom": "Müslümanların karşılaştıklarında birbirlerine sağlık dilemesidir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_222",
    "word": "Temiz Çevre",
    "forbidden": [
      "Çevre",
      "Temiz",
      "Yerlere çöp",
      "Sokak",
      "Ağaç"
    ],
    "wisdom": "Parklarımızın, sokaklarımızın ve doğanın çöp atılmamış temiz halidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_223",
    "word": "Ramazan İmsakiyesi",
    "forbidden": [
      "İbadet",
      "Din",
      "Müslüman",
      "Allah",
      "İslam"
    ],
    "wisdom": "İslam dininde yer alan temel kavram ve ibadetlerdendir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_224",
    "word": "İkindi Namazı",
    "forbidden": [
      "Namaz",
      "Kılmak",
      "Vakit",
      "İbadet",
      "Cami"
    ],
    "wisdom": "İkindi Namazı, Müslümanların belirli vakitlerde kıldığı namaz ibadetidir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_225",
    "word": "Harçlığını Paylaşmak",
    "forbidden": [
      "Para",
      "Harçlık",
      "Paylaşmak",
      "Kantin",
      "Arkadaş"
    ],
    "wisdom": "Okul harçlığımızı kantinde arkadaşımızla paylaşabilmektir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_226",
    "word": "Yazı Yazmak",
    "forbidden": [
      "Yazı",
      "Yazmak",
      "Defter",
      "Kalem",
      "Okumak"
    ],
    "wisdom": "Kalemle deftere harfleri ve kelimeleri dökme işlemidir.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_227",
    "word": "Kuşların Dili",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_228",
    "word": "Tatlı Mümin",
    "forbidden": [
      "Tatlı",
      "Mümin",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre tatlı bir mümin olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_229",
    "word": "Peygamber Mührü",
    "forbidden": [
      "Peygamber",
      "Elçi",
      "Allah",
      "Kuran",
      "Vahiy"
    ],
    "wisdom": "Peygamberlikle ilgili kutsal bir kavramı ifade eder.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_230",
    "word": "Zemzem Suyu",
    "forbidden": [
      "Kabe",
      "Su",
      "İçmek",
      "Mucize",
      "Hac"
    ],
    "wisdom": "Hz. İsmail ve annesi Hacer için çölde çıkan mucizevi kutsal sudur.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_231",
    "word": "Medine Savunması",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_232",
    "word": "Tatlı Baba",
    "forbidden": [
      "Tatlı",
      "Baba",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre tatlı bir baba olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_233",
    "word": "Osmanlı Padişahı",
    "forbidden": [
      "Osmanlı",
      "Padişah",
      "Hükümdar",
      "Sultan",
      "Yönetici"
    ],
    "wisdom": "Osmanlı devletini yöneten padişah sülalesi liderleridir.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_234",
    "word": "Örnek İnsan",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_235",
    "word": "Kabe Anahtarı",
    "forbidden": [
      "Kabe",
      "Kapı",
      "Kilit",
      "Açmak",
      "Emanet"
    ],
    "wisdom": "Kabe'nin kapısını açan ve özel bir ailede emanet olarak duran anahtardır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_236",
    "word": "Zemzem Mucizesi",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_237",
    "word": "Sevgili Müslüman",
    "forbidden": [
      "Sevgili",
      "Müslüman",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre sevgili bir müslüman olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_238",
    "word": "Arafat Vakfesi",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_239",
    "word": "Bayram Namazı",
    "forbidden": [
      "Yılda",
      "İki",
      "Namaz",
      "Cami",
      "Bayram"
    ],
    "wisdom": "Ramazan ve Kurban bayramı sabahlarında camide kılınan namazdır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_240",
    "word": "Doğruluk",
    "forbidden": [
      "Yalan",
      "Dürüst",
      "Söz",
      "Doğru",
      "Ahlak"
    ],
    "wisdom": "Söz ve davranışlarda her zaman dürüst olmaktır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_241",
    "word": "Ortaköy Camii Boğaz",
    "forbidden": [
      "Cami",
      "Ortaköy",
      "Boğaz",
      "İstanbul",
      "Köprü"
    ],
    "wisdom": "İstanbul Boğaz köprüsünün hemen ayağındaki o eşsiz manzaralı beyaz camidir.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_242",
    "word": "Kabe'nin Anahtarı",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_243",
    "word": "Hafız",
    "forbidden": [
      "Ezber",
      "Kuran",
      "Tamamı",
      "Zihin",
      "Ezberlemek"
    ],
    "wisdom": "Kur'an-ı Kerim'in tamamını ezbere bilen kişidir.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_244",
    "word": "Güleryüz Göstermek",
    "forbidden": [
      "Tebessüm",
      "Gülmek",
      "Sadaka",
      "Yüz",
      "Mutlu"
    ],
    "wisdom": "İnsanlarla iletişim kurarken yüzümüzden tebessümü eksik etmemektir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_245",
    "word": "Osmanlı Ordusu",
    "forbidden": [
      "Osmanlı",
      "Asker",
      "Ordu",
      "Savaş",
      "Yeniçeri"
    ],
    "wisdom": "Osmanlı Devleti'nin dünyaca ünlü kahraman askerler ordusudur.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_246",
    "word": "Bedir Kahramanları",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_247",
    "word": "Hint Okyanusu",
    "forbidden": [
      "Okyanus",
      "Hint",
      "Hindistan",
      "Sıcak",
      "Su"
    ],
    "wisdom": "Hindistan'ın güneyinde yer alan büyük sıcak okyanustur.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_248",
    "word": "Çanakkale Boğazı Savaş",
    "forbidden": [
      "Çanakkale",
      "Boğaz",
      "Savaş",
      "1915",
      "Gemi"
    ],
    "wisdom": "1915 yılında Çanakkale boğazında yapılan kahramanlık savaşıdır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_249",
    "word": "Medine Şehri",
    "forbidden": [
      "Peygamber",
      "Hicret",
      "Mescid-i Nebevi",
      "Şehir",
      "Yeşil Kubbe"
    ],
    "wisdom": "Peygamberimizin hicret ettiği ve kabrinin bulunduğu nurlu şehirdir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_250",
    "word": "Teravih Namazı",
    "forbidden": [
      "Ramazan",
      "Yatsı",
      "Sünnet",
      "Cami",
      "Kılmak"
    ],
    "wisdom": "Ramazan gecelerinde yatsı namazının ardından cemaatle kılınır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_251",
    "word": "Emin Mümin",
    "forbidden": [
      "Emin",
      "Mümin",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre emin bir mümin olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_252",
    "word": "Sabırlı Dost",
    "forbidden": [
      "Sabırlı",
      "Dost",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre sabırlı bir dost olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_253",
    "word": "Hediye Paketi",
    "forbidden": [
      "Hediye",
      "Paket",
      "Sürpriz",
      "Kutu",
      "Vermek"
    ],
    "wisdom": "Arkadaşlarımıza sürpriz yapmak için süslü kağıtlara sardığımız kutudur.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_254",
    "word": "Fotosentez",
    "forbidden": [
      "Bitki",
      "Güneş",
      "Oksijen",
      "Yaprak",
      "Yeşil"
    ],
    "wisdom": "Bitkilerin güneş ışığıyla besin üretmesidir.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_255",
    "word": "Tecvid",
    "forbidden": [
      "Okumak",
      "Kural",
      "Kuran",
      "Harf",
      "Güzel"
    ],
    "wisdom": "Kur'an-ı Kerim'i kurallarına göre doğru okuma eğitimidir.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_256",
    "word": "Birlikten Kuvvet Doğar",
    "forbidden": [
      "Birlik",
      "Kuvvet",
      "Beraber",
      "Güç",
      "Atasözü"
    ],
    "wisdom": "Birlikte hareket edersek daha güçlü olacağımızı anlatan atasözüdür.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_257",
    "word": "Türk Bayrağı Rengi",
    "forbidden": [
      "Bayrak",
      "Kırmızı",
      "Beyaz",
      "Hilal",
      "Yıldız"
    ],
    "wisdom": "Şanlı bayrağımızın şehitlerimizin kanını temsil eden kırmızı ve beyaz rengidir.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_258",
    "word": "Pisa Kulesi Eğik",
    "forbidden": [
      "Pisa",
      "Kule",
      "İtalya",
      "Eğik",
      "Tarihi"
    ],
    "wisdom": "İtalya'da bulunan, zemin çökmesi nedeniyle yana eğik duran kuledir.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_259",
    "word": "Güzel Kuran Okumak",
    "forbidden": [
      "Okumak",
      "Kuran",
      "Ses",
      "Güzel",
      "Tecvid"
    ],
    "wisdom": "Kur'an'ı kurallarına uyarak en güzel ses tonuyla tilavet etmektir.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_260",
    "word": "Süleyman'ın Tahtı",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_261",
    "word": "Defteri Temiz Tutmak",
    "forbidden": [
      "Defter",
      "Yazı",
      "Sayfa",
      "Temiz",
      "Kalem"
    ],
    "wisdom": "Yazı yazdığımız defterlerin sayfalarını kirletmeyip düzenli tutmaktır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_262",
    "word": "Sultan Alparslan Han",
    "forbidden": [
      "Alparslan",
      "Malazgirt",
      "1071",
      "Selçuklu",
      "Anadolu"
    ],
    "wisdom": "Malazgirt zaferiyle Anadolu kapılarını Türklere açan büyük Selçuklu sultanıdır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_263",
    "word": "Kutup Yıldızı",
    "forbidden": [
      "Kuzey",
      "Yön",
      "Pusula",
      "Sabit",
      "Gökyüzü"
    ],
    "wisdom": "Kuzey yönünü gösteren ve yön bulmada kullanılan yıldızdır.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_264",
    "word": "Dürüst Baba",
    "forbidden": [
      "Dürüst",
      "Baba",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre dürüst bir baba olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_265",
    "word": "Sabırlı Müslüman",
    "forbidden": [
      "Sabırlı",
      "Müslüman",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre sabırlı bir müslüman olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_266",
    "word": "Hacer Ana",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_267",
    "word": "Güleryüzlü Olmak",
    "forbidden": [
      "Tebessüm",
      "Gülmek",
      "Sadaka",
      "Ahlak",
      "İyi"
    ],
    "wisdom": "İnsanlara karşı her zaman neşeli, tatlı ve sevecen yaklaşmaktır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_268",
    "word": "Kutsal Topraklar",
    "forbidden": [
      "Mekke",
      "Medine",
      "Hac",
      "Kabe",
      "Suudi Arabistan"
    ],
    "wisdom": "İslamiyet'in doğduğu, Kabe ve Peygamberimizin kabrinin bulunduğu yerlerdir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_269",
    "word": "Emin Dost",
    "forbidden": [
      "Emin",
      "Dost",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre emin bir dost olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_270",
    "word": "Kadir Gecesi",
    "forbidden": [
      "Kuran",
      "Bin ay",
      "Ramazan",
      "Sure",
      "Melek"
    ],
    "wisdom": "Kur'an-ı Kerim'in indirilmeye başlandığı, bin aydan hayırlı mübarek gecedir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_271",
    "word": "Sevgili Kardeş",
    "forbidden": [
      "Sevgili",
      "Kardeş",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre sevgili bir kardeş olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_272",
    "word": "Kapalıçarşı Esnafı",
    "forbidden": [
      "Kapalıçarşı",
      "İstanbul",
      "Esnaf",
      "Dükkan",
      "Tarihi"
    ],
    "wisdom": "İstanbul'daki dünyanın en eski ve en büyük tarihi kapalı çarşısıdır.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_273",
    "word": "Kubbe",
    "forbidden": [
      "Cami",
      "Yarım",
      "Tavan",
      "Yuvarlak",
      "Çatı"
    ],
    "wisdom": "Camilerin üstündeki yarım yuvarlak şeklindeki büyük çatıdır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_274",
    "word": "Rumeli Hisarı",
    "forbidden": [
      "Hisar",
      "İstanbul",
      "Fatih",
      "Boğaz",
      "Kale"
    ],
    "wisdom": "Fatih Sultan Mehmed'in fetihten önce boğazın kuzeyine yaptırdığı kaledir.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_275",
    "word": "Musa'nın Asası",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_276",
    "word": "Zamanı İyi Değerlendirmek",
    "forbidden": [
      "Ahlak",
      "Edep",
      "İyi",
      "Davranış",
      "İslam"
    ],
    "wisdom": "Müslümanın hayatında uygulaması gereken güzel ahlak kuralıdır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_277",
    "word": "Kudüs Şehri",
    "forbidden": [
      "Mescid-i Aksa",
      "İlk Kıble",
      "Şehir",
      "Filistin",
      "Kutsal"
    ],
    "wisdom": "Müslümanların ilk kıblesi Mescid-i Aksa'nın bulunduğu kutsal şehirdir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_278",
    "word": "Veren El Alan Elden Üstündür",
    "forbidden": [
      "Vermek",
      "Üstün",
      "Zekat",
      "Sadaka",
      "Hadis"
    ],
    "wisdom": "Yardım yapan insanın, yardım alan insandan daha hayırlı olduğunu anlatan hadistir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_279",
    "word": "Osmanlı Parası",
    "forbidden": [
      "Para",
      "Akçe",
      "Osmanlı",
      "Gümüş",
      "Altın"
    ],
    "wisdom": "Osmanlı döneminde kullanılan akçe ve kuruş isimli paralardır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_280",
    "word": "Tatlı İnsan",
    "forbidden": [
      "Tatlı",
      "İnsan",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre tatlı bir i̇nsan olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_281",
    "word": "Güneş",
    "forbidden": [
      "Yıldız",
      "Sıcak",
      "Gezegen",
      "Işık",
      "Sarı"
    ],
    "wisdom": "Sistemimizin merkezindeki hayat kaynağımız olan yıldızdır.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_282",
    "word": "Okçular Tepesi",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_283",
    "word": "Cami Şadırvanı",
    "forbidden": [
      "Abdest",
      "Su",
      "Çeşme",
      "Cami",
      "Avlusu"
    ],
    "wisdom": "Cami avlularında cemaatin abdest alması için yapılmış çeşmeli yerdir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_284",
    "word": "Uçuş Denemesi",
    "forbidden": [
      "Uçmak",
      "Kanat",
      "Hezarfen",
      "Galata",
      "Deneme"
    ],
    "wisdom": "Kanat takarak gökyüzünde süzülmek için yapılan tarihi denemedir.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_285",
    "word": "Fatih Sultan Mehmed",
    "forbidden": [
      "İstanbul",
      "1453",
      "Padişah",
      "Gemi",
      "Fatih"
    ],
    "wisdom": "İstanbul'u fethederek yeni bir çağ başlatan genç padişahtır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_286",
    "word": "El-Cezeri",
    "forbidden": [
      "Robot",
      "Otomat",
      "Mühendis",
      "Çark",
      "Su"
    ],
    "wisdom": "İlk robotları ve su çarklı makineleri tasarlayan dahi mühendistir.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_287",
    "word": "Mektup Yazmak",
    "forbidden": [
      "Mektup",
      "Yazmak",
      "Zarf",
      "Posta",
      "Kalem"
    ],
    "wisdom": "Uzakta olan sevdiklerimize kağıt üzerine duygu ve düşüncelerimizi yazmaktır.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_288",
    "word": "Mevlid Kandili",
    "forbidden": [
      "Peygamber",
      "Doğum",
      "Kandil",
      "Gece",
      "Muhammed"
    ],
    "wisdom": "Peygamber Efendimiz'in dünyaya gelişinin kutlandığı mübarek gecedir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_289",
    "word": "Büyüklere Yer Vermek",
    "forbidden": [
      "Otobüs",
      "Yer vermek",
      "Büyükler",
      "Yaşlı",
      "Koltuk"
    ],
    "wisdom": "Toplu taşımada yaşlı teyze ve amcalara oturacak yer vermektir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_290",
    "word": "Güleryüzlü Çocuk",
    "forbidden": [
      "Güleryüzlü",
      "Çocuk",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre güleryüzlü bir çocuk olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_291",
    "word": "Sevgili Arkadaş",
    "forbidden": [
      "Sevgili",
      "Arkadaş",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre sevgili bir arkadaş olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_292",
    "word": "İbrahim'in Duası",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_293",
    "word": "Malazgirt Zaferi",
    "forbidden": [
      "1071",
      "Alparslan",
      "Anadolu",
      "Bizans",
      "Savaş"
    ],
    "wisdom": "1071 yılında Anadolu kapılarını açan büyük savaştır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_294",
    "word": "Müzdelife Gecesi",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_295",
    "word": "Saygılı İnsan",
    "forbidden": [
      "Saygılı",
      "İnsan",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre saygılı bir i̇nsan olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_296",
    "word": "Sabah Namazı",
    "forbidden": [
      "Vakit",
      "Namaz",
      "Güneş",
      "Sabah",
      "Kılmak"
    ],
    "wisdom": "Sabah namazı, tan yeri ağarınca kılınan günün ilk namazıdır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_297",
    "word": "Çanakkale Boğazı Köprüsü",
    "forbidden": [
      "Çanakkale",
      "Köprü",
      "Boğaz",
      "Geçmek",
      "Asya"
    ],
    "wisdom": "Asya ile Avrupa kıtalarını Çanakkale'de birbirine bağlayan köprüdür.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_298",
    "word": "İlahi Kitaplar",
    "forbidden": [
      "Kuran",
      "Sure",
      "Ayet",
      "Okumak",
      "Cüz"
    ],
    "wisdom": "Kur'an-ı Kerim ile ilgili ayet, sure ve okuma kuralları konusudur.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_299",
    "word": "İftar Vakti",
    "forbidden": [
      "İbadet",
      "Din",
      "Müslüman",
      "Allah",
      "İslam"
    ],
    "wisdom": "İslam dininde yer alan temel kavram ve ibadetlerdendir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_300",
    "word": "Yetimleri Korumak",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_301",
    "word": "Çalışkan Öğretmen",
    "forbidden": [
      "Çalışkan",
      "Öğretmen",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre çalışkan bir öğretmen olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_302",
    "word": "Fakire Çorba",
    "forbidden": [
      "Yemek",
      "Çorba",
      "Fakir",
      "Yardım",
      "Sıcak"
    ],
    "wisdom": "Yoksul insanlara sıcak yemek ve çorba ikramında bulunmaktır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_303",
    "word": "Vefa",
    "forbidden": [
      "Söz",
      "Dostluk",
      "Bağlılık",
      "Unutmamak",
      "İyilik"
    ],
    "wisdom": "İyilik yapanları unutmamak ve verilen sözde durmaktır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_304",
    "word": "Tarih Dersi",
    "forbidden": [
      "Ders",
      "Tarih",
      "Okul",
      "Öğretmen",
      "Geçmiş"
    ],
    "wisdom": "Okullarda geçmişimizi ve Türk-İslam tarihini öğrendiğimiz derstir.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_305",
    "word": "Everest",
    "forbidden": [
      "Dağ",
      "Yüksek",
      "Zirve",
      "Tırmanmak",
      "Kar"
    ],
    "wisdom": "Dünyanın en yüksek kara zirvesidir.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_306",
    "word": "Dürüst Kardeş",
    "forbidden": [
      "Dürüst",
      "Kardeş",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre dürüst bir kardeş olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_307",
    "word": "Süt İçmek",
    "forbidden": [
      "Güneş",
      "Dünya",
      "Kitap",
      "Okul",
      "Telefon"
    ],
    "wisdom": "Günlük hayatta karşılaştığımız temel genel kültür kavramıdır.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_308",
    "word": "Kuran Durakları",
    "forbidden": [
      "Kuran",
      "Durak",
      "Okumak",
      "Nefes",
      "İşaret"
    ],
    "wisdom": "Kur'an okurken nefes almak için durulacak yerleri gösteren işaretlerdir.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_309",
    "word": "Spor Ayakkabısı",
    "forbidden": [
      "Ayakkabı",
      "Spor",
      "Koşmak",
      "Beden eğitimi",
      "Ayak"
    ],
    "wisdom": "Beden eğitimi dersinde rahatça koşabilmek için giyilen esnek ayakkabıdır.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_310",
    "word": "Ayet Numarası",
    "forbidden": [
      "Ayet",
      "Numara",
      "Rakam",
      "Kuran",
      "Sure"
    ],
    "wisdom": "Ayetlerin sırasını gösteren yuvarlak içindeki rakamlardır.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_311",
    "word": "Sevgili Öğretmen",
    "forbidden": [
      "Sevgili",
      "Öğretmen",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre sevgili bir öğretmen olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_312",
    "word": "Resim Çerçevesi",
    "forbidden": [
      "Resim",
      "Çerçeve",
      "Fotoğraf",
      "Duvar",
      "Ahşap"
    ],
    "wisdom": "Çekildiğimiz fotoğrafları koruyup masaya koymak veya duvara asmak için kullanılan ahşap çerçevedir.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_313",
    "word": "Bilal-i Habeşi",
    "forbidden": [
      "Ezan",
      "Habeş",
      "İlk",
      "Müezzin",
      "Ses"
    ],
    "wisdom": "İslam tarihinin ilk müezzini olan köle sahabedir.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_314",
    "word": "Miraç Kandili",
    "forbidden": [
      "Miraç",
      "Göğe yükselmek",
      "Peygamber",
      "Namaz",
      "Gece"
    ],
    "wisdom": "Peygamberimizin göğe yükselip namaz müjdesini getirdiği kutsal gecedir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_315",
    "word": "Mum Üflemek",
    "forbidden": [
      "Mum",
      "Üflemek",
      "Doğum günü",
      "Pasta",
      "Dilek"
    ],
    "wisdom": "Doğum günü pastasının üzerindeki yanan mumları nefesle söndürmektir.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_316",
    "word": "Adil Davranmak",
    "forbidden": [
      "Adalet",
      "Eşit",
      "Hak",
      "Karar",
      "Doğru"
    ],
    "wisdom": "Herkes arasında eşit ve adaletli şekilde davranmaktır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_317",
    "word": "Yedi Göller Bolu",
    "forbidden": [
      "Yedi Göller",
      "Bolu",
      "Göl",
      "Orman",
      "Milli Park"
    ],
    "wisdom": "Bolu ilimizde sonbaharda yaprak döken ağaçlarla çevrili yedi adet heyelan gölüdür.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_318",
    "word": "Cömert Dost",
    "forbidden": [
      "Cömert",
      "Dost",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre cömert bir dost olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_319",
    "word": "Güleryüzlü Komşu",
    "forbidden": [
      "Güleryüzlü",
      "Komşu",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre güleryüzlü bir komşu olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_320",
    "word": "Kuran Ahlakı",
    "forbidden": [
      "Ahlak",
      "Kuran",
      "İyi",
      "Davranış",
      "Peygamber"
    ],
    "wisdom": "Kur'an-ı Kerim'in bizlere tavsiye ettiği en güzel ahlak ilkeleridir.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_321",
    "word": "Güleryüzlü Mümin",
    "forbidden": [
      "Güleryüzlü",
      "Mümin",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre güleryüzlü bir mümin olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_322",
    "word": "Kuran Işığı",
    "forbidden": [
      "Kuran",
      "Sure",
      "Ayet",
      "Okumak",
      "Cüz"
    ],
    "wisdom": "Kur'an-ı Kerim ile ilgili ayet, sure ve okuma kuralları konusudur.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_323",
    "word": "Altın Sikke",
    "forbidden": [
      "Altın",
      "Para",
      "Sikke",
      "Eski",
      "Tarih"
    ],
    "wisdom": "Eski dönemlerde basılan saf altından yuvarlak metal paralardır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_324",
    "word": "Kıble Pusulası",
    "forbidden": [
      "Yön",
      "Kabe",
      "Pusula",
      "Kıble",
      "Namaz"
    ],
    "wisdom": "Namaz kılmak için Kabe'nin yönünü bulmaya yarayan alettir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_325",
    "word": "Vefalı Anne",
    "forbidden": [
      "Vefalı",
      "Anne",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre vefalı bir anne olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_326",
    "word": "Gökbilimci Ali Kuşçu",
    "forbidden": [
      "Ali Kuşçu",
      "Astronom",
      "Gökbilim",
      "Yıldız",
      "Fatih"
    ],
    "wisdom": "Selçuklu ve Osmanlı döneminde uzay bilimiyle uğraşan gökbilimcidir.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_327",
    "word": "Veda Hutbesi",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_328",
    "word": "Vefalı Öğrenci",
    "forbidden": [
      "Vefalı",
      "Öğrenci",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre vefalı bir öğrenci olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_329",
    "word": "Sırasını Beklemek",
    "forbidden": [
      "Sıra",
      "Beklemek",
      "Kantin",
      "Saygı",
      "Kuyruk"
    ],
    "wisdom": "Kantin sırasında veya otobüs kuyruğunda sıramızı beklemektir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_330",
    "word": "Su Saati",
    "forbidden": [
      "Saat",
      "Su",
      "El-Cezeri",
      "Zaman",
      "Akış"
    ],
    "wisdom": "Suyun düzenli akışı sayesinde zamanı gösteren mekanik saattir.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_331",
    "word": "Bayrak Sevgisi",
    "forbidden": [
      "Bayrak",
      "Kırmızı",
      "Hilal",
      "Yıldız",
      "Tören"
    ],
    "wisdom": "Şanlı al bayrağımıza karşı duyduğumuz büyük saygı ve sevgidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_332",
    "word": "Mevlana Müzesi Konya",
    "forbidden": [
      "Mevlana",
      "Konya",
      "Müze",
      "Sema",
      "Türbe"
    ],
    "wisdom": "Konya'da 'Ne olursan ol yine gel' diyen Hz. Mevlana'nın yeşil kubbeli müzesidir.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_333",
    "word": "Kalem Kutusu",
    "forbidden": [
      "Kalem",
      "Kutu",
      "Okul",
      "Silgi",
      "Çanta"
    ],
    "wisdom": "Okul kalemlerimizi ve silgimizi içine koyduğumuz fermuarlı çantadır.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_334",
    "word": "Tebessüm Etmek",
    "forbidden": [
      "Gülümsemek",
      "Gülmek",
      "Sadaka",
      "Yüz",
      "Mutlu"
    ],
    "wisdom": "Karşımızdaki insana gülümseyerek sadaka sevabı kazanmaktır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_335",
    "word": "Küfür Etmemek",
    "forbidden": [
      "Küfür",
      "Kötü",
      "Söz",
      "Ahlak",
      "Konuşmak"
    ],
    "wisdom": "Ağzımızdan asla kötü ve küfürlü sözler çıkarmamaktır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_336",
    "word": "Emanet",
    "forbidden": [
      "Korumak",
      "Emin",
      "Sır",
      "Hıyanet",
      "Münafık"
    ],
    "wisdom": "Bize emanet edilen şeyleri koruyup sahibine geri vermektir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_337",
    "word": "Peygamberimizin Annesi",
    "forbidden": [
      "Peygamber",
      "Elçi",
      "Allah",
      "Kuran",
      "Vahiy"
    ],
    "wisdom": "Peygamberlikle ilgili kutsal bir kavramı ifade eder.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_338",
    "word": "Elhamdülillah Demek",
    "forbidden": [
      "Hamd",
      "Şükür",
      "Teşekkür",
      "Namaz",
      "Söylemek"
    ],
    "wisdom": "Verilen nimetler için Allah'a hamt ve teşekkür etmektir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_339",
    "word": "Türk Bayrağı Tarihi",
    "forbidden": [
      "Bayrak",
      "Kırmızı",
      "Hilal",
      "Yıldız",
      "Tarih"
    ],
    "wisdom": "Al bayrağımızın tarih boyunca geçirdiği gelişim sürecidir.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_340",
    "word": "Ana Baba Duası Almak",
    "forbidden": [
      "Anne",
      "Baba",
      "Dua",
      "Rıza",
      "Hizmet"
    ],
    "wisdom": "Anne ve babamıza iyi davranarak onların hayır dualarını almaktır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_341",
    "word": "Kumbarada Para Biriktirmek",
    "forbidden": [
      "Para",
      "Kumbara",
      "Biriktirmek",
      "Tasarruf",
      "Harçlık"
    ],
    "wisdom": "Gereksiz harcamalar yapmayıp kumbarada para biriktirmektir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_342",
    "word": "Mısır Piramitleri",
    "forbidden": [
      "Firavun",
      "Taş",
      "Üçgen",
      "Mezar",
      "Mumya"
    ],
    "wisdom": "Firavunlar için yapılan devasa piramit mezarlardır.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_343",
    "word": "Kur'an Ezberi",
    "forbidden": [
      "Kuran",
      "Sure",
      "Ayet",
      "Okumak",
      "Cüz"
    ],
    "wisdom": "Kur'an-ı Kerim ile ilgili ayet, sure ve okuma kuralları konusudur.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_344",
    "word": "İslam Öğretmenleri",
    "forbidden": [
      "Öğretmen",
      "Okul",
      "Ders",
      "Sınıf",
      "Öğrenmek"
    ],
    "wisdom": "Öğrencilere faydalı bilgiler öğreten rehber kişidir.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_345",
    "word": "İlk İnsan Havva",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_346",
    "word": "Yetime Yardım",
    "forbidden": [
      "Yetim",
      "Yardım",
      "Para",
      "Çocuk",
      "İyilik"
    ],
    "wisdom": "Annesiz babasız kalmış yetim çocukların ihtiyaçlarını karşılamaktır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_347",
    "word": "Kardeşçe Yaşamak",
    "forbidden": [
      "Kardeş",
      "Birlikte",
      "Barış",
      "Sevgi",
      "Dostluk"
    ],
    "wisdom": "İnsanlarla kavga etmeden, sevgi ve barış içinde yaşamaktır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_348",
    "word": "Pamukkale Travertenleri",
    "forbidden": [
      "Pamukkale",
      "Traverten",
      "Denizli",
      "Beyaz",
      "Kaplıca"
    ],
    "wisdom": "Denizli ilimizde kalsiyum sularının oluşturduğu pamuk gibi beyaz taş basamaklardır.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_349",
    "word": "Gökkuşağı",
    "forbidden": [
      "Renk",
      "Yağmur",
      "Güneş",
      "Yedi",
      "Gökyüzü"
    ],
    "wisdom": "Yağmur damlalarından geçen ışığın oluşturduğu yedi renkli yaydır.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_350",
    "word": "Çiçek Balı",
    "forbidden": [
      "Bal",
      "Arı",
      "Çiçek",
      "Tatlı",
      "Kahvaltı"
    ],
    "wisdom": "Arıların çiçek polenlerinden ürettiği lezzetli ve şifalı tatlı yiyecektir.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_351",
    "word": "Dürüstlük",
    "forbidden": [
      "Doğru",
      "Yalan",
      "Söz",
      "Güven",
      "Ahlak"
    ],
    "wisdom": "Kişinin içinin dışının bir olması, kimseyi aldatmamasıdır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_352",
    "word": "Harita Çizmek",
    "forbidden": [
      "Harita",
      "Çizmek",
      "Piri Reis",
      "Dünya",
      "Coğrafya"
    ],
    "wisdom": "Karaları ve denizleri ölçerek kağıt üzerine resmetmektir.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_353",
    "word": "Emevi Devleti",
    "forbidden": [
      "Emevi",
      "Şam",
      "Halife",
      "Endülüs",
      "Arap"
    ],
    "wisdom": "Dört Halife döneminden sonra Şam merkezli kurulan İslam devletidir.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_354",
    "word": "İstanbul",
    "forbidden": [
      "Boğaz",
      "Fatih",
      "Asya",
      "Avrupa",
      "Köprü"
    ],
    "wisdom": "Fatih Sultan Mehmet'in fethettiği tarihi megakentimizdir.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_355",
    "word": "Kutsal Emanetler Bölümü",
    "forbidden": [
      "Kutsal Emanetler",
      "Topkapı",
      "Müze",
      "Peygamber",
      "Hırka"
    ],
    "wisdom": "Topkapı sarayında Peygamberimize ait eşyaların sergilendiği mukaddes odadır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_356",
    "word": "Med Harfleri",
    "forbidden": [
      "Med",
      "Uzatmak",
      "Harf",
      "Elif",
      "Vav"
    ],
    "wisdom": "Arapçada harfleri uzatarak okumamızı sağlayan (elif, vav, ya) harfleridir.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_357",
    "word": "Okul Zili",
    "forbidden": [
      "Zil",
      "Okul",
      "Ders",
      "Teneffüs",
      "Ses"
    ],
    "wisdom": "Dersin başladığını veya teneffüs vaktinin geldiğini haber veren sestir.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_358",
    "word": "Felak Suresi",
    "forbidden": [
      "Felak",
      "Sure",
      "Kuran",
      "Kul euzü",
      "Sığınmak"
    ],
    "wisdom": "Kötülüklerden Allah'a sığınmak için okunan 'Kul euzü bi-rabbil felak' suresidir.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_359",
    "word": "Pusula",
    "forbidden": [
      "Yön",
      "Kuzey",
      "Mıknatıs",
      "Harita",
      "Denizci"
    ],
    "wisdom": "Kuzey-güney doğrultusunu gösteren yön bulma aletidir.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_360",
    "word": "Arkadaşlık Bağı",
    "forbidden": [
      "Ahlak",
      "Edep",
      "İyi",
      "Davranış",
      "İslam"
    ],
    "wisdom": "Müslümanın hayatında uygulaması gereken güzel ahlak kuralıdır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_361",
    "word": "Peygamberimizin Çocukluğu",
    "forbidden": [
      "Peygamber",
      "Elçi",
      "Allah",
      "Kuran",
      "Vahiy"
    ],
    "wisdom": "Peygamberlikle ilgili kutsal bir kavramı ifade eder.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_362",
    "word": "Malazgirt",
    "forbidden": [
      "1071",
      "Alparslan",
      "Anadolu",
      "Bizans",
      "Savaş"
    ],
    "wisdom": "1071'de Türklere Anadolu'nun kapılarını açan savaştır.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_363",
    "word": "Otobüste Yer Vermek",
    "forbidden": [
      "Otobüs",
      "Koltuk",
      "Yaşlı",
      "Hamile",
      "Yer vermek"
    ],
    "wisdom": "Otobüs veya metroda yaşlı ve hamile yolculara yer göstermektir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_364",
    "word": "Rica Etmek",
    "forbidden": [
      "Lütfen",
      "Rica",
      "Nezaket",
      "İstemek",
      "Söz"
    ],
    "wisdom": "Bir şey isterken nazikçe rica etme nezaketidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_365",
    "word": "Suffe Mektebi",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_366",
    "word": "Cami Kapısı",
    "forbidden": [
      "Giriş",
      "Cami",
      "Kapı",
      "Ahşap",
      "Açmak"
    ],
    "wisdom": "Camilerin içine girmek için kullanılan büyük ve genellikle ahşap kapısıdır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_367",
    "word": "Düden Şelalesi",
    "forbidden": [
      "Şelale",
      "Antalya",
      "Düden",
      "Su",
      "Mağara"
    ],
    "wisdom": "Antalya'da suların yüksek falezlerden denize döküldüğü şelaledir.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_368",
    "word": "Biruni Coğrafya Kitabı",
    "forbidden": [
      "Biruni",
      "Coğrafya",
      "Kitap",
      "Dünya",
      "Bilgin"
    ],
    "wisdom": "Biruni'nin dünya coğrafyası üzerine yazdığı tarihi kitaptır.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_369",
    "word": "Kuran Yaprağı",
    "forbidden": [
      "Kuran",
      "Yaprak",
      "Sayfa",
      "Eski",
      "Yazı"
    ],
    "wisdom": "Kur'an-ı Kerim'in her bir yaprak sayfasıdır.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_370",
    "word": "Günah",
    "forbidden": [
      "Haram",
      "Ceza",
      "Kötü",
      "Yasak",
      "Allah"
    ],
    "wisdom": "Allah'ın yapmayın dediği kötü işleri yapınca aldığımız cezadır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_371",
    "word": "Uluğ Bey Medresesi",
    "forbidden": [
      "Uluğ Bey",
      "Medrese",
      "Semerkant",
      "Okul",
      "Öğrenci"
    ],
    "wisdom": "Uluğ Bey'in yaptırdığı astronomi ve matematik eğitimi verilen medresedir.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_372",
    "word": "Uzay Teleskobu",
    "forbidden": [
      "Teleskop",
      "Uzay",
      "Yıldız",
      "Alet",
      "Gözlem"
    ],
    "wisdom": "Uzaydaki yıldızları ve gezegenleri inceleyen dev optik teleskoptur.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_373",
    "word": "Osman Gazi",
    "forbidden": [
      "Osman",
      "Kurucu",
      "Osmanlı",
      "Devlet",
      "Beylik"
    ],
    "wisdom": "Osmanlı Devleti'nin kurucusu ve ilk padişahı olan büyük beydir.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_374",
    "word": "Altın Yaldızlı Kuran",
    "forbidden": [
      "Kuran",
      "Altın",
      "Yazı",
      "Mushaf",
      "Süs"
    ],
    "wisdom": "Sayfa kenarları veya yazıları altın yaldızla süslenmiş Kur'an'dır.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_375",
    "word": "Zikir Çekmek",
    "forbidden": [
      "Allah",
      "Anmak",
      "Zikir",
      "Tesbih",
      "Dil"
    ],
    "wisdom": "Allah'ı anmak için dilimizle ve kalbimizle kelimeler söylemektir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_376",
    "word": "Dini Hikayeler",
    "forbidden": [
      "Hikaye",
      "Öğüt",
      "Kıssa",
      "Kitap",
      "Okumak"
    ],
    "wisdom": "İçinden ahlaki öğütler ve dini ibretler çıkarılan güzel öykülerdir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_377",
    "word": "Kabe",
    "forbidden": [
      "Mekke",
      "Tavaf",
      "Hac",
      "Kıble",
      "Siyah"
    ],
    "wisdom": "Kabe, yeryüzünde Allah'a ibadet için yapılan ilk mesciddir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_378",
    "word": "Zemzem",
    "forbidden": [
      "Su",
      "Kabe",
      "Mekke",
      "Hac",
      "İçmek"
    ],
    "wisdom": "Zemzem, Kabe'nin yanından çıkan çok tatlı ve şifalı bir sudur.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_379",
    "word": "Son İlahi Kitap",
    "forbidden": [
      "Kuran",
      "Sure",
      "Ayet",
      "Okumak",
      "Cüz"
    ],
    "wisdom": "Kur'an-ı Kerim ile ilgili ayet, sure ve okuma kuralları konusudur.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_380",
    "word": "Şükür Seccadesi",
    "forbidden": [
      "Şükür",
      "Namaz",
      "Seccade",
      "Halı",
      "Kılmak"
    ],
    "wisdom": "Şükür namazı kılmak için serilen temiz seccadedir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_381",
    "word": "Osmanlı Tuğrası",
    "forbidden": [
      "Tuğra",
      "İmza",
      "Padişah",
      "Yazı",
      "Arma"
    ],
    "wisdom": "Osmanlı padişahlarının resmi belgelerde kullandığı özel tasarım imzadır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_382",
    "word": "Emin Olmak",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_383",
    "word": "Osmanlı İmparatorluğu",
    "forbidden": [
      "Tarih",
      "Devlet",
      "Padişah",
      "Osmanlı",
      "Selçuklu"
    ],
    "wisdom": "İslam tarihinde kurulan devletler ve önemli hükümdarlar konusudur.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_384",
    "word": "Tarih Haritası",
    "forbidden": [
      "Harita",
      "Tarih",
      "Sınırlar",
      "Devlet",
      "Eski"
    ],
    "wisdom": "Eski devletlerin sınırlarını ve savaşları gösteren özel haritadır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_385",
    "word": "Büyük Okyanus",
    "forbidden": [
      "Okyanus",
      "Büyük",
      "Su",
      "Deniz",
      "Dünya"
    ],
    "wisdom": "Dünya üzerindeki en geniş ve en derin dev su kütlesidir.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_386",
    "word": "Akraba Bayramlaşması",
    "forbidden": [
      "Akraba",
      "Bayram",
      "El öpmek",
      "Ziyaret",
      "Aile"
    ],
    "wisdom": "Aile büyükleriyle bir araya gelip bayramlaşmaktır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_387",
    "word": "Çift Başlı Kartal",
    "forbidden": [
      "Kartal",
      "Çift başlı",
      "Selçuklu",
      "Simge",
      "Arma"
    ],
    "wisdom": "Doğu ve batıyı simgeleyen tarihi çift başlı kuş armasıdır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_388",
    "word": "İhlas Suresi Meali",
    "forbidden": [
      "Sure",
      "Kuran",
      "Okumak",
      "Ayet",
      "İhlas  Meali"
    ],
    "wisdom": "İhlas Suresi Meali, Kur'an-ı Kerim'de yer alan kutsal bir suredir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_389",
    "word": "Ahiret Hayatı",
    "forbidden": [
      "Dünya",
      "Sonra",
      "Ölüm",
      "Sonsuz",
      "Hayat"
    ],
    "wisdom": "Ölümden sonra başlayacak olan ebedi ve sonsuz hayattır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_390",
    "word": "Kabe Resmi",
    "forbidden": [
      "Kabe",
      "Mekke",
      "Duvar",
      "Tablo",
      "Siyah"
    ],
    "wisdom": "Kabe'nin fotoğraflanmış veya çizilmiş güzel tablosudur.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_391",
    "word": "Yoksulu Korumak",
    "forbidden": [
      "Fakir",
      "Yoksul",
      "Yardım",
      "Zekat",
      "Korumak"
    ],
    "wisdom": "İhtiyacı olan yoksul insanlara yardım eli uzatmaktır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_392",
    "word": "Göbeklitepe Tarihi",
    "forbidden": [
      "Göbeklitepe",
      "Şanlıurfa",
      "Tarih",
      "Tapınak",
      "İlk"
    ],
    "wisdom": "Şanlıurfa'da bulunan, tarihin bilinen en eski tapınak kalıntıları alanıdır.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_393",
    "word": "Orman Yangını",
    "forbidden": [
      "Orman",
      "Yangın",
      "Ağaç",
      "Ateş",
      "Söndürmek"
    ],
    "wisdom": "Ağaçların alev almasıyla yeşil alanların zarar gördüğü büyük felakettir.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_394",
    "word": "Adalet",
    "forbidden": [
      "Eşitlik",
      "Hak",
      "Zulüm",
      "Mahkeme",
      "Vermek"
    ],
    "wisdom": "Her hak sahibine hakkını eksiksiz teslim etmektir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_395",
    "word": "Güleryüzlü Öğrenci",
    "forbidden": [
      "Güleryüzlü",
      "Öğrenci",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre güleryüzlü bir öğrenci olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_396",
    "word": "Güzel Müslüman",
    "forbidden": [
      "Güzel",
      "Müslüman",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre güzel bir müslüman olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_397",
    "word": "Namaz",
    "forbidden": [
      "İbadet",
      "Secde",
      "Rüku",
      "Kılmak",
      "Ezan"
    ],
    "wisdom": "Namaz kılmak Müslümanların en önemli günlük ibadetidir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_398",
    "word": "Kabe Örtüsü",
    "forbidden": [
      "Kabe",
      "Siyah",
      "İpek",
      "Yılda bir",
      "Yazı"
    ],
    "wisdom": "Kabe'nin üzerini kaplayan altın yazılı siyah ipek örtüdür.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_399",
    "word": "Hz. Nuh",
    "forbidden": [
      "Gemi",
      "Tufan",
      "Yağmur",
      "Hayvan",
      "Tahta"
    ],
    "wisdom": "Büyük bir gemi yaparak inananları tufandan kurtarmıştır.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_400",
    "word": "Kuba Mescidi Yapılışı",
    "forbidden": [
      "Cami",
      "İbadet",
      "Minare",
      "Namaz",
      "Tarihi"
    ],
    "wisdom": "Kuba Mescidi Yapılışı, İslam tarihinde önemli bir yere sahip olan ibadethanedir.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_401",
    "word": "Dürüst Öğrenci",
    "forbidden": [
      "Dürüst",
      "Öğrenci",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre dürüst bir öğrenci olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_402",
    "word": "İbrahim'in Ateşi",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_403",
    "word": "Namaz Seccadesi",
    "forbidden": [
      "Namaz",
      "Halı",
      "Serilmek",
      "Yere",
      "Secde"
    ],
    "wisdom": "Namaz kılarken temizlik sağlamak için yere serilen özel örtüdür.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_404",
    "word": "Muhacir Göçü",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_405",
    "word": "Doğum Günü Pastası",
    "forbidden": [
      "Pasta",
      "Doğum günü",
      "Mum",
      "Üflemek",
      "Kek"
    ],
    "wisdom": "Doğum günlerinde üzerine mumlar dikilen çikolatalı pastadır.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_406",
    "word": "Osmanlı Bilim Dünyası",
    "forbidden": [
      "Bilim",
      "İcat",
      "Mimar",
      "Tıp",
      "Astronom"
    ],
    "wisdom": "İslam medeniyetinde yetişen ve bilime yön veren bilim insanları konusudur.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_407",
    "word": "Karahanlı Devleti",
    "forbidden": [
      "Karahanlı",
      "Türk",
      "İslam",
      "İlk",
      "Satuk Buğra"
    ],
    "wisdom": "Orta Asya'da İslamiyet'i kabul eden ilk Türk devletidir.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_408",
    "word": "Kureyş Suresi",
    "forbidden": [
      "Kureyş",
      "Sure",
      "Peygamber",
      "Kabile",
      "Mekke"
    ],
    "wisdom": "Peygamberimizin kabilesi olan Kureyş'ten bahseden suredir.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_409",
    "word": "Meal",
    "forbidden": [
      "Türkçe",
      "Kuran",
      "Anlam",
      "Çeviri",
      "Kitap"
    ],
    "wisdom": "Kur'an ayetlerinin Türkçe kısa anlamına meal denir.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_410",
    "word": "Muharrem Ayı",
    "forbidden": [
      "Hicri",
      "Aşure",
      "İlk ay",
      "Takvim",
      "Muharrem"
    ],
    "wisdom": "Hicri takvimin ilk ayı olup aşure gününü barındırır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_411",
    "word": "Rahle Üstü",
    "forbidden": [
      "Rahle",
      "Kuran",
      "Okumak",
      "Masa",
      "Üstünde"
    ],
    "wisdom": "Kur'an'ın üzerine konulduğu ahşap rahlenin üst kısmıdır.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_412",
    "word": "Zekat",
    "forbidden": [
      "Para",
      "Mal",
      "Fakir",
      "Vermek",
      "Yardım"
    ],
    "wisdom": "Zekat, durumu iyi olanların fakirlere yaptığı yardımdır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_413",
    "word": "Kızıldeniz Geçişi",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_414",
    "word": "Doğayı Korumak",
    "forbidden": [
      "Doğa",
      "Ağaç",
      "Çevre",
      "Temiz",
      "Yerlere çöp"
    ],
    "wisdom": "Ormanları, suları ve çevreyi temiz tutup yeşili korumaktır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_415",
    "word": "Cömert Olmak",
    "forbidden": [
      "Cömert",
      "Vermek",
      "El açık",
      "Paylaşmak",
      "Para"
    ],
    "wisdom": "İhtiyacı olanlara yardım etmekte cömert davranmaktır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_416",
    "word": "Şemsiye Açmak",
    "forbidden": [
      "Şemsiye",
      "Yağmur",
      "Açmak",
      "Su",
      "Islanmak"
    ],
    "wisdom": "Yağmurlu havalarda ıslanmamak için üzerimize tuttuğumuz koruyucudur.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_417",
    "word": "Vahiy Gelmesi",
    "forbidden": [
      "Vahiy",
      "Cebrail",
      "Peygamber",
      "Allah",
      "Mesaj"
    ],
    "wisdom": "Allah'ın mesajlarını melek vasıtasıyla peygambere iletmesi olayıdır.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_418",
    "word": "İncil Kitabı",
    "forbidden": [
      "Kuran",
      "Sure",
      "Ayet",
      "Okumak",
      "Cüz"
    ],
    "wisdom": "Kur'an-ı Kerim ile ilgili ayet, sure ve okuma kuralları konusudur.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_419",
    "word": "Helal",
    "forbidden": [
      "Serbest",
      "İzin",
      "Haram",
      "Yemek",
      "Temiz"
    ],
    "wisdom": "Dinimizin yapmamıza ve yememize izin verdiği temiz şeylerdir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_420",
    "word": "En Kısa Sure",
    "forbidden": [
      "Kevser",
      "Sure",
      "Kısa",
      "3 ayet",
      "Kuran"
    ],
    "wisdom": "Kur'an'ın en kısa suresi olan 3 ayetlik Kevser suresidir.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_421",
    "word": "Namaz Duaları",
    "forbidden": [
      "Namaz",
      "Dua",
      "Sübhâneke",
      "Okumak",
      "Ettehiyyâtü"
    ],
    "wisdom": "Namaz rekatlarında ayaktayken veya otururken okuduğumuz dualardır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_422",
    "word": "Işıkları Boş Yere Yakmamak",
    "forbidden": [
      "Ahlak",
      "Edep",
      "İyi",
      "Davranış",
      "İslam"
    ],
    "wisdom": "Müslümanın hayatında uygulaması gereken güzel ahlak kuralıdır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_423",
    "word": "Vezir Nizamülmülk",
    "forbidden": [
      "Vezir",
      "Nizamülmülk",
      "Selçuklu",
      "Siyasetname",
      "Medrese"
    ],
    "wisdom": "Selçukluların ünlü devlet adamı, Nizamiye medreselerinin kurucusudur.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_424",
    "word": "Saat Yelkovanı",
    "forbidden": [
      "Saat",
      "Yelkovan",
      "Dakika",
      "Uzun",
      "Dönmek"
    ],
    "wisdom": "Saat üzerinde dakikaları gösteren uzun ve hareketli çubuktur.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_425",
    "word": "Farabi İkinci Öğretmen",
    "forbidden": [
      "Öğretmen",
      "Okul",
      "Ders",
      "Sınıf",
      "Öğrenmek"
    ],
    "wisdom": "Öğrencilere faydalı bilgiler öğreten rehber kişidir.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_426",
    "word": "Derste Sessiz Olmak",
    "forbidden": [
      "Ders",
      "Sessiz",
      "Öğretmen",
      "Dinlemek",
      "Konuşmamak"
    ],
    "wisdom": "Ders sırasında konuşmayıp öğretmenimizi dikkatle dinlemektir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_427",
    "word": "Kudüs Camii",
    "forbidden": [
      "Mescid-i Aksa",
      "Kudüs",
      "Cami",
      "İlk Kıble",
      "Aksa"
    ],
    "wisdom": "Kudüs'teki mübarek mescitlerin ve ilk kıblemiz olan Mescid-i Aksa'nın genel adıdır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_428",
    "word": "Uçak Kanadı",
    "forbidden": [
      "Uçak",
      "Kanat",
      "Uçmak",
      "Gökyüzü",
      "Hava"
    ],
    "wisdom": "Uçağın havada dengede kalmasını sağlayan yanlardaki büyük yapılardır.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_429",
    "word": "Kabe'deki Putlar",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_430",
    "word": "İbn-i Sina Tıp Kitabı",
    "forbidden": [
      "Bilim",
      "İcat",
      "Mimar",
      "Tıp",
      "Astronom"
    ],
    "wisdom": "İslam medeniyetinde yetişen ve bilime yön veren bilim insanları konusudur.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_431",
    "word": "Tur Dağı",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_432",
    "word": "Görgü Kuralları",
    "forbidden": [
      "Edep",
      "Kural",
      "Toplum",
      "Yemek",
      "Konuşmak"
    ],
    "wisdom": "Toplum içinde terbiyeli davranmak için uyulması gereken kurallardır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_433",
    "word": "İbn-i Rüşd Akılcılık",
    "forbidden": [
      "Bilim",
      "İcat",
      "Mimar",
      "Tıp",
      "Astronom"
    ],
    "wisdom": "İslam medeniyetinde yetişen ve bilime yön veren bilim insanları konusudur.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_434",
    "word": "Hz. Hamza'nın Şehitliği",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_435",
    "word": "Emanete Hıyanet Etmemek",
    "forbidden": [
      "Emanet",
      "Korumak",
      "Hıyanet",
      "Münafık",
      "Geri vermek"
    ],
    "wisdom": "Bize bırakılan emanete zarar vermeyip aynen geri vermektir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_436",
    "word": "Cömert Mümin",
    "forbidden": [
      "Cömert",
      "Mümin",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre cömert bir mümin olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_437",
    "word": "Ayetel Kürsi",
    "forbidden": [
      "Bakara",
      "Kürsü",
      "Koruma",
      "Allah",
      "Ayet"
    ],
    "wisdom": "Bakara suresinin 255. ayeti olan çok koruyucu ayettir.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_438",
    "word": "Siyer Kitabı",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_439",
    "word": "Orhan Gazi",
    "forbidden": [
      "Orhan",
      "Bursa",
      "Osmanlı",
      "Padişah",
      "İkinci"
    ],
    "wisdom": "Bursa'yı fetheden ve Osmanlı'yı devlet teşkilatına kavuşturan ikinci padişahtır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_440",
    "word": "Akdeniz Sahili",
    "forbidden": [
      "Akdeniz",
      "Sahil",
      "Yaz",
      "Kum",
      "Sıcak"
    ],
    "wisdom": "Güneyimizdeki Akdeniz'in yazın turist çeken sıcak kumsallarıdır.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_441",
    "word": "Küsleri Barıştırmak",
    "forbidden": [
      "Küs",
      "Barıştırmak",
      "Arkadaş",
      "İyilik",
      "İki kişi"
    ],
    "wisdom": "Kavga edip konuşmayan iki arkadaşı yeniden barıştırmaktır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_442",
    "word": "Aşure Dağıtmak",
    "forbidden": [
      "Aşure",
      "Tatlı",
      "Muharrem",
      "Kase",
      "Komşu"
    ],
    "wisdom": "Muharrem ayında pişen aşure tatlısını komşulara ikram etmektir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_443",
    "word": "Eski Buluşlar",
    "forbidden": [
      "İcat",
      "Buluş",
      "Eski",
      "Tarih",
      "Telefon"
    ],
    "wisdom": "Pusula, matbaa, teleskop gibi geçmişte yapılan büyük icatlardır.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_444",
    "word": "Güleryüzlü Anne",
    "forbidden": [
      "Güleryüzlü",
      "Anne",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre güleryüzlü bir anne olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_445",
    "word": "Kelime-i Şehadet",
    "forbidden": [
      "Allah",
      "Muhammed",
      "İnanç",
      "İslam",
      "Eşhedü"
    ],
    "wisdom": "Müslüman olmak için söylenen inanç cümlesidir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_446",
    "word": "Ağaç Dikmek",
    "forbidden": [
      "Ağaç",
      "Fidan",
      "Toprak",
      "Yeşil",
      "Orman"
    ],
    "wisdom": "Çevremizi yeşillendirmek için toprağa fidan dikmektir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_447",
    "word": "Kızılırmak Nehri",
    "forbidden": [
      "Nehir",
      "Kızılırmak",
      "Türkiye",
      "Uzun",
      "Su"
    ],
    "wisdom": "Sınırlarımız içerisindeki en uzun akarsuyumuz olan nehrimizdir.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_448",
    "word": "Mehter Takımı",
    "forbidden": [
      "Mehter",
      "Müzik",
      "Davul",
      "Ordu",
      "Osmanlı"
    ],
    "wisdom": "Dünyanın ilk askeri bando takımı olan Osmanlı marş grubudur.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_449",
    "word": "Sultan Alparslan",
    "forbidden": [
      "Malazgirt",
      "1071",
      "Bizans",
      "Anadolu",
      "Ordu"
    ],
    "wisdom": "Malazgirt savaşını kazanan Selçuklu hükümdarıdır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_450",
    "word": "Yemek Pişirmek",
    "forbidden": [
      "Yemek",
      "Pişirmek",
      "Tencere",
      "Ocak",
      "Anne"
    ],
    "wisdom": "Ocakta malzemeleri birleştirerek tencerede yemek hazırlamaktır.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_451",
    "word": "Hz. Ebu Bekir'in Sadakati",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_452",
    "word": "Kurtuba Camii Sütunları",
    "forbidden": [
      "Kurtuba",
      "Cami",
      "Sütun",
      "Kemer",
      "İspanya"
    ],
    "wisdom": "İspanya'daki Kurtuba Camii'nin içindeki binlerce mermer sütun ve kemerdir.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_453",
    "word": "Güzel Koku Sürünmek",
    "forbidden": [
      "Koku",
      "Parfüm",
      "Esans",
      "Cami",
      "Sünnet"
    ],
    "wisdom": "Camilerde veya topluluk içinde güzel esanslar kokular sıkınmaktır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_454",
    "word": "Şadırvan",
    "forbidden": [
      "Cami",
      "Su",
      "Abdest",
      "Çeşme",
      "Havuz"
    ],
    "wisdom": "Camilerin bahçesinde abdest almak için yapılan çeşmeli havuzdur.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_455",
    "word": "Mekke Şehri",
    "forbidden": [
      "Kabe",
      "Şehir",
      "Hac",
      "Suudi Arabistan",
      "Doğum"
    ],
    "wisdom": "Peygamberimizin doğduğu ve Kabe'nin bulunduğu kutsal şehirdir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_456",
    "word": "Mimar Sinan Köprüsü",
    "forbidden": [
      "Köprü",
      "Mimar Sinan",
      "Taş",
      "Su",
      "Geçmek"
    ],
    "wisdom": "Mimar Sinan tarafından taşlardan yapılan tarihi su kemeri ve köprüdür.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_457",
    "word": "Fatiha Okumak",
    "forbidden": [
      "Fatiha",
      "Namaz",
      "Sure",
      "Okumak",
      "Dua"
    ],
    "wisdom": "Fatiha suresini namazda veya duaların sonunda okumaktır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_458",
    "word": "Vefalı İnsan",
    "forbidden": [
      "Vefalı",
      "İnsan",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre vefalı bir i̇nsan olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_459",
    "word": "Kuran Kabı",
    "forbidden": [
      "Kuran",
      "Kap",
      "Kılıf",
      "Duvar",
      "Asmak"
    ],
    "wisdom": "Kur'an'ı korumak için konulan kumaş veya deri kılıftır.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_460",
    "word": "Ampul",
    "forbidden": [
      "Edison",
      "Işık",
      "Elektrik",
      "İcat",
      "Karanlık"
    ],
    "wisdom": "Elektriği ışık enerjisine çevirerek dünyayı aydınlatan alettir.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_461",
    "word": "Cumhuriyet Bayramı Kutlaması",
    "forbidden": [
      "Cumhuriyet",
      "Bayram",
      "29 Ekim",
      "Tören",
      "Okul"
    ],
    "wisdom": "Her yıl 29 Ekim'de coşkuyla kutladığımız cumhuriyet bayramı törenleridir.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_462",
    "word": "Yere Çöp Atmamak",
    "forbidden": [
      "Çöp",
      "Yere",
      "Kutu",
      "Temizlik",
      "Sokak"
    ],
    "wisdom": "Çöplerimizi yerlere atmayıp çöp kutusuna bırakmaktır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_463",
    "word": "Şükür",
    "forbidden": [
      "Teşekkür",
      "Nimet",
      "Elhamdülillah",
      "Allah",
      "Artırmak"
    ],
    "wisdom": "Bize verilen nimetler için Allah'a teşekkür etmektir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_464",
    "word": "Dürüst Anne",
    "forbidden": [
      "Dürüst",
      "Anne",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre dürüst bir anne olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_465",
    "word": "Deniz Simidi",
    "forbidden": [
      "Deniz",
      "Simit",
      "Havuz",
      "Şişme",
      "Yüzmek"
    ],
    "wisdom": "Yüzmeyi kolaylaştırmak için kullanılan şişme plastik halkadır.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_466",
    "word": "Yeniçeri Ocağı",
    "forbidden": [
      "Yeniçeri",
      "Asker",
      "Ordu",
      "Osmanlı",
      "Savaş"
    ],
    "wisdom": "Osmanlı Devleti'nin piyade askerlerinden oluşan temel ordusudur.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_467",
    "word": "Meyve Sepeti",
    "forbidden": [
      "Meyve",
      "Sepet",
      "Elma",
      "Muz",
      "Yemek"
    ],
    "wisdom": "İçinde elma, armut, muz gibi taze meyvelerin bulunduğu sepettir.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_468",
    "word": "Komşu Hakkı Kul Hakkıdır",
    "forbidden": [
      "Komşu",
      "Hak",
      "Kul",
      "Ziyaret",
      "Saygı"
    ],
    "wisdom": "Komşularımızın üzerimizdeki hakkının çok önemli olduğunu belirten kuraldır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_469",
    "word": "Fatih Sultan Mehmed Türbesi",
    "forbidden": [
      "Türbe",
      "Fatih",
      "Cami",
      "Mezar",
      "İstanbul"
    ],
    "wisdom": "Fatih Sultan Mehmed'in Fatih Camii haziresinde bulunan tarihi mezarıdır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_470",
    "word": "Çanakkale Anıtı",
    "forbidden": [
      "Anıt",
      "Çanakkale",
      "Şehit",
      "Savaş",
      "Yüksek"
    ],
    "wisdom": "Çanakkale şehitleri anısına boğaza hakim tepede yapılan dev anıttır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_471",
    "word": "Güneş Gözlüğü",
    "forbidden": [
      "Gözlük",
      "Güneş",
      "Yaz",
      "Göz",
      "Siyah"
    ],
    "wisdom": "Yazın güneşin parlak ışınlarından gözlerimizi koruyan koyu renkli gözlüktür.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_472",
    "word": "Kuran Tefsiri",
    "forbidden": [
      "Tefsir",
      "Kuran",
      "Açıklamak",
      "Kitap",
      "Yorum"
    ],
    "wisdom": "Kur'an-ı Kerim'in ayet ayet geniş açıklamalarını içeren dev eserlerdir.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_473",
    "word": "Davud'un Sesi",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_474",
    "word": "Özür Dilemek",
    "forbidden": [
      "Özür",
      "Hata",
      "Kusur",
      "Pişman",
      "Af"
    ],
    "wisdom": "Bir hata yaptığımızda karşımızdakinden özür dileyip gönlünü almaktır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_475",
    "word": "Kar Tanesi",
    "forbidden": [
      "Kar",
      "Beyaz",
      "Kış",
      "Soğuk",
      "Düşmek"
    ],
    "wisdom": "Kışın gökyüzünden düşen eşsiz tasarımlı beyaz kristallerdir.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_476",
    "word": "İsmail'in Teslimiyeti",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_477",
    "word": "Hacı Hurması",
    "forbidden": [
      "Meyve",
      "Hac",
      "Mekke",
      "Yemek",
      "Tatlı"
    ],
    "wisdom": "Hacıların Mekke'den dönüşte misafirlere ikram ettiği lezzetli meyvedir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_478",
    "word": "Elif Ba Harfleri",
    "forbidden": [
      "Harf",
      "Elif Ba",
      "Arapça",
      "Kuran",
      "İlk"
    ],
    "wisdom": "Elif Ba cüzündeki Arapça harflerin tamamıdır.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_479",
    "word": "Galata Kulesi İstanbul",
    "forbidden": [
      "Türkiye",
      "Deniz",
      "Dağ",
      "Tarih",
      "Şehir"
    ],
    "wisdom": "Coğrafya ve tarih derslerinde öğrendiğimiz temel konulardandır.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_480",
    "word": "Antarktika Buzulları",
    "forbidden": [
      "Antarktika",
      "Buzul",
      "Soğuk",
      "Penguen",
      "Kutup"
    ],
    "wisdom": "Güney kutbunda bulunan, üzerinde sadece penguenlerin yaşadığı buz kıtasıdır.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_481",
    "word": "Sarı Muz",
    "forbidden": [
      "Muz",
      "Sarı",
      "Meyve",
      "Kabuk",
      "Maymun"
    ],
    "wisdom": "Kabuğunu soyarak yediğimiz potasyum zengini sarı meyvedir.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_482",
    "word": "Kur'an Meali",
    "forbidden": [
      "Kuran",
      "Sure",
      "Ayet",
      "Okumak",
      "Cüz"
    ],
    "wisdom": "Kur'an-ı Kerim ile ilgili ayet, sure ve okuma kuralları konusudur.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_483",
    "word": "Türkiye Cumhuriyeti",
    "forbidden": [
      "Türkiye",
      "Cumhuriyet",
      "Atatürk",
      "Başkent",
      "Vatan"
    ],
    "wisdom": "Üzerinde özgürce yaşadığımız şanlı vatanımız ve devletimizdir.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_484",
    "word": "Güneş Saati",
    "forbidden": [
      "Saat",
      "Güneş",
      "Gölge",
      "Zaman",
      "Eski"
    ],
    "wisdom": "Güneşin konumuna göre gölgenin düştüğü yerlerden zamanı bulan eski saattir.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_485",
    "word": "Topkapı Sarayı",
    "forbidden": [
      "Saray",
      "İstanbul",
      "Osmanlı",
      "Fatih",
      "Müze"
    ],
    "wisdom": "Fatih Sultan Mehmed tarafından yaptırılan, padişahların yaşadığı tarihi saraydır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_486",
    "word": "Adem'in Yaratılışı",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_487",
    "word": "Mus'ab bin Umeyr Öğretmenliği",
    "forbidden": [
      "Öğretmen",
      "Okul",
      "Ders",
      "Sınıf",
      "Öğrenmek"
    ],
    "wisdom": "Öğrencilere faydalı bilgiler öğreten rehber kişidir.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_488",
    "word": "Tecvid Kuralları",
    "forbidden": [
      "Tecvid",
      "Kural",
      "Kuran",
      "Okumak",
      "Harf"
    ],
    "wisdom": "Kur'an'ı doğru ve kurallarına uygun okumayı sağlayan harf kurallarıdır.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_489",
    "word": "Beden Temizliği",
    "forbidden": [
      "Vücut",
      "Temiz",
      "Banyo",
      "Yıkanmak",
      "Su"
    ],
    "wisdom": "Bütün vücudumuzu yıkayarak temiz tutma alışkanlığıdır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_490",
    "word": "Temizlik İmandandır",
    "forbidden": [
      "İbadet",
      "Din",
      "Müslüman",
      "Allah",
      "İslam"
    ],
    "wisdom": "İslam dininde yer alan temel kavram ve ibadetlerdendir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_491",
    "word": "İslam Tarihi Dersi",
    "forbidden": [
      "Tarih",
      "Savaş",
      "Zafer",
      "Asker",
      "Eski"
    ],
    "wisdom": "Milletimizin geçmişte kazandığı şanlı tarihi başarılardandır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_492",
    "word": "Kuran Okuma Yarışması",
    "forbidden": [
      "Yarışma",
      "Kuran",
      "Okumak",
      "Güzel ses",
      "Ödül"
    ],
    "wisdom": "Öğrenciler arasında düzenlenen güzel Kur'an okuma yarışmasıdır.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_493",
    "word": "Kötü Arkadaştan Kaçınmak",
    "forbidden": [
      "Arkadaş",
      "Kötü",
      "Kaçınmak",
      "Ahlak",
      "Yanlış"
    ],
    "wisdom": "Bizi kötü alışkanlıklara yönlendiren insanlardan uzak durmaktır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_494",
    "word": "Cömert Baba",
    "forbidden": [
      "Cömert",
      "Baba",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre cömert bir baba olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_495",
    "word": "Osmanlı Gezgini",
    "forbidden": [
      "Gezgin",
      "Seyyah",
      "Evliya Çelebi",
      "Osmanlı",
      "Yolculuk"
    ],
    "wisdom": "Osmanlı coğrafyasını karış karış gezen Evliya Çelebi'dir.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_496",
    "word": "Vahiy Katibi",
    "forbidden": [
      "Yazmak",
      "Sahabe",
      "Kuran",
      "Peygamber",
      "Zeyd"
    ],
    "wisdom": "Peygamberimize gelen ayetleri kağıtlara veya taşlara yazan sahabelerdir.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_497",
    "word": "Sübhanallah Demek",
    "forbidden": [
      "Zikir",
      "Sübhanallah",
      "Söylemek",
      "Namaz",
      "Allah"
    ],
    "wisdom": "Allah'ı noksan sıfatlardan tenzih etmek için söylenen zikirdir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_498",
    "word": "Ali Kuşçu Astronomi",
    "forbidden": [
      "Ali Kuşçu",
      "Astronom",
      "Uzay",
      "Ay",
      "Fatih"
    ],
    "wisdom": "Ali Kuşçu'nun Ay'ın haritasını çıkararak yaptığı uzay çalışmalarındandır.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_499",
    "word": "Kudüs Fethi",
    "forbidden": [
      "Kudüs",
      "Fetih",
      "Selahaddin",
      "Ömer",
      "Tarih"
    ],
    "wisdom": "Kudüs'ün Müslümanlar tarafından fethedilip adaletle yönetilmesi dönemidir.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_500",
    "word": "Hasta Ziyareti",
    "forbidden": [
      "Ahlak",
      "Edep",
      "İyi",
      "Davranış",
      "İslam"
    ],
    "wisdom": "Müslümanın hayatında uygulaması gereken güzel ahlak kuralıdır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_501",
    "word": "Zekat Vermek",
    "forbidden": [
      "Zekat",
      "Para",
      "Fakir",
      "Vermek",
      "Yardım"
    ],
    "wisdom": "Zengin Müslümanların yılda bir kez mallarının kırkta birini fakirlere vermesidir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_502",
    "word": "Aşure Çorbası",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_503",
    "word": "Selçuklu Devleti",
    "forbidden": [
      "Selçuklu",
      "Devlet",
      "Alparslan",
      "Anadolu",
      "Tarih"
    ],
    "wisdom": "Anadolu'yu yurt edinen büyük Selçuklu Türk devletidir.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_504",
    "word": "Osmanlı Bayrağı",
    "forbidden": [
      "Bayrak",
      "Kırmızı",
      "Hilal",
      "Osmanlı",
      "Üç hilal"
    ],
    "wisdom": "Osmanlı Devleti'nin üzerinde hilaller bulunan şanlı bayrağıdır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_505",
    "word": "Gökkuşağı Renkleri",
    "forbidden": [
      "Renk",
      "Gökkuşağı",
      "Yedi",
      "Kırmızı",
      "Mavi"
    ],
    "wisdom": "Yağmurdan sonra gökyüzünde beliren yedi renkli kuşağın renkleridir.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_506",
    "word": "Kitap Okumak",
    "forbidden": [
      "Kitap",
      "Okumak",
      "Sayfa",
      "Hikaye",
      "Kütüphane"
    ],
    "wisdom": "Yeni bilgiler öğrenmek ve zihnimizi geliştirmek için kitapları okumaktır.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_507",
    "word": "Yavuz Sultan Selim Han",
    "forbidden": [
      "Yavuz",
      "Selim",
      "Mısır",
      "Halife",
      "Padişah"
    ],
    "wisdom": "Kutsal emanetleri İstanbul'a getiren ve ilk halife olan Osmanlı padişahıdır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_508",
    "word": "Güzel Komşu",
    "forbidden": [
      "Güzel",
      "Komşu",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre güzel bir komşu olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_509",
    "word": "Çalışkan İnsan",
    "forbidden": [
      "Çalışkan",
      "İnsan",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre çalışkan bir i̇nsan olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_510",
    "word": "Ezan Sesi",
    "forbidden": [
      "Çağrı",
      "Namaz",
      "Müezzin",
      "Hoparlör",
      "Minare"
    ],
    "wisdom": "Ezanın minareden yankılanan güzel çağrı sesidir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_511",
    "word": "Temiz Dost",
    "forbidden": [
      "Temiz",
      "Dost",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre temiz bir dost olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_512",
    "word": "Sadaka Taşları",
    "forbidden": [
      "Sadaka",
      "Taş",
      "Osmanlı",
      "Fakir",
      "Para"
    ],
    "wisdom": "Eski dönemlerde cami yanına konulan, alanın ve verenin birbirini görmediği yardım taşlarıdır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_513",
    "word": "Osmanlı Denizcisi",
    "forbidden": [
      "Denizci",
      "Piri Reis",
      "Osmanlı",
      "Kaptan",
      "Gemi"
    ],
    "wisdom": "Osmanlı donanmasında görev yapan Piri Reis ve Barbaros gibi kaptanlardır.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_514",
    "word": "Kuran Dinlemek",
    "forbidden": [
      "Dinlemek",
      "Kuran",
      "Sessizce",
      "Hoca",
      "Sevab"
    ],
    "wisdom": "Kur'an okunurken sessizce ve saygıyla dinleme ibadetidir.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_515",
    "word": "Çanakkale",
    "forbidden": [
      "1915",
      "Boğaz",
      "Geçilmez",
      "Savaş",
      "Seyit"
    ],
    "wisdom": "1915'te 'Geçilmez' destanının yazıldığı tarihi yarımadamızdır.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_516",
    "word": "Dört Büyük Kitap",
    "forbidden": [
      "Kuran",
      "Tevrat",
      "Zebur",
      "İncil",
      "Kitap"
    ],
    "wisdom": "Allah'ın gönderdiği dört kutsal kitabın (Tevrat, Zebur, İncil, Kur'an) tamamıdır.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_517",
    "word": "Çöl Devesi",
    "forbidden": [
      "Deve",
      "Çöl",
      "Hörgüç",
      "Su",
      "Sıcak"
    ],
    "wisdom": "Hörgücünde yağ depolayarak çölde günlerce susuz yaşayabilen hayvandır.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_518",
    "word": "Efes Antik Kenti",
    "forbidden": [
      "Efes",
      "İzmir",
      "Antik",
      "Tarih",
      "Kütüphane"
    ],
    "wisdom": "İzmir Selçuk'ta bulunan, Meryem Ana ve Celsus kütüphanesini barındıran antik kenttir.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_519",
    "word": "Mikrop Teorisi Akşemseddin",
    "forbidden": [
      "Mikrop",
      "Akşemseddin",
      "Hastalık",
      "Gözle görülmeyen",
      "Teori"
    ],
    "wisdom": "Newton ve Pasteur'dan önce hastalıkların gözle görülmeyen mikroplarla yayıldığını söyleyen alimdir.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_520",
    "word": "Ağaç Yaprağı",
    "forbidden": [
      "Yaprak",
      "Ağaç",
      "Yeşil",
      "Sonbahar",
      "Düşmek"
    ],
    "wisdom": "Ağaçların dallarında bulunan, sonbaharda sararıp dökülen yeşil kısımlardır.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_521",
    "word": "Kadir Gecesi Duası",
    "forbidden": [
      "Kadir Gecesi",
      "Dua",
      "Ramazan",
      "İstemek",
      "Af"
    ],
    "wisdom": "Kadir gecesinde yapılan ve kabul olması umulan dualardır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_522",
    "word": "Cami Halısı",
    "forbidden": [
      "Namaz",
      "Yere sermek",
      "Yumuşak",
      "Yeşil",
      "Cami"
    ],
    "wisdom": "Camilerin içine serilen, üzerinde namaz kılınan temiz halılardır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_523",
    "word": "Selçuklu Kartalı",
    "forbidden": [
      "Kartal",
      "Çift başlı",
      "Selçuklu",
      "Simge",
      "Taş"
    ],
    "wisdom": "Büyük Selçuklu devletinin simgesi olan çift başlı kartal sembolüdür.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_524",
    "word": "Kırmızı Çilek",
    "forbidden": [
      "Çilek",
      "Kırmızı",
      "Meyve",
      "Yaz",
      "Tatlı"
    ],
    "wisdom": "Yaz aylarında çıkan, üzerinde küçük çekirdekleri olan kırmızı tatlı meyvedir.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_525",
    "word": "Tarihi Eserler",
    "forbidden": [
      "Eser",
      "Eski",
      "Tarihi",
      "Müze",
      "Korumak"
    ],
    "wisdom": "Geçmişten günümüze kadar gelen cami, kale gibi tarihi miras yapılardır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_526",
    "word": "Gezgin Evliya Çelebi",
    "forbidden": [
      "Evliya Çelebi",
      "Seyyah",
      "Gezgin",
      "Gezmek",
      "Seyahatname"
    ],
    "wisdom": "Ömrünü gezerek ve yazarak geçiren ünlü Osmanlı seyyahıdır.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_527",
    "word": "Sadık Kardeş",
    "forbidden": [
      "Sadık",
      "Kardeş",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre sadık bir kardeş olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_528",
    "word": "Minare Mahyası",
    "forbidden": [
      "Minare",
      "Mahya",
      "Işık",
      "Cami",
      "Ramazan"
    ],
    "wisdom": "Ramazan ayında minarelerin arasına asılan ışıklı yazı sistemidir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_529",
    "word": "Güzel Öğretmen",
    "forbidden": [
      "Güzel",
      "Öğretmen",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre güzel bir öğretmen olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_530",
    "word": "El-Cezeri Makineleri",
    "forbidden": [
      "El-Cezeri",
      "Robot",
      "Makine",
      "Mühendis",
      "Su"
    ],
    "wisdom": "El-Cezeri'nin su çarkları ve dişlilerle çalışan mekanik düzenekleridir.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_531",
    "word": "Kur'an Kursu",
    "forbidden": [
      "Kuran",
      "Sure",
      "Ayet",
      "Okumak",
      "Cüz"
    ],
    "wisdom": "Kur'an-ı Kerim ile ilgili ayet, sure ve okuma kuralları konusudur.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_532",
    "word": "Kanuni Sultan Süleyman",
    "forbidden": [
      "Kanun",
      "Uzun",
      "Muhteşem",
      "Padişah",
      "Sadrazam"
    ],
    "wisdom": "Osmanlı tahtında en uzun süre kalan muhteşem padişahtır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_533",
    "word": "Kopya Çekmemek",
    "forbidden": [
      "Sınav",
      "Kopya",
      "Yalan",
      "Kul hakkı",
      "Kul"
    ],
    "wisdom": "Sınavlarda dürüst davranıp başkasının kağıdına bakmamaktır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_534",
    "word": "Hacerü'l-Esved Taşı",
    "forbidden": [
      "Siyah",
      "Taş",
      "Kabe",
      "Cennet",
      "Selamlamak"
    ],
    "wisdom": "Kabe'nin köşesinde bulunan ve tavafa başlama işareti olan siyah taştır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_535",
    "word": "Sure Sayısı Yüz Ondört",
    "forbidden": [
      "Sure",
      "Yüz ondört",
      "114",
      "Kuran",
      "Fatiha"
    ],
    "wisdom": "Kur'an-ı Kerim'de tam olarak 114 sure bulunduğunu belirten kuraldır.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_536",
    "word": "Cemaat",
    "forbidden": [
      "Namaz",
      "İmam",
      "Birlikte",
      "Topluluk",
      "Mescid"
    ],
    "wisdom": "Namazı cemaatle kılmak birlik ve beraberliğimizi artırır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_537",
    "word": "Yeni Yıl",
    "forbidden": [
      "Yıl",
      "Yeni",
      "Ocak",
      "Takvim",
      "Tarih"
    ],
    "wisdom": "Takvimlerin sıfırlanıp 1 Ocak'ta yeni bir yıla başlamasıdır.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_538",
    "word": "Osmanlı Kılıcı",
    "forbidden": [
      "Kılıç",
      "Demir",
      "Savaş",
      "Osmanlı",
      "Asker"
    ],
    "wisdom": "Osmanlı askerlerinin kullandığı eğri ve keskin çelik kılıçtır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_539",
    "word": "Kadın Sahabiler",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_540",
    "word": "Akraba Ziyareti",
    "forbidden": [
      "Ahlak",
      "Edep",
      "İyi",
      "Davranış",
      "İslam"
    ],
    "wisdom": "Müslümanın hayatında uygulaması gereken güzel ahlak kuralıdır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_541",
    "word": "Hz. Yunus",
    "forbidden": [
      "Balık",
      "Karnı",
      "Deniz",
      "Fırtına",
      "Dua"
    ],
    "wisdom": "Balığın karnında dua ederek kurtulan peygamberdir.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_542",
    "word": "Tarih Müzesi",
    "forbidden": [
      "Müze",
      "Tarih",
      "Eser",
      "Ziyaret",
      "Gezmek"
    ],
    "wisdom": "Tarihi kalıntıların ve eski eşyaların sergilendiği kültür alanıdır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_543",
    "word": "Güzel İnsan",
    "forbidden": [
      "Güzel",
      "İnsan",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre güzel bir i̇nsan olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_544",
    "word": "Anneye Saygı",
    "forbidden": [
      "Saygı",
      "Edep",
      "Ahlak",
      "Büyükler",
      "Davranış"
    ],
    "wisdom": "İnsanlar arasında sevgiyi pekiştiren ahlaki saygı kuralıdır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_545",
    "word": "Sevgi",
    "forbidden": [
      "Kalp",
      "Şefkat",
      "Arkadaş",
      "Anne",
      "Dost"
    ],
    "wisdom": "İnsanları içtenlikle sevmek ve onlara değer vermektir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_546",
    "word": "Çalışkan Komşu",
    "forbidden": [
      "Çalışkan",
      "Komşu",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre çalışkan bir komşu olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_547",
    "word": "Güzel Abdest",
    "forbidden": [
      "Abdest",
      "Su",
      "Yıkamak",
      "Namaz",
      "Temiz"
    ],
    "wisdom": "Namaz öncesinde kurallara uygun olarak alınan temiz abdesttir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_548",
    "word": "Hoşgörü",
    "forbidden": [
      "Müsamaha",
      "Hata",
      "Affetmek",
      "Anlayış",
      "Kusur"
    ],
    "wisdom": "Başkalarının hatalarını anlayışla karşılayıp affetmektir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_549",
    "word": "Kuran Alfabesi",
    "forbidden": [
      "Harf",
      "Alfabe",
      "Arapça",
      "Elif Ba",
      "Kuran"
    ],
    "wisdom": "Kur'an-ı Kerim'in yazıldığı Arapça harfler alfabesidir.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_550",
    "word": "Hayvanlara Su Vermek",
    "forbidden": [
      "Hayvan",
      "Su",
      "Kap",
      "Sokak",
      "Merhamet"
    ],
    "wisdom": "Yaz sıcaklarında sokak hayvanları için kaplara su doldurmaktır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_551",
    "word": "Yetim Başını Okşamak",
    "forbidden": [
      "Yetim",
      "Çocuk",
      "Sevgi",
      "Başını okşamak",
      "Yetimhane"
    ],
    "wisdom": "Annesi veya babası olmayan yetim çocuklara sevgi ve şefkat göstermektir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_552",
    "word": "Dolmabahçe Sarayı Bahçesi",
    "forbidden": [
      "Dolmabahçe",
      "Saray",
      "Bahçe",
      "İstanbul",
      "Müze"
    ],
    "wisdom": "İstanbul Beşiktaş'taki Dolmabahçe sarayının saat kuleli yeşil bahçesidir.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_553",
    "word": "Anıtkabir Aslanlı Yol",
    "forbidden": [
      "Anıtkabir",
      "Aslan",
      "Yol",
      "Atatürk",
      "Ankara"
    ],
    "wisdom": "Ankara'daki Anıtkabir'e girişte aslan heykellerinin bulunduğu taş döşeli yoldur.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_554",
    "word": "Hekimlik Sanatı",
    "forbidden": [
      "Hekim",
      "Doktor",
      "Tıp",
      "Şifa",
      "Hasta"
    ],
    "wisdom": "Hastalara teşhis koyup bitkilerle ilaç hazırlama doktorluk mesleğidir.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_555",
    "word": "Cömert İnsan",
    "forbidden": [
      "Cömert",
      "İnsan",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre cömert bir i̇nsan olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_556",
    "word": "Konya Şehri Selçuklu",
    "forbidden": [
      "Konya",
      "Selçuklu",
      "Başkent",
      "Mevlana",
      "Şehir"
    ],
    "wisdom": "Büyük Selçuklu devletinin Anadolu'daki başkenti olan tarihi şehrimizdir.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_557",
    "word": "Güleryüzlü Baba",
    "forbidden": [
      "Güleryüzlü",
      "Baba",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre güleryüzlü bir baba olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_558",
    "word": "Duvar Takvimi",
    "forbidden": [
      "Namaz",
      "Vakit",
      "Tarih",
      "Yazı",
      "Kağıt"
    ],
    "wisdom": "Her günün namaz vakitlerini ve dini bilgileri gösteren yapraklı takvimdir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_559",
    "word": "Nemrut Dağı Heykelleri",
    "forbidden": [
      "Nemrut",
      "Heykel",
      "Adıyaman",
      "Dağ",
      "Güneşin doğuşu"
    ],
    "wisdom": "Adıyaman'da Kommagene krallığından kalan devasa taş heykellerin bulunduğu zirvedir.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_560",
    "word": "Müezzin Çağrısı",
    "forbidden": [
      "Ezan",
      "Müezzin",
      "Namaz",
      "Cami",
      "Davet"
    ],
    "wisdom": "Müezzinin ezan okuyarak insanları namaza davet etmesidir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_561",
    "word": "Dürüst Müslüman",
    "forbidden": [
      "Dürüst",
      "Müslüman",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre dürüst bir müslüman olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_562",
    "word": "Gezi Rehberi",
    "forbidden": [
      "Gezi",
      "Rehber",
      "Kitap",
      "Şehir",
      "Tanıtım"
    ],
    "wisdom": "Gezilecek tarihi yerleri ve şehirleri tanıtan resimli kitapçıklardır.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_563",
    "word": "Verilen Sözü Tutmak",
    "forbidden": [
      "Söz",
      "Tutmak",
      "Sadakat",
      "Güven",
      "Söylemek"
    ],
    "wisdom": "Söz verdiğimiz işi ne olursa olsun zamanında yapmaktır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_564",
    "word": "Sadaka Kutuları",
    "forbidden": [
      "Cami",
      "Para",
      "Kutu",
      "Sadaka",
      "Vermek"
    ],
    "wisdom": "Yardım paralarının birikmesi için camilere konulan kutulardır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_565",
    "word": "Ayet Tefsiri",
    "forbidden": [
      "Ayet",
      "Tefsir",
      "Açıklama",
      "Anlam",
      "Yorum"
    ],
    "wisdom": "Ayetlerin anlamlarını detaylı olarak açıklayan bilimsel yorumdur.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_566",
    "word": "Hicret Yolculuğu",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_567",
    "word": "Ayet Ezberlemek",
    "forbidden": [
      "Kuran",
      "Sure",
      "Ayet",
      "Okumak",
      "Cüz"
    ],
    "wisdom": "Kur'an-ı Kerim ile ilgili ayet, sure ve okuma kuralları konusudur.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_568",
    "word": "Arapça Harfler",
    "forbidden": [
      "Harf",
      "Arapça",
      "Elif Ba",
      "Kuran",
      "Yazı"
    ],
    "wisdom": "Kur'an-ı Kerim'in orijinal dili olan Arap alfabesi harfleridir.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_569",
    "word": "Kur'an Okumak",
    "forbidden": [
      "Kuran",
      "Sure",
      "Ayet",
      "Okumak",
      "Cüz"
    ],
    "wisdom": "Kur'an-ı Kerim ile ilgili ayet, sure ve okuma kuralları konusudur.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_570",
    "word": "Fakirleri Düşünmek",
    "forbidden": [
      "Fakir",
      "Yoksul",
      "Yardım",
      "Zekat",
      "Açlık"
    ],
    "wisdom": "Yoksul insanların sıkıntılarını düşünüp onlara yardım etmektir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_571",
    "word": "Kuran Müzesi",
    "forbidden": [
      "Müze",
      "Kuran",
      "Eski",
      "Tarihi",
      "Ziyaret"
    ],
    "wisdom": "Çok eski el yazması tarihi Kur'an-ı Kerimlerin sergilendiği müzedir.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_572",
    "word": "Bilal'in İlk Ezanı",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_573",
    "word": "Sadık Anne",
    "forbidden": [
      "Sadık",
      "Anne",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre sadık bir anne olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_574",
    "word": "Peygamberimizin Ahlakı",
    "forbidden": [
      "Peygamber",
      "Elçi",
      "Allah",
      "Kuran",
      "Vahiy"
    ],
    "wisdom": "Peygamberlikle ilgili kutsal bir kavramı ifade eder.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_575",
    "word": "Bayram Sabahı",
    "forbidden": [
      "Bayram",
      "Sabah",
      "Namaz",
      "Yeni kıyafet",
      "Kahvaltı"
    ],
    "wisdom": "Bayram gününün başladığı neşeli ve tatlı sabah vaktidir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_576",
    "word": "Hicret Yılları",
    "forbidden": [
      "Hicret",
      "Göç",
      "Mekke",
      "Medine",
      "Yıl"
    ],
    "wisdom": "Müslümanların Medine'ye göç ettiği dönemi kapsayan tarihi yıllardır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_577",
    "word": "Sübhâneke Duası",
    "forbidden": [
      "Namaz",
      "Dua",
      "Başlamak",
      "Sübhâneke",
      "Okumak"
    ],
    "wisdom": "Namazın ilk rekatında tekbirden hemen sonra okunan giriş duasıdır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_578",
    "word": "Flüt Çalmak",
    "forbidden": [
      "Flüt",
      "Çalmak",
      "Üflemek",
      "Müzik",
      "Ders"
    ],
    "wisdom": "Plastik veya ahşap flütü üfleyerek güzel melodiler çıkarmaktır.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_579",
    "word": "Kuran Yolu",
    "forbidden": [
      "Kuran",
      "Yol",
      "Rehber",
      "İslam",
      "Doğru"
    ],
    "wisdom": "Kur'an-ı Kerim'in gösterdiği doğru ve nurlu yaşam yoludur.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_580",
    "word": "Emaneti Korumak",
    "forbidden": [
      "Emanet",
      "Saklamak",
      "Korumak",
      "Geri vermek",
      "Güven"
    ],
    "wisdom": "Bize geçici olarak bırakılan bir eşyayı sapasağlam muhafaza etmektir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_581",
    "word": "Tevrat Kitabı",
    "forbidden": [
      "Tevrat",
      "Musa",
      "Peygamber",
      "Kitap",
      "İlahi"
    ],
    "wisdom": "Hz. Musa peygambere indirilen ilahi kutsal kitaptır.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_582",
    "word": "Endülüs Kurtuba",
    "forbidden": [
      "Kurtuba",
      "Endülüs",
      "İspanya",
      "Cami",
      "Tarih"
    ],
    "wisdom": "İspanya'da İslam medeniyetinin en büyük şehirlerinden olan Kurtuba'dır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_583",
    "word": "Sevgili Mümin",
    "forbidden": [
      "Sevgili",
      "Mümin",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre sevgili bir mümin olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_584",
    "word": "Güneş Işığı",
    "forbidden": [
      "Güneş",
      "Dünya",
      "Kitap",
      "Okul",
      "Telefon"
    ],
    "wisdom": "Günlük hayatta karşılaştığımız temel genel kültür kavramıdır.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_585",
    "word": "Kur'an Ayetleri",
    "forbidden": [
      "Kuran",
      "Sure",
      "Ayet",
      "Okumak",
      "Cüz"
    ],
    "wisdom": "Kur'an-ı Kerim ile ilgili ayet, sure ve okuma kuralları konusudur.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_586",
    "word": "Kuran Hatmi",
    "forbidden": [
      "Hatimi",
      "Kuran",
      "Bitirmek",
      "Dua",
      "Okumak"
    ],
    "wisdom": "Kur'an'ı baştan sona okuyup bitirdikten sonra yapılan duadır.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_587",
    "word": "Tarihi Köprüler",
    "forbidden": [
      "Köprü",
      "Su",
      "Geçmek",
      "Tarihi",
      "Taş"
    ],
    "wisdom": "Akarsuların üzerine taşlardan yapılan tarihi köprü kemerleridir.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_588",
    "word": "Cennet Bahçesi",
    "forbidden": [
      "Cennet",
      "Ahiret",
      "Bahçe",
      "Güzel",
      "Ödül"
    ],
    "wisdom": "Müminlerin ebediyen mutlu kalacağı mükafat bahçeleridir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_589",
    "word": "Küçüklere Sarılmak",
    "forbidden": [
      "Küçükler",
      "Sarılmak",
      "Sevgi",
      "Çocuk",
      "Şefkat"
    ],
    "wisdom": "Kendimizden küçük çocuklara sevgiyle sarılıp şefkat göstermektir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_590",
    "word": "Gazneli Sarayı Bilgini",
    "forbidden": [
      "Biruni",
      "Gazneli",
      "Saray",
      "Mahmud",
      "Bilgin"
    ],
    "wisdom": "Sultan Mahmud'un 'Sarayımın en değerli hazinesi' dediği Biruni'dir.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_591",
    "word": "Herkesi Eşit Görmek",
    "forbidden": [
      "Eşit",
      "Adalet",
      "İnsan",
      "Aynı",
      "Ahlak"
    ],
    "wisdom": "İnsanları zenginliğine veya görünüşüne göre ayırmayıp eşit görmektir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_592",
    "word": "Tarihi Saat Kulesi",
    "forbidden": [
      "Saat kulesi",
      "Tarihi",
      "İzmir",
      "Meydan",
      "Eski"
    ],
    "wisdom": "Şehir meydanlarında yer alan, üzerinde büyük saat olan tarihi kulelerdir.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_593",
    "word": "Şifa Dağıtmak",
    "forbidden": [
      "Şifa",
      "Hasta",
      "Doktor",
      "İyileşmek",
      "İlaç"
    ],
    "wisdom": "Doktorların hastaları tedavi ederek iyileşmelerine vesile olmasıdır.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_594",
    "word": "Kuran Kursu Öğrencisi",
    "forbidden": [
      "Kurs",
      "Öğrenci",
      "Çocuk",
      "Kuran",
      "Öğrenmek"
    ],
    "wisdom": "Yaz aylarında camiye veya kursa gidip Kur'an öğrenen çocuktur.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_595",
    "word": "Kur'an Cüzü",
    "forbidden": [
      "Kuran",
      "Sure",
      "Ayet",
      "Okumak",
      "Cüz"
    ],
    "wisdom": "Kur'an-ı Kerim ile ilgili ayet, sure ve okuma kuralları konusudur.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_596",
    "word": "İlaç Hazırlamak",
    "forbidden": [
      "Bilim",
      "İcat",
      "Mimar",
      "Tıp",
      "Astronom"
    ],
    "wisdom": "İslam medeniyetinde yetişen ve bilime yön veren bilim insanları konusudur.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_597",
    "word": "İlk Matematikçi",
    "forbidden": [
      "Bilim",
      "İcat",
      "Mimar",
      "Tıp",
      "Astronom"
    ],
    "wisdom": "İslam medeniyetinde yetişen ve bilime yön veren bilim insanları konusudur.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_598",
    "word": "Cömert Çocuk",
    "forbidden": [
      "Cömert",
      "Çocuk",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre cömert bir çocuk olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_599",
    "word": "Sadık Çocuk",
    "forbidden": [
      "Sadık",
      "Çocuk",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre sadık bir çocuk olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_600",
    "word": "Ezan",
    "forbidden": [
      "Müezzin",
      "Namaz",
      "Minare",
      "Çağrı",
      "Okumak"
    ],
    "wisdom": "Ezan, bizi günde beş vakit namaza çağıran güzel sestir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_601",
    "word": "Cami Minaresi",
    "forbidden": [
      "Ezan",
      "Yüksek",
      "Kule",
      "Şerefe",
      "Cami"
    ],
    "wisdom": "Camilerde ezanın okunduğu ince, uzun ve yüksek kulelerdir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_602",
    "word": "Hz. Yusuf",
    "forbidden": [
      "Kuyu",
      "Güzellik",
      "Rüya",
      "Mısır",
      "Kardeş"
    ],
    "wisdom": "Kardeşleri tarafından kuyuya atılan ve rüya tabir eden peygamberdir.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_603",
    "word": "Paylaşımcı Olmak",
    "forbidden": [
      "Paylaşmak",
      "Vermek",
      "Cömertlik",
      "Arkadaş",
      "Oyuncak"
    ],
    "wisdom": "Eşyalarımızı ve yiyeceklerimizi arkadaşlarımızla bölüşebilmektir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_604",
    "word": "Divan-ı Hümayun",
    "forbidden": [
      "Divan",
      "Meclis",
      "Saray",
      "Devlet",
      "Karar"
    ],
    "wisdom": "Osmanlı'da devlet işlerinin görüşülüp karara bağlandığı büyük meclistir.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_605",
    "word": "Maûn Suresi",
    "forbidden": [
      "Maûn",
      "Sure",
      "Yetim",
      "Namaz",
      "Yoksul"
    ],
    "wisdom": "Yetimlere kötü davrananları ve gösteriş için namaz kılanları uyaran suredir.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_606",
    "word": "Temiz Arkadaş",
    "forbidden": [
      "Temiz",
      "Arkadaş",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre temiz bir arkadaş olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_607",
    "word": "Ravza-i Mutahhara",
    "forbidden": [
      "Medine",
      "Peygamber",
      "Kabir",
      "Cami",
      "Cennet bahçesi"
    ],
    "wisdom": "Mescid-i Nebevi'de Peygamberimizin kabri ile minberi arasındaki temiz alandır.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_608",
    "word": "Nâs Suresi",
    "forbidden": [
      "Nâs",
      "Sure",
      "Kuran",
      "Kul euzü",
      "Son"
    ],
    "wisdom": "Kur'an-ı Kerim'in en son suresi olan sığınma suresidir.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_609",
    "word": "Çevre Temizliği",
    "forbidden": [
      "Çevre",
      "Temiz",
      "Çöp",
      "Sokak",
      "Doğa"
    ],
    "wisdom": "Yaşadığımız çevreyi kirletmeyip temiz tutma bilincidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_610",
    "word": "Bayram Ziyareti",
    "forbidden": [
      "Bayram",
      "Ziyaret",
      "Akraba",
      "Büyükler",
      "Gitmek"
    ],
    "wisdom": "Bayram günlerinde akrabaları ve komşuları ziyaret etmektir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_611",
    "word": "Anadolu Toprakları",
    "forbidden": [
      "Anadolu",
      "Toprak",
      "Ülke",
      "Türkiye",
      "Asya"
    ],
    "wisdom": "Bin yıldır üzerinde yaşadığımız vatanımız olan tarihi yarımadadır.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_612",
    "word": "Cömert Müslüman",
    "forbidden": [
      "Cömert",
      "Müslüman",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre cömert bir müslüman olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_613",
    "word": "Mihrap",
    "forbidden": [
      "Cami",
      "İmam",
      "Yön",
      "Kıble",
      "Namaz"
    ],
    "wisdom": "Camide imamın namaz kıldırırken durduğu özel bölümdür.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_614",
    "word": "Temiz Komşu",
    "forbidden": [
      "Temiz",
      "Komşu",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre temiz bir komşu olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_615",
    "word": "Çalışkan Dost",
    "forbidden": [
      "Çalışkan",
      "Dost",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre çalışkan bir dost olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_616",
    "word": "Fatih Gemileri",
    "forbidden": [
      "Gemi",
      "Fatih",
      "İstanbul",
      "Fetih",
      "Deniz"
    ],
    "wisdom": "İstanbul'un fethinde kullanılan ve Haliç'e indirilen savaş gemileridir.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_617",
    "word": "Mizan Terazisi",
    "forbidden": [
      "Ahiret",
      "Terazi",
      "Hesap",
      "Günah",
      "Sevap"
    ],
    "wisdom": "İnsanların iyilik ve kötülüklerinin tartılacağı ilahi terazidir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_618",
    "word": "Ramazan Hilali",
    "forbidden": [
      "Ay",
      "Oruç",
      "Gökyüzü",
      "Hilal",
      "Başlamak"
    ],
    "wisdom": "Ramazan ayının başladığını müjdeleyen gökteki ince aydır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_619",
    "word": "Niyet Etmek",
    "forbidden": [
      "Niyet",
      "Namaz",
      "Oruç",
      "Kalp",
      "Başlamak"
    ],
    "wisdom": "Bir ibadete başlamadan önce içimizden ne yapacağımızı karar altına almaktır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_620",
    "word": "Ekmek Fırını",
    "forbidden": [
      "Ekmek",
      "Fırın",
      "Sıcak",
      "Bakkal",
      "Un"
    ],
    "wisdom": "Sıcak ekmeklerin ve pidelerin piştiği unlu mamul dükkanıdır.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_621",
    "word": "Tatlı Dilli Olmak",
    "forbidden": [
      "Güzel",
      "Söz",
      "Yumuşak",
      "Konuşmak",
      "Sadaka"
    ],
    "wisdom": "Kimseyi kırmadan yumuşak ve güzel kelimelerle hitap etmektir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_622",
    "word": "Tebbet Suresi",
    "forbidden": [
      "Tebbet",
      "Ebu Leheb",
      "Sure",
      "Peygamber",
      "Amca"
    ],
    "wisdom": "Peygamberimize düşmanlık yapan amcası Ebu Leheb'den bahseden suredir.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_623",
    "word": "Muhammedül Emin",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_624",
    "word": "Hz. Ömer",
    "forbidden": [
      "Adalet",
      "Halife",
      "Adil",
      "İkinci",
      "Karar"
    ],
    "wisdom": "Adaletiyle tanınan ikinci İslam halifesidir.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_625",
    "word": "Helal Lokma",
    "forbidden": [
      "Temiz",
      "Helal",
      "Yemek",
      "Para",
      "Çalışmak"
    ],
    "wisdom": "Alın teriyle dürüstçe kazanılarak yenen helal yiyecektir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_626",
    "word": "Sadık Öğrenci",
    "forbidden": [
      "Sadık",
      "Öğrenci",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre sadık bir öğrenci olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_627",
    "word": "Fakir Sevindirmek",
    "forbidden": [
      "Fakir",
      "İyilik",
      "Para",
      "Sevindirmek",
      "Sadaka"
    ],
    "wisdom": "Yoksul insanlara yardım ederek onları mutlu etmektir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_628",
    "word": "Safâ Tepesi",
    "forbidden": [
      "Merve Tepesi",
      "Sa'y",
      "Koşmak",
      "Hac",
      "Mekke"
    ],
    "wisdom": "Sa'y ibadetinin başladığı Mekke'deki kutsal tepedir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_629",
    "word": "Kanatlı İnsan",
    "forbidden": [
      "Bilim",
      "İcat",
      "Mimar",
      "Tıp",
      "Astronom"
    ],
    "wisdom": "İslam medeniyetinde yetişen ve bilime yön veren bilim insanları konusudur.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_630",
    "word": "Piyano Tuşları",
    "forbidden": [
      "Piyano",
      "Tuş",
      "Siyah",
      "Beyaz",
      "Çalmak"
    ],
    "wisdom": "Piyanonun ses çıkarmasını sağlayan siyah ve beyaz tuş takımıdır.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_631",
    "word": "Saygılı Anne",
    "forbidden": [
      "Saygılı",
      "Anne",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre saygılı bir anne olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_632",
    "word": "Camide Buluşmak",
    "forbidden": [
      "Cami",
      "Buluşmak",
      "Namaz",
      "Arkadaş",
      "Gitmek"
    ],
    "wisdom": "Cemaatle namaz kılmak veya sohbet etmek için camiye gitmektir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_633",
    "word": "Otobüs Durağı",
    "forbidden": [
      "Otobüs",
      "Durak",
      "Beklemek",
      "Yolcu",
      "Tabela"
    ],
    "wisdom": "Otobüse binmek için yol kenarında beklediğimiz tabelalı kulübelerdir.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_634",
    "word": "Ali Kuşçu",
    "forbidden": [
      "Ay",
      "Fatih",
      "Astronom",
      "Yıldız",
      "Matematik"
    ],
    "wisdom": "Fatih Sultan Mehmet'in İstanbul'a davet ettiği büyük gökbilimcidir.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_635",
    "word": "Kandil Gecesi",
    "forbidden": [
      "Kandil",
      "Mevlid",
      "Gece",
      "Cami",
      "Dua"
    ],
    "wisdom": "İslamiyet'teki mübarek gecelerin (Mevlid, Regaib, vb.) genel adıdır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_636",
    "word": "Oku Emri",
    "forbidden": [
      "Oku",
      "İlk Vahiy",
      "Alak Suresi",
      "Cebrail",
      "Peygamber"
    ],
    "wisdom": "İslamiyet'in ilk inen ayetinde yer alan 'Oku!' ilahi emridir.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_637",
    "word": "İzmir Saat Kulesi",
    "forbidden": [
      "Türkiye",
      "Deniz",
      "Dağ",
      "Tarih",
      "Şehir"
    ],
    "wisdom": "Coğrafya ve tarih derslerinde öğrendiğimiz temel konulardandır.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_638",
    "word": "Rükuya Eğilmek",
    "forbidden": [
      "Rüku",
      "Namaz",
      "Eğilmek",
      "Diz",
      "Bel"
    ],
    "wisdom": "Namazda elleri diz kapaklarına koyup eğilme hareketini yapmaktır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_639",
    "word": "Selçuklu Medresesi",
    "forbidden": [
      "Selçuklu",
      "Medrese",
      "Okul",
      "Nizamiye",
      "Tarih"
    ],
    "wisdom": "Selçuklular döneminde yüksek eğitim verilen tarihi üniversite binalarıdır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_640",
    "word": "Yatsı Namazı",
    "forbidden": [
      "Namaz",
      "Gece",
      "Yatsı",
      "Ezan",
      "Kılmak"
    ],
    "wisdom": "Yatsı namazı, günün en son kılınan farz namazıdır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_641",
    "word": "Dürüst Mümin",
    "forbidden": [
      "Dürüst",
      "Mümin",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre dürüst bir mümin olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_642",
    "word": "Haya",
    "forbidden": [
      "Utanmak",
      "Edep",
      "İman",
      "Çirkin",
      "Günah"
    ],
    "wisdom": "Kötü ve günah olan şeylerden utanıp uzak durmaktır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_643",
    "word": "Ağrı Dağı Zirvesi",
    "forbidden": [
      "Dağ",
      "Ağrı Dağı",
      "Yüksek",
      "Zirve",
      "Türkiye"
    ],
    "wisdom": "Türkiye'nin en yüksek noktası olan karlı zirvedir.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_644",
    "word": "Ülke Sınırları",
    "forbidden": [
      "Ülke",
      "Sınır",
      "Harita",
      "Çizgi",
      "Devlet"
    ],
    "wisdom": "Devletlerin topraklarının bittiği ve diğer ülkenin başladığı çizgilerdir.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_645",
    "word": "Biruni",
    "forbidden": [
      "Dünya",
      "Çap",
      "Astronom",
      "Coğrafya",
      "Matematik"
    ],
    "wisdom": "Dünyanın çapını ve yarıçapını ilk kez doğru hesaplayan bilgindir.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_646",
    "word": "Yalan",
    "forbidden": [
      "Doğru",
      "Dürüst",
      "Söz",
      "Münafık",
      "Aldatmak"
    ],
    "wisdom": "Gerçeğe uymayan, insanları aldatan sözler söylemektir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_647",
    "word": "Oruç Niyeti",
    "forbidden": [
      "Oruç",
      "Sahur",
      "Niyet etmek",
      "Kalp",
      "Başlamak"
    ],
    "wisdom": "Oruç tutmaya başlamadan önce kalben yapılan yöneliştir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_648",
    "word": "1071 Malazgirt",
    "forbidden": [
      "Malazgirt",
      "1071",
      "Savaş",
      "Alparslan",
      "Tarih"
    ],
    "wisdom": "Anadolu'nun kapılarının Türklere açıldığı şanlı zaferin yılıdır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_649",
    "word": "1453 İstanbul",
    "forbidden": [
      "Tarih",
      "Devlet",
      "Padişah",
      "Osmanlı",
      "Selçuklu"
    ],
    "wisdom": "İslam tarihinde kurulan devletler ve önemli hükümdarlar konusudur.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_650",
    "word": "Komşu Ziyareti",
    "forbidden": [
      "Ahlak",
      "Edep",
      "İyi",
      "Davranış",
      "İslam"
    ],
    "wisdom": "Müslümanın hayatında uygulaması gereken güzel ahlak kuralıdır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_651",
    "word": "Ensar Kardeşliği",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_652",
    "word": "Alak Suresi Oku",
    "forbidden": [
      "Alak",
      "Oku",
      "İlk Vahiy",
      "Sure",
      "Kuran"
    ],
    "wisdom": "İlk inen ayetleri barındıran, 'Yaratan Rabbinin adıyla oku' diyen suredir.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_653",
    "word": "Hırka-i Şerif Dairesi",
    "forbidden": [
      "Hırka",
      "Peygamber",
      "Kutsal Emanet",
      "Topkapı",
      "Daire"
    ],
    "wisdom": "Peygamberimizin hırkasının korunduğu ve sergilendiği kutsal odadır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_654",
    "word": "İmam",
    "forbidden": [
      "Namaz",
      "Cemaat",
      "Önder",
      "Ön",
      "Kıldırmak"
    ],
    "wisdom": "İmam, camide namaz kıldırırken cemaatin önünde duran kişidir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_655",
    "word": "Kıyamet Günü",
    "forbidden": [
      "Dünya",
      "Son",
      "Yıkılış",
      "Sur",
      "Ahiret"
    ],
    "wisdom": "Dünyadaki yaşamın son bulup her şeyin yok olacağı gündür.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_656",
    "word": "Osmanlı Donanması",
    "forbidden": [
      "Gemi",
      "Deniz",
      "Osmanlı",
      "Donanma",
      "Savaş"
    ],
    "wisdom": "Osmanlı'nın denizlerdeki savaş gemilerinden oluşan askeri gücüdür.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_657",
    "word": "Sure",
    "forbidden": [
      "Bölüm",
      "Kuran",
      "Ayet",
      "114",
      "Fatiha"
    ],
    "wisdom": "Kur'an-ı Kerim'in ayet gruplarından oluşan 114 bölümüdür.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_658",
    "word": "Evliya Çelebi Gezileri",
    "forbidden": [
      "Evliya Çelebi",
      "Gezmek",
      "Seyyah",
      "Türkiye",
      "Yolculuk"
    ],
    "wisdom": "Evliya Çelebi'nin tüm Osmanlı topraklarını adım adım gezmesidir.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_659",
    "word": "Peygamberimizin Doğumu",
    "forbidden": [
      "Peygamber",
      "Elçi",
      "Allah",
      "Kuran",
      "Vahiy"
    ],
    "wisdom": "Peygamberlikle ilgili kutsal bir kavramı ifade eder.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_660",
    "word": "Dünya Küresi",
    "forbidden": [
      "Dünya",
      "Küre",
      "Yuvarlak",
      "Harita",
      "Masa"
    ],
    "wisdom": "Dünyanın coğrafi şeklini gösteren masanın üzerindeki yuvarlak modeldir.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_661",
    "word": "Sadaka",
    "forbidden": [
      "Para",
      "Yardım",
      "Fakir",
      "İyilik",
      "Kutusu"
    ],
    "wisdom": "İçtenlikle fakirlere verilen para veya yapılan her türlü iyiliktir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_662",
    "word": "Selçuklu Sarayı",
    "forbidden": [
      "Selçuklu",
      "Saray",
      "Hükümdar",
      "Konya",
      "Tarih"
    ],
    "wisdom": "Selçuklu sultanlarının devleti yönettiği saray binalarıdır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_663",
    "word": "Çin Seddi Uzunluğu",
    "forbidden": [
      "Çin Seddi",
      "Duvar",
      "Çin",
      "Uzun",
      "Hunlar"
    ],
    "wisdom": "Hun Türklerinin saldırılarından korunmak için Çinlilerin yaptığı devasa duvardır.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_664",
    "word": "19 Mayıs Gençlik Bayramı",
    "forbidden": [
      "19 Mayıs",
      "Bayram",
      "Gençlik",
      "Atatürk",
      "Samsun"
    ],
    "wisdom": "Atatürk'ün Samsun'a çıkışını ve gençliği andığımız spor bayramıdır.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_665",
    "word": "Temiz Öğretmen",
    "forbidden": [
      "Temiz",
      "Öğretmen",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre temiz bir öğretmen olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_666",
    "word": "Mekke Fetih Günü",
    "forbidden": [
      "Mekke",
      "Fetih",
      "Kansız",
      "Kabe",
      "Peygamber"
    ],
    "wisdom": "630 yılında Mekke'nin putlardan temizlendiği kutlu gündür.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_667",
    "word": "Seyahatname Hikayeleri",
    "forbidden": [
      "Evliya Çelebi",
      "Seyahatname",
      "Hikaye",
      "Gezgin",
      "Kitap"
    ],
    "wisdom": "Evliya Çelebi'nin gezdiği yerlerdeki komik ve ilginç olayları anlattığı hikayelerdir.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_668",
    "word": "Dürüst Öğretmen",
    "forbidden": [
      "Dürüst",
      "Öğretmen",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre dürüst bir öğretmen olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_669",
    "word": "Hz. Adem",
    "forbidden": [
      "İlk",
      "İnsan",
      "Çamur",
      "Cennet",
      "Peygamber"
    ],
    "wisdom": "Yaratılan ilk insan ve ilk peygamberdir.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_670",
    "word": "Posta Kutusu",
    "forbidden": [
      "Posta",
      "Kutu",
      "Mektup",
      "Zarf",
      "Ev"
    ],
    "wisdom": "Gelen mektup ve faturaların bırakılması için kapıya asılan kutudur.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_671",
    "word": "Yıldırım Bayezid",
    "forbidden": [
      "Yıldırım",
      "Bayezid",
      "Ankara Savaşı",
      "Padişah",
      "Osmanlı"
    ],
    "wisdom": "Çok hızlı hareket etmesiyle bilinen kahraman Osmanlı padişahıdır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_672",
    "word": "Çalışkan Baba",
    "forbidden": [
      "Çalışkan",
      "Baba",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre çalışkan bir baba olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_673",
    "word": "Güzel Öğrenci",
    "forbidden": [
      "Güzel",
      "Öğrenci",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre güzel bir öğrenci olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_674",
    "word": "Güzel Baba",
    "forbidden": [
      "Güzel",
      "Baba",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre güzel bir baba olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_675",
    "word": "Yağmur Bulutu",
    "forbidden": [
      "Yağmur",
      "Bulut",
      "Hava",
      "Su",
      "Gri"
    ],
    "wisdom": "Gökyüzünde birikip yeryüzüne su damlaları bırakan gri bulutlardır.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_676",
    "word": "Misvak Kullanmak",
    "forbidden": [
      "Misvak",
      "Ağaç",
      "Diş",
      "Temizlik",
      "Peygamber"
    ],
    "wisdom": "Peygamberimizin sünneti olan, özel bir dal parçasından yapılan diş temizleme aracıdır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_677",
    "word": "Ayet",
    "forbidden": [
      "Cümle",
      "Kuran",
      "Sure",
      "Durak",
      "Rakam"
    ],
    "wisdom": "Kur'an-ı Kerim'i oluşturan kutsal cümlelerin her biridir.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_678",
    "word": "Uluğ Bey",
    "forbidden": [
      "Semerkant",
      "Gözlemevi",
      "Astronom",
      "Yıldız",
      "Padişah"
    ],
    "wisdom": "Semerkant'ta gözlemevi kurarak yıldız haritası hazırlayan Türk hükümdarıdır.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_679",
    "word": "Cami Mihrabı",
    "forbidden": [
      "İmam",
      "Namaz",
      "Kıble",
      "Ön",
      "Cami"
    ],
    "wisdom": "İmamın namaz kıldırırken durduğu kıble yönündeki girintili alandır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_680",
    "word": "Resim Fırçası",
    "forbidden": [
      "Fırça",
      "Resim",
      "Boya",
      "Sulu boya",
      "Tuval"
    ],
    "wisdom": "Resim yaparken sulu boyayı kağıda sürmek için kullanılan fırçadır.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_681",
    "word": "Öğretmeni Dinlemek",
    "forbidden": [
      "Öğretmen",
      "Dinlemek",
      "Ders",
      "Sınıf",
      "Öğrenmek"
    ],
    "wisdom": "Sınıfta öğretmenin anlattığı ders konularını can kulağıyla dinlemektir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_682",
    "word": "Su Gücüyle Çalışan Saat",
    "forbidden": [
      "Saat",
      "Su",
      "El-Cezeri",
      "Mekanik",
      "Zaman"
    ],
    "wisdom": "El-Cezeri'nin tasarladığı suyun akış hızıyla zamanı gösteren devasa saattir.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_683",
    "word": "Cuma Namazı",
    "forbidden": [
      "Cami",
      "Hutbe",
      "Cuma",
      "Haftalık",
      "Cemaat"
    ],
    "wisdom": "Cuma namazı, haftada bir gün cuma günü cemaatle kılınan farz ibadettir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_684",
    "word": "Büyük Selçuklu İmparatorluğu",
    "forbidden": [
      "Tarih",
      "Devlet",
      "Padişah",
      "Osmanlı",
      "Selçuklu"
    ],
    "wisdom": "İslam tarihinde kurulan devletler ve önemli hükümdarlar konusudur.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_685",
    "word": "Sadık Baba",
    "forbidden": [
      "Sadık",
      "Baba",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre sadık bir baba olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_686",
    "word": "Tabakta Yemek Bırakmamak",
    "forbidden": [
      "Yemek",
      "Tabak",
      "İsraf",
      "Bitirmek",
      "Doymak"
    ],
    "wisdom": "Tabağımıza yiyebileceğimiz kadar yemek alıp tamamını bitirmektir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_687",
    "word": "Telefon",
    "forbidden": [
      "Konuşmak",
      "Aramak",
      "Graham Bell",
      "Akıllı",
      "İletişim"
    ],
    "wisdom": "Graham Bell tarafından icat edilen iletişim aracıdır.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_688",
    "word": "Akşemseddin Fatih Hocası",
    "forbidden": [
      "Akşemseddin",
      "Fatih",
      "Hoca",
      "Öğretmen",
      "İstanbul"
    ],
    "wisdom": "Fatih Sultan Mehmed'i yetiştiren ve ona destek olan büyük alimdir.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_689",
    "word": "30 Ağustos Zafer Bayramı",
    "forbidden": [
      "30 Ağustos",
      "Zafer",
      "Bayram",
      "Savaş",
      "Ordu"
    ],
    "wisdom": "Kurtuluş savaşındaki büyük zaferimizi kutladığımız milli ordu bayramımızdır.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_690",
    "word": "Saygılı Baba",
    "forbidden": [
      "Saygılı",
      "Baba",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre saygılı bir baba olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_691",
    "word": "Selçuklular",
    "forbidden": [
      "Malazgirt",
      "Alparslan",
      "Anadolu",
      "Kılıçarslan",
      "Konya"
    ],
    "wisdom": "Anadolu'nun kapılarını bizlere açan büyük Türk devletidir.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_692",
    "word": "Vefalı Kardeş",
    "forbidden": [
      "Vefalı",
      "Kardeş",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre vefalı bir kardeş olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_693",
    "word": "Hz. Fatıma",
    "forbidden": [
      "Kız",
      "Peygamber",
      "Ali",
      "Hasan",
      "Hüseyin"
    ],
    "wisdom": "Peygamber Efendimiz'in en sevgili kızıdır.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_694",
    "word": "Gemi Dümeni",
    "forbidden": [
      "Gemi",
      "Dümen",
      "Çevirmek",
      "Kaptan",
      "Deniz"
    ],
    "wisdom": "Gemiye yön vermek için kaptanın çevirdiği tekerlek şeklindeki alettir.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_695",
    "word": "Kitab-ı Bahriye Kitabı",
    "forbidden": [
      "Piri Reis",
      "Denizci",
      "Kitap",
      "Bahriye",
      "Harita"
    ],
    "wisdom": "Piri Reis'in denizcilik rehberi olarak yazdığı ünlü kitabıdır.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_696",
    "word": "Haram Kazanç",
    "forbidden": [
      "Yasak",
      "Haram",
      "Para",
      "Yalan",
      "Çalmak"
    ],
    "wisdom": "Dürüst olmayan yollarla elde edilen haram paradır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_697",
    "word": "Güleryüzlü Müslüman",
    "forbidden": [
      "Güleryüzlü",
      "Müslüman",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre güleryüzlü bir müslüman olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_698",
    "word": "Coğrafya Dersi Kitabı",
    "forbidden": [
      "Coğrafya",
      "Kitap",
      "Ders",
      "Okul",
      "Dünya"
    ],
    "wisdom": "Okullarda yerküreyi, iklimleri ve ülkeleri öğrendiğimiz derstir.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_699",
    "word": "Hz. Aişe",
    "forbidden": [
      "Peygamber",
      "Eş",
      "Hadis",
      "Ebu Bekir",
      "Anne"
    ],
    "wisdom": "Peygamberimizin sevgili eşi ve çok hadis bilen annemizdir.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_700",
    "word": "Temiz Müslüman",
    "forbidden": [
      "Temiz",
      "Müslüman",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre temiz bir müslüman olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_701",
    "word": "Peygamber Yolu",
    "forbidden": [
      "Peygamber",
      "Elçi",
      "Allah",
      "Kuran",
      "Vahiy"
    ],
    "wisdom": "Peygamberlikle ilgili kutsal bir kavramı ifade eder.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_702",
    "word": "Üsküdar Sahili Uçuş",
    "forbidden": [
      "Üsküdar",
      "Uçmak",
      "Hezarfen",
      "Galata",
      "Sahil"
    ],
    "wisdom": "Hezarfen'in Galata'dan havalanıp Boğaz'ı geçerek indiği Üsküdar sahilidir.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_703",
    "word": "Elif Ba Cüzü",
    "forbidden": [
      "Elif Ba",
      "Cüz",
      "Harf",
      "İlk",
      "Kuran"
    ],
    "wisdom": "Kur'an okumaya başlamadan önce harfleri öğrendiğimiz başlangıç cüzüdür.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_704",
    "word": "Ay Işığı",
    "forbidden": [
      "Güneş",
      "Dünya",
      "Kitap",
      "Okul",
      "Telefon"
    ],
    "wisdom": "Günlük hayatta karşılaştığımız temel genel kültür kavramıdır.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_705",
    "word": "Padişah Fermanı",
    "forbidden": [
      "Ferman",
      "Padişah",
      "Emir",
      "Yazı",
      "Kağıt"
    ],
    "wisdom": "Peygamber ve padişah emirlerini içeren rulo şeklindeki resmi belgelerdir.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_706",
    "word": "Hayvanları Sevmek",
    "forbidden": [
      "Hayvan",
      "Kedi",
      "Köpek",
      "Yem",
      "Su"
    ],
    "wisdom": "Allah'ın dilsiz kulları olan hayvanlara merhamet edip onları beslemektir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_707",
    "word": "Nasr Suresi",
    "forbidden": [
      "Nasr",
      "Sure",
      "İza cae",
      "Mekke",
      "Fetih"
    ],
    "wisdom": "İslamiyet'in yayılışını ve Mekke'nin fethini müjdeleyen suredir.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_708",
    "word": "Hz. Hatice",
    "forbidden": [
      "Eş",
      "İlk",
      "Peygamber",
      "Kadın",
      "Zengin"
    ],
    "wisdom": "Peygamberimiz ile ilk evlenen ve ona ilk inanan kadındır.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_709",
    "word": "Trafik Lambası",
    "forbidden": [
      "Trafik",
      "Lamba",
      "Kırmızı",
      "Yeşil",
      "Araba"
    ],
    "wisdom": "Kavşaklarda araçların durmasını veya geçmesini sağlayan üç renkli lambadır.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_710",
    "word": "Medine Gülleri",
    "forbidden": [
      "Medine",
      "Çiçek",
      "Koku",
      "Peygamber",
      "Kırmızı"
    ],
    "wisdom": "Medine şehriyle özdeşleşen ve Peygamber sevgisini simgeleyen güllerdir.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_711",
    "word": "Gazneli Mahmud",
    "forbidden": [
      "Sultan",
      "Mahmud",
      "Gazneli",
      "Hindistan",
      "Sefer"
    ],
    "wisdom": "Hindistan'a 17 sefer düzenleyerek İslam'ı yayan büyük hükümdardır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_712",
    "word": "Müfessir Kitabı",
    "forbidden": [
      "Tefsir",
      "Hoca",
      "Yazan",
      "Açıklayan",
      "Müfessir"
    ],
    "wisdom": "Kur'an'ı tefsir eden müfessirlerin yazdığı bilimsel açıklama kitaplarıdır.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_713",
    "word": "Fatih Sultan Mehmed Han",
    "forbidden": [
      "Fatih",
      "İstanbul",
      "Mehmet",
      "1453",
      "Padişah"
    ],
    "wisdom": "İstanbul'u fethederek Peygamberimizin müjdesine nail olan ulu padişahtır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_714",
    "word": "Peygamberimizin Şefkati",
    "forbidden": [
      "Peygamber",
      "Elçi",
      "Allah",
      "Kuran",
      "Vahiy"
    ],
    "wisdom": "Peygamberlikle ilgili kutsal bir kavramı ifade eder.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_715",
    "word": "Hezarfen Ahmed Çelebi",
    "forbidden": [
      "Uçmak",
      "Kanat",
      "Galata",
      "Üsküdar",
      "Uçuş"
    ],
    "wisdom": "Galata Kulesi'nden kendi yaptığı kanatlarla Üsküdar'a uçan kişidir.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_716",
    "word": "Tatlı Anne",
    "forbidden": [
      "Tatlı",
      "Anne",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre tatlı bir anne olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_717",
    "word": "Kuşlara Yem Sermek",
    "forbidden": [
      "Kuş",
      "Yem",
      "Ekmek",
      "Pencere",
      "Kış"
    ],
    "wisdom": "Kış günlerinde kuşlar için balkona veya pencere önüne yem bırakmaktır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_718",
    "word": "Sınıf Kuralları",
    "forbidden": [
      "Sınıf",
      "Okul",
      "Kural",
      "Sessiz",
      "Dinlemek"
    ],
    "wisdom": "Sınıfta düzeni sağlamak için uymamız gereken kurallardır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_719",
    "word": "Hz. İsmail",
    "forbidden": [
      "Kurban",
      "Zemzem",
      "İbrahim",
      "Bıçak",
      "Kabe"
    ],
    "wisdom": "Babası Hz. İbrahim ile Kabe'yi yeniden inşa eden peygamberdir.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_720",
    "word": "Çanakkale Zaferi",
    "forbidden": [
      "1915",
      "Boğaz",
      "Savaş",
      "Geçilmez",
      "Seyit"
    ],
    "wisdom": "1915 yılında düşmanlara karşı kazanılan büyük savunma zaferidir.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_721",
    "word": "Vahiy Meleği",
    "forbidden": [
      "Melek",
      "Vahiy",
      "Cebrail",
      "Peygamber",
      "Getirmek"
    ],
    "wisdom": "Allah'ın mesajlarını peygamberlere getiren melek olan Cebrail'dir.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_722",
    "word": "Hırka-i Şerif",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_723",
    "word": "Sahur Vakti",
    "forbidden": [
      "Oruç",
      "Gece",
      "Sahur",
      "Yemek",
      "İmsak"
    ],
    "wisdom": "Oruç tutmak için gece kalkılıp yemek yenen bereketli vakittir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_724",
    "word": "Selamlaşmak Sünnettir",
    "forbidden": [
      "Selam",
      "Sünnet",
      "Peygamber",
      "Söylemek",
      "Müslüman"
    ],
    "wisdom": "Selam vermenin Peygamberimizin çok sevdiği bir sünnet olduğunu anlatan kuraldır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_725",
    "word": "Kurban Bayramı",
    "forbidden": [
      "Kurban",
      "Hayvan",
      "Kesmek",
      "Hac",
      "Bayram"
    ],
    "wisdom": "Kurban kesilip ihtiyaç sahipleriyle paylaşılan dört günlük bayramdır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_726",
    "word": "Süveyş Kanalı Yolu",
    "forbidden": [
      "Süveyş",
      "Kanal",
      "Mısır",
      "Akdeniz",
      "Gemi"
    ],
    "wisdom": "Akdeniz ile Kızıldeniz'i birbirine bağlayan yapay su yoludur.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_727",
    "word": "Tarihi Kaleler",
    "forbidden": [
      "Kale",
      "Surlar",
      "Koruma",
      "Taş",
      "Kule"
    ],
    "wisdom": "Şehirleri savunmak için yapılan tarihi taş surlar ve kulelerdir.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_728",
    "word": "İftar Topu",
    "forbidden": [
      "İbadet",
      "Din",
      "Müslüman",
      "Allah",
      "İslam"
    ],
    "wisdom": "İslam dininde yer alan temel kavram ve ibadetlerdendir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_729",
    "word": "Dua",
    "forbidden": [
      "İstemek",
      "Yalvarmak",
      "El açmak",
      "Allah",
      "İbadet"
    ],
    "wisdom": "Dua etmek, kalbimizden geçenleri Allah'a iletmektir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_730",
    "word": "Ankara",
    "forbidden": [
      "Başkent",
      "Türkiye",
      "Meclis",
      "Atatürk",
      "Şehir"
    ],
    "wisdom": "Türkiye Cumhuriyeti'nin yönetim başkentidir.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_731",
    "word": "Hira Mağarası",
    "forbidden": [
      "Mekke",
      "Peygamber",
      "İlk Vahiy",
      "Mağara",
      "Dağ"
    ],
    "wisdom": "Peygamberimize ilk vahyin geldiği Nur Dağı'ndaki mağaradır.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_732",
    "word": "Duvar Saati",
    "forbidden": [
      "Saat",
      "Duvar",
      "Zaman",
      "Bakmak",
      "Zil"
    ],
    "wisdom": "Odalarda veya sınıflarda duvara asılan zaman göstergesidir.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_733",
    "word": "Emniyet Kemeri",
    "forbidden": [
      "Kemer",
      "Emniyet",
      "Araba",
      "Kaza",
      "Takmak"
    ],
    "wisdom": "Arabaya binince can güvenliğimiz için mutlaka takmamız gereken koruyucu kemerdir.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_734",
    "word": "Salavat Getirmek",
    "forbidden": [
      "Peygamber",
      "Muhammed",
      "Sallallahu",
      "Dua",
      "Selam"
    ],
    "wisdom": "Peygamber Efendimiz'e saygı ve dua içeren salavatı okumaktır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_735",
    "word": "Van Gölü Suyu",
    "forbidden": [
      "Van Gölü",
      "Göl",
      "Su",
      "Sodalı",
      "Mavi"
    ],
    "wisdom": "Türkiye'nin en büyük gölü olan Van gölünün sodalı tuzlu suyudur.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_736",
    "word": "Pusula İğnesi",
    "forbidden": [
      "Güneş",
      "Dünya",
      "Kitap",
      "Okul",
      "Telefon"
    ],
    "wisdom": "Günlük hayatta karşılaştığımız temel genel kültür kavramıdır.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_737",
    "word": "Güzel Dost",
    "forbidden": [
      "Güzel",
      "Dost",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre güzel bir dost olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_738",
    "word": "Semerkant Rasathanesi",
    "forbidden": [
      "Semerkant",
      "Rasathane",
      "Gözlemevi",
      "Uluğ Bey",
      "Yıldız"
    ],
    "wisdom": "Orta Asya'nın en ünlü gözlemevi olan tarihi rasathanedir.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_739",
    "word": "Bilim Tarihi Müzesi",
    "forbidden": [
      "Müze",
      "Bilim",
      "Tarih",
      "İcat",
      "Ziyaret"
    ],
    "wisdom": "Eski bilimsel aletlerin ve icatların modellerinin sergilendiği müzedir.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_740",
    "word": "El Açmak",
    "forbidden": [
      "Dua",
      "Allah",
      "İstemek",
      "Dua etmek",
      "Eller"
    ],
    "wisdom": "Dua ederken ellerimizi havaya kaldırarak Allah'a yönelmektir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_741",
    "word": "Medine Arkadaşları",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_742",
    "word": "Eski Paralar",
    "forbidden": [
      "Para",
      "Eski",
      "Müze",
      "Koleksiyon",
      "Altın"
    ],
    "wisdom": "Tarihi devletlerin kullandığı metal ve kağıt ödeme araçlarıdır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_743",
    "word": "Sadaka Kutusu",
    "forbidden": [
      "Cami",
      "Para",
      "Kutu",
      "Sadaka",
      "Vermek"
    ],
    "wisdom": "Camilerde veya hayır kurumlarında yardım paralarının atıldığı kutudur.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_744",
    "word": "Suyu İsraf Etmemek",
    "forbidden": [
      "Ahlak",
      "Edep",
      "İyi",
      "Davranış",
      "İslam"
    ],
    "wisdom": "Müslümanın hayatında uygulaması gereken güzel ahlak kuralıdır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_745",
    "word": "Sahur Davulu",
    "forbidden": [
      "Davul",
      "Gece",
      "Uyanmak",
      "Sahur",
      "Çalmak"
    ],
    "wisdom": "Sahur vaktinde insanları uyandırmak için çalınan davuldur.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_746",
    "word": "Alarm Sesi",
    "forbidden": [
      "Alarm",
      "Ses",
      "Uyanmak",
      "Sabah",
      "Saat"
    ],
    "wisdom": "Sabahları uyanmak için kurduğumuz saatin çıkardığı uyarıcı sestir.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_747",
    "word": "Matematik Cebir",
    "forbidden": [
      "Cebir",
      "Matematik",
      "Harezmi",
      "X",
      "Hesap"
    ],
    "wisdom": "Bilinmeyen sayıları bulmayı sağlayan matematik dalıdır.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_748",
    "word": "Osmanlılar",
    "forbidden": [
      "Fatih",
      "İstanbul",
      "Padişah",
      "Söğüt",
      "Devlet"
    ],
    "wisdom": "Üç kıtaya adaletle hükmeden cihan devletimizdir.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_749",
    "word": "Toprak Kokusu",
    "forbidden": [
      "Toprak",
      "Koku",
      "Yağmur",
      "Yer",
      "Güzel"
    ],
    "wisdom": "Yağmur yağdıktan sonra kuru topraktan yükselen o harika kokudur.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_750",
    "word": "Komşu Ülkeler",
    "forbidden": [
      "Komşu",
      "Ülke",
      "Sınır",
      "Yunanistan",
      "Bulgaristan"
    ],
    "wisdom": "Türkiye'nin kara sınır komşusu olan (Irak, Suriye, Gürcistan vb.) ülkelerdir.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_751",
    "word": "Eyfel Kulesi Paris",
    "forbidden": [
      "Eyfel",
      "Kule",
      "Paris",
      "Fransa",
      "Demir"
    ],
    "wisdom": "Fransa'nın başkenti Paris'te bulunan ünlü demir kuledir.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_752",
    "word": "Güleryüzlü Arkadaş",
    "forbidden": [
      "Güleryüzlü",
      "Arkadaş",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre güleryüzlü bir arkadaş olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_753",
    "word": "Amasra Sahili",
    "forbidden": [
      "Amasra",
      "Karadeniz",
      "Bartın",
      "Sahil",
      "Deniz"
    ],
    "wisdom": "Bartın ilimize bağlı, tarihi kalesi ve balıkçılarıyla ünlü sahil kasabasıdır.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_754",
    "word": "Sevgili Öğrenci",
    "forbidden": [
      "Sevgili",
      "Öğrenci",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre sevgili bir öğrenci olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_755",
    "word": "Yasin Suresi",
    "forbidden": [
      "Yasin",
      "Sure",
      "Kuran",
      "Kalp",
      "Okumak"
    ],
    "wisdom": "Kur'an-ı Kerim'in kalbi olarak nitelendirilen çok önemli suredir.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_756",
    "word": "Saygılı Kardeş",
    "forbidden": [
      "Saygılı",
      "Kardeş",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre saygılı bir kardeş olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_757",
    "word": "Zülfikar Kılıcı",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_758",
    "word": "Dürüst Çocuk",
    "forbidden": [
      "Dürüst",
      "Çocuk",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre dürüst bir çocuk olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_759",
    "word": "Hz. İsa",
    "forbidden": [
      "Meryem",
      "İncil",
      "Mucize",
      "Hasta",
      "Beşik"
    ],
    "wisdom": "Babasız doğan ve beşikteyken konuşan mucize peygamberdir.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_760",
    "word": "Araba Direksiyonu",
    "forbidden": [
      "Direksiyon",
      "Araba",
      "Sürmek",
      "Çevirmek",
      "Tekerlek"
    ],
    "wisdom": "Arabayı sağa veya sola yönlendirmek için sürücünün tuttuğu simittir.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_761",
    "word": "Sabırlı Mümin",
    "forbidden": [
      "Sabırlı",
      "Mümin",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre sabırlı bir mümin olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_762",
    "word": "Saygılı Arkadaş",
    "forbidden": [
      "Saygılı",
      "Arkadaş",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre saygılı bir arkadaş olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_763",
    "word": "Küçüklere Sevgi",
    "forbidden": [
      "Ahlak",
      "Edep",
      "İyi",
      "Davranış",
      "İslam"
    ],
    "wisdom": "Müslümanın hayatında uygulaması gereken güzel ahlak kuralıdır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_764",
    "word": "Cimri Olmamak",
    "forbidden": [
      "Cimri",
      "Cömert",
      "Para",
      "Paylaşmak",
      "Vermek"
    ],
    "wisdom": "Elimizdeki nimetleri saklamayıp cömertçe paylaşabilmektir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_765",
    "word": "Sadık Komşu",
    "forbidden": [
      "Sadık",
      "Komşu",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre sadık bir komşu olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_766",
    "word": "Vefalı Mümin",
    "forbidden": [
      "Vefalı",
      "Mümin",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre vefalı bir mümin olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_767",
    "word": "Yaya Geçidi",
    "forbidden": [
      "Yaya",
      "Geçit",
      "Çizgi",
      "Yol",
      "Karşıdan karşıya"
    ],
    "wisdom": "Yolun karşısına güvenle geçebilmek için yere çizilen beyaz çizgilerdir.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_768",
    "word": "Tatlı Çocuk",
    "forbidden": [
      "Tatlı",
      "Çocuk",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre tatlı bir çocuk olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_769",
    "word": "Mekke'nin Fethi",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_770",
    "word": "Sabırlı Öğrenci",
    "forbidden": [
      "Sabırlı",
      "Öğrenci",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre sabırlı bir öğrenci olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_771",
    "word": "Kol Saati",
    "forbidden": [
      "Saat",
      "Kol",
      "Bilek",
      "Zaman",
      "Takmak"
    ],
    "wisdom": "Zamanı her an takip edebilmek için bileğimize taktığımız saattir.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_772",
    "word": "Metro İstasyonu",
    "forbidden": [
      "Güneş",
      "Dünya",
      "Kitap",
      "Okul",
      "Telefon"
    ],
    "wisdom": "Günlük hayatta karşılaştığımız temel genel kültür kavramıdır.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_773",
    "word": "Peygamberimizin Dedesi",
    "forbidden": [
      "Peygamber",
      "Elçi",
      "Allah",
      "Kuran",
      "Vahiy"
    ],
    "wisdom": "Peygamberlikle ilgili kutsal bir kavramı ifade eder.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_774",
    "word": "Yün Eldiven",
    "forbidden": [
      "Eldiven",
      "Yün",
      "El",
      "Soğuk",
      "Kış"
    ],
    "wisdom": "Kışın ellerimizi soğuktan korumak için giydiğimiz yün giysidir.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_775",
    "word": "Hava Durumu",
    "forbidden": [
      "Hava",
      "Yağmur",
      "Güneş",
      "Sıcaklık",
      "Televizyon"
    ],
    "wisdom": "Havanın yağmurlu, karlı veya güneşli olacağını gösteren tahmin raporudur.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_776",
    "word": "Sınıf Öğretmeni",
    "forbidden": [
      "Öğretmen",
      "Sınıf",
      "Okul",
      "Ders",
      "Öğretmek"
    ],
    "wisdom": "Sınıfımızdaki dersleri bize öğreten ve rehberlik eden ilkokul öğretmenimizdir.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_777",
    "word": "Sabırlı Öğretmen",
    "forbidden": [
      "Sabırlı",
      "Öğretmen",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre sabırlı bir öğretmen olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_778",
    "word": "Peygamber Mescidi",
    "forbidden": [
      "Medine",
      "Mescid-i Nebevi",
      "Cami",
      "Kılmak",
      "Peygamber"
    ],
    "wisdom": "Peygamber Efendimiz'in Medine'de inşa ettiği ve kabrinin bulunduğu camidir.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_779",
    "word": "Amerika Kıtası",
    "forbidden": [
      "Kıta",
      "Amerika",
      "Yeni Dünya",
      "Columbus",
      "Büyük"
    ],
    "wisdom": "Piri Reis'in haritasında da yer alan okyanus aşırı büyük kıtadır.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_780",
    "word": "Akıllı Telefon",
    "forbidden": [
      "Telefon",
      "Akıllı",
      "İnternet",
      "Oyun",
      "Konuşmak"
    ],
    "wisdom": "Konuşabildiğimiz, internete girip oyun oynayabildiğimiz cep telefonudur.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_781",
    "word": "Avustralya Kıtası",
    "forbidden": [
      "Kıta",
      "Avustralya",
      "Kanguru",
      "Ada",
      "Güney"
    ],
    "wisdom": "Kanguruların yaşadığı, etrafı tamamen okyanusla çevrili kıtadır.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_782",
    "word": "Hacı Bayram Veli Ankara",
    "forbidden": [
      "Hacı Bayram",
      "Ankara",
      "Türbe",
      "Cami",
      "Alim"
    ],
    "wisdom": "Ankara'da bulunan, ünlü Türk tasavvuf alimi Hacı Bayram Veli camisidir.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_783",
    "word": "Gıybet Etmemek",
    "forbidden": [
      "Dedikodu",
      "Arkadan",
      "Konuşmak",
      "Kötü",
      "Gıybet"
    ],
    "wisdom": "Arkadaşlarımızın arkasından konuşmaktan uzak durmaktır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_784",
    "word": "Nuh'un Gemisi",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_785",
    "word": "Hz. Osman",
    "forbidden": [
      "Halife",
      "Kuran",
      "Üçüncü",
      "Çoğaltmak",
      "Haya"
    ],
    "wisdom": "Kur'an'ı çoğaltan ve çok edepli olan üçüncü halifedir.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_786",
    "word": "Peygamberimizin Eşi",
    "forbidden": [
      "Peygamber",
      "Elçi",
      "Allah",
      "Kuran",
      "Vahiy"
    ],
    "wisdom": "Peygamberlikle ilgili kutsal bir kavramı ifade eder.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_787",
    "word": "İstanbul Surları",
    "forbidden": [
      "Tarih",
      "Devlet",
      "Padişah",
      "Osmanlı",
      "Selçuklu"
    ],
    "wisdom": "İslam tarihinde kurulan devletler ve önemli hükümdarlar konusudur.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_788",
    "word": "İhlas Suresi",
    "forbidden": [
      "Sure",
      "Kuran",
      "Okumak",
      "Ayet",
      "İhlas"
    ],
    "wisdom": "İhlas Suresi, Kur'an-ı Kerim'de yer alan kutsal bir suredir.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_789",
    "word": "Emin Anne",
    "forbidden": [
      "Emin",
      "Anne",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre emin bir anne olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_790",
    "word": "Matematik Dersi",
    "forbidden": [
      "Ders",
      "Matematik",
      "Okul",
      "Rakam",
      "Toplama"
    ],
    "wisdom": "Okulda sayıları, toplamayı ve çarpmayı öğrendiğimiz derstir.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_791",
    "word": "Fotoğraf Makinesi",
    "forbidden": [
      "Fotoğraf",
      "Resim",
      "Çekmek",
      "Kamera",
      "Anı"
    ],
    "wisdom": "Gezdiğimiz yerlerde anılarımızı ölümsüzleştirmek için resim çeken makinedir.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_792",
    "word": "Hezarfen Kanatları",
    "forbidden": [
      "Kanat",
      "Uçmak",
      "Hezarfen",
      "Galata",
      "Kuş"
    ],
    "wisdom": "Hezarfen Ahmed Çelebi'nin uçmak için kuşlardan esinlenerek tasarladığı dev kanatlardır.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_793",
    "word": "Saygılı Mümin",
    "forbidden": [
      "Saygılı",
      "Mümin",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre saygılı bir mümin olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_794",
    "word": "Algoritma Kurucusu",
    "forbidden": [
      "Harezmi",
      "Algoritma",
      "Bilgisayar",
      "Kod",
      "Matematik"
    ],
    "wisdom": "Bilgisayar kodlarının temel mantığı olan algoritmayı bulan Harezmi'dir.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_795",
    "word": "Ezan Vakti",
    "forbidden": [
      "Saat",
      "Ezan",
      "Namaz",
      "Duvar",
      "İmsakiye"
    ],
    "wisdom": "Namaz vaktinin girdiğini gösteren ezan saati dilimidir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_796",
    "word": "Peygamberimizin Torunu",
    "forbidden": [
      "Peygamber",
      "Elçi",
      "Allah",
      "Kuran",
      "Vahiy"
    ],
    "wisdom": "Peygamberlikle ilgili kutsal bir kavramı ifade eder.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_797",
    "word": "Kavga Etmemek",
    "forbidden": [
      "Kavga",
      "Barış",
      "Arkadaş",
      "Kızmak",
      "Vurmak"
    ],
    "wisdom": "Sorunlarımızı kavga etmeden konuşarak çözmektir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_798",
    "word": "İslam Devletleri",
    "forbidden": [
      "Tarih",
      "Devlet",
      "Padişah",
      "Osmanlı",
      "Selçuklu"
    ],
    "wisdom": "İslam tarihinde kurulan devletler ve önemli hükümdarlar konusudur.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_799",
    "word": "El Yazması Kuran",
    "forbidden": [
      "Kuran",
      "El",
      "Yazmak",
      "Eski",
      "Tarihi"
    ],
    "wisdom": "Matbaa icat edilmeden önce hattatlar tarafından elle yazılan tarihi Kur'an'dır.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_800",
    "word": "Kadir Suresi",
    "forbidden": [
      "Kadir",
      "Sure",
      "Kuran",
      "Gece",
      "İnmek"
    ],
    "wisdom": "Kadir gecesinin faziletini ve Kur'an'ın inişini anlatan suredir.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_801",
    "word": "Diş Temizliği",
    "forbidden": [
      "Diş",
      "Fırça",
      "Macun",
      "Yıkamak",
      "Ağız"
    ],
    "wisdom": "Dişlerin fırçalanarak temizlenmesi ve çürüklerden korunmasıdır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_802",
    "word": "Sabırlı Kardeş",
    "forbidden": [
      "Sabırlı",
      "Kardeş",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre sabırlı bir kardeş olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_803",
    "word": "Arkadaşına Yardım Etmek",
    "forbidden": [
      "Arkadaş",
      "Yardım",
      "Ders",
      "Zorluk",
      "Destek"
    ],
    "wisdom": "Zorlanan arkadaşımıza derslerde veya oyunda destek olmaktır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_804",
    "word": "Uçurtma Uçurmak",
    "forbidden": [
      "Uçurtma",
      "Rüzgar",
      "İp",
      "Gökyüzü",
      "Uçurmak"
    ],
    "wisdom": "Rüzgarlı havalarda renkli uçurtmaları iple gökyüzünde uçurmaktır.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_805",
    "word": "Mekanik Robotlar",
    "forbidden": [
      "Robot",
      "Mekanik",
      "El-Cezeri",
      "Çark",
      "Otomat"
    ],
    "wisdom": "El-Cezeri'nin elektrik olmadan su gücüyle hareket ettirdiği otomat robotlardır.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_806",
    "word": "İslam Mucitleri",
    "forbidden": [
      "Bilim",
      "İcat",
      "Mimar",
      "Tıp",
      "Astronom"
    ],
    "wisdom": "İslam medeniyetinde yetişen ve bilime yön veren bilim insanları konusudur.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_807",
    "word": "Çanakkale Şehitliği",
    "forbidden": [
      "Şehitlik",
      "Çanakkale",
      "Anıt",
      "Savaş",
      "Ziyaret"
    ],
    "wisdom": "Çanakkale savaşında şehit düşen kahramanlarımızın yattığı anıt mezarlık alanıdır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_808",
    "word": "Kapadokya Balonları",
    "forbidden": [
      "Kapadokya",
      "Balon",
      "Peri Bacaları",
      "Nevşehir",
      "Uçmak"
    ],
    "wisdom": "Nevşehir Kapadokya'da sabah saatlerinde gökyüzüne yükselen turistik balonlardır.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_809",
    "word": "Vatan Sevgisi",
    "forbidden": [
      "Vatan",
      "Ülke",
      "Sevgi",
      "Türkiye",
      "Korumak"
    ],
    "wisdom": "Ülkemizi çok sevmek ve onun için faydalı işler yapmaktır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_810",
    "word": "Kabe Hakemliği",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_811",
    "word": "Yerküre Modeli",
    "forbidden": [
      "Yerküre",
      "Dünya",
      "Küre",
      "Model",
      "Harita"
    ],
    "wisdom": "Dünyanın coğrafi yapısını masada üç boyutlu gösteren yuvarlak modeldir.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_812",
    "word": "Hat Sanatı",
    "forbidden": [
      "Hat",
      "Yazı",
      "Güzel",
      "Arapça",
      "Tablo"
    ],
    "wisdom": "Arapça harfleri estetik ve çok güzel şekilde yazma sanatıdır.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_813",
    "word": "Bayram Namazı Hutbesi",
    "forbidden": [
      "Hutbe",
      "Bayram",
      "Namaz",
      "Cami",
      "Dinlemek"
    ],
    "wisdom": "Bayram namazından sonra imamın minberde cemaate yaptığı konuşmadır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_814",
    "word": "Hz. Osman's Charity",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_815",
    "word": "İslam Ordusu",
    "forbidden": [
      "Tarih",
      "Devlet",
      "Padişah",
      "Osmanlı",
      "Selçuklu"
    ],
    "wisdom": "İslam tarihinde kurulan devletler ve önemli hükümdarlar konusudur.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_816",
    "word": "Osmanlı Kalkanı",
    "forbidden": [
      "Kalkan",
      "Koruma",
      "Savaş",
      "Kılıç",
      "Osmanlı"
    ],
    "wisdom": "Savaşta oklardan ve kılıç darbelerinden korunmak için kullanılan yuvarlak alettir.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_817",
    "word": "Vefalı Çocuk",
    "forbidden": [
      "Vefalı",
      "Çocuk",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre vefalı bir çocuk olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_818",
    "word": "Çalışkan Anne",
    "forbidden": [
      "Çalışkan",
      "Anne",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre çalışkan bir anne olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_819",
    "word": "Saygı",
    "forbidden": [
      "Büyükler",
      "Küçükler",
      "Edep",
      "Hürmet",
      "Davranış"
    ],
    "wisdom": "İnsanlara ve onların haklarına değer vermektir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_820",
    "word": "Ramazan Mukabelesi",
    "forbidden": [
      "Ramazan",
      "Mukabele",
      "Kuran",
      "Cami",
      "Takip"
    ],
    "wisdom": "Ramazan aylarında her gün bir cüz okunarak yapılan Kur'an takibidir.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_821",
    "word": "Güzel Okuma",
    "forbidden": [
      "Okumak",
      "Kuran",
      "Ses",
      "Tecvid",
      "Güzel"
    ],
    "wisdom": "Kur'an'ı tecvid kurallarına göre çok güzel ve tatlı bir sesle tilavet etmektir.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_822",
    "word": "Tatlı Dost",
    "forbidden": [
      "Tatlı",
      "Dost",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre tatlı bir dost olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_823",
    "word": "Sıcak Çay",
    "forbidden": [
      "Çay",
      "Sıcak",
      "Bardak",
      "İçmek",
      "Şeker"
    ],
    "wisdom": "Kahvaltılarda ve sohbetlerde ince belli bardakta içilen sıcak içecektir.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_824",
    "word": "Sakal-ı Şerif",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_825",
    "word": "Cüz Sayısı Otuz",
    "forbidden": [
      "Cüz",
      "Otuz",
      "30",
      "Kuran",
      "Bölüm"
    ],
    "wisdom": "Kur'an-ı Kerim'de tam olarak 30 adet cüz bulunduğunu belirten kuraldır.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_826",
    "word": "Yunus'un Balığı",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_827",
    "word": "Mukabele Dinlemek",
    "forbidden": [
      "Mukabele",
      "Kuran",
      "Takip etmek",
      "Cami",
      "Ramazan"
    ],
    "wisdom": "Ramazan ayında camide birinin okuduğu Kur'an'ı kitaptan takip etmektir.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_828",
    "word": "Sadık Arkadaş",
    "forbidden": [
      "Sadık",
      "Arkadaş",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre sadık bir arkadaş olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_829",
    "word": "Sultan Ahmet Camii",
    "forbidden": [
      "Cami",
      "İstanbul",
      "Altı minare",
      "Mavi",
      "Tarihi"
    ],
    "wisdom": "İstanbul'da bulunan, altı minaresi olan dünyaca ünlü mavi camimizdir.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_830",
    "word": "Ekmeği İsraf Etmemek",
    "forbidden": [
      "Ahlak",
      "Edep",
      "İyi",
      "Davranış",
      "İslam"
    ],
    "wisdom": "Müslümanın hayatında uygulaması gereken güzel ahlak kuralıdır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_831",
    "word": "İyilik Yap Denize At",
    "forbidden": [
      "Ahlak",
      "Edep",
      "İyi",
      "Davranış",
      "İslam"
    ],
    "wisdom": "Müslümanın hayatında uygulaması gereken güzel ahlak kuralıdır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_832",
    "word": "Nemrut'un Ateşi",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_833",
    "word": "Regaib Kandili",
    "forbidden": [
      "Regaib",
      "Kandil",
      "Gece",
      "Dua",
      "Üç aylar"
    ],
    "wisdom": "Üç ayların ilk cuma gecesinde kutlanan mübarek kandildir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_834",
    "word": "Gazneli Devleti",
    "forbidden": [
      "Gazneli",
      "Mahmud",
      "Hindistan",
      "Devlet",
      "Sultan"
    ],
    "wisdom": "Hindistan'a İslamiyet'i götüren ünlü Türk devletidir.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_835",
    "word": "Saygılı Öğrenci",
    "forbidden": [
      "Saygılı",
      "Öğrenci",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre saygılı bir öğrenci olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_836",
    "word": "Atlas Okyanusu",
    "forbidden": [
      "Okyanus",
      "Atlas",
      "Amerika",
      "Avrupa",
      "Su"
    ],
    "wisdom": "Avrupa ile Amerika kıtaları arasında uzanan büyük okyanustur.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_837",
    "word": "Peygamber Kıssaları",
    "forbidden": [
      "Peygamber",
      "Kıssa",
      "Hikaye",
      "Kuran",
      "Öğüt"
    ],
    "wisdom": "Kur'an-ı Kerim'de anlatılan eski peygamberlerin ibretlik hayat hikayeleridir.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_838",
    "word": "Dünya",
    "forbidden": [
      "Mavi",
      "Gezegen",
      "Canlı",
      "Yaşam",
      "Toprak"
    ],
    "wisdom": "Üzerinde yaşam barındıran yegane mavi gezegendir.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_839",
    "word": "Öğretmene Saygı",
    "forbidden": [
      "Saygı",
      "Edep",
      "Ahlak",
      "Büyükler",
      "Davranış"
    ],
    "wisdom": "İnsanlar arasında sevgiyi pekiştiren ahlaki saygı kuralıdır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_840",
    "word": "Cömertlik",
    "forbidden": [
      "Vermek",
      "El açık",
      "Zengin",
      "Cimri",
      "Paylaşmak"
    ],
    "wisdom": "Sahip olduğu güzel şeyleri başkalarıyla cömertçe paylaşmaktır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_841",
    "word": "Ayın Haritası",
    "forbidden": [
      "Ay",
      "Harita",
      "Çizmek",
      "Ali Kuşçu",
      "Krater"
    ],
    "wisdom": "Ali Kuşçu'nun çizdiği ve NASA'nın Ay'daki bir kratere adını verdiği haritadır.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_842",
    "word": "Hz. Muhammed",
    "forbidden": [
      "Peygamber",
      "Kuran",
      "Son",
      "Mekke",
      "Medine"
    ],
    "wisdom": "Bizim peygamberimiz, alemlere rahmet olarak gönderilmiştir.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_843",
    "word": "Tatlı Dil Yılanı Deliğinden Çıkar",
    "forbidden": [
      "Söz",
      "Yılan",
      "Dil",
      "Yumuşak",
      "Atasözü"
    ],
    "wisdom": "Güzel ve yumuşak sözlerin en zor insanları bile ikna edeceğini anlatan atasözüdür.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_844",
    "word": "Oruç Açmak",
    "forbidden": [
      "İftar",
      "Yemek",
      "Oruç",
      "Ezan",
      "Su"
    ],
    "wisdom": "Akşam ezanı okunduğunda su veya hurma ile orucu tamamlamaktır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_845",
    "word": "Sabırlı Arkadaş",
    "forbidden": [
      "Sabırlı",
      "Arkadaş",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre sabırlı bir arkadaş olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_846",
    "word": "Saygılı Müslüman",
    "forbidden": [
      "Saygılı",
      "Müslüman",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre saygılı bir müslüman olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_847",
    "word": "Yerçekimi Tahmini",
    "forbidden": [
      "Yerçekimi",
      "Biruni",
      "Newton",
      "Dünya",
      "Çekim"
    ],
    "wisdom": "Newton'dan yüzyıllar önce yerçekiminin varlığından bahseden Biruni görüşüdür.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_848",
    "word": "Nizamiye Medresesi",
    "forbidden": [
      "Nizamiye",
      "Medrese",
      "Bağdat",
      "Okul",
      "Nizamülmülk"
    ],
    "wisdom": "Bağdat'ta kurulan ve dönemin en büyük üniversitesi olan eğitim yuvasıdır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_849",
    "word": "Yeşil Elma",
    "forbidden": [
      "Elma",
      "Yeşil",
      "Meyve",
      "Ekşi",
      "Yemek"
    ],
    "wisdom": "Ekşi ve kütür kütür olan yeşil renkli elma meyvesidir.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_850",
    "word": "İtfaiye Arabası",
    "forbidden": [
      "Güneş",
      "Dünya",
      "Kitap",
      "Okul",
      "Telefon"
    ],
    "wisdom": "Günlük hayatta karşılaştığımız temel genel kültür kavramıdır.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_851",
    "word": "Karınca Yuvası",
    "forbidden": [
      "Karınca",
      "Yuva",
      "Toprak",
      "Çalışkan",
      "Böcek"
    ],
    "wisdom": "Çalışkan karıncaların toprak altında yiyecek topladığı yuvalarıdır.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_852",
    "word": "Güzel Arkadaş",
    "forbidden": [
      "Güzel",
      "Arkadaş",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre güzel bir arkadaş olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_853",
    "word": "Kuran Cildi",
    "forbidden": [
      "Cilt",
      "Kuran",
      "Kapak",
      "Mushaf",
      "Kitap"
    ],
    "wisdom": "Kur'an kitabının dışındaki sert koruyucu kapaktır.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_854",
    "word": "Emin Kardeş",
    "forbidden": [
      "Emin",
      "Kardeş",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre emin bir kardeş olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_855",
    "word": "Hatasını Kabul Etmek",
    "forbidden": [
      "Hata",
      "Yanlış",
      "Kabul",
      "Özür",
      "Ahlak"
    ],
    "wisdom": "Yanlış yaptığımızda inat etmeyip hatamızı kabul etmektir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_856",
    "word": "Teşekkür Etmek",
    "forbidden": [
      "Teşekkür",
      "Sağ ol",
      "Nezaket",
      "İyilik",
      "Söz"
    ],
    "wisdom": "Bize yapılan bir iyilik sonrasında karşımızdakine teşekkür etmektir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_857",
    "word": "Hafızlık Töreni",
    "forbidden": [
      "Hafız",
      "Tören",
      "Ezber",
      "Kuran",
      "Taç"
    ],
    "wisdom": "Kur'an'ı tamamen ezberleyen öğrencilere yapılan taç giyme merasimidir.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_858",
    "word": "Sıcak Çorba",
    "forbidden": [
      "Çorba",
      "Sıcak",
      "Yemek",
      "Kaşık",
      "İçmek"
    ],
    "wisdom": "Kış günlerinde içimizi ısıtan lezzetli başlangıç yemeğidir.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_859",
    "word": "Kumdan Kale",
    "forbidden": [
      "Kum",
      "Kale",
      "Plaj",
      "Kova",
      "Deniz"
    ],
    "wisdom": "Deniz kenarında ıslak kumları kovalara doldurarak yapılan kaledir.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_860",
    "word": "Mahya Yazısı",
    "forbidden": [
      "Minare",
      "Cami",
      "Yazı",
      "Işık",
      "Ramazan"
    ],
    "wisdom": "Ramazan gecelerinde iki minare arasına ışıkla yazılan güzel sözlerdir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_861",
    "word": "Güvenilir Arkadaş",
    "forbidden": [
      "Güven",
      "Dost",
      "Yalan",
      "Sır",
      "Sadık"
    ],
    "wisdom": "Yalan söylemeyen ve her zaman sözünde duran samimi arkadaştır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_862",
    "word": "Dürüst Komşu",
    "forbidden": [
      "Dürüst",
      "Komşu",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre dürüst bir komşu olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_863",
    "word": "Kitapları Korumak",
    "forbidden": [
      "Kitap",
      "Okumak",
      "Yırtmamak",
      "Kütüphane",
      "Sayfa"
    ],
    "wisdom": "Okul kitaplarımızı yırtmayıp temiz tutarak korumaktır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_864",
    "word": "Yeşil Kubbe",
    "forbidden": [
      "Medine",
      "Peygamber",
      "Kabir",
      "Cami",
      "Mescid-i Nebevi"
    ],
    "wisdom": "Medine'de Peygamber Efendimiz'in kabrinin üstündeki yeşil kubbedir.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_865",
    "word": "Temiz Baba",
    "forbidden": [
      "Temiz",
      "Baba",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre temiz bir baba olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_866",
    "word": "Hicret Yılı",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_867",
    "word": "Emin Çocuk",
    "forbidden": [
      "Emin",
      "Çocuk",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre emin bir çocuk olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_868",
    "word": "Resim Defteri",
    "forbidden": [
      "Resim",
      "Defter",
      "Boya",
      "Çizmek",
      "Kağıt"
    ],
    "wisdom": "Görsel sanatlar dersinde boyama ve çizim yaptığımız boş yapraklı defterdir.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_869",
    "word": "Hz. Hamza'nın Aslanlığı",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_870",
    "word": "Habeşistan Hicreti",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_871",
    "word": "Temiz Elbise Giymek",
    "forbidden": [
      "Elbise",
      "Temiz",
      "Cami",
      "Namaz",
      "Giymek"
    ],
    "wisdom": "İbadet ederken veya dışarı çıkarken temiz kıyafetler seçmektir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_872",
    "word": "Kütüphanede Sessiz Olmak",
    "forbidden": [
      "Kütüphane",
      "Kitap",
      "Sessiz",
      "Okumak",
      "Gürültü"
    ],
    "wisdom": "Kitap okunan kütüphanelerde gürültü yapmayıp sessiz kalmaktır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_873",
    "word": "Mina Tepesi",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_874",
    "word": "Marmara Denizi",
    "forbidden": [
      "Marmara",
      "Deniz",
      "İstanbul",
      "Boğaz",
      "İç deniz"
    ],
    "wisdom": "Etrafı tamamen ülkemiz topraklarıyla çevrili olan iç denizimizdir.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_875",
    "word": "Ödevini Zamanında Yapmak",
    "forbidden": [
      "Ödev",
      "Zaman",
      "Çalışmak",
      "Okul",
      "Öğrenci"
    ],
    "wisdom": "Öğretmenin verdiği ödevleri geciktirmeden evde yapmaktır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_876",
    "word": "Sahura Kalkmak",
    "forbidden": [
      "Sahur",
      "Gece",
      "Uyanmak",
      "Oruç",
      "Yemek"
    ],
    "wisdom": "Oruç tutabilmek için gece vaktinde uykudan uyanıp sahur yapmaktır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_877",
    "word": "Safa ile Merve Koşusu",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_878",
    "word": "Hz. İbrahim",
    "forbidden": [
      "Ateş",
      "Nemrut",
      "Kabe",
      "İsmail",
      "Gül"
    ],
    "wisdom": "Nemrut'un ateşine atılan ama ateşin gül bahçesi olduğu peygamberdir.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_879",
    "word": "Ay",
    "forbidden": [
      "Uydu",
      "Gece",
      "Dünya",
      "Işık",
      "Hilal"
    ],
    "wisdom": "Dünya'nın tek doğal uydusu olan gökcismidir.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_880",
    "word": "Sıfır Sayısını Bulmak",
    "forbidden": [
      "Sıfır",
      "Harezmi",
      "Matematik",
      "Sayı",
      "Bulmak"
    ],
    "wisdom": "Harezmi'nin sıfır rakamını (0) matematiğe kazandırarak işlem kolaylığı sağlamasıdır.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_881",
    "word": "Okul İstiklal Marşı Töreni",
    "forbidden": [
      "Türkiye",
      "Deniz",
      "Dağ",
      "Tarih",
      "Şehir"
    ],
    "wisdom": "Coğrafya ve tarih derslerinde öğrendiğimiz temel konulardandır.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_882",
    "word": "Müezzin",
    "forbidden": [
      "Ezan",
      "Cami",
      "Kamet",
      "Ses",
      "Okumak"
    ],
    "wisdom": "Müezzin, ezan okuyarak insanları ibadete davet eder.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_883",
    "word": "Okulu Temiz Tutmak",
    "forbidden": [
      "Okul",
      "Çöp",
      "Bahçe",
      "Temiz",
      "Kutu"
    ],
    "wisdom": "Okul bahçesini ve koridorlarını temiz tutmaktır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_884",
    "word": "Hipodrom Dikilitaşı",
    "forbidden": [
      "Dikilitaş",
      "Sultanahmet",
      "Hipodrom",
      "Taş",
      "Mısır"
    ],
    "wisdom": "Sultanahmet meydanındaki eski Bizans hipodromundan kalan tarihi dikilitaştır.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_885",
    "word": "Nil Nehri",
    "forbidden": [
      "Mısır",
      "Afrika",
      "Uzun",
      "Akarsu",
      "Su"
    ],
    "wisdom": "Mısır'a hayat veren dünyanın en uzun nehridir.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_886",
    "word": "Mısır Çarşısı Baharat",
    "forbidden": [
      "Çarşı",
      "Mısır",
      "Baharat",
      "İstanbul",
      "Eski"
    ],
    "wisdom": "İstanbul Eminönü'nde bulunan, şifalı otlar ve baharatların satıldığı tarihi çarşıdır.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_887",
    "word": "Yardımseverlik",
    "forbidden": [
      "Destek",
      "İyilik",
      "Zayıf",
      "Muhtaç",
      "Paylaşmak"
    ],
    "wisdom": "Zor durumda olanlara yardım etme erdemidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_888",
    "word": "Yağmurluk Giymek",
    "forbidden": [
      "Yağmur",
      "Elbise",
      "Giymek",
      "Su geçirmeyen",
      "Mont"
    ],
    "wisdom": "Yağmurdan korunmak için giyilen kapüşonlu su geçirmeyen monttur.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_889",
    "word": "İtfira Atmamak",
    "forbidden": [
      "Ahlak",
      "Edep",
      "İyi",
      "Davranış",
      "İslam"
    ],
    "wisdom": "Müslümanın hayatında uygulaması gereken güzel ahlak kuralıdır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_890",
    "word": "Mısır Sarayı",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_891",
    "word": "Nur Yüzlü Melek",
    "forbidden": [
      "Melek",
      "Nur",
      "Temiz",
      "Görünmez",
      "İyi"
    ],
    "wisdom": "Allah'ın nurdan yarattığı ve hiç günah işlemeyen varlıklardır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_892",
    "word": "Gökbilim Astronomi",
    "forbidden": [
      "Astronomi",
      "Gökbilim",
      "Uzay",
      "Yıldız",
      "Teleskop"
    ],
    "wisdom": "Yıldızları, gezegenleri ve uzayı inceleyen bilim dalıdır.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_893",
    "word": "Çocukları Çok Sevmek",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_894",
    "word": "Diş Fırçalamak",
    "forbidden": [
      "Diş",
      "Fırça",
      "Macun",
      "Temizlik",
      "Ağız"
    ],
    "wisdom": "Ağız ve diş sağlığımız için dişlerimizi temizleme fırçalama işlemidir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_895",
    "word": "Hz. Süleyman",
    "forbidden": [
      "Rüzgar",
      "Kuş",
      "Cin",
      "Hayvan",
      "Kral"
    ],
    "wisdom": "Hayvanların dilini bilen ve rüzgara hükmeden hükümdar peygamberdir.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_896",
    "word": "Türk İslam Devletleri",
    "forbidden": [
      "Tarih",
      "Devlet",
      "Padişah",
      "Osmanlı",
      "Selçuklu"
    ],
    "wisdom": "İslam tarihinde kurulan devletler ve önemli hükümdarlar konusudur.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_897",
    "word": "Cami Kubbesi",
    "forbidden": [
      "Tavan",
      "Çatı",
      "Yuvarlak",
      "Cami",
      "Yukarı"
    ],
    "wisdom": "Camilerin üstünü örten yarım küre şeklindeki görkemli çatıdır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_898",
    "word": "İstanbul'un Fethi",
    "forbidden": [
      "1453",
      "Fatih",
      "Bizans",
      "Gemi",
      "Kuşatma"
    ],
    "wisdom": "1453 yılında İstanbul'un Türk toprağı olmasıdır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_899",
    "word": "Ekşi Limon",
    "forbidden": [
      "Limon",
      "Ekşi",
      "Sarı",
      "Salata",
      "Çorba"
    ],
    "wisdom": "Çorbalara ve salatalara sıkılan sarı renkli ekşi meyvedir.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_900",
    "word": "Hz. Eyüp",
    "forbidden": [
      "Sabır",
      "Hastalık",
      "Şifa",
      "Dua",
      "Kurt"
    ],
    "wisdom": "Dert ve hastalıklara karşı gösterdiği büyük sabırla tanınır.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_901",
    "word": "Cami Işıkları",
    "forbidden": [
      "İbadet",
      "Din",
      "Müslüman",
      "Allah",
      "İslam"
    ],
    "wisdom": "İslam dininde yer alan temel kavram ve ibadetlerdendir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_902",
    "word": "Piri Reis Dünya Haritası",
    "forbidden": [
      "Piri Reis",
      "Harita",
      "Dünya",
      "Amerika",
      "Ceylan derisi"
    ],
    "wisdom": "Piri Reis'in ceylan derisine çizdiği Amerika'yı da gösteren haritadır.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_903",
    "word": "Emin Baba",
    "forbidden": [
      "Emin",
      "Baba",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre emin bir baba olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_904",
    "word": "Bayramlaşmak",
    "forbidden": [
      "Bayram",
      "El öpmek",
      "Ziyaret",
      "Tebrik",
      "Sarılmak"
    ],
    "wisdom": "Bayram günlerinde insanların birbirini tebrik edip kucaklaşmasıdır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_905",
    "word": "Peygamberimizin Amcası",
    "forbidden": [
      "Peygamber",
      "Elçi",
      "Allah",
      "Kuran",
      "Vahiy"
    ],
    "wisdom": "Peygamberlikle ilgili kutsal bir kavramı ifade eder.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_906",
    "word": "Sultanahmet Meydanı",
    "forbidden": [
      "Meydan",
      "Sultanahmet",
      "Dikilitaş",
      "İstanbul",
      "Cami"
    ],
    "wisdom": "İstanbul'da Sultanahmet Camii ve dikilitaşların bulunduğu tarihi meydandır.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_907",
    "word": "Hz. Ebu Bekir",
    "forbidden": [
      "İlk",
      "Halife",
      "Sıddık",
      "Arkadaş",
      "Mağara"
    ],
    "wisdom": "Peygamberimizin en yakın dostu ve ilk halifedir.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_908",
    "word": "Büyüklere El Öpmek",
    "forbidden": [
      "Büyükler",
      "El öpmek",
      "Bayram",
      "Saygı",
      "Hürmet"
    ],
    "wisdom": "Bayramlarda veya büyüklerin yanına gidince saygıyla el öpmektir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_909",
    "word": "Yerebatan Sarnıcı",
    "forbidden": [
      "Sarnıç",
      "İstanbul",
      "Su",
      "Sütun",
      "Yerebatan"
    ],
    "wisdom": "İstanbul'daki Bizans döneminden kalan, içinde Medusa başı olan yeraltı su deposudur.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_910",
    "word": "Coğrafya Bilgini Katip Çelebi",
    "forbidden": [
      "Katip Çelebi",
      "Coğrafya",
      "Cihannüma",
      "Bilgin",
      "Kitap"
    ],
    "wisdom": "Cihannüma isimli coğrafya kitabını yazan ünlü Osmanlı bilginidir.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_911",
    "word": "Cömert Komşu",
    "forbidden": [
      "Cömert",
      "Komşu",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre cömert bir komşu olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_912",
    "word": "Medine Günleri",
    "forbidden": [
      "Medine",
      "Peygamber",
      "Hicret",
      "Cami",
      "Yaşam"
    ],
    "wisdom": "Peygamberimizin hicret ettikten sonra Medine'deki nurlu yaşam yıllardır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_913",
    "word": "Sahabe Hayatları",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_914",
    "word": "Selimiye Camii Edirne",
    "forbidden": [
      "Cami",
      "Edirne",
      "Mimar Sinan",
      "Ustalık",
      "Tarihi"
    ],
    "wisdom": "Mimar Sinan'ın 'ustalık eserim' dediği Edirne'deki devasa camidir.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_915",
    "word": "Haksızlık Yapmamak",
    "forbidden": [
      "Haksızlık",
      "Adalet",
      "Eşit",
      "Doğru",
      "Hak"
    ],
    "wisdom": "Hiç kimsenin hakkını yemeden dürüstçe davranmaktır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_916",
    "word": "İftira",
    "forbidden": [
      "Yalan",
      "Suç",
      "Çamur",
      "Günahsız",
      "Atmak"
    ],
    "wisdom": "Bir kimseye işlemediği bir suçu yalan yere atmaktır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_917",
    "word": "Hafızlık Eğitimi",
    "forbidden": [
      "Hafız",
      "Ezber",
      "Kuran",
      "Kurs",
      "Zihin"
    ],
    "wisdom": "Kur'an'ın tamamını ezberlemek için alınan özel eğitimdir.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_918",
    "word": "Selahaddin Eyyubi Kudüs",
    "forbidden": [
      "Kudüs",
      "Selahaddin",
      "Haçlı",
      "Fatih",
      "Eyyubi"
    ],
    "wisdom": "Kudüs'ü Haçlı işgalinden kurtararak barışı getiren kahraman İslam komutanıdır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_919",
    "word": "Osmanlı Sarayı",
    "forbidden": [
      "Saray",
      "Osmanlı",
      "Topkapı",
      "Padişah",
      "Yönetim"
    ],
    "wisdom": "Osmanlı padişahlarının yaşadığı ve devleti yönettiği saray binalarıdır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_920",
    "word": "El-Harezmi",
    "forbidden": [
      "Matematik",
      "Cebir",
      "Sıfır",
      "Algoritma",
      "Hesap"
    ],
    "wisdom": "Matematikte cebir bilimini kuran ve sıfır rakamını kullanan bilgindir.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_921",
    "word": "Güzel Sözler Söylemek",
    "forbidden": [
      "Güzel",
      "Söz",
      "Konuşmak",
      "Sadaka",
      "Ahlak"
    ],
    "wisdom": "Arkadaşlarımıza her zaman güzel ve teşvik edici sözler söylemektir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_922",
    "word": "Sınıfı Temiz Tutmak",
    "forbidden": [
      "Sınıf",
      "Çöp",
      "Yere atmak",
      "Sıra",
      "Okul"
    ],
    "wisdom": "Ders işlediğimiz sınıfı kirletmeyip çöpleri kutuya atmaktır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_923",
    "word": "Gıybet",
    "forbidden": [
      "Dedikodu",
      "Arkadan",
      "Konuşmak",
      "Kardeş",
      "Et"
    ],
    "wisdom": "Bir kimsenin arkasından hoşlanmayacağı şekilde konuşmaktır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_924",
    "word": "23 Nisan Çocuk Bayramı",
    "forbidden": [
      "23 Nisan",
      "Bayram",
      "Çocuk",
      "Atatürk",
      "Meclis"
    ],
    "wisdom": "Atatürk'ün dünya çocuklarına armağan ettiği milli egemenlik bayramıdır.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_925",
    "word": "Habil ile Kabil",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_926",
    "word": "Ahlak Dersi",
    "forbidden": [
      "Ahlak",
      "Ders",
      "Okul",
      "Din Kültürü",
      "Öğrenmek"
    ],
    "wisdom": "Okullarda iyi ve kötü davranışları öğrendiğimiz ders saatidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_927",
    "word": "Kur'an Sureleri",
    "forbidden": [
      "Kuran",
      "Sure",
      "Ayet",
      "Okumak",
      "Cüz"
    ],
    "wisdom": "Kur'an-ı Kerim ile ilgili ayet, sure ve okuma kuralları konusudur.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_928",
    "word": "Minber",
    "forbidden": [
      "Hutbe",
      "Cuma",
      "Cami",
      "Merdiven",
      "Konuşma"
    ],
    "wisdom": "Cuma günleri imamın hutbe okumak için çıktığı merdivenli yerdir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_929",
    "word": "Gitar Telleri",
    "forbidden": [
      "Gitar",
      "Tel",
      "Müzik",
      "Çalmak",
      "Parmak"
    ],
    "wisdom": "Gitarın gövdesinde bulunan, parmakla çekilerek ses çıkaran ince tellerdir.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_930",
    "word": "Mekke Yolu",
    "forbidden": [
      "Mekke",
      "Yolculuk",
      "Hac",
      "Giriş",
      "Mikat"
    ],
    "wisdom": "Hacıların Kabe'ye ulaşmak için çıktıkları kutsal yolculuk güzergahıdır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_931",
    "word": "Ramazan Bayramı",
    "forbidden": [
      "Oruç",
      "Ramazan",
      "Şeker",
      "Bayram",
      "Tatlı"
    ],
    "wisdom": "Ramazan ayında tutulan oruçların bitiminde kutlanan üç günlük bayramdır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_932",
    "word": "Manavgat Şelalesi",
    "forbidden": [
      "Şelale",
      "Antalya",
      "Manavgat",
      "Su",
      "Akarsu"
    ],
    "wisdom": "Antalya ilimizdeki gürül gürül akan ünlü şelaledir.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_933",
    "word": "Melek",
    "forbidden": [
      "Kanat",
      "Görünmez",
      "Nurlu",
      "Cebrail",
      "Görevli"
    ],
    "wisdom": "Melekler, Allah'ın nurdan yarattığı ve hiç günah işlemeyen varlıklardır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_934",
    "word": "Seyahat Etmek",
    "forbidden": [
      "Gezmek",
      "Yolculuk",
      "Seyahat",
      "Gezgin",
      "Otobüs"
    ],
    "wisdom": "Yeni şehirler ve ülkeler görmek için yolculuğa çıkmaktır.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_935",
    "word": "Soğuk Su",
    "forbidden": [
      "Su",
      "Soğuk",
      "İçmek",
      "Yaz",
      "Buz"
    ],
    "wisdom": "Yaz sıcaklarında hararetimizi alan serin içme suyudur.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_936",
    "word": "Kabe Kapısı",
    "forbidden": [
      "Kabe",
      "Altın",
      "Kapı",
      "Mekke",
      "Açmak"
    ],
    "wisdom": "Kabe'nin üzerinde bulunan altın işlemeli görkemli kapıdır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_937",
    "word": "Ege Denizi Adaları",
    "forbidden": [
      "Ege",
      "Deniz",
      "Ada",
      "Yunanistan",
      "Mavi"
    ],
    "wisdom": "Batımızdaki Ege denizinde bulunan irili ufaklı kara parçalarıdır.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_938",
    "word": "Okul Çantası",
    "forbidden": [
      "Çanta",
      "Okul",
      "Kitap",
      "Defter",
      "Sırt"
    ],
    "wisdom": "Kitap ve defterlerimizi içimize koyup sırtımızda taşıdığımız okul çantasıdır.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_939",
    "word": "Dünya Atlası",
    "forbidden": [
      "Atlas",
      "Harita",
      "Kitap",
      "Dünya",
      "Coğrafya"
    ],
    "wisdom": "Tüm kıtaların ve ülkelerin haritalarını içeren büyük harita kitabıdır.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_940",
    "word": "Topkapı Sarayı Müzesi",
    "forbidden": [
      "Topkapı",
      "Saray",
      "Müze",
      "Osmanlı",
      "Ziyaret"
    ],
    "wisdom": "Eski Osmanlı sarayının tarihi eserler ve tahtların sergilendiği müze halidir.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_941",
    "word": "Büyüteç Camı",
    "forbidden": [
      "Büyüteç",
      "Cam",
      "Büyütmek",
      "Karınca",
      "Bakmak"
    ],
    "wisdom": "Küçük nesneleri veya yazıları daha büyük görmemizi sağlayan mercektir.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_942",
    "word": "Takvim Yaprağı",
    "forbidden": [
      "Takvim",
      "Yaprak",
      "Tarih",
      "Günün sözü",
      "Kağıt"
    ],
    "wisdom": "Her gün bir yaprağı koparılan, üzerinde dini bilgilerin olduğu takvimdir.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_943",
    "word": "Tarih Kitabı",
    "forbidden": [
      "Kitap",
      "Tarih",
      "Okumak",
      "Okul",
      "Ders"
    ],
    "wisdom": "Geçmişte yaşanmış olayları ve medeniyetleri anlatan ders kitabıdır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_944",
    "word": "Koşu Parkuru",
    "forbidden": [
      "Koşu",
      "Parkur",
      "Yol",
      "Spor",
      "Yürümek"
    ],
    "wisdom": "Atletlerin veya spor yapanların koştuğu özel tasarlanmış yoldur.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_945",
    "word": "Galata Kulesi Hezarfen",
    "forbidden": [
      "Galata",
      "Kule",
      "Hezarfen",
      "Uçmak",
      "İstanbul"
    ],
    "wisdom": "Hezarfen'in takma kanatlarla atlayarak uçtuğu tarihi kulemizdir.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_946",
    "word": "Eyüp Sultan Camii",
    "forbidden": [
      "Cami",
      "Eyüp",
      "Sahabe",
      "Türbe",
      "İstanbul"
    ],
    "wisdom": "İstanbul'da Ebu Eyyub el-Ensari hazretlerinin kabrinin bulunduğu camidir.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_947",
    "word": "Köprüden Geçmek",
    "forbidden": [
      "Köprü",
      "Geçmek",
      "Su",
      "Nehir",
      "Yol"
    ],
    "wisdom": "Nehrin veya yolun karşı tarafına köprü üstünden yürümek veya arabayla geçmektir.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_948",
    "word": "Yusuf'un Rüyası",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_949",
    "word": "Cennet",
    "forbidden": [
      "Güzel",
      "Ödül",
      "Bahçe",
      "Ahiret",
      "Mümin"
    ],
    "wisdom": "Cennet, dünyada güzel işler yapanların ahiretteki ödül yurdudur.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_950",
    "word": "Futbol Topu",
    "forbidden": [
      "Top",
      "Futbol",
      "Gol",
      "Maç",
      "Ayak"
    ],
    "wisdom": "Futbol maçlarında kaleye gol atmak için ayakla vurulan yassı yuvarlak toptur.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_951",
    "word": "Temiz Olmak",
    "forbidden": [
      "Ahlak",
      "Edep",
      "İyi",
      "Davranış",
      "İslam"
    ],
    "wisdom": "Müslümanın hayatında uygulaması gereken güzel ahlak kuralıdır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_952",
    "word": "Son Peygamber",
    "forbidden": [
      "Peygamber",
      "Elçi",
      "Allah",
      "Kuran",
      "Vahiy"
    ],
    "wisdom": "Peygamberlikle ilgili kutsal bir kavramı ifade eder.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_953",
    "word": "Kuran Yazısı",
    "forbidden": [
      "Kuran",
      "Yazı",
      "Arapça",
      "Harf",
      "Mushaf"
    ],
    "wisdom": "Kur'an-ı Kerim'in yazılı olduğu orijinal Arapça metin yazısııdır.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_954",
    "word": "Afrika Kıtası",
    "forbidden": [
      "Kıta",
      "Afrika",
      "Sıcak",
      "Sahra",
      "Safari"
    ],
    "wisdom": "Çöllerin ve vahşi hayvanların bulunduğu sıcak güney kıtasıdır.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_955",
    "word": "Genç Sahabiler",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_956",
    "word": "Büyüklere Hürmet",
    "forbidden": [
      "Saygı",
      "Edep",
      "Ahlak",
      "Büyükler",
      "Davranış"
    ],
    "wisdom": "İnsanlar arasında sevgiyi pekiştiren ahlaki saygı kuralıdır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_957",
    "word": "Mushaf Sayfası",
    "forbidden": [
      "Mushaf",
      "Kuran",
      "Sayfa",
      "Okumak",
      "Yaprak"
    ],
    "wisdom": "Kur'an-ı Kerim kitabının her bir yaprak sayfasıdır.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_958",
    "word": "Fatih Medresesi Öğretmeni",
    "forbidden": [
      "Fatih",
      "Medrese",
      "Öğretmen",
      "Ali Kuşçu",
      "İstanbul"
    ],
    "wisdom": "Ali Kuşçu'nun Fatih Külliyesinde başhocalık yaptığı dönemdir.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_959",
    "word": "Sure Konuları",
    "forbidden": [
      "Sure",
      "Konu",
      "Kuran",
      "Ayet",
      "Kıssa"
    ],
    "wisdom": "Sürelerin içinde anlatılan ahlak, ibadet ve kıssa konularıdır.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_960",
    "word": "Hicri Yılbaşı",
    "forbidden": [
      "Hicri",
      "Yılbaşı",
      "Muharrem",
      "Hicret",
      "Takvim"
    ],
    "wisdom": "Peygamberimizin hicretini başlangıç kabul eden hicri takvimin ilk günüdür.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_961",
    "word": "Selahaddin Eyyubi",
    "forbidden": [
      "Kudüs",
      "Haçlı",
      "Fatih",
      "Sultan",
      "Kudüs Fatihi"
    ],
    "wisdom": "Kudüs'ü Haçlı ordularından geri alan büyük kahramandır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_962",
    "word": "Ashab-ı Kiram",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_963",
    "word": "Sabırlı Komşu",
    "forbidden": [
      "Sabırlı",
      "Komşu",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre sabırlı bir komşu olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_964",
    "word": "Sure Ezberlemek",
    "forbidden": [
      "Sure",
      "Ezber",
      "Kuran",
      "Hafız",
      "Zihin"
    ],
    "wisdom": "Ayetleri zihne kaydedip ezbere okuyabilecek hale gelmektir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_965",
    "word": "Ahşap Rahle",
    "forbidden": [
      "Rahle",
      "Ahşap",
      "Kuran",
      "Okumak",
      "Masa"
    ],
    "wisdom": "Kur'an okurken üzerine konulan makas şeklindeki ahşap sehpadır.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_966",
    "word": "Otomat Mühendisliği",
    "forbidden": [
      "Otomat",
      "Robot",
      "El-Cezeri",
      "Mühendis",
      "Çark"
    ],
    "wisdom": "Kendi kendine hareket eden robotların yapım bilimi olan sibernetiktir.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_967",
    "word": "Kuran Kürsüsü",
    "forbidden": [
      "Rahle",
      "Kuran",
      "Cami",
      "Masa",
      "Yüksek"
    ],
    "wisdom": "Camilerde Kur'an'ı yüksekte tutup okumak için kullanılan ahşap masadır.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_968",
    "word": "Sır Tutmak",
    "forbidden": [
      "Sır",
      "Gizli",
      "Söylemek",
      "Güven",
      "Arkadaş"
    ],
    "wisdom": "Arkadaşımızın bize güvendiği için anlattığı özel şeyleri kimseye söylememektir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_969",
    "word": "Cömert Arkadaş",
    "forbidden": [
      "Cömert",
      "Arkadaş",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre cömert bir arkadaş olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_970",
    "word": "Peygamberimizin Mucizeleri",
    "forbidden": [
      "Peygamber",
      "Mucize",
      "Ayın yarılması",
      "Su",
      "Kuran"
    ],
    "wisdom": "Peygamber Efendimiz'in gösterdiği olağanüstü mucizelerdir.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_971",
    "word": "Güzel Ahlak",
    "forbidden": [
      "Ahlak",
      "İyi",
      "Davranış",
      "Peygamber",
      "Edep"
    ],
    "wisdom": "İslam dininin emrettiği en güzel ve örnek davranışların tümüdür.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_972",
    "word": "Mehter Marşı",
    "forbidden": [
      "Marş",
      "Mehter",
      "Müzik",
      "Ceddin Deden",
      "Osmanlı"
    ],
    "wisdom": "Mehter takımı tarafından çalınan kahramanlık ve coşku marşıdır.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_973",
    "word": "Temiz İnsan",
    "forbidden": [
      "Temiz",
      "İnsan",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre temiz bir i̇nsan olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_974",
    "word": "Fatiha Suresi",
    "forbidden": [
      "İlk",
      "Sure",
      "Elham",
      "Namaz",
      "Açılış"
    ],
    "wisdom": "Kur'an'ın ilk suresidir ve her namaz rekatında okunur.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_975",
    "word": "Evliya Çelebi",
    "forbidden": [
      "Seyahatname",
      "Gezgin",
      "Seyahat",
      "Gezmek",
      "Osmanlı"
    ],
    "wisdom": "Seyahatname eseriyle tanınan ünlü Osmanlı seyyahıdır.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_976",
    "word": "Zebur Kitabı",
    "forbidden": [
      "Zebur",
      "Davud",
      "Peygamber",
      "Kitap",
      "İlahi"
    ],
    "wisdom": "Hz. Davud peygambere indirilen ilahi kutsal kitaptır.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_977",
    "word": "Uhud Okçuları",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_978",
    "word": "Berat Kandili",
    "forbidden": [
      "Berat",
      "Kandil",
      "Af",
      "Günah",
      "Gece"
    ],
    "wisdom": "Ramazan ayının müjdecisi olan, günahlardan af ve berat dilenen gecedir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_979",
    "word": "Hz. Ömer'in Adaleti",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_980",
    "word": "Tren Rayları",
    "forbidden": [
      "Tren",
      "Ray",
      "Yol",
      "Demir",
      "İstasyon"
    ],
    "wisdom": "Trenlerin üzerinde hızla gittiği paralel demir yollardır.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_981",
    "word": "Mustafa Kemal Atatürk",
    "forbidden": [
      "Atatürk",
      "Kurucu",
      "Cumhuriyet",
      "Anıtkabir",
      "Lider"
    ],
    "wisdom": "Türkiye Cumhuriyeti'nin kurucusu ve ilk cumhurbaşkanı olan liderdir.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_982",
    "word": "Ramazan Davulu",
    "forbidden": [
      "Sahur",
      "Gece",
      "Uyanmak",
      "Çalmak",
      "Mani"
    ],
    "wisdom": "Sahurda insanları uyandırmak için çalınan davuldur.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_983",
    "word": "Yerlere Tükürmemek",
    "forbidden": [
      "Tükürmek",
      "Yasak",
      "Temizlik",
      "Sokak",
      "Çevre"
    ],
    "wisdom": "Sokaklara ve yerlere tükürmenin çirkin ve zararlı bir davranış olduğunu anlatan kuraldır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_984",
    "word": "Diyarbakır Artuklu Mühendisi",
    "forbidden": [
      "El-Cezeri",
      "Mühendis",
      "Artuklu",
      "Diyarbakır",
      "Saray"
    ],
    "wisdom": "El-Cezeri'nin sarayında başmühendis olarak görev yaptığı Diyarbakır beyliğidir.",
    "category": "İslam Bilim İnsanları"
  },
  {
    "id": "tb_985",
    "word": "Çiçekleri Koparmamak",
    "forbidden": [
      "Çiçek",
      "Koparmak",
      "Bahçe",
      "Park",
      "Yeşil"
    ],
    "wisdom": "Parklardaki ve bahçelerdeki güzel çiçeklere zarar vermemektir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_986",
    "word": "Oyuncak Paylaşmak",
    "forbidden": [
      "Oyuncak",
      "Arkadaş",
      "Paylaşmak",
      "Oyun",
      "Birlikte"
    ],
    "wisdom": "Oyuncaklarımızı arkadaşlarımızla paylaşarak beraber oynamaktır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_987",
    "word": "Saygılı Çocuk",
    "forbidden": [
      "Saygılı",
      "Çocuk",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre saygılı bir çocuk olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_988",
    "word": "Kurbanlık Koç",
    "forbidden": [
      "Kurban",
      "Hayvan",
      "Kesmek",
      "Boynuz",
      "Koç"
    ],
    "wisdom": "Kurban bayramında kesilen boynuzlu erkek kurbanlık hayvandır.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_989",
    "word": "Cebrail Aleyhisselam",
    "forbidden": [
      "Cebrail",
      "Melek",
      "Vahiy",
      "Peygamber",
      "Dört"
    ],
    "wisdom": "Dört büyük melekten biri olup vahiy getirmekle görevlidir.",
    "category": "Kur'an-ı Kerim"
  },
  {
    "id": "tb_990",
    "word": "Tesbih Boncuğu",
    "forbidden": [
      "Tesbih",
      "Boncuk",
      "Namaz",
      "Çekmek",
      "Zikir"
    ],
    "wisdom": "Namazdan sonra zikir sayılarını belirlemek için çekilen boncuklu iptir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_991",
    "word": "Secdeye Varmak",
    "forbidden": [
      "Secde",
      "Namaz",
      "Yere",
      "Alın",
      "Eğilmek"
    ],
    "wisdom": "Namaz kılarken başı yere koyup secde vaziyetine gelmektir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_992",
    "word": "Oruç",
    "forbidden": [
      "Ramazan",
      "Sahur",
      "İftar",
      "Açlık",
      "Niyet"
    ],
    "wisdom": "Oruç tutarak aç insanların halini daha iyi anlarız.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_993",
    "word": "Babaya Saygı",
    "forbidden": [
      "Saygı",
      "Edep",
      "Ahlak",
      "Büyükler",
      "Davranış"
    ],
    "wisdom": "İnsanlar arasında sevgiyi pekiştiren ahlaki saygı kuralıdır.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_994",
    "word": "Tünel Yolu",
    "forbidden": [
      "Tünel",
      "Dağ",
      "Yol",
      "Karanlık",
      "Geçmek"
    ],
    "wisdom": "Dağların içinden geçebilmek için açılan karanlık ve uzun yer altı yollarıdır.",
    "category": "Genel Kültür"
  },
  {
    "id": "tb_995",
    "word": "Cömert Kardeş",
    "forbidden": [
      "Cömert",
      "Kardeş",
      "Kişi",
      "İyi",
      "Ahlak"
    ],
    "wisdom": "İslam ahlakına göre cömert bir kardeş olmak çok değerlidir.",
    "category": "Ahlak & Edep"
  },
  {
    "id": "tb_996",
    "word": "Namaz Abdesti",
    "forbidden": [
      "Temizlik",
      "Su",
      "Yıkamak",
      "Namaz",
      "Hazırlık"
    ],
    "wisdom": "Namaz kılmak için uzuvları yıkayarak yapılan ibadet temizliğidir.",
    "category": "Dini Terimler"
  },
  {
    "id": "tb_997",
    "word": "Medine Sözleşmesi",
    "forbidden": [
      "Peygamber",
      "Sahabe",
      "Mekke",
      "Medine",
      "Hicret"
    ],
    "wisdom": "Peygamber Efendimiz'in hayatı ve sahabelerle ilgili siyer konusudur.",
    "category": "Peygamberler & Siyer"
  },
  {
    "id": "tb_998",
    "word": "Kız Kulesi Boğaz",
    "forbidden": [
      "Kız kulesi",
      "İstanbul",
      "Boğaz",
      "Deniz",
      "Tarihi"
    ],
    "wisdom": "İstanbul Boğazı'nın ortasındaki kayalık üzerine kurulu efsanevi kuledir.",
    "category": "Coğrafya & Tarih"
  },
  {
    "id": "tb_999",
    "word": "İlk Türk İslam Devleti",
    "forbidden": [
      "Tarih",
      "Devlet",
      "Padişah",
      "Osmanlı",
      "Selçuklu"
    ],
    "wisdom": "İslam tarihinde kurulan devletler ve önemli hükümdarlar konusudur.",
    "category": "İslam Tarihi & Devletleri"
  },
  {
    "id": "tb_1000",
    "word": "Kabe Duvarı",
    "forbidden": [
      "Taş",
      "Kabe",
      "Hacerü'l-Esved",
      "Duvar",
      "Tavaf"
    ],
    "wisdom": "Kabe'yi oluşturan taş duvarlardır, etrafında tavaf yapılır.",
    "category": "Dini Terimler"
  }
];
