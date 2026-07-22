export const moodleBenefits = [
  {
    title: "Kanıtlanmış altyapı",
    description: "Dünya genelinde 400 milyondan fazla kullanıcıya hizmet veren, 20 yılı aşkın olgun LMS platformu.",
  },
  {
    title: "Açık kaynak güvencesi",
    description: "Vendor lock-in riski yok. Verileriniz ve platformunuz tamamen sizin kontrolünüzde kalır.",
  },
  {
    title: "Zengin eklenti ekosistemi",
    description: "2.000'den fazla Moodle eklentisiyle SCORM, sınav, sertifika ve entegrasyon ihtiyaçlarını hızla karşılıyoruz.",
  },
  {
    title: "Kurumsal ölçeklenebilirlik",
    description: "Binlerce eşzamanlı kullanıcı, yüksek erişilebilirlik ve düzenli güvenlik güncellemeleri.",
  },
];

export const sectors = [
  { name: "Kurumsal Eğitim", description: "Şirket içi onboarding, uyumluluk ve yetenek geliştirme platformları.", gradient: "from-violet-500 to-purple-600", count: "18 proje" },
  { name: "Yükseköğretim", description: "Üniversite ve yüksekokullara özel kampüs LMS entegrasyonları.", gradient: "from-blue-500 to-cyan-600", count: "7 proje" },
  { name: "Bootcamp & Akademi", description: "Teknik eğitim akademileri ve bootcamp platformları.", gradient: "from-emerald-500 to-teal-600", count: "11 proje" },
  { name: "Sağlık & Klinik", description: "Sağlık kuruluşları için sertifikasyon ve zorunlu eğitim sistemleri.", gradient: "from-rose-500 to-pink-600", count: "5 proje" },
  { name: "Finans & Bankacılık", description: "Regülasyon uyumlu eğitim ve sertifikasyon altyapıları.", gradient: "from-amber-500 to-orange-600", count: "9 proje" },
  { name: "Kamu & Belediye", description: "Kamu kurumları için uzaktan eğitim ve sertifika platformları.", gradient: "from-sky-500 to-blue-600", count: "4 proje" },
];

export const portfolioProjects = [
  {
    id: 1,
    client: "Garanti BBVA Akademi",
    sector: "Finans & Bankacılık",
    description: "12.000+ çalışana özel, regülasyon uyumlu kurumsal eğitim platformu. Modüler içerik yönetimi ve otomatik sertifikasyon sistemi.",
    metric: "12.000+",
    metricLabel: "aktif çalışan",
    gradient: "from-orange-500 to-amber-600",
    tags: ["Moodle", "Kurumsal LMS", "SCORM", "SSO"],
  },
  {
    id: 2,
    client: "Bootcamp TR",
    sector: "Bootcamp & Akademi",
    description: "Yazılım geliştirici yetiştiren bootcamp için canlı ders, ödev takibi ve cohort yönetim sistemi.",
    metric: "%340",
    metricLabel: "tamamlama artışı",
    gradient: "from-violet-500 to-purple-700",
    tags: ["Moodle", "Canlı Ders", "Cohort Yönetimi", "Ödev Sistemi"],
  },
  {
    id: 3,
    client: "Yeditepe Üniversitesi",
    sector: "Yükseköğretim",
    description: "ERP entegrasyonu, sınav modülü ve öğrenci portalı içeren üniversite kampüs öğrenme platformu.",
    metric: "18.500+",
    metricLabel: "kayıtlı öğrenci",
    gradient: "from-blue-500 to-cyan-600",
    tags: ["Moodle", "Üniversite LMS", "ERP Entegrasyon", "Sınav Modülü"],
  },
  {
    id: 4,
    client: "Koç Holding Akademi",
    sector: "Kurumsal Eğitim",
    description: "Çoklu şirket ve dil desteği, rol bazlı öğrenme yolları ve gelişmiş analitik dashboard.",
    metric: "35+",
    metricLabel: "şirket grubu",
    gradient: "from-slate-600 to-stone-700",
    tags: ["Multi-tenant", "Çok Dilli", "Analitik"],
  },
  {
    id: 5,
    client: "Memorial Hastaneler Grubu",
    sector: "Sağlık & Klinik",
    description: "Klinik eğitimler, zorunlu sertifikasyon takibi ve akreditasyon raporlama modülü.",
    metric: "8.200+",
    metricLabel: "sağlık personeli",
    gradient: "from-rose-500 to-pink-600",
    tags: ["Sağlık LMS", "Akreditasyon", "Zorunlu Eğitim"],
  },
  {
    id: 6,
    client: "İstanbul Büyükşehir Belediyesi",
    sector: "Kamu & Belediye",
    description: "25.000+ personele uzaktan eğitim, vatandaş eğitim portalı ve yetkinlik yönetim sistemi.",
    metric: "25.000+",
    metricLabel: "personel",
    gradient: "from-sky-500 to-blue-600",
    tags: ["Kamu LMS", "Uzaktan Eğitim", "Vatandaş Portalı"],
  },
];


export const testimonials = [
  {
    name: "Selin Kaya",
    role: "İnsan Kaynakları Direktörü — Garanti BBVA",
    text: "Mevcut LMS'imiz ölçeklenemiyordu. Bilinç Üssü 4 ayda sıfırdan yeni platformumuzu kurdu, SSO entegrasyonunu çözdü ve şu an 12.000 çalışan aktif kullanıyor.",
    rating: 5,
  },
  {
    name: "Ahmet Doğan",
    role: "CTO — Bootcamp TR",
    text: "Cohort yönetimi, canlı ders entegrasyonu ve ödev sistemi hepsini tek platformda istedik. Bilinç Üssü ne istediğimizi anladı, zamanında teslim etti.",
    rating: 5,
  },
  {
    name: "Prof. Dr. Mehtap Yıldız",
    role: "Rektör Yardımcısı — Yeditepe Üniversitesi",
    text: "ERP ile LMS entegrasyonu çok zor bir projeydi. Teknik yetkinlikleri ve proje yönetimleri bizim beklentilerimizin üzerindeydi.",
    rating: 5,
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Keşif & Analiz",
    description: "İhtiyaçlarınızı, mevcut altyapınızı ve hedeflerinizi derinlemesine anlıyoruz. Scope belgesi ve teknik mimari hazırlıyoruz.",
  },
  {
    step: "02",
    title: "Tasarım & Prototip",
    description: "UX araştırması, wireframe ve yüksek doğruluklu Figma prototipleri. Onayınız olmadan tek satır kod yazılmaz.",
  },
  {
    step: "03",
    title: "Geliştirme & Entegrasyon",
    description: "Agile sprint'lerle Moodle özelleştirme, tema geliştirme ve HR, ERP, SSO entegrasyonları.",
  },
  {
    step: "04",
    title: "Test & Yayın",
    description: "Yük testi, kullanıcı kabul testi ve aşamalı yayın. İlk 30 gün yoğun destek dahil.",
  },
];

export const stats = [
  { value: "54+", label: "Teslim Edilen Proje" },
  { value: "180K+", label: "Aktif Kullanıcı" },
  { value: "7 yıl", label: "Sektör Deneyimi" },
  { value: "%97", label: "Müşteri Memnuniyeti" },
];
