'use strict';
/*
 * Candidate-focused portfolio layer — approved positioning, 2026-11-15.
 * Public market analysis is presented as a proposed method, NOT as an internal Kia diagnosis.
 * Keep actual outcomes and proposed contributions clearly separated.
 */
(function () {
  if (typeof content === 'undefined' || typeof setLanguage !== 'function') return;
  const approved = {
    ko: {
      nav:['기여 역량','직무 접근','프로젝트','경력','연락처'],
      heroTitle:'시장을 분석하고,<br>제품의 가치를 정리하며,<br><em>현장의 문제를 해결합니다.</em>',
      heroDescription:'한국 본사와 러시아 시장 사이에서 경쟁사 분석, 제품 현지화, 영업 지원을 경험했습니다. 어떤 업무에 기여할 수 있는지 실제 프로젝트로 보여드립니다.',
      heroLabel:'MARKET INTELLIGENCE · PRODUCT LOCALIZATION · SALES ENABLEMENT',
      heroAction:'기여할 수 있는 업무',
      contribution:{
        index:'01 / WHAT I CAN CONTRIBUTE',
        eyebrow:'VALUE PROPOSITION',
        title:'채용 후, <em>어떤 업무를 맡길 수 있을까요?</em>',
        intro:'추상적인 강점 대신, 담당할 수 있는 업무와 이를 뒷받침하는 실제 프로젝트를 연결했습니다.',
        problemLabel:'다루는 업무 과제',solutionLabel:'기여 가능한 업무',proofLabel:'실제 경험으로 증명',
        items:[
          {number:'01',tag:'MARKET INTELLIGENCE',title:'경쟁사와 시장을 체계적으로 읽기',problem:'현지 경쟁 제품의 특징과 고객이 중요하게 생각하는 정보를 어떻게 정리할 것인가?',action:'경쟁사 자료를 조사·비교하고 제품의 차별화 포인트를 구조화합니다.',proof:'DIO 러시아 경쟁사 웹사이트·제품 자료 비교 및 현지화 기획'},
          {number:'02',tag:'PRODUCT LOCALIZATION',title:'본사 제품의 가치를 현지 고객에게 전달하기',problem:'본사의 제품 정보와 현지 판매·인허가 상황이 다를 때 어떻게 정확하게 전달할 것인가?',action:'판매 가능 제품과 향후 제품을 구분하고 현지 언어·고객 관점에 맞게 자료를 재구성합니다.',proof:'러시아 인허가 상태에 따른 카탈로그 2종, USP 포스터 제작'},
          {number:'03',tag:'SALES ENABLEMENT',title:'영업 현장의 반복 업무 개선하기',problem:'패키지 수정·승인 대기와 복잡한 자료 관리에 어떤 대안을 제시할 것인가?',action:'실무자가 바로 활용할 수 있는 도구와 영업 자료를 기획·제작합니다.',proof:'약 15종 플라이어 제작 및 AI 보조 마진 계산기 도입'}
        ]
      },
      market:{
        index:'02 / PRODUCT SPECIALIST APPROACH',
        eyebrow:'MARKET INSIGHT & PROPOSED METHOD',
        title:'러시아 시장을 이해하고,<br><em>상품 담당자의 질문으로 바꾸다.</em>',
        intro:'Product Specialist 직무에 지원하며 제안하는 분석 접근 방식입니다. 실제 회사 내부 문제를 단정한 것이 아니며, 별도 수행 경력으로 기재하지 않았습니다.',
        header:'시장 데이터를 어떻게 실행 가능한 상품 판단으로 연결할까?',
        stages:[
          {step:'01 / RESEARCH',title:'시장과 비교 대상을 정의',text:'차급·고객군을 정하고 공개된 경쟁 차종의 가격, 트림, 주요 사양, 보증 및 판매 조건을 수집합니다.',output:'예상 산출물 · Competitor Benchmark Matrix'},
          {step:'02 / INTERPRET',title:'차별화와 가격 포지셔닝 검토',text:'동일 조건에서 경쟁 모델을 비교하고 고객에게 전달할 가치와 추가 확인할 가정을 구분합니다.',output:'예상 산출물 · Product Positioning Summary'},
          {step:'03 / ENABLE',title:'영업팀이 사용할 정보로 정리',text:'비교 결과를 영업 설명에 활용할 수 있도록 핵심 USP, FAQ, 제품 자료 형태로 재구성합니다.',output:'예상 산출물 · Product Sales Brief'}
        ],
        note:'이 영역은 공개 정보 기반의 직무 접근 제안입니다. KIA의 내부 판매·가격 전략이나 미확인 성과를 주장하지 않습니다.'
      },
      projects:{index:'03 / SELECTED WORK',eyebrow:'REAL PROJECTS · REAL CONTRIBUTIONS',title:'업무 현장에서 발견한 문제를<br><em>실제 결과물로 연결했습니다.</em>',intro:'각 사례는 문제 → 나의 역할 → 실행 → 실제 적용의 흐름으로 정리합니다. 비공개 수치와 자료는 제외했습니다.',
        cases:[
          {line:'문제 → 해결 → 현장 적용',summary:'반복적인 패키지 조건 수정과 승인 지연을 관찰하고, 목표 이익률을 고려한 AI 보조 도구를 제작했습니다.',contribution:'내 역할 · 문제 발견, 계산 도구 기획 및 제작',relevance:'직무 연결 · 가격 관련 업무 이해와 영업 프로세스 개선',asset:'포트폴리오용 데모 화면 · 모델명·가격·마진·수량은 모두 가상'},
          {line:'제품 정보 → 현지화 → 영업 활용',summary:'인허가 및 판매 가능 여부에 따라 카탈로그를 구분하고, 의료진 대상 전문 용어와 USP 자료를 현지화했습니다.',contribution:'내 역할 · 카탈로그 2종, USP 포스터, 약 15종 패키지 플라이어 제작',relevance:'직무 연결 · Product Information, Localization, Sales Assets',asset:'카탈로그 및 USP 포스터 이미지: 공개 승인 후 추가'},
          {line:'경쟁사 분석 → UX 기획 → 사이트 적용',summary:'러시아 고객의 정보 탐색과 세미나 신청 과정을 고려해 본사 가이드라인 안에서 현지화 개선안을 기획했습니다.',contribution:'내 역할 · 경쟁사 조사, 현지화 콘텐츠, 세미나 신청 UX 기획',relevance:'직무 연결 · Market Analysis, Customer Insight, Localization',asset:'전후 비교 화면 및 기획 자료: 공개 승인 후 추가'}
        ]
      }
    },
    ru:{
      nav:['Мой вклад','Подход к роли','Проекты','Опыт','Контакты'],
      heroTitle:'Анализирую рынок,<br>раскрываю ценность продукта<br>и <em>решаю задачи бизнеса.</em>',
      heroDescription:'Опыт анализа конкурентов, локализации продуктов и поддержки продаж между корейским головным офисом и российским рынком. Мои проекты показывают, какие задачи я могу взять на себя.',
      heroLabel:'АНАЛИЗ РЫНКА · ЛОКАЛИЗАЦИЯ · ПОДДЕРЖКА ПРОДАЖ',
      heroAction:'Чем могу быть полезна',
      contribution:{
        index:'01 / WHAT I CAN CONTRIBUTE',eyebrow:'МОЙ ВКЛАД',title:'Какие задачи <em>мне можно доверить?</em>',
        intro:'Вместо общих формулировок — конкретные задачи и подтверждающие их примеры из моей практики.',
        problemLabel:'Задача',solutionLabel:'Чем могу помочь',proofLabel:'Подтверждение из опыта',
        items:[
          {number:'01',tag:'MARKET INTELLIGENCE',title:'Структурировать анализ рынка и конкурентов',problem:'Как сравнивать конкурирующие предложения и понимать, какая информация важна локальным клиентам?',action:'Изучать материалы конкурентов, систематизировать различия и выделять преимущества продукта.',proof:'Анализ российских сайтов и материалов конкурентов для локализации DIO'},
          {number:'02',tag:'PRODUCT LOCALIZATION',title:'Адаптировать ценность продукта для местного рынка',problem:'Как корректно представить продукт, когда ассортимент и регистрационный статус различаются по странам?',action:'Разделять продукты по доступности и адаптировать материалы под местную терминологию и потребности.',proof:'Два каталога с учётом регистрации, материалы по USP для отдела продаж'},
          {number:'03',tag:'SALES ENABLEMENT',title:'Улучшать инструменты и процессы продаж',problem:'Как сократить ручную подготовку предложений и путаницу с большим количеством материалов?',action:'Разрабатывать практичные инструменты и понятные коммерческие материалы для отдела продаж.',proof:'Около 15 флаеров и калькулятор маржи с поддержкой ИИ'}
        ]
      },
      market:{
        index:'02 / PRODUCT SPECIALIST APPROACH',eyebrow:'АНАЛИЗ РЫНКА · ПРЕДЛАГАЕМЫЙ ПОДХОД',
        title:'От понимания российского рынка<br>к <em>продуктовым решениям.</em>',
        intro:'Мой предполагаемый подход к задачам Product Specialist. Это не оценка внутренних проблем компании и не проект, который я уже выполняла.',
        header:'Как превратить рыночные данные в конкретные действия?',
        stages:[
          {step:'01 / RESEARCH',title:'Определить рынок и конкурентные модели',text:'Выбрать сегмент и собрать публичные данные о ценах, комплектациях, характеристиках, гарантиях и условиях продажи.',output:'Пример результата · Competitor Benchmark Matrix'},
          {step:'02 / INTERPRET',title:'Оценить позиционирование и отличия',text:'Сопоставить сопоставимые комплектации, выделить ценностные преимущества и отделить факты от гипотез.',output:'Пример результата · Product Positioning Summary'},
          {step:'03 / ENABLE',title:'Подготовить материалы для отдела продаж',text:'Перевести результаты сравнений в краткие описания USP, FAQ и удобные продуктовые материалы.',output:'Пример результата · Product Sales Brief'}
        ],
        note:'Концепция для роли Product Specialist, основанная на открытых данных. Здесь нет утверждений о внутренних планах Kia или непроверенных результатах.'
      },
      projects:{index:'03 / SELECTED WORK',eyebrow:'РЕАЛЬНЫЕ ПРОЕКТЫ · КОНКРЕТНЫЙ ВКЛАД',title:'От выявления проблемы<br>к <em>рабочему решению.</em>',intro:'Каждый кейс раскрывает задачу, мою роль, действия и фактическое применение. Конфиденциальные показатели не публикуются.',
        cases:[
          {line:'Проблема → решение → применение',summary:'Заметив частые изменения условий пакетов и задержки согласования, я создала инструмент для расчёта вариантов с учётом целевой маржи.',contribution:'Моя роль · Выявление проблемы, концепция и разработка инструмента',relevance:'Для Product Specialist · Понимание ценовых вопросов и улучшение процессов',asset:'Демо-экраны для портфолио · все модели, цены, маржа и количества вымышлены'},
          {line:'Информация → локализация → продажи',summary:'Разделила каталоги по статусу регистрации и доступности продукции; адаптировала терминологию и материалы с USP.',contribution:'Моя роль · 2 каталога, USP-постеры, около 15 флаеров',relevance:'Для Product Specialist · Информация о продукте, локализация, поддержка продаж',asset:'Каталоги и постеры: после согласования публикации'},
          {line:'Анализ → UX → внедрение',summary:'На основе анализа конкурентов предложила изменения контента и пути регистрации на семинары с учётом бренд-стандартов.',contribution:'Моя роль · Анализ конкурентов, контент и планирование UX',relevance:'Для Product Specialist · Анализ рынка, понимание клиентов, локализация',asset:'Сравнение интерфейсов: после согласования публикации'}
        ]
      }
    },
    en:{
      nav:['My Contribution','My Approach','Projects','Experience','Contact'],
      heroTitle:'I analyze markets,<br>clarify product value,<br>and <em>solve operational problems.</em>',
      heroDescription:'Hands-on experience in competitor research, product localization, and sales support between a Korean headquarters and the Russian market. Explore the work I can contribute—and the projects behind it.',
      heroLabel:'MARKET INTELLIGENCE · PRODUCT LOCALIZATION · SALES ENABLEMENT',
      heroAction:'What I Can Contribute',
      contribution:{
        index:'01 / WHAT I CAN CONTRIBUTE',eyebrow:'VALUE PROPOSITION',title:'What can I <em>contribute to your team?</em>',
        intro:'Specific responsibilities linked to evidence from projects I have actually delivered, rather than generic claims.',
        problemLabel:'Business challenge',solutionLabel:'How I can contribute',proofLabel:'Evidence from my work',
        items:[
          {number:'01',tag:'MARKET INTELLIGENCE',title:'Make competitor and market research actionable',problem:'How can teams compare competing products and identify what local customers need to know?',action:'Research and structure competitor materials and communicate meaningful points of differentiation.',proof:'Russian competitor website and product-content analysis at DIO'},
          {number:'02',tag:'PRODUCT LOCALIZATION',title:'Communicate product value for the local market',problem:'How should product information be managed when local availability and regulatory status differ?',action:'Organize product information by availability and adapt materials for local terminology and customers.',proof:'Two regulatory-status catalogues and USP sales materials'},
          {number:'03',tag:'SALES ENABLEMENT',title:'Improve tools and workflows used by sales teams',problem:'How can repetitive package revisions and complex materials be made easier to manage?',action:'Create practical tools and clearer information that support day-to-day sales work.',proof:'Approximately 15 package flyers and an AI-assisted margin calculator'}
        ]
      },
      market:{
        index:'02 / PRODUCT SPECIALIST APPROACH',eyebrow:'MARKET INSIGHT & PROPOSED METHOD',
        title:'From Russian market context<br>to <em>product decisions.</em>',
        intro:'A proposed method for Product Specialist work. This is not a diagnosis of Kia’s internal challenges and is not presented as completed professional experience.',
        header:'How would I turn market information into practical deliverables?',
        stages:[
          {step:'01 / RESEARCH',title:'Define the market and comparable models',text:'Select a segment and collect public data on prices, trims, key features, warranty terms, and purchasing conditions.',output:'Illustrative deliverable · Competitor Benchmark Matrix'},
          {step:'02 / INTERPRET',title:'Evaluate product differentiation',text:'Compare like-for-like configurations, clarify customer value, and separate verified facts from assumptions.',output:'Illustrative deliverable · Product Positioning Summary'},
          {step:'03 / ENABLE',title:'Turn insights into sales-ready assets',text:'Translate comparisons into concise USPs, FAQs, and easy-to-use product information for sales teams.',output:'Illustrative deliverable · Product Sales Brief'}
        ],
        note:'An illustrative approach using public information. No claims about Kia’s internal sales strategy, confidential pricing, or unverified results.'
      },
      projects:{index:'03 / SELECTED WORK',eyebrow:'REAL PROJECTS · REAL CONTRIBUTIONS',title:'From an observed challenge<br>to <em>a practical result.</em>',intro:'Each case follows the challenge, my role, execution, and real-world application. Confidential figures are excluded.',
        cases:[
          {line:'Challenge → solution → adoption',summary:'After observing repeated package revisions and approval delays, I built an AI-assisted calculator for configurations based on target profitability.',contribution:'My role · Identifying the problem, planning and building the tool',relevance:'Role relevance · Pricing-related reasoning and sales workflow improvement',asset:'Recreated demo UI · all model names, prices, margins and quantities are fictional'},
          {line:'Product information → localization → sales',summary:'Separated catalogues by regulatory and sales availability and localized technical language and product USP materials.',contribution:'My role · 2 catalogues, USP posters, approximately 15 package flyers',relevance:'Role relevance · Product information, localization, sales assets',asset:'Catalogues and USP visuals: pending publication approval'},
          {line:'Research → UX planning → implementation',summary:'Used competitor research to plan Russian customer-focused website content and simpler seminar registration within brand guidelines.',contribution:'My role · Competitor research, localized content, registration UX planning',relevance:'Role relevance · Market analysis, customer insight, localization',asset:'Before-and-after screenshots: pending publication approval'}
        ]
      }
    }
  };
  const esc = (val) => String(val).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const main = document.querySelector('main');
  const about = document.getElementById('about');
  const exp = document.getElementById('experience');
  const proj = document.getElementById('projects');
  const contrib = document.createElement('section');
  contrib.className = 'section contrib-section';
  contrib.id = 'contribution';
  contrib.setAttribute('aria-labelledby','contribution-title');
  const market = document.createElement('section');
  market.className = 'section market-section';
  market.id = 'market-approach';
  market.setAttribute('aria-labelledby','market-title');
  main.insertBefore(contrib,about);
  main.insertBefore(market,about);
  main.insertBefore(proj,about);
  main.insertBefore(exp,about);
  const numbering = [
    ['#experience .section-number','04 / EXPERIENCE'],
    ['#about .section-number','05 / ABOUT'],
    ['#expertise .section-number','06 / EXPERTISE'],
    ['#education .section-number','07 / EDUCATION']
  ];
  numbering.forEach(([selector,label])=>{const el=document.querySelector(selector);if(el)el.textContent=label;});
  const contactSectionLabel=document.querySelector('#contact .eyebrow');
  if(contactSectionLabel) contactSectionLabel.textContent='08 / CONTACT';
  const navIds = ['contribution','market-approach','projects','experience','contact'];
  document.querySelectorAll('.desktop-nav,.mobile-nav').forEach(nav => {
    Array.from(nav.querySelectorAll('a')).forEach((link,i) => {if(navIds[i])link.href='#'+navIds[i];});
  });
  const secondHeroLink = document.querySelector('.hero-buttons .button-ghost');
  if(secondHeroLink) secondHeroLink.href='#contribution';
  for(const lang of ['ko','ru','en']){
    const copy=approved[lang],t=content[lang];
    t.heroTitle=copy.heroTitle; t.heroDescription=copy.heroDescription;t.heroLabel=copy.heroLabel;
    [t.navAbout,t.navExperience,t.navProjects,t.navExpertise,t.navContact]=copy.nav;
    t.viewExperience=copy.heroAction;
    t.projects=[t.projects[2],t.projects[1],t.projects[0]];
    t.projects.forEach((p,i)=>{p.number=String(i+1).padStart(2,'0');});
    t.projectsKicker=copy.projects.eyebrow;
    t.projectsTitle=copy.projects.title;
    t.projectsNote=copy.projects.intro;
  }
  function renderNew(lang) {
    const copy=approved[lang],c=copy.contribution,m=copy.market;
    contrib.innerHTML='<div class="container">'+
      '<div class="section-top"><span class="section-number">'+esc(c.index)+'</span><span class="section-rule"></span></div>'+
      '<div class="section-heading-row"><div><p class="section-kicker">'+esc(c.eyebrow)+'</p><h2 id="contribution-title" class="section-heading">'+c.title+'</h2></div><p class="section-note">'+esc(c.intro)+'</p></div>'+
      '<div class="contrib-grid">'+c.items.map(item=>'<article class="contrib-card"><div class="contrib-top"><span class="contrib-number">'+esc(item.number)+'</span><span class="contrib-tag">'+esc(item.tag)+'</span></div><h3>'+esc(item.title)+'</h3><div class="contrib-block"><span>'+esc(c.problemLabel)+'</span><p>'+esc(item.problem)+'</p></div><div class="contrib-block emphasize"><span>'+esc(c.solutionLabel)+'</span><p>'+esc(item.action)+'</p></div><div class="contrib-proof"><span class="proof-icon">✓</span><div><small>'+esc(c.proofLabel)+'</small><p>'+esc(item.proof)+'</p></div></div></article>').join('')+'</div></div>';
    market.innerHTML='<div class="container"><div class="section-top"><span class="section-number">'+esc(m.index)+'</span><span class="section-rule"></span></div>'+
      '<div class="market-heading"><p class="section-kicker">'+esc(m.eyebrow)+'</p><h2 id="market-title" class="section-heading">'+m.title+'</h2><p class="market-intro">'+esc(m.intro)+'</p></div>'+
      '<div class="market-process"><div class="market-process-title">'+esc(m.header)+'</div><div class="market-steps">'+m.stages.map(x=>'<article class="market-step"><div class="market-step-label">'+esc(x.step)+'</div><h3>'+esc(x.title)+'</h3><p>'+esc(x.text)+'</p><div class="market-output">'+esc(x.output)+'</div></article>').join('')+'</div></div>'+
      '<div class="market-caveat"><span aria-hidden="true">ⓘ</span><span>'+esc(m.note)+'</span></div></div>';
    document.querySelectorAll('.project-card').forEach((card,i)=>{
      const p=copy.projects.cases[i];
      if(!p)return;
      card.classList.add('case-study');
      const body=card.querySelector('.project-body');
      if(!body)return;
      const strip=document.createElement('div');
      strip.className='case-evidence';
      strip.innerHTML='<div class="case-evidence-kicker">'+esc(p.line)+'</div><p class="case-evidence-summary">'+esc(p.summary)+'</p><div class="case-evidence-grid"><div>'+esc(p.contribution)+'</div><div>'+esc(p.relevance)+'</div></div><p class="case-evidence-assets">'+esc(p.asset)+'</p>';
      if(i===0) {
        const labels={ko:'DIO Sale 프로젝트 상세 보기 ↗',ru:'Подробнее о проекте DIO Sale ↗',en:'Explore DIO Sale case study ↗'};
        strip.innerHTML += '<a class="case-cta" href="./diosale-case.html?lang='+encodeURIComponent(lang)+'">'+esc(labels[lang]||labels.en)+' <span>DEMO DATA</span></a>';
        const visual=card.querySelector('.project-visual');
        if(visual){
          visual.classList.add('demo-project-visual');
          visual.innerHTML='<div class="demo-visual-label">DIO SALE · FICTIONAL DEMO</div><img src="./assets/diosale-demo-calculation.svg" loading="lazy" alt="Fictional demonstration of the sales margin calculator"><div class="demo-visual-foot">REAL WORKFLOW / FICTIONAL VALUES</div>';
        }
      }
      const details=body.querySelector('details');
      if(details)body.insertBefore(strip,details);
      else body.appendChild(strip);
    });
    const projTop=document.querySelector('#projects .section-number');
    if(projTop)projTop.textContent=copy.projects.index;
  }
  const oldSetLanguage=setLanguage;
  setLanguage=function(lang){
    oldSetLanguage(lang);
    renderNew(lang);
  };
  setLanguage(currentLanguage);
})();
