(() => {
  const translations = {
    ja: {
      meta_title: "Sakura Forge Systems｜Web・AI・動画で価値を創出",
      meta_description: "Sakura Forge Systemsは、Webサイト制作・既存サイト改善・AI業務改善ツールの提案・動画編集など、多様な制作案件に対応します。",
      og_description: "Web制作、既存サイト改善、AIを使った業務改善、動画編集まで。必要な技術を組み合わせて形にします。",
      skip: "本文へ移動", nav_aria: "メインナビゲーション", nav_services: "できること", nav_work: "制作見本", nav_contact: "相談する", language_label: "言語を選択",
      hero_status: "開業準備中", hero_scope: "Web制作・AI業務改善・動画編集", hero_title_top: "新しい技術で、", hero_title_typed: "価値を創出。", hero_title_aria: "新しい技術で、価値を創出。",
      hero_lead: "サイト制作からAIを使った業務改善、動画編集まで。目的に合わせて必要な技術を組み合わせ、日々の仕事で使える形へ仕上げます。", hero_cta: "案件について相談する", hero_services_link: "できることを見る",
      hero_board_aria: "Sakura Forge Systemsの制作イメージ", hero_board_materials: "言葉、設計、コード。", hero_board_build: "ひとつの画面へ組み上げる。",
      services_tag: "できること", services_title_top: "事業の輪郭に合わせて、", services_title_bottom: "最適解を提供します。", services_lead: "制作内容を決まった型へ押し込まず、目的と運用方法から逆算します。",
      web_title: "Webサイト制作", web_desc: "コーポレートサイトや店舗紹介、サービス案内、ポートフォリオまで。目的と閲覧環境に合わせ、迷わず情報へ届く画面を設計・実装します。", web_b1: "構成・文章整理", web_b2: "デザイン・実装", web_b3: "公開環境の設定",
      refine_title: "既存サイトの改善", refine_desc: "情報が古い、スマホで見づらい、更新しにくい。今あるサイトの良い部分を残しながら、伝わり方と使いやすさを整えます。", refine_b1: "表示・導線の見直し", refine_b2: "文章と見た目の整理", refine_b3: "部分改修にも対応",
      ai_title: "AIを使った業務改善ツールの提案", ai_desc: "定型作業や情報整理、問い合わせ対応など、日々の業務を見直し、AIを活用した小さなツールや仕組みをご提案します。", ai_b1: "業務フローの整理", ai_b2: "AI活用・自動化の提案", ai_b3: "ミニツール開発",
      video_title: "動画編集", video_desc: "サービス紹介、SNS投稿、採用・イベント向けなど。素材と目的に合わせ、伝えたい内容が短時間で届く動画に編集します。", video_b1: "カット・構成", video_b2: "テロップ・BGM", video_b3: "縦型動画にも対応",
      other_title: "その他、多様な案件も受け付けています。", other_desc: "内容に応じて柔軟に検討します。構想の段階からお気軽にご相談ください。", other_cta: "相談内容を送る",
      work_tag: "制作見本", work_title_top: "言葉だけでなく、", work_title_bottom: "実際の画面で。", work_update: "随時更新", work_card_title: "業種別サンプルサイト", work_desc: "カフェ、美容室、教室、小売店など、小さな事業を想定した制作見本を公開しています。",
      contact_tag: "お問い合わせ", contact_title_top: "その構想、", contact_title_em: "まずは聞かせてください。", contact_desc: "相談内容・希望時期・参考URLなど、分かる範囲でお送りください。依頼するか決まっていない段階でも構いません。", contact_note: "通常、内容を確認してから数日以内に返信します。", footer_status: "開業・法人設立準備中"
    },
    en: {
      meta_title: "Sakura Forge Systems | Web, AI & Video Solutions", meta_description: "Sakura Forge Systems provides website creation, site improvements, AI workflow tools, video editing, and more.", og_description: "Websites, site improvements, AI workflow solutions, and video editing—combined around your goals.",
      skip: "Skip to content", nav_aria: "Main navigation", nav_services: "Services", nav_work: "Work", nav_contact: "Contact", language_label: "Choose language",
      hero_status: "LAUNCHING SOON", hero_scope: "Web · AI workflow · Video", hero_title_top: "New technology.", hero_title_typed: "New value.", hero_title_aria: "Create new value with new technology.",
      hero_lead: "From websites and AI-powered workflow improvements to video editing, we combine the right technologies and turn them into practical tools for your business.", hero_cta: "Discuss a project", hero_services_link: "View services",
      hero_board_aria: "Sakura Forge Systems production concept", hero_board_materials: "Words, design, code.", hero_board_build: "Built into one clear experience.",
      services_tag: "Services", services_title_top: "Shaped around your business.", services_title_bottom: "Built for the right outcome.", services_lead: "We start with your goals and workflow, not a fixed package.",
      web_title: "Website development", web_desc: "Corporate sites, storefronts, service pages, and portfolios. We design and build responsive experiences that guide people to the information they need.", web_b1: "Structure and copy", web_b2: "Design and development", web_b3: "Launch setup",
      refine_title: "Website improvements", refine_desc: "Outdated content, poor mobile usability, or difficult updates—we preserve what works and improve clarity and usability.", refine_b1: "UX and navigation review", refine_b2: "Copy and visual cleanup", refine_b3: "Partial updates welcome",
      ai_title: "AI workflow improvement tools", ai_desc: "We review repetitive tasks, information handling, and inquiries, then propose focused AI tools and workflows that fit your operation.", ai_b1: "Workflow mapping", ai_b2: "AI and automation plan", ai_b3: "Small tool development",
      video_title: "Video editing", video_desc: "Service introductions, social posts, recruiting, and events. We edit your material into concise videos that communicate quickly and clearly.", video_b1: "Editing and structure", video_b2: "Captions and music", video_b3: "Vertical video support",
      other_title: "We also welcome a wide range of other projects.", other_desc: "We assess each request flexibly. Feel free to contact us while your idea is still taking shape.", other_cta: "Send an inquiry",
      work_tag: "Selected work", work_title_top: "Beyond words.", work_title_bottom: "See it on screen.", work_update: "Updated regularly", work_card_title: "Industry sample websites", work_desc: "Explore sample sites designed for small businesses such as cafés, salons, schools, and retailers.",
      contact_tag: "Contact", contact_title_top: "Have an idea?", contact_title_em: "Let’s talk about it.", contact_desc: "Send whatever you know—your goals, timing, or reference links. You are welcome to contact us before deciding to commission the work.", contact_note: "We usually reply within a few days after reviewing your message.", footer_status: "Preparing for launch and incorporation"
    },
    "zh-CN": {
      meta_title: "Sakura Forge Systems｜网站、AI与视频解决方案", meta_description: "提供网站制作、现有网站优化、AI业务改善工具提案、视频剪辑等多种服务。", og_description: "从网站制作、网站优化到AI业务改善与视频剪辑，为目标组合合适的技术。",
      skip: "跳到正文", nav_aria: "主导航", nav_services: "服务内容", nav_work: "案例", nav_contact: "咨询", language_label: "选择语言",
      hero_status: "筹备开业中", hero_scope: "网站制作・AI业务改善・视频剪辑", hero_title_top: "以新技术，", hero_title_typed: "创造新价值。", hero_title_aria: "以新技术创造新价值。",
      hero_lead: "从网站制作、AI业务改善到视频剪辑，我们根据目标组合合适的技术，并将其打造为真正可用于日常业务的成果。", hero_cta: "咨询项目", hero_services_link: "查看服务",
      hero_board_aria: "Sakura Forge Systems 制作理念", hero_board_materials: "文字、设计、代码。", hero_board_build: "整合为清晰的体验。",
      services_tag: "服务内容", services_title_top: "贴合业务特点，", services_title_bottom: "提供最优解决方案。", services_lead: "不套用固定模板，而是从目标和运营方式出发进行规划。",
      web_title: "网站制作", web_desc: "涵盖企业官网、店铺介绍、服务页面和作品集。根据目标与浏览环境，设计并实现清晰易用的响应式网站。", web_b1: "结构与文案整理", web_b2: "设计与开发", web_b3: "上线环境配置",
      refine_title: "现有网站优化", refine_desc: "针对信息陈旧、手机浏览不便或更新困难等问题，保留原有优点并改善表达与易用性。", refine_b1: "显示与浏览路径优化", refine_b2: "文案与视觉整理", refine_b3: "支持局部改修",
      ai_title: "AI业务改善工具提案", ai_desc: "梳理重复工作、信息整理和客户咨询等日常流程，提出适合业务的小型AI工具与机制。", ai_b1: "业务流程整理", ai_b2: "AI与自动化方案", ai_b3: "小型工具开发",
      video_title: "视频剪辑", video_desc: "适用于服务介绍、社交媒体、招聘与活动。根据素材和目标，剪辑成简洁易懂的视频。", video_b1: "剪辑与结构", video_b2: "字幕与配乐", video_b3: "支持竖屏视频",
      other_title: "也承接其他多种类型的项目。", other_desc: "我们会根据内容灵活评估。即使仍处于构想阶段，也欢迎咨询。", other_cta: "发送咨询",
      work_tag: "制作案例", work_title_top: "不止于文字，", work_title_bottom: "请看实际画面。", work_update: "持续更新", work_card_title: "行业示例网站", work_desc: "公开面向咖啡馆、美容院、教室、零售店等小型业务的示例网站。",
      contact_tag: "联系我们", contact_title_top: "您的构想，", contact_title_em: "请先告诉我们。", contact_desc: "请发送您已确定的需求、期望时间或参考链接。即使尚未决定正式委托，也可以咨询。", contact_note: "通常会在确认内容后的几天内回复。", footer_status: "正在筹备开业与法人设立"
    },
    "zh-TW": {
      meta_title: "Sakura Forge Systems｜網站、AI與影片解決方案", meta_description: "提供網站製作、現有網站改善、AI業務改善工具提案、影片剪輯等多元服務。", og_description: "從網站製作、網站改善到AI業務優化與影片剪輯，依目標組合適合的技術。",
      skip: "跳至主要內容", nav_aria: "主要導覽", nav_services: "服務內容", nav_work: "作品案例", nav_contact: "諮詢", language_label: "選擇語言",
      hero_status: "籌備開業中", hero_scope: "網站製作・AI業務改善・影片剪輯", hero_title_top: "運用新技術，", hero_title_typed: "創造新價值。", hero_title_aria: "運用新技術創造新價值。",
      hero_lead: "從網站製作、AI業務改善到影片剪輯，我們依照目標組合合適的技術，打造真正能用於日常工作的成果。", hero_cta: "諮詢專案", hero_services_link: "查看服務",
      hero_board_aria: "Sakura Forge Systems 製作理念", hero_board_materials: "文字、設計、程式碼。", hero_board_build: "整合成清楚的體驗。",
      services_tag: "服務內容", services_title_top: "貼合事業輪廓，", services_title_bottom: "提供最佳解決方案。", services_lead: "不套用固定範本，而是從目的與營運方式反向規劃。",
      web_title: "網站製作", web_desc: "涵蓋企業網站、店家介紹、服務頁面與作品集。依照目的與瀏覽環境，設計並開發清楚易用的響應式網站。", web_b1: "架構與文案整理", web_b2: "設計與開發", web_b3: "上線環境設定",
      refine_title: "現有網站改善", refine_desc: "針對資訊過時、手機瀏覽不便或難以更新等問題，保留既有優點並改善傳達方式與易用性。", refine_b1: "顯示與瀏覽動線檢視", refine_b2: "文案與視覺整理", refine_b3: "支援局部修改",
      ai_title: "AI業務改善工具提案", ai_desc: "整理重複工作、資訊處理與客戶詢問等日常流程，提出適合營運的小型AI工具與機制。", ai_b1: "業務流程整理", ai_b2: "AI與自動化提案", ai_b3: "小型工具開發",
      video_title: "影片剪輯", video_desc: "適用於服務介紹、社群貼文、招募與活動。依素材與目的，剪輯成簡潔清楚的影片。", video_b1: "剪輯與結構", video_b2: "字幕與配樂", video_b3: "支援直式影片",
      other_title: "也承接其他多元類型的專案。", other_desc: "我們會依內容彈性評估。即使還在構想階段，也歡迎聯絡。", other_cta: "傳送諮詢",
      work_tag: "作品案例", work_title_top: "不只用文字，", work_title_bottom: "直接看實際畫面。", work_update: "持續更新", work_card_title: "產業別範例網站", work_desc: "公開以咖啡館、美容院、教室與零售店等小型事業為情境的範例網站。",
      contact_tag: "聯絡我們", contact_title_top: "您的構想，", contact_title_em: "先和我們聊聊。", contact_desc: "請提供已知的需求、期望時程或參考連結。即使尚未決定正式委託，也可以先諮詢。", contact_note: "通常會在確認內容後的幾天內回覆。", footer_status: "正在籌備開業與公司設立"
    },
    ko: {
      meta_title: "Sakura Forge Systems | 웹·AI·영상 솔루션", meta_description: "웹사이트 제작, 기존 사이트 개선, AI 업무 개선 도구 제안, 영상 편집 등 다양한 프로젝트를 지원합니다.", og_description: "웹 제작부터 AI 업무 개선과 영상 편집까지, 목적에 맞는 기술을 조합합니다.",
      skip: "본문으로 이동", nav_aria: "주요 탐색", nav_services: "서비스", nav_work: "제작 사례", nav_contact: "문의", language_label: "언어 선택",
      hero_status: "오픈 준비 중", hero_scope: "웹 제작・AI 업무 개선・영상 편집", hero_title_top: "새로운 기술로,", hero_title_typed: "가치를 만듭니다.", hero_title_aria: "새로운 기술로 가치를 만듭니다.",
      hero_lead: "웹사이트 제작부터 AI를 활용한 업무 개선과 영상 편집까지, 목적에 맞는 기술을 조합해 실제 업무에 쓰이는 결과물로 완성합니다.", hero_cta: "프로젝트 상담", hero_services_link: "서비스 보기",
      hero_board_aria: "Sakura Forge Systems 제작 이미지", hero_board_materials: "언어, 설계, 코드.", hero_board_build: "하나의 명확한 화면으로 완성합니다.",
      services_tag: "서비스", services_title_top: "사업의 모습에 맞춰,", services_title_bottom: "최적의 해답을 제공합니다.", services_lead: "정해진 틀에 맞추지 않고 목적과 운영 방식에서 역산합니다.",
      web_title: "웹사이트 제작", web_desc: "기업 사이트, 매장 소개, 서비스 안내, 포트폴리오까지. 목적과 이용 환경에 맞춰 필요한 정보에 쉽게 도달하는 반응형 사이트를 제작합니다.", web_b1: "구성과 문안 정리", web_b2: "디자인과 개발", web_b3: "공개 환경 설정",
      refine_title: "기존 사이트 개선", refine_desc: "오래된 정보, 불편한 모바일 화면, 어려운 업데이트 문제를 해결하면서 기존 사이트의 장점은 살립니다.", refine_b1: "화면과 동선 점검", refine_b2: "문안과 디자인 정리", refine_b3: "부분 수정 가능",
      ai_title: "AI 업무 개선 도구 제안", ai_desc: "반복 작업, 정보 정리, 문의 대응 등 일상 업무를 검토하고 운영에 맞는 작은 AI 도구와 방식을 제안합니다.", ai_b1: "업무 흐름 정리", ai_b2: "AI·자동화 제안", ai_b3: "미니 도구 개발",
      video_title: "영상 편집", video_desc: "서비스 소개, SNS, 채용 및 행사 영상까지. 소재와 목적에 맞춰 짧고 명확하게 전달되는 영상으로 편집합니다.", video_b1: "컷 편집과 구성", video_b2: "자막과 배경음악", video_b3: "세로형 영상 지원",
      other_title: "그 밖의 다양한 프로젝트도 받습니다.", other_desc: "내용에 따라 유연하게 검토합니다. 아이디어 단계에서도 편하게 문의해 주세요.", other_cta: "문의 보내기",
      work_tag: "제작 사례", work_title_top: "말뿐이 아니라,", work_title_bottom: "실제 화면으로.", work_update: "수시 업데이트", work_card_title: "업종별 샘플 사이트", work_desc: "카페, 미용실, 학원, 소매점 등 소규모 사업을 위한 샘플 사이트를 공개합니다.",
      contact_tag: "문의", contact_title_top: "그 아이디어를,", contact_title_em: "먼저 들려주세요.", contact_desc: "상담 내용, 희망 일정, 참고 링크 등 아는 범위에서 보내주세요. 의뢰 여부가 정해지지 않은 단계도 괜찮습니다.", contact_note: "내용 확인 후 보통 며칠 안에 답변드립니다.", footer_status: "개업 및 법인 설립 준비 중"
    },
    es: {
      meta_title: "Sakura Forge Systems | Soluciones web, IA y vídeo", meta_description: "Creamos sitios web, mejoramos webs existentes, proponemos herramientas de IA y editamos vídeo.", og_description: "Web, mejora de procesos con IA y edición de vídeo, combinados según tus objetivos.",
      skip: "Ir al contenido", nav_aria: "Navegación principal", nav_services: "Servicios", nav_work: "Proyectos", nav_contact: "Contacto", language_label: "Elegir idioma",
      hero_status: "PRÓXIMA APERTURA", hero_scope: "Web · IA para procesos · Vídeo", hero_title_top: "Nueva tecnología.", hero_title_typed: "Nuevo valor.", hero_title_aria: "Creamos nuevo valor con nueva tecnología.",
      hero_lead: "Desde sitios web y mejoras de procesos con IA hasta edición de vídeo: combinamos la tecnología adecuada y la convertimos en soluciones útiles para tu negocio.", hero_cta: "Hablar de un proyecto", hero_services_link: "Ver servicios",
      hero_board_aria: "Concepto de producción de Sakura Forge Systems", hero_board_materials: "Palabras, diseño, código.", hero_board_build: "Todo unido en una experiencia clara.",
      services_tag: "Servicios", services_title_top: "Adaptados a tu negocio.", services_title_bottom: "La solución adecuada.", services_lead: "Partimos de tus objetivos y tu forma de trabajar, no de un paquete cerrado.",
      web_title: "Desarrollo web", web_desc: "Webs corporativas, comercios, servicios y portfolios. Diseñamos experiencias adaptables que llevan a cada persona a la información que necesita.", web_b1: "Estructura y textos", web_b2: "Diseño y desarrollo", web_b3: "Configuración de publicación",
      refine_title: "Mejora de sitios web", refine_desc: "Actualizamos contenido, experiencia móvil y sistemas difíciles de mantener, conservando todo lo que ya funciona.", refine_b1: "Revisión de navegación", refine_b2: "Textos y diseño", refine_b3: "Mejoras parciales",
      ai_title: "Herramientas de IA para procesos", ai_desc: "Revisamos tareas repetitivas, gestión de información y consultas para proponer pequeñas herramientas y flujos de IA adecuados a tu operación.", ai_b1: "Mapa de procesos", ai_b2: "Plan de IA y automatización", ai_b3: "Desarrollo de herramientas",
      video_title: "Edición de vídeo", video_desc: "Presentaciones de servicios, redes sociales, selección y eventos. Editamos tu material para comunicar con rapidez y claridad.", video_b1: "Montaje y estructura", video_b2: "Subtítulos y música", video_b3: "Vídeo vertical",
      other_title: "También aceptamos muchos otros tipos de proyectos.", other_desc: "Evaluamos cada propuesta con flexibilidad. Puedes escribirnos aunque la idea aún esté tomando forma.", other_cta: "Enviar consulta",
      work_tag: "Proyectos", work_title_top: "Más que palabras.", work_title_bottom: "Míralo en pantalla.", work_update: "Actualización continua", work_card_title: "Webs de muestra por sector", work_desc: "Consulta ejemplos para pequeños negocios como cafeterías, salones, escuelas y comercios.",
      contact_tag: "Contacto", contact_title_top: "¿Tienes una idea?", contact_title_em: "Cuéntanosla.", contact_desc: "Envíanos lo que sepas: objetivos, plazos o enlaces de referencia. Puedes consultarnos antes de decidir si encargas el proyecto.", contact_note: "Normalmente respondemos en unos días tras revisar tu mensaje.", footer_status: "Preparando la apertura y constitución"
    },
    fr: {
      meta_title: "Sakura Forge Systems | Solutions web, IA et vidéo", meta_description: "Création et amélioration de sites web, outils IA pour les processus, montage vidéo et autres projets.", og_description: "Web, amélioration des processus par l’IA et montage vidéo, combinés selon vos objectifs.",
      skip: "Aller au contenu", nav_aria: "Navigation principale", nav_services: "Services", nav_work: "Réalisations", nav_contact: "Contact", language_label: "Choisir la langue",
      hero_status: "OUVERTURE PROCHAINE", hero_scope: "Web · IA métier · Vidéo", hero_title_top: "Nouvelle technologie.", hero_title_typed: "Nouvelle valeur.", hero_title_aria: "Créer une nouvelle valeur grâce aux nouvelles technologies.",
      hero_lead: "Des sites web à l’amélioration des processus par l’IA et au montage vidéo, nous combinons les bonnes technologies pour créer des solutions utiles au quotidien.", hero_cta: "Parler d’un projet", hero_services_link: "Voir les services",
      hero_board_aria: "Concept de production Sakura Forge Systems", hero_board_materials: "Mots, design, code.", hero_board_build: "Réunis dans une expérience claire.",
      services_tag: "Services", services_title_top: "Pensés pour votre activité.", services_title_bottom: "La solution la plus juste.", services_lead: "Nous partons de vos objectifs et de votre fonctionnement, jamais d’une formule imposée.",
      web_title: "Création de sites web", web_desc: "Sites d’entreprise, vitrines, pages de services et portfolios. Nous concevons des expériences responsives qui guident clairement vers l’information utile.", web_b1: "Structure et contenus", web_b2: "Design et développement", web_b3: "Mise en ligne",
      refine_title: "Amélioration de sites existants", refine_desc: "Contenus anciens, mobile peu pratique ou mises à jour difficiles : nous conservons l’essentiel et améliorons la clarté et l’usage.", refine_b1: "Parcours et navigation", refine_b2: "Contenus et identité visuelle", refine_b3: "Améliorations partielles",
      ai_title: "Outils IA pour améliorer les processus", ai_desc: "Nous étudions les tâches répétitives, la gestion d’information et les demandes clients pour proposer des outils IA ciblés.", ai_b1: "Analyse des processus", ai_b2: "Plan IA et automatisation", ai_b3: "Développement de petits outils",
      video_title: "Montage vidéo", video_desc: "Présentation de services, réseaux sociaux, recrutement et événements. Nous transformons vos contenus en vidéos courtes, claires et efficaces.", video_b1: "Montage et structure", video_b2: "Sous-titres et musique", video_b3: "Formats verticaux",
      other_title: "Nous étudions également de nombreux autres projets.", other_desc: "Chaque demande est évaluée avec souplesse. Contactez-nous même si votre idée est encore en cours de définition.", other_cta: "Envoyer une demande",
      work_tag: "Réalisations", work_title_top: "Au-delà des mots.", work_title_bottom: "Voyez le résultat.", work_update: "Mis à jour régulièrement", work_card_title: "Sites exemples par secteur", work_desc: "Découvrez des exemples pensés pour les cafés, salons, écoles, commerces et autres petites entreprises.",
      contact_tag: "Contact", contact_title_top: "Une idée ?", contact_title_em: "Parlons-en.", contact_desc: "Envoyez-nous les éléments disponibles : objectifs, calendrier ou liens de référence. Vous pouvez nous contacter avant toute décision.", contact_note: "Nous répondons généralement sous quelques jours après lecture de votre message.", footer_status: "Préparation de l’ouverture et de la société"
    },
    ru: {
      meta_title: "Sakura Forge Systems | Веб, ИИ и видео", meta_description: "Создание и улучшение сайтов, ИИ-инструменты для бизнеса, видеомонтаж и другие проекты.", og_description: "Сайты, улучшение процессов с ИИ и видеомонтаж — технологии под ваши цели.",
      skip: "Перейти к содержимому", nav_aria: "Основная навигация", nav_services: "Услуги", nav_work: "Работы", nav_contact: "Связаться", language_label: "Выбрать язык",
      hero_status: "СКОРО ОТКРЫТИЕ", hero_scope: "Веб · ИИ для процессов · Видео", hero_title_top: "Новые технологии.", hero_title_typed: "Новая ценность.", hero_title_aria: "Создаём новую ценность с помощью новых технологий.",
      hero_lead: "От сайтов и улучшения процессов с помощью ИИ до видеомонтажа — мы подбираем технологии и превращаем их в практичные решения для вашего бизнеса.", hero_cta: "Обсудить проект", hero_services_link: "Посмотреть услуги",
      hero_board_aria: "Концепция работы Sakura Forge Systems", hero_board_materials: "Слова, дизайн, код.", hero_board_build: "Собираем в единый понятный продукт.",
      services_tag: "Услуги", services_title_top: "Под задачи вашего бизнеса.", services_title_bottom: "Оптимальное решение.", services_lead: "Мы отталкиваемся от целей и рабочих процессов, а не от готового шаблона.",
      web_title: "Разработка сайтов", web_desc: "Корпоративные сайты, страницы компаний и услуг, портфолио. Создаём адаптивные интерфейсы, где легко найти нужную информацию.", web_b1: "Структура и тексты", web_b2: "Дизайн и разработка", web_b3: "Настройка публикации",
      refine_title: "Улучшение существующих сайтов", refine_desc: "Обновляем устаревший контент, мобильную версию и сложные процессы обновления, сохраняя сильные стороны сайта.", refine_b1: "Навигация и сценарии", refine_b2: "Тексты и визуальный стиль", refine_b3: "Точечные доработки",
      ai_title: "ИИ-инструменты для улучшения процессов", ai_desc: "Анализируем повторяющиеся задачи, работу с информацией и обращениями, затем предлагаем подходящие ИИ-инструменты и процессы.", ai_b1: "Анализ процессов", ai_b2: "План ИИ и автоматизации", ai_b3: "Разработка мини-инструментов",
      video_title: "Видеомонтаж", video_desc: "Ролики о сервисах, контент для соцсетей, найма и мероприятий. Собираем материал в короткое и понятное видео.", video_b1: "Монтаж и структура", video_b2: "Субтитры и музыка", video_b3: "Вертикальное видео",
      other_title: "Также принимаем самые разные проекты.", other_desc: "Гибко рассматриваем каждую задачу. Обращайтесь, даже если идея ещё формируется.", other_cta: "Отправить запрос",
      work_tag: "Работы", work_title_top: "Не только слова.", work_title_bottom: "Посмотрите на экране.", work_update: "Регулярно обновляется", work_card_title: "Примеры сайтов по отраслям", work_desc: "Примеры для небольших кафе, салонов, школ, магазинов и других компаний.",
      contact_tag: "Контакты", contact_title_top: "Есть идея?", contact_title_em: "Расскажите нам.", contact_desc: "Пришлите известные детали: цели, сроки или ссылки. Можно обратиться ещё до решения о заказе.", contact_note: "Обычно отвечаем в течение нескольких дней после ознакомления с сообщением.", footer_status: "Подготовка к открытию и регистрации компании"
    },
    vi: {
      meta_title: "Sakura Forge Systems | Giải pháp Web, AI và Video", meta_description: "Thiết kế và cải thiện website, công cụ AI tối ưu công việc, biên tập video và nhiều dự án khác.", og_description: "Web, cải tiến quy trình bằng AI và biên tập video—kết hợp theo mục tiêu của bạn.",
      skip: "Đi đến nội dung", nav_aria: "Điều hướng chính", nav_services: "Dịch vụ", nav_work: "Dự án", nav_contact: "Liên hệ", language_label: "Chọn ngôn ngữ",
      hero_status: "SẮP RA MẮT", hero_scope: "Web · AI cho công việc · Video", hero_title_top: "Công nghệ mới.", hero_title_typed: "Giá trị mới.", hero_title_aria: "Tạo ra giá trị mới bằng công nghệ mới.",
      hero_lead: "Từ website, cải tiến quy trình bằng AI đến biên tập video, chúng tôi kết hợp công nghệ phù hợp thành giải pháp hữu ích cho công việc hằng ngày.", hero_cta: "Trao đổi dự án", hero_services_link: "Xem dịch vụ",
      hero_board_aria: "Ý tưởng sản xuất của Sakura Forge Systems", hero_board_materials: "Ngôn từ, thiết kế, mã nguồn.", hero_board_build: "Kết hợp thành một trải nghiệm rõ ràng.",
      services_tag: "Dịch vụ", services_title_top: "Phù hợp với doanh nghiệp.", services_title_bottom: "Cung cấp giải pháp tối ưu.", services_lead: "Chúng tôi bắt đầu từ mục tiêu và cách vận hành, không ép dự án vào một khuôn cố định.",
      web_title: "Phát triển website", web_desc: "Website doanh nghiệp, cửa hàng, dịch vụ và portfolio. Chúng tôi thiết kế trải nghiệm responsive giúp người dùng nhanh chóng tìm đúng thông tin.", web_b1: "Cấu trúc và nội dung", web_b2: "Thiết kế và phát triển", web_b3: "Thiết lập xuất bản",
      refine_title: "Cải thiện website hiện có", refine_desc: "Xử lý nội dung cũ, trải nghiệm di động kém và khó cập nhật, đồng thời giữ lại những điểm đang hoạt động tốt.", refine_b1: "Rà soát điều hướng", refine_b2: "Chỉnh lý nội dung và hình ảnh", refine_b3: "Hỗ trợ sửa từng phần",
      ai_title: "Công cụ AI cải thiện quy trình", ai_desc: "Chúng tôi rà soát tác vụ lặp lại, xử lý thông tin và phản hồi khách hàng để đề xuất công cụ AI nhỏ, phù hợp với hoạt động.", ai_b1: "Lập sơ đồ quy trình", ai_b2: "Đề xuất AI và tự động hóa", ai_b3: "Phát triển công cụ nhỏ",
      video_title: "Biên tập video", video_desc: "Video giới thiệu dịch vụ, mạng xã hội, tuyển dụng và sự kiện. Chúng tôi biên tập tư liệu thành video ngắn gọn, dễ hiểu.", video_b1: "Cắt dựng và cấu trúc", video_b2: "Phụ đề và nhạc", video_b3: "Hỗ trợ video dọc",
      other_title: "Chúng tôi cũng nhận nhiều loại dự án khác.", other_desc: "Mỗi yêu cầu đều được xem xét linh hoạt. Hãy liên hệ ngay cả khi ý tưởng vẫn đang hình thành.", other_cta: "Gửi yêu cầu",
      work_tag: "Dự án", work_title_top: "Không chỉ bằng lời.", work_title_bottom: "Hãy xem trên màn hình.", work_update: "Cập nhật thường xuyên", work_card_title: "Website mẫu theo ngành", work_desc: "Xem các website mẫu cho quán cà phê, salon, lớp học, cửa hàng và doanh nghiệp nhỏ.",
      contact_tag: "Liên hệ", contact_title_top: "Bạn có ý tưởng?", contact_title_em: "Hãy chia sẻ với chúng tôi.", contact_desc: "Gửi những gì bạn đã biết: mục tiêu, thời gian hoặc đường dẫn tham khảo. Bạn có thể liên hệ trước khi quyết định đặt dự án.", contact_note: "Chúng tôi thường phản hồi trong vài ngày sau khi xem nội dung.", footer_status: "Đang chuẩn bị ra mắt và thành lập công ty"
    },
    hi: {
      meta_title: "Sakura Forge Systems | वेब, AI और वीडियो समाधान", meta_description: "वेबसाइट निर्माण, मौजूदा साइट सुधार, AI कार्य-प्रवाह उपकरण, वीडियो संपादन और अन्य परियोजनाएँ।", og_description: "वेब, AI से कार्य सुधार और वीडियो संपादन—आपके लक्ष्य के अनुसार सही तकनीक।",
      skip: "मुख्य सामग्री पर जाएँ", nav_aria: "मुख्य नेविगेशन", nav_services: "सेवाएँ", nav_work: "कार्य", nav_contact: "संपर्क", language_label: "भाषा चुनें",
      hero_status: "जल्द शुरू हो रहा है", hero_scope: "वेब · AI कार्य सुधार · वीडियो", hero_title_top: "नई तकनीक।", hero_title_typed: "नया मूल्य।", hero_title_aria: "नई तकनीक से नया मूल्य बनाएँ।",
      hero_lead: "वेबसाइट और AI आधारित कार्य-सुधार से लेकर वीडियो संपादन तक, हम सही तकनीकों को मिलाकर आपके व्यवसाय के लिए उपयोगी समाधान बनाते हैं।", hero_cta: "परियोजना पर बात करें", hero_services_link: "सेवाएँ देखें",
      hero_board_aria: "Sakura Forge Systems निर्माण अवधारणा", hero_board_materials: "शब्द, डिज़ाइन, कोड।", hero_board_build: "एक स्पष्ट अनुभव में संयोजित।",
      services_tag: "सेवाएँ", services_title_top: "आपके व्यवसाय के अनुरूप।", services_title_bottom: "सबसे उपयुक्त समाधान।", services_lead: "हम तय पैकेज से नहीं, आपके लक्ष्य और काम करने के तरीके से शुरुआत करते हैं।",
      web_title: "वेबसाइट निर्माण", web_desc: "कॉर्पोरेट साइट, दुकान, सेवा पृष्ठ और पोर्टफोलियो। हम ऐसी responsive वेबसाइट बनाते हैं जहाँ आवश्यक जानकारी आसानी से मिले।", web_b1: "संरचना और सामग्री", web_b2: "डिज़ाइन और विकास", web_b3: "प्रकाशन सेटअप",
      refine_title: "मौजूदा वेबसाइट में सुधार", refine_desc: "पुरानी जानकारी, कठिन मोबाइल अनुभव या मुश्किल अपडेट—हम अच्छी चीज़ों को रखते हुए स्पष्टता और उपयोगिता सुधारते हैं।", refine_b1: "नेविगेशन की समीक्षा", refine_b2: "सामग्री और दृश्य सुधार", refine_b3: "आंशिक सुधार भी उपलब्ध",
      ai_title: "AI कार्य-सुधार उपकरण", ai_desc: "हम दोहराए जाने वाले काम, जानकारी प्रबंधन और ग्राहक प्रश्नों की समीक्षा कर उपयुक्त छोटे AI उपकरण और प्रक्रियाएँ सुझाते हैं।", ai_b1: "कार्य-प्रवाह मानचित्रण", ai_b2: "AI और स्वचालन योजना", ai_b3: "छोटे उपकरणों का विकास",
      video_title: "वीडियो संपादन", video_desc: "सेवा परिचय, सोशल मीडिया, भर्ती और कार्यक्रम। हम आपकी सामग्री को संक्षिप्त और स्पष्ट वीडियो में संपादित करते हैं।", video_b1: "संपादन और संरचना", video_b2: "कैप्शन और संगीत", video_b3: "वर्टिकल वीडियो",
      other_title: "हम कई अन्य प्रकार की परियोजनाएँ भी लेते हैं।", other_desc: "हर अनुरोध पर लचीले ढंग से विचार किया जाता है। विचार अभी बन रहा हो, तब भी संपर्क करें।", other_cta: "पूछताछ भेजें",
      work_tag: "कार्य", work_title_top: "केवल शब्द नहीं।", work_title_bottom: "स्क्रीन पर देखें।", work_update: "नियमित अपडेट", work_card_title: "उद्योग-आधारित नमूना वेबसाइट", work_desc: "कैफ़े, सैलून, कक्षाओं, दुकानों और छोटे व्यवसायों के लिए नमूना साइट देखें।",
      contact_tag: "संपर्क", contact_title_top: "कोई विचार है?", contact_title_em: "हमें बताएँ।", contact_desc: "अपने लक्ष्य, समय-सीमा या संदर्भ लिंक जैसी उपलब्ध जानकारी भेजें। काम देने का निर्णय लेने से पहले भी संपर्क कर सकते हैं।", contact_note: "संदेश देखने के बाद हम आमतौर पर कुछ दिनों में उत्तर देते हैं।", footer_status: "शुरुआत और कंपनी पंजीकरण की तैयारी"
    }
  };

  const supported = Object.keys(translations);
  const storageKey = "sfs-language";
  const languageSelect = document.querySelector("#language-select");

  const normalizeLanguage = (value = "") => {
    const tag = value.replace("_", "-").toLowerCase();
    if (tag.startsWith("zh")) {
      return /(?:hant|tw|hk|mo)/.test(tag) ? "zh-TW" : "zh-CN";
    }
    return supported.find((language) => tag === language.toLowerCase() || tag.startsWith(`${language.toLowerCase()}-`)) || null;
  };

  const savedLanguage = (() => {
    try { return normalizeLanguage(localStorage.getItem(storageKey) || ""); } catch { return null; }
  })();
  const preferredLanguages = navigator.languages?.length ? navigator.languages : [navigator.language];
  const browserLanguage = preferredLanguages.map(normalizeLanguage).find(Boolean);

  const applyLanguage = (language, persist = false) => {
    const locale = supported.includes(language) ? language : "ja";
    const text = { ...translations.ja, ...translations[locale] };
    document.documentElement.lang = locale === "zh-CN" ? "zh-Hans" : locale === "zh-TW" ? "zh-Hant" : locale;
    document.documentElement.dataset.locale = locale;
    document.title = text.meta_title;
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", text.meta_title);

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = text[element.dataset.i18n];
      if (value !== undefined) element.textContent = value;
    });
    document.querySelectorAll("[data-i18n-content]").forEach((element) => {
      const value = text[element.dataset.i18nContent];
      if (value !== undefined) element.setAttribute("content", value);
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      const value = text[element.dataset.i18nAriaLabel];
      if (value !== undefined) element.setAttribute("aria-label", value);
    });
    document.querySelectorAll("[data-i18n-data-type]").forEach((element) => {
      const value = text[element.dataset.i18nDataType];
      if (value !== undefined) element.dataset.type = value;
    });
    const mailSubjects = locale === "ja"
      ? { project: "制作・開発についての相談", other: "その他の案件についての相談", contact: "制作についての相談" }
      : { project: "Project inquiry", other: "Other project inquiry", contact: "General inquiry" };
    document.querySelectorAll("[data-mail-subject]").forEach((element) => {
      const subject = mailSubjects[element.dataset.mailSubject];
      if (subject) element.href = `mailto:contact@sfs.3qra.jp?subject=${encodeURIComponent(subject)}`;
    });

    if (languageSelect) languageSelect.value = locale;
    if (persist) {
      try { localStorage.setItem(storageKey, locale); } catch { /* Storage may be unavailable. */ }
    }
    document.dispatchEvent(new CustomEvent("sfs:languagechange", { detail: { language: locale } }));
  };

  languageSelect?.addEventListener("change", (event) => applyLanguage(event.target.value, true));
  applyLanguage(savedLanguage || browserLanguage || "ja");
})();
