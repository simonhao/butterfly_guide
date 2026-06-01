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

// ============== 蝴蝶名字本地化(BNAME) ==============
// 策略:zh-CN=b.cn, en=b.en (158 种全部覆盖,b.en 是英文俗名是国际通用名)
// ja/es 由下表精确翻译精选 36 种世界名蝶;未列出的 fallback 到英文俗名 b.en
// (158 种全语言精确翻译工作量极大且部分种没有公认日/西俗名,fallback 到学术英文是合理选择)
const BNAME = {
  ja: {
    monarch: 'オオカバマダラ', morpho: 'メネラウスモルフォ', machaon: 'キアゲハ',
    peacock: 'クジャクチョウ', glasswing: 'スカシジャノメ',
    oakleaf: 'コノハチョウ', birdwing: 'アレキサンドラトリバネアゲハ',
    paintedlady: 'ヒメアカタテハ', plaintiger: 'カバマダラ',
    tailedjay: 'ミカドアゲハ近縁種', tiger: 'アメリカトラアゲハ',
    mormon: 'シロオビアゲハ', cabbage: 'モンシロチョウ',
    brimstone: 'ヤマキチョウ', commonblue: 'シルビアシジミ近縁種',
    skipper: 'シルバースポットセセリ', redadmiral: 'アカタテハ',
    pansy: 'クジャクパンジー', emperor: 'オオムラサキ',
    postman: 'ポストマン', cypris: 'レテノールモルフォ',
    apollo: 'ウスバキチョウ近縁(アポロ)', citrus: 'ナミアゲハ',
    bluebottle: 'アオスジアゲハ', chinapeacock: 'カラスアゲハ近縁',
    dragontail: 'リボンアゲハ', goldbirdwing: 'キシタアゲハ',
    greatmormon: 'ナガサキアゲハ', parispeacock: 'パリスタテハアゲハ',
    luehdorfia: 'ギフチョウ近縁', goldenkaiser: 'ゴールデンカイザーインディア',
    paperkite: 'オオゴマダラ', owl: 'フクロウチョウ',
    redlacewing: 'ベニモンレースウィング', jezebel: 'ベニモンシロチョウ',
    orangetip: 'オオアカモンシロ', bluetiger: 'ルリマダラ',
    eightyeight: '88チョウ', jungleglory: 'ムラサキジャノメ',
    morphopeleides: 'ペレイデスモルフォ', morphocypris2: 'キプリスモルフォ',
    morphosulkowskyi: 'スルコウスキーモルフォ',
    ulysses: 'オオルリアゲハ', bhutanitis: 'ブータンシボリアゲハ',
    paradisebirdwing: 'ゴクラクトリバネアゲハ', croesusbirdwing: 'クロエススートリバネアゲハ',
    rajahbrooke: 'ラジャ・ブルックトリバネアゲハ', greenbirdwing: 'グリーントリバネアゲハ',
    goldenbirdwing2: 'キバネトリバネアゲハ', zebralongwing: 'シマドクチョウ'
  },
  es: {
    monarch: 'Mariposa Monarca', morpho: 'Morfo Azul de Menelao', machaon: 'Macaón',
    peacock: 'Pavo Real Europeo', glasswing: 'Mariposa de Cristal',
    oakleaf: 'Mariposa Hoja Seca', birdwing: 'Alas de Pájaro de la Reina Alejandra',
    paintedlady: 'Vanesa de los Cardos', plaintiger: 'Tigre Llano',
    tailedjay: 'Cola de Golondrina con Cola', tiger: 'Cola de Golondrina Tigre del Este',
    mormon: 'Mormón Común', cabbage: 'Mariposa de la Col',
    brimstone: 'Limonera Común', commonblue: 'Niña Común',
    skipper: 'Saltarina con Manchas Plateadas', redadmiral: 'Almirante Rojo',
    pansy: 'Pensamiento Pavo Real', emperor: 'Emperador Japonés',
    postman: 'Mariposa Cartero', cypris: 'Morfo Rhetenor (Diosa de la Luz)',
    apollo: 'Apolo', citrus: 'Cola de Golondrina Asiática',
    bluebottle: 'Botella Azul Común', chinapeacock: 'Pavo Real Chino',
    dragontail: 'Cola de Dragón', goldbirdwing: 'Alas de Pájaro Doradas',
    greatmormon: 'Gran Mormón', parispeacock: 'Pavo Real de París',
    luehdorfia: 'Luehdorfia China', goldenkaiser: 'Káiser de la India Dorado',
    paperkite: 'Cometa de Papel', owl: 'Mariposa Búho',
    redlacewing: 'Encaje Rojo', jezebel: 'Jezebel de Base Roja',
    orangetip: 'Gran Punta Naranja', bluetiger: 'Tigre Azul',
    eightyeight: 'Mariposa 88', jungleglory: 'Gloria de la Jungla',
    morphopeleides: 'Morfo Peleides', morphocypris2: 'Morfo Cypris',
    morphosulkowskyi: 'Morfo de Sulkowsky',
    ulysses: 'Mariposa Ulises', bhutanitis: 'Cola de Golondrina de Bután',
    paradisebirdwing: 'Alas de Pájaro del Paraíso', croesusbirdwing: 'Alas de Pájaro de Creso',
    rajahbrooke: 'Alas de Pájaro del Rajá Brooke', greenbirdwing: 'Alas de Pájaro Verde',
    goldenbirdwing2: 'Alas de Pájaro Doradas (Helena)', zebralongwing: 'Alas Largas Cebra'
  }
};
// 取得当前语言下蝴蝶的显示名:
//   zh-CN => b.cn (中文,数据原生)
//   en    => b.en (英文俗名,158 种全有)
//   ja/es => BNAME 表中精选种;未列出 fallback 到 b.en
function bname(b){
  if (!b) return '';
  const lang = (typeof CUR_LANG === 'string' ? CUR_LANG : 'zh-CN');
  if (lang === 'zh-CN') return b.cn;
  if (lang === 'en') return b.en || b.cn;
  const map = BNAME[lang];
  if (map && map[b.id]) return map[b.id];
  return b.en || b.cn;  // fallback 到英文俗名
}
window.BNAME = BNAME;
window.bname = bname;

