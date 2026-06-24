// ============================================================
// Diyanet Elif-Ba 2024 - Tam Müfredat Verisi (Sayfa 8-28)
// ============================================================

// ------- TİP TANIMLARI -------

export type ElifbaPageType =
  | 'harfler_tablosu'       // Sayfa 8
  | 'kelime_ici_yazilis'    // Sayfa 9-11
  | 'harekeler'             // Sayfa 12-13
  | 'cezm'                  // Sayfa 14-15
  | 'sedde'                 // Sayfa 16-17
  | 'med_harfleri'          // Sayfa 18-19
  | 'tenvin'                // Sayfa 20-21
  | 'alistirma'             // Sayfa 22-25
  | 'namaz_dualari';        // Sayfa 26-28

export interface HarfFormu {
  basta: string;
  ortada: string;
  sonda: string;
  ornekKelime?: string;
  okunusu?: string;
}

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

  // Sayfa 8: Harf Tablosu
  harfler?: Array<{
    sira: number;
    harf: string;
    isim: string;
    okunusu: string;
  }>;

  // Sayfa 9-11: Kelime İçi Yazılışları
  harfFormlari?: Array<{
    harf: string;
    isim: string;
    basta: string;
    ortada: string;
    sonda: string;
    ornekKelimeler?: AlistirmaKelime[];
  }>;

  // Sayfa 12-21: Harekeler, Cezm, Şedde, Med, Tenvin
  harekeliBilesikler?: HarekeliBilesik[];
  alistirmaKelimeleri?: AlistirmaKelime[];

  // Sayfa 26-28: Namaz Duaları
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
    aciklama: 'Kuran-ı Kerim 28 Arap harfi ile yazılmıştır. Harfler sağdan sola doğru yazılır ve okunur.',
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
    aciklama: 'Arap harfleri kelime içindeki konumlarına göre farklı biçimler alır. Her harfin başta, ortada ve sonda olmak üzere üç ayrı yazılış şekli vardır.',
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
      { harf: 'س', isim: 'Sin',   basta: 'سـ', ortada: 'ـسـ', sonda: 'ـس', ornekKelimeler: [{ arapca: 'سَمِعَ', okunusu: 'Semi\'a' }] },
      { harf: 'ش', isim: 'Şın',   basta: 'شـ', ortada: 'ـشـ', sonda: 'ـش', ornekKelimeler: [{ arapca: 'شَكَرَ', okunusu: 'Şekere' }] },
      { harf: 'ص', isim: 'Sad',   basta: 'صـ', ortada: 'ـصـ', sonda: 'ـص', ornekKelimeler: [{ arapca: 'صَبَرَ', okunusu: 'Sabera' }] },
      { harf: 'ض', isim: 'Dad',   basta: 'ضـ', ortada: 'ـضـ', sonda: 'ـض', ornekKelimeler: [{ arapca: 'ضَرَبَ', okunusu: 'Darebe' }] },
      { harf: 'ط', isim: 'Tı',    basta: 'طـ', ortada: 'ـطـ', sonda: 'ـط', ornekKelimeler: [{ arapca: 'طَلَبَ', okunusu: 'Talebe' }] },
      { harf: 'ظ', isim: 'Zı',    basta: 'ظـ', ortada: 'ـظـ', sonda: 'ـظ', ornekKelimeler: [{ arapca: 'ظَلَمَ', okunusu: 'Zaleme' }] },
      { harf: 'ع', isim: 'Ayn',   basta: 'عـ', ortada: 'ـعـ', sonda: 'ـع', ornekKelimeler: [{ arapca: 'عَلِمَ', okunusu: 'Alime' }] },
      { harf: 'غ', isim: 'Gayn',  basta: 'غـ', ortada: 'ـغـ', sonda: 'ـغ', ornekKelimeler: [{ arapca: 'غَفَرَ', okunusu: 'Ğafere' }] },
      { harf: 'ف', isim: 'Fe',    basta: 'فـ', ortada: 'ـفـ', sonda: 'ـف', ornekKelimeler: [{ arapca: 'فَتَحَ', okunusu: 'Feteha' }] },
      { harf: 'ق', isim: 'Kaf',   basta: 'قـ', ortada: 'ـقـ', sonda: 'ـق', ornekKelimeler: [{ arapca: 'قَرَأَ', okunusu: 'Karae' }] },
      { harf: 'ك', isim: 'Kef',   basta: 'كـ', ortada: 'ـكـ', sonda: 'ـك', ornekKelimeler: [{ arapca: 'كَتَبَ', okunusu: 'Ketebe' }] },
      { harf: 'ل', isim: 'Lam',   basta: 'لـ', ortada: 'ـلـ', sonda: 'ـل', ornekKelimeler: [{ arapca: 'لَعِبَ', okunusu: 'Leibe' }] },
      { harf: 'م', isim: 'Mim',   basta: 'مـ', ortada: 'ـمـ', sonda: 'ـم', ornekKelimeler: [{ arapca: 'مَلَكَ', okunusu: 'Meleke' }] },
      { harf: 'ن', isim: 'Nun',   basta: 'نـ', ortada: 'ـنـ', sonda: 'ـن', ornekKelimeler: [{ arapca: 'نَصَرَ', okunusu: 'Nasara' }] },
      { harf: 'و', isim: 'Vav',   basta: 'و',  ortada: 'ـو', sonda: 'ـو', ornekKelimeler: [{ arapca: 'وَعَدَ', okunusu: 'Veade' }] },
      { harf: 'ه', isim: 'He',    basta: 'هـ', ortada: 'ـهـ', sonda: 'ـه', ornekKelimeler: [{ arapca: 'هَدَى', okunusu: 'Hedâ' }] },
      { harf: 'ي', isim: 'Ye',    basta: 'يـ', ortada: 'ـيـ', sonda: 'ـي', ornekKelimeler: [{ arapca: 'يَعْلَمُ', okunusu: 'Ya\'lemu' }] },
    ]
  },

  // ================ SAYFA 12-13: 3. KONU - HAREKELER ================
  {
    id: 3,
    sayfaNo: '12-13',
    konuNo: 3,
    baslik: 'Harekeler',
    altBaslik: 'Üstün – Esre – Ötre',
    tip: 'harekeler',
    aciklama: 'Harekeler, harflerin nasıl sesletileceğini belirleyen işaretlerdir. Üç temel hareke vardır: Üstün (Fetha) harfin üstüne konur ve "e/a" sesi verir. Esre (Kesra) harfin altına konur ve "i" sesi verir. Ötre (Zamme) harfin üstüne konur ve "u/ü" sesi verir.',
    harekeliBilesikler: [
      // ÜSTÜN (Fetha) - ـَ
      { harf: 'ب', hareke: 'üstün', bilesik: 'بَ', okunusu: 'Be' },
      { harf: 'ت', hareke: 'üstün', bilesik: 'تَ', okunusu: 'Te' },
      { harf: 'ث', hareke: 'üstün', bilesik: 'ثَ', okunusu: 'Se' },
      { harf: 'ج', hareke: 'üstün', bilesik: 'جَ', okunusu: 'Ce' },
      { harf: 'ح', hareke: 'üstün', bilesik: 'حَ', okunusu: 'Ha' },
      { harf: 'خ', hareke: 'üstün', bilesik: 'خَ', okunusu: 'Ha' },
      { harf: 'د', hareke: 'üstün', bilesik: 'دَ', okunusu: 'De' },
      { harf: 'ذ', hareke: 'üstün', bilesik: 'ذَ', okunusu: 'Ze' },
      { harf: 'ر', hareke: 'üstün', bilesik: 'رَ', okunusu: 'Re' },
      { harf: 'ز', hareke: 'üstün', bilesik: 'زَ', okunusu: 'Ze' },
      { harf: 'س', hareke: 'üstün', bilesik: 'سَ', okunusu: 'Se' },
      { harf: 'ش', hareke: 'üstün', bilesik: 'شَ', okunusu: 'Şe' },
      { harf: 'ص', hareke: 'üstün', bilesik: 'صَ', okunusu: 'Sa' },
      { harf: 'ض', hareke: 'üstün', bilesik: 'ضَ', okunusu: 'Da' },
      { harf: 'ط', hareke: 'üstün', bilesik: 'طَ', okunusu: 'Ta' },
      { harf: 'ظ', hareke: 'üstün', bilesik: 'ظَ', okunusu: 'Za' },
      { harf: 'ع', hareke: 'üstün', bilesik: 'عَ', okunusu: 'A' },
      { harf: 'غ', hareke: 'üstün', bilesik: 'غَ', okunusu: 'Ğa' },
      { harf: 'ف', hareke: 'üstün', bilesik: 'فَ', okunusu: 'Fe' },
      { harf: 'ق', hareke: 'üstün', bilesik: 'قَ', okunusu: 'Ka' },
      { harf: 'ك', hareke: 'üstün', bilesik: 'كَ', okunusu: 'Ke' },
      { harf: 'ل', hareke: 'üstün', bilesik: 'لَ', okunusu: 'Le' },
      { harf: 'م', hareke: 'üstün', bilesik: 'مَ', okunusu: 'Me' },
      { harf: 'ن', hareke: 'üstün', bilesik: 'نَ', okunusu: 'Ne' },
      { harf: 'و', hareke: 'üstün', bilesik: 'وَ', okunusu: 'Ve' },
      { harf: 'ه', hareke: 'üstün', bilesik: 'هَ', okunusu: 'He' },
      { harf: 'ي', hareke: 'üstün', bilesik: 'يَ', okunusu: 'Ye' },
      // ESRE (Kesra) - ـِ
      { harf: 'ب', hareke: 'esre', bilesik: 'بِ', okunusu: 'Bi' },
      { harf: 'ت', hareke: 'esre', bilesik: 'تِ', okunusu: 'Ti' },
      { harf: 'ث', hareke: 'esre', bilesik: 'ثِ', okunusu: 'Si' },
      { harf: 'ج', hareke: 'esre', bilesik: 'جِ', okunusu: 'Ci' },
      { harf: 'ح', hareke: 'esre', bilesik: 'حِ', okunusu: 'Hi' },
      { harf: 'خ', hareke: 'esre', bilesik: 'خِ', okunusu: 'Hı' },
      { harf: 'د', hareke: 'esre', bilesik: 'دِ', okunusu: 'Di' },
      { harf: 'ذ', hareke: 'esre', bilesik: 'ذِ', okunusu: 'Zi' },
      { harf: 'ر', hareke: 'esre', bilesik: 'رِ', okunusu: 'Ri' },
      { harf: 'ز', hareke: 'esre', bilesik: 'زِ', okunusu: 'Zi' },
      { harf: 'س', hareke: 'esre', bilesik: 'سِ', okunusu: 'Si' },
      { harf: 'ش', hareke: 'esre', bilesik: 'شِ', okunusu: 'Şi' },
      { harf: 'ص', hareke: 'esre', bilesik: 'صِ', okunusu: 'Sı' },
      { harf: 'ض', hareke: 'esre', bilesik: 'ضِ', okunusu: 'Dı' },
      { harf: 'ط', hareke: 'esre', bilesik: 'طِ', okunusu: 'Tı' },
      { harf: 'ظ', hareke: 'esre', bilesik: 'ظِ', okunusu: 'Zı' },
      { harf: 'ع', hareke: 'esre', bilesik: 'عِ', okunusu: 'İ' },
      { harf: 'غ', hareke: 'esre', bilesik: 'غِ', okunusu: 'Ğı' },
      { harf: 'ف', hareke: 'esre', bilesik: 'فِ', okunusu: 'Fi' },
      { harf: 'ق', hareke: 'esre', bilesik: 'قِ', okunusu: 'Kı' },
      { harf: 'ك', hareke: 'esre', bilesik: 'كِ', okunusu: 'Ki' },
      { harf: 'ل', hareke: 'esre', bilesik: 'لِ', okunusu: 'Li' },
      { harf: 'م', hareke: 'esre', bilesik: 'مِ', okunusu: 'Mi' },
      { harf: 'ن', hareke: 'esre', bilesik: 'نِ', okunusu: 'Ni' },
      { harf: 'و', hareke: 'esre', bilesik: 'وِ', okunusu: 'Vi' },
      { harf: 'ه', hareke: 'esre', bilesik: 'هِ', okunusu: 'Hi' },
      { harf: 'ي', hareke: 'esre', bilesik: 'يِ', okunusu: 'Yi' },
      // ÖTRE (Zamme) - ـُ
      { harf: 'ب', hareke: 'ötre', bilesik: 'بُ', okunusu: 'Bu' },
      { harf: 'ت', hareke: 'ötre', bilesik: 'تُ', okunusu: 'Tu' },
      { harf: 'ث', hareke: 'ötre', bilesik: 'ثُ', okunusu: 'Su' },
      { harf: 'ج', hareke: 'ötre', bilesik: 'جُ', okunusu: 'Cu' },
      { harf: 'ح', hareke: 'ötre', bilesik: 'حُ', okunusu: 'Hu' },
      { harf: 'خ', hareke: 'ötre', bilesik: 'خُ', okunusu: 'Hu' },
      { harf: 'د', hareke: 'ötre', bilesik: 'دُ', okunusu: 'Du' },
      { harf: 'ذ', hareke: 'ötre', bilesik: 'ذُ', okunusu: 'Zu' },
      { harf: 'ر', hareke: 'ötre', bilesik: 'رُ', okunusu: 'Ru' },
      { harf: 'ز', hareke: 'ötre', bilesik: 'زُ', okunusu: 'Zu' },
      { harf: 'س', hareke: 'ötre', bilesik: 'سُ', okunusu: 'Su' },
      { harf: 'ش', hareke: 'ötre', bilesik: 'شُ', okunusu: 'Şu' },
      { harf: 'ص', hareke: 'ötre', bilesik: 'صُ', okunusu: 'Su' },
      { harf: 'ض', hareke: 'ötre', bilesik: 'ضُ', okunusu: 'Du' },
      { harf: 'ط', hareke: 'ötre', bilesik: 'طُ', okunusu: 'Tu' },
      { harf: 'ظ', hareke: 'ötre', bilesik: 'ظُ', okunusu: 'Zu' },
      { harf: 'ع', hareke: 'ötre', bilesik: 'عُ', okunusu: 'U' },
      { harf: 'غ', hareke: 'ötre', bilesik: 'غُ', okunusu: 'Ğu' },
      { harf: 'ف', hareke: 'ötre', bilesik: 'فُ', okunusu: 'Fu' },
      { harf: 'ق', hareke: 'ötre', bilesik: 'قُ', okunusu: 'Ku' },
      { harf: 'ك', hareke: 'ötre', bilesik: 'كُ', okunusu: 'Ku' },
      { harf: 'ل', hareke: 'ötre', bilesik: 'لُ', okunusu: 'Lu' },
      { harf: 'م', hareke: 'ötre', bilesik: 'مُ', okunusu: 'Mu' },
      { harf: 'ن', hareke: 'ötre', bilesik: 'نُ', okunusu: 'Nu' },
      { harf: 'و', hareke: 'ötre', bilesik: 'وُ', okunusu: 'Vu' },
      { harf: 'ه', hareke: 'ötre', bilesik: 'هُ', okunusu: 'Hu' },
      { harf: 'ي', hareke: 'ötre', bilesik: 'يُ', okunusu: 'Yu' },
    ],
    alistirmaKelimeleri: [
      { arapca: 'كَتَبَ', okunusu: 'Ketebe', anlami: 'Yazdı' },
      { arapca: 'ذَهَبَ', okunusu: 'Zehebe', anlami: 'Gitti' },
      { arapca: 'عَلِمَ', okunusu: 'Alime', anlami: 'Bildi' },
      { arapca: 'سَمِعَ', okunusu: 'Semi\'a', anlami: 'İşitti' },
      { arapca: 'حَمِدَ', okunusu: 'Hamide', anlami: 'Hamd etti' },
      { arapca: 'فَتَحَ', okunusu: 'Feteha', anlami: 'Açtı' },
      { arapca: 'نَصَرَ', okunusu: 'Nasara', anlami: 'Yardım etti' },
      { arapca: 'خَلَقَ', okunusu: 'Halaka', anlami: 'Yarattı' },
      { arapca: 'رَحِمَ', okunusu: 'Rahime', anlami: 'Merhamet etti' },
      { arapca: 'شَكَرَ', okunusu: 'Şekere', anlami: 'Şükretti' },
      { arapca: 'غَفَرَ', okunusu: 'Ğafere', anlami: 'Bağışladı' },
      { arapca: 'صَبَرَ', okunusu: 'Sabere', anlami: 'Sabretti' },
    ]
  },

  // ================ SAYFA 14-15: 4. KONU - CEZM (SÜKÛN) ================
  {
    id: 4,
    sayfaNo: '14-15',
    konuNo: 4,
    baslik: 'Cezm (Sükûn)',
    altBaslik: 'Harfi Harekesiz Okumak',
    tip: 'cezm',
    aciklama: 'Cezm (Sükûn), harfin üzerine konulan küçük daire (ْ) işaretidir. Cezmli harf, harekesiz (sessiz) okunur ve kendisinden önceki harfin sesine eklenerek okunur.',
    harekeliBilesikler: [
      { harf: 'ب', hareke: 'cezm', bilesik: 'بْ', okunusu: 'b (sessiz)' },
      { harf: 'ت', hareke: 'cezm', bilesik: 'تْ', okunusu: 't (sessiz)' },
      { harf: 'ث', hareke: 'cezm', bilesik: 'ثْ', okunusu: 's (sessiz)' },
      { harf: 'ج', hareke: 'cezm', bilesik: 'جْ', okunusu: 'c (sessiz)' },
      { harf: 'ح', hareke: 'cezm', bilesik: 'حْ', okunusu: 'h (sessiz)' },
      { harf: 'خ', hareke: 'cezm', bilesik: 'خْ', okunusu: 'h (sessiz)' },
      { harf: 'د', hareke: 'cezm', bilesik: 'دْ', okunusu: 'd (sessiz)' },
      { harf: 'ذ', hareke: 'cezm', bilesik: 'ذْ', okunusu: 'z (sessiz)' },
      { harf: 'ر', hareke: 'cezm', bilesik: 'رْ', okunusu: 'r (sessiz)' },
      { harf: 'ز', hareke: 'cezm', bilesik: 'زْ', okunusu: 'z (sessiz)' },
      { harf: 'س', hareke: 'cezm', bilesik: 'سْ', okunusu: 's (sessiz)' },
      { harf: 'ش', hareke: 'cezm', bilesik: 'شْ', okunusu: 'ş (sessiz)' },
      { harf: 'ص', hareke: 'cezm', bilesik: 'صْ', okunusu: 's (sessiz, kalın)' },
      { harf: 'ض', hareke: 'cezm', bilesik: 'ضْ', okunusu: 'd (sessiz, kalın)' },
      { harf: 'ط', hareke: 'cezm', bilesik: 'طْ', okunusu: 't (sessiz, kalın)' },
      { harf: 'ظ', hareke: 'cezm', bilesik: 'ظْ', okunusu: 'z (sessiz, kalın)' },
      { harf: 'ع', hareke: 'cezm', bilesik: 'عْ', okunusu: '(sessiz, boğaz)' },
      { harf: 'غ', hareke: 'cezm', bilesik: 'غْ', okunusu: 'ğ (sessiz)' },
      { harf: 'ف', hareke: 'cezm', bilesik: 'فْ', okunusu: 'f (sessiz)' },
      { harf: 'ق', hareke: 'cezm', bilesik: 'قْ', okunusu: 'k (sessiz, kalın)' },
      { harf: 'ك', hareke: 'cezm', bilesik: 'كْ', okunusu: 'k (sessiz)' },
      { harf: 'ل', hareke: 'cezm', bilesik: 'لْ', okunusu: 'l (sessiz)' },
      { harf: 'م', hareke: 'cezm', bilesik: 'مْ', okunusu: 'm (sessiz)' },
      { harf: 'ن', hareke: 'cezm', bilesik: 'نْ', okunusu: 'n (sessiz)' },
      { harf: 'و', hareke: 'cezm', bilesik: 'وْ', okunusu: 'v (sessiz)' },
      { harf: 'ه', hareke: 'cezm', bilesik: 'هْ', okunusu: 'h (sessiz)' },
      { harf: 'ي', hareke: 'cezm', bilesik: 'يْ', okunusu: 'y (sessiz)' },
    ],
    alistirmaKelimeleri: [
      { arapca: 'يَعْلَمُ', okunusu: 'Ya\'lemu', anlami: 'Bilir' },
      { arapca: 'يَكْتُبُ', okunusu: 'Yektubu', anlami: 'Yazar' },
      { arapca: 'اَلْحَمْدُ', okunusu: 'El-hamdu', anlami: 'Hamd' },
      { arapca: 'مِنْ', okunusu: 'Min', anlami: '-den, -dan' },
      { arapca: 'عَنْ', okunusu: 'An', anlami: '-den, hakkında' },
      { arapca: 'قَدْ', okunusu: 'Kad', anlami: 'Gerçekten, muhakkak' },
      { arapca: 'بَلْ', okunusu: 'Bel', anlami: 'Hayır, aksine' },
      { arapca: 'لَمْ', okunusu: 'Lem', anlami: '...madı (olumsuzluk)' },
      { arapca: 'هَلْ', okunusu: 'Hel', anlami: '...mı? (soru)' },
      { arapca: 'اِذْ', okunusu: 'İz', anlami: 'O zaman' },
    ]
  },

  // ================ SAYFA 16-17: 5. KONU - ŞEDDE ================
  {
    id: 5,
    sayfaNo: '16-17',
    konuNo: 5,
    baslik: 'Şedde',
    altBaslik: 'Harfi Güçlü / Çift Okumak',
    tip: 'sedde',
    aciklama: 'Şedde (ّ) işareti harfin üzerine konur ve o harfin iki kere, yani çift (güçlü) okunacağını gösterir. Şeddeli harfin birincisi cezmli, ikincisi harekeli okunur.',
    harekeliBilesikler: [
      // Şeddeli + Üstün
      { harf: 'ب', hareke: 'şedde-üstün', bilesik: 'بَّ', okunusu: 'Ebbe' },
      { harf: 'ت', hareke: 'şedde-üstün', bilesik: 'تَّ', okunusu: 'Ette' },
      { harf: 'ث', hareke: 'şedde-üstün', bilesik: 'ثَّ', okunusu: 'Esse' },
      { harf: 'ج', hareke: 'şedde-üstün', bilesik: 'جَّ', okunusu: 'Ecce' },
      { harf: 'ح', hareke: 'şedde-üstün', bilesik: 'حَّ', okunusu: 'Ehha' },
      { harf: 'د', hareke: 'şedde-üstün', bilesik: 'دَّ', okunusu: 'Edde' },
      { harf: 'ر', hareke: 'şedde-üstün', bilesik: 'رَّ', okunusu: 'Erre' },
      { harf: 'س', hareke: 'şedde-üstün', bilesik: 'سَّ', okunusu: 'Esse' },
      { harf: 'ش', hareke: 'şedde-üstün', bilesik: 'شَّ', okunusu: 'Eşşe' },
      { harf: 'ص', hareke: 'şedde-üstün', bilesik: 'صَّ', okunusu: 'Essa' },
      { harf: 'ض', hareke: 'şedde-üstün', bilesik: 'ضَّ', okunusu: 'Edda' },
      { harf: 'ل', hareke: 'şedde-üstün', bilesik: 'لَّ', okunusu: 'Elle' },
      { harf: 'م', hareke: 'şedde-üstün', bilesik: 'مَّ', okunusu: 'Emme' },
      { harf: 'ن', hareke: 'şedde-üstün', bilesik: 'نَّ', okunusu: 'Enne' },
    ],
    alistirmaKelimeleri: [
      { arapca: 'اَلرَّحْمٰنِ', okunusu: 'Er-Rahmâni', anlami: 'Rahmân' },
      { arapca: 'اَلرَّح۪يمِ', okunusu: 'Er-Rahîmi', anlami: 'Rahîm' },
      { arapca: 'رَبَّنَا', okunusu: 'Rabbenâ', anlami: 'Rabbimiz' },
      { arapca: 'إِنَّ', okunusu: 'İnne', anlami: 'Şüphesiz ki' },
      { arapca: 'اَلنَّاسِ', okunusu: 'En-Nâsi', anlami: 'İnsanların' },
      { arapca: 'اَللّٰهُ', okunusu: 'Allâhu', anlami: 'Allah' },
      { arapca: 'مُحَمَّدٌ', okunusu: 'Muhammedun', anlami: 'Muhammed' },
      { arapca: 'صَلَّى', okunusu: 'Sallâ', anlami: 'Salat etti / Namaz kıldı' },
    ]
  },

  // ================ SAYFA 18-19: 6. KONU - MED HARFLERİ ================
  {
    id: 6,
    sayfaNo: '18-19',
    konuNo: 6,
    baslik: 'Med Harfleri',
    altBaslik: 'Sesi Uzatma (Elif, Vav, Ya)',
    tip: 'med_harfleri',
    aciklama: 'Med, sesi uzatarak okumak demektir. Üç med harfi vardır: Elif (ا) – Üstünden sonra gelirse sesi uzatır. Vav (و) – Ötreden sonra gelirse sesi uzatır. Ya (ي) – Esreden sonra gelirse sesi uzatır. Med harfleri kendileri harekesizdir (cezmli/sakin) ve kendilerinden önceki harfin sesini uzatır.',
    harekeliBilesikler: [
      // Elif Med (üstün + elif)
      { harf: 'بَا', hareke: 'med-elif', bilesik: 'بَا', okunusu: 'Bâ (uzun a)' },
      { harf: 'تَا', hareke: 'med-elif', bilesik: 'تَا', okunusu: 'Tâ (uzun a)' },
      { harf: 'جَا', hareke: 'med-elif', bilesik: 'جَا', okunusu: 'Câ (uzun a)' },
      { harf: 'حَا', hareke: 'med-elif', bilesik: 'حَا', okunusu: 'Hâ (uzun a)' },
      { harf: 'دَا', hareke: 'med-elif', bilesik: 'دَا', okunusu: 'Dâ (uzun a)' },
      { harf: 'رَا', hareke: 'med-elif', bilesik: 'رَا', okunusu: 'Râ (uzun a)' },
      { harf: 'سَا', hareke: 'med-elif', bilesik: 'سَا', okunusu: 'Sâ (uzun a)' },
      { harf: 'كَا', hareke: 'med-elif', bilesik: 'كَا', okunusu: 'Kâ (uzun a)' },
      { harf: 'لَا', hareke: 'med-elif', bilesik: 'لَا', okunusu: 'Lâ (uzun a)' },
      { harf: 'مَا', hareke: 'med-elif', bilesik: 'مَا', okunusu: 'Mâ (uzun a)' },
      { harf: 'نَا', hareke: 'med-elif', bilesik: 'نَا', okunusu: 'Nâ (uzun a)' },
      // Vav Med (ötre + vav)
      { harf: 'بُو', hareke: 'med-vav', bilesik: 'بُو', okunusu: 'Bû (uzun u)' },
      { harf: 'تُو', hareke: 'med-vav', bilesik: 'تُو', okunusu: 'Tû (uzun u)' },
      { harf: 'جُو', hareke: 'med-vav', bilesik: 'جُو', okunusu: 'Cû (uzun u)' },
      { harf: 'دُو', hareke: 'med-vav', bilesik: 'دُو', okunusu: 'Dû (uzun u)' },
      { harf: 'سُو', hareke: 'med-vav', bilesik: 'سُو', okunusu: 'Sû (uzun u)' },
      { harf: 'نُو', hareke: 'med-vav', bilesik: 'نُو', okunusu: 'Nû (uzun u)' },
      // Ya Med (esre + ya)
      { harf: 'بِي', hareke: 'med-ya', bilesik: 'بِي', okunusu: 'Bî (uzun i)' },
      { harf: 'تِي', hareke: 'med-ya', bilesik: 'تِي', okunusu: 'Tî (uzun i)' },
      { harf: 'جِي', hareke: 'med-ya', bilesik: 'جِي', okunusu: 'Cî (uzun i)' },
      { harf: 'دِي', hareke: 'med-ya', bilesik: 'دِي', okunusu: 'Dî (uzun i)' },
      { harf: 'سِي', hareke: 'med-ya', bilesik: 'سِي', okunusu: 'Sî (uzun i)' },
      { harf: 'فِي', hareke: 'med-ya', bilesik: 'فِي', okunusu: 'Fî (uzun i)' },
      { harf: 'كِي', hareke: 'med-ya', bilesik: 'كِي', okunusu: 'Kî (uzun i)' },
    ],
    alistirmaKelimeleri: [
      { arapca: 'قَالَ', okunusu: 'Kâle', anlami: 'Dedi' },
      { arapca: 'كَانَ', okunusu: 'Kâne', anlami: 'Oldu, idi' },
      { arapca: 'يَقُولُ', okunusu: 'Yekûlu', anlami: 'Der, söyler' },
      { arapca: 'نُورٌ', okunusu: 'Nûrun', anlami: 'Nur, ışık' },
      { arapca: 'كَب۪يرٌ', okunusu: 'Kebîrun', anlami: 'Büyük' },
      { arapca: 'عَل۪يمٌ', okunusu: 'Alîmun', anlami: 'Bilgin, Çok Bilen' },
      { arapca: 'رَح۪يمٌ', okunusu: 'Rahîmun', anlami: 'Çok merhamet eden' },
      { arapca: 'سَم۪يعٌ', okunusu: 'Semî\'un', anlami: 'Çok işiten' },
    ]
  },

  // ================ SAYFA 20-21: 7. KONU - TENVİN ================
  {
    id: 7,
    sayfaNo: '20-21',
    konuNo: 7,
    baslik: 'Tenvin',
    altBaslik: 'İki Üstün – İki Esre – İki Ötre',
    tip: 'tenvin',
    aciklama: 'Tenvin, kelimenin sonuna gelen çift hareke işaretidir. Üç çeşittir: İki Üstün (ً): Sonu "-en" okunur. İki Esre (ٍ): Sonu "-in" okunur. İki Ötre (ٌ): Sonu "-un" okunur. Tenvin genellikle isimlerin sonunda belirsizlik ifade etmek için kullanılır.',
    harekeliBilesikler: [
      // İki Üstün (Tenvin fetha)
      { harf: 'بً', hareke: 'iki-üstün', bilesik: 'بًا', okunusu: 'Ben' },
      { harf: 'تً', hareke: 'iki-üstün', bilesik: 'تًا', okunusu: 'Ten' },
      { harf: 'دً', hareke: 'iki-üstün', bilesik: 'دًا', okunusu: 'Den' },
      { harf: 'رً', hareke: 'iki-üstün', bilesik: 'رًا', okunusu: 'Ren' },
      { harf: 'سً', hareke: 'iki-üstün', bilesik: 'سًا', okunusu: 'Sen' },
      { harf: 'لً', hareke: 'iki-üstün', bilesik: 'لًا', okunusu: 'Len' },
      { harf: 'مً', hareke: 'iki-üstün', bilesik: 'مًا', okunusu: 'Men' },
      { harf: 'نً', hareke: 'iki-üstün', bilesik: 'نًا', okunusu: 'Nen' },
      // İki Esre (Tenvin kesra)
      { harf: 'بٍ', hareke: 'iki-esre', bilesik: 'بٍ', okunusu: 'Bin' },
      { harf: 'تٍ', hareke: 'iki-esre', bilesik: 'تٍ', okunusu: 'Tin' },
      { harf: 'دٍ', hareke: 'iki-esre', bilesik: 'دٍ', okunusu: 'Din' },
      { harf: 'رٍ', hareke: 'iki-esre', bilesik: 'رٍ', okunusu: 'Rin' },
      { harf: 'سٍ', hareke: 'iki-esre', bilesik: 'سٍ', okunusu: 'Sin' },
      { harf: 'لٍ', hareke: 'iki-esre', bilesik: 'لٍ', okunusu: 'Lin' },
      { harf: 'مٍ', hareke: 'iki-esre', bilesik: 'مٍ', okunusu: 'Min' },
      { harf: 'نٍ', hareke: 'iki-esre', bilesik: 'نٍ', okunusu: 'Nin' },
      // İki Ötre (Tenvin zamme)
      { harf: 'بٌ', hareke: 'iki-ötre', bilesik: 'بٌ', okunusu: 'Bun' },
      { harf: 'تٌ', hareke: 'iki-ötre', bilesik: 'تٌ', okunusu: 'Tun' },
      { harf: 'دٌ', hareke: 'iki-ötre', bilesik: 'دٌ', okunusu: 'Dun' },
      { harf: 'رٌ', hareke: 'iki-ötre', bilesik: 'رٌ', okunusu: 'Run' },
      { harf: 'سٌ', hareke: 'iki-ötre', bilesik: 'سٌ', okunusu: 'Sun' },
      { harf: 'لٌ', hareke: 'iki-ötre', bilesik: 'لٌ', okunusu: 'Lun' },
      { harf: 'مٌ', hareke: 'iki-ötre', bilesik: 'مٌ', okunusu: 'Mun' },
      { harf: 'نٌ', hareke: 'iki-ötre', bilesik: 'نٌ', okunusu: 'Nun' },
    ],
    alistirmaKelimeleri: [
      { arapca: 'كِتَابًا', okunusu: 'Kitâben', anlami: 'Bir kitap' },
      { arapca: 'عِلْمًا', okunusu: 'İlmen', anlami: 'Bir ilim' },
      { arapca: 'رَح۪يمٌ', okunusu: 'Rahîmun', anlami: 'Merhametli (olan)' },
      { arapca: 'عَل۪يمٌ', okunusu: 'Alîmun', anlami: 'Bilen (olan)' },
      { arapca: 'بَص۪يرٍ', okunusu: 'Basîrin', anlami: 'Gören (bir)' },
      { arapca: 'سَم۪يعٍ', okunusu: 'Semî\'in', anlami: 'İşiten (bir)' },
      { arapca: 'حَك۪يمٌ', okunusu: 'Hakîmun', anlami: 'Hikmet sahibi' },
      { arapca: 'قَد۪يرٌ', okunusu: 'Kadîrun', anlami: 'Güç sahibi, Kudretli' },
    ]
  },

  // ================ SAYFA 22: 8. KONU - ASAR, MED VE KASR ================
  {
    id: 8,
    sayfaNo: 22,
    konuNo: 8,
    baslik: 'Asar, Med ve Kasr',
    altBaslik: 'Uzatma ve Kısaltma Kuralları',
    tip: 'alistirma',
    aciklama: 'Med (uzatma): Sesi uzatarak okumaktır. Kasr (kısaltma): Sesi kısa tutarak okumaktır. Asar: İz, belirti anlamına gelir; bazı kelimelerdeki gizli sesleri ifade eder.',
    alistirmaKelimeleri: [
      { arapca: 'قَالَ', okunusu: 'Kâle (uzun â)', anlami: 'Dedi' },
      { arapca: 'قُلْ', okunusu: 'Kul (kısa)', anlami: 'De' },
      { arapca: 'يَقُولُ', okunusu: 'Yekûlu (uzun û)', anlami: 'Söyler' },
      { arapca: 'ق۪يلَ', okunusu: 'Kîle (uzun î)', anlami: 'Denildi' },
      { arapca: 'فِيهَا', okunusu: 'Fîhâ (uzun î ve â)', anlami: 'Onun içinde' },
      { arapca: 'مِنْهَا', okunusu: 'Minhâ', anlami: 'Ondan' },
      { arapca: 'عَلَيْهِمْ', okunusu: 'Aleyhim', anlami: 'Onların üzerine' },
      { arapca: 'إِلَيْهِمْ', okunusu: 'İleyhim', anlami: 'Onlara doğru' },
      { arapca: 'أُول۪ئِكَ', okunusu: 'Ulâike', anlami: 'İşte onlar' },
      { arapca: 'الصِّرَاطَ', okunusu: 'Es-Sırâta', anlami: 'Yol' },
    ]
  },

  // ================ SAYFA 23-24: 9. KONU - ZAMİR VE LAFZATULLAH ================
  {
    id: 9,
    sayfaNo: '23-24',
    konuNo: 9,
    baslik: 'Zamir ve Lafzatullah',
    altBaslik: 'Kuran\'da Sıkça Geçen Zamirler ve Allah Lafzı',
    tip: 'alistirma',
    aciklama: 'Zamir: İsim yerine kullanılan kelimelerdir. Lafzatullah: "Allah" kelimesinin özel okunuşudur. "Allah" kelimesinden önceki harf üstün veya ötre ise "Allah" kalın (tefhîm) okunur; esreli ise ince (terkîk) okunur.',
    alistirmaKelimeleri: [
      // Zamirler
      { arapca: 'هُوَ', okunusu: 'Huve', anlami: 'O (erkek)' },
      { arapca: 'هِيَ', okunusu: 'Hiye', anlami: 'O (kadın)' },
      { arapca: 'هُمْ', okunusu: 'Hum', anlami: 'Onlar (erkek)' },
      { arapca: 'هُنَّ', okunusu: 'Hunne', anlami: 'Onlar (kadın)' },
      { arapca: 'أَنْتَ', okunusu: 'Ente', anlami: 'Sen (erkek)' },
      { arapca: 'أَنْتِ', okunusu: 'Enti', anlami: 'Sen (kadın)' },
      { arapca: 'أَنْتُمْ', okunusu: 'Entum', anlami: 'Siz (erkek)' },
      { arapca: 'أَنَا', okunusu: 'Ene', anlami: 'Ben' },
      { arapca: 'نَحْنُ', okunusu: 'Nahnu', anlami: 'Biz' },
      // Lafzatullah Örnekleri
      { arapca: 'قَالَ اللّٰهُ', okunusu: 'KâlALLÂHu (kalın)', anlami: 'Allah buyurdu' },
      { arapca: 'بِسْمِ اللّٰهِ', okunusu: 'BismillÂHi (ince)', anlami: 'Allah\'ın adıyla' },
      { arapca: 'إِلَى اللّٰهِ', okunusu: 'İlALLÂHi (ince)', anlami: 'Allah\'a doğru' },
      { arapca: 'عَبْدُ اللّٰهِ', okunusu: 'AbdULLÂHi (kalın)', anlami: 'Allah\'ın kulu' },
    ]
  },

  // ================ SAYFA 25: ÖRNEK AYETLER ================
  {
    id: 10,
    sayfaNo: 25,
    konuNo: 10,
    baslik: 'Örnek Ayetler',
    altBaslik: 'Kuran-ı Kerim\'den Kısa Ayetler',
    tip: 'alistirma',
    aciklama: 'Elif-Ba derslerinde öğrenilen kuralların Kuran ayetleri üzerinde uygulanması.',
    alistirmaKelimeleri: [
      { arapca: 'بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّح۪يمِ', okunusu: 'Bismillâhirrahmânirrahîm', anlami: 'Rahmân ve Rahîm olan Allah\'ın adıyla' },
      { arapca: 'اَلْحَمْدُ لِلّٰهِ رَبِّ الْعَالَم۪ينَ', okunusu: 'El-hamdulillâhi rabbil-âlemîn', anlami: 'Hamd, âlemlerin Rabbi olan Allah\'a mahsustur' },
      { arapca: 'اَلرَّحْمٰنِ الرَّح۪يمِ', okunusu: 'Er-rahmânir-rahîm', anlami: 'O, Rahmân\'dır, Rahîm\'dir' },
      { arapca: 'مَالِكِ يَوْمِ الدّ۪ينِ', okunusu: 'Mâliki yevmid-dîn', anlami: 'Din (hesap) gününün sahibidir' },
      { arapca: 'قُلْ هُوَ اللّٰهُ أَحَدٌ', okunusu: 'Kul hüvallâhu ehad', anlami: 'De ki: O Allah birdir' },
      { arapca: 'اَللّٰهُ الصَّمَدُ', okunusu: 'Allâhus-samed', anlami: 'Allah Samed\'dir (her şeyden müstağnîdir)' },
      { arapca: 'لَمْ يَلِدْ وَلَمْ يُولَدْ', okunusu: 'Lem yelid ve lem yûled', anlami: 'Doğurmamıştır ve doğurulmamıştır' },
      { arapca: 'وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ', okunusu: 'Ve lem yekun lehû kufuven ehad', anlami: 'Hiçbir şey O\'nun dengi olmamıştır' },
    ]
  },

  // ================ SAYFA 26: NAMAZ DUALARI - 1 ================
  {
    id: 11,
    sayfaNo: 26,
    konuNo: 11,
    baslik: 'Namaz Duaları (1)',
    altBaslik: 'Sübhâneke ve Ettehiyyâtü',
    tip: 'namaz_dualari',
    aciklama: 'Namazda okunan temel dualar.',
    dualar: [
      {
        baslik: 'Sübhâneke',
        altBaslik: 'İftitah Tekbiri Sonrası Okunan Dua',
        arapca: 'سُبْحَانَكَ اللّٰهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالٰى جَدُّكَ وَلَا إِلٰهَ غَيْرُكَ',
        okunusu: 'Sübhânekellâhümme ve bi hamdik. Ve tebârekesmük. Ve teâlâ ceddük. Ve lâ ilâhe ğayruk.',
        anlami: 'Allah\'ım! Sen eksik sıfatlardan pak ve uzaksın. Seni daima hamd ile anarım. Senin adın mübarektir. Senin şanın yücedir. Senden başka hiçbir ilah yoktur.'
      },
      {
        baslik: 'Ettehiyyâtü',
        altBaslik: 'Oturuşlarda Okunan Dua (Tahiyyât)',
        arapca: 'اَلتَّحِيَّاتُ لِلّٰهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ اَلسَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللّٰهِ وَبَرَكَاتُهُ اَلسَّلَامُ عَلَيْنَا وَعَلٰى عِبَادِ اللّٰهِ الصَّالِح۪ينَ أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللّٰهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ',
        okunusu: 'Ettehiyyâtü lillâhi ves-salevâtü vet-tayyibât. Esselâmü aleyke eyyühen-nebiyyü ve rahmetullâhi ve berekâtüh. Esselâmü aleynâ ve alâ ibâdillâhis-sâlihîn. Eşhedü en lâ ilâhe illallâh. Ve eşhedü enne Muhammeden abdühû ve resûlüh.',
        anlami: 'Dil ile, beden ile, mal ile yapılan ibadetlerin tamamı Allah\'a aittir. Ey Peygamber! Selam, Allah\'ın rahmeti ve bereketleri senin üzerine olsun. Selam bizim ve Allah\'ın salih kullarının üzerine olsun. Şahitlik ederim ki Allah\'tan başka ilah yoktur. Ve yine şahitlik ederim ki Muhammed, Allah\'ın kulu ve elçisidir.'
      }
    ]
  },

  // ================ SAYFA 27: NAMAZ DUALARI - 2 ================
  {
    id: 12,
    sayfaNo: 27,
    konuNo: 11,
    baslik: 'Namaz Duaları (2)',
    altBaslik: 'Allahümme Salli – Allahümme Bârik',
    tip: 'namaz_dualari',
    aciklama: 'Tahiyyâttan sonra okunan salâvat duaları.',
    dualar: [
      {
        baslik: 'Allahümme Salli',
        altBaslik: 'Salavat-ı Şerîfe',
        arapca: 'اَللّٰهُمَّ صَلِّ عَلٰى مُحَمَّدٍ وَعَلٰى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلٰى إِبْرَاه۪يمَ وَعَلٰى آلِ إِبْرَاه۪يمَ إِنَّكَ حَم۪يدٌ مَج۪يدٌ',
        okunusu: 'Allâhümme salli alâ Muhammedin ve alâ âli Muhammed. Kemâ salleyte alâ İbrâhîme ve alâ âli İbrâhîm. İnneke hamîdün mecîd.',
        anlami: 'Allah\'ım! Muhammed\'e ve Muhammed\'in ümmetine rahmet eyle. İbrahim\'e ve İbrahim\'in ümmetine rahmet ettiğin gibi. Şüphesiz Sen övülmeye en layık ve en şerefli olansın.'
      },
      {
        baslik: 'Allahümme Bârik',
        altBaslik: 'Bereket Duası',
        arapca: 'اَللّٰهُمَّ بَارِكْ عَلٰى مُحَمَّدٍ وَعَلٰى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلٰى إِبْرَاه۪يمَ وَعَلٰى آلِ إِبْرَاه۪يمَ إِنَّكَ حَم۪يدٌ مَج۪يدٌ',
        okunusu: 'Allâhümme bârik alâ Muhammedin ve alâ âli Muhammed. Kemâ bârekte alâ İbrâhîme ve alâ âli İbrâhîm. İnneke hamîdün mecîd.',
        anlami: 'Allah\'ım! Muhammed\'e ve Muhammed\'in ümmetine bereket ver. İbrahim\'e ve İbrahim\'in ümmetine bereket verdiğin gibi. Şüphesiz Sen övülmeye en layık ve en şerefli olansın.'
      }
    ]
  },

  // ================ SAYFA 28: NAMAZ DUALARI - 3 ================
  {
    id: 13,
    sayfaNo: 28,
    konuNo: 11,
    baslik: 'Namaz Duaları (3)',
    altBaslik: 'Rabbenâ Âtinâ – Kunut Duaları',
    tip: 'namaz_dualari',
    aciklama: 'Namazda okunan son dualar.',
    dualar: [
      {
        baslik: 'Rabbenâ Âtinâ',
        altBaslik: 'Son Oturuşta Okunan Dua',
        arapca: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
        okunusu: 'Rabbenâ âtinâ fid-dünyâ haseneten ve fil-âhireti haseneten ve kınâ azâben-nâr.',
        anlami: 'Rabbimiz! Bize dünyada iyilik ver, ahirette de iyilik ver ve bizi ateş azabından koru.'
      },
      {
        baslik: 'Kunut Duası (1)',
        altBaslik: 'Vitir Namazı İçin',
        arapca: 'اَللّٰهُمَّ إِنَّا نَسْتَع۪ينُكَ وَنَسْتَغْفِرُكَ وَنَسْتَهْد۪يكَ وَنُؤْمِنُ بِكَ وَنَتُوبُ إِلَيْكَ وَنَتَوَكَّلُ عَلَيْكَ وَنُثْن۪ي عَلَيْكَ الْخَيْرَ كُلَّهُ نَشْكُرُكَ وَلَا نَكْفُرُكَ وَنَخْلَعُ وَنَتْرُكُ مَنْ يَفْجُرُكَ',
        okunusu: 'Allâhümme innâ nestaînüke ve nestağfirüke ve nestehdîke ve nü\'minü bike ve netûbü ileyke ve netevekkelü aleyke ve nüsnî aleykel-hayra küllehû neşkürüke ve lâ nekfürüke ve nahleu ve netrukü men yefcüruk.',
        anlami: 'Allah\'ım! Senden yardım isteriz, günahlarımızı bağışlamanı isteriz, razı olduğun şeylere hidayet etmeni isteriz. Sana iman ederiz. Sana tövbe ederiz. Sana güveniriz. Bize verdiğin bütün nimetleri bilerek Seni hayır ile överiz. Sana şükrederiz. Hiçbir nimetini inkâr etmeyiz. Nimetlerini tanımayıp Sana karşı geleni bırakırız.'
      },
      {
        baslik: 'Kunut Duası (2)',
        altBaslik: 'Vitir Namazı İçin (Devam)',
        arapca: 'اَللّٰهُمَّ إِيَّاكَ نَعْبُدُ وَلَكَ نُصَلّ۪ي وَنَسْجُدُ وَإِلَيْكَ نَسْعٰى وَنَحْفِدُ نَرْجُو رَحْمَتَكَ وَنَخْشٰى عَذَابَكَ إِنَّ عَذَابَكَ بِالْكُفَّارِ مُلْحِقٌ',
        okunusu: 'Allâhümme iyyâke na\'büdü ve leke nüsallî ve nescüdü ve ileyke nes\'â ve nahfidü nercû rahmeteke ve nahşâ azâbeke inne azâbeke bil-küffâri mülhik.',
        anlami: 'Allah\'ım! Ancak Sana kulluk ederiz. Namazı ancak Senin için kılarız, ancak Sana secde ederiz. Yalnız Sana koşar ve Sana yaklaşmaya çalışırız. Rahmetini umarız, azabından korkarız. Şüphesiz Senin azabın kâfirlere ulaşacaktır.'
      }
    ]
  },
];

