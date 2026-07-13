// ============================================================

// Elif-Ba 2024 - Tam Müfredat Verisi (30 Konuluk Gelişmiş Eğitim Yolu)

// ============================================================



// ------- TİP TANIMLARI -------



export type ElifbaPageType =

  | 'harfler_tablosu'       // Sayfa 8

  | 'kelime_ici_yazilis'    // Sayfa 9-11

  | 'harekeler'             // Tanıtım Tabloları

  | 'cezm'                  // Cezm Tanıtımı

  | 'sedde'                 // Şedde Tanıtımı

  | 'med_harfleri'          // Med Tanıtımları

  | 'tenvin'                // Tenvin Tanıtımları

  | 'alistirma'             // Kelime Alıştırma Sayfaları

  | 'namaz_dualari';        // Namaz Duaları



export interface HarekeliBilesik {

  harf: string;

  hareke: string;

  bilesik: string;

  okunusu: string;

}



export interface AlistirmaKelime {

  arapca: string;

  okunusu: string;

  anlami?: string;

}



export interface NamazDuasi {

  baslik: string;

  altBaslik?: string;

  arapca: string;

  okunusu: string;

  anlami: string;

}



export interface ElifbaPage {

  id: number;

  sayfaNo: number | string;

  konuNo: number;

  baslik: string;

  altBaslik?: string;

  tip: ElifbaPageType;

  aciklama?: string;



  // Harf Tablosu

  harfler?: Array<{

    sira: number;

    harf: string;

    isim: string;

    okunusu: string;

  }>;



  // Kelime İçi Yazılışları

  harfFormlari?: Array<{

    harf: string;

    isim: string;

    basta: string;

    ortada: string;

    sonda: string;

    ornekKelimeler?: AlistirmaKelime[];

  }>;



  // Harekeler, Cezm, Şedde, Med, Tenvin

  harekeliBilesikler?: HarekeliBilesik[];

  alistirmaKelimeleri?: AlistirmaKelime[];



  // Namaz Duaları

  dualar?: NamazDuasi[];

}



// ------- SAYFA VERİLERİ -------



