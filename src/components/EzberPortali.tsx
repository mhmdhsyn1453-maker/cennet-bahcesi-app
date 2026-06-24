import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, CheckCircle, Circle, HelpCircle, Eye, EyeOff, Award, Sparkles, Star, ChevronDown, ChevronUp, RotateCcw, X } from 'lucide-react';
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

const EZBER_ITEMS: EzberItem[] = [
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
      { arapca: 'وَنُثْن۪ي عَلَيْكَ الْخَيْرَ كُلَّهُ نَشْكُرُكَ وَلَا نَكْفُرُكَ', okunusu: 've nüsnî aleykel-hayra küllehû neşkürük ve lâ nekfürük', anlami: 'Seni bütün hayırlarla överiz. Sana şükrederiz ve Sana asla nankörlük etmeyiz.' },
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
      { arapca: 'اٰمَنْتُ بِاللّٰهِ وَمَلٰٓئِكَتِه۪ وَكُتُبِه۪ وَرُسُلِه۪', okunusu: 'Âmentü billâhi ve melâiketihî ve kütübihî ve rusülihî', anlami: 'Allah\'a, meleklerine, kitaplarına, peygamberlerine inandım.' },
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
      { arapca: 'اَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِاَصْحَابِ الْف۪يلِۜ', okunusu: 'Elem tere keyfe feale rabbüke bi-ashâbil-fîl', anlami: 'Rabbinin, fil sahiplerine ne yaptığını görmedin mi?' },
      { arapca: 'اَلَمْ يَجْعَلْ كَيْدَهُمْ ف۪ي تَضْل۪يلٍۙ', okunusu: 'Elem yec\'al keydehüm fî tadlîl', anlami: 'Onların tuzaklarını boşa çıkarmadı mı?' },
      { arapca: 'وَاَرْسَلَ عَلَيْهِم * طَيْرًا اَبَاب۪يلَۙ', okunusu: 'Ve ersele aleyhim tayran ebâbîl', anlami: 'Onların üzerlerine sürü sürü (ebabil) kuşları gönderdi.' },
      { arapca: 'تَرْم۪يهِمْ بِحِجَارَةٍ مِنْ سِجّ۪يلٍۙ', okunusu: 'Termîhim bi-hıcâratim min siccîl', anlami: 'O kuşlar, fil sahiplerinin üzerlerine çamurdan pişirilmiş taşlar atıyorlardı.' },
      { arapca: 'فَجَعَلَهُمْ كَعَصْفٍ مَأْكُولٍ', okunusu: 'Fe-cealehüm ke-asfim me\'kûl', anlami: 'Nihayet onları yenilmiş ekin yaprağı gibi yaptı.' }
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
      { arapca: 'فَلْيَعْبُدُوا رَبَّ هٰذَا الْبَيْتِۙ', okunusu: 'Felyea\'büdû rabbe hâzel-beyt', anlami: 'artık onlar bu Beyt\'in (Kabe\'nin) Rabbine ibadet etsinler.' },
      { arapca: 'اَلَّذ۪ٓي اَطْعَمَهُمْ مِنْ جُوعٍۙ وَاٰمَنَهُمْ مِنْ خَوْفٍ', okunusu: 'Ellezî at\'amehüm min cûıv-ve âmenehüm min havf', anlami: 'O Rab ki kendilerini açlıktan kurtarıp doyurdu ve her türlü korkudan emin kıldı.' }
    ]
  },
  {
    id: 'maun',
    baslik: 'Maûn Sûresi',
    arapcaName: 'سُورَةُ الْمَاعُونِ',
    kategori: 'sureler',
    satirlar: [
      { arapca: 'اَرَاَيْتَ الَّذ۪ي يُكَذِّبُ بِالدّ۪ينِۜ', okunusu: 'Era\'eytellezî yükezzibü bid-dîn', anlami: 'Gördün mü o hesap gününü yalanlayanı?' },
      { arapca: 'فَذٰلِكَ الَّذ۪ي يَدُعُّ الْيَت۪يمَۙ', okunusu: 'Fe-zâlikellezî yedu\'ul-yetîm', anlami: 'İşte yetimi itip kakan odur;' },
      { arapca: 'وَلَا يَحُضُّ عَلٰى طَعَامِ الْمِسْك۪inِۜ', okunusu: 'Ve lâ yehuddu alâ taâmil-miskîn', anlami: 'yoksulu doyurmaya teşvik etmeyen de odur.' },
      { arapca: 'فَوَيْلٌ لِلْمُصَلّ۪ينَۙ', okunusu: 'Fe-veylül lil-musallîn', anlami: 'Yazıklar olsun o namaz kılanlara ki,' },
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
      { arapca: 'فَصَلِّ لِرَبِّكَ وَانْحَرْۜ', okunusu: 'Fesalli lirabbike venhar', anlami: 'Öyleyse sadece Rabbin için namaz kıl ve kurban kes.' },
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
      { arapca: 'لَٓا اَعْبُdُ مَا تَعْبُدُونَۙ', okunusu: 'Lâ a\'büdü mâ ta\'büdûn', anlami: 'Ben sizin tapmakta olduğunuz şeylere tapmam.' },
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
      { arapca: 'وَرَاَيْتَ النَّاسَ يَدْخُلُونَ ف۪ي د۪ينِ اللّٰهِ اَفْوَاجًاۙ', okunusu: 'Ve raeyten-nâse yedhulûne fî dînillâhi efvâcâ', anlami: 've insanların Allah\'ın dinine dalga dalga girdiğini gördüğünde,' },
      { arapca: 'فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُۜ اِنَّهُ كَانَ تَوَّابًا', okunusu: 'Fesebbıh bihamdi rabbike vestağfirh, innehû kâne tevvâbâ', anlami: 'hemen Rabbini hamd ile tesbih et ve O\'ndan bağışlanma dile. Şüphesiz O, tövbeleri çokça kabul edendir.' }
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
      { arapca: 'ف۪ي ج۪يدِهَا حَبْلٌ مِنْ مَسَدٍ', okunusu: 'Fî cîdihâ hablüm mim-mesed', anlami: 'Onun da boynunda liften örülmüş bir ip olacaktır.' }
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
      { arapca: 'قُل|ُ اَعُوذُ بِرَبِّ الْفَلَقِۙ', okunusu: 'Kul eûzü birabbil-felak', anlami: 'De ki: Sabahın Rabbine sığınırım;' },
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
      { arapca: 'اَلَّذ۪ي يُوَسْوِسُ ف۪ي صُدُورِ النَّاسِۙ', okunusu: 'Ellezî yüvesvisü fî sudûrin-nâs', anlami: 'O ki insanların kalplerine vesvese verir,' },
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

export const EzberPortali: React.FC<{ isDarkMode?: boolean }> = ({ isDarkMode = false }) => {
  const [activeCategory, setActiveCategory] = useState<'dualar' | 'sureler' | 'muezzinlik'>('dualar');
  const [selectedItemForModal, setSelectedItemForModal] = useState<EzberItem | null>(null);
  
  // Progress tracker state
  const [ezberStatus, setEzberStatus] = useState<Record<string, 'todo' | 'learning' | 'done'>>({});
  
  // Friday target tasks (IDs of exactly 3 items)
  const [fridayTaskIds, setFridayTaskIds] = useState<string[]>(['subhaneke', 'ettehiyyatu', 'fatiha']);
  const [tempFridayIds, setTempFridayIds] = useState<string[]>([]);
  const [isEditingFridayTasks, setIsEditingFridayTasks] = useState<boolean>(false);
  const [isFriday, setIsFriday] = useState<boolean>(false);

  useEffect(() => {
    // Load local storage ezber status
    const stored = localStorage.getItem('cennet_bahcesi_ezber_status');
    if (stored) {
      try {
        setEzberStatus(JSON.parse(stored));
      } catch (e) {
        console.error(e);
      }
    }

    // Load Friday tasks
    const storedFriday = localStorage.getItem('cennet_bahcesi_friday_ezber_ids');
    if (storedFriday) {
      try {
        const parsed = JSON.parse(storedFriday);
        if (Array.isArray(parsed) && parsed.length === 3) {
          setFridayTaskIds(parsed);
        }
      } catch (e) {
        console.error(e);
      }
    } else {
      localStorage.setItem('cennet_bahcesi_friday_ezber_ids', JSON.stringify(['subhaneke', 'ettehiyyatu', 'fatiha']));
    }

    // Check if today is Friday (Day 5)
    const today = new Date();
    if (today.getDay() === 5) {
      setIsFriday(true);
    }
  }, []);

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

  const getStatusText = (status: 'todo' | 'learning' | 'done') => {
    if (status === 'done') return '✓ Bitti';
    if (status === 'learning') return '⌛ Ezberde';
    return '○ Yeni';
  };

  const handleStartEditingFridayTasks = () => {
    setTempFridayIds(fridayTaskIds);
    setIsEditingFridayTasks(true);
    playSound('tick');
  };

  const handleSaveFridayTasks = (ids: string[]) => {
    if (ids.length === 3) {
      setFridayTaskIds(ids);
      localStorage.setItem('cennet_bahcesi_friday_ezber_ids', JSON.stringify(ids));
      setIsEditingFridayTasks(false);
      playSound('success');
    }
  };

  const filteredItems = EZBER_ITEMS.filter(item => item.kategori === activeCategory);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-6 select-none relative z-10" id="ezber-portal-root">
      
      {/* 1. Cuma Ödev Seçim Modali */}
      {isEditingFridayTasks && (
        <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white dark:bg-slate-850 rounded-[2.5rem] border-3 border-emerald-500 shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-slate-200 dark:border-slate-700/80 flex items-center justify-between">
              <div>
                <h3 className="font-display font-black text-xl text-slate-800 dark:text-slate-100 flex items-center gap-2">
                  🕌 Cuma Ödevlerini Seç
                </h3>
                <p className="text-xs text-slate-400 dark:text-slate-500 font-bold uppercase mt-1">
                  Tam 3 adet ezber konusu işaretleyin
                </p>
              </div>
              <button 
                onClick={() => { setIsEditingFridayTasks(false); playSound('fail'); }}
                className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 font-bold hover:bg-slate-200 cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* List of items with checkboxes */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {(['dualar', 'sureler', 'muezzinlik'] as const).map((cat) => {
                const itemsInCat = EZBER_ITEMS.filter(x => x.kategori === cat);
                return (
                  <div key={cat} className="space-y-2">
                    <h4 className="text-xs font-black uppercase text-emerald-600 dark:text-emerald-400 tracking-wider">
                      {cat === 'dualar' ? '🕌 Dualar' : cat === 'sureler' ? '📖 Sureler' : '📢 Müezzinlik'}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {itemsInCat.map((item) => {
                        const isSelected = tempFridayIds.includes(item.id);
                        return (
                          <div 
                            key={item.id}
                            onClick={() => {
                              if (isSelected) {
                                setTempFridayIds(prev => prev.filter(x => x !== item.id));
                              } else {
                                if (tempFridayIds.length < 3) {
                                  setTempFridayIds(prev => [...prev, item.id]);
                                } else {
                                  playSound('fail');
                                }
                              }
                              playSound('tick');
                            }}
                            className={`p-3 rounded-2xl border-2 flex items-center gap-3 cursor-pointer transition-all ${
                              isSelected
                                ? 'bg-emerald-500/10 border-emerald-500 text-emerald-700 dark:text-emerald-300'
                                : 'bg-slate-50 dark:bg-slate-805 border-slate-200 dark:border-slate-700 hover:border-slate-300'
                            }`}
                          >
                            <input 
                              type="checkbox"
                              checked={isSelected}
                              readOnly
                              disabled={!isSelected && tempFridayIds.length >= 3}
                              className="accent-emerald-500 cursor-pointer h-4 w-4"
                            />
                            <span className="text-xs font-bold">{item.baslik}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-slate-200 dark:border-slate-700/80 flex items-center justify-between bg-slate-50 dark:bg-slate-900/50">
              <span className="text-xs font-bold text-slate-500">
                Seçilen: <strong className="text-emerald-500">{tempFridayIds.length} / 3</strong>
              </span>
              <button
                onClick={() => handleSaveFridayTasks(tempFridayIds)}
                disabled={tempFridayIds.length !== 3}
                className={`px-6 py-3 font-display font-bold uppercase tracking-wider rounded-2xl text-xs shadow-md transition-all cursor-pointer ${
                  tempFridayIds.length === 3
                    ? 'bg-emerald-500 text-white hover:bg-emerald-600 active:scale-95'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                Ödevleri Kaydet ✓
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Cuma Ezber Hedefleri Kartı (Her Cuma 3 Ezber) */}
      <motion.div 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className={`mb-6 bg-gradient-to-br ${
          isFriday 
            ? 'from-emerald-600 to-teal-700 border-emerald-450 text-white shadow-emerald-500/10' 
            : 'from-white to-slate-50 dark:from-slate-850 dark:to-slate-900 border-slate-200 dark:border-slate-700/60 text-slate-800 dark:text-slate-100 shadow-sm'
        } rounded-[2rem] p-6 shadow-lg border-3 relative overflow-hidden`}
      >
        <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-white/10 rounded-full blur-xl pointer-events-none" />
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b pb-4 mb-4 border-current/10">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-inner ${
              isFriday ? 'bg-white/20' : 'bg-emerald-500/10 text-emerald-500'
            }`}>
              🕌
            </div>
            <div>
              <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${
                isFriday 
                  ? 'bg-emerald-500/30 text-emerald-100 border-emerald-450' 
                  : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800'
              }`}>
                {isFriday ? 'Hayırlı Cumalar • Günün Ezber Ödevi' : 'Haftalık Cuma Ödevi'}
              </span>
              <h3 className="font-display font-black text-lg tracking-tight mt-0.5">
                {isFriday ? 'Bugün Cuma! Ezberlerimizi Dinletme Günü!' : 'Cuma Ezber Hedefleri (Haftalık)'}
              </h3>
            </div>
          </div>
          <button 
            onClick={handleStartEditingFridayTasks}
            className={`px-4 py-2 font-display font-black uppercase tracking-wider rounded-xl text-[10px] shadow-sm transition-all active:scale-95 cursor-pointer border ${
              isFriday 
                ? 'bg-white text-emerald-805 hover:bg-emerald-50 border-white' 
                : 'bg-emerald-500 text-white hover:bg-emerald-600 border-emerald-600'
            }`}
          >
            Ödev Ekle/Değiştir ✎
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {fridayTaskIds.map((id) => {
            const item = EZBER_ITEMS.find(x => x.id === id);
            if (!item) return null;
            const status = ezberStatus[id] || 'todo';
            return (
              <div 
                key={id}
                onClick={() => { setSelectedItemForModal(item); playSound('tick'); }}
                className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex flex-col justify-between hover:scale-[1.02] shadow-sm ${
                  isFriday
                    ? 'bg-white/10 hover:bg-white/15 border-white/20 text-white'
                    : 'bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 border-slate-150 dark:border-slate-700 text-slate-800 dark:text-slate-100'
                }`}
              >
                <div>
                  <span className={`text-[8px] font-black uppercase tracking-wider ${
                    isFriday ? 'text-emerald-250' : 'text-slate-400'
                  }`}>
                    {item.kategori === 'dualar' ? 'Dua' : item.kategori === 'sureler' ? 'Sure' : 'Müezzinlik'}
                  </span>
                  <h4 className="font-display font-black text-sm tracking-tight mt-0.5">{item.baslik}</h4>
                </div>
                <div className="mt-3 flex items-center justify-between border-t pt-2 border-current/10">
                  <span className={`text-[10px] font-bold ${
                    status === 'done' 
                      ? 'text-emerald-400' 
                      : status === 'learning' 
                        ? 'text-amber-400' 
                        : isFriday ? 'text-emerald-100' : 'text-slate-500'
                  }`}>
                    {getStatusText(status)}
                  </span>
                  <span className={`text-[9px] font-black uppercase ${
                    isFriday ? 'text-emerald-200' : 'text-slate-405'
                  }`}>Çalış ➔</span>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Header Title */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="font-display font-black text-3xl text-slate-800 dark:text-slate-100 tracking-tight flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-emerald-500" />
            EZBER PORTALI
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold mt-1 uppercase tracking-wider">
            SÖZLÜ SINAVLAR VE EZBER TAKİP SİSTEMİ
          </p>
        </div>
      </div>

      {/* Main Categories Selector */}
      <div className="flex gap-2.5 mb-6 overflow-x-auto pb-1 justify-center sm:justify-start">
        <button
          onClick={() => { setActiveCategory('dualar'); playSound('tick'); }}
          className={`px-5 py-3 rounded-2xl text-xs font-black uppercase tracking-wider cursor-pointer shadow-sm transition-all border-3 flex items-center gap-2 shrink-0 ${
            activeCategory === 'dualar'
              ? 'bg-emerald-500 border-emerald-600 text-white'
              : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-slate-350 dark:hover:border-slate-600'
          }`}
        >
          🕌 Namaz Duaları
        </button>
        <button
          onClick={() => { setActiveCategory('sureler'); playSound('tick'); }}
          className={`px-5 py-3 rounded-2xl text-xs font-black uppercase tracking-wider cursor-pointer shadow-sm transition-all border-3 flex items-center gap-2 shrink-0 ${
            activeCategory === 'sureler'
              ? 'bg-emerald-500 border-emerald-600 text-white'
              : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-slate-350 dark:hover:border-slate-600'
          }`}
        >
          📖 Kısa Sureler
        </button>
        <button
          onClick={() => { setActiveCategory('muezzinlik'); playSound('tick'); }}
          className={`px-5 py-3 rounded-2xl text-xs font-black uppercase tracking-wider cursor-pointer shadow-sm transition-all border-3 flex items-center gap-2 shrink-0 ${
            activeCategory === 'muezzinlik'
              ? 'bg-emerald-500 border-emerald-600 text-white'
              : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-slate-350 dark:hover:border-slate-600'
          }`}
        >
          📢 Ezan & Müezzinlik
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredItems.map((item) => {
          const status = ezberStatus[item.id] || 'todo';

          return (
            <div 
              key={item.id} 
              onClick={() => { setSelectedItemForModal(item); playSound('tick'); }}
              className="bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-700/60 rounded-[2rem] p-5 shadow-sm hover:border-emerald-450 dark:hover:border-emerald-600 hover:shadow-md hover:scale-[1.005] transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer"
            >
              <div className="flex items-center gap-4 flex-1">
                {/* Status Indicator Icon */}
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

              {/* Right controls */}
              <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto" onClick={(e) => e.stopPropagation()}>
                {/* Progress Selector */}
                <div className="flex items-center bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/50 p-1 rounded-2xl text-[10px] font-black tracking-wide">
                  <button
                    onClick={() => handleUpdateStatus(item.id, 'todo')}
                    className={`px-3 py-1.5 rounded-xl cursor-pointer uppercase transition-colors ${
                      status === 'todo' 
                        ? 'bg-slate-400 text-white shadow-sm' 
                        : 'text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800'
                    }`}
                  >
                    Yeni
                  </button>
                  <button
                    onClick={() => handleUpdateStatus(item.id, 'learning')}
                    className={`px-3 py-1.5 rounded-xl cursor-pointer uppercase transition-colors ${
                      status === 'learning' 
                        ? 'bg-amber-500 text-white shadow-sm' 
                        : 'text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800'
                    }`}
                  >
                    Ezberde
                  </button>
                  <button
                    onClick={() => handleUpdateStatus(item.id, 'done')}
                    className={`px-3 py-1.5 rounded-xl cursor-pointer uppercase transition-colors ${
                      status === 'done' 
                        ? 'bg-emerald-500 text-white shadow-sm' 
                        : 'text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800'
                    }`}
                  >
                    Bitti
                  </button>
                </div>

                {/* Çalış Button */}
                <button 
                  onClick={() => { setSelectedItemForModal(item); playSound('tick'); }}
                  className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-black uppercase tracking-wider shadow-sm transition-all active:scale-95 cursor-pointer shrink-0"
                >
                  Çalış ➔
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* 2. Pop-up Çalışma Modali (Centered Modal) */}
      <AnimatePresence>
        {selectedItemForModal && (
          <div 
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[9998] flex items-center justify-center p-4"
            onClick={() => { setSelectedItemForModal(null); playSound('fail'); }}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-slate-850 rounded-[2.5rem] border-3 border-emerald-500 shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden"
            >
              {/* Modal Header */}
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
                <button 
                  onClick={() => { setSelectedItemForModal(null); playSound('fail'); }}
                  className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 font-bold hover:bg-slate-200 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Modal Content (Lines list) */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {selectedItemForModal.satirlar.map((satir, idx) => (
                  <div 
                    key={idx}
                    className="bg-slate-50/70 dark:bg-slate-800/40 border-2 border-slate-100 dark:border-slate-700/40 rounded-2xl p-4 sm:p-5 flex flex-col gap-3 relative"
                  >
                    {/* Line Number Badge */}
                    <span className="absolute top-4 left-4 w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-750 text-slate-500 dark:text-slate-400 text-[10px] font-black flex items-center justify-center">
                      {idx + 1}
                    </span>

                    {/* Arapça Yazı */}
                    <div className="text-right pr-6 flex justify-end min-h-[40px]">
                      <p className="text-2xl leading-[2.2] font-serif font-black text-slate-800 dark:text-slate-100 select-all" dir="rtl">
                        {satir.arapca}
                      </p>
                    </div>

                    {/* Türkçe Okunuş */}
                    <div className="pl-6 border-l-4 border-emerald-500">
                      <p className="text-sm font-bold text-slate-700 dark:text-slate-200 py-0.5 select-all">
                        {satir.okunusu}
                      </p>
                    </div>

                    {/* Türkçe Meal */}
                    <div className="pl-6 border-l-4 border-sky-500">
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-405 py-0.5 select-all">
                        {satir.anlami}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-slate-200 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-900/50 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
                {/* Progress Selector in Modal */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-400 uppercase">Durum:</span>
                  <div className="flex items-center bg-white dark:bg-slate-800 border border-slate-205 dark:border-slate-750 p-1 rounded-2xl text-xs font-black tracking-wide shadow-sm">
                    {(['todo', 'learning', 'done'] as const).map((statusVal) => (
                      <button
                        key={statusVal}
                        onClick={() => handleUpdateStatus(selectedItemForModal.id, statusVal)}
                        className={`px-4 py-1.5 rounded-xl cursor-pointer uppercase transition-colors ${
                          (ezberStatus[selectedItemForModal.id] || 'todo') === statusVal
                            ? statusVal === 'done' 
                              ? 'bg-emerald-500 text-white shadow-sm'
                              : statusVal === 'learning'
                                ? 'bg-amber-500 text-white shadow-sm'
                                : 'bg-slate-400 text-white shadow-sm'
                            : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700'
                        }`}
                      >
                        {statusVal === 'todo' ? 'Yeni' : statusVal === 'learning' ? 'Ezberde' : 'Bitti'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Status Congratulations Badge */}
                {(ezberStatus[selectedItemForModal.id] || 'todo') === 'done' ? (
                  <div className="bg-emerald-500 text-white rounded-xl px-4 py-2 flex items-center gap-1.5 text-xs font-bold shadow-md animate-bounce">
                    <Award className="w-4 h-4" />
                    <span>Başarıyla Tamamlandı! 🥳</span>
                  </div>
                ) : (
                  <button
                    onClick={() => { setSelectedItemForModal(null); playSound('fail'); }}
                    className="px-6 py-2 bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 font-display font-bold uppercase tracking-wider rounded-xl text-xs hover:bg-slate-800 dark:hover:bg-slate-200 transition-all cursor-pointer"
                  >
                    Çalışmayı Bitir
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
