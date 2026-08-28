import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ImageWithFallback from "../ui/ImageWithFallback";
import { btnDark, btnHeroOutline, floatCard } from "../../styles/styles";
import {
  FloatRing,
  FloatRingDot,
  FloatSquare,
  FloatTriangle,
  FloatSparkle,
  FloatPlus,
  BlobSoft,
} from "../illustrations";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const { t } = useTranslation()
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-accent-100/40 dark:bg-accent-600/10 blur-[120px]" />
        <div className="absolute -bottom-1/3 -left-1/4 w-[600px] h-[600px] rounded-full bg-accent-50/60 dark:bg-accent-500/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pt-32 pb-20 lg:pt-40 lg:pb-28 w-full">
        {/* Floating decorative shapes */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-24 left-6 sm:left-10 rtl:left-auto rtl:right-6 rtl:sm:right-10 text-accent-500/70"
          >
            <FloatRing className="h-12 w-12" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 12, 0], rotate: [0, 20, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-40 right-[42%] hidden md:block rtl:right-auto rtl:left-[42%] text-accent-400/80"
          >
            <FloatTriangle className="h-10 w-10" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/2 left-1/3 hidden lg:block rtl:left-auto rtl:right-1/3 text-accent-300"
          >
            <FloatSparkle className="h-8 w-8" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0], rotate: [0, -15, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-32 left-12 hidden sm:block rtl:left-auto rtl:right-12 text-accent-600/60"
          >
            <FloatSquare className="h-10 w-10" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-[68%] left-[6%] hidden md:block rtl:left-auto rtl:right-[6%] text-accent-500/70"
          >
            <FloatPlus className="h-8 w-8" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="absolute bottom-16 right-1/4 hidden lg:flex rtl:right-auto rtl:left-1/4 text-accent-400/70"
          >
            <FloatRingDot className="h-10 w-10" />
          </motion.div>
          <BlobSoft className="absolute -bottom-24 left-1/3 hidden lg:block w-[560px] h-[560px] text-accent-500" />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl lg:pr-[480px] xl:pr-[520px] rtl:lg:pr-0 rtl:lg:pl-[480px] rtl:xl:pl-[520px]"
        >
          <motion.h1
            variants={item}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold tracking-tight text-dark dark:text-white leading-[1.1]"
          >
            {t("hero.titleLine1")}
            <br />
            {t("hero.titleLine2")}
            <br />
            {t("hero.titleLine3")}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-xl text-lg sm:text-xl text-muted leading-relaxed"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/contact"
              className={`${btnDark} px-7 py-3.5`}
            >
              {t("common.getInTouch")}
            </Link>
            <Link
              to="/projects"
              className={`${btnHeroOutline} px-7 py-3.5`}
            >
              {t("common.viewOurWork")}
            </Link>
          </motion.div>
        </motion.div>

        {/* Hero visual — man actively designing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block absolute right-8 xl:right-12 rtl:right-auto rtl:left-8 rtl:xl:left-12 top-1/2 -translate-y-1/2 w-[380px] xl:w-[440px]"
        >
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-dark/10 dark:shadow-black/30 ring-1 ring-stone-900/5 dark:ring-white/10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80&auto=format&fit=crop"
                alt={t("hero.imageAlt")}
                className="h-full w-full object-cover"
                fallbackClassName="h-full w-full bg-gradient-to-br from-accent-100 to-accent-200 dark:from-accent-900/50 dark:to-accent-800/30 flex items-center justify-center"
                fallbackContent={
                  <div className="text-center space-y-4 p-8">
                    <div className="mx-auto w-20 h-20 rounded-2xl bg-accent-500 flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">{t("hero.fallbackLetter")}</span>
                    </div>
                  </div>
                }
              />
            </div>

            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className={`absolute -bottom-4 left-4 sm:-left-6 ${floatCard} flex items-center gap-3`}
            >
              <div className="h-10 w-10 rounded-lg overflow-hidden shrink-0">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=100&q=80&auto=format&fit=crop"
                  alt={t("hero.floatImageAlt")}
                  className="h-full w-full object-cover"
                  fallbackClassName="h-full w-full bg-accent-100"
                  fallbackContent=""
                />
              </div>
              <div>
                <div className="text-xs font-semibold text-dark">
                  {t("hero.floatCard1Title")}
                </div>
                <div className="text-[10px] text-muted">
                  {t("hero.floatCard1Subtitle")}
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [-3, 3, -3] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className={`absolute top-1/3 left-2 sm:-left-10 ${floatCard} hidden xl:flex items-center gap-3`}
            >
              <div className="flex items-end gap-1 h-8">
                <div className="w-1.5 bg-accent-300 rounded-full h-3" />
                <div className="w-1.5 bg-accent-400 rounded-full h-5" />
                <div className="w-1.5 bg-accent-500 rounded-full h-7" />
                <div className="w-1.5 bg-accent-600 rounded-full h-8" />
              </div>
              <div className="text-xs font-semibold text-green-600">{t("hero.floatCard2Value")}</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}