// ============== 分类骨架翻译(科/属/科 note) ==============
// 5 科中文名 + note 翻译为 en/ja/es;91 属仅给精选属(用户视野内的明星属)做精确翻译,其余 fallback 到拉丁名(国际通用)
const FAMILY_I18N = {
  Papilionidae: {
    cn: { name:'凤蝶科', note:'中至大型，多有尾突，后翅常具眼斑；含世界最大的蝴蝶，以及多种珍稀濒危的鸟翼凤蝶。'},
    en: { name:'Swallowtails', note:'Medium to large butterflies, often with hindwing tails and eyespots; includes the world\u2019s largest butterflies and many rare birdwings.'},
    ja: { name:'アゲハチョウ科', note:'中型から大型のチョウで、後翅に尾状突起や眼状紋を持つことが多い。世界最大のチョウや希少なトリバネアゲハ類を含む。'},
    es: { name:'Papiliónidos (Macaones)', note:'Mariposas medianas a grandes, a menudo con colas y ocelos en las alas posteriores; incluyen las mariposas más grandes del mundo y muchas especies de alas de pájaro raras.'}
  },
  Pieridae: {
    cn: { name:'粉蝶科', note:'中小型，多为白、黄色；翅色来自独特的蝶呤色素，含许多常见的农田与花园蝶种。'},
    en: { name:'Whites and Yellows', note:'Small to medium, predominantly white or yellow; their colors come from unique pterin pigments. Includes many familiar garden and farmland species.'},
    ja: { name:'シロチョウ科', note:'小型から中型で、白色や黄色が多い。プテリン色素による独特な発色を持ち、農地や庭でよく見られる種を多く含む。'},
    es: { name:'Piéridos (Blancas y Amarillas)', note:'Mariposas pequeñas a medianas, predominantemente blancas o amarillas; sus colores provienen de pigmentos pterínicos únicos. Incluyen muchas especies comunes de jardín y campo.'}
  },
  Lycaenidae: {
    cn: { name:'灰蝶科', note:'蝴蝶中第二大科，体型小巧，色彩常呈金属蓝/铜色；许多种幼虫与蚂蚁互利共生。'},
    en: { name:'Gossamer-winged Butterflies', note:'The second largest family of butterflies. Small, often with metallic blue or copper coloration. Many larvae have a symbiotic relationship with ants.'},
    ja: { name:'シジミチョウ科', note:'チョウの中で2番目に大きい科。小型で金属的な青や銅色を持つ種が多く、幼虫はアリと共生関係を結ぶ種が多い。'},
    es: { name:'Licénidos', note:'La segunda familia más grande de mariposas. Pequeñas, a menudo con coloraciones azules o cobrizas metálicas. Muchas larvas mantienen relaciones simbióticas con hormigas.'}
  },
  Hesperiidae: {
    cn: { name:'弄蝶科', note:'身体粗壮多毛、触角末端弯钩，飞行急促跳跃，形态介于蝶与蛾之间。'},
    en: { name:'Skippers', note:'Robust, hairy bodies with hooked antennae tips. Their fast, darting flight bridges the morphology between butterflies and moths.'},
    ja: { name:'セセリチョウ科', note:'がっしりとして毛深い体、先端が鉤状の触角、素早く跳ねるような飛び方。チョウとガの中間的な形態を持つ。'},
    es: { name:'Hespéridos (Saltarinas)', note:'Cuerpos robustos y peludos con puntas de antenas en forma de gancho. Su vuelo rápido y errático las sitúa entre mariposas y polillas.'}
  },
  Nymphalidae: {
    cn: { name:'蛱蝶科', note:'蝴蝶中最大的科，前足退化（"刷足蝶"）；拟态、迁徙、结构色的代表种皆出于此。'},
    en: { name:'Brush-footed Butterflies', note:'The largest family of butterflies, with reduced forelegs (\u201cbrush-footed\u201d). Includes the famous champions of mimicry, migration and structural color.'},
    ja: { name:'タテハチョウ科', note:'チョウの中で最大の科。前脚が退化(刷毛足)し、擬態・渡り・構造色で名高い種を多数含む。'},
    es: { name:'Ninfálidos (Patas de Cepillo)', note:'La familia más grande de mariposas, con las patas delanteras reducidas ("patas de cepillo"). Incluye los grandes campeones del mimetismo, la migración y los colores estructurales.'}
  }
};
const GENUS_I18N = {
  // 精选明星属:常见+用户视野内,提供 en/ja/es 译名
  Danaus:        { en:'Tiger Milkweed Genus',    ja:'マダラチョウ属',     es:'Género de Mariposas Tigre' },
  Vanessa:       { en:'Painted Ladies',          ja:'アカタテハ属',       es:'Vanesas' },
  Morpho:        { en:'Morpho Butterflies',      ja:'モルフォチョウ属',   es:'Morfos' },
  Aglais:        { en:'Tortoiseshells',          ja:'クジャクチョウ属',   es:'Pavos Reales' },
  Greta:         { en:'Glasswings',              ja:'スカシジャノメ属',   es:'Mariposas de Cristal' },
  Kallima:       { en:'Oakleaf Butterflies',     ja:'コノハチョウ属',     es:'Mariposas Hoja' },
  Junonia:       { en:'Pansies',                 ja:'タテハモドキ属',     es:'Pensamientos' },
  Sasakia:       { en:'Japanese Emperors',       ja:'オオムラサキ属',     es:'Emperadores Japoneses' },
  Heliconius:    { en:'Longwings',               ja:'ドクチョウ属',       es:'Heliconios' },
  Caligo:        { en:'Owl Butterflies',         ja:'フクロウチョウ属',   es:'Mariposas Búho' },
  Idea:          { en:'Tree Nymphs',             ja:'オオゴマダラ属',     es:'Ninfas de los Árboles' },
  Diaethria:     { en:'Eighty-eight Butterflies',ja:'88チョウ属',         es:'Mariposas 88' },
  Papilio:       { en:'Swallowtails',            ja:'アゲハ属',           es:'Macaones' },
  Ornithoptera:  { en:'Birdwings',               ja:'トリバネアゲハ属',   es:'Alas de Pájaro' },
  Graphium:      { en:'Swordtails / Bluebottles',ja:'アオスジアゲハ属',   es:'Cola de Espada' },
  Troides:       { en:'Golden Birdwings',        ja:'キシタアゲハ属',     es:'Alas de Pájaro Doradas' },
  Parnassius:    { en:'Apollos',                 ja:'ウスバキチョウ属',   es:'Apolos' },
  Bhutanitis:    { en:'Bhutan Glory Group',      ja:'ブータンシボリアゲハ属', es:'Glorias de Bután' },
  Pieris:        { en:'Cabbage Whites',          ja:'モンシロチョウ属',   es:'Blancas de la Col' },
  Gonepteryx:    { en:'Brimstones',              ja:'ヤマキチョウ属',     es:'Limoneras' },
  Delias:        { en:'Jezebels',                ja:'カザリシロチョウ属', es:'Jezabeles' },
  Polyommatus:   { en:'Common Blues',            ja:'シジミチョウ属',     es:'Azules Comunes' },
  Hesperia:      { en:'Branded Skippers',        ja:'セセリチョウ属',     es:'Saltarinas' }
};
// 取科本地化名(回退到拉丁名,数据自带的科都是带拉丁名的)
function famName(la) {
  const lang = (typeof CUR_LANG === 'string' ? CUR_LANG : 'zh-CN');
  const f = FAMILY_I18N[la];
  if (!f) return la;
  if (lang === 'zh-CN') return f.cn.name;
  return (f[lang] && f[lang].name) || f.en.name;
}
function famNote(la) {
  const lang = (typeof CUR_LANG === 'string' ? CUR_LANG : 'zh-CN');
  const f = FAMILY_I18N[la];
  if (!f) return '';
  if (lang === 'zh-CN') return f.cn.note;
  return (f[lang] && f[lang].note) || f.en.note;
}
function genusName(la) {
  const lang = (typeof CUR_LANG === 'string' ? CUR_LANG : 'zh-CN');
  if (lang === 'zh-CN') return null; // 中文用数据中的 cn 字段
  const g = GENUS_I18N[la];
  if (!g) return la;  // 未译属 fallback 到拉丁名(国际通用)
  return g[lang] || g.en || la;
}
window.FAMILY_I18N = FAMILY_I18N;
window.GENUS_I18N = GENUS_I18N;
window.famName = famName; window.famNote = famNote; window.genusName = genusName;