// ------- YARDIMCI FONKSİYONLAR -------

/** Hareke adlarının Türkçe etiketleri */
export const HAREKE_LABELS: Record<string, { isim: string; renk: string; aciklama: string }> = {
  'üstün':      { isim: 'Üstün (Fetha)',   renk: '#10b981', aciklama: 'Harfin üstüne konur, "e/a" sesi verir' },
  'esre':       { isim: 'Esre (Kesra)',     renk: '#3b82f6', aciklama: 'Harfin altına konur, "i" sesi verir' },
  'ötre':       { isim: 'Ötre (Zamme)',     renk: '#8b5cf6', aciklama: 'Harfin üstüne konur, "u/ü" sesi verir' },
  'cezm':       { isim: 'Cezm (Sükûn)',     renk: '#f59e0b', aciklama: 'Harfin üstüne konur, harfi sessiz yapar' },
  'şedde-üstün':{ isim: 'Şedde + Üstün',   renk: '#ef4444', aciklama: 'Harfi çift/güçlü okutarak üstün sesi verir' },
  'şedde-esre': { isim: 'Şedde + Esre',    renk: '#ec4899', aciklama: 'Harfi çift/güçlü okutarak esre sesi verir' },
  'şedde-ötre': { isim: 'Şedde + Ötre',    renk: '#d946ef', aciklama: 'Harfi çift/güçlü okutarak ötre sesi verir' },
  'med-elif':   { isim: 'Med (Elif ile)',   renk: '#14b8a6', aciklama: 'Üstünlü harften sonra elif gelirse â (uzun a) okunur' },
  'med-vav':    { isim: 'Med (Vav ile)',    renk: '#06b6d4', aciklama: 'Ötreli harften sonra vav gelirse û (uzun u) okunur' },
  'med-ya':     { isim: 'Med (Yâ ile)',     renk: '#6366f1', aciklama: 'Esreli harften sonra yâ gelirse î (uzun i) okunur' },
  'iki-üstün':  { isim: 'İki Üstün (Tenvin Fetha)', renk: '#22c55e', aciklama: 'Kelimenin sonuna "-en" sesi ekler' },
  'iki-esre':   { isim: 'İki Esre (Tenvin Kesra)',  renk: '#2563eb', aciklama: 'Kelimenin sonuna "-in" sesi ekler' },
  'iki-ötre':   { isim: 'İki Ötre (Tenvin Zamme)',  renk: '#7c3aed', aciklama: 'Kelimenin sonuna "-un" sesi ekler' },
};

/** Tüm sayfa sayısını döndürür */
export const getTotalPages = (): number => ELIF_BA_PAGES.length;

/** Belirli bir sayfayı ID ile getirir */
export const getPageById = (id: number): ElifbaPage | undefined =>
  ELIF_BA_PAGES.find(p => p.id === id);

/** Harekeli bileşikleri hareke tipine göre gruplar */
export const groupByHareke = (bilesikler: HarekeliBilesik[]): Record<string, HarekeliBilesik[]> => {
  return bilesikler.reduce((acc, item) => {
    if (!acc[item.hareke]) {
      acc[item.hareke] = [];
    }
    acc[item.hareke].push(item);
    return acc;
  }, {} as Record<string, HarekeliBilesik[]>);
};
