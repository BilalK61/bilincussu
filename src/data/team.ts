export type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
};

export const teamIntro = {
  label: "Ekibimiz",
  title: "Farklı uzmanlıkları bir araya getiren ekip",
  paragraphs: [
    "Farklı uzmanlık alanlarını bir araya getiren ekibimiz; yapay zekâ (LLM) mimarileri, kurumsal yazılım geliştirme ve veri güvenliği alanlarında güçlü bir teknik birikime sahiptir. Büyük veri yönetimi, RAG (Gelişmiş Geri Getirme) sistemleri ve ERP entegrasyonları konusundaki deneyimimizle, şirketlerin karmaşık bilgi yönetimi problemlerini uçtan uca çözebilecek yetkinliğe sahibiz.",
    "Ekip olarak, yalnızca teknoloji geliştiren değil aynı zamanda ürünü sahaya indirip ticarileştirebilen bir yapıdayız. Teknik derinliğimizi iş geliştirme ve operasyon kabiliyeti ile birleştirerek, ölçeklenebilir ve sürdürülebilir bir platform inşa ediyoruz.",
  ],
};

export const teamMembers: TeamMember[] = [
  {
    id: "mehmet-fatih-karakus",
    name: "Mehmet Fatih Karakuş",
    role: "Yönetim / İş Geliştirme",
    image: "/ekip/mehmet-fatih-karakus.jpg",
  },
  {
    id: "mustafa-selman-durmaz",
    name: "Mustafa Selman Durmaz",
    role: "Yapay Zeka Geliştirme",
    image: "/ekip/mustafa-selman-durmaz.jpg",
  },
  {
    id: "ahmet-emre-acar",
    name: "Ahmet Emre Acar",
    role: "Pazarlama",
    image: "/ekip/ahmet-emre-acar.jpg",
  },
  {
    id: "emir-bilal-keskin",
    name: "Emir Bilal Keskin",
    role: "Ürün Geliştirme",
    image: "/ekip/emir-bilal-keskin.jpg",
  },
  {
    id: "ibrahim-mengu",
    name: "İbrahim Mengü",
    role: "Kullanıcı Destek",
    image: "/ekip/ibrahim-mengu.png",
  },
];
