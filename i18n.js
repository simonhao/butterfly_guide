// ============== 多语言资源 ==============
// 4种语言:中/英/日/西。物种intro/highlights/tags/region(中文长描述)保留原文
// ——这些是158种科学描述,翻译工作量过大,且学名(sci)+英文俗名(en)已能让国际用户精准识别物种。
// UI字符串、阶元名、地区(LOC)名、按钮提示、计数模板等全部翻译。
const I18N = {
  'zh-CN': {
    title: '蝴蝶图鉴 · Butterfly Atlas',
    kicker: 'Lepidoptera · 鳞翅目',
    h1: '蝴蝶图鉴',
    sub: 'A Curated Atlas of the World\u2019s Butterflies',
    chip_stat: (s,f,g)=>`🔬 本鉴收录 ${s} 种 · ${f} 科 ${g} 属`,
    chip_loading: '🔬 本鉴收录…',
    chip_intro: '📚 简介源自维基百科',
    chip_taxo: '🗂 分类经 GBIF 核验',
    sec_taxo: '分类阶元关系 · Taxonomy',
    sec_taxo_desc: '按「界·门·纲·目·科·属·种」七级阶元梳理，分类与学名经 GBIF 核验。点击底部物种气泡可查看详情。',
    sec_grid: '世界蝴蝶精选',
    sec_grid_desc: '点击任意卡片，查看该物种的详细简介、关键资料与亮点特色。',
    feat_label: '✨ 精选',
    feat_title: '只看著名与好看的精选物种',
    rank_kingdom: '界', rank_phylum: '门', rank_class: '纲', rank_order: '目',
    rank_family: '科', rank_genus: '属', rank_species: '种',
    higher: [
      {rank:'界', name:'动物界'},
      {rank:'门', name:'节肢动物门'},
      {rank:'纲', name:'昆虫纲'},
      {rank:'目', name:'鳞翅目'}
    ],
    fam_count: (g,s)=>`本鉴收录 ${g} 属 ${s} 种`,
    panel_wingspan: '翼展',
    panel_geo: '分布地区',
    panel_intro: '简介',
    panel_high: '亮点特色',
    panel_geolegend: (n)=>`分布标注 <b>${n}</b> 处区域`,
    btn_3d: '查看 3D',
    btn_3d_title: '查看 3D 扇翅模型',
    v3d_dorsal: '背面', v3d_ventral: '腹面',
    v3d_flap_off: '扇翅 关', v3d_flap_on: '扇翅 开',
    v3d_rotate_off: '自转 关', v3d_rotate_on: '自转 开',
    v3d_rest: '停栖', v3d_open: '展翅',
    v3d_reset: '复原', v3d_close: '✕ 关闭',
    v3d_loading: '正在加载 3D 模型…',
    v3d_no_data: '该物种暂无 3D 模型数据',
    v3d_hint: '🖱 拖拽旋转 · 滚轮缩放 · 点「扇翅」让翅膀扇动 · 翻面看腹面',
    v3d_disc: '⚠ 3D 模型制作过程使用了 AI 生成，仅供参考，不作为学术研究使用',
    footer_brand: '🦋 蝴蝶图鉴 · Butterfly Atlas',
    footer_src: '图片与文字资料来源：<a href="https://www.wikipedia.org" target="_blank">维基百科</a> 及 <a href="https://commons.wikimedia.org" target="_blank">Wikimedia Commons</a>（采用 CC 知识共享许可）；物种学名与分类参考 <a href="https://www.catalogueoflife.org" target="_blank">Catalogue of Life</a> 与 <a href="https://www.gbif.org" target="_blank">GBIF 全球生物多样性信息网络</a>。本图鉴仅用于科普教育目的。',
    lang_label: '语言',
    // 地区代码 -> 显示名
    loc: {wna:'北美西部',ena:'北美东部',mex:'墨西哥',cam:'中美洲',nsa:'南美北部',ssa:'南美南部',weu:'西欧',eeu:'东欧',naf:'北非',ssf:'撒哈拉以南',sib:'西伯利亚',cas:'中亚',chn:'中国',jpn:'日本',kor:'朝鲜半岛',ind:'印度/南亚',sea:'东南亚',aus:'澳大利亚',png:'新几内亚',saf:'南部非洲',eaf:'东非',was:'西亚',sas:'南亚',eas:'东亚',nzl:'新西兰'}
  },
  'en': {
    title: 'Butterfly Atlas',
    kicker: 'Lepidoptera',
    h1: 'Butterfly Atlas',
    sub: 'A Curated Atlas of the World\u2019s Butterflies',
    chip_stat: (s,f,g)=>`🔬 ${s} species · ${f} families · ${g} genera`,
    chip_loading: '🔬 Loading…',
    chip_intro: '📚 Descriptions from Wikipedia',
    chip_taxo: '🗂 Taxonomy verified by GBIF',
    sec_taxo: 'Taxonomic Hierarchy',
    sec_taxo_desc: 'Organized by the seven Linnaean ranks — Kingdom · Phylum · Class · Order · Family · Genus · Species — with classification verified against GBIF. Click a species chip below to view details.',
    sec_grid: 'World Butterflies',
    sec_grid_desc: 'Click any card to view the species\u2019 description, key facts and highlights. Species names and intros remain in Chinese; scientific names are universal.',
    feat_label: '✨ Featured',
    feat_title: 'Show only iconic and visually striking species',
    rank_kingdom: 'Kingdom', rank_phylum: 'Phylum', rank_class: 'Class', rank_order: 'Order',
    rank_family: 'Family', rank_genus: 'Genus', rank_species: 'Species',
    higher: [
      {rank:'Kingdom', name:'Animalia'},
      {rank:'Phylum', name:'Arthropoda'},
      {rank:'Class', name:'Insecta'},
      {rank:'Order', name:'Lepidoptera'}
    ],
    fam_count: (g,s)=>`${g} genera · ${s} species`,
    panel_wingspan: 'Wingspan',
    panel_geo: 'Distribution',
    panel_intro: 'Description',
    panel_high: 'Highlights',
    panel_geolegend: (n)=>`<b>${n}</b> region${n===1?'':'s'} marked`,
    btn_3d: 'View 3D',
    btn_3d_title: 'View 3D flapping model',
    v3d_dorsal: 'Dorsal', v3d_ventral: 'Ventral',
    v3d_flap_off: 'Flap: off', v3d_flap_on: 'Flap: on',
    v3d_rotate_off: 'Rotate: off', v3d_rotate_on: 'Rotate: on',
    v3d_rest: 'Rest', v3d_open: 'Open',
    v3d_reset: 'Reset', v3d_close: '✕ Close',
    v3d_loading: 'Loading 3D model…',
    v3d_no_data: 'No 3D model available for this species',
    v3d_hint: '🖱 Drag to rotate · Scroll to zoom · Click Flap to animate · Flip to see ventral side',
    v3d_disc: '⚠ 3D models were generated with AI assistance — for reference only, not for academic use',
    footer_brand: '🦋 Butterfly Atlas',
    footer_src: 'Imagery and descriptions courtesy of <a href="https://www.wikipedia.org" target="_blank">Wikipedia</a> and <a href="https://commons.wikimedia.org" target="_blank">Wikimedia Commons</a> (CC licenses); scientific names and classification cross-checked with <a href="https://www.catalogueoflife.org" target="_blank">Catalogue of Life</a> and <a href="https://www.gbif.org" target="_blank">GBIF</a>. For educational use only.',
    lang_label: 'Language',
    loc: {wna:'W North America',ena:'E North America',mex:'Mexico',cam:'Central America',nsa:'N South America',ssa:'S South America',weu:'Western Europe',eeu:'Eastern Europe',naf:'North Africa',ssf:'Sub-Saharan Africa',sib:'Siberia',cas:'Central Asia',chn:'China',jpn:'Japan',kor:'Korea',ind:'India / S Asia',sea:'SE Asia',aus:'Australia',png:'New Guinea',saf:'Southern Africa',eaf:'East Africa',was:'West Asia',sas:'South Asia',eas:'East Asia',nzl:'New Zealand'}
  },
  'ja': {
    title: '世界の蝶図鑑 · Butterfly Atlas',
    kicker: 'Lepidoptera · 鱗翅目',
    h1: '世界の蝶図鑑',
    sub: 'A Curated Atlas of the World\u2019s Butterflies',
    chip_stat: (s,f,g)=>`🔬 収録 ${s} 種 · ${f} 科 ${g} 属`,
    chip_loading: '🔬 読み込み中…',
    chip_intro: '📚 解説はWikipediaより',
    chip_taxo: '🗂 分類はGBIF準拠',
    sec_taxo: '分類階級 · Taxonomy',
    sec_taxo_desc: '「界・門・綱・目・科・属・種」の7階級で整理し、分類と学名はGBIFで照合済み。下の種チップをクリックすると詳細が表示されます。',
    sec_grid: '世界の蝶セレクション',
    sec_grid_desc: 'カードをクリックすると、その種の解説・主要データ・見どころが表示されます。種の名前と解説は中国語のままです（学名は世界共通）。',
    feat_label: '✨ おすすめ',
    feat_title: '有名で美しい代表種のみ表示',
    rank_kingdom: '界', rank_phylum: '門', rank_class: '綱', rank_order: '目',
    rank_family: '科', rank_genus: '属', rank_species: '種',
    higher: [
      {rank:'界', name:'動物界'},
      {rank:'門', name:'節足動物門'},
      {rank:'綱', name:'昆虫綱'},
      {rank:'目', name:'鱗翅目'}
    ],
    fam_count: (g,s)=>`${g} 属 ${s} 種`,
    panel_wingspan: '翅開長',
    panel_geo: '分布',
    panel_intro: '解説',
    panel_high: '見どころ',
    panel_geolegend: (n)=>`<b>${n}</b> 地域に分布`,
    btn_3d: '3Dで見る',
    btn_3d_title: '3D羽ばたきモデルを見る',
    v3d_dorsal: '表面', v3d_ventral: '裏面',
    v3d_flap_off: '羽ばたき: オフ', v3d_flap_on: '羽ばたき: オン',
    v3d_rotate_off: '回転: オフ', v3d_rotate_on: '回転: オン',
    v3d_rest: '止まり', v3d_open: '開翅',
    v3d_reset: 'リセット', v3d_close: '✕ 閉じる',
    v3d_loading: '3Dモデルを読み込み中…',
    v3d_no_data: 'この種の3Dモデルはありません',
    v3d_hint: '🖱 ドラッグで回転 · ホイールで拡大 · 「羽ばたき」で動かす · 反転で裏面表示',
    v3d_disc: '⚠ 3DモデルはAIで生成されたものです。参考用であり、学術用途には使用できません',
    footer_brand: '🦋 世界の蝶図鑑 · Butterfly Atlas',
    footer_src: '画像と解説の出典：<a href="https://www.wikipedia.org" target="_blank">Wikipedia</a> および <a href="https://commons.wikimedia.org" target="_blank">Wikimedia Commons</a>（CCライセンス）；学名と分類は <a href="https://www.catalogueoflife.org" target="_blank">Catalogue of Life</a> と <a href="https://www.gbif.org" target="_blank">GBIF</a> を参照。本図鑑は教育目的のみに使用します。',
    lang_label: '言語',
    loc: {wna:'北米西部',ena:'北米東部',mex:'メキシコ',cam:'中米',nsa:'南米北部',ssa:'南米南部',weu:'西ヨーロッパ',eeu:'東ヨーロッパ',naf:'北アフリカ',ssf:'サハラ以南',sib:'シベリア',cas:'中央アジア',chn:'中国',jpn:'日本',kor:'朝鮮半島',ind:'インド・南アジア',sea:'東南アジア',aus:'オーストラリア',png:'ニューギニア',saf:'南部アフリカ',eaf:'東アフリカ',was:'西アジア',sas:'南アジア',eas:'東アジア',nzl:'ニュージーランド'}
  },
  'es': {
    title: 'Atlas de Mariposas',
    kicker: 'Lepidoptera',
    h1: 'Atlas de Mariposas',
    sub: 'A Curated Atlas of the World\u2019s Butterflies',
    chip_stat: (s,f,g)=>`🔬 ${s} especies · ${f} familias · ${g} géneros`,
    chip_loading: '🔬 Cargando…',
    chip_intro: '📚 Descripciones de Wikipedia',
    chip_taxo: '🗂 Taxonomía verificada por GBIF',
    sec_taxo: 'Jerarquía taxonómica',
    sec_taxo_desc: 'Organizado en los siete rangos linneanos — Reino · Filo · Clase · Orden · Familia · Género · Especie — con la clasificación verificada en GBIF. Haz clic en una especie para ver detalles.',
    sec_grid: 'Mariposas del mundo',
    sec_grid_desc: 'Haz clic en cualquier tarjeta para ver la descripción, datos clave y aspectos destacados de la especie. Los nombres y descripciones permanecen en chino; los nombres científicos son universales.',
    feat_label: '✨ Destacadas',
    feat_title: 'Mostrar solo las especies icónicas y más vistosas',
    rank_kingdom: 'Reino', rank_phylum: 'Filo', rank_class: 'Clase', rank_order: 'Orden',
    rank_family: 'Familia', rank_genus: 'Género', rank_species: 'Especie',
    higher: [
      {rank:'Reino', name:'Animalia'},
      {rank:'Filo', name:'Arthropoda'},
      {rank:'Clase', name:'Insecta'},
      {rank:'Orden', name:'Lepidoptera'}
    ],
    fam_count: (g,s)=>`${g} géneros · ${s} especies`,
    panel_wingspan: 'Envergadura',
    panel_geo: 'Distribución',
    panel_intro: 'Descripción',
    panel_high: 'Aspectos destacados',
    panel_geolegend: (n)=>`<b>${n}</b> región${n===1?'':'es'} marcada${n===1?'':'s'}`,
    btn_3d: 'Ver 3D',
    btn_3d_title: 'Ver modelo 3D con aleteo',
    v3d_dorsal: 'Dorsal', v3d_ventral: 'Ventral',
    v3d_flap_off: 'Aleteo: off', v3d_flap_on: 'Aleteo: on',
    v3d_rotate_off: 'Rotar: off', v3d_rotate_on: 'Rotar: on',
    v3d_rest: 'Reposo', v3d_open: 'Abierta',
    v3d_reset: 'Restablecer', v3d_close: '✕ Cerrar',
    v3d_loading: 'Cargando modelo 3D…',
    v3d_no_data: 'No hay modelo 3D para esta especie',
    v3d_hint: '🖱 Arrastra para rotar · Rueda para hacer zoom · Aleteo para animar · Voltear para ver el envés',
    v3d_disc: '⚠ Los modelos 3D se generaron con IA — solo de referencia, no para uso académico',
    footer_brand: '🦋 Atlas de Mariposas',
    footer_src: 'Imágenes y descripciones de <a href="https://www.wikipedia.org" target="_blank">Wikipedia</a> y <a href="https://commons.wikimedia.org" target="_blank">Wikimedia Commons</a> (licencias CC); nombres científicos y clasificación cotejados con <a href="https://www.catalogueoflife.org" target="_blank">Catalogue of Life</a> y <a href="https://www.gbif.org" target="_blank">GBIF</a>. Solo para fines educativos.',
    lang_label: 'Idioma',
    loc: {wna:'O de Norteamérica',ena:'E de Norteamérica',mex:'México',cam:'Centroamérica',nsa:'N de Sudamérica',ssa:'S de Sudamérica',weu:'Europa Occidental',eeu:'Europa Oriental',naf:'Norte de África',ssf:'África Subsahariana',sib:'Siberia',cas:'Asia Central',chn:'China',jpn:'Japón',kor:'Corea',ind:'India / S de Asia',sea:'SE de Asia',aus:'Australia',png:'Nueva Guinea',saf:'África Austral',eaf:'África Oriental',was:'Asia Occidental',sas:'Sur de Asia',eas:'Asia Oriental',nzl:'Nueva Zelanda'}
  }
};
const LANG_NAMES = {'zh-CN':'简体中文','en':'English','ja':'日本語','es':'Español'};

// 选择当前语言:localStorage > navigator.language 前缀匹配 > zh-CN兜底
function detectLang(){
  try{
    const saved = localStorage.getItem('lang');
    if (saved && I18N[saved]) return saved;
  }catch(e){}
  const nav = (navigator.language||'zh-CN').toLowerCase();
  if (nav.startsWith('zh')) return 'zh-CN';
  if (nav.startsWith('ja')) return 'ja';
  if (nav.startsWith('es')) return 'es';
  if (nav.startsWith('en')) return 'en';
  return 'zh-CN';
}
let CUR_LANG = detectLang();
function t(){ return I18N[CUR_LANG] || I18N['zh-CN']; }
function setLang(code){
  if (!I18N[code]) return;
  CUR_LANG = code;
  try{ localStorage.setItem('lang', code); }catch(e){}
  document.documentElement.lang = code;
  if (typeof window.applyI18n === 'function') window.applyI18n();
}
window.I18N = I18N; window.LANG_NAMES = LANG_NAMES;
window.t = t; window.setLang = setLang; window.detectLang = detectLang;
Object.defineProperty(window, 'CUR_LANG', { get(){ return CUR_LANG; } });
