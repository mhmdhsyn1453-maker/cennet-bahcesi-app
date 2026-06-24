import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, CheckCircle, Circle, HelpCircle, Eye, EyeOff, Award, Sparkles, Star, ChevronDown, ChevronUp, RotateCcw, X, Volume2, VolumeX, Sun, Moon, Maximize2, Minimize2 } from 'lucide-react';
import { playSound } from './BuzzerAndTimer';

interface EzberItem {
  id: string;
  baslik: string;
  arapcaName?: string;
  kategori: 'dualar' | 'sureler' | 'muezzinlik';
  satirlar: {
    arapca: string;
    okunusu: string;
    anlami: string;
  }[];
}

export const EZBER_ITEMS: EzberItem[] = [
  // ─── DUALAR ──────────────────────────────────────────────────────
  {
    id: 'subhaneke',
    baslik: 'Sübhâneke',
    kategori: 'dualar',
    satirlar: [
      { arapca: 'سُبْحَانَكَ اللّٰهُمَّ وَبِحَمْدِكَ', okunusu: 'Sübhânekellâhümme ve bi hamdik', anlami: 'Allah\'ım! Sen eksik sabih ve temiz olan Sıfatlardan pak ve uzaksın. Seni daima böyle tenzih eder ve överim.' },
      { arapca: 'وَتَبَارَكَ اسْمُكَ', okunusu: 've tebârekesmük', anlami: 'Senin adın mübarektir.' },
      { arapca: 'وَتَعَالٰى جَدُّكَ', okunusu: 've teâlâ ceddük', anlami: 'Şanın her şeyden yücedir.' },
      { arapca: 'وَلَا اِلٰهَ غَيْرُكَ', okunusu: 've lâ ilâhe ğayrük', anlami: 'Senden başka hiçbir ilah yoktur.' }
    ]
  },
  {
    id: 'ettehiyyatu',
    baslik: 'Ettehiyyâtü',
    kategori: 'dualar',
    satirlar: [
      { arapca: 'اَلتَّحِيَّاتُ لِلّٰهِ وَالصَّلَوَاتُ وَالطَّيِّbَاتُ', okunusu: 'Et-tehiyyâtü lillâhi ves-salevâtü vet-tayyibât', anlami: 'Her türlü hürmet, salavat ve bütün güzel şeyler Allah\'a mahsustur.' },
      { arapca: 'اَلسَّلَامُ عَلَيْكَ اَيُّهَا النَّبِيُw وَرَحْمَةُ اللّٰهِ وَبَرَكَاتُهُ', okunusu: 'Es-selâmü aleyke eyyühen-nebiyyü ve rahmetullâhi ve berekâtüh', anlami: 'Ey Peygamber! Allah\'ın selamı, rahmeti ve bereketi senin üzerine olsun.' },
      { arapca: 'اَلسَّلَامُ عَلَيْنَا وَعَلٰى عِبَادِ اللّٰهِ الصَّالِح۪ينَ', okunusu: 'Es-selâmü aleynâ ve alâ ibâdillâhis-salihîn', anlami: 'Selam bizim üzerimize ve Allah\'ın salih kullarının üzerine olsun.' },
      { arapca: 'اَشْهَدُ اَنْ لَٓا اِلٰهَ اِلَّا اللّٰهُ وَاَشْهَدُ اَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ', okunusu: 'Eşhedü en lâ ilâhe illallâh ve eşhedü enne Muhammeden abdühû ve rasûlüh', anlami: 'Şahitlik ederim ki Allah\'tan başka ilah yoktur. Yine şahitlik ederim ki Muhammed O\'nun kulu ve elçisidir.' }
    ]
  },
  {
    id: 'allahumme_salli',
    baslik: 'Allahümme Salli',
    kategori: 'dualar',
    satirlar: [
      { arapca: 'اَللّٰهُمَّ صَلِّ عَلٰى مُحَمَّدٍ وَعَلٰى اٰلِ مُحَمَّدٍ', okunusu: 'Allâhümme salli alâ Muhammedin ve alâ âli Muhammed', anlami: 'Allah\'ım! Muhammed\'e ve Muhammed\'in ailesine rahmet eyle,' },
      { arapca: 'كَمَا صَلَّيْتَ عَلٰى اِبْرٰه۪يمَ وَعَلٰى اٰلِ اِبْرٰه۪يمَ', okunusu: 'kemâ salleyte alâ İbrâhîme ve alâ âli İbrâhîm', anlami: 'tıpkı İbrahim\'e ve İbrahim\'in ailesine rahmet eylediğin gibi.' },
      { arapca: 'اِنَّكَ حَم۪يدٌ مَج۪يدٌ', okunusu: 'inneke hamîdün mecîd', anlami: 'Şüphesiz Sen övülmeye layıksın, şerefi yüce olansın.' }
    ]
  },
  {
    id: 'allahumme_barik',
    baslik: 'Allahümme Bârik',
    kategori: 'dualar',
    satirlar: [
      { arapca: 'اَللّٰهُمَّ بَارِكْ عَلٰى مُحَمَّدٍ وَعَلٰى اٰلِ مُحَمَّدٍ', okunusu: 'Allâhümme bârik alâ Muhammedin ve alâ âli Muhammed', anlami: 'Allah\'ım! Muhammed\'e ve Muhammed\'in ailesine hayır ve bereket ihsan eyle,' },
      { arapca: 'كَمَا بَارَكْتَ عَلٰى اِبْرٰه۪يمَ وَعَلٰى اٰلِ اِبْرٰه۪يمَ', okunusu: 'kemâ bârakte alâ İbrâhîme ve alâ âli İbrâhîm', anlami: 'tıpkı İbrahim\'e ve İbrahim\'in ailesine bereket ihsan ettiğin gibi.' },
      { arapca: 'اِنَّكَ hَم۪يدٌ مَج۪يدٌ', okunusu: 'inneke hamîdün mecîd', anlami: 'Şüphesiz Sen övülmeye layıksın, şerefi yüce olansın.' }
    ]
  },
  {
    id: 'rabbena_atina',
    baslik: 'Rabbenâ Âtinâ',
    kategori: 'dualar',
    satirlar: [
      { arapca: 'رَبَّنَٓا اٰتِنَا فِي الدُّنْيَا حَسَنَةً', okunusu: 'Rabbenâ âtinâ fid-dünyâ haseneten', anlami: 'Rabbimiz! Bize dünyada iyilik, güzellik ver;' },
      { arapca: 'وَفِي الْاٰخِرَةِ حَسَنَةً', okunusu: 've fil-âhireti haseneten', anlami: 'ahirette de iyilik ve güzellik ver,' },
      { arapca: 'وَقِنَا عَذَابَ النَّارِ', okunusu: 've kınâ azâben-nâr', anlami: 've bizi cehennem azabından koru.' }
    ]
  },
  {
    id: 'rabbenağfirli',
    baslik: 'Rabbenâğfirlî',
    kategori: 'dualar',
    satirlar: [
      { arapca: 'رَبَّنَا اغْفِرْ ل۪ي وَلِوَالِدَيَّ', okunusu: 'Rabbenâğfirlî ve li-vâlideyye', anlami: 'Rabbimiz! Beni, anne ve babamı bağışla,' },
      { arapca: 'وَلِلْمُؤْمِن۪ينَ يَوْمَ يَقُومُ الْحِسَابُ', okunusu: 've lil-mü\'minîne yevme yekûmül-hisâb', anlami: 'hesabın görüleceği gün bütün müminleri de bağışla.' }
    ]
  },
  {
    id: 'kunut_1',
    baslik: 'Kunut Duaları - 1',
    kategori: 'dualar',
    satirlar: [
      { arapca: 'اَللّٰهُمَّ اِنَّا نَسْتَع۪ينُكَ وَنَسْتَغْفِرُكَ وَنَسْتَهْد۪يكَ', okunusu: 'Allâhümme innâ nesteînüke ve nesteğfirüke ve nestehdîk', anlami: 'Allah\'ım! Biz Senden yardım dileriz, günahlarimizi bağışlamani isteriz ve Senden hidayet dileriz.' },
      { arapca: 'وَنُؤْمِنُ بِكَ وَنَتُوبُ اِلَيْكَ وَنَتَوَكَّلُ عَلَيْكَ', okunusu: 've nü\'minü bike ve netûbü ileyke ve netevekkelü aleyk', anlami: 'Sana inanırız, Sana tövbe ederiz ve sadece Sana dayanıp güveniriz.' },
      { arapca: 'وَنُثْن۪ي عَلَيْكَ الْخَيْرَ كُلَّهُ نَشْكُرُكَ وَلَا نَkْفُرُكَ', okunusu: 've nüsnî aleykel-hayra küllehû neşkürük ve lâ nekfürük', anlami: 'Seni bütün hayırlarla överiz. Sana şükrederiz ve Sana asla nankörlük etmeyiz.' },
      { arapca: 'وَنَخْلَعُ وَنَتْرُكُ مَنْ يَفْجُرُكَ', okunusu: 've nahleü ve netrükü mey-yefcürük', anlami: 'Sana isyan edip karşı gelenleri tamamen dışlar ve bırakırız.' }
    ]
  },
  {
    id: 'kunut_2',
    baslik: 'Kunut Duaları - 2',
    kategori: 'dualar',
    satirlar: [
      { arapca: 'اَللّٰهُمَّ اِيَّاكَ نَعْبُدُ وَلَكَ نُصَلّ۪ي وَنَسْجُdُ', okunusu: 'Allâhümme iyyâke na\'büdü ve leke nüsallî ve nescüd', anlami: 'Allah\'ım! Biz ancak Sana kulluk ederiz, yalnız Senin rızan için namaz kılar ve secde ederiz.' },
      { arapca: 'وَاِلَيْكَ نَسْعٰى وَنَحْفِدُ', okunusu: 've ileyke nes\'â ve nahfid', anlami: 'Sadece Sana yönelir, Sana kavuşmak için koşar ve çabalarız.' },
      { arapca: 'نَرْجُو رَحْمَتَكَ وَنَخْشٰى عَذَابَكَ', okunusu: 'nercû rahmeteke ve nahşâ azâbek', anlami: 'Rahmetini umar, azabından korkarız.' },
      { arapca: 'اِنَّ عَذَابَكَ بِالْكُفَّارِ مُلْحِقٌ', okunusu: 'inne azâbeke bil-küffâri mülhık', anlami: 'Şüphesiz Senin azabın kafirlere mutlaka ulaşacaktır.' }
    ]
  },
  {
    id: 'amentu',
    baslik: 'Âmentü',
    kategori: 'dualar',
    satirlar: [
      { arapca: 'اٰمَنْتُ بِاللّٰهِ وَمَلٰٓئِكَتِه۪ وَكُتُbِه۪ وَرُسُلِه۪', okunusu: 'Âmentü billâhi ve melâiketihî ve kütübihî ve rusülihî', anlami: 'Allah\'a, meleklerine, kitaplarına, peygamberlerine inandım.' },
      { arapca: 'وَالْيَوْمِ الْاٰخِرِ وَبِالْقَدَرِ خَيْرِه۪ وَشَرِّه۪ مِنَ اللّٰهِ تَعَالٰى', okunusu: 'vel-yevmil-âhıri ve bil-kaderi hayrihî ve şerrihî minallâhi teâlâ', anlami: 'Ahiret gününe, kadere; hayrın da şerrin de Allah Teâlâ\'dan geldiğine inandım.' },
      { arapca: 'وَالْبَعْثُ بَعْدَ الْمَوْتِ حَقٌّ', okunusu: 'vel-ba\'sü ba\'del-mevti hakk', anlami: 'Ölümden sonra dirilmek de gerçektir.' },
      { arapca: 'اَشْهَدُ اَنْ لَٓا اِلٰهَ اِلَّا اللّٰهُ وَاَشْهَدُ اَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ', okunusu: 'Eşhedü en lâ ilâhe illallâh ve eşhedü enne Muhammeden abdühû ve rasûlüh', anlami: 'Şahitlik ederim ki Allah\'tan başka ilah yoktur. Ve yine şahitlik ederim ki Muhammed O\'nun kulu ve elçisidir.' }
    ]
  },

  // ─── SURELER ─────────────────────────────────────────────────────
  {
    id: 'fatiha',
    baslik: 'Fâtiha Sûresi',
    arapcaName: 'سُورَةُ الْفَاتِحَةِ',
    kategori: 'sureler',
    satirlar: [
      { arapca: 'بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّح۪يمِ', okunusu: 'Bismillâhir-rahmânir-rahîm', anlami: 'Rahmân ve Rahîm olan Allah\'ın adıyla.' },
      { arapca: 'اَلْحَمْدُ لِلّٰهِ رَبِّ الْعَالَم۪ينَۙ', okunusu: 'El-hamdü lillâhi rabbil-âlemîn', anlami: 'Hamd (övme ve övülme), âlemlerin Rabbi olan Allah\'a mahsustur.' },
      { arapca: 'اَلرَّحْمٰنِ الرَّح۪يمِۙ', okunusu: 'Er-rahmânir-rahîm', anlami: 'O, Rahmân\'dır, Rahîm\'dir.' },
      { arapca: 'مَالِكِ يَوْمِ الدّ۪ينِۜ', okunusu: 'Mâliki yevmid-dîn', anlami: 'Hesap ve ceza gününün (ahiretin) tek hâkimidir.' },
      { arapca: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَع۪ينُۜ', okunusu: 'İyyâke na\'büdü ve iyyâke nesteîn', anlami: 'Rabbimiz! Ancak Sana kulluk eder ve yalnız Senden yardım dileriz.' },
      { arapca: 'اِهْدِنَا الصِّرَاطَ الْمُسْتَق۪يمَۙ', okunusu: 'İhdinas-sırâtal-müstakîm', anlami: 'Bizi dosdoğru yola ilet.' },
      { arapca: 'صِرَاطَ الَّذ۪ينَ أَنْعَمْتَ عَلَيْهِمْۙ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالّ۪ينَ', okunusu: 'Sırâtallezîne en\'amte aleyhim, ğayril-mağdûbi aleyhim veled-dâllîn', anlami: 'Kendilerine lütuf ve ikramda bulunduğun kimselerin yoluna ilet; gazaba uğramışların ve sapmışların yoluna değil.' }
    ]
  },
  {
    id: 'fil',
    baslik: 'Fîl Sûresi',
    arapcaName: 'سُورَةُ الْفِيلِ',
    kategori: 'sureler',
    satirlar: [
      { arapca: 'اَلَمْ تَرَ كَيْفَ فَعَلَ رَبُwكَ بِاَصْحَابِ الْف۪يلِۜ', okunusu: 'Elem tere keyfe feale rabbüke bi-ashâbil-fîl', anlami: 'Rabbinin, fil sahiplerine ne yaptığını görmedin mi?' },
      { arapca: 'اَلَمْ يَجْعَلْ كَيْدَهُمْ ف۪ي تَضْل۪يلٍۙ', okunusu: 'Elem yec\'al keydehüm fî tadlîl', anlami: 'Onların tuzaklarını boşa çıkarmadı mı?' },
      { arapca: 'وَاَرْسَلَ عَلَيْهِمْ طَيْرًا اَبَاب۪يلَۙ', okunusu: 'Ve ersele aleyhim tayran ebâbîl', anlami: 'Onların üzerlerine sürü sürü (ebabil) kuşları gönderdi.' },
      { arapca: 'تَرْم۪يهِمْ بِحِجَارَةٍ مِنْ سِجّ۪يلٍۙ', okunusu: 'Termîhim bi-hıcâratim min siccîl', anlami: 'O kuşlar, fil sahiplerinin üzerlerine çamurdan pişirilmiş taşlar atıyorlardı.' },
      { arapca: 'Fَجَعَلَهُمْ كَعَصْفٍ مَأْكُولٍ', okunusu: 'Fe-cealehüm ke-asfim me\'kûl', anlami: 'Nihayet onları yenilmiş ekin yaprağı gibi yaptı.' }
    ]
  },
  {
    id: 'kureys',
    baslik: 'Kureyş Sûresi',
    arapcaName: 'سُورَةُ قُرَيْشٍ',
    kategori: 'sureler',
    satirlar: [
      { arapca: 'لِا۪يلَافِ قُرَيْشٍۙ', okunusu: 'Li-îlâfi Kureyş', anlami: 'Kureyş\'i ısındırıp alıştırdığı için;' },
      { arapca: 'ا۪يلَافِهِمْ رِحْلَةَ الشِّتَٓاءِ وَالصَّيْفِۚ', okunusu: 'Îlâfihim rihleteş-şitâi ves-sayf', anlami: 'Kış ve yaz seyahatlerine onları alıştırıp ısındırdığı için,' },
      { arapca: 'Fَلْيَعْبُدُوا رَبَّ هٰذَا الْبَيْتِۙ', okunusu: 'Felyea\'büdû rabbe hâzel-beyt', anlami: 'artık onlar bu Beyt\'in (Kabe\'nin) Rabbine ibadet etsinler.' },
      { arapca: 'اَلَّذ۪ٓي اَطْعَمَهُمْ مِنْ جُوعٍۙ وَاٰمَنَهُمْ مِنْ خَوْفٍ', okunusu: 'Ellezî at\'amehüm min cûıv-ve âmenehüm min havf', anlami: 'O Rab ki kendilerini açlıktan kurtarıp doyurdu ve her türlü korkudan emin kıldı.' }
    ]
  },
  {
    id: 'maun',
    baslik: 'Maûn Sûresi',
    arapcaName: 'سُورَةُ الْمَاعُونِ',
    kategori: 'sureler',
    satirlar: [
      { arapca: 'اَرَاَيْتَ الَّذ۪ي يُكَذِّبُ بِالدّ۪inِۜ', okunusu: 'Era\'eytellezî yükezzibü bid-dîn', anlami: 'Gördün mü o hesap gününü yalanlayanı?' },
      { arapca: 'Fَذٰلِكَ الَّذ۪ي يَدُعُّ الْيَت۪يمَۙ', okunusu: 'Fe-zâlikellezî yedu\'ul-yetîm', anlami: 'İşte yetimi itip kakan odur;' },
      { arapca: 'وَلَا يَحُضُّ عَلٰى طَعَامِ الْمِسْك۪ينِۜ', okunusu: 'Ve lâ yehuddu alâ taâmil-miskîn', anlami: 'yoksulu doyurmaya teşvik etmeyen de odur.' },
      { arapca: 'Fَوَيْلٌ لِلْمُصَلّ۪ينَۙ', okunusu: 'Fe-veylül lil-musallîn', anlami: 'Yazıklar olsun o namaz kılanlara ki,' },
      { arapca: 'اَلَّذ۪ينَ هُمْ عَنْ صَلَاتِهِمْ سَاهُونَۙ', okunusu: 'Ellezîne hüm an salâtihim sâhûn', anlami: 'onlar kıldıkları namazdan gafildirler (özensizdirler).' },
      { arapca: 'اَلَّذ۪ينَ هُمْ يُرَٓاؤُنَ', okunusu: 'Ellezîne hüm yürâûn', anlami: 'Onlar gösteriş yaparlar,' },
      { arapca: 'وَيَمْنَعُونَ الْمَاعُونَ', okunusu: 'Ve yemneûnely-mâûn', anlami: 've ufacık bir yardıma bile engel olurlar.' }
    ]
  },
  {
    id: 'kevser',
    baslik: 'Kevser Sûresi',
    arapcaName: 'سُورَةُ الْكَوْثَرِ',
    kategori: 'sureler',
    satirlar: [
      { arapca: 'إِنَّٓا اَعْطَيْنَاكَ الْكَوْثَرَۜ', okunusu: 'İnnâ a\'taynâkel-kevser', anlami: 'Şüphesiz Biz sana Kevser\'i (bol nimet, feyiz ve bereketi) verdik.' },
      { arapca: 'Fَصَلِّ لِرَبِّكَ وَانْحَرْۜ', okunusu: 'Fesalli lirabbike venhar', anlami: 'Öyleyse sadece Rabbin için namaz kıl ve kurban kes.' },
      { arapca: 'إِنَّ شَانِئَكَ هُوَ الْاَبْتَرُ', okunusu: 'İnne şânieke hüvel-ebter', anlami: 'Asıl soyu kesik olan, şüphesiz sana kin duyup düşmanlık edendir.' }
    ]
  },
  {
    id: 'kafirun',
    baslik: 'Kâfirûn Sûresi',
    arapcaName: 'سُورَةُ الْكَافِرُونَ',
    kategori: 'sureler',
    satirlar: [
      { arapca: 'قُلْ يَٓا اَيُّهَا الْكَافِرُونَۙ', okunusu: 'Kul yâ eyyühel-kâfirûn', anlami: 'De ki: Ey inkârcılar!' },
      { arapca: 'لَٓا اَعْبُدُ مَا تَعْبُدُونَۙ', okunusu: 'Lâ a\'büdü mâ ta\'büdûn', anlami: 'Ben sizin tapmakta olduğunuz şeylere tapmam.' },
      { arapca: 'وَلَٓا اَنْتُمْ عَابِدُونَ مَٓا اَعْبُدُۚ', okunusu: 'Ve lâ entüm âbidûne mâ a\'büd', anlami: 'Siz de benim kulluk ettiğime kulluk edecek değilsiniz.' },
      { arapca: 'وَلَٓا اَنَا۠ عَابِدٌ مَا عَبَدْتُمْۙ', okunusu: 'Ve lâ ene âbidüm mâ abedtüm', anlami: 'Ben sizin taptıklarınıza tapacak değilim.' },
      { arapca: 'وَلَٓا اَنْتُمْ عَابِدُونَ مَٓا اَعْبُدُۜ', okunusu: 'Ve lâ entüm âbidûne mâ a\'büd', anlami: 'Siz de benim kulluk ettiğime kulluk edecek değilsiniz.' },
      { arapca: 'لَكُمْ د۪ينُكُمْ وَلِيَ د۪ينِ', okunusu: 'Leküm dînüküm veliye dîn', anlami: 'Sizin dininiz size, benim dinim banadır.' }
    ]
  },
  {
    id: 'nasr',
    baslik: 'Nasr Sûresi',
    arapcaName: 'سُورَةُ النَّصْرِ',
    kategori: 'sureler',
    satirlar: [
      { arapca: 'اِذَا جَٓاءَ نَصْرُ اللّٰهِ وَالْفَتْحُۙ', okunusu: 'İzâ câe nasrullâhi vel-feth', anlami: 'Allah\'ın yardımı ve zafer (Mekke\'nin fethi) geldiği zaman,' },
      { arapca: 'وَرَاَيْتَ النَّاسَ يَدْخُلُونَ F۪ي د۪ينِ اللّٰهِ اَفْوَاجًاۙ', okunusu: 'Ve raeyten-nâse yedhulûne fî dînillâhi efvâcâ', anlami: 've insanların Allah\'ın dinine dalga dalga girdiğini gördüğünde,' },
      { arapca: 'Fَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُۜ اِنَّهُ كَانَ تَوَّابًا', okunusu: 'Fesebbıh bihamdi rabbike vestağfirh, innehû kâne tevvâbâ', anlami: 'hemen Rabbini hamd ile tesbih et ve O\'ndan bağışlanma dile. Şüphesiz O, tövbeleri çokça kabul edendir.' }
    ]
  },
  {
    id: 'tebbet',
    baslik: 'Tebbet Sûresi',
    arapcaName: 'سُورَةُ لَهَبٍ',
    kategori: 'sureler',
    satirlar: [
      { arapca: 'تَبَّتْ يَدَٓا اَب۪ي لَهَبٍ وَتَبَّۜ', okunusu: 'Tebbet yedâ ebî lehebiv-vetebb', anlami: 'Ebu Leheb\'in iki eli kurusun! Kurudu da.' },
      { arapca: 'مَٓا اَغْنٰى عَنْهُ مَالُهُ وَمَا كَسَبَۜ', okunusu: 'Mâ eğnâ anhü mâlühû ve mâ keseb', anlami: 'Ona ne malı fayda verdi ne de kazandıkları.' },
      { arapca: 'سَيَصْلٰى نَارًا ذَاتَ لَهَبٍۚ', okunusu: 'Seyaslâ nâran zâte leheb', anlami: 'O, alev alev yanan bir ateşe girecektir.' },
      { arapca: 'وَامْرَاَتُهُۜ حَمَّالَةَ الْخَطَبِۚ', okunusu: 'Vemraetühû hammâletel-hatab', anlami: 'Boynunda bükülmüş hurma lifinden bir ip olduğu halde odun taşıyan karısı da (ateşe girecektir).' },
      { arapca: 'F۪ي ج۪يدِهَا حَبْلٌ مِنْ مَسَدٍ', okunusu: 'Fî cîdihâ hablüm mim-mesed', anlami: 'Onun da boynunda liften örülmüş bir ip olacaktır.' }
    ]
  },
  {
    id: 'ihlas',
    baslik: 'İhlâs Sûresi',
    arapcaName: 'سُورَةُ الإِخْلَاصِ',
    kategori: 'sureler',
    satirlar: [
      { arapca: 'قُلْ هُوَ اللّٰهُ اَحَدٌۚ', okunusu: 'Kul hüvellâhü ehad', anlami: 'De ki: O Allah tektir.' },
      { arapca: 'اَللّٰهُ الصَّمَدُۚ', okunusu: 'Allâhüs-samed', anlami: 'Allah Samed\'dir (hiçbir şeye muhtaç değildir, her şey O\'na muhtaçtır).' },
      { arapca: 'لَمْ يَلِدْ وَلَمْ يُولَدْۙ', okunusu: 'Lem yelid ve lem yûled', anlami: 'O, doğurmamış ve doğurulmamıştır.' },
      { arapca: 'وَلَمْ يَكُنْ لَهُ كُفُوًا اَحَدٌ', okunusu: 'Ve lem yekül-lehû küfüven ehad', anlami: 'Hiçbir şey O\'nun dengi ve benzeri olamaz.' }
    ]
  },
  {
    id: 'felak',
    baslik: 'Felak Sûresi',
    arapcaName: 'سُورَةُ الْفَلَقِ',
    kategori: 'sureler',
    satirlar: [
      { arapca: 'قُلْ اَعُوذُ بِرَبِّ الْفَلَقِۙ', okunusu: 'Kul eûzü birabbil-felak', anlami: 'De ki: Sabahın Rabbine sığınırım;' },
      { arapca: 'مِنْ شَرِّ مَا خَلَقَۙ', okunusu: 'Min şerri mâ halak', anlami: 'yarattığı şeylerin kötülüğünden,' },
      { arapca: 'مِنْ شَرِّ غَاسِقٍ اِذَا وَقَبَۙ', okunusu: 'Ve min şerri ğâsıkın izâ vekab', anlami: 'çöktüğü zaman karanlığın kötülüğünden,' },
      { arapca: 'مِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِۙ', okunusu: 'Ve min şerrin-neffâsâti fil-ukad', anlami: 'düğümlere üfleyen büyücülerin kötülüğünden,' },
      { arapca: 'مِنْ شَرِّ حَاسِدٍ اِذَا حَسَدَ', okunusu: 'Ve min şerri hâsidin izâ hased', anlami: 've kıskandığı vakit kıskanç kişinin kötülüğünden.' }
    ]
  },
  {
    id: 'nas',
    baslik: 'Nâs Sûresi',
    arapcaName: 'سُورَةُ النَّاسِ',
    kategori: 'sureler',
    satirlar: [
      { arapca: 'قُلْ اَعُوذُ بِرَبِّ النَّاسِۙ', okunusu: 'Kul eûzü birabbin-nâs', anlami: 'De ki: İnsanların Rabbine sığınırım;' },
      { arapca: 'مَلِكِ النَّاسِۙ', okunusu: 'Melikin-nâs', anlami: 'insanların tek hâkimine,' },
      { arapca: 'اِلٰهِ النَّاسِۙ', okunusu: 'İlâhin-nâs', anlami: 'insanların gerçek ilahına;' },
      { arapca: 'مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِۙ', okunusu: 'Min şerril-vesvâsil-hannâs', anlami: 'o sinsi fısıldayıcının kötülüğünden.' },
      { arapca: 'اَلَّذ۪ي يُوَسْوِسُ F۪ي صُدُورِ النَّاسِۙ', okunusu: 'Ellezî yüvesvisü fî sudûrin-nâs', anlami: 'O ki insanların kalplerine vesvese verir,' },
      { arapca: 'مِنَ الْجِنَّةِ وَالنَّاسِ', okunusu: 'Minel-cinneti ven-nâs', anlami: 'gerek cinlerden gerekse insanlardan olsun.' }
    ]
  },

  // ─── EZAN / KAMET / MÜEZZİNLİK ──────────────────────────────────
  {
    id: 'ezan_kamet',
    baslik: 'Ezan ve Kamet',
    kategori: 'muezzinlik',
    satirlar: [
      { arapca: 'اَللّٰهُ اَكْبَرُ (٤ Kere)', okunusu: 'Allāhü ekber (Ezan ve Kamette)', anlami: 'Allah en büyüktür.' },
      { arapca: 'اَشْهَدُ اَنْ لَٓا اِلٰهَ اِلَّا اللّٰهُ (٢ Kere)', okunusu: 'Eşhedü en lâ ilâhe illallâh', anlami: 'Şahitlik ederim ki Allah\'tan başka hiçbir ilah yoktur.' },
      { arapca: 'اَشْهَدُ اَنَّ مُحَمَّدًا رَسُولُ اللّٰهِ (٢ Kere)', okunusu: 'Eşhedü enne Muhammeden rasûlullâh', anlami: 'Şahitlik ederim ki Muhammed Allah\'ın elçisidir.' },
      { arapca: 'حَيَّ عَلَى الصَّلٰوةِ (٢ Kere)', okunusu: 'Hayye ales-salâh', anlami: 'Haydin namaza gelin!' },
      { arapca: 'حَيَّ عَلَى الْفَلَاحِ (٢ Kere)', okunusu: 'Hayye alel-felâh', anlami: 'Haydin kurtuluşa ve felaha gelin!' },
      { arapca: 'قَدْ قَامَتِ الصَّلٰوةُ (Sadece Kamette - ٢ Kere)', okunusu: 'Kad kâmetis-salâh', anlami: 'Namaz başladı, namaz kesin olarak başladı.' },
      { arapca: 'اَللّٰهُ اَكْبَرُ (٢ Kere)', okunusu: 'Allāhü ekber', anlami: 'Allah en büyüktür.' },
      { arapca: 'لَٓا اِلٰهَ اِلَّا اللّٰهُ (١ Kere)', okunusu: 'Lâ ilâhe illallâh', anlami: 'Allah\'tan başka hiçbir ilah yoktur.' }
    ]
  },
  {
    id: 'muezzinlik_duaları',
    baslik: 'Namaz Sonrası Müezzinlik Duaları',
    kategori: 'muezzinlik',
    satirlar: [
      { arapca: 'اَللّٰهُمَّ اَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْاِكْرَامِۜ', okunusu: 'Allâhümme entes-selâmü ve minkes-selâmü tebârakte yâ zel-celâli vel-ikrâm', anlami: 'Farz namaz bitince okunur: Allah\'ım! Sen selamsın, selamet Sendendir. Ey celal ve ikram sahibi olan Rabbim, Sen ne yücesin!' },
      { arapca: 'عَلٰى رَسُولِنَا صَلَوَاتٌ', okunusu: 'Alâ rasûlinâ salevât (Hoca/Müezzin der, cemaat salavat çeker)', anlami: 'Peygamberimiz Hz. Muhammed\'e salât ve selam olsun.' },
      { arapca: 'سُبْحَانَ اللّٰهِ وَالْحَمDُ لِلّٰهِ وَلَٓا اِلٰهَ اِلَّا اللّٰهُ وَاللّٰهُ اَكْبَرُ', okunusu: 'Sübhânallâhi vel-hamdü lillâhi ve lâ ilâhe illallâhü vallâhü ekber', anlami: 'Allah noksan sıfatlardan uzaktır, hamd Allah\'adır, Allah\'tan başka ilah yoktur ve Allah en büyüktür.' },
      { arapca: 'وَلَا حَوْلَ وَلَا قُوَّةَ اِلَّا بِاللّٰهِ الْعَلِيِّ الْعَظ۪يمِۜ', okunusu: 've lâ havle ve lâ kuvvete illâ billâhil-aliyyil-azîm', anlami: 'Güç ve kuvvet ancak şanı çok yüce ve azametli olan Allah\'ın yardımıyladır.' },
      { arapca: 'سُبْحَانَ اللّٰهِ (٣٣ Defa)', okunusu: 'Sübhânallâh (Namaz tesbihatı - 1)', anlami: 'Allah\'ı tüm noksanlıklardan tenzih ederim.' },
      { arapca: 'اَلْحَمْدُ لِلّٰهِ (٣٣ Defa)', okunusu: 'Elhamdülillâh (Namaz tesbihatı - 2)', anlami: 'Hamd, teşekkür Allah\'adır.' },
      { arapca: 'اَللّٰهُ اَكْبَرُ (٣٣ Defa)', okunusu: 'Allāhü ekber (Namaz tesbihatı - 3)', anlami: 'Allah en büyüktür.' }
    ]
  }
];

