import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Gamepad2 } from 'lucide-react';
// 1. Lottie bileşenini ve JSON dosyasını içe aktarıyoruz
import Lottie from 'lottie-react';
import titleAnimation from '../../public/assets/title.json'; // Klasör yapına göre yolunu (path) gerekirse güncelle

interface GameHubProps {
  isDarkMode?: boolean;
}

export const GameHub: React.FC<GameHubProps> = ({ isDarkMode = false }) => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 select-none" id="game-hub-root">
      {/* Spectacular Heading Banner */}
      <div className="bg-gradient-to-r from-sky-500 via-indigo-600 to-violet-600 border-b-6 border-indigo-750 p-6 rounded-[2.5rem] shadow-md mb-8 flex items-center justify-between text-white relative overflow-hidden">
        <div className="absolute -top-12 -left-12 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        <div className="relative z-10 flex items-center gap-4">
          <div className="w-14 h-14 bg-white/20 backdrop-blur-md border-2 border-white rounded-3xl flex items-center justify-center text-white shadow-inner">
            <Gamepad2 className="w-7 h-7" />
          </div>
          <div>
            <h2 className="font-display font-black text-2xl tracking-normal uppercase">
              OYUN MERKEZİ
            </h2>
            <p className="text-sm font-medium text-white/90">
              Eğlenceli ve interaktif takımlı meclis oyunları alanı.
            </p>
          </div>
        </div>
      </div>

      {/* Premium Waiting Slate Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-slate-800 border-3 border-slate-205 dark:border-slate-700 rounded-[2.5rem] p-12 shadow-lg text-center flex flex-col items-center justify-center min-h-[400px] relative overflow-hidden group"
      >
        {/* Decorative backdrop shapes */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* 2. Zıplayan emojiyi kaldırıp yerine Lottie animasyonunu ekledik */}
        <div className="w-48 h-48 mb-4 flex items-center justify-center overflow-hidden">
          <Lottie
            animationData={titleAnimation}
            loop={true}
            autoplay={true}
            className="w-full h-full"
          />
        </div>

        <h3 className="font-display font-black text-2xl text-slate-800 dark:text-white tracking-tight uppercase flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-sky-550 dark:text-sky-400 animate-pulse" />
          Yeni Oyunlar Çok Yakında!
          <Sparkles className="w-6 h-6 text-sky-550 dark:text-sky-400 animate-pulse" />
        </h3>

        <p className="text-sm text-slate-500 dark:text-slate-400 font-semibold mt-4 max-w-lg leading-relaxed">
          Sınıf içi takım yarışmalarımız ve akıllı tahta uyumlu interaktif oyunlarımız, eğlenceli altyapısıyla çok yakında burada sizlerle buluşacaktır.\n Anlayışınız için teşekkür ederiz.
        </p>

        <div className="mt-8 px-5 py-2.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-750 text-slate-500 dark:text-slate-400 text-xs font-black uppercase tracking-wider rounded-2xl shadow-sm">
          ⏳ HAZIRLIKLAR DEVAM EDİYOR
        </div>
      </motion.div>
    </div>
  );
};