export type Language = 'en' | 'tr';

export const dictionary = {
  nav: {
    home: { en: 'Home', tr: 'Ana Sayfa' },
    overview: { en: 'Overview', tr: 'Genel Bakis' },
    useCases: { en: 'Use Cases', tr: 'Kullanim Alanlari' },
    architecture: { en: 'Architecture', tr: 'Mimari' },
    roadmap: { en: 'Roadmap', tr: 'Yol Haritasi' },
    team: { en: 'Team', tr: 'Ekip' },
    whitepaper: { en: 'Whitepaper', tr: 'Teknik Belge' },
    contact: { en: 'Contact', tr: 'İletişim' },
  },
  hero: {
    headline: {
      en: 'When Healthcare Enters the Data Age, Trust Must Be Rebuilt',
      tr: 'Sağlık Sektörü Veri Çağına Girdiğinde, Güven Yeniden İnşa Edilmeli',
    },
    subheadline: {
      en: 'Dngjeiowy is building long-term infrastructure for verifiable, privacy-preserving healthcare data exchange. A foundation for the next generation of clinical trust.',
      tr: 'Dngjeiowy, doğrulanabilir ve gizlilik koruyan sağlık verisi değişimi için uzun vadeli altyapı inşa ediyor. Klinik güvenin gelecek nesli için bir temel.',
    },
    ctaPrimary: { en: 'Read the Whitepaper', tr: 'Teknik Belgeyi Oku' },
    ctaSecondary: { en: 'Talk to Us', tr: 'Bizimle Konuşun' },
  },
  overview: {
    title: { en: 'Core Pillars', tr: 'Temel İlkeler' },
    subtitle: {
      en: 'Three foundational principles that guide our infrastructure design',
      tr: 'Altyapı tasarımını yönlendiren üç temel ilke',
    },
    pillars: [
      {
        title: { en: 'Verifiable Actions', tr: 'Doğrulanabilir Eylemler' },
        description: {
          en: 'Every data access, consent change, and clinical action is cryptographically signed and permanently recorded. No hidden operations.',
          tr: 'Her veri erişimi, onay değişikliği ve klinik eylem kriptografik olarak imzalanır ve kalıcı olarak kaydedilir. Gizli işlem yoktur.',
        },
        icon: 'shield',
      },
      {
        title: { en: 'Data Sovereignty', tr: 'Veri Egemenliği' },
        description: {
          en: 'Patients retain ultimate control over their health records. Institutions access data through explicit, revocable permissions.',
          tr: 'Hastalar sağlık kayıtları üzerinde nihai kontrolü elinde tutar. Kurumlar verilere açık ve geri alınabilir izinlerle erişir.',
        },
        icon: 'user',
      },
      {
        title: { en: 'Ethical Compliance', tr: 'Etik Uyumluluk' },
        description: {
          en: 'Built-in regulatory frameworks ensure HIPAA, GDPR, and emerging AI governance standards are met by design, not afterthought.',
          tr: 'Yerleşik düzenleyici çerçeveler, HIPAA, GDPR ve gelişen yapay zeka yönetişim standartlarının tasarımdan itibaren karşılanmasını sağlar.',
        },
        icon: 'scale',
      },
    ],
  },
  useCases: {
    title: { en: 'Use Cases', tr: 'Kullanım Alanları' },
    subtitle: {
      en: 'Real-world applications transforming healthcare data management',
      tr: 'Sağlık veri yönetimini dönüştüren gerçek dünya uygulamaları',
    },
    cases: [
      {
        title: { en: 'Hospital Collaboration', tr: 'Hastane İş Birliği' },
        description: {
          en: 'Seamless, secure data sharing between healthcare institutions without compromising patient privacy or regulatory compliance.',
          tr: 'Sağlık kurumları arasında hasta gizliliğinden veya düzenleyici uyumluluktan ödün vermeden sorunsuz, güvenli veri paylaşımı.',
        },
        howItHelps: {
          en: 'Reduces duplicate testing, accelerates diagnoses, and improves care coordination.',
          tr: 'Tekrarlanan testleri azaltır, tanıları hızlandırır ve bakım koordinasyonunu iyileştirir.',
        },
      },
      {
        title: { en: 'Clinician Quality Records', tr: 'Klinisyen Kalite Kayıtları' },
        description: {
          en: 'Immutable records of clinical decisions, outcomes, and peer reviews that build verifiable professional reputations.',
          tr: 'Klinik kararlar, sonuçlar ve meslektaş değerlendirmelerinin doğrulanabilir profesyonel itibar oluşturan değiştirilemez kayıtları.',
        },
        howItHelps: {
          en: 'Enables merit-based referrals and transparent quality assessment.',
          tr: 'Liyakate dayalı sevkleri ve şeffaf kalite değerlendirmesini mümkün kılar.',
        },
      },
      {
        title: { en: 'Patient Data Control', tr: 'Hasta Veri Kontrolü' },
        description: {
          en: 'Granular consent management allowing patients to control exactly who sees what, when, and for how long.',
          tr: 'Hastaların tam olarak kimin neyi, ne zaman ve ne kadar süre gördüğünü kontrol etmesine olanak tanıyan ayrıntılı onay yönetimi.',
        },
        howItHelps: {
          en: 'Empowers patients while maintaining institutional access for legitimate care.',
          tr: 'Meşru bakım için kurumsal erişimi korurken hastaları güçlendirir.',
        },
      },
      {
        title: { en: 'Research & Real-World Data', tr: 'Araştırma ve Gerçek Dünya Verileri' },
        description: {
          en: 'Privacy-preserving data access for clinical research, enabling insights from real-world evidence without exposing individual records.',
          tr: 'Bireysel kayıtları ifşa etmeden gerçek dünya kanıtlarından içgörü elde etmeyi sağlayan klinik araştırma için gizlilik koruyan veri erişimi.',
        },
        howItHelps: {
          en: 'Accelerates medical research while maintaining ethical standards.',
          tr: 'Etik standartları korurken tıbbi araştırmayı hızlandırır.',
        },
      },
      {
        title: { en: 'Medical Devices & IoT', tr: 'Tıbbi Cihazlar ve IoT' },
        description: {
          en: 'Secure integration of medical device data streams with verifiable provenance and tamper-proof logging.',
          tr: 'Doğrulanabilir kaynak ve kurcalamaya dayanıklı günlükleme ile tıbbi cihaz veri akışlarının güvenli entegrasyonu.',
        },
        howItHelps: {
          en: 'Ensures device data integrity for diagnostics and regulatory compliance.',
          tr: 'Tanı ve düzenleyici uyumluluk için cihaz veri bütünlüğünü sağlar.',
        },
      },
    ],
  },
  architecture: {
    title: { en: 'System Architecture', tr: 'Sistem Mimarisi' },
    subtitle: {
      en: 'A layered approach to secure, verifiable healthcare data infrastructure',
      tr: 'Güvenli, doğrulanabilir sağlık veri altyapısı için katmanlı bir yaklaşım',
    },
    layers: [
      {
        title: { en: 'Rules & Verification Layer', tr: 'Kurallar ve Doğrulama Katmanı' },
        description: {
          en: 'Smart contracts and verification protocols that enforce access rules and validate actions.',
          tr: 'Erişim kurallarını uygulayan ve eylemleri doğrulayan akıllı sözleşmeler ve doğrulama protokolleri.',
        },
      },
      {
        title: { en: 'On-chain Index Layer', tr: 'Zincir Üstü Endeks Katmanı' },
        description: {
          en: 'Immutable record of data locations, access logs, and consent states without storing sensitive data on-chain.',
          tr: 'Hassas verileri zincir üzerinde depolamadan veri konumları, erişim günlükleri ve onay durumlarının değiştirilemez kaydı.',
        },
      },
      {
        title: { en: 'Off-chain Protected Data Layer', tr: 'Zincir Dışı Korumalı Veri Katmanı' },
        description: {
          en: 'Encrypted health records stored in distributed, compliant storage with cryptographic access controls.',
          tr: 'Kriptografik erişim kontrolleri ile dağıtık, uyumlu depolamada şifrelenmiş sağlık kayıtları.',
        },
      },
      {
        title: { en: 'Privacy & Access Control Layer', tr: 'Gizlilik ve Erişim Kontrol Katmanı' },
        description: {
          en: 'Zero-knowledge proofs and role-based permissions ensuring data privacy while enabling verification.',
          tr: 'Doğrulamayı mümkün kılarken veri gizliliğini sağlayan sıfır bilgi kanıtları ve rol tabanlı izinler.',
        },
      },
      {
        title: { en: 'Reliability & Resilience Layer', tr: 'Güvenilirlik ve Dayanıklılık Katmanı' },
        description: {
          en: 'Redundant infrastructure, disaster recovery, and high-availability systems for mission-critical healthcare operations.',
          tr: 'Kritik sağlık operasyonları için yedekli altyapı, felaket kurtarma ve yüksek kullanılabilirlik sistemleri.',
        },
      },
    ],
  },
  roadmap: {
    title: { en: 'Roadmap', tr: 'Yol Haritası' },
    subtitle: {
      en: 'Our journey toward comprehensive healthcare data infrastructure',
      tr: 'Kapsamlı sağlık veri altyapısına doğru yolculuğumuz',
    },
    phases: [
      {
        year: '2025',
        items: {
          en: [
            'Core protocol development and security audits',
            'Initial pilot partnerships with research institutions',
          ],
          tr: [
            'Çekirdek protokol geliştirme ve güvenlik denetimleri',
            'Araştırma kurumlarıyla ilk pilot ortaklıklar',
          ],
        },
      },
      {
        year: '2026',
        items: {
          en: [
            'Hospital network integration and compliance certification',
            'Patient consent management platform launch',
          ],
          tr: [
            'Hastane ağı entegrasyonu ve uyumluluk sertifikasyonu',
            'Hasta onay yönetimi platformu lansmanı',
          ],
        },
      },
      {
        year: '2027-2028',
        items: {
          en: [
            'Cross-border healthcare data exchange protocols',
            'AI governance and algorithmic accountability frameworks',
          ],
          tr: [
            'Sınır ötesi sağlık veri değişim protokolleri',
            'Yapay zeka yönetişimi ve algoritmik hesap verebilirlik çerçeveleri',
          ],
        },
      },
      {
        year: '2029-2030',
        items: {
          en: [
            'Global healthcare data commons infrastructure',
            'Decentralized clinical trial coordination systems',
          ],
          tr: [
            'Küresel sağlık veri ortaklığı altyapısı',
            'Merkeziyetsiz klinik çalışma koordinasyon sistemleri',
          ],
        },
      },
    ],
  },
  team: {
    title: { en: 'Leadership Team', tr: 'Liderlik Ekibi' },
    subtitle: {
      en: 'Experienced professionals building the future of healthcare data',
      tr: 'Sağlık verisinin geleceğini inşa eden deneyimli profesyoneller',
    },
    members: [
      {
        name: 'Alexander Thorne',
        role: { en: 'Chief Executive Officer', tr: 'Yönetim Kurulu Başkanı' },
        bio: {
          en: 'Former healthcare technology executive with 20+ years in enterprise systems and regulatory compliance.',
          tr: 'Kurumsal sistemler ve düzenleyici uyumluluk alanında 20+ yıllık deneyime sahip eski sağlık teknolojisi yöneticisi.',
        },
        initials: 'AT',
      },
      {
        name: 'Dr. Kenji Sato',
        role: { en: 'Chief Science Officer', tr: 'Bilim Direktörü' },
        bio: {
          en: 'PhD in Biomedical Informatics. Led clinical data initiatives at major research hospitals.',
          tr: 'Biyomedikal Bilişim doktorası. Büyük araştırma hastanelerinde klinik veri girişimlerine liderlik etti.',
        },
        initials: 'KS',
      },
      {
        name: 'Dr. Elena Petrova',
        role: { en: 'Chief Technology Officer', tr: 'Teknoloji Direktörü' },
        bio: {
          en: 'Distributed systems architect. Previously built secure data platforms for pharmaceutical research.',
          tr: 'Dağıtık sistem mimarı. Daha önce ilaç araştırması için güvenli veri platformları kurdu.',
        },
        initials: 'EP',
      },
      {
        name: 'Medical Advisory Board',
        role: { en: 'Clinical Guidance', tr: 'Klinik Rehberlik' },
        bio: {
          en: 'A panel of practicing physicians, bioethicists, and healthcare policy experts ensuring clinical relevance.',
          tr: 'Klinik alakayı sağlayan pratisyen hekimler, biyoetikçi ve sağlık politikası uzmanlarından oluşan bir panel.',
        },
        initials: 'MAB',
      },
    ],
  },
  trust: {
    title: { en: 'Trust & Safety', tr: 'Güven ve Güvenlik' },
    badges: [
      {
        title: { en: 'Privacy-first', tr: 'Gizlilik Öncelikli' },
        description: {
          en: 'Data minimization and encryption by default',
          tr: 'Varsayılan olarak veri minimizasyonu ve şifreleme',
        },
      },
      {
        title: { en: 'Auditable Rules', tr: 'Denetlenebilir Kurallar' },
        description: {
          en: 'All access policies are transparent and verifiable',
          tr: 'Tüm erişim politikaları şeffaf ve doğrulanabilir',
        },
      },
      {
        title: { en: 'Role-based Access', tr: 'Rol Tabanlı Erişim' },
        description: {
          en: 'Granular permissions based on clinical roles',
          tr: 'Klinik rollere dayalı ayrıntılı izinler',
        },
      },
      {
        title: { en: 'Resilience', tr: 'Dayanıklılık' },
        description: {
          en: 'Distributed architecture with no single point of failure',
          tr: 'Tek hata noktası olmayan dağıtık mimari',
        },
      },
    ],
  },
  footer: {
    disclaimer: {
      en: 'This website is for informational purposes only and does not constitute medical advice, investment advice, or an offer to sell securities. DJY is a utility token used solely within the Dngjeiowy ecosystem for network operations.',
      tr: 'Bu web sitesi yalnızca bilgilendirme amaçlıdır ve tıbbi tavsiye, yatırım tavsiyesi veya menkul kıymet satışı teklifi teşkil etmez. DJY, yalnızca Dngjeiowy ekosistemi içinde ağ operasyonları için kullanılan bir sistem tokenidir.',
    },
    copyright: {
      en: '2025 Dngjeiowy Foundation. All rights reserved.',
      tr: '2025 Dngjeiowy Vakfı. Tüm hakları saklıdır.',
    },
  },
  whitepaper: {
    title: { en: 'Technical Whitepaper', tr: 'Teknik Belge' },
    downloadPdf: { en: 'Download PDF', tr: 'PDF Indir' },
    tableOfContents: { en: 'Table of Contents', tr: 'Icerik' },
    sections: [
      {
        id: 'executive-summary',
        title: { en: 'Executive Summary', tr: 'Yonetici Ozeti' },
        content: {
          en: 'Dngjeiowy addresses the fundamental challenge of healthcare data: the need for both privacy and interoperability. Current systems force a false choice between data accessibility and patient protection. Our infrastructure resolves this tension through cryptographic verification, granular consent management, and distributed architecture that ensures no single entity controls the network.\n\nThe healthcare industry processes billions of data points daily, yet most remain siloed, inaccessible for research, and vulnerable to breaches. Dngjeiowy provides the technical foundation for a new paradigm: healthcare data that is simultaneously private, portable, and verifiable.',
          tr: 'Dngjeiowy, saglik verisinin temel sorununu ele alir: hem gizlilik hem de birlikte calisabilirlik ihtiyaci. Mevcut sistemler, veri erisilebilirligi ve hasta korumasi arasinda yanlis bir secim yapilmasini zorlar. Altyapimiz, bu gerilimi kriptografik dogrulama, ayrintili onay yonetimi ve hicbir tek varligin agi kontrol etmemesini saglayan dagitik mimari araciligiyla cozer.\n\nSaglik sektoru gunluk milyarlarca veri noktasi isler, ancak cogu silos halinde kalir, arastirma icin erisilemez ve ihlallere karsi savunmasizdir. Dngjeiowy, yeni bir paradigma icin teknik temel saglar: ayni anda gizli, tasinabilir ve dogrulanabilir saglik verisi.',
        },
      },
      {
        id: 'problem-statement',
        title: { en: 'Problem Statement', tr: 'Sorun Tanimlamasi' },
        content: {
          en: 'Healthcare data infrastructure faces three critical failures:\n\n1. Fragmentation: Patient records are scattered across incompatible systems, preventing comprehensive care and research.\n\n2. Trust Deficit: Data breaches, unauthorized access, and opaque data practices have eroded patient confidence in digital health systems.\n\n3. Regulatory Complexity: HIPAA, GDPR, and emerging AI governance requirements create compliance burdens that stifle innovation while still failing to adequately protect patients.\n\nThese failures are not merely technical. They reflect a fundamental architectural flaw: centralized systems cannot simultaneously serve the interests of patients, providers, researchers, and regulators.',
          tr: 'Saglik veri altyapisi uc kritik basarisizlikla karsi karsiya:\n\n1. Parcalanma: Hasta kayitlari uyumsuz sistemler arasinda dagilmis durumda, kapsamli bakim ve arastirmayi engelliyor.\n\n2. Guven Acigi: Veri ihlalleri, yetkisiz erisim ve opak veri uygulamalari dijital saglik sistemlerine olan hasta guvenini asindirdi.\n\n3. Duzenleyici Karmasiklik: HIPAA, GDPR ve gelisen yapay zeka yonetisim gereksinimleri, hastalari yeterince korumada basarisiz olurken yeniligi engelleyen uyumluluk yukleri yaratiyor.\n\nBu basarisizliklar sadece teknik degil. Temel bir mimari kusuru yansitiyorlar: merkezi sistemler ayni anda hastalarin, saglaycilarin, arastirmacilarin ve duzenleyicilerin cikarlarinai hizmet edemez.',
        },
      },
      {
        id: 'solution-overview',
        title: { en: 'Solution Overview', tr: 'Cozum Genel Bakisi' },
        content: {
          en: 'Dngjeiowy introduces a layered architecture that separates concerns while maintaining cryptographic linkages:\n\nVerification Layer: Smart contracts enforce access rules without storing sensitive data. Every action is logged immutably.\n\nIndex Layer: On-chain pointers reference off-chain data locations, enabling discovery without exposure.\n\nData Layer: Encrypted records remain in compliant storage, accessible only through proper authorization channels.\n\nPrivacy Layer: Zero-knowledge proofs enable verification of claims without revealing underlying data.\n\nThis separation ensures that no single breach can expose patient records, while maintaining the audit trail necessary for regulatory compliance.',
          tr: 'Dngjeiowy, kriptografik baglantilari korurken endiselerci ayiran katmanli bir mimari sunar:\n\nDogrulama Katmani: Akilli sozlesmeler hassas verileri depolamadan erisim kurallarini uygular. Her eylem degistirilemez sekilde kaydedilir.\n\nEndeks Katmani: Zincir uzerindeki isaretciler, ifsa olmadan kesfetmeyi mumkun kilarak zincir disi veri konumlarini referans gosterir.\n\nVeri Katmani: Sifrelenmis kayitlar uyumlu depolamada kalir, yalnizca uygun yetkilendirme kanallari araciligiyla erisilebilir.\n\nGizlilik Katmani: Sifir bilgi kanitleri, temel verileri aciklamadan iddialarin dogrulanmasini mumkun kilar.\n\nBu ayristirma, hicbir tek ihlalin hasta kayitlarini ifsa edememesini saglarken, duzenleyici uyumluluk icin gerekli denetim izini korur.',
        },
      },
      {
        id: 'technical-architecture',
        title: { en: 'Technical Architecture', tr: 'Teknik Mimari' },
        content: {
          en: 'The Dngjeiowy protocol operates across five interconnected layers:\n\nConsensus: Byzantine fault-tolerant consensus ensures network integrity even when some participants behave maliciously.\n\nIdentity: Decentralized identifiers (DIDs) provide pseudonymous yet verifiable identities for all network participants.\n\nStorage: Content-addressed storage with encryption ensures data integrity and availability.\n\nCompute: Secure enclaves and multi-party computation enable processing on encrypted data.\n\nGovernance: On-chain governance mechanisms allow stakeholders to propose and vote on protocol changes.\n\nEach layer is designed for independent evolution, ensuring the system can adapt to new requirements without wholesale replacement.',
          tr: 'Dngjeiowy protokolu bes birbirine bagli katman uzerinde calisir:\n\nKonsensus: Bizans hata toleransli konsensus, bazi katilimcilar kotu niyetli davrandiqinda bile ag butunlugunu saglar.\n\nKimlik: Merkeziyetsiz tanimlayicilar (DID\'ler) tum ag katilimcilari icin takma adli ancak dogrulanabilir kimlikler saglar.\n\nDepolama: Sifreleme ile icerik adresli depolama, veri butunlugunu ve kullanilabilirligini saglar.\n\nIslem: Guvenli enklavelar ve cok tarafli hesaplama, sifrelenmis veriler uzerinde islemeyi mumkun kilar.\n\nYonetisim: Zincir uzerindeki yonetisim mekanizmalari, paydaşlarin protokol degisiklikleri onermesine ve oy vermesine olanak tanir.\n\nHer katman bagimsiz gelisim icin tasarlanmistir, sistemin toptan degistirme olmadan yeni gereksinimlere adapte olabilmesini saglar.',
        },
      },
      {
        id: 'privacy-model',
        title: { en: 'Privacy Model', tr: 'Gizlilik Modeli' },
        content: {
          en: 'Privacy in Dngjeiowy operates on the principle of minimal disclosure:\n\nData Minimization: Only the minimum necessary information is shared for any given operation.\n\nPurpose Limitation: Access grants specify not just who can access data, but for what purpose and duration.\n\nVerifiable Deletion: When consent is revoked, cryptographic key rotation ensures data becomes inaccessible.\n\nZero-Knowledge Proofs: Many operations can be completed by proving properties of data without revealing the data itself.\n\nFor example, a research query might ask "how many patients in this cohort have condition X?" The system can return an aggregate answer without ever exposing individual records.',
          tr: 'Dngjeiowy\'da gizlilik, minimal ifsa ilkesi uzerine calisir:\n\nVeri Minimizasyonu: Herhangi bir islem icin yalnizca minimum gerekli bilgi paylasilir.\n\nAmac Sinirlamasi: Erisim izinleri yalnizca kimin verilere erisebilecegini degil, hangi amac ve sure icin oldugunu belirtir.\n\nDogrulanabilir Silme: Onay iptal edildiginde, kriptografik anahtar rotasyonu verilerin erisilemez hale gelmesini saglar.\n\nSifir Bilgi Kanitleri: Bircok islem, verilerin kendisini ifsa etmeden verilerin ozelliklerini kanitlayarak tamamlanabilir.\n\nOrnegin, bir arastirma sorgusu "bu kohortta kac hastada X durumu var?" diye sorabilir. Sistem, bireysel kayitlari hicbir zaman ifsa etmeden toplam bir cevap dondürebilir.',
        },
      },
      {
        id: 'governance',
        title: { en: 'Governance Framework', tr: 'Yonetisim Cercevesi' },
        content: {
          en: 'Dngjeiowy governance balances multiple stakeholder interests:\n\nPatient Representatives: Ensure privacy and consent mechanisms serve patient needs.\n\nHealthcare Providers: Advocate for clinical utility and workflow integration.\n\nResearchers: Promote data accessibility for legitimate scientific inquiry.\n\nRegulators: Ensure compliance frameworks are maintained and updated.\n\nGovernance decisions are made through a structured proposal process with clear escalation paths. Technical changes require security review. Policy changes require impact assessment.\n\nThe foundation maintains a research fund to support independent security audits, privacy research, and accessibility initiatives.',
          tr: 'Dngjeiowy yonetisimi birden fazla payda cikarini dengeler:\n\nHasta Temsilcileri: Gizlilik ve onay mekanizmalarinin hasta ihtiyaclarina hizmet etmesini saglar.\n\nSaglik Hizmeti Saglayicilari: Klinik faydalilik ve is akisi entegrasyonunu savunur.\n\nArastirmacilar: Mesru bilimsel sorgulama icin veri erisilebilirligini tesvik eder.\n\nDuzenleyiciler: Uyumluluk cercevelerinin korunmasini ve guncellenmesini saglar.\n\nYonetisim kararlari, net yukseltme yollari ile yapilandirilmis bir teklif sureci araciligiyla alinir. Teknik degisiklikler guvenlik incelemesi gerektirir. Politika degisiklikleri etki degerlendirmesi gerektirir.\n\nVakif, bagimsiz guvenlik denetimleri, gizlilik arastirmasi ve erisilebilirlik girisimleri desteklemek icin bir arastirma fonu bulundurur.',
        },
      },
      {
        id: 'token-economics',
        title: { en: 'Network Operations', tr: 'Ag Operasyonlari' },
        content: {
          en: 'The DJY token serves as the utility mechanism for network operations:\n\nTransaction Fees: Operations on the network require small token amounts to prevent spam and compensate validators.\n\nStaking: Validators stake tokens as collateral, ensuring they have skin in the game for network security.\n\nGovernance: Token holders can participate in governance proposals proportional to their stake.\n\nThe token is not designed as an investment vehicle. Its value derives purely from utility within the network. The foundation maintains a treasury for long-term development and does not engage in speculative activities.',
          tr: 'DJY tokeni, ag operasyonlari icin faydali mekanizma olarak hizmet eder:\n\nIslem Ucretleri: Ag uzerindeki islemler, spam\'i onlemek ve dogrulayicilari telafi etmek icin kucuk miktarda token gerektirir.\n\nStaking: Dogrulayicilar, ag guvenligi icin oyunda paylarini saglayarak teminat olarak token stake eder.\n\nYonetisim: Token sahipleri, paylerina orantili olarak yonetisim tekliflerine katilabilir.\n\nToken bir yatirim araci olarak tasarlanmamistir. Degeri tamamen ag icindeki faydaliliktan kaynaklanir. Vakif uzun vadeli gelistirme icin bir hazine bulundurur ve spekulatif faaliyetlerde bulunmaz.',
        },
      },
      {
        id: 'security',
        title: { en: 'Security Considerations', tr: 'Guvenlik Hususlari' },
        content: {
          en: 'Healthcare data demands the highest security standards:\n\nEncryption: AES-256 for data at rest, TLS 1.3 for data in transit, with hardware security module (HSM) key management.\n\nAccess Control: Multi-factor authentication, biometric options, and hardware key support for privileged operations.\n\nAudit Logging: Immutable, tamper-evident logs of all access attempts, successful or failed.\n\nIncident Response: Documented procedures for breach detection, containment, and notification.\n\nBug Bounty: Ongoing security research program with responsible disclosure rewards.\n\nThe system is designed with defense in depth. Compromising any single component should not enable access to patient data.',
          tr: 'Saglik verileri en yuksek guvenlik standartlarini gerektirir:\n\nSifreleme: Bekleyen veriler icin AES-256, aktarimda veriler icin TLS 1.3, donanim guvenlik modulu (HSM) anahtar yonetimi ile.\n\nErisim Kontrolu: Cok faktorlu kimlik dogrulama, biyometrik secenekler ve ayricakli islemler icin donanim anahtari destegi.\n\nDenetim Gunlukleme: Basarili veya basarisiz tum erisim girisimleri, degistirilemez, kurcalanmaya dayanikli gunlukleri.\n\nOlay Mudahalesi: Ihlal tespiti, kontrol altina alma ve bildirim icin belgelenmis prosedurler.\n\nHata Odulu: Sorumlu ifsa odulleri ile devam eden guvenlik arastirma programi.\n\nSistem derinlemesine savunma ile tasarlanmistir. Herhangi bir tek bilesenin tehlikeye atilmasi hasta verilerine erisim saglamıyorsa.',
        },
      },
      {
        id: 'conclusion',
        title: { en: 'Conclusion', tr: 'Sonuc' },
        content: {
          en: 'Healthcare data infrastructure is at an inflection point. The technologies now exist to build systems that are simultaneously private, interoperable, and verifiable. What has been missing is the will to deploy them coherently.\n\nDngjeiowy represents a long-term commitment to this vision. We are not building for short-term speculation but for generational impact. The healthcare system our children inherit should not repeat the privacy failures of the current digital age.\n\nWe invite healthcare institutions, researchers, regulators, and patients to join this effort. The path forward requires collaboration across traditional boundaries. Together, we can rebuild trust in healthcare data.',
          tr: 'Saglik veri altyapisi bir donüm noktasinda. Ayni anda gizli, birlikte calisabilir ve dogrulanabilir sistemler insa etmek icin teknolojiler artik mevcut. Eksik olan, onlari tutarli bir sekilde konuslandirma iradesidir.\n\nDngjeiowy bu vizyona uzun vadeli bir taahhüdü temsil eder. Kisa vadeli spekülasyon icin degil, nesiller boyu etki icin insa ediyoruz. Cocuklarimizin miras alacagi saglik sistemi, mevcut dijital cagin gizlilik basarisizliklarini tekrar etmemeli.\n\nSaglik kurumlari, arastirmacilari, duzenleyicileri ve hastalari bu cabaya katilmaya davet ediyoruz. Ileriye giden yol, geleneksel sinirlarin otesinde is birligi gerektirir. Birlikte, saglik verisine guveni yeniden insa edebiliriz.',
        },
      },
    ],
  },
  contact: {
    title: { en: 'Contact Us', tr: 'Iletisim' },
    subtitle: {
      en: 'Interested in learning more about Dngjeiowy? Get in touch.',
      tr: 'Dngjeiowy hakkinda daha fazla bilgi edinmek ister misiniz? Bize ulasin.',
    },
    form: {
      name: { en: 'Full Name', tr: 'Ad Soyad' },
      email: { en: 'Email Address', tr: 'E-posta Adresi' },
      company: { en: 'Organization (Optional)', tr: 'Kurum (Opsiyonel)' },
      message: { en: 'Message', tr: 'Mesaj' },
      submit: { en: 'Send Message', tr: 'Mesaj Gonder' },
      sending: { en: 'Sending...', tr: 'Gonderiliyor...' },
    },
    validation: {
      nameRequired: { en: 'Name is required', tr: 'Ad gereklidir' },
      emailRequired: { en: 'Email is required', tr: 'E-posta gereklidir' },
      emailInvalid: { en: 'Please enter a valid email', tr: 'Gecerli bir e-posta girin' },
      messageRequired: { en: 'Message is required', tr: 'Mesaj gereklidir' },
    },
    success: {
      en: 'Thank you for your message. We will get back to you soon.',
      tr: 'Mesajiniz icin tesekkur ederiz. En kisa surede size donüs yapacağız.',
    },
    error: {
      en: 'There was an error sending your message. Please try again.',
      tr: 'Mesajiniz gonderilirken bir hata olustu. Lutfen tekrar deneyin.',
    },
    emailPlaceholder: { en: 'contact@dngjeiowy.org', tr: 'contact@dngjeiowy.org' },
  },
};

export function t(key: string, lang: Language): string {
  const keys = key.split('.');
  let value: unknown = dictionary;

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = (value as Record<string, unknown>)[k];
    } else {
      return key;
    }
  }

  if (value && typeof value === 'object' && lang in value) {
    return (value as Record<string, string>)[lang];
  }

  return key;
}