export interface EzberPortaliProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  isMusicPlaying: boolean;
  togglePlayMusic: () => void;
  isAnimatedBg: boolean;
  toggleAnimatedBg: () => void;
  isFocused: boolean;
  setIsFocused: (focused: boolean) => void;
}

export const EzberPortali: React.FC<EzberPortaliProps> = ({
  isDarkMode,
  toggleDarkMode,
  isMusicPlaying,
  togglePlayMusic,
  isAnimatedBg,
  toggleAnimatedBg,
  isFocused,
  setIsFocused
}) => {
  const [activeCategory, setActiveCategory] = useState<'dualar' | 'sureler' | 'muezzinlik'>('dualar');
  const [selectedItemForModal, setSelectedItemForModal] = useState<EzberItem | null>(null);
  const [modalTab, setModalTab] = useState<'arabic' | 'turkish' | 'meaning'>('arabic');
  const [ezberStatus, setEzberStatus] = useState<Record<string, 'todo' | 'learning' | 'done'>>({});

  useEffect(() => {
    const stored = localStorage.getItem('cennet_bahcesi_ezber_status');
    if (stored) {
      try {
        setEzberStatus(JSON.parse(stored));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsFocused(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setIsFocused]);

  const handleUpdateStatus = (id: string, status: 'todo' | 'learning' | 'done') => {
    const updated = { ...ezberStatus, [id]: status };
    setEzberStatus(updated);
    localStorage.setItem('cennet_bahcesi_ezber_status', JSON.stringify(updated));
    if (status === 'done') {
      playSound('success');
    } else {
      playSound('tick');
    }
  };

  const getStatusColorClass = (id: string) => {
    const status = ezberStatus[id] || 'todo';
    if (status === 'done') return 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400';
    if (status === 'learning') return 'border-amber-500 bg-amber-500/10 text-amber-600 dark:text-amber-400';
    return 'border-slate-300 dark:border-slate-650 bg-slate-100 dark:bg-slate-800 text-slate-500';
  };

  const handleOpenStudyModal = (item: EzberItem) => {
    setSelectedItemForModal(item);
    setModalTab('arabic');
    playSound('tick');
  };

  const handleCloseStudyModal = () => {
    setSelectedItemForModal(null);
    setIsFocused(false);
    playSound('fail');
  };

  const filteredItems = EZBER_ITEMS.filter(item => item.kategori === activeCategory);

  const renderTabContent = () => {
    if (!selectedItemForModal) return null;

    if (modalTab === 'arabic') {
      return (
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#faf6ef] dark:bg-[#0f141c]/40 select-text">
          <div className="max-w-2xl mx-auto w-full space-y-6">
            {selectedItemForModal.kategori === 'sureler' && selectedItemForModal.id !== 'fatiha' && (
              <div className="text-center py-4 text-3xl font-serif text-emerald-850 dark:text-emerald-450 select-none border-b border-amber-900/5 pb-5">
                بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّح۪يمِ
              </div>
            )}
            <div
              className="text-right text-3xl sm:text-4xl leading-[2.3] sm:leading-[2.5] font-serif text-slate-900 dark:text-slate-100 font-bold tracking-wide select-text whitespace-normal"
              dir="rtl"
              style={{ fontFamily: "'Amiri', 'Traditional Arabic', 'Noto Naskh Arabic', serif", wordSpacing: '2px' }}
            >
              {selectedItemForModal.satirlar.map((satir, idx) => (
                <React.Fragment key={idx}>
                  <span>{satir.arapca}</span>
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border-2 border-amber-600/30 dark:border-emerald-600/30 bg-amber-50/30 dark:bg-emerald-950/20 text-[10px] font-sans font-black mx-1.5 text-amber-950 dark:text-emerald-350">
                    {idx + 1}
                  </span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (modalTab === 'turkish') {
      return (
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#faf6ef] dark:bg-[#0f141c]/40 select-text">
          <div className="max-w-2xl mx-auto w-full space-y-6">
            <div
              className="text-center text-lg sm:text-xl leading-[2.2] font-sans text-slate-900 dark:text-slate-100 font-medium tracking-wide select-text whitespace-normal"
              dir="ltr"
            >
              {selectedItemForModal.satirlar.map((satir, idx) => (
                <React.Fragment key={idx}>
                  <span className="inline">{satir.okunusu}</span>
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border-2 border-amber-600/30 dark:border-emerald-600/30 bg-amber-50/30 dark:bg-emerald-950/20 text-[9px] font-sans font-black mx-1.5 text-amber-950 dark:text-emerald-350 select-none">
                    {idx + 1}
                  </span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (modalTab === 'meaning') {
      return (
        <div className="flex-1 overflow-y-auto p-6 bg-white dark:bg-slate-900/20 space-y-4">
          {selectedItemForModal.satirlar.map((satir, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700/60 flex gap-3">
              <span className="font-bold text-xs text-slate-400">{idx + 1}</span>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed italic">"{satir.anlami}"</p>
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

  const renderStatusControls = () => {
    if (!selectedItemForModal) return null;
    const currentStatus = ezberStatus[selectedItemForModal.id] || 'todo';
    return (
      <div className="flex items-center bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/50 p-1 rounded-2xl text-[10px] font-black tracking-wide">
        <button
          onClick={() => handleUpdateStatus(selectedItemForModal.id, 'todo')}
          className={`px-4 py-2 rounded-xl cursor-pointer uppercase transition-all ${currentStatus === 'todo' ? 'bg-slate-400 text-white shadow-sm' : 'text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800'
            }`}
        >
          Yeni
        </button>
        <button
          onClick={() => handleUpdateStatus(selectedItemForModal.id, 'learning')}
          className={`px-4 py-2 rounded-xl cursor-pointer uppercase transition-all ${currentStatus === 'learning' ? 'bg-amber-500 text-white shadow-sm' : 'text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800'
            }`}
        >
          Ezberde
        </button>
        <button
          onClick={() => handleUpdateStatus(selectedItemForModal.id, 'done')}
          className={`px-4 py-2 rounded-xl cursor-pointer uppercase transition-all ${currentStatus === 'done' ? 'bg-emerald-500 text-white shadow-sm' : 'text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800'
            }`}
        >
          Bitti
        </button>
      </div>
    );
  };

  const renderStudyFinishButton = () => {
    if (!selectedItemForModal) return null;
    const currentStatus = ezberStatus[selectedItemForModal.id] || 'todo';
    return (
      <button
        onClick={() => {
          if (currentStatus !== 'done') {
            handleUpdateStatus(selectedItemForModal.id, 'done');
          }
          handleCloseStudyModal();
        }}
        className="w-full sm:w-auto px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl text-xs font-black uppercase tracking-wider shadow-md transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
      >
        {currentStatus === 'done' ? 'Çalışmayı Bitir ✓' : 'Ezberledim, Bitir! 🎉'}
      </button>
    );
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-6 select-none relative z-10" id="ezber-portal-root">
      {!isFocused && (
        <>
          <div className="bg-gradient-to-r from-violet-500 via-purple-600 to-fuchsia-600 border-b-6 border-violet-750 p-6 rounded-[2.5rem] shadow-md mb-8 flex items-center justify-between text-white relative overflow-hidden">
            <div className="absolute -top-12 -left-12 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            <div className="relative z-10 flex items-center gap-4">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-md border-2 border-white rounded-3xl flex items-center justify-center text-white shadow-inner">
                <Award className="w-7 h-7" />
              </div>
              <div>
                <h2 className="font-display font-black text-2xl tracking-normal uppercase">
                  EZBER LİSTESİ
                </h2>
                <p className="text-sm font-medium text-white/90">
                  Dualar, kısa sureler ve müezzinlik dualarının takip edildiği ezber takip platformu.
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-2.5 mb-6 overflow-x-auto pb-1 justify-center sm:justify-start">
            <button
              onClick={() => { setActiveCategory('dualar'); playSound('tick'); }}
              className={`px-5 py-3 rounded-2xl text-xs font-black uppercase tracking-wider cursor-pointer shadow-sm transition-all border-3 flex items-center gap-2 shrink-0 ${activeCategory === 'dualar'
                ? 'bg-emerald-500 border-emerald-600 text-white shadow-[0_3px_0_#047857]'
                : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-slate-350 dark:hover:border-slate-600'
                }`}
            >
              Müzik / Namaz Duaları
            </button>
            <button
              onClick={() => { setActiveCategory('sureler'); playSound('tick'); }}
              className={`px-5 py-3 rounded-2xl text-xs font-black uppercase tracking-wider cursor-pointer shadow-sm transition-all border-3 flex items-center gap-2 shrink-0 ${activeCategory === 'sureler'
                ? 'bg-emerald-500 border-emerald-600 text-white shadow-[0_3px_0_#047857]'
                : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-slate-350 dark:hover:border-slate-600'
                }`}
            >
              📖 Kısa Sureler
            </button>
            <button
              onClick={() => { setActiveCategory('muezzinlik'); playSound('tick'); }}
              className={`px-5 py-3 rounded-2xl text-xs font-black uppercase tracking-wider cursor-pointer shadow-sm transition-all border-3 flex items-center gap-2 shrink-0 ${activeCategory === 'muezzinlik'
                ? 'bg-emerald-500 border-emerald-600 text-white shadow-[0_3px_0_#047857]'
                : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-slate-350 dark:hover:border-slate-600'
                }`}
            >
              📢 Ezan & Müezzinlik
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredItems.map((item) => {
              const status = ezberStatus[item.id] || 'todo';
              return (
                <div
                  key={item.id}
                  onClick={() => handleOpenStudyModal(item)}
                  className="bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-700/60 rounded-[2rem] p-5 shadow-sm hover:border-emerald-450 dark:hover:border-emerald-600 hover:shadow-md hover:scale-[1.005] transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border-2 font-bold text-base ${getStatusColorClass(item.id)}`}>
                      {status === 'done' && '✓'}
                      {status === 'learning' && '⌛'}
                      {status === 'todo' && '○'}
                    </div>
                    <div>
                      <h3 className="font-display font-black text-lg text-slate-800 dark:text-slate-100 flex items-center gap-2 flex-wrap">
                        {item.baslik}
                        {item.arapcaName && (
                          <span className="font-serif text-sm font-bold text-slate-400 dark:text-slate-500" dir="rtl">
                            ({item.arapcaName})
                          </span>
                        )}
                      </h3>
                      <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">
                        {item.satirlar.length} Ayet/Satır Uzunluğunda
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto" onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/50 p-1 rounded-2xl text-[10px] font-black tracking-wide">
                      <button
                        onClick={() => handleUpdateStatus(item.id, 'todo')}
                        className={`px-3 py-1.5 rounded-xl cursor-pointer uppercase transition-colors ${status === 'todo' ? 'bg-slate-400 text-white shadow-sm' : 'text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800'
                          }`}
                      >
                        Yeni
                      </button>
                      <button
                        onClick={() => handleUpdateStatus(item.id, 'learning')}
                        className={`px-3 py-1.5 rounded-xl cursor-pointer uppercase transition-colors ${status === 'learning' ? 'bg-amber-500 text-white shadow-sm' : 'text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800'
                          }`}
                      >
                        Ezberde
                      </button>
                      <button
                        onClick={() => handleUpdateStatus(item.id, 'done')}
                        className={`px-3 py-1.5 rounded-xl cursor-pointer uppercase transition-colors ${status === 'done' ? 'bg-emerald-500 text-white shadow-sm' : 'text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800'
                          }`}
                      >
                        Bitti
                      </button>
                    </div>
                    <button
                      onClick={() => handleOpenStudyModal(item)}
                      className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-black uppercase tracking-wider shadow-sm transition-all active:scale-95 cursor-pointer shrink-0"
                    >
                      Çalış ➔
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}

      <AnimatePresence>
        {selectedItemForModal && (
          isFocused ? (
            <div
              key="fullscreen-study"
              className={`fixed inset-0 z-50 flex flex-col p-6 sm:p-10 overflow-y-auto transition-colors duration-500 ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              <div className={`absolute inset-0 z-0 pointer-events-none transition-colors duration-500 ${isDarkMode ? 'bg-slate-950/70 backdrop-blur-[2px]' : 'bg-white/40 backdrop-blur-[2px]'
                }`} />

              <>
                <div className="absolute top-10 left-15 w-44 h-44 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-10 right-15 w-56 h-56 bg-fuchsia-500/5 rounded-full blur-3xl pointer-events-none" />
              </>

              {/* Top controls (Always visible in fullscreen) */}
              <div className={`relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b pb-4 mb-4 transition-colors duration-500 ${isDarkMode ? 'border-slate-800' : 'border-slate-200'
                }`}>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1.5 bg-violet-650 text-white rounded-xl text-[10px] font-black uppercase shadow-md tracking-wider">
                    {selectedItemForModal.kategori === 'dualar' ? 'Dua' : selectedItemForModal.kategori === 'sureler' ? 'Sure' : 'Müezzinlik'}
                  </span>
                  <span className={`text-xs sm:text-sm font-black tracking-tight leading-none uppercase ${isDarkMode ? 'text-slate-200' : 'text-slate-800'
                    }`}>
                    ➔ {selectedItemForModal.baslik} {selectedItemForModal.arapcaName && `(${selectedItemForModal.arapcaName})`}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2.5">
                  <button
                    onClick={togglePlayMusic}
                    className={`px-3 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all hover:scale-105 active:scale-95 cursor-pointer border-2 flex items-center gap-1.5 ${isMusicPlaying
                      ? 'bg-violet-600 hover:bg-violet-750 text-white border-violet-700 shadow-md shadow-violet-500/20'
                      : isDarkMode
                        ? 'bg-slate-850 hover:bg-slate-800 text-slate-300 border-slate-700'
                        : 'bg-white hover:bg-slate-55 text-slate-600 border-slate-200'
                      }`}
                  >
                    {isMusicPlaying ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    {isMusicPlaying ? "Sesi Kapat" : "Sesi Aç"}
                  </button>

                  <button
                    onClick={toggleAnimatedBg}
                    className={`px-3 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all hover:scale-105 active:scale-95 cursor-pointer border-2 flex items-center gap-1.5 ${isDarkMode
                      ? 'bg-slate-850 hover:bg-slate-800 text-slate-305 border-slate-700'
                      : 'bg-white hover:bg-slate-55 text-slate-600 border-slate-200'
                      }`}
                  >
                    {isAnimatedBg ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    {isAnimatedBg ? "Arka Planı Sabitle" : "Arka Planı Hareketlendir"}
                  </button>

                  <button
                    onClick={toggleDarkMode}
                    className={`px-3 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all hover:scale-105 active:scale-95 cursor-pointer border-2 flex items-center gap-1.5 ${isDarkMode
                      ? 'bg-slate-850 hover:bg-slate-800 text-slate-305 border-slate-700'
                      : 'bg-white hover:bg-slate-55 text-slate-600 border-slate-200'
                      }`}
                  >
                    {isDarkMode ? (
                      <>
                        <Sun className="w-4 h-4 text-amber-500" />
                        Aydınlık Mod
                      </>
                    ) : (
                      <>
                        <Moon className="w-4 h-4 text-indigo-500" />
                        Karanlık Mod
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => { setIsFocused(false); playSound('tick'); }}
                    className="px-3 py-2 bg-rose-600 hover:bg-rose-700 text-white text-[10px] font-black uppercase tracking-wider rounded-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5 cursor-pointer shadow-md shadow-rose-600/20 border-2 border-rose-700"
                  >
                    <Minimize2 className="w-4 h-4" /> Tam Ekrandan Çık
                  </button>
                </div>
              </div>

              {/* Study content */}
              <div className="flex-1 flex flex-col min-h-0 relative z-10">
                <div className="my-2 flex gap-3 p-1 bg-slate-100/50 dark:bg-slate-900/45 rounded-2xl max-w-lg mx-auto w-full border border-slate-200 dark:border-slate-800 shrink-0">
                  <button
                    onClick={() => { setModalTab('arabic'); playSound('tick'); }}
                    className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 ${modalTab === 'arabic' ? 'bg-violet-650 text-white shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-200/55 dark:hover:bg-slate-800/40'
                      }`}
                  >
                    📖 Arapça (Mushaf)
                  </button>
                  <button
                    onClick={() => { setModalTab('turkish'); playSound('tick'); }}
                    className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 ${modalTab === 'turkish' ? 'bg-violet-650 text-white shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-200/55 dark:hover:bg-slate-800/40'
                      }`}
                  >
                    🇹🇷 Türkçe Okunuş
                  </button>
                  <button
                    onClick={() => { setModalTab('meaning'); playSound('tick'); }}
                    className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 ${modalTab === 'meaning' ? 'bg-violet-650 text-white shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-200/55 dark:hover:bg-slate-800/40'
                      }`}
                  >
                    📜 Meal
                  </button>
                </div>

                <div className="flex-1 flex flex-col min-h-0 bg-white/70 dark:bg-slate-900/60 rounded-[2rem] border border-white/40 dark:border-slate-800 shadow-xl overflow-hidden mb-4">
                  {renderTabContent()}
                </div>

                <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t pt-4 transition-colors duration-500 border-current/10 shrink-0">
                  {renderStatusControls()}
                  {renderStudyFinishButton()}
                </div>
              </div>
            </div>
          ) : (
            <div
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[9998] flex items-center justify-center p-4"
              onClick={handleCloseStudyModal}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-slate-850 rounded-[2.5rem] border-3 border-emerald-500 shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden"
              >
                <div className="p-6 border-b border-slate-200 dark:border-slate-700/80 flex items-center justify-between shrink-0">
                  <div>
                    <h3 className="font-display font-black text-2xl text-slate-800 dark:text-slate-100 flex items-center gap-2">
                      {selectedItemForModal.baslik}
                      {selectedItemForModal.arapcaName && (
                        <span className="font-serif text-lg font-bold text-slate-400 dark:text-slate-500" dir="rtl">
                          ({selectedItemForModal.arapcaName})
                        </span>
                      )}
                    </h3>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase mt-1">
                      {selectedItemForModal.satirlar.length} Satır • Çalışma Ekranı
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => { setIsFocused(true); playSound('tick'); }}
                      className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer transition-colors"
                    >
                      <Maximize2 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleCloseStudyModal}
                      className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 font-bold hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer transition-colors"
                    >
                      ✕
                    </button>
                  </div>
                </div>

                <div className="px-6 pb-4 pt-2 flex gap-3 border-b border-slate-200 dark:border-slate-700/80 shrink-0 bg-slate-50/50 dark:bg-slate-900/10">
                  <button
                    onClick={() => { setModalTab('arabic'); playSound('tick'); }}
                    className={`flex-1 py-3 px-4 rounded-2xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer border-3 flex items-center justify-center gap-2 ${modalTab === 'arabic'
                      ? 'bg-emerald-500 border-emerald-600 text-white shadow-sm'
                      : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-slate-350 dark:hover:border-slate-600'
                      }`}
                  >
                    📖 Arapça (Mushaf)
                  </button>
                  <button
                    onClick={() => { setModalTab('turkish'); playSound('tick'); }}
                    className={`flex-1 py-3 px-4 rounded-2xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer border-3 flex items-center justify-center gap-2 ${modalTab === 'turkish'
                      ? 'bg-emerald-500 border-emerald-600 text-white shadow-sm'
                      : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-slate-350 dark:hover:border-slate-600'
                      }`}
                  >
                    🇹🇷 Türkçe Okunuş
                  </button>
                  <button
                    onClick={() => { setModalTab('meaning'); playSound('tick'); }}
                    className={`flex-1 py-3 px-4 rounded-2xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer border-3 flex items-center justify-center gap-2 ${modalTab === 'meaning'
                      ? 'bg-emerald-500 border-emerald-600 text-white shadow-sm'
                      : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-slate-350 dark:hover:border-slate-600'
                      }`}
                  >
                    📜 Meal
                  </button>
                </div>

                {renderTabContent()}

                <div className="p-6 border-t border-slate-200 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-900/50 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
                  {renderStatusControls()}
                  {renderStudyFinishButton()}
                </div>
              </motion.div>
            </div>
          )
        )}
      </AnimatePresence>
    </div>
  );
};