export const ELIF_BA_PAGES: ElifbaPage[] = [

  // ================ SAYFA 8: 1. KONU - HARFLER ================

  {

    id: 1,

    sayfaNo: 8,

    konuNo: 1,

    baslik: 'Harfler',

    altBaslik: 'Arap Alfabesindeki 28 Harf',

    tip: 'harfler_tablosu',

    aciklama: 'Kur’an-ı Kerim 28 Arap harfi ile yazılmıştır. Harfler sağdan sola doğru yazılır ve okunur.',

    harfler: [

      { sira: 1,  harf: 'ا', isim: 'Elif',  okunusu: 'Elif' },

      { sira: 2,  harf: 'ب', isim: 'Be',    okunusu: 'Be' },

      { sira: 3,  harf: 'ت', isim: 'Te',    okunusu: 'Te' },

      { sira: 4,  harf: 'ث', isim: 'Se',    okunusu: 'Se (peltek)' },

      { sira: 5,  harf: 'ج', isim: 'Cim',   okunusu: 'Cim' },

      { sira: 6,  harf: 'ح', isim: 'Ha',    okunusu: 'Ha (boğazdan)' },

      { sira: 7,  harf: 'خ', isim: 'Hı',    okunusu: 'Hı (gırtlaktan)' },

      { sira: 8,  harf: 'د', isim: 'Dal',   okunusu: 'Dal' },

      { sira: 9,  harf: 'ذ', isim: 'Zel',   okunusu: 'Zel (peltek)' },

      { sira: 10, harf: 'ر', isim: 'Ra',    okunusu: 'Ra' },

      { sira: 11, harf: 'ز', isim: 'Ze',    okunusu: 'Ze' },

      { sira: 12, harf: 'س', isim: 'Sin',   okunusu: 'Sin' },

      { sira: 13, harf: 'ش', isim: 'Şın',   okunusu: 'Şın' },

      { sira: 14, harf: 'ص', isim: 'Sad',   okunusu: 'Sad (kalın)' },

      { sira: 15, harf: 'ض', isim: 'Dad',   okunusu: 'Dad (kalın)' },

      { sira: 16, harf: 'ط', isim: 'Tı',    okunusu: 'Tı (kalın)' },

      { sira: 17, harf: 'ظ', isim: 'Zı',    okunusu: 'Zı (peltek, kalın)' },

      { sira: 18, harf: 'ع', isim: 'Ayn',   okunusu: 'Ayn (boğazdan)' },

      { sira: 19, harf: 'غ', isim: 'Gayn',  okunusu: 'Gayn (gırtlaktan)' },

      { sira: 20, harf: 'ف', isim: 'Fe',    okunusu: 'Fe' },

      { sira: 21, harf: 'ق', isim: 'Kaf',   okunusu: 'Kaf (kalın)' },

      { sira: 22, harf: 'ك', isim: 'Kef',   okunusu: 'Kef' },

      { sira: 23, harf: 'ل', isim: 'Lam',   okunusu: 'Lam' },

      { sira: 24, harf: 'م', isim: 'Mim',   okunusu: 'Mim' },

      { sira: 25, harf: 'ن', isim: 'Nun',   okunusu: 'Nun' },

      { sira: 26, harf: 'و', isim: 'Vav',   okunusu: 'Vav' },

      { sira: 27, harf: 'ه', isim: 'He',    okunusu: 'He (gırtlaktan)' },

      { sira: 28, harf: 'ي', isim: 'Ye',    okunusu: 'Ye' },

    ]

  },



  // ================ SAYFA 9-11: 2. KONU - HARFLERİN KELİME İÇİ YAZILIŞLARI ================

  {

    id: 2,

    sayfaNo: '9-11',

    konuNo: 2,

    baslik: 'Harflerin Kelime İçi Yazılışları',

    altBaslik: 'Başta – Ortada – Sonda Şekilleri',

    tip: 'kelime_ici_yazilis',

    aciklama: 'Arap harfleri kelime içindeki konumlarına göre farklı biçimler alır. Harfler başta, ortada ve sonda olmak üzere değişebilir.',

    harfFormlari: [

      { harf: 'ا', isim: 'Elif',  basta: 'ا',  ortada: 'ـا', sonda: 'ـا', ornekKelimeler: [{ arapca: 'اَمَرَ', okunusu: 'Emere' }, { arapca: 'سَاَلَ', okunusu: 'Seele' }] },

      { harf: 'ب', isim: 'Be',    basta: 'بـ', ortada: 'ـبـ', sonda: 'ـب', ornekKelimeler: [{ arapca: 'بَلَغَ', okunusu: 'Belağa' }, { arapca: 'كَتَبَ', okunusu: 'Ketebe' }] },

      { harf: 'ت', isim: 'Te',    basta: 'تـ', ortada: 'ـتـ', sonda: 'ـت', ornekKelimeler: [{ arapca: 'تَرَكَ', okunusu: 'Terake' }, { arapca: 'بَيْتٌ', okunusu: 'Beytün' }] },

      { harf: 'ث', isim: 'Se',    basta: 'ثـ', ortada: 'ـثـ', sonda: 'ـث', ornekKelimeler: [{ arapca: 'ثَمَرَةٌ', okunusu: 'Semeratün' }] },

      { harf: 'ج', isim: 'Cim',   basta: 'جـ', ortada: 'ـجـ', sonda: 'ـج', ornekKelimeler: [{ arapca: 'جَعَلَ', okunusu: 'Ceale' }] },

      { harf: 'ح', isim: 'Ha',    basta: 'حـ', ortada: 'ـحـ', sonda: 'ـح', ornekKelimeler: [{ arapca: 'حَمِدَ', okunusu: 'Hamide' }] },

      { harf: 'خ', isim: 'Hı',    basta: 'خـ', ortada: 'ـخـ', sonda: 'ـخ', ornekKelimeler: [{ arapca: 'خَلَقَ', okunusu: 'Halaka' }] },

      { harf: 'د', isim: 'Dal',   basta: 'د',  ortada: 'ـد', sonda: 'ـد', ornekKelimeler: [{ arapca: 'دَرَسَ', okunusu: 'Derase' }] },

      { harf: 'ذ', isim: 'Zel',   basta: 'ذ',  ortada: 'ـذ', sonda: 'ـذ', ornekKelimeler: [{ arapca: 'ذَهَبَ', okunusu: 'Zehebe' }] },

      { harf: 'ر', isim: 'Ra',    basta: 'ر',  ortada: 'ـر', sonda: 'ـر', ornekKelimeler: [{ arapca: 'رَحِمَ', okunusu: 'Rahime' }] },

      { harf: 'ز', isim: 'Ze',    basta: 'ز',  ortada: 'ـز', sonda: 'ـز', ornekKelimeler: [{ arapca: 'زَرَعَ', okunusu: 'Zerae' }] },

      { harf: 'س', isim: 'Sin',   basta: 'سـ', ortada: 'ـسـ', sonda: 'ـث', ornekKelimeler: [{ arapca: 'سَمِعَ', okunusu: 'Semi\'a' }] },

      { harf: 'ش', isim: 'Şın',   basta: 'شـ', ortada: 'ـشـ', sonda: 'ـش', ornekKelimeler: [{ arapca: 'شَكَرَ', okunusu: 'Şekere' }] },

      { harf: 'ص', isim: 'Sad',   basta: 'صـ', ortada: 'ـصـ', sonda: 'ـث', ornekKelimeler: [{ arapca: 'صَبَرَ', okunusu: 'Sabera' }] },

      { harf: 'ض', isim: 'Dad',   basta: 'ضـ', ortada: 'ـضـ', sonda: 'ـد', ornekKelimeler: [{ arapca: 'ضَرَبَ', okunusu: 'Darebe' }] },

      { harf: 'ط', isim: 'Tı',    basta: 'طـ', ortada: 'ـطـ', sonda: 'ـت', ornekKelimeler: [{ arapca: 'طَلَبَ', okunusu: 'Talebe' }] },

      { harf: 'ظ', isim: 'Zı',    basta: 'ظـ', ortada: 'ـظـ', sonda: 'ـذ', ornekKelimeler: [{ arapca: 'ظَلَمَ', okunusu: 'Zaleme' }] },

      { harf: 'ع', isim: 'Ayn',   basta: 'عـ', ortada: 'ـعـ', sonda: 'ـع', ornekKelimeler: [{ arapca: 'عَلِمَ', okunusu: 'Alime' }] },

      { harf: 'غ', isim: 'Gayn',  basta: 'غـ', ortada: 'ـغـ', sonda: 'ـغ', ornekKelimeler: [{ arapca: 'غَفَرَ', okunusu: 'Ğafere' }] },

      { harf: 'ف', isim: 'Fe',    basta: 'فـ', ortada: 'ـفـ', sonda: 'ـف', ornekKelimeler: [{ arapca: 'فَتَحَ', okunusu: 'Feteha' }] },

      { harf: 'ق', isim: 'Kaf',   basta: 'قـ', ortada: 'ـقـ', sonda: 'ـق', ornekKelimeler: [{ arapca: 'قَرَأَ', okunusu: 'Karae' }] },

      { harf: 'ك', isim: 'Kef',   basta: 'كـ', ortada: 'ـكـ', sonda: 'ـق', ornekKelimeler: [{ arapca: 'كَتَبَ', okunusu: 'Ketebe' }] },

      { harf: 'ل', isim: 'Lam',   basta: 'لـ', ortada: 'ـلـ', sonda: 'ـل', ornekKelimeler: [{ arapca: 'لَعِبَ', okunusu: 'Leibe' }] },

      { harf: 'م', isim: 'Mim',   basta: 'مـ', ortada: 'ـمـ', sonda: 'ـم', ornekKelimeler: [{ arapca: 'مَلَكَ', okunusu: 'Meleke' }] },

      { harf: 'ن', isim: 'Nun',   basta: 'نـ', ortada: 'ـنـ', sonda: 'ـن', ornekKelimeler: [{ arapca: 'نَصَرَ', okunusu: 'Nasara' }] },

      { harf: 'و', isim: 'Vav',   basta: 'و',  ortada: 'ـو', sonda: 'ـو', ornekKelimeler: [{ arapca: 'وَعَدَ', okunusu: 'Veade' }] },

      { harf: 'ه', isim: 'He',    basta: 'هـ', ortada: 'ـهـ', sonda: 'ـه', ornekKelimeler: [{ arapca: 'هَدَى', okunusu: 'Hedâ' }] },

      { harf: 'ي', isim: 'Ye',    basta: 'يـ', ortada: 'ـيـ', sonda: 'ـي', ornekKelimeler: [{ arapca: 'يَعْلَمُ', okunusu: 'Ya\'lemu' }] },

    ]

  },



  // ================ 3. KONU - ÜSTÜN (FATHA) TANITIMI ================

  {

    id: 3,

    sayfaNo: 12,

    konuNo: 3,

    baslik: 'Üstün (Fatha) — Harfler',

    altBaslik: 'Harflerin Üstüne Konan Yan Çizgi (َ)',

    tip: 'harekeler',

    aciklama: 'Üstün (Fatha), harfin üstüne çekilen eğik çizgidir (َ). İnce harfleri "e", kalın harfleri ise "a" sesiyle okutur.',

    harekeliBilesikler: [

      { harf: 'ا', hareke: 'üstün', bilesik: 'اَ', okunusu: 'E' },

      { harf: 'ب', hareke: 'üstün', bilesik: 'بَ', okunusu: 'Be' },

      { harf: 'ت', hareke: 'üstün', bilesik: 'تَ', okunusu: 'Te' },

      { harf: 'ث', hareke: 'üstün', bilesik: 'ثَ', okunusu: 'Se (peltek)' },

      { harf: 'ج', hareke: 'üstün', bilesik: 'جَ', okunusu: 'Ce' },

      { harf: 'ح', hareke: 'üstün', bilesik: 'حَ', okunusu: 'Ha (boğaz)' },

      { harf: 'خ', hareke: 'üstün', bilesik: 'خَ', okunusu: 'Ha (kalın)' },

      { harf: 'د', hareke: 'üstün', bilesik: 'دَ', okunusu: 'De' },

      { harf: 'ذ', hareke: 'üstün', bilesik: 'ذَ', okunusu: 'Ze (peltek)' },

      { harf: 'ر', hareke: 'üstün', bilesik: 'رَ', okunusu: 'Ra (kalın)' },

      { harf: 'ز', hareke: 'üstün', bilesik: 'زَ', okunusu: 'Ze' },

      { harf: 'س', hareke: 'üstün', bilesik: 'سَ', okunusu: 'Se' },

      { harf: 'ش', hareke: 'üstün', bilesik: 'شَ', okunusu: 'Şe' },

      { harf: 'ص', hareke: 'üstün', bilesik: 'صَ', okunusu: 'Sa (kalın)' },

      { harf: 'ض', hareke: 'üstün', bilesik: 'ضَ', okunusu: 'Da (kalın)' },

      { harf: 'ط', hareke: 'üstün', bilesik: 'طَ', okunusu: 'Ta (kalın)' },

      { harf: 'ظ', hareke: 'üstün', bilesik: 'ظَ', okunusu: 'Za (kalın/peltek)' },

      { harf: 'ع', hareke: 'üstün', bilesik: 'عَ', okunusu: 'A (boğaz)' },

      { harf: 'غ', hareke: 'üstün', bilesik: 'غَ', okunusu: 'Ğa (kalın)' },

      { harf: 'ف', hareke: 'üstün', bilesik: 'فَ', okunusu: 'Fe' },

      { harf: 'ق', hareke: 'üstün', bilesik: 'قَ', okunusu: 'Ka (kalın)' },

      { harf: 'ك', hareke: 'üstün', bilesik: 'كَ', okunusu: 'Ke' },

      { harf: 'ل', hareke: 'üstün', bilesik: 'لَ', okunusu: 'Le' },

      { harf: 'م', hareke: 'üstün', bilesik: 'مَ', okunusu: 'Me' },

      { harf: 'ن', hareke: 'üstün', bilesik: 'نَ', okunusu: 'Ne' },

      { harf: 'و', hareke: 'üstün', bilesik: 'وَ', okunusu: 'Ve' },

      { harf: 'ه', hareke: 'üstün', bilesik: 'هَ', okunusu: 'He' },

      { harf: 'ي', hareke: 'üstün', bilesik: 'يَ', okunusu: 'Ye' },

    ]

  },



  // ================ 4. KONU - ÜSTÜN (FATHA) KELİME ALIŞTIRMALARI ================

  {

    id: 4,

    sayfaNo: 13,

    konuNo: 4,

    baslik: 'Üstün (Fatha) — Kelimeler',

    altBaslik: 'Sadece Üstün Harekeli Kelime Örnekleri',

    tip: 'alistirma',

    aciklama: 'Harflerin üstün harekesiyle yan yana gelerek oluşturduğu kelime örnekleri. Üzerine tıklayarak okunuşunu dinleyin.',

    alistirmaKelimeleri: [

      { arapca: 'كَتَبَ', okunusu: 'Ketebe', anlami: 'Yazdı' },

      { arapca: 'ذَهَبَ', okunusu: 'Zehebe', anlami: 'Gitti' },

      { arapca: 'فَتَحَ', okunusu: 'Feteha', anlami: 'Açtı' },

      { arapca: 'نَصَرَ', okunusu: 'Nasara', anlami: 'Yardım etti' },

      { arapca: 'خَلَقَ', okunusu: 'Halaka', anlami: 'Yarattı' },

      { arapca: 'شَكَرَ', okunusu: 'Şekere', anlami: 'Şükretti' },

      { arapca: 'صَبَرَ', okunusu: 'Sabere', anlami: 'Sabretti' },

      { arapca: 'دَرَسَ', okunusu: 'Derase', anlami: 'Çalıştı / Ders yaptı' },

      { arapca: 'جَلَسَ', okunusu: 'Celese', anlami: 'Oturdu' },

      { arapca: 'اَكَلَ', okunusu: 'Ekele', anlami: 'Yedi' },

      { arapca: 'بَلَغَ', okunusu: 'Belağa', anlami: 'Ulaştı' },

      { arapca: 'جَعَلَ', okunusu: 'Ceale', anlami: 'Yaptı / Kıldı' },

      { arapca: 'حَمَلَ', okunusu: 'Hamele', anlami: 'Taşıdı' },

      { arapca: 'خَرَجَ', okunusu: 'Harece', anlami: 'Çıktı' },

      { arapca: 'دَخَلَ', okunusu: 'Dehale', anlami: 'Girdi' },

      { arapca: 'رَفَعَ', okunusu: 'Refae', anlami: 'Yükseltti' },

      { arapca: 'سَجَدَ', okunusu: 'Secede', anlami: 'Secde etti' },

      { arapca: 'صَدَقَ', okunusu: 'Sadaka', anlami: 'Doğru söyledi' },

      { arapca: 'طَلَبَ', okunusu: 'Talebe', anlami: 'İstedi' },

      { arapca: 'عَبَدَ', okunusu: 'Ebede', anlami: 'İbadet etti' },

    ]

  },



  // ================ 5. KONU - ESRE (KESRA) TANITIMI ================

  {

    id: 5,

    sayfaNo: 14,

    konuNo: 5,

    baslik: 'Esre (Kesra) — Harfler',

    altBaslik: 'Harflerin Altına Konan Yan Çizgi (ِ)',

    tip: 'harekeler',

    aciklama: 'Esre (Kesra), harfin altına çekilen eğik çizgidir (ِ). İnce harfleri "i", kalın harfleri ise "ı-i" arası bir sesle okutur.',

    harekeliBilesikler: [

      { harf: 'ا', hareke: 'esre', bilesik: 'اِ', okunusu: 'İ' },

      { harf: 'ب', hareke: 'esre', bilesik: 'بِ', okunusu: 'Bi' },

      { harf: 'ت', hareke: 'esre', bilesik: 'تِ', okunusu: 'Ti' },

      { harf: 'ث', hareke: 'esre', bilesik: 'ثِ', okunusu: 'Si (peltek)' },

      { harf: 'ج', hareke: 'esre', bilesik: 'جِ', okunusu: 'Ci' },

      { harf: 'ح', hareke: 'esre', bilesik: 'حِ', okunusu: 'Hi (boğaz)' },

      { harf: 'خ', hareke: 'esre', bilesik: 'خِ', okunusu: 'Hı (kalın)' },

      { harf: 'د', hareke: 'esre', bilesik: 'دِ', okunusu: 'Di' },

      { harf: 'ذ', hareke: 'esre', bilesik: 'ذِ', okunusu: 'Zi (peltek)' },

      { harf: 'ر', hareke: 'esre', bilesik: 'رِ', okunusu: 'Ri' },

      { harf: 'ز', hareke: 'esre', bilesik: 'زِ', okunusu: 'Zi' },

      { harf: 'س', hareke: 'esre', bilesik: 'سِ', okunusu: 'Si' },

      { harf: 'ش', hareke: 'esre', bilesik: 'شِ', okunusu: 'Şi' },

      { harf: 'ص', hareke: 'esre', bilesik: 'صِ', okunusu: 'Sı (kalın)' },

      { harf: 'ض', hareke: 'esre', bilesik: 'ضِ', okunusu: 'Dı (kalın)' },

      { harf: 'ط', hareke: 'esre', bilesik: 'طِ', okunusu: 'Tı (kalın)' },

      { harf: 'ظ', hareke: 'esre', bilesik: 'ظِ', okunusu: 'Zı (kalın/peltek)' },

      { harf: 'ع', hareke: 'esre', bilesik: 'عِ', okunusu: 'İ (boğaz)' },

      { harf: 'غ', hareke: 'esre', bilesik: 'غِ', okunusu: 'Ğı (kalın)' },

      { harf: 'ف', hareke: 'esre', bilesik: 'فِ', okunusu: 'Fi' },

      { harf: 'ق', hareke: 'esre', bilesik: 'قِ', okunusu: 'Kı (kalın)' },

      { harf: 'ك', hareke: 'esre', bilesik: 'كِ', okunusu: 'Ki' },

      { harf: 'ل', hareke: 'esre', bilesik: 'لِ', okunusu: 'Li' },

      { harf: 'م', hareke: 'esre', bilesik: 'مِ', okunusu: 'Mi' },

      { harf: 'ن', hareke: 'esre', bilesik: 'نِ', okunusu: 'Ni' },

      { harf: 'و', hareke: 'esre', bilesik: 'وِ', okunusu: 'Vi' },

      { harf: 'ه', hareke: 'esre', bilesik: 'هِ', okunusu: 'Hi' },

      { harf: 'ي', hareke: 'esre', bilesik: 'يِ', okunusu: 'Yi' },

    ]

  },



  // ================ 6. KONU - ESRE (KESRA) KELİME ALIŞTIRMALARI ================

  {

    id: 6,

    sayfaNo: 15,

    konuNo: 6,

    baslik: 'Esre (Kesra) — Kelimeler',

    altBaslik: 'Üstün ve Esre Harekeli Kelime Örnekleri',

    tip: 'alistirma',

    aciklama: 'Esre harekesini pekiştirmek için hazırlanmış kelime listesi. Harflerin altındaki esrelere dikkat ediniz.',

    alistirmaKelimeleri: [

      { arapca: 'عَلِمَ', okunusu: 'Alime', anlami: 'Bildi' },

      { arapca: 'سَمِعَ', okunusu: 'Semi\'a', anlami: 'İşitti' },

      { arapca: 'حَمِدَ', okunusu: 'Hamide', anlami: 'Hamd etti' },

      { arapca: 'رَحِمَ', okunusu: 'Rahime', anlami: 'Merhamet etti' },

      { arapca: 'غَفَرَ', okunusu: 'Ğafere', anlami: 'Bağışladı' },

      { arapca: 'شَرِبَ', okunusu: 'Şeribe', anlami: 'İçti' },

      { arapca: 'فَهِمَ', okunusu: 'Fehime', anlami: 'Anladı' },

      { arapca: 'عَمِلَ', okunusu: 'Emile', anlami: 'Çalıştı / İş yaptı' },

      { arapca: 'خَسِرَ', okunusu: 'Hasire', anlami: 'Kaybetti' },

      { arapca: 'لَعِبَ', okunusu: 'Leibe', anlami: 'Oynadı' },

      { arapca: 'رَكِبَ', okunusu: 'Rekibe', anlami: 'Bindi' },

      { arapca: 'حَفِظَ', okunusu: 'Hafıza', anlami: 'Korudu / Ezberledi' },

      { arapca: 'بَقِيَ', okunusu: 'Bakiye', anlami: 'Kaldı / Baki oldu' },

      { arapca: 'سَلِمَ', okunusu: 'Selime', anlami: 'Esen oldu' },

      { arapca: 'شَهِدَ', okunusu: 'Şehide', anlami: 'Şahit oldu' },

      { arapca: 'غَضِبَ', okunusu: 'Ğadibe', anlami: 'Kızdı' },

      { arapca: 'تَبِعَ', okunusu: 'Tebia', anlami: 'Tabi oldu / İzledi' },

      { arapca: 'رَضِيَ', okunusu: 'Radiye', anlami: 'Razı oldu' },

      { arapca: 'وَرِثَ', okunusu: 'Verise', anlami: 'Varis oldu' },

      { arapca: 'كَرِهَ', okunusu: 'Kerihe', anlami: 'Hoşlanmadı' },

    ]

  },



  // ================ 7. KONU - ÖTRE (DAMMA) TANITIMI ================

  {

    id: 7,

    sayfaNo: 16,

    konuNo: 7,

    baslik: 'Ötre (Damma) — Harfler',

    altBaslik: 'Harflerin Üstüne Konan Virgül İşareti (ُ)',

    tip: 'harekeler',

    aciklama: 'Ötre (Damma), harfin üstüne çekilen küçük fiyonk/virgül işaretidir (ُ). İnce harfleri "u-ü" arası, kalın harfleri "u" sesiyle okutur.',

    harekeliBilesikler: [

      { harf: 'ا', hareke: 'ötre', bilesik: 'اُ', okunusu: 'U' },

      { harf: 'ب', hareke: 'ötre', bilesik: 'بُ', okunusu: 'Bu' },

      { harf: 'ت', hareke: 'ötre', bilesik: 'تُ', okunusu: 'Tu' },

      { harf: 'ث', hareke: 'ötre', bilesik: 'ثُ', okunusu: 'Su (peltek)' },

      { harf: 'ج', hareke: 'ötre', bilesik: 'جُ', okunusu: 'Cu' },

      { harf: 'ح', hareke: 'ötre', bilesik: 'حُ', okunusu: 'Hu (boğaz)' },

      { harf: 'خ', hareke: 'ötre', bilesik: 'خُ', okunusu: 'Hu (kalın)' },

      { harf: 'د', hareke: 'ötre', bilesik: 'دُ', okunusu: 'Du' },

      { harf: 'ذ', hareke: 'ötre', bilesik: 'ذُ', okunusu: 'Zu (peltek)' },

      { harf: 'ر', hareke: 'ötre', bilesik: 'رُ', okunusu: 'Ru (kalın)' },

      { harf: 'ز', hareke: 'ötre', bilesik: 'زُ', okunusu: 'Zu' },

      { harf: 'س', hareke: 'ötre', bilesik: 'سُ', okunusu: 'Su' },

      { harf: 'ش', hareke: 'ötre', bilesik: 'شُ', okunusu: 'Şu' },

      { harf: 'ص', hareke: 'ötre', bilesik: 'صُ', okunusu: 'Su (kalın)' },

      { harf: 'ض', hareke: 'ötre', bilesik: 'ضَ', okunusu: 'Du (kalın)' },

      { harf: 'ط', hareke: 'ötre', bilesik: 'طُ', okunusu: 'Tu (kalın)' },

      { harf: 'ظ', hareke: 'ötre', bilesik: 'ظُ', okunusu: 'Zu (kalın/peltek)' },

      { harf: 'ع', hareke: 'ötre', bilesik: 'عُ', okunusu: 'U (boğaz)' },

      { harf: 'غ', hareke: 'ötre', bilesik: 'غُ', okunusu: 'Ğu (kalın)' },

      { harf: 'ف', hareke: 'ötre', bilesik: 'فُ', okunusu: 'Fu' },

      { harf: 'ق', hareke: 'ötre', bilesik: 'قُ', okunusu: 'Ku (kalın)' },

      { harf: 'ك', hareke: 'ötre', bilesik: 'كُ', okunusu: 'Ku' },

      { harf: 'ل', hareke: 'ötre', bilesik: 'لُ', okunusu: 'Lu' },

      { harf: 'م', hareke: 'ötre', bilesik: 'مُ', okunusu: 'Mu' },

      { harf: 'ن', hareke: 'ötre', bilesik: 'نُ', okunusu: 'Nu' },

      { harf: 'و', hareke: 'ötre', bilesik: 'وُ', okunusu: 'Vu' },

      { harf: 'ه', hareke: 'ötre', bilesik: 'هُ', okunusu: 'Hu' },

      { harf: 'ي', hareke: 'ötre', bilesik: 'يُ', okunusu: 'Yu' },

    ]

  },



  // ================ 8. KONU - ÖTRE (DAMMA) KELİME ALIŞTIRMALARI ================

  {

    id: 8,

    sayfaNo: 17,

    konuNo: 8,

    baslik: 'Ötre (Damma) — Kelimeler',

    altBaslik: 'Üç Temel Harekeli Karma Kelime Örnekleri',

    tip: 'alistirma',

    aciklama: 'Üstün, Esre ve Ötre harekesinin üçünü birden içeren karma kelime okuma pratikleri.',

    alistirmaKelimeleri: [

      { arapca: 'كُتِبَ', okunusu: 'Kutibe', anlami: 'Yazıldı (edilgen)' },

      { arapca: 'خُلِقَ', okunusu: 'Hulika', anlami: 'Yaratıldı' },

      { arapca: 'رُزِقَ', okunusu: 'Ruzika', anlami: 'Rızıklandırıldı' },

      { arapca: 'سُئِلَ', okunusu: 'Suile', anlami: 'Soruldu' },

      { arapca: 'بُعِثَ', okunusu: 'Buise', anlami: 'Gönderildi' },

      { arapca: 'حُشِرَ', okunusu: 'Huşire', anlami: 'Toplandı' },

      { arapca: 'كُرِمَ', okunusu: 'Kurime', anlami: 'İkram edildi' },

      { arapca: 'وُجِدَ', okunusu: 'Vucide', anlami: 'Bulundu' },

      { arapca: 'صُنِعَ', okunusu: 'Sunia', anlami: 'Yapıldı' },

      { arapca: 'فُتِحَ', okunusu: 'Futika', anlami: 'Açıldı' },

      { arapca: 'عُرِفَ', okunusu: 'Urife', anlami: 'Bilindi' },

      { arapca: 'جُمِعَ', okunusu: 'Cumia', anlami: 'Bir araya getirildi' },

      { arapca: 'هُدِيَ', okunusu: 'Hudiye', anlami: 'Hidayete erdirildi' },

      { arapca: 'وُعِدَ', okunusu: 'Vucide', anlami: 'Vaad edildi' },

      { arapca: 'نُصِرَ', okunusu: 'Nusira', anlami: 'Yardım olundu' },

      { arapca: 'خُذِقَ', okunusu: 'Huzika', anlami: 'Tadıldı' },

      { arapca: 'تُلِيَ', okunusu: 'Tuliye', anlami: 'Okundu' },

      { arapca: 'قُرِئَ', okunusu: 'Kurie', anlami: 'Okundu' },

      { arapca: 'حُمِلَ', okunusu: 'Humile', anlami: 'Taşındı' },

      { arapca: 'ذُبِحَ', okunusu: 'Zubiha', anlami: 'Kurban edildi' },

    ]

  },



  // ================ 9. KONU - CEZM (SÜKÛN) TANITIMI ================

  {

    id: 9,

    sayfaNo: 18,

    konuNo: 9,

    baslik: 'Cezm (Sükûn) — Harfler',

    altBaslik: 'Harflerin Üstüne Konan Küçük Yuvarlak (ْ)',

    tip: 'cezm',

    aciklama: 'Cezm (Sükûn), harfi harekesiz okutur (ْ). Kendinden önceki harekeli harfle birleştirerek hece oluşturur.',

    harekeliBilesikler: [

      { harf: 'ا', hareke: 'cezm', bilesik: 'اَبْ', okunusu: 'Eb' },

      { harf: 'ب', hareke: 'cezm', bilesik: 'اَتْ', okunusu: 'Et' },

      { harf: 'ت', hareke: 'cezm', bilesik: 'اَثْ', okunusu: 'Es (peltek)' },

      { harf: 'ث', hareke: 'cezm', bilesik: 'اَجْ', okunusu: 'Ec' },

      { harf: 'ج', hareke: 'cezm', bilesik: 'اَحْ', okunusu: 'Eh (boğaz)' },

      { harf: 'ح', hareke: 'cezm', bilesik: 'اَخْ', okunusu: 'Eh (kalın)' },

      { harf: 'خ', hareke: 'cezm', bilesik: 'اَدْ', okunusu: 'Ed' },

      { harf: 'د', hareke: 'cezm', bilesik: 'اَذْ', okunusu: 'Ez (peltek)' },

      { harf: 'ذ', hareke: 'cezm', bilesik: 'اَرْ', okunusu: 'Er' },

      { harf: 'ر', hareke: 'cezm', bilesik: 'اَزْ', okunusu: 'Ez' },

      { harf: 'ز', hareke: 'cezm', bilesik: 'اَسْ', okunusu: 'Es' },

      { harf: 'ش', hareke: 'cezm', bilesik: 'اَشْ', okunusu: 'Eş' },

      { harf: 'ش', hareke: 'cezm', bilesik: 'اَصْ', okunusu: 'As (kalın)' },

      { harf: 'ص', hareke: 'cezm', bilesik: 'اَضْ', okunusu: 'Ad (kalın)' },

      { harf: 'ض', hareke: 'cezm', bilesik: 'اَطْ', okunusu: 'At (kalın)' },

      { harf: 'ط', hareke: 'cezm', bilesik: 'اَظْ', okunusu: 'Az (kalın/peltek)' },

      { harf: 'ظ', hareke: 'cezm', bilesik: 'اَعْ', okunusu: 'E\' (boğaz)' },

      { harf: 'ع', hareke: 'cezm', bilesik: 'اَغْ', okunusu: 'Eğ' },

      { harf: 'غ', hareke: 'cezm', bilesik: 'اَفْ', okunusu: 'Ef' },

      { harf: 'ف', hareke: 'cezm', bilesik: 'اَقْ', okunusu: 'Ak (kalın)' },

      { harf: 'ق', hareke: 'cezm', bilesik: 'اَكْ', okunusu: 'Ek' },

      { harf: 'ك', hareke: 'cezm', bilesik: 'اَلْ', okunusu: 'El' },

      { harf: 'ل', hareke: 'cezm', bilesik: 'اَمْ', okunusu: 'Em' },

      { harf: 'م', hareke: 'cezm', bilesik: 'اَنْ', okunusu: 'En' },

      { harf: 'ن', hareke: 'cezm', bilesik: 'اَوْ', okunusu: 'Ev' },

      { harf: 'و', hareke: 'cezm', bilesik: 'اَهْ', okunusu: 'Eh' },

      { harf: 'ه', hareke: 'cezm', bilesik: 'اَيْ', okunusu: 'Ey' },

      { harf: 'ي', hareke: 'cezm', bilesik: 'اِتْ', okunusu: 'İt' },

    ]

  },



  // ================ 10. KONU - CEZM (SÜKÛN) KELİME ALIŞTIRMALARI ================

  {

    id: 10,

    sayfaNo: 19,

    konuNo: 10,

    baslik: 'Cezm (Sükûn) — Kelimeler',

    altBaslik: 'Cezm ve Sükûnlu Kelime Alıştırmaları',

    tip: 'alistirma',

    aciklama: 'Cezm kuralının kelimeler üzerinde uygulanması. Sessiz harfleri önündeki harfe bağlayarak okuyun.',

    alistirmaKelimeleri: [

      { arapca: 'يَعْلَمُ', okunusu: 'Ya\'lemu', anlami: 'Bilir' },

      { arapca: 'يَكْتُبُ', okunusu: 'Yektubu', anlami: 'Yazar' },

      { arapca: 'اَلْحَمْدُ', okunusu: 'El-hamdu', anlami: 'Hamd' },

      { arapca: 'مِنْ', okunusu: 'Min', anlami: '-den, -dan' },

      { arapca: 'عَنْ', okunusu: 'An', anlami: '-den, hakkında' },

      { arapca: 'قَدْ', okunusu: 'Kad', anlami: 'Gerçekten, şüphesiz' },

      { arapca: 'بَلْ', okunusu: 'Bel', anlami: 'Bilakis' },

      { arapca: 'لَمْ', okunusu: 'Lem', anlami: 'Olumsuzluk eki' },

      { arapca: 'هَلْ', okunusu: 'Hel', anlami: 'Soru eki (-mı/-mi)' },

      { arapca: 'اِذْ', okunusu: 'İz', anlami: 'Hani, o zaman' },

      { arapca: 'كَمْ', okunusu: 'Kem', anlami: 'Kaç / Nice' },

      { arapca: 'كَيْفَ', okunusu: 'Keyfe', anlami: 'Nasıl?' },

      { arapca: 'لَيْسَ', okunusu: 'Leyse', anlami: 'Değildir' },

      { arapca: 'قَبْلُ', okunusu: 'Kablu', anlami: 'Önce' },

      { arapca: 'بَعْدُ', okunusu: 'Badu', anlami: 'Sonra' },

      { arapca: 'تَحْتُ', okunusu: 'Tahtu', anlami: 'Altında' },

      { arapca: 'فَوْقُ', okunusu: 'Fevku', anlami: 'Üstünde' },

      { arapca: 'شَمْسٌ', okunusu: 'Şemsun', anlami: 'Güneş' },

      { arapca: 'قَمَرٌ', okunusu: 'Kamerun', anlami: 'Ay' },

      { arapca: 'خَيْرٌ', okunusu: 'Hayrun', anlami: 'Hayırlı' },

    ]

  },



  // ================ 11. KONU - ŞEDDE TANITIMI ================

  {

    id: 11,

    sayfaNo: 20,

    konuNo: 11,

    baslik: 'Şedde — Harfler',

    altBaslik: 'Harfin Çift Okunmasını Sağlayan İşaret (ّ)',

    tip: 'sedde',

    aciklama: 'Şedde (ّ), harfin üstüne konur. O harfi birincisi sessiz, ikincisi harekeli olmak üzere iki kez okutur.',

    harekeliBilesikler: [

      { harf: 'ب', hareke: 'şedde-üstün', bilesik: 'اَبَّ', okunusu: 'Ebbe' },

      { harf: 'ت', hareke: 'şedde-üstün', bilesik: 'اَتَّ', okunusu: 'Ette' },

      { harf: 'ث', hareke: 'şedde-üstün', bilesik: 'اَثَّ', okunusu: 'Esse (peltek)' },

      { harf: 'ج', hareke: 'şedde-üstün', bilesik: 'اَجَّ', okunusu: 'Ecce' },

      { harf: 'ح', hareke: 'şedde-üstün', bilesik: 'اَحَّ', okunusu: 'Ehha' },

      { harf: 'خ', hareke: 'şedde-üstün', bilesik: 'اَخَّ', okunusu: 'Ehha (kalın)' },

      { harf: 'د', hareke: 'şedde-üstün', bilesik: 'اَدَّ', okunusu: 'Edde' },

      { harf: 'ذ', hareke: 'şedde-üstün', bilesik: 'اَذَّ', okunusu: 'Ezze' },

      { harf: 'ر', hareke: 'şedde-üstün', bilesik: 'اَرَّ', okunusu: 'Erre' },

      { harf: 'ز', hareke: 'şedde-üstün', bilesik: 'اَزَّ', okunusu: 'Ezze' },

      { harf: 'س', hareke: 'şedde-üstün', bilesik: 'اَسَّ', okunusu: 'Esse' },

      { harf: 'ش', hareke: 'şedde-üstün', bilesik: 'اَشَّ', okunusu: 'Eşşe' },

      { harf: 'ص', hareke: 'şedde-üstün', bilesik: 'اَصَّ', okunusu: 'Assa' },

      { harf: 'ض', hareke: 'şedde-üstün', bilesik: 'اَضَّ', okunusu: 'Adda' },

      { harf: 'ط', hareke: 'şedde-üstün', bilesik: 'اَطَّ', okunusu: 'Atta' },

      { harf: 'ظ', hareke: 'şedde-üstün', bilesik: 'اَظَّ', okunusu: 'Azza' },

      { harf: 'ع', hareke: 'şedde-üstün', bilesik: 'اَعَّ', okunusu: 'E\'\'a' },

      { harf: 'غ', hareke: 'şedde-üstün', bilesik: 'اَغَّ', okunusu: 'Eğğa' },

      { harf: 'ف', hareke: 'şedde-üstün', bilesik: 'اَفَّ', okunusu: 'Effe' },

      { harf: 'ق', hareke: 'şedde-üstün', bilesik: 'اَقَّ', okunusu: 'Akka' },

      { harf: 'ك', hareke: 'şedde-üstün', bilesik: 'اَكَّ', okunusu: 'Ekke' },

      { harf: 'ل', hareke: 'şedde-üstün', bilesik: 'اَلَّ', okunusu: 'Elle' },

      { harf: 'م', hareke: 'şedde-üstün', bilesik: 'اَمَّ', okunusu: 'Emme' },

      { harf: 'ن', hareke: 'şedde-üstün', bilesik: 'اَنَّ', okunusu: 'Enne' },

      { harf: 'و', hareke: 'şedde-üstün', bilesik: 'اَوَّ', okunusu: 'Evve' },

      { harf: 'ه', hareke: 'şedde-üstün', bilesik: 'اَهَّ', okunusu: 'Ehhe' },

      { harf: 'ي', hareke: 'şedde-üstün', bilesik: 'اَيَّ', okunusu: 'Eyye' },

    ]

  },



  // ================ 12. KONU - ŞEDDE KELİME ALIŞTIRMALARI ================

  {

    id: 12,

    sayfaNo: 21,

    konuNo: 12,

    baslik: 'Şedde — Kelimeler',

    altBaslik: 'Şeddeli Kelime Alıştırmaları',

    tip: 'alistirma',

    aciklama: 'Kur’an okumaya hazırlık olarak şeddeli kelimelerin seslendirilmesi pratikleri.',

    alistirmaKelimeleri: [

      { arapca: 'اِنَّ', okunusu: 'İnne', anlami: 'Şüphesiz' },

      { arapca: 'ثُمَّ', okunusu: 'Summe', anlami: 'Sonra' },

      { arapca: 'رَبَّنَا', okunusu: 'Rabbenâ', anlami: 'Rabbimiz' },

      { arapca: 'حَقٌّ', okunusu: 'Hakkun', anlami: 'Hak / Doğru' },

      { arapca: 'كُلٌّ', okunusu: 'Kullun', anlami: 'Hepsi / Her biri' },

      { arapca: 'عَدُوٌّ', okunusu: 'Aduvvun', anlami: 'Düşman' },

      { arapca: 'مُحَمَّدٌ', okunusu: 'Muhammedun', anlami: 'Muhammed' },

      { arapca: 'جَنَّةٌ', okunusu: 'Cennetun', anlami: 'Cennet / Bahçe' },

      { arapca: 'صَلّٰى', okunusu: 'Sallâ', anlami: 'Salat etti' },

      { arapca: 'جَهَنَّمَ', okunusu: 'Cehenneme', anlami: 'Cehennem' },

      { arapca: 'سَخَّرَ', okunusu: 'Sahhara', anlami: 'Boyun eğdirdi' },

      { arapca: 'كَدَّبَ', okunusu: 'Keddebe', anlami: 'Yalanladı' },

      { arapca: 'سَبَّحَ', okunusu: 'Sebbeha', anlami: 'Tesbih etti' },

      { arapca: 'قُوَّةٌ', okunusu: 'Kuvvetun', anlami: 'Güç / Kuvvet' },

      { arapca: 'فَضَّلَ', okunusu: 'Faddala', anlami: 'Üstün kıldı' },

      { arapca: 'نَزَّلَ', okunusu: 'Nezzele', anlami: 'İndirdi' },

      { arapca: 'يَظُنُّ', okunusu: 'Yazunnu', anlami: 'Sanır / Zanneder' },

      { arapca: 'قَدَّرَ', okunusu: 'Kaddere', anlami: 'Takdir etti' },

      { arapca: 'يَمُدُّ', okunusu: 'Yemuddu', anlami: 'Uzatır / Yardım eder' },

      { arapca: 'مَسَّ', okunusu: 'Messe', anlami: 'Dokundu' },

    ]

  },



  // ================ 13. KONU - MED ELİF TANITIMI ================

  {

    id: 13,

    sayfaNo: 22,

    konuNo: 13,

    baslik: 'Med (Elif) — Harfler',

    altBaslik: 'Elif Harfi ile Sesi Uzatma (َا)',

    tip: 'med_harfleri',

    aciklama: 'Harekeli bir harften sonra gelen harekesiz Elif (ا) harfi, kendinden önceki harfin üstün sesini uzatarak okutur (â).',

    harekeliBilesikler: [

      { harf: 'ب', hareke: 'med-elif', bilesik: 'بَا', okunusu: 'Bâ' },

      { harf: 'ت', hareke: 'med-elif', bilesik: 'تَا', okunusu: 'Tâ' },

      { harf: 'ث', hareke: 'med-elif', bilesik: 'ثَا', okunusu: 'Sâ' },

      { harf: 'ج', hareke: 'med-elif', bilesik: 'جَا', okunusu: 'Câ' },

      { harf: 'ح', hareke: 'med-elif', bilesik: 'حَا', okunusu: 'Hâ' },

      { harf: 'خ', hareke: 'med-elif', bilesik: 'خَا', okunusu: 'Hâ' },

      { harf: 'د', hareke: 'med-elif', bilesik: 'دَا', okunusu: 'Dâ' },

      { harf: 'ذ', hareke: 'med-elif', bilesik: 'ذَا', okunusu: 'Zâ' },

      { harf: 'ر', hareke: 'med-elif', bilesik: 'رَا', okunusu: 'Râ' },

      { harf: 'ز', hareke: 'med-elif', bilesik: 'زَا', okunusu: 'Zâ' },

      { harf: 'س', hareke: 'med-elif', bilesik: 'سَا', okunusu: 'Sâ' },

      { harf: 'ش', hareke: 'med-elif', bilesik: 'شَا', okunusu: 'Şâ' },

      { harf: 'ص', hareke: 'med-elif', bilesik: 'صَا', okunusu: 'Sâ' },

      { harf: 'ض', hareke: 'med-elif', bilesik: 'ضَا', okunusu: 'Dâ' },

      { harf: 'ط', hareke: 'med-elif', bilesik: 'طَا', okunusu: 'Tâ' },

      { harf: 'ظ', hareke: 'med-elif', bilesik: 'ظَا', okunusu: 'Zâ' },

      { harf: 'ع', hareke: 'med-elif', bilesik: 'عَا', okunusu: 'Â' },

      { harf: 'غ', hareke: 'med-elif', bilesik: 'غَا', okunusu: 'Ğâ' },

      { harf: 'ف', hareke: 'med-elif', bilesik: 'فَا', okunusu: 'Fâ' },

      { harf: 'ق', hareke: 'med-elif', bilesik: 'قَا', okunusu: 'Kâ' },

      { harf: 'ك', hareke: 'med-elif', bilesik: 'كَا', okunusu: 'Kâ' },

      { harf: 'ل', hareke: 'med-elif', bilesik: 'لَا', okunusu: 'Lâ' },

      { harf: 'م', hareke: 'med-elif', bilesik: 'مَا', okunusu: 'Mâ' },

      { harf: 'ن', hareke: 'med-elif', bilesik: 'نَا', okunusu: 'Nâ' },

      { harf: 'و', hareke: 'med-elif', bilesik: 'وَا', okunusu: 'Vâ' },

      { harf: 'ه', hareke: 'med-elif', bilesik: 'هَا', okunusu: 'Hâ' },

      { harf: 'ي', hareke: 'med-elif', bilesik: 'يَا', okunusu: 'Yâ' },

    ]

  },



  // ================ 14. KONU - MED ELİF KELİME ALIŞTIRMALARI ================

  {

    id: 14,

    sayfaNo: 23,

    konuNo: 14,

    baslik: 'Med (Elif) — Kelimeler',

    altBaslik: 'Elif Uzatmalı Kelime Alıştırmaları',

    tip: 'alistirma',

    aciklama: 'Elif med harfi ile uzatılarak okunan kelime pratikleri.',

    alistirmaKelimeleri: [

      { arapca: 'قَالَ', okunusu: 'Kâle', anlami: 'Dedi' },

      { arapca: 'كَانَ', okunusu: 'Kâne', anlami: 'Oldu' },

      { arapca: 'صَابِرٌ', okunusu: 'Sâbirun', anlami: 'Sabreden' },

      { arapca: 'شَاكِرٌ', okunusu: 'Şâkirun', anlami: 'Şükreden' },

      { arapca: 'عَالِمٌ', okunusu: 'Âlimun', anlami: 'Bilen / Âlim' },

      { arapca: 'كِتَابٌ', okunusu: 'Kitâbun', anlami: 'Kitap' },

      { arapca: 'سَمَوَاتٌ', okunusu: 'Semevâtun', anlami: 'Gökler' },

      { arapca: 'جِهَادٌ', okunusu: 'Cihâdun', anlami: 'Cihat / Mücadele' },

      { arapca: 'عَذَابٌ', okunusu: 'Azâbun', anlami: 'Azap' },

      { arapca: 'حِسَابٌ', okunusu: 'Hisâbun', anlami: 'Hesap' },

      { arapca: 'صِرَاطٌ', okunusu: 'Sırâtun', anlami: 'Yol' },

      { arapca: 'مَطَارٌ', okunusu: 'Matârun', anlami: 'Havalimanı' },

      { arapca: 'سَلَامٌ', okunusu: 'Selâmun', anlami: 'Selam / Esenlik' },

      { arapca: 'عِبَادٌ', okunusu: 'İbâdun', anlami: 'Kullar' },

      { arapca: 'نَارٌ', okunusu: 'Nârun', anlami: 'Ateş' },

      { arapca: 'مَالٌ', okunusu: 'Mâlun', anlami: 'Mal / Servet' },

    ]

  },



  // ================ 15. KONU - MED VAV TANITIMI ================

  {

    id: 15,

    sayfaNo: 24,

    konuNo: 15,

    baslik: 'Med (Vav) — Harfler',

    altBaslik: 'Vav Harfi ile Sesi Uzatma (ُو)',

    tip: 'med_harfleri',

    aciklama: 'Harekeli bir harften sonra gelen harekesiz Vav (و) harfi, kendinden önceki harfin ötre sesini uzatarak okutur (û).',

    harekeliBilesikler: [

      { harf: 'ب', hareke: 'med-vav', bilesik: 'بُو', okunusu: 'Bû' },

      { harf: 'ت', hareke: 'med-vav', bilesik: 'تُو', okunusu: 'Tû' },

      { harf: 'ث', hareke: 'med-vav', bilesik: 'ثُو', okunusu: 'Sû' },

      { harf: 'ج', hareke: 'med-vav', bilesik: 'جُو', okunusu: 'Cû' },

      { harf: 'ح', hareke: 'med-vav', bilesik: 'حُو', okunusu: 'Hû' },

      { harf: 'خ', hareke: 'med-vav', bilesik: 'خُو', okunusu: 'Hû' },

      { harf: 'د', hareke: 'med-vav', bilesik: 'دُو', okunusu: 'Dû' },

      { harf: 'ذ', hareke: 'med-vav', bilesik: 'ذُو', okunusu: 'Zû' },

      { harf: 'ر', hareke: 'med-vav', bilesik: 'رُو', okunusu: 'Rû' },

      { harf: 'ز', hareke: 'med-vav', bilesik: 'زُو', okunusu: 'Zû' },

      { harf: 'س', hareke: 'med-vav', bilesik: 'سُو', okunusu: 'Sû' },

      { harf: 'ش', hareke: 'med-vav', bilesik: 'شُو', okunusu: 'Şû' },

      { harf: 'ص', hareke: 'med-vav', bilesik: 'صُو', okunusu: 'Sû' },

      { harf: 'ض', hareke: 'med-vav', bilesik: 'ضُو', okunusu: 'Dû' },

      { harf: 'ط', hareke: 'med-vav', bilesik: 'طُو', okunusu: 'Tû' },

      { harf: 'ظ', hareke: 'med-vav', bilesik: 'ظُو', okunusu: 'Zû' },

      { harf: 'ع', hareke: 'med-vav', bilesik: 'عُو', okunusu: 'Û' },

      { harf: 'غ', hareke: 'med-vav', bilesik: 'غُو', okunusu: 'Ğû' },

      { harf: 'ف', hareke: 'med-vav', bilesik: 'فُو', okunusu: 'Fû' },

      { harf: 'ق', hareke: 'med-vav', bilesik: 'قُو', okunusu: 'Kû' },

      { harf: 'ك', hareke: 'med-vav', bilesik: 'كُو', okunusu: 'Kû' },

      { harf: 'ل', hareke: 'med-vav', bilesik: 'لُو', okunusu: 'Lû' },

      { harf: 'م', hareke: 'med-vav', bilesik: 'مُو', okunusu: 'Mû' },

      { harf: 'ن', hareke: 'med-vav', bilesik: 'نُو', okunusu: 'Nû' },

      { harf: 'و', hareke: 'med-vav', bilesik: 'وُو', okunusu: 'Vû' },

      { harf: 'ه', hareke: 'med-vav', bilesik: 'هُو', okunusu: 'Hû' },

      { harf: 'ي', hareke: 'med-vav', bilesik: 'يُو', okunusu: 'Yû' },

    ]

  },



  // ================ 16. KONU - MED VAV KELİME ALIŞTIRMALARI ================

  {

    id: 16,

    sayfaNo: 25,

    konuNo: 16,

    baslik: 'Med (Vav) — Kelimeler',

    altBaslik: 'Vav Uzatmalı Kelime Alıştırmaları',

    tip: 'alistirma',

    aciklama: 'Vav med harfi ile uzatılarak okunan kelime pratikleri.',

    alistirmaKelimeleri: [

      { arapca: 'يَقُولُ', okunusu: 'Yekûlu', anlami: 'Der / Söyler' },

      { arapca: 'تَكُونُ', okunusu: 'Tekûnu', anlami: 'Olursun' },

      { arapca: 'نُورٌ', okunusu: 'Nûrun', anlami: 'Nur / Işık' },

      { arapca: 'تُوبُوا', okunusu: 'Tûbû', anlami: 'Tövbe edin' },

      { arapca: 'قُلُوبٌ', okunusu: 'Kulûbun', anlami: 'Kalpler' },

      { arapca: 'شُكُورٌ', okunusu: 'Şukûrun', anlami: 'Çok şükreden' },

      { arapca: 'رَسُولٌ', okunusu: 'Resûlun', anlami: 'Elçi / Resul' },

      { arapca: 'غَفُورٌ', okunusu: 'Ğafûrun', anlami: 'Çok bağışlayan' },

      { arapca: 'يَمُوتُ', okunusu: 'Yemûtu', anlami: 'Ölür' },

      { arapca: 'يَعُودُ', okunusu: 'Yeûdu', anlami: 'Döner' },

      { arapca: 'صُدُورٌ', okunusu: 'Sudûrun', anlami: 'Göğüsler / Sineler' },

      { arapca: 'نَفُوزُ', okunusu: 'Nefûzu', anlami: 'Kazanırız' },

    ]

  },



  // ================ 17. KONU - MED YÂ TANITIMI ================

  {

    id: 17,

    sayfaNo: 26,

    konuNo: 17,

    baslik: 'Med (Yâ) — Harfler',

    altBaslik: 'Yâ Harfi ile Sesi Uzatma (ِي)',

    tip: 'med_harfleri',

    aciklama: 'Harekeli bir harften sonra gelen harekesiz Yâ (iy) harfi, kendinden önceki harfin esre sesini uzatarak okutur (î).',

    harekeliBilesikler: [

      { harf: 'ب', hareke: 'med-ya', bilesik: 'بِي', okunusu: 'Bî' },

      { harf: 'ت', hareke: 'med-ya', bilesik: 'تِي', okunusu: 'Tî' },

      { harf: 'ث', hareke: 'med-ya', bilesik: 'ثِي', okunusu: 'Sî' },

      { harf: 'ج', hareke: 'med-ya', bilesik: 'جِي', okunusu: 'Cî' },

      { harf: 'ح', hareke: 'med-ya', bilesik: 'حِي', okunusu: 'Hî' },

      { harf: 'خ', hareke: 'med-ya', bilesik: 'خِي', okunusu: 'Hî' },

      { harf: 'د', hareke: 'med-ya', bilesik: 'دِي', okunusu: 'Dî' },

      { harf: 'ذ', hareke: 'med-ya', bilesik: 'ذِي', okunusu: 'Zî' },

      { harf: 'ر', hareke: 'med-ya', bilesik: 'رِي', okunusu: 'Rî' },

      { harf: 'ز', hareke: 'med-ya', bilesik: 'زِي', okunusu: 'Zî' },

      { harf: 'س', hareke: 'med-ya', bilesik: 'سِي', okunusu: 'Sî' },

      { harf: 'ش', hareke: 'med-ya', bilesik: 'شِي', okunusu: 'Şî' },

      { harf: 'ص', hareke: 'med-ya', bilesik: 'صِي', okunusu: 'Sî' },

      { harf: 'ض', hareke: 'med-ya', bilesik: 'ضِي', okunusu: 'Dî' },

      { harf: 'ط', hareke: 'med-ya', bilesik: 'طِي', okunusu: 'Tî' },

      { harf: 'ظ', hareke: 'med-ya', bilesik: 'ظِي', okunusu: 'Zî' },

      { harf: 'ع', hareke: 'med-ya', bilesik: 'عِي', okunusu: 'Î' },

      { harf: 'غ', hareke: 'med-ya', bilesik: 'غِي', okunusu: 'Ğî' },

      { harf: 'ف', hareke: 'med-ya', bilesik: 'فِي', okunusu: 'Fî' },

      { harf: 'ق', hareke: 'med-ya', bilesik: 'قِي', okunusu: 'Kî' },

      { harf: 'ك', hareke: 'med-ya', bilesik: 'كِي', okunusu: 'Kî' },

      { harf: 'ل', hareke: 'med-ya', bilesik: 'لِي', okunusu: 'Lî' },

      { harf: 'م', hareke: 'med-ya', bilesik: 'مِي', okunusu: 'Mî' },

      { harf: 'ن', hareke: 'med-ya', bilesik: 'نِي', okunusu: 'Nî' },

      { harf: 'و', hareke: 'med-ya', bilesik: 'وِي', okunusu: 'Vî' },

      { harf: 'ه', hareke: 'med-ya', bilesik: 'هِي', okunusu: 'Hî' },

      { harf: 'ي', hareke: 'med-ya', bilesik: 'يِي', okunusu: 'Yî' },

    ]

  },



  // ================ 18. KONU - MED YÂ KELİME ALIŞTIRMALARI ================

  {

    id: 18,

    sayfaNo: 27,

    konuNo: 18,

    baslik: 'Med (Yâ) — Kelimeler',

    altBaslik: 'Yâ Uzatmalı Kelime Alıştırmaları',

    tip: 'alistirma',

    aciklama: 'Yâ med harfi ile uzatılarak okunan kelime pratikleri.',

    alistirmaKelimeleri: [

      { arapca: 'كَبيرٌ', okunusu: 'Kebîrun', anlami: 'Büyük' },

      { arapca: 'عَليمٌ', okunusu: 'Alîmun', anlami: 'Her şeyi bilen' },

      { arapca: 'رَحيمٌ', okunusu: 'Rahîmun', anlami: 'Çok merhametli' },

      { arapca: 'سَميعٌ', okunusu: 'Semî\'un', anlami: 'Her şeyi işiten' },

      { arapca: 'فيهَا', okunusu: 'Fîhâ', anlami: 'Onda / Onun içinde' },

      { arapca: 'دينٌ', okunusu: 'Dînun', anlami: 'Din / İnanç' },

      { arapca: 'بَصيرٌ', okunusu: 'Basîrun', anlami: 'Her şeyi gören' },

      { arapca: 'قَديرٌ', okunusu: 'Kadîrun', anlami: 'Her şeye gücü yeten' },

      { arapca: 'كَريمٌ', okunusu: 'Kerîmun', anlami: 'Çok cömert' },

      { arapca: 'حَكيمٌ', okunusu: 'Hakîmun', anlami: 'Hikmet sahibi' },

      { arapca: 'اَمِينٌ', okunusu: 'Emînun', anlami: 'Güvenilir' },

      { arapca: 'سَبيلٌ', okunusu: 'Sebîlun', anlami: 'Yol' },

    ]

  },



  // ================ 19. KONU - İKİ ÜSTÜN TANITIMI ================

  {

    id: 19,

    sayfaNo: 28,

    konuNo: 19,

    baslik: 'İki Üstün — Harfler',

    altBaslik: 'Harflerin Üstüne Konan İki Eğik Çizgi (ً)',

    tip: 'tenvin',

    aciklama: 'İki Üstün (ً), kelimenin sonundaki harfin üzerine konur. İnce harflere "-en", kalın harflere "-an" sesi kazandırır.',

    harekeliBilesikler: [

      { harf: 'ا', hareke: 'iki-üstün', bilesik: 'اً', okunusu: 'En' },

      { harf: 'ب', hareke: 'iki-üstün', bilesik: 'بًا', okunusu: 'Ben' },

      { harf: 'ت', hareke: 'iki-üstün', bilesik: 'تًا', okunusu: 'Ten' },

      { harf: 'ث', hareke: 'iki-üstün', bilesik: 'ثً', okunusu: 'Sen (peltek)' },

      { harf: 'ج', hareke: 'iki-üstün', bilesik: 'جًا', okunusu: 'Cen' },

      { harf: 'ح', hareke: 'iki-üstün', bilesik: 'حً', okunusu: 'Han' },

      { harf: 'خ', hareke: 'iki-üstün', bilesik: 'خً', okunusu: 'Han (kalın)' },

      { harf: 'د', hareke: 'iki-üstün', bilesik: 'دً', okunusu: 'Den' },

      { harf: 'ذ', hareke: 'iki-üstün', bilesik: 'ذً', okunusu: 'Zen (peltek)' },

      { harf: 'ر', hareke: 'iki-üstün', bilesik: 'رً', okunusu: 'Ran' },

      { harf: 'ز', hareke: 'iki-üstün', bilesik: 'زً', okunusu: 'Zen' },

      { harf: 'س', hareke: 'iki-üstün', bilesik: 'سً', okunusu: 'Sen' },

      { harf: 'ش', hareke: 'iki-üstün', bilesik: 'شً', okunusu: 'Şen' },

      { harf: 'ص', hareke: 'iki-üstün', bilesik: 'صً', okunusu: 'San (kalın)' },

      { harf: 'ض', hareke: 'iki-üstün', bilesik: 'ضً', okunusu: 'Dan (kalın)' },

      { harf: 'ط', hareke: 'iki-üstün', bilesik: 'طً', okunusu: 'Tan (kalın)' },

      { harf: 'ظ', hareke: 'iki-üstün', bilesik: 'ظً', okunusu: 'Zan (kalın/peltek)' },

      { harf: 'ع', hareke: 'iki-üstün', bilesik: 'عً', okunusu: 'An' },

      { harf: 'غ', hareke: 'iki-üstün', bilesik: 'غً', okunusu: 'Ğan (kalın)' },

      { harf: 'ف', hareke: 'iki-üstün', bilesik: 'فً', okunusu: 'Fen' },

      { harf: 'ق', hareke: 'iki-üstün', bilesik: 'قً', okunusu: 'Kan (kalın)' },

      { harf: 'ك', hareke: 'iki-üstün', bilesik: 'كً', okunusu: 'Ken' },

      { harf: 'ل', hareke: 'iki-üstün', bilesik: 'لًا', okunusu: 'Len' },

      { harf: 'م', hareke: 'iki-üstün', bilesik: 'مً', okunusu: 'Men' },

      { harf: 'ن', hareke: 'iki-üstün', bilesik: 'نً', okunusu: 'Nen' },

      { harf: 'و', hareke: 'iki-üstün', bilesik: 'وً', okunusu: 'Ven' },

      { harf: 'ه', hareke: 'iki-üstün', bilesik: 'هً', okunusu: 'Hen' },

      { harf: 'ي', hareke: 'iki-üstün', bilesik: 'يً', okunusu: 'Yen' },

    ]

  },



  // ================ 20. KONU - İKİ ÜSTÜN KELİME ALIŞTIRMALARI ================

  {

    id: 20,

    sayfaNo: 29,

    konuNo: 20,

    baslik: 'İki Üstün — Kelimeler',

    altBaslik: 'İki Üstünlü Tenvin Kelime Alıştırmaları',

    tip: 'alistirma',

    aciklama: 'Kelimelerin sonundaki iki üstün (tenvin) işaretlerinin okunuş örnekleri.',

    alistirmaKelimeleri: [

      { arapca: 'كِتَابًا', okunusu: 'Kitâben', anlami: 'Bir kitap' },

      { arapca: 'عِلْمًا', okunusu: 'İlmen', anlami: 'Bir ilim' },

      { arapca: 'نُورًا', okunusu: 'Nûran', anlami: 'Bir ışık' },

      { arapca: 'رَسُولًا', okunusu: 'Resûlen', anlami: 'Bir elçi' },

      { arapca: 'رَحْمَةً', okunusu: 'Rahmeten', anlami: 'Bir rahmet' },

      { arapca: 'حَسَنَةً', okunusu: 'Haseneten', anlami: 'Bir iyilik' },

      { arapca: 'خَيْرًا', okunusu: 'Hayran', anlami: 'Hayırlı bir iş' },

      { arapca: 'عَمَلًا', okunusu: 'Amelen', anlami: 'Bir amel / İş' },

      { arapca: 'عَذَابًا', okunusu: 'Azâben', anlami: 'Bir azap' },

      { arapca: 'سَبيلًا', okunusu: 'Sebîlen', anlami: 'Bir yol' },

      { arapca: 'فَتْحًا', okunusu: 'Fethan', anlami: 'Bir fetih / Açılış' },

      { arapca: 'مَاءً', okunusu: 'Mâen', anlami: 'Bir su' },

    ]

  },



  // ================ 21. KONU - İKİ ESRE TANITIMI ================

  {

    id: 21,

    sayfaNo: 30,

    konuNo: 21,

    baslik: 'İki Esre — Harfler',

    altBaslik: 'Harflerin Altına Konan İki Eğik Çizgi (ٍ)',

    tip: 'tenvin',

    aciklama: 'İki Esre (ٍ), kelimenin sonundaki harfin altına konur. İnce harflere "-in", kalın harflere "-ın-in" arası bir ses kazandırır.',

    harekeliBilesikler: [

      { harf: 'ا', hareke: 'iki-esre', bilesik: 'اٍ', okunusu: 'İn' },

      { harf: 'ب', hareke: 'iki-esre', bilesik: 'بٍ', okunusu: 'Bin' },

      { harf: 'ت', hareke: 'iki-esre', bilesik: 'تٍ', okunusu: 'Tin' },

      { harf: 'ث', hareke: 'iki-esre', bilesik: 'ثٍ', okunusu: 'Sin (peltek)' },

      { harf: 'ج', hareke: 'iki-esre', bilesik: 'جٍ', okunusu: 'Cin' },

      { harf: 'ح', hareke: 'iki-esre', bilesik: 'حٍ', okunusu: 'Hin' },

      { harf: 'خ', hareke: 'iki-esre', bilesik: 'خٍ', okunusu: 'Hın (kalın)' },

      { harf: 'د', hareke: 'iki-esre', bilesik: 'دٍ', okunusu: 'Din' },

      { harf: 'ذ', hareke: 'iki-esre', bilesik: 'ذٍ', okunusu: 'Zin (peltek)' },

      { harf: 'ر', hareke: 'iki-esre', bilesik: 'رٍ', okunusu: 'Rin' },

      { harf: 'ز', hareke: 'iki-esre', bilesik: 'زٍ', okunusu: 'Zin' },

      { harf: 'س', hareke: 'iki-esre', bilesik: 'سٍ', okunusu: 'Sin' },

      { harf: 'ش', hareke: 'iki-esre', bilesik: 'شٍ', okunusu: 'Şin' },

      { harf: 'ص', hareke: 'iki-esre', bilesik: 'صٍ', okunusu: 'Sın (kalın)' },

      { harf: 'ض', hareke: 'iki-esre', bilesik: 'ضٍ', okunusu: 'Dın (kalın)' },

      { harf: 'ط', hareke: 'iki-esre', bilesik: 'طٍ', okunusu: 'Tın (kalın)' },

      { harf: 'ظ', hareke: 'iki-esre', bilesik: 'ظٍ', okunusu: 'Zı (kalın/peltek)' },

      { harf: 'ع', hareke: 'iki-esre', bilesik: 'عٍ', okunusu: 'İn' },

      { harf: 'غ', hareke: 'iki-esre', bilesik: 'غٍ', okunusu: 'Ğın (kalın)' },

      { harf: 'ف', hareke: 'iki-esre', bilesik: 'فٍ', okunusu: 'Fin' },

      { harf: 'ق', hareke: 'iki-esre', bilesik: 'قٍ', okunusu: 'Kın (kalın)' },

      { harf: 'ك', hareke: 'iki-esre', bilesik: 'كٍ', okunusu: 'Kin' },

      { harf: 'ل', hareke: 'iki-esre', bilesik: 'لٍ', okunusu: 'Lin' },

      { harf: 'م', hareke: 'iki-esre', bilesik: 'مٍ', okunusu: 'Min' },

      { harf: 'ن', hareke: 'iki-esre', bilesik: 'نٍ', okunusu: 'Nin' },

      { harf: 'و', hareke: 'iki-esre', bilesik: 'وٍ', okunusu: 'Vin' },

      { harf: 'ه', hareke: 'iki-esre', bilesik: 'هٍ', okunusu: 'Hin' },

      { harf: 'ي', hareke: 'iki-esre', bilesik: 'يٍ', okunusu: 'Yin' },

    ]

  },



  // ================ 22. KONU - İKİ ESRE KELİME ALIŞTIRMALARI ================

  {

    id: 22,

    sayfaNo: 31,

    konuNo: 22,

    baslik: 'İki Esre — Kelimeler',

    altBaslik: 'İki Esreli Tenvin Kelime Alıştırmaları',

    tip: 'alistirma',

    aciklama: 'Kelimelerin sonundaki iki esre (tenvin) işaretlerinin okunuş örnekleri.',

    alistirmaKelimeleri: [

      { arapca: 'كِتَابٍ', okunusu: 'Kitâbin', anlami: 'Bir kitaptan' },

      { arapca: 'بَصيرٍ', okunusu: 'Basîrin', anlami: 'Gören bir kimseden' },

      { arapca: 'سَميعٍ', okunusu: 'Semî\'in', anlami: 'İşiten bir kimseden' },

      { arapca: 'عَذَابٍ', okunusu: 'Azâbin', anlami: 'Bir azaptan' },

      { arapca: 'نُورٍ', okunusu: 'Nûrin', anlami: 'Bir ışıktan' },

      { arapca: 'رَسُولٍ', okunusu: 'Resûlin', anlami: 'Bir elçiden' },

      { arapca: 'رَحْمَةٍ', okunusu: 'Rahmetin', anlami: 'Bir rahmetle' },

      { arapca: 'خَيْرٍ', okunusu: 'Hayrin', anlami: 'Bir hayırdan' },

      { arapca: 'سَبيلٍ', okunusu: 'Sebîlin', anlami: 'Bir yoldan' },

      { arapca: 'قَلْبٍ', okunusu: 'Kalbin', anlami: 'Bir kalpten' },

      { arapca: 'عِلْمٍ', okunusu: 'İlmin', anlami: 'Bir ilimden' },

      { arapca: 'يَوْمٍ', okunusu: 'Yevmin', anlami: 'Bir günden' },

    ]

  },



  // ================ 23. KONU - İKİ ÖTRE TANITIMI ================

  {

    id: 23,

    sayfaNo: 32,

    konuNo: 23,

    baslik: 'İki Ötre — Harfler',

    altBaslik: 'Harflerin Üstüne Konan Çift Ötre (ٌ)',

    tip: 'tenvin',

    aciklama: 'İki Ötre (ٌ), kelimenin sonundaki harfin üstüne konur. İnce harflere "-un-ün", kalın harflere "-un" sesi kazandırır.',

    harekeliBilesikler: [

      { harf: 'ا', hareke: 'iki-ötre', bilesik: 'اٌ', okunusu: 'Un' },

      { harf: 'ب', hareke: 'iki-ötre', bilesik: 'بٌ', okunusu: 'Bun' },

      { harf: 'ت', hareke: 'iki-ötre', bilesik: 'تٌ', okunusu: 'Tun' },

      { harf: 'ث', hareke: 'iki-ötre', bilesik: 'ثٌ', okunusu: 'Sun (peltek)' },

      { harf: 'ج', hareke: 'iki-ötre', bilesik: 'جٌ', okunusu: 'Cun' },

      { harf: 'ح', hareke: 'iki-ötre', bilesik: 'حٌ', okunusu: 'Hun' },

      { harf: 'خ', hareke: 'iki-ötre', bilesik: 'خٌ', okunusu: 'Hun (kalın)' },

      { harf: 'د', hareke: 'iki-ötre', bilesik: 'دٌ', okunusu: 'Dun' },

      { harf: 'ذ', hareke: 'iki-ötre', bilesik: 'ذٌ', okunusu: 'Zun (peltek)' },

      { harf: 'ر', hareke: 'iki-ötre', bilesik: 'رٌ', okunusu: 'Run' },

      { harf: 'ز', hareke: 'iki-ötre', bilesik: 'زٌ', okunusu: 'Zun' },

      { harf: 'س', hareke: 'iki-ötre', bilesik: 'سٌ', okunusu: 'Sun' },

      { harf: 'ش', hareke: 'iki-ötre', bilesik: 'شٌ', okunusu: 'Şun' },

      { harf: 'ص', hareke: 'iki-ötre', bilesik: 'صٌ', okunusu: 'Sun (kalın)' },

      { harf: 'ض', hareke: 'iki-ötre', bilesik: 'ضٌ', okunusu: 'Dun (kalın)' },

      { harf: 'ط', hareke: 'iki-ötre', bilesik: 'طٌ', okunusu: 'Tun (kalın)' },

      { harf: 'ظ', hareke: 'iki-ötre', bilesik: 'ظٌ', okunusu: 'Zun (kalın/peltek)' },

      { harf: 'ع', hareke: 'iki-ötre', bilesik: 'عٌ', okunusu: 'Un' },

      { harf: 'غ', hareke: 'iki-ötre', bilesik: 'غٌ', okunusu: 'Ğun (kalın)' },

      { harf: 'ف', hareke: 'iki-ötre', bilesik: 'فٌ', okunusu: 'Fun' },

      { harf: 'ق', hareke: 'iki-ötre', bilesik: 'قٌ', okunusu: 'Kun (kalın)' },

      { harf: 'ك', hareke: 'iki-ötre', bilesik: 'كٌ', okunusu: 'Kun' },

      { harf: 'ل', hareke: 'iki-ötre', bilesik: 'لٌ', okunusu: 'Lun' },

      { harf: 'م', hareke: 'iki-ötre', bilesik: 'مٌ', okunusu: 'Mun' },

      { harf: 'ن', hareke: 'iki-ötre', bilesik: 'نٌ', okunusu: 'Nun' },

      { harf: 'و', hareke: 'iki-ötre', bilesik: 'وٌ', okunusu: 'Vun' },

      { harf: 'ه', hareke: 'iki-ötre', bilesik: 'هٌ', okunusu: 'Hun' },

      { harf: 'ي', hareke: 'iki-ötre', bilesik: 'يٌ', okunusu: 'Yun' },

    ]

  },



  // ================ 24. KONU - İKİ ÖTRE KELİME ALIŞTIRMALARI ================

  {

    id: 24,

    sayfaNo: 33,

    konuNo: 24,

    baslik: 'İki Ötre — Kelimeler',

    altBaslik: 'İki Ötreli Tenvin Kelime Alıştırmaları',

    tip: 'alistirma',

    aciklama: 'Kelimelerin sonundaki iki ötre (tenvin) işaretlerinin okunuş örnekleri.',

    alistirmaKelimeleri: [

      { arapca: 'رَحيمٌ', okunusu: 'Rahîmun', anlami: 'Çok merhametlidir' },

      { arapca: 'عَليمٌ', okunusu: 'Alîmun', anlami: 'Çok iyi bilendir' },

      { arapca: 'حَكيمٌ', okunusu: 'Hakîmun', anlami: 'Hikmet sahibidir' },

      { arapca: 'قَديرٌ', okunusu: 'Kadîrun', anlami: 'Her şeye gücü yetendir' },

      { arapca: 'سَميعٌ', okunusu: 'Semî\'un', anlami: 'Çok iyi işitendir' },

      { arapca: 'بَصيرٌ', okunusu: 'Basîrun', anlami: 'Çok iyi görendir' },

      { arapca: 'غَفُورٌ', okunusu: 'Ğafûrun', anlami: 'Çok bağışlayandır' },

      { arapca: 'كِتَابٌ', okunusu: 'Kitâbun', anlami: 'Bir kitaptır' },

      { arapca: 'نُورٌ', okunusu: 'Nûrun', anlami: 'Bir ışıktır' },

      { arapca: 'رَسُولٌ', okunusu: 'Resûlun', anlami: 'Bir elçidir' },

      { arapca: 'قَلْبٌ', okunusu: 'Kalbun', anlami: 'Bir kalptir' },

      { arapca: 'يَوْمٌ', okunusu: 'Yevmun', anlami: 'Bir gündür' },

    ]

  },



  // ================ 25. KONU - ASAR, MED VE KASR ================

  {

    id: 25,

    sayfaNo: 34,

    konuNo: 25,

    baslik: 'Asar, Med ve Kasr',

    altBaslik: 'Uzatma ve Kısaltma İşaretleri',

    tip: 'alistirma',

    aciklama: 'Kelimelerin altında veya üstünde yer alan dik uzatma (Asar) ve çekme (Med) işaretlerinin pratikleri.',

    alistirmaKelimeleri: [

      { arapca: 'اٰمَنَ', okunusu: 'Âmene (Asar ile)', anlami: 'İman etti' },

      { arapca: 'هٰذَا', okunusu: 'Hâzâ (Asar ile)', anlami: 'Bu' },

      { arapca: 'ذٰلِكَ', okunusu: 'Zâlike (Asar ile)', anlami: 'Şu / O' },

      { arapca: 'الرَّحْمٰنُ', okunusu: 'Er-Rahmânu', anlami: 'Rahmân' },

      { arapca: 'سَمٰوَاتٌ', okunusu: 'Semevâtun', anlami: 'Gökler' },

      { arapca: 'شَاءَ', okunusu: 'Şâe (Med ile)', anlami: 'Diledi' },

      { arapca: 'جَاءَ', okunusu: 'Câe (Med ile)', anlami: 'Geldi' },

      { arapca: 'اِذَا شَاءَ', okunusu: 'İzâ şâe', anlami: 'Dilediği zaman' },

      { arapca: 'بَلَا', okunusu: 'Belâ', anlami: 'Evet, aksine' },

      { arapca: 'عَلٰى', okunusu: 'Alâ', anlami: 'Üzerine' },

    ]

  },



  // ================ 26. KONU - ZAMİR VE LAFZATULLAH ================
  {
    id: 26,
    sayfaNo: 35,
    konuNo: 26,
    baslik: 'Zamir ve Lafzatullah',
    altBaslik: 'Zamirler ve Allah Lafzının Kalın / İnce Okunuşu',
    tip: 'alistirma',
    aciklama: 'Kur\'an-ı Kerim\'de geçen zamirler ile Allah kelimesinin kalın veya ince okunması kuralı.',
    alistirmaKelimeleri: [
      { arapca: 'هُوَ', okunusu: 'Huve', anlami: 'O (erkek)' },
      { arapca: 'هِيَ', okunusu: 'Hiye', anlami: 'O (kadın)' },
      { arapca: 'هُمْ', okunusu: 'Hum', anlami: 'Onlar' },
      { arapca: 'اَنَا', okunusu: 'Ene', anlami: 'Ben' },
      { arapca: 'قَالَ اللّٰهُ', okunusu: 'KâlALLÂHu (kalın)', anlami: 'Allah buyurdu' },
      { arapca: 'بِسْمِ اللّٰهِ', okunusu: 'BismillÂHi (ince)', anlami: 'Allah\'ın adıyla' },
      { arapca: 'إِلَى اللّٰهِ', okunusu: 'İlALLÂHi (ince)', anlami: 'Allah\'a' },
      { arapca: 'عَبْدُ اللّٰهِ', okunusu: 'AbdULLÂHi (kalın)', anlami: 'Allah\'ın kulu' },
      { arapca: 'عِنْدَ اللّٰهِ', okunusu: 'İndallâhi (kalın)', anlami: 'Allah katında' },
      { arapca: 'رَسُولُ اللّٰهِ', okunusu: 'Rasûlullâhi (kalın)', anlami: 'Allah\'ın elçisi' },
      { arapca: 'مِنَ اللّٰهِ', okunusu: 'Minallâhi (ince)', anlami: 'Allah\'tan' },
      { arapca: 'فِي سَبِيلِ اللّٰهِ', okunusu: 'Fî sebîlillâhi (ince)', anlami: 'Allah yolunda' },
      { arapca: 'كِتَابُ اللّٰهِ', okunusu: 'Kitâbullâhi (kalın)', anlami: 'Allah\'ın kitabı' },
      { arapca: 'نَصْرُ اللّٰهِ', okunusu: 'Nasrullâhi (kalın)', anlami: 'Allah\'ın yardımı' },
      { arapca: 'خَلَقَ اللّٰهُ', okunusu: 'Halakallâhu (kalın)', anlami: 'Allah yarattı' },
      { arapca: 'آيَاتُ اللّٰهِ', okunusu: 'Âyâtullâhi (kalın)', anlami: 'Allah\'ın ayetleri' },
      { arapca: 'عَلَيْهِ', okunusu: 'Aleyhi (zamir)', anlami: 'Onun üzerine' },
      { arapca: 'فِيهِ', okunusu: 'Fîhi (zamir)', anlami: 'Onun içinde' },
      { arapca: 'بِهِ', okunusu: 'Bihî (zamir)', anlami: 'Onunla' }
    ]
  }
];