// ============== 目级 note 翻译(鳞翅目简介) ==============
const ORDER_NOTE = {
  'zh-CN': '包括蝴蝶与蛾类，全球已知约 18 万种；其中蝴蝶约 1.4–2 万种。本图鉴 158 种分属 5 科 91 属。',
  en: 'Includes butterflies and moths; about 180,000 species known worldwide, of which roughly 14,000–20,000 are butterflies. This atlas covers 158 species across 5 families and 91 genera.',
  ja: 'チョウとガを含み、世界で約 18 万種が知られる。そのうちチョウは約 1.4〜2 万種。本図鑑では 5 科 91 属 158 種を収録。',
  es: 'Incluye mariposas y polillas; se conocen unas 180.000 especies en todo el mundo, de las cuales unas 14.000–20.000 son mariposas. Este atlas reúne 158 especies en 5 familias y 91 géneros.'
};
function orderNote(){
  const lang = (typeof CUR_LANG === 'string' ? CUR_LANG : 'zh-CN');
  return ORDER_NOTE[lang] || ORDER_NOTE['zh-CN'];
}
window.orderNote = orderNote;

// 取本地化的 family 显示串。数据中 b.family = "蛱蝶科 Nymphalidae" 这种"中文名 拉丁名"格式;
// 切语言时取出拉丁名 + famName 重组(英=Brush-footed Butterflies Nymphalidae 等)
function familyDisplay(famStr) {
  if (!famStr) return '';
  const parts = famStr.trim().split(/\s+/);
  const la = parts[parts.length-1];
  if (la && /^[A-Z]/.test(la) && window.famName) {
    return famName(la) + ' ' + la;
  }
  return famStr;
}
window.familyDisplay = familyDisplay;