// ------- YARDIMCI FONKSİYONLAR -------



export const HAREKE_LABELS: Record<string, { isim: string; renk: string; aciklama: string }> = {

  'üstün':      { isim: 'Üstün (Fetha)',   renk: '#10b981', aciklama: 'Harfin üstüne konur, "e/a" sesi verir' },

  'esre':       { isim: 'Esre (Kesra)',     renk: '#3b82f6', aciklama: 'Harfin altına konur, "i" sesi verir' },

  'ötre':       { isim: 'Ötre (Zamme)',     renk: '#8b5cf6', aciklama: 'Harfin üstüne konur, "u/ü" sesi verir' },

  'cezm':       { isim: 'Cezm (Sükûn)',     renk: '#f59e0b', aciklama: 'Harfin üstüne konur, harfi sessiz yapar' },

  'şedde-üstün':{ isim: 'Şedde',           renk: '#ef4444', aciklama: 'Harfi çift/güçlü okutarak üstün sesi verir' },

  'med-elif':   { isim: 'Med (Elif)',       renk: '#14b8a6', aciklama: 'Üstünlü harften sonra elif gelirse â (uzun a) okunur' },

  'med-vav':    { isim: 'Med (Vav)',        renk: '#06b6d4', aciklama: 'Ötreli harften sonra vav gelirse û (uzun u) okunur' },

  'med-ya':     { isim: 'Med (Yâ)',         renk: '#6366f1', aciklama: 'Esreli harften sonra yâ gelirse î (uzun i) okunur' },

  'iki-üstün':  { isim: 'İki Üstün',        renk: '#22c55e', aciklama: 'Kelimenin sonuna "-en" veya "-an" sesi ekler' },

  'iki-esre':   { isim: 'İki Esre',         renk: '#2563eb', aciklama: 'Kelimenin sonuna "-in" veya "-ın" sesi ekler' },

  'iki-ötre':   { isim: 'İki Ötre',         renk: '#7c3aed', aciklama: 'Kelimenin sonuna "-un" veya "-ün" sesi ekler' },

};



export const getTotalPages = (): number => ELIF_BA_PAGES.length;



export const getPageById = (id: number): ElifbaPage | undefined =>

  ELIF_BA_PAGES.find(p => p.id === id);



export const groupByHareke = (bilesikler: HarekeliBilesik[]): Record<string, HarekeliBilesik[]> => {

  return bilesikler.reduce((acc, item) => {

    if (!acc[item.hareke]) {

      acc[item.hareke] = [];

    }

    acc[item.hareke].push(item);

    return acc;

  }, {} as Record<string, HarekeliBilesik[]>);

};