// ============== 物种长文本(intro/region/highlights/tags) i18n 异步加载 ==============
// 因为文本量大,放在独立 json 文件里按需加载;加载完成自动触发 applyI18n 重渲。
const SPECIES_I18N = { 'zh-CN': null /* 用 b 自带字段 */, en: null, ja: null, es: null };
async function loadSpeciesI18n(lang) {
  if (lang === 'zh-CN' || SPECIES_I18N[lang]) return SPECIES_I18N[lang];
  try {
    const res = await fetch('i18n_species_'+lang+'.json');
    if (!res.ok) throw new Error('not ok');
    SPECIES_I18N[lang] = await res.json();
    return SPECIES_I18N[lang];
  } catch(e) {
    SPECIES_I18N[lang] = {};  // 加载失败置空对象,避免反复请求
    return null;
  }
}
// 取得指定字段的本地化值;未翻译的回退到中文原文(暂用)
function bfield(b, key) {
  if (!b) return '';
  const lang = (typeof CUR_LANG === 'string' ? CUR_LANG : 'zh-CN');
  if (lang === 'zh-CN') return b[key];
  const map = SPECIES_I18N[lang];
  if (map && map[b.id] && map[b.id][key] != null) return map[b.id][key];
  return b[key]; // 回退到原文(中文)
}
window.SPECIES_I18N = SPECIES_I18N;
window.loadSpeciesI18n = loadSpeciesI18n;
window.bfield = bfield;

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
  // 异步加载该语言的物种长文本翻译,加载完再刷新一次
  if (code !== 'zh-CN') {
    loadSpeciesI18n(code).then(()=>{ if (typeof window.applyI18n === 'function') window.applyI18n(); });
  }
}
window.I18N = I18N; window.LANG_NAMES = LANG_NAMES;
window.t = t; window.setLang = setLang; window.detectLang = detectLang;
Object.defineProperty(window, 'CUR_LANG', { get(){ return CUR_LANG; } });
// 首次进入若不是中文,异步加载物种翻译;加载完触发一次applyI18n
if (CUR_LANG !== 'zh-CN') {
  loadSpeciesI18n(CUR_LANG).then(()=>{ if (typeof window.applyI18n === 'function') window.applyI18n(); });
}
