// 蝴蝶图鉴数据 — 资料与图片来源：维基百科 / Wikimedia Commons（CC 许可）
// 学名与分类参考：Catalogue of Life / GBIF
const BUTTERFLIES = [
  {
    id: "monarch",
    cn: "帝王蝶",
    en: "Monarch Butterfly",
    sci: "Danaus plexippus",
    family: "蛱蝶科 Nymphalidae",
    img: "images/monarch.jpg",
    region: "北美洲（迁徙至墨西哥越冬）",
    regions: ["wna", "ena", "mex"],
    wingspan: "约 9–10 cm",
    intro: "帝王蝶是蛱蝶科斑蝶亚科中最具代表性的物种，也是北美最广为人知的蝴蝶之一。翅膀呈鲜明的橙色，布有黑色脉纹与白色斑点边框，是重要的传粉昆虫与生态象征。",
    highlights: [
      "可完成长达数千公里的世代接力大迁徙，从加拿大飞抵墨西哥越冬",
      "幼虫专食马利筋（乳草），体内积累毒素以警示天敌",
      "醒目的橙黑配色是经典的警戒色（aposematism）范例"
    ],
    tags: ["迁徙之王", "传粉者", "警戒色"]
  },
  {
    id: "morpho",
    cn: "梅内劳斯闪蝶（蓝闪蝶）",
    en: "Menelaus Blue Morpho",
    sci: "Morpho menelaus",
    family: "蛱蝶科 Nymphalidae",
    img: "images/morpho.jpg",
    region: "中南美洲热带雨林",
    regions: ["cam", "nsa"],
    wingspan: "约 12 cm",
    intro: "蓝闪蝶以其耀眼的金属蓝色翅膀闻名，是闪蝶属约 30 种之一。其翅膀背面呈炫目的虹彩蓝，腹面则为暗褐色并带有拟态眼斑。",
    highlights: [
      "蓝色并非色素，而是翅鳞微观结构对光的干涉产生的结构色",
      "其结构色原理启发了防伪、光学与材料科学的仿生研究",
      "飞行时蓝褐交替闪烁，可迷惑捕食者"
    ],
    tags: ["结构色", "仿生学", "雨林精灵"]
  },
  {
    id: "machaon",
    cn: "金凤蝶",
    en: "Old World Swallowtail",
    sci: "Papilio machaon",
    family: "凤蝶科 Papilionidae",
    img: "images/machaon.jpg",
    region: "欧亚大陆及北美",
    regions: ["wna", "ena", "weu", "eeu", "cas", "sib", "chn", "jpn"],
    wingspan: "约 6.5–8.6 cm",
    intro: "金凤蝶是凤蝶属的模式种，分布极广，遍布古北界与北美。翅膀呈明黄色配黑色脉纹，后翅带有蓝斑、红色眼斑与典型的剑状尾突。",
    highlights: [
      "凤蝶属（Papilio）的模式种，分类学上具标志意义",
      "后翅的剑状尾突与红色眼斑可转移天敌攻击目标",
      "幼虫受惊时会伸出橙色臭角（osmeterium）释放气味自卫"
    ],
    tags: ["模式种", "燕尾", "广布种"]
  },
  {
    id: "peacock",
    cn: "孔雀蛱蝶",
    en: "European Peacock",
    sci: "Aglais io",
    family: "蛱蝶科 Nymphalidae",
    img: "images/peacock.jpg",
    region: "欧洲及温带亚洲（东至日本）",
    regions: ["weu", "eeu", "cas", "sib", "chn", "jpn"],
    wingspan: "约 5–5.5 cm",
    intro: "孔雀蛱蝶因四翅各有一枚酷似孔雀羽毛的醒目眼斑而得名。底色为深红褐色，是欧洲最易辨认的蝴蝶之一，常在建筑或树洞中越冬。",
    highlights: [
      "四枚逼真的眼斑可在受惊时骤然展开，惊吓鸟类天敌",
      "合翅时翅膀腹面近黑色，完美伪装成枯叶",
      "成虫可越冬，因此早春即可见其活动"
    ],
    tags: ["眼斑威慑", "越冬", "拟态枯叶"]
  },
  {
    id: "glasswing",
    cn: "玻璃翼蝶",
    en: "Glasswing Butterfly",
    sci: "Greta oto",
    family: "蛱蝶科 Nymphalidae",
    img: "images/glasswing.jpg",
    region: "中美洲至南美洲",
    regions: ["cam", "nsa"],
    wingspan: "约 5.5–6 cm",
    intro: "玻璃翼蝶以近乎完全透明的翅膀闻名，仅翅脉与边框为不透明的褐色，翅膜如玻璃般通透，是天然的隐身大师。",
    highlights: [
      "翅膜透明，纳米级凸起结构几乎不反射光，实现极致防眩透明",
      "透明翅膀让它在飞行中难以被天敌锁定",
      "其抗反射结构启发了显示屏与光学镜片的减反射设计"
    ],
    tags: ["透明翅", "天然隐身", "抗反射"]
  },
  {
    id: "oakleaf",
    cn: "枯叶蛱蝶",
    en: "Orange Oakleaf",
    sci: "Kallima inachus",
    family: "蛱蝶科 Nymphalidae",
    img: "images/oakleaf.jpg",
    region: "南亚至东亚（印度至日本）",
    regions: ["ind", "sea", "chn", "jpn"],
    wingspan: "约 8.5–11 cm",
    intro: "枯叶蛱蝶是自然界拟态的教科书级范例。合翅静止时，翅膀腹面酷似一片带主脉的干枯落叶，连虫蛀斑点都惟妙惟肖；展翅时却显露蓝紫与橙色的鲜艳条带。",
    highlights: [
      "合翅时完美拟态枯叶，连叶脉、霉斑都逼真还原",
      "翅背展开则为亮蓝紫＋橙带，反差极大",
      "最常被引用的伪装（camouflage）经典案例之一"
    ],
    tags: ["枯叶拟态", "伪装大师", "反差色"]
  },
  {
    id: "birdwing",
    cn: "亚历山大鸟翼凤蝶",
    en: "Queen Alexandra's Birdwing",
    sci: "Ornithoptera alexandrae",
    family: "凤蝶科 Papilionidae",
    img: "images/birdwing.png",
    region: "巴布亚新几内亚东部森林",
    regions: ["png"],
    wingspan: "雌性可达 25–28 cm",
    intro: "亚历山大鸟翼凤蝶是世界上体型最大的蝴蝶，雌性翼展超过 25 厘米。仅分布于巴布亚新几内亚奥罗省的狭小雨林中，极为珍稀。",
    highlights: [
      "世界最大的蝴蝶，雌性翼展可达 28 厘米，宛如飞鸟",
      "雌雄异型显著：雄性蓝绿斑斓，雌性褐色更大",
      "属濒危物种，受国际公约严格保护，栖息地极度受限"
    ],
    tags: ["世界最大", "濒危保护", "雌雄异型"]
  },
  {
    id: "paintedlady",
    cn: "小红蛱蝶（姬红蛱蝶）",
    en: "Painted Lady",
    sci: "Vanessa cardui",
    family: "蛱蝶科 Nymphalidae",
    img: "images/paintedlady.jpg",
    region: "全球（除南极洲与南美外几乎遍布）",
    regions: ["wna", "ena", "weu", "eeu", "naf", "ssf", "cas", "sib", "chn", "jpn", "ind", "sea", "aus"],
    wingspan: "约 5–9 cm",
    intro: "小红蛱蝶是分布最广泛的蝴蝶物种，几乎遍布全球。翅膀呈橙褐色配黑白斑块，适应力极强，是著名的长距离迁徙者。",
    highlights: [
      "世界上分布最广的蝴蝶，几乎遍及各大洲",
      "可进行跨洲际迁徙，部分种群往返欧洲与非洲撒哈拉以南",
      "繁殖力强、寄主植物广泛，是极成功的适应性物种"
    ],
    tags: ["分布最广", "跨洲迁徙", "强适应"]
  },
  {
    id: "plaintiger",
    cn: "金斑蝶（虎斑蝶）",
    en: "Plain Tiger",
    sci: "Danaus chrysippus",
    family: "蛱蝶科 Nymphalidae",
    img: "images/plaintiger.jpg",
    region: "亚洲、非洲、澳大利亚",
    regions: ["naf", "ssf", "ind", "sea", "chn", "aus"],
    wingspan: "约 7–8 cm",
    intro: "金斑蝶又称非洲女王，是分布于亚非澳的中型斑蝶。橙褐色翅膀配黑色边框与白斑，与帝王蝶同属斑蝶亚科，是拟态研究的重要对象。",
    highlights: [
      "幼虫取食马利筋类植物，体内积毒，成虫具警戒色",
      "是多种无毒蝴蝶贝氏拟态（Batesian mimicry）的模仿对象",
      "被认为是人类艺术中最早被描绘的蝴蝶之一（古埃及壁画）"
    ],
    tags: ["拟态范本", "有毒警戒", "古老物种"]
  },
  {
    id: "tailedjay",
    cn: "统帅青凤蝶",
    en: "Tailed Jay",
    sci: "Graphium agamemnon",
    family: "凤蝶科 Papilionidae",
    img: "images/tailedjay.jpg",
    region: "南亚、东南亚至澳大利亚",
    regions: ["ind", "sea", "aus"],
    wingspan: "约 8.5–10 cm",
    intro: "统帅青凤蝶是一种以黑底配荧光绿斑闻名的热带凤蝶，又称绿斑青凤蝶。飞行迅捷敏捷，常在花间快速振翅悬停取蜜。",
    highlights: [
      "黑底缀满荧光绿色斑点，色彩对比鲜明亮丽",
      "飞行速度极快，振翅频率高，难以捕捉",
      "适应力强，在城市绿地与花园中也很常见"
    ],
    tags: ["荧光绿斑", "疾飞高手", "热带常见"]
  },
  {
    id: "tiger",
    cn: "北美虎凤蝶",
    en: "Eastern Tiger Swallowtail",
    sci: "Papilio glaucus",
    family: "凤蝶科 Papilionidae",
    img: "images/tiger.jpg",
    region: "北美洲东部",
    regions: ["ena"],
    wingspan: "约 7.9–14 cm",
    intro: "北美虎凤蝶是北美东部最常见的蝴蝶之一，黄色翅膀上有四条虎纹状黑色竖条，后翅带蓝橙斑与尾突。是美国多个州的州蝶。",
    highlights: [
      "鲜黄底配黑色虎纹，辨识度极高",
      "雌蝶有黄色型与黑色型两种（黑色型拟态有毒的蓝凤蝶）",
      "被定为美国弗吉尼亚、佐治亚等多州的官方州昆虫"
    ],
    tags: ["州蝶", "虎纹", "雌性二型"]
  },
  {
    id: "mormon",
    cn: "玉带凤蝶",
    en: "Common Mormon",
    sci: "Papilio polytes",
    family: "凤蝶科 Papilionidae",
    img: "images/mormon.jpg",
    region: "亚洲（南亚至东亚）广布",
    regions: ["ind", "sea", "chn"],
    wingspan: "约 9–10 cm",
    intro: "玉带凤蝶是亚洲广布的凤蝶，黑色翅膀缀有白色斑带。雌蝶有多种形态，部分拟态有毒物种，是研究拟态多态性的经典对象。",
    highlights: [
      "雌蝶具多种拟态型，模仿不同有毒蝴蝶（贝氏拟态）",
      "拟态由单一超基因控制，是进化遗传学的明星案例",
      "雄蝶形态单一，雌雄差异显著"
    ],
    tags: ["拟态多态", "超基因", "广布种"]
  },
  {
    id: "cabbage",
    cn: "菜粉蝶",
    en: "Small White / Cabbage White",
    sci: "Pieris rapae",
    family: "粉蝶科 Pieridae",
    img: "images/cabbage.jpg",
    region: "全球（原产欧亚，已遍布各大洲）",
    regions: ["wna", "ena", "weu", "eeu", "naf", "cas", "sib", "chn", "jpn", "aus"],
    wingspan: "约 4.5–6.5 cm",
    intro: "菜粉蝶是世界上最常见的蝴蝶之一，白色翅膀带黑色翅尖与黑斑。幼虫（菜青虫）取食十字花科作物，是著名的农业害虫。",
    highlights: [
      "随人类农业活动扩散至全球，极成功的入侵物种",
      "幼虫菜青虫是甘蓝、油菜等十字花科作物的重要害虫",
      "一年可繁殖多代，城市菜地花园极常见"
    ],
    tags: ["全球广布", "农业害虫", "粉蝶代表"]
  },
  {
    id: "brimstone",
    cn: "钩粉蝶",
    en: "Common Brimstone",
    sci: "Gonepteryx rhamni",
    family: "粉蝶科 Pieridae",
    img: "images/brimstone.jpg",
    region: "欧洲、亚洲、北非（古北界）",
    regions: ["weu", "eeu", "naf", "cas", "sib"],
    wingspan: "约 5.2–6 cm",
    intro: "钩粉蝶雄蝶呈明亮的硫磺黄色，雌蝶为淡绿白色，翅形带尖角酷似叶片。英文 butterfly（黄油色的蝶）一词可能即源于此蝶。",
    highlights: [
      "翅形与叶脉拟态树叶，合翅时完美伪装",
      "成虫寿命可达一年，是欧洲寿命最长的蝴蝶之一",
      "据信是英文单词 butterfly（黄油色蝶）的词源之一"
    ],
    tags: ["硫磺黄", "拟态叶片", "长寿"]
  },
  {
    id: "commonblue",
    cn: "普蓝眼灰蝶",
    en: "Common Blue",
    sci: "Polyommatus icarus",
    family: "灰蝶科 Lycaenidae",
    img: "images/commonblue.jpg",
    region: "欧亚大陆（古北界），引入北美",
    regions: ["weu", "eeu", "cas", "sib", "chn", "wna"],
    wingspan: "约 2.8–3.6 cm",
    intro: "普蓝眼灰蝶是欧洲最常见的蓝色小灰蝶，雄蝶翅背呈亮丽的紫蓝色，雌蝶偏褐色带橙斑。体型小巧，是灰蝶科的典型代表。",
    highlights: [
      "雄蝶亮蓝、雌蝶褐橙，雌雄异型明显",
      "幼虫与蚂蚁共生，分泌蜜露换取蚂蚁保护",
      "灰蝶科（小灰蝶）的代表，体型小但数量庞大"
    ],
    tags: ["蚁蝶共生", "小精灵", "雌雄异型"]
  },
  {
    id: "skipper",
    cn: "银弄蝶",
    en: "Silver-spotted Skipper",
    sci: "Hesperia comma",
    family: "弄蝶科 Hesperiidae",
    img: "images/skipper.jpg",
    region: "欧洲、亚洲、北美（全北界）",
    regions: ["wna", "ena", "weu", "eeu", "cas", "sib", "chn"],
    wingspan: "约 2.5–3.1 cm",
    intro: "银弄蝶是弄蝶科的代表，体型小、身体粗壮多毛，翅膀棕褐色，腹面有特征性的银白色斑点。飞行快速而呈跳跃式，介于蛾与蝶之间。",
    highlights: [
      "腹面缀有标志性的银白色斑点，因而得名",
      "身体粗壮、触角末端弯钩，外形介于蝶与蛾之间",
      "飞行急促呈跳跃式（skip），故英文名 skipper"
    ],
    tags: ["弄蝶代表", "银斑", "跳跃飞行"]
  },
  {
    id: "redadmiral",
    cn: "大红蛱蝶",
    en: "Red Admiral",
    sci: "Vanessa atalanta",
    family: "蛱蝶科 Nymphalidae",
    img: "images/redadmiral.jpg",
    region: "北半球温带（欧洲、亚洲、北美、北非）",
    regions: ["wna", "ena", "weu", "eeu", "naf", "cas", "chn"],
    wingspan: "约 4.5–5 cm",
    intro: "大红蛱蝶黑色翅膀上有醒目的红色横带与白色斑点，是与小红蛱蝶同属的近亲。性情活泼，常在花园中领域性巡飞。",
    highlights: [
      "黑底配鲜红色带与白斑，色彩对比强烈",
      "与小红蛱蝶（Vanessa cardui）同属，是其近缘种",
      "具迁徙习性，温暖季节会向北迁移繁殖"
    ],
    tags: ["红色横带", "迁徙", "同属近亲"]
  },
  {
    id: "pansy",
    cn: "美眼蛱蝶",
    en: "Peacock Pansy",
    sci: "Junonia almana",
    family: "蛱蝶科 Nymphalidae",
    img: "images/pansy.jpg",
    region: "南亚、东南亚",
    regions: ["ind", "sea"],
    wingspan: "约 5.4–6.2 cm",
    intro: "美眼蛱蝶橙黄色翅膀上有多枚醒目的孔雀状眼斑。它有明显的季节型：旱季型与雨季型在翅膀腹面图案上差异显著。",
    highlights: [
      "翅面缀有多枚孔雀羽状眼斑，威慑天敌",
      "具季节多态：旱季型与雨季型外观不同",
      "南亚花园与湿地常见的中型蛱蝶"
    ],
    tags: ["孔雀眼斑", "季节型", "南亚常见"]
  },
  {
    id: "emperor",
    cn: "大紫蛱蝶",
    en: "Japanese Emperor",
    sci: "Sasakia charonda",
    family: "蛱蝶科 Nymphalidae",
    img: "images/emperor.jpg",
    region: "日本、朝鲜半岛、中国、中国台湾北部、越南北部",
    regions: ["jpn", "kor", "chn", "sea"],
    wingspan: "约 8–10 cm",
    intro: "大紫蛱蝶是日本的国蝶，雄蝶翅膀在光照下呈现耀眼的紫蓝色金属光泽。体型大、飞行有力，被视为东亚森林的瑰宝。",
    highlights: [
      "日本国蝶，文化地位崇高",
      "雄蝶翅面具紫蓝色结构色光泽，雌蝶较暗",
      "幼虫以朴树为寄主，依赖成熟阔叶林栖息"
    ],
    tags: ["日本国蝶", "紫色光泽", "森林瑰宝"]
  },
  {
    id: "postman",
    cn: "邮差蝶（黑长袖蝶）",
    en: "Postman Butterfly",
    sci: "Heliconius melpomene",
    family: "蛱蝶科 Nymphalidae",
    img: "images/postman.jpg",
    region: "中美洲与南美洲",
    regions: ["cam", "nsa"],
    wingspan: "约 6.5 cm",
    intro: "邮差蝶是热带美洲著名的长翅蝶，黑色翅膀配红黄色条带。它与同域的诗神蝶形成缪勒拟态，且地理变异极为丰富，是进化研究的明星。",
    highlights: [
      "与近缘种形成缪勒拟态（Müllerian mimicry），共享警戒色",
      "地理种群间翅纹差异巨大，是物种形成研究的模型生物",
      "成虫能取食花粉补充蛋白质，因而异常长寿"
    ],
    tags: ["缪勒拟态", "模型生物", "食花粉"]
  },
  {
    id: "cypris",
    cn: "光明女神闪蝶",
    en: "Rhetenor Blue Morpho",
    sci: "Morpho rhetenor",
    family: "蛱蝶科 Nymphalidae",
    img: "images/cypris.jpg",
    region: "南美洲北部热带雨林（巴西、秘鲁等）",
    regions: ["nsa", "cam"],
    wingspan: "约 7.5–10 cm",
    intro: "光明女神闪蝶（又称海伦娜闪蝶）被誉为世界上最美丽的蝴蝶之一。雄蝶翅膀呈摄人心魄的金属蓝紫色，从深蓝到湛蓝层层变幻，宛如镶嵌着光环的蓝色天空。其野外数量极少，因而格外珍贵。",
    highlights: [
      "翅面蓝色为微观鳞片结构色，闪耀如金属，被誉为最美蝴蝶之一",
      "两性异形，雄蝶蓝得耀眼，雌蝶偏褐并带成列眼斑",
      "繁殖能力弱、野外稀少，是收藏与观赏的珍品"
    ],
    tags: ["结构色", "最美蝴蝶", "雨林精灵"]
  },
  {
    id: "goldenkaiser",
    cn: "金斑喙凤蝶",
    en: "Golden Kaiser-i-Hind",
    sci: "Teinopalpus aureus",
    family: "凤蝶科 Papilionidae",
    img: "images/goldenkaiser.jpg",
    region: "中国（海南、广东、福建、广西）及越南、老挝",
    regions: ["chn", "sea"],
    wingspan: "约 8–11 cm",
    intro: "金斑喙凤蝶是中国唯一的蝶类国家一级保护动物，被誉为「蝴蝶中的大熊猫」「蝶中皇后」。翅上密布翠绿色鳞片，闪烁幽幽绿光，后翅有金黄色月牙斑与细长尾突，极为罕见名贵。",
    highlights: [
      "中国唯一国家一级保护蝴蝶，珍稀程度堪比大熊猫",
      "翅面满布翠绿鳞片，后翅金黄月牙斑因之得名",
      "栖于海拔千米常绿阔叶林，极少下地，是生态指示种"
    ],
    tags: ["国家一级", "蝶中皇后", "中国特有"]
  },
  {
    id: "luehdorfia",
    cn: "中华虎凤蝶",
    en: "Chinese Luehdorfia",
    sci: "Luehdorfia chinensis",
    family: "凤蝶科 Papilionidae",
    img: "images/luehdorfia.jpg",
    region: "中国长江中下游地区（特有）",
    regions: ["chn"],
    wingspan: "约 5.5–6.5 cm",
    intro: "中华虎凤蝶是中国特有的珍稀蝴蝶，国家二级保护动物，被昆虫学界誉为「国宝」。翅黑色配黄色虎纹般的条带，胸部与翅基密生黄毛，是早春最早出现的蝴蝶之一。",
    highlights: [
      "中国特有种、国家二级保护，珍稀的「活化石」名蝶",
      "黑底黄纹形似虎斑，早春三月即羽化飞舞",
      "幼虫专食杜衡、细辛，对生境要求严苛"
    ],
    tags: ["国家二级", "中国特有", "早春名蝶"]
  },
  {
    id: "parispeacock",
    cn: "巴黎翠凤蝶",
    en: "Paris Peacock",
    sci: "Papilio paris",
    family: "凤蝶科 Papilionidae",
    img: "images/parispeacock.jpg",
    region: "中国南方及南亚、东南亚",
    regions: ["chn", "sea", "sas"],
    wingspan: "约 9.5–12.5 cm",
    intro: "巴黎翠凤蝶又名大琉璃纹凤蝶，是凤蝶属中色彩华丽的代表。黑褐底色上散布翠绿色鳞片，后翅有一块金属蓝绿色亮斑，飞行迅速，是中国南方常见而惊艳的大型凤蝶。",
    highlights: [
      "后翅金属蓝绿亮斑在阳光下流光溢彩，辨识度极高",
      "后翅眼纹与尾突构成「假头」，迷惑天敌攻击方向",
      "飞行迅捷、喜访白花，常见于山坡阔叶林"
    ],
    tags: ["翠绿亮斑", "假头防御", "南方常见"]
  },
  {
    id: "broadtail",
    cn: "宽尾凤蝶",
    en: "Broad-tailed Swallowtail",
    sci: "Agehana elwesi",
    family: "凤蝶科 Papilionidae",
    img: "images/broadtail.jpg",
    region: "中国中南部（特有）",
    regions: ["chn"],
    wingspan: "约 9–13 cm",
    intro: "宽尾凤蝶是中国特有的大型凤蝶，国家「三有」保护动物。最显著的特征是后翅那对异常宽大的尾突（含两条翅脉），黑褐翅面配紫红色新月斑，深藏于人烟稀少的深山密林。",
    highlights: [
      "尾突宽大独特，内含两条翅脉，凤蝶中绝无仅有",
      "中国特有种，栖于海拔300–1500米深山密林",
      "幼虫取食鹅掌楸、厚朴等木兰科植物"
    ],
    tags: ["中国特有", "宽尾突", "深山名蝶"]
  },
  {
    id: "junglequeen",
    cn: "箭环蝶",
    en: "Jungle Queen",
    sci: "Stichophthalma howqua",
    family: "蛱蝶科 Nymphalidae",
    img: "images/junglequeen.jpg",
    region: "中国南方、中南半岛及中国台湾",
    regions: ["chn", "sea"],
    wingspan: "约 10–11 cm",
    intro: "箭环蝶是大型林栖蝴蝶，翅呈橙黄至赭黄色，前后翅周边环绕一圈箭簇状（似小鱼）的黑斑而得名。翅腹面有一列醒目的眼斑，常于黎明黄昏在幽深竹林小道间翩然飘飞。",
    highlights: [
      "翅缘成列的箭簇／鱼形黑纹是其名称由来与识别特征",
      "腹面眼斑成列，可惊吓或转移天敌注意",
      "幼虫食棕榈科与禾本科，成虫嗜吸树液腐果"
    ],
    tags: ["箭簇纹", "竹林精灵", "林栖大蝶"]
  },
  {
    id: "apollo",
    cn: "阿波罗绢蝶",
    en: "Apollo",
    sci: "Parnassius apollo",
    family: "凤蝶科 Papilionidae",
    img: "images/apollo.jpg",
    region: "欧亚高山地带（欧洲至中国新疆）",
    regions: ["weu", "eeu", "cas", "chn"],
    wingspan: "约 7.9–9.2 cm",
    intro: "阿波罗绢蝶是珍贵的大型高山绢蝶，翅白色而半透明，后翅缀有镶黑边的鲜红色圆斑，宛如雪山上的精灵。它是最早被列入《濒危野生动植物种国际贸易公约》保护的昆虫之一。",
    highlights: [
      "半透明白翅配鲜红眼斑，高山蝴蝶的经典形象",
      "最早被列入 CITES 保护的昆虫之一，多国已立法保护",
      "栖于750–2000米亚高山带，幼虫食景天属植物"
    ],
    tags: ["高山绢蝶", "CITES保护", "红斑白翅"]
  },
  {
    id: "citrus",
    cn: "柑橘凤蝶",
    en: "Asian Swallowtail",
    sci: "Papilio xuthus",
    family: "凤蝶科 Papilionidae",
    img: "images/citrus.jpg",
    region: "中国大部及东亚",
    regions: ["chn", "jpn", "sea"],
    wingspan: "约 7–9 cm",
    intro: "柑橘凤蝶是中国城乡最常见的大型凤蝶之一，黑色翅面布满黄色带纹，后翅具尾突与红蓝眼斑。幼虫以柑橘、花椒等芸香科植物为食，市区郊野皆可见其翩飞。",
    highlights: [
      "最常见的庭院凤蝶，幼虫嗜食柑橘类，故名",
      "一年可发生多代，成虫5–10月活跃",
      "幼虫受惊伸出橙色臭角自卫，是观察变态的入门物种"
    ],
    tags: ["城乡常见", "柑橘食客", "多代繁殖"]
  },
  {
    id: "bluebottle",
    cn: "青凤蝶",
    en: "Common Bluebottle",
    sci: "Graphium sarpedon",
    family: "凤蝶科 Papilionidae",
    img: "images/bluebottle.jpg",
    region: "东亚、南亚至东南亚",
    regions: ["chn", "jpn", "sea", "sas"],
    wingspan: "约 7–8 cm",
    intro: "青凤蝶又名樟青凤蝶，黑褐色翅面贯穿一列半透明的青绿色斑带，宛如一条玉带。飞行迅速，酷爱香樟，常成群在花间采蜜或在湿地吸水。",
    highlights: [
      "翅面青绿斑带似玉带，飞行迅捷难以捕捉",
      "偏爱樟科植物，幼虫食香樟叶",
      "秋季常数十只聚于花坛集体吸蜜"
    ],
    tags: ["青带玉带", "樟树之友", "飞行迅捷"]
  },
  {
    id: "chinapeacock",
    cn: "碧凤蝶",
    en: "Chinese Peacock",
    sci: "Papilio bianor",
    family: "凤蝶科 Papilionidae",
    img: "images/chinapeacock.jpg",
    region: "中国大部及东亚",
    regions: ["chn", "jpn"],
    wingspan: "约 9.5–12.5 cm",
    intro: "碧凤蝶是中国分布极广的大型凤蝶，体翅黑色密布翠绿色亮鳞，后翅有尾突及紫灰、暗红色弦月斑。阳光下翅面流光溢彩，是上海等地体型最大的蝴蝶之一。",
    highlights: [
      "黑底翠绿亮鳞，阳光下闪耀如宝石",
      "后翅亚外缘弦月形紫红斑是识别特征",
      "体型大、飞行有力，常访花吸蜜"
    ],
    tags: ["翠绿亮鳞", "大型凤蝶", "流光溢彩"]
  },
  {
    id: "dragontail",
    cn: "丝带凤蝶",
    en: "Dragon Swallowtail",
    sci: "Sericinus montela",
    family: "凤蝶科 Papilionidae",
    img: "images/dragontail.jpg",
    region: "中国（江西、湖南以北）及朝鲜半岛",
    regions: ["chn"],
    wingspan: "约 4.2–7 cm",
    intro: "丝带凤蝶又名软凤蝶、马兜铃凤蝶，被誉为「梁祝化蝶」的原型。拖着两条修长如绸带的尾突，雌雄异色——雄蝶白底黑纹，雌蝶黄褐配黑，飞舞时优雅似舞动的丝带。",
    highlights: [
      "尾突细长如飘带，飞舞姿态优雅",
      "显著雌雄异色：雄白雌褐",
      "曾被列为中国14种珍贵蝶类之一，幼虫食马兜铃"
    ],
    tags: ["梁祝化蝶", "飘带长尾", "雌雄异色"]
  },
  {
    id: "goldbirdwing",
    cn: "金裳凤蝶",
    en: "Golden Birdwing",
    sci: "Troides aeacus",
    family: "凤蝶科 Papilionidae",
    img: "images/goldbirdwing.jpg",
    region: "中国南方及南亚、东南亚",
    regions: ["chn", "sea", "sas"],
    wingspan: "约 12–16 cm",
    intro: "金裳凤蝶是裳凤蝶属的大型蝴蝶，也是中国最大的蝴蝶之一，国家二级保护动物。前翅天鹅绒黑色，后翅则是耀眼的金黄色，飞行时如金色绸缎舞动，雍容华贵。",
    highlights: [
      "中国最大蝴蝶之一，国家二级保护",
      "后翅金黄绚烂，前翅丝绒黑，对比强烈",
      "幼虫食马兜铃科植物，体内积累毒素御敌"
    ],
    tags: ["国家二级", "中国最大", "金黄后翅"]
  },
  {
    id: "greatmormon",
    cn: "美凤蝶",
    en: "Great Mormon",
    sci: "Papilio memnon",
    family: "凤蝶科 Papilionidae",
    img: "images/greatmormon.jpg",
    region: "中国长江以南及东亚、南亚",
    regions: ["chn", "jpn", "sea", "sas"],
    wingspan: "约 10.5–14.5 cm",
    intro: "美凤蝶是大型无尾或有尾的凤蝶，以显著的雌雄异型与雌蝶多型著称，故又称多型蓝凤蝶。雄蝶蓝黑天鹅绒色，雌蝶则有无尾型与有尾型多种形态，翅基常有醒目红斑。",
    highlights: [
      "雌蝶多型，同种雌蝶可有数种截然不同的翅形",
      "雄蝶蓝黑丝绒光泽，翅基红斑鲜明",
      "大型凤蝶，飞行缓慢爱访花"
    ],
    tags: ["雌蝶多型", "蓝黑丝绒", "大型凤蝶"]
  },
  {
    id: "swallowtailmoth",
    cn: "燕凤蝶",
    en: "White Dragontail",
    sci: "Lamproptera curius",
    family: "凤蝶科 Papilionidae",
    img: "images/swallowtailmoth.jpg",
    region: "中国南方及南亚、东南亚",
    regions: ["chn", "sea", "sas"],
    wingspan: "约 4–4.5 cm",
    intro: "燕凤蝶是世界上最小的凤蝶之一，双翅平展仅约4厘米。前翅中央透明、翅脉清晰，后翅拖着一对超长尾突，形似小燕子。飞行极快，能空中悬停甚至倒飞，常在溪边活动。",
    highlights: [
      "世界最小的凤蝶之一，前翅透明如玻璃",
      "尾突在凤蝶中超长，形似燕尾",
      "飞行迅捷，能悬停与倒飞，宛如蜂鸟"
    ],
    tags: ["迷你凤蝶", "透明前翅", "燕尾悬停"]
  },
  {
    id: "jezebel",
    cn: "报喜斑粉蝶",
    en: "Red-base Jezebel",
    sci: "Delias pasithoe",
    family: "粉蝶科 Pieridae",
    img: "images/jezebel.jpg",
    region: "中国南方及南亚、东南亚",
    regions: ["chn", "sea", "sas"],
    wingspan: "约 6.5–8 cm",
    intro: "报喜斑粉蝶是冬季南方非常常见的艳丽粉蝶，翅背黑色，后翅腹面有鲜艳的黄色与红色斑块，色彩浓烈喜庆。寄主为寄生藤、檀香等，冬季常见其在花间访蜜。",
    highlights: [
      "后翅腹面红黄斑艳丽喜庆，故名「报喜」",
      "冬季南方最常见的粉蝶之一",
      "幼虫群集取食桑寄生、檀香科植物"
    ],
    tags: ["艳丽喜庆", "冬季常见", "群集幼虫"]
  },
  {
    id: "orangetip",
    cn: "鹤顶粉蝶",
    en: "Great Orange Tip",
    sci: "Hebomoia glaucippe",
    family: "粉蝶科 Pieridae",
    img: "images/orangetip.jpg",
    region: "中国南方及南亚、东南亚",
    regions: ["chn", "sea", "sas"],
    wingspan: "约 9–10 cm",
    intro: "鹤顶粉蝶是体型最大的粉蝶之一，白色翅面在前翅顶端有一大块醒目的橙红色三角斑，边缘镶黑，宛如鹤顶丹砂。腹面拟态枯叶，停息时极具伪装性。",
    highlights: [
      "大型粉蝶，前翅顶端橙红斑如「鹤顶」",
      "腹面枯叶状花纹，停息时伪装隐蔽",
      "飞行强劲快速，幼虫食白花菜科植物"
    ],
    tags: ["鹤顶橙斑", "大型粉蝶", "枯叶伪装"]
  },
  {
    id: "migrant",
    cn: "迁粉蝶",
    en: "Common Emigrant",
    sci: "Catopsilia pomona",
    family: "粉蝶科 Pieridae",
    img: "images/migrant.jpg",
    region: "中国南方及南亚、东南亚、澳洲",
    regions: ["chn", "sea", "sas", "aus"],
    wingspan: "约 5.5–8 cm",
    intro: "迁粉蝶是常见的中型粉蝶，翅色多变，有银白到柠檬黄等多种色型。具有季节性迁飞习性，常成群结队迁移，幼虫以决明、铁刀木等豆科植物为食。",
    highlights: [
      "翅色多型，从乳白到柠檬黄变化丰富",
      "有季节性集群迁飞的习性，故名「迁」",
      "繁殖力强，南方农林常见"
    ],
    tags: ["集群迁飞", "多色型", "南方常见"]
  },
  {
    id: "commontiger",
    cn: "虎斑蝶",
    en: "Common Tiger",
    sci: "Danaus genutia",
    family: "蛱蝶科 Nymphalidae",
    img: "images/commontiger.jpg",
    region: "中国南方及南亚、东南亚、澳洲",
    regions: ["chn", "sea", "sas", "aus"],
    wingspan: "约 7–9.5 cm",
    intro: "虎斑蝶翅面橙褐色，沿翅脉镶有黑色条纹与白斑边框，是斑蝶亚科的典型代表。与帝王蝶近缘，幼虫食萝藦科植物积累毒素，橙黑警戒色昭示其不可食。",
    highlights: [
      "橙底黑脉的经典斑蝶警戒色",
      "与帝王蝶同属，亲缘关系密切",
      "幼虫食萝藦科，体内储毒御敌"
    ],
    tags: ["警戒色", "斑蝶代表", "储毒御敌"]
  },
  {
    id: "bluetiger",
    cn: "青斑蝶",
    en: "Blue Tiger",
    sci: "Tirumala limniace",
    family: "蛱蝶科 Nymphalidae",
    img: "images/bluetiger.jpg",
    region: "中国南方及南亚、东南亚",
    regions: ["chn", "sea", "sas"],
    wingspan: "约 8.5–10 cm",
    intro: "青斑蝶翅面黑褐色，缀满淡青蓝色的半透明斑块与条纹，雅致清冷。具迁飞与集群越冬习性，常在特定山谷形成壮观的「蝴蝶谷」聚集景观。",
    highlights: [
      "黑底青蓝斑，色调清雅独特",
      "集群迁飞，可形成蝴蝶谷越冬奇观",
      "幼虫食萝藦科，成虫好访泽兰类植物"
    ],
    tags: ["青蓝斑纹", "集群越冬", "蝴蝶谷"]
  },
  {
    id: "dukeforester",
    cn: "凤眼方环蝶",
    en: "Common Duffer",
    sci: "Discophora sondaica",
    family: "蛱蝶科 Nymphalidae",
    img: "images/dukeforester.jpg",
    region: "中国南方及东南亚",
    regions: ["chn", "sea"],
    wingspan: "约 7.5–9 cm",
    intro: "凤眼方环蝶（方环蝶）翅形方阔，腹面有形似凤眼的大眼斑，用以威吓天敌。喜阴湿竹林，黄昏活动，飞行飘忽，幼虫以竹类等禾本科植物为食。",
    highlights: [
      "腹面凤眼状大眼斑，惊吓捕食者",
      "翅形方阔，黄昏竹林间飘飞",
      "幼虫食竹，与竹林生态紧密相关"
    ],
    tags: ["凤眼斑", "竹林黄昏", "方阔翅形"]
  },
  {
    id: "eveningbrown",
    cn: "稻暮眼蝶",
    en: "Evening Brown",
    sci: "Melanitis leda",
    family: "蛱蝶科 Nymphalidae",
    img: "images/eveningbrown.jpg",
    region: "中国南方及南亚、东南亚、非洲、澳洲",
    regions: ["chn", "sea", "sas", "afr", "aus"],
    wingspan: "约 6–8 cm",
    intro: "稻暮眼蝶翅面暗褐，前翅有橙黑相间的眼斑，腹面则酷似枯叶，随季节呈现旱季型与雨季型差异。多在晨昏与阴天活动，常见于稻田、草丛与林缘。",
    highlights: [
      "腹面枯叶拟态，旱/雨季型差异显著",
      "晨昏活动（暮眼蝶），飞行低掠",
      "幼虫食水稻等禾本科，与农田相伴"
    ],
    tags: ["枯叶拟态", "季节多型", "晨昏活动"]
  },
  {
    id: "peablue",
    cn: "亮灰蝶",
    en: "Pea Blue",
    sci: "Lampides boeticus",
    family: "灰蝶科 Lycaenidae",
    img: "images/peablue.jpg",
    region: "中国淮河以南及欧、非、亚、澳广布",
    regions: ["chn", "sea", "sas", "weu", "afr", "aus"],
    wingspan: "约 2.2–3.6 cm",
    intro: "亮灰蝶是分布极广的小型灰蝶，雄蝶翅面紫褐带紫光，腹面灰白布满波状细纹，后翅外缘有橙黄斑与一对小黑斑及细尾突。幼虫蛀食豆科植物花果。",
    highlights: [
      "世界广布的小灰蝶，腹面波纹细密雅致",
      "后翅细尾突与黑斑组成「假头」迷惑天敌",
      "幼虫蛀食豆科花荚，俗称「豌豆蓝蝶」"
    ],
    tags: ["广布小灰蝶", "假头防御", "波纹腹面"]
  },
  {
    id: "redlacewing",
    cn: "红锯蛱蝶",
    en: "Red Lacewing",
    sci: "Cethosia biblis",
    family: "蛱蝶科 Nymphalidae",
    img: "images/redlacewing.jpg",
    region: "中国南方及南亚、东南亚",
    regions: ["chn", "sea", "sas"],
    wingspan: "约 8–9 cm",
    intro: "红锯蛱蝶是色彩浓烈的中大型蛱蝶，翅正面橘红至暗红色，外缘呈锯齿状并镶白色V形纹，宛如精致的红色蕾丝边。雌雄异型，雌蝶色偏淡。",
    highlights: [
      "翅缘锯齿状镶白色V纹，似红色蕾丝，故称Red Lacewing",
      "橘红底色配黑色网纹，色彩对比强烈艳丽",
      "幼虫取食西番莲科蛇王藤，群集生活"
    ],
    tags: ["红色蕾丝", "锯齿翅缘", "艳丽蛱蝶"]
  },
  {
    id: "paperkite",
    cn: "大白斑蝶",
    en: "Paper Kite",
    sci: "Idea leuconoe",
    family: "蛱蝶科 Nymphalidae",
    img: "images/paperkite.jpg",
    region: "中国台湾及东南亚岛屿",
    regions: ["chn", "sea"],
    wingspan: "约 12–14 cm",
    intro: "大白斑蝶是大型而优雅的斑蝶，半透明的乳白色翅膀上密布黑色脉纹与斑点，状如宣纸或风筝，飞行缓慢飘逸。因体型大、飞得慢，俗称「大笨蝶」，是蝴蝶园的明星。",
    highlights: [
      "米白翅面布满黑纹如宣纸风筝，故名Paper Kite",
      "飞行缓慢飘逸，俗称「大笨蝶」",
      "幼虫食爬森藤储毒，成虫有警戒色"
    ],
    tags: ["宣纸翅膀", "大笨蝶", "优雅飘逸"]
  },
  {
    id: "owl",
    cn: "猫头鹰环蝶",
    en: "Owl Butterfly",
    sci: "Caligo memnon",
    family: "蛱蝶科 Nymphalidae",
    img: "images/owl.jpg",
    region: "中美洲与南美洲热带雨林",
    regions: ["cam", "nsa"],
    wingspan: "约 13–15 cm",
    intro: "猫头鹰环蝶是举世闻名的大型蝴蝶，翅腹面有一对酷似猫头鹰眼睛的巨大眼斑，是惊吓天敌的精妙伪装。翅背面则泛紫蓝色光泽。多在晨昏与阴天低飞。",
    highlights: [
      "翅腹面巨大眼斑形似猫头鹰眼，威吓天敌",
      "大型强健，翅展可达15厘米",
      "黄昏活动，嗜食发酵腐果汁液"
    ],
    tags: ["猫头鹰眼斑", "巨型蛱蝶", "黄昏飞行"]
  },
  {
    id: "nawab",
    cn: "二尾蛱蝶",
    en: "Great Nawab",
    sci: "Polyura eudamippus",
    family: "蛱蝶科 Nymphalidae",
    img: "images/nawab.jpg",
    region: "中国南方及南亚、东南亚",
    regions: ["chn", "sea", "sas"],
    wingspan: "约 8–10 cm",
    intro: "二尾蛱蝶是强健的大型蛱蝶，翅面淡黄绿配黑色宽边，后翅各拖着两条尾突（共四尾），故名。飞行迅猛有力，喜吸食树液与腐果，常在林间高速穿梭。",
    highlights: [
      "后翅各具两条尾突，合计四尾，辨识度高",
      "淡黄绿配黑边，体格强健飞行迅猛",
      "嗜吸树液腐果，性凶悍好争抢"
    ],
    tags: ["四尾突", "强健迅猛", "林间霸主"]
  },
  {
    id: "bluecrow",
    cn: "蓝点紫斑蝶",
    en: "Blue-spotted Crow",
    sci: "Euploea midamus",
    family: "蛱蝶科 Nymphalidae",
    img: "images/bluecrow.jpg",
    region: "中国南方及南亚、东南亚",
    regions: ["chn", "sea", "sas"],
    wingspan: "约 8–9.5 cm",
    intro: "蓝点紫斑蝶翅面黑褐色泛紫蓝色光泽，翅缘镶有成列的白色与蓝色斑点，低调中透着金属光彩。与多种斑蝶形成拟态群，幼虫食有毒的夹竹桃科植物。",
    highlights: [
      "黑褐翅泛紫蓝光泽，翅缘蓝白斑点成列",
      "与多种斑蝶互为拟态，共享警戒信号",
      "幼虫食夹竹桃科储毒，雄蝶有发香性标"
    ],
    tags: ["紫蓝光泽", "拟态群", "储毒斑蝶"]
  },
  {
    id: "orangealbatross",
    cn: "红尖粉翅蝶",
    en: "Orange Albatross",
    sci: "Appias nero",
    family: "粉蝶科 Pieridae",
    img: "images/orangealbatross.jpg",
    region: "印度北部至缅甸、东南亚",
    regions: ["sea", "sas"],
    wingspan: "约 6–7 cm",
    intro: "红尖粉翅蝶是现存唯一全翅呈鲜艳橙红色的蝴蝶，雄蝶翅面纯净亮丽，雌蝶翅缘具黑边、后翅有黑带。雄蝶常聚集在河岸沙地吸水，雌蝶多在树冠层活动。",
    highlights: [
      "现存唯一全翅纯橙红色的蝴蝶，辨识度极高",
      "雄蝶翅色纯净，雌蝶翅缘黑边、后翅具黑带",
      "雄蝶群集河岸沙地吸水，雌蝶多活动于树冠层"
    ],
    tags: ["全橙红翅", "唯一橙蝶", "吸水习性"]
  },
  {
    id: "sawtooth",
    cn: "红肩锯粉蝶",
    en: "Red-spot Sawtooth",
    sci: "Prioneris clemanthe",
    family: "粉蝶科 Pieridae",
    img: "images/sawtooth.jpg",
    region: "中国南部及印度、东南亚",
    regions: ["chn", "sas", "sea"],
    wingspan: "约 4.5–5.8 cm",
    intro: "红肩锯粉蝶又名红基锯缘粉蝶，是中大型粉蝶。翅面黄色，缘毛桃红色，前翅外缘宽黑边中嵌有数个黄斑，翅腹银白并具浅褐色圆圈，后翅基部有醒目红斑。",
    highlights: [
      "缘毛呈独特桃红色，是辨识特征之一",
      "翅腹银白带浅褐圆圈、后翅基部红斑醒目",
      "栖于森林边缘，常在溪边与开阔地快速飞行"
    ],
    tags: ["桃红缘毛", "红基斑", "溪边吸水"]
  },
  {
    id: "chocalbatross",
    cn: "灵奇尖粉蝶",
    en: "Chocolate Albatross",
    sci: "Appias lyncida",
    family: "粉蝶科 Pieridae",
    img: "images/chocalbatross.jpg",
    region: "中国南部、中国台湾及东南亚",
    regions: ["chn", "sea"],
    wingspan: "约 5–6 cm",
    intro: "灵奇尖粉蝶是平地到中海拔常见的粉蝶。雄蝶翅背白色，前翅具黑褐色锯齿状外缘斑，后翅泛黄；雌蝶黑褐斑纹更发达。飞行快速，喜访花吸水。",
    highlights: [
      "前翅黑褐外缘内侧呈锯齿状，是识别要点",
      "雌雄斑纹差异明显，雌蝶黑斑更发达",
      "多世代种，全年可见，飞行快速喜吸水"
    ],
    tags: ["锯齿外缘", "雌雄异型", "常见种"]
  },
  {
    id: "commongull",
    cn: "绿斑粉蝶",
    en: "Common Gull",
    sci: "Cepora nerissa",
    family: "粉蝶科 Pieridae",
    img: "images/commongull.jpg",
    region: "中国南部、南亚及东南亚",
    regions: ["chn", "sas", "sea"],
    wingspan: "约 4.5–5.5 cm",
    intro: "绿斑粉蝶翅面粉白色，翅脉黑色清晰，外缘有一列黑色三角斑。旱季型翅脉黑纹更粗重、泛黄，与雨季型差异明显。常见于开阔林缘与花丛。",
    highlights: [
      "翅脉黑色清晰、外缘成列黑三角斑",
      "具旱季型/雨季型，旱季型黑纹更粗泛黄",
      "常见于开阔林缘与花丛，飞行活跃"
    ],
    tags: ["黑脉清晰", "旱雨季型", "林缘常见"]
  },
  {
    id: "paleclouded",
    cn: "斑缘豆粉蝶",
    en: "Eastern Pale Clouded Yellow",
    sci: "Colias erate",
    family: "粉蝶科 Pieridae",
    img: "images/paleclouded.jpg",
    region: "欧亚温带广布（含中国大部）",
    regions: ["weu", "eeu", "cas", "chn"],
    wingspan: "约 4–5 cm",
    intro: "斑缘豆粉蝶翅面柠檬黄，前后翅外缘具宽阔黑带。雌蝶有黄、淡白二型。常在草原、田野、牧场上晒太阳，幼虫取食豆科植物。",
    highlights: [
      "柠檬黄翅配宽阔黑色外缘带",
      "雌蝶有黄色型与淡白色型二型",
      "好在裸地岩石上张翅晒太阳，幼虫食豆科"
    ],
    tags: ["黄翅黑边", "晒日光浴", "食豆科"]
  },
  {
    id: "orangetipeu",
    cn: "红襟粉蝶",
    en: "Orange Tip",
    sci: "Anthocharis cardamines",
    family: "粉蝶科 Pieridae",
    img: "images/orangetipeu.jpg",
    region: "欧洲至东亚温带（含中国各地）",
    regions: ["weu", "eeu", "chn", "jpn"],
    wingspan: "约 4–5 cm",
    intro: "红襟粉蝶翅白色，雄蝶前翅端部具醒目橙红色斑，雌蝶则全白。后翅反面有美丽的苔绿色云状斑（实为黄黑鳞片混生），停栖时是花丛中的完美伪装。",
    highlights: [
      "雄蝶前翅端橙红、雌蝶纯白，雌雄异型",
      "后翅反面苔绿云斑实为黄黑鳞混生，绝佳伪装",
      "早春出现，栖于湿润草地、林地与河堤"
    ],
    tags: ["橙翅端", "绿云斑伪装", "早春蝶"]
  },
  {
    id: "cleopatra",
    cn: "山黄蝶",
    en: "Cleopatra",
    sci: "Gonepteryx cleopatra",
    family: "粉蝶科 Pieridae",
    img: "images/cleopatra.jpg",
    region: "地中海沿岸及南欧、北非",
    regions: ["weu", "afr"],
    wingspan: "约 5–7 cm",
    intro: "山黄蝶是钩粉蝶属中最引人注目的一种。雄蝶柠檬黄翅面、前翅中央泛深橙色，翅尖微钩、后翅具小尾突，形似叶片。雌蝶色淡。叶状翅形是绝佳拟态。",
    highlights: [
      "雄蝶前翅中央泛深橙色，黄粉蝶中最醒目",
      "翅尖微钩、后翅小尾突，形如叶片可拟态",
      "地中海地区由深冬至秋皆为飞行期"
    ],
    tags: ["橙晕黄翅", "叶状拟态", "地中海"]
  },
  {
    id: "fieldii",
    cn: "橙黄豆粉蝶",
    en: "Fields Clouded Yellow",
    sci: "Colias fieldii",
    family: "粉蝶科 Pieridae",
    img: "images/fieldii.jpg",
    region: "中国中西部（特有）及喜马拉雅",
    regions: ["chn", "cas"],
    wingspan: "约 4.3–5.8 cm",
    intro: "橙黄豆粉蝶为中国特有，翅面呈鲜艳橙红色，前后翅外缘有黑色宽带，缘毛粉红。与斑缘豆粉蝶相似但翅色更偏橙红。栖于山谷、溪流与林缘。",
    highlights: [
      "翅面橙红，比近似的斑缘豆粉蝶更偏橙",
      "缘毛粉红色，前后翅中室端黑斑较大",
      "中国特有种，栖于山谷溪流与林缘"
    ],
    tags: ["橙红翅", "中国特有", "粉红缘毛"]
  },
  {
    id: "blackveined",
    cn: "绢粉蝶",
    en: "Black-veined White",
    sci: "Aporia crataegi",
    family: "粉蝶科 Pieridae",
    img: "images/blackveined.jpg",
    region: "欧亚大陆温带广布",
    regions: ["weu", "eeu", "cas", "chn"],
    wingspan: "约 6.3–7.3 cm",
    intro: "绢粉蝶翅白色而鳞片稀薄略透明，黑色翅脉贯穿全翅极为醒目，前翅外缘有烟黑色三角斑。常成群在花丛与湿地吸水，幼虫取食蔷薇科植物。",
    highlights: [
      "白翅黑脉贯穿，鳞片稀薄略显半透明",
      "前翅外缘有烟黑色三角斑",
      "常成群在花丛湿地吸水，幼虫食蔷薇科"
    ],
    tags: ["黑脉白翅", "薄鳞半透", "群飞吸水"]
  },
  {
    id: "commonmime",
    cn: "斑凤蝶",
    en: "Common Mime",
    sci: "Chilasa clytia",
    family: "凤蝶科 Papilionidae",
    img: "images/commonmime.jpg",
    region: "中国南部、南亚及东南亚",
    regions: ["chn", "sas", "sea"],
    wingspan: "约 9–10 cm",
    intro: "斑凤蝶是著名的拟态高手，有多种型：常见型翅黑褐色满布白斑、翅缘有白点，拟态有毒的青斑蝶类；另有黄褐条纹型则拟态虎斑蝶。靠模仿有毒蝴蝶躲避天敌。",
    highlights: [
      "有多个型，分别拟态青斑蝶或虎斑蝶等有毒种",
      "贝氏拟态的经典案例，借他种警戒色自保",
      "幼虫取食樟科植物，分布于低海拔林区"
    ],
    tags: ["拟态高手", "多型", "贝氏拟态"]
  },
  {
    id: "limepapilio",
    cn: "达摩凤蝶",
    en: "Lime Swallowtail",
    sci: "Papilio demoleus",
    family: "凤蝶科 Papilionidae",
    img: "images/limepapilio.jpg",
    region: "亚洲广布，扩散至中东、大洋洲",
    regions: ["chn", "sas", "sea", "aus"],
    wingspan: "约 8–10 cm",
    intro: "达摩凤蝶又名无尾凤蝶，是世界上扩散最成功的凤蝶之一。翅黑色密布黄色斑块与斑点，后翅无尾突、有一个带红蓝的眼斑。繁殖力强，是柑橘的常见害虫。",
    highlights: [
      "后翅无尾突，黑底密布黄斑，辨识度高",
      "世界扩散最成功的凤蝶之一，适应力极强",
      "幼虫取食芸香科，是柑橘园常见种"
    ],
    tags: ["无尾", "扩散力强", "柑橘害虫"]
  },
  {
    id: "citrusswallowtail",
    cn: "非洲达摩凤蝶",
    en: "Citrus Swallowtail",
    sci: "Papilio demodocus",
    family: "凤蝶科 Papilionidae",
    img: "images/citrusswallowtail.jpg",
    region: "撒哈拉以南非洲及马达加斯加",
    regions: ["afr"],
    wingspan: "约 8–11 cm",
    intro: "非洲达摩凤蝶是非洲最常见的凤蝶之一，与达摩凤蝶极相似：翅黑色满布黄斑、后翅无尾突，臀角有红蓝眼斑。是非洲柑橘的主要害虫。",
    highlights: [
      "非洲版的达摩凤蝶，黑底黄斑、后翅无尾",
      "臀角具红蓝眼斑，飞行迅速",
      "幼虫食芸香科，是非洲柑橘重要害虫"
    ],
    tags: ["非洲常见", "无尾", "柑橘害虫"]
  },
  {
    id: "paradisebirdwing",
    cn: "极乐鸟翼凤蝶",
    en: "Paradise Birdwing",
    sci: "Ornithoptera paradisea",
    family: "凤蝶科 Papilionidae",
    img: "images/paradisebirdwing.jpg",
    region: "新几内亚",
    regions: ["aus"],
    wingspan: "约 13–19 cm",
    intro: "极乐鸟翼凤蝶是世界上最华丽的蝴蝶之一。雄蝶翅面有耀眼的金绿色光泽，后翅延伸出独特的细长尾突（钩尾），是鸟翼凤蝶属中唯一具尾的种。雌蝶大而呈褐白色。",
    highlights: [
      "雄蝶金绿色金属光泽，后翅有独特细长钩尾",
      "鸟翼凤蝶属中唯一具尾突的种",
      "CITES附录Ⅱ保护，热带雨林珍稀大蝶"
    ],
    tags: ["金绿光泽", "钩尾突", "新几内亚"]
  },
  {
    id: "commonbirdwing",
    cn: "裳凤蝶",
    en: "Common Birdwing",
    sci: "Troides helena",
    family: "凤蝶科 Papilionidae",
    img: "images/commonbirdwing.jpg",
    region: "南亚、东南亚至中国南部",
    regions: ["chn", "sas", "sea"],
    wingspan: "约 14–16 cm",
    intro: "裳凤蝶是大型鸟翼凤蝶。雄蝶前翅天鹅绒黑色、翅脉两侧灰白，后翅金黄色镶黑边，飞行时金光灿灿。胸侧有红色绒毛。CITES附录Ⅱ保护。",
    highlights: [
      "后翅金黄镶黑边，飞行时金光闪耀",
      "前翅黑色翅脉两侧镶灰白，胸侧红绒毛",
      "幼虫食马兜铃，体内积累毒素自卫"
    ],
    tags: ["金黄后翅", "大型", "CITES保护"]
  },
  {
    id: "oblongbirdwing",
    cn: "海滨裳凤蝶",
    en: "Oblong-spotted Birdwing",
    sci: "Troides oblongomaculatus",
    family: "凤蝶科 Papilionidae",
    img: "images/oblongbirdwing.jpg",
    region: "印度尼西亚、新几内亚等岛屿",
    regions: ["sea", "aus"],
    wingspan: "约 13–15 cm",
    intro: "海滨裳凤蝶是分布于东南亚岛屿的大型裳凤蝶。雄蝶前翅黑色，后翅金黄色具长条形黑斑，与裳凤蝶相似但黄斑形状偏长。胸部有红色绒毛。",
    highlights: [
      "后翅金黄、黑斑呈长条形，是其名称由来",
      "岛屿分布的大型裳凤蝶",
      "幼虫食马兜铃，体内含防御毒素"
    ],
    tags: ["金黄后翅", "长形黑斑", "岛屿种"]
  },
  {
    id: "easterntiger",
    cn: "北美大黄凤蝶",
    en: "Eastern Tiger Swallowtail",
    sci: "Papilio glaucus",
    family: "凤蝶科 Papilionidae",
    img: "images/easterntiger.jpg",
    region: "北美洲东部",
    regions: ["wna", "ena"],
    wingspan: "约 9–14 cm",
    intro: "北美大黄凤蝶（美洲虎纹凤蝶）是北美最著名的蝴蝶之一。翅黄色，有四条虎纹般的黑色竖条纹，翅缘黑带，后翅有尾突和蓝、橙斑。雌蝶有黄、黑两型。",
    highlights: [
      "黄底配虎纹黑条，是北美标志性蝴蝶",
      "后翅具尾突、蓝橙斑，雌蝶有黑化型",
      "多个美国州的州蝶，常见于庭院花园"
    ],
    tags: ["虎纹", "北美名蝶", "雌二型"]
  },
  {
    id: "clubtail",
    cn: "红斑锤尾凤蝶",
    en: "Common Clubtail",
    sci: "Losaria coon",
    family: "凤蝶科 Papilionidae",
    img: "images/clubtail.jpg",
    region: "南亚、东南亚至中国南部",
    regions: ["chn", "sas", "sea"],
    wingspan: "约 9–11 cm",
    intro: "红斑锤尾凤蝶是奇特的凤蝶，后翅有特别长而末端膨大成棒槌状的尾突。翅黑褐色，前翅有灰白纵纹，后翅有黄白斑和臀角红斑。",
    highlights: [
      "后翅尾突细长、末端膨大如锤，极独特",
      "后翅有黄白斑列与臀角红斑",
      "拟态有毒的麝凤蝶类以自保"
    ],
    tags: ["棒槌尾突", "红臀斑", "拟态"]
  },
  {
    id: "bhutanitis",
    cn: "不丹褐凤蝶",
    en: "Bhutan Glory",
    sci: "Bhutanitis lidderdalii",
    family: "凤蝶科 Papilionidae",
    img: "images/bhutanitis.jpg",
    region: "喜马拉雅、中国西南、缅甸泰国",
    regions: ["chn", "sas", "sea"],
    wingspan: "约 9–11 cm",
    intro: "不丹褐凤蝶又名多尾凤蝶，是极珍稀的高山凤蝶。翅黑褐色，前翅有多条淡黄白色波状细纹，后翅有多个尾突、臀角具醒目的大红斑和蓝黑斑。CITES附录Ⅱ保护。",
    highlights: [
      "后翅有多个尾突、臀角大红斑，极为独特",
      "前翅密布淡黄波状细纹，黑褐底色",
      "珍稀高山种，CITES附录Ⅱ保护"
    ],
    tags: ["多尾突", "高山珍蝶", "CITES保护"]
  },
  {
    id: "spanishfestoon",
    cn: "红星花凤蝶",
    en: "Spanish Festoon",
    sci: "Zerynthia rumina",
    family: "凤蝶科 Papilionidae",
    img: "images/spanishfestoon.jpg",
    region: "西班牙、葡萄牙、法国南部、北非",
    regions: ["weu", "afr"],
    wingspan: "约 4.5–5 cm",
    intro: "红星花凤蝶是绢蝶亚科锯凤蝶属的小型无尾凤蝶，黑黄相间、有花边状精致图案，前翅缀有醒目的鲜红色斑点。从深冬到春末可见，是地中海地区的早春名蝶。",
    highlights: [
      "黑黄花边图案配前翅鲜红斑点，极易辨认",
      "无尾凤蝶类，翅缘呈锯齿状",
      "地中海早春蝶，幼虫食马兜铃"
    ],
    tags: ["红斑", "花边图案", "地中海"]
  },
  {
    id: "chineseswordtail",
    cn: "华夏剑凤蝶",
    en: "Chinese Swordtail",
    sci: "Pazala glycerion",
    family: "凤蝶科 Papilionidae",
    img: "images/chineseswordtail.jpg",
    region: "中国中部及南部",
    regions: ["chn"],
    wingspan: "约 5.5–7 cm",
    intro: "华夏剑凤蝶是中国特色的剑凤蝶。翅淡黄白色，有数条黑色横纹，后翅有细长如剑的尾突和橙黄、蓝色臀斑。早春出现，飞行轻快。",
    highlights: [
      "后翅有细长如剑的尾突，故名剑凤蝶",
      "淡黄白翅配黑色横纹，臀角橙蓝斑",
      "早春单代发生，飞行轻快"
    ],
    tags: ["剑状尾突", "黑横纹", "早春"]
  },
  {
    id: "greenbirdwing",
    cn: "绿鸟翼凤蝶",
    en: "Green Birdwing",
    sci: "Ornithoptera priamus",
    family: "凤蝶科 Papilionidae",
    img: "images/greenbirdwing.jpg",
    region: "印度尼西亚、新几内亚、澳大利亚北部",
    regions: ["sea", "aus"],
    wingspan: "约 13–19 cm",
    intro: "绿鸟翼凤蝶又名绿鸟翼蝶，是印度尼西亚国蝶。雄蝶翅面有鲜艳的金绿色斑块映衬黑色底，光泽随角度变幻；雌蝶大而呈褐色带白斑。胸侧红绒毛。",
    highlights: [
      "雄蝶金绿斑块映黑底，光泽随角度变幻",
      "印度尼西亚国蝶，热带雨林大型蝶",
      "幼虫食马兜铃，CITES附录Ⅱ保护"
    ],
    tags: ["金绿斑", "国蝶", "大型"]
  },
  {
    id: "iceclear",
    cn: "冰清绢蝶",
    en: "Glacial Apollo",
    sci: "Parnassius glacialis",
    family: "凤蝶科 Papilionidae",
    img: "images/iceclear.jpg",
    region: "中国东部、朝鲜半岛、日本",
    regions: ["chn", "jpn"],
    wingspan: "约 6–7 cm",
    intro: "冰清绢蝶是绢蝶属的优雅种。翅白色半透明、翅脉黑色，前翅有灰色横斑，后翅后缘有黑带及黑色绒毛。早春至初夏出现，飞行缓慢，如冰雪般清丽。",
    highlights: [
      "白色半透明翅配黑色翅脉，清丽如冰雪",
      "后翅后缘黑带附黑绒毛",
      "飞行缓慢，幼虫食马兜铃科与紫堇属"
    ],
    tags: ["半透白翅", "黑脉", "早春"]
  },
  {
    id: "rajahbrooke",
    cn: "翠叶红颈凤蝶",
    en: "Rajah Brooke's Birdwing",
    sci: "Trogonoptera brookiana",
    family: "凤蝶科 Papilionidae",
    img: "images/rajahbrooke.jpg",
    region: "马来半岛、婆罗洲、苏门答腊",
    regions: ["sea"],
    wingspan: "约 13–17 cm",
    intro: "翠叶红颈凤蝶是马来西亚国蝶。翅黑色天鹅绒质，前翅有一排翠绿色齿状斑纹形如叶片，颈部有一圈鲜红色绒毛。金绿鳞片在阳光下流光溢彩，极华贵。",
    highlights: [
      "前翅一排翠绿齿状斑形如绿叶，黑天鹅绒底",
      "颈部一圈鲜红绒毛，是名称由来",
      "马来西亚国蝶，金绿鳞片阳光下变幻"
    ],
    tags: ["翠绿齿斑", "红颈", "国蝶"]
  },
  {
    id: "croesusbirdwing",
    cn: "红鸟翼凤蝶",
    en: "Wallace's Golden Birdwing",
    sci: "Ornithoptera croesus",
    family: "凤蝶科 Papilionidae",
    img: "images/croesusbirdwing.jpg",
    region: "印度尼西亚摩鹿加群岛",
    regions: ["sea"],
    wingspan: "约 13–16 cm",
    intro: "红鸟翼凤蝶是华莱士发现的著名大型凤蝶。雄蝶后翅及前翅基部有金橙色至金绿色的耀眼斑块，光泽随角度由橙变绿，黑底映衬，极为绚丽。",
    highlights: [
      "雄蝶金橙至金绿斑块，光泽随角度变幻",
      "华莱士首次发现并描述的著名种",
      "CITES附录Ⅱ保护，摩鹿加群岛特有"
    ],
    tags: ["金橙光泽", "华莱士", "大型"]
  },
  {
    id: "commonrose",
    cn: "红珠凤蝶",
    en: "Common Rose",
    sci: "Pachliopta aristolochiae",
    family: "凤蝶科 Papilionidae",
    img: "images/commonrose.jpg",
    region: "南亚、东南亚至中国南部",
    regions: ["chn", "sas", "sea"],
    wingspan: "约 8–10 cm",
    intro: "红珠凤蝶又名红纹凤蝶、七星蝶。翅黑色，后翅有白斑和一列鲜红色的弦月斑，腹部红色。体内含毒、味苦，是被多种无毒蝶拟态的模型种。",
    highlights: [
      "后翅一列鲜红弦月斑、腹部红色，警戒色",
      "体内含马兜铃酸毒素，被多种蝶拟态",
      "飞行缓慢从容，有恃无恐"
    ],
    tags: ["红弦月斑", "有毒模型", "红腹"]
  },
  {
    id: "bluebirdwing",
    cn: "蓝鸟翼凤蝶",
    en: "D'Urville's Birdwing",
    sci: "Ornithoptera urvillianus",
    family: "凤蝶科 Papilionidae",
    img: "images/bluebirdwing.jpg",
    region: "所罗门群岛、新爱尔兰",
    regions: ["sea", "aus"],
    wingspan: "约 14–17 cm",
    intro: "蓝鸟翼凤蝶是罕见的蓝色鸟翼凤蝶（现视为绿鸟翼凤蝶亚种）。雄蝶翅面呈深邃的金属蓝绿色渐变，黑底映衬，在不同光线下幽蓝闪烁。腹部金黄，胸侧红绒毛。",
    highlights: [
      "雄蝶翅面金属蓝绿色渐变，幽蓝闪烁",
      "鸟翼凤蝶中罕见的蓝色类型",
      "幼虫食马兜铃，CITES附录Ⅱ保护"
    ],
    tags: ["金属蓝", "稀有", "大型"]
  },
  {
    id: "ulysses",
    cn: "美洲蓝凤蝶",
    en: "Ulysses Swallowtail",
    sci: "Papilio ulysses",
    family: "凤蝶科 Papilionidae",
    img: "images/ulysses.jpg",
    region: "澳大利亚北部、新几内亚、印尼",
    regions: ["aus", "sea"],
    wingspan: "约 10–14 cm",
    intro: "美洲蓝凤蝶（天堂凤蝶）是澳洲昆士兰的标志蝴蝶。翅面有大片耀眼的电光蓝色，黑色宽边镶嵌，飞行时蓝光闪烁如蓝宝石，后翅有尾突。",
    highlights: [
      "翅面大片电光蓝镶黑边，飞行时蓝光闪耀",
      "澳洲昆士兰旅游标志蝴蝶",
      "后翅具尾突，结构色随角度变化"
    ],
    tags: ["电光蓝", "天堂凤蝶", "尾突"]
  },
  {
    id: "atrophaneura",
    cn: "曙凤蝶",
    en: "Horishana Rose",
    sci: "Atrophaneura horishana",
    family: "凤蝶科 Papilionidae",
    img: "images/atrophaneura.jpg",
    region: "中国台湾（特有）",
    regions: ["chn"],
    wingspan: "约 9–12 cm",
    intro: "曙凤蝶是中国台湾特有的大型麝凤蝶。翅黑褐色，后翅有大片桃红色至洋红色的斑块，臀区色彩尤为鲜艳，飞行时如曙光般绚丽。胸侧红绒毛。",
    highlights: [
      "后翅大片桃红至洋红斑块，如曙光绚丽",
      "中国台湾特有的大型麝凤蝶",
      "幼虫食马兜铃，体内含防御毒素"
    ],
    tags: ["桃红后翅", "台湾特有", "大型"]
  },
  {
    id: "fivebar",
    cn: "斜纹绿凤蝶",
    en: "Fivebar Swordtail",
    sci: "Pathysa agetes",
    family: "凤蝶科 Papilionidae",
    img: "images/fivebar.jpg",
    region: "中国南部、南亚及东南亚",
    regions: ["chn", "sas", "sea"],
    wingspan: "约 5.5–7 cm",
    intro: "斜纹绿凤蝶（条斑绿凤蝶）翅淡黄绿至白色，有数条黑色斜带，后翅有细长尾突和红色臀斑。飞行迅速，常在溪边湿地吸水。",
    highlights: [
      "淡绿白翅配数条黑色斜带，后翅长尾",
      "臀角有醒目红斑",
      "飞行迅速，雄蝶喜溪边湿地群集吸水"
    ],
    tags: ["黑斜带", "长尾突", "溪边吸水"]
  },
  {
    id: "goldenbirdwing2",
    cn: "荧光裳凤蝶",
    en: "Magellan Birdwing",
    sci: "Troides magellanus",
    family: "凤蝶科 Papilionidae",
    img: "images/goldenbirdwing2.jpg",
    region: "菲律宾、中国台湾兰屿",
    regions: ["sea", "chn"],
    wingspan: "约 14–18 cm",
    intro: "荧光裳凤蝶是大型裳凤蝶，后翅金黄色，最特别的是从特定角度看后翅泛出蓝绿色的荧光（虹彩），随观察角度变幻。胸侧有红色绒毛。",
    highlights: [
      "后翅金黄，特定角度泛蓝绿荧光，独一无二",
      "大型裳凤蝶，飞行华贵",
      "幼虫食马兜铃，CITES附录Ⅱ保护"
    ],
    tags: ["荧光后翅", "虹彩", "大型"]
  },
  {
    id: "threetail",
    cn: "三尾褐凤蝶",
    en: "Chinese Three-tailed Swallowtail",
    sci: "Bhutanitis thaidina",
    family: "凤蝶科 Papilionidae",
    img: "images/threetail.jpg",
    region: "中国陕西、四川、云南（特有）",
    regions: ["chn"],
    wingspan: "约 8–10 cm",
    intro: "三尾褐凤蝶又名中华褐凤蝶，是中国特有的珍稀高山凤蝶。翅有青铜光泽的黑色宽带被8条浅色横线分隔，后翅有3个尾突、臀角大红斑及蓝点。国家二级保护、CITES附录Ⅱ。",
    highlights: [
      "后翅3个尾突、臀角大红斑配蓝点，独特",
      "8条浅线分隔出青铜光泽黑带",
      "中国特有、国家二级保护、CITES附录Ⅱ"
    ],
    tags: ["三尾突", "国家二级", "高山珍蝶"]
  },
  {
    id: "bianorlike",
    cn: "碧翠凤蝶",
    en: "Common Peacock",
    sci: "Papilio polyctor",
    family: "凤蝶科 Papilionidae",
    img: "images/bianorlike.jpg",
    region: "喜马拉雅、中国西部及南部",
    regions: ["chn", "sas"],
    wingspan: "约 9–11 cm",
    intro: "碧翠凤蝶是翠凤蝶类，翅黑色密布翠绿色与金绿色闪光鳞片，后翅有蓝绿色亮斑和尾突、臀角红斑。与碧凤蝶相似但绿色更鲜亮。阳光下流光溢彩。",
    highlights: [
      "翅面密布翠绿金绿闪光鳞，绚丽夺目",
      "后翅蓝绿亮斑配尾突、臀角红斑",
      "喜马拉雅及中国西部山地常见翠凤蝶"
    ],
    tags: ["翠绿闪鳞", "蓝绿亮斑", "尾突"]
  },
  {
    id: "thoas",
    cn: "大黄带凤蝶",
    en: "King Swallowtail",
    sci: "Papilio thoas",
    family: "凤蝶科 Papilionidae",
    img: "images/thoas.jpg",
    region: "美洲（美国南部至南美）",
    regions: ["nsa", "cam", "wna"],
    wingspan: "约 10–14 cm",
    intro: "大黄带凤蝶（草凤蝶、托斯凤蝶）是美洲大型凤蝶，与北美的克瑞斯凤蝶极相似。翅黑色，横贯一条宽阔的黄色斑带，后翅有尾突、黄斑及蓝、红斑点。",
    highlights: [
      "黑翅横贯宽阔黄带，醒目大方",
      "后翅有尾突、黄斑及蓝红斑点",
      "美洲广布大型凤蝶，飞行有力"
    ],
    tags: ["黄色宽带", "美洲大型", "尾突"]
  },
  {
    id: "mocker",
    cn: "非洲白凤蝶",
    en: "Mocker Swallowtail",
    sci: "Papilio dardanus",
    family: "凤蝶科 Papilionidae",
    img: "images/mocker.jpg",
    region: "撒哈拉以南非洲",
    regions: ["afr"],
    wingspan: "约 9–12 cm",
    intro: "非洲白凤蝶是研究拟态的著名物种。雄蝶翅淡黄白色、有黑边和尾突；雌蝶则有多种型，分别拟态不同的有毒蝴蝶（且多数无尾），是贝氏拟态的经典案例。",
    highlights: [
      "雄蝶淡黄白带尾突，形态稳定",
      "雌蝶多型，分别拟态不同有毒蝶（常无尾）",
      "贝氏拟态与遗传研究的经典物种"
    ],
    tags: ["雌多型拟态", "贝氏拟态", "研究名种"]
  },
  {
    id: "podalirius",
    cn: "旖凤蝶",
    en: "Scarce Swallowtail",
    sci: "Iphiclides podalirius",
    family: "凤蝶科 Papilionidae",
    img: "images/podalirius.jpg",
    region: "欧洲、北非、西亚至中国",
    regions: ["weu", "eeu", "cas", "chn"],
    wingspan: "约 6–8 cm",
    intro: "旖凤蝶（剑凤蝶）翅淡黄色，有数条楔形黑色竖纹，后翅有醒目的长剑状尾突、蓝色弦月斑和橙色臀斑。飞行优雅，常在山坡花丛中滑翔。",
    highlights: [
      "淡黄翅配楔形黑竖纹，后翅长剑状尾突",
      "后翅有蓝色弦月斑和橙色臀眼斑",
      "欧洲常见名蝶，飞行优雅善滑翔"
    ],
    tags: ["黑竖纹", "长剑尾", "欧洲名蝶"]
  },
  {
    id: "alpineblack",
    cn: "绿带翠凤蝶",
    en: "Alpine Black Swallowtail",
    sci: "Papilio maackii",
    family: "凤蝶科 Papilionidae",
    img: "images/alpineblack.jpg",
    region: "中国东北、华北、俄远东、朝鲜、日本",
    regions: ["chn", "sib", "jpn"],
    wingspan: "约 9–13 cm",
    intro: "绿带翠凤蝶是东亚最美的翠凤蝶之一。翅黑色密布翠绿金鳞，后翅有一条蓝绿色横带和尾突，臀角红斑。夏型个体大而翠绿鲜亮，春型较小。",
    highlights: [
      "翅面翠绿金鳞，后翅一条蓝绿横带醒目",
      "后翅具尾突、臀角红斑",
      "夏型大而鲜亮，是东亚最美翠凤蝶之一"
    ],
    tags: ["翠绿横带", "尾突", "东亚名蝶"]
  },
  {
    id: "twotailpasha2",
    cn: "双尾褐凤蝶",
    en: "Mansfield's Two-tailed Swallowtail",
    sci: "Bhutanitis mansfieldi",
    family: "凤蝶科 Papilionidae",
    img: "images/twotailpasha2.jpg",
    region: "中国云南、四川（特有）",
    regions: ["chn"],
    wingspan: "约 7–9 cm",
    intro: "双尾褐凤蝶又名二尾凤蝶，是世界罕见的珍稀蝶类，20世纪30年代首次发现于中国云南西部。翅黑色有光泽、有淡黄细横带，后翅有3个尾突、近外缘透亮红斑、蓝色眼点。",
    highlights: [
      "后翅3尾突、透亮红斑配蓝眼点，极珍异",
      "前翅黑色有光泽、淡黄细横带",
      "20世纪30年代发现于云南，世界珍奇蝶种"
    ],
    tags: ["珍稀", "尾突", "中国特有"]
  },
  {
    id: "amphrysusbird",
    cn: "鸟翼裳凤蝶",
    en: "Malay Birdwing",
    sci: "Troides amphrysus",
    family: "凤蝶科 Papilionidae",
    img: "images/amphrysusbird.jpg",
    region: "马来半岛、苏门答腊、爪哇等",
    regions: ["sea"],
    wingspan: "约 12–20 cm",
    intro: "鸟翼裳凤蝶是大型裳凤蝶，共有19个亚种。雄蝶前翅黑色、翅脉两侧白色，后翅金黄色而脉纹清晰、无斑点；飞行优雅，后翅金光灿灿如披金衣。胸侧有红绒毛。",
    highlights: [
      "后翅金黄、脉纹清晰，雄蝶后翅无斑点",
      "大型裳凤蝶，飞行姿态优美",
      "幼虫食马兜铃，CITES附录Ⅱ保护"
    ],
    tags: ["金黄后翅", "清晰脉纹", "大型"]
  },
  {
    id: "dogface",
    cn: "南美大黄蝶",
    en: "Statira Sulphur",
    sci: "Phoebis statira",
    family: "粉蝶科 Pieridae",
    img: "images/dogface.jpg",
    region: "美洲热带（墨西哥至南美）",
    regions: ["nsa", "cam"],
    wingspan: "约 6–7 cm",
    intro: "南美大黄蝶是粉蝶科大黄粉蝶属的中大型粉蝶。雄蝶翅面呈明亮的硫黄色至黄绿色，翅缘有淡色边；常成大群在河岸吸水或集体迁飞，场面壮观。",
    highlights: [
      "雄蝶明亮硫黄色，翅形宽阔",
      "常成大群迁飞或河岸集体吸水",
      "美洲热带广布的大型粉蝶"
    ],
    tags: ["硫黄色", "群飞", "美洲"]
  },
  {
    id: "blackveinpier",
    cn: "黑脉粉蝶",
    en: "Spotted Sawtooth",
    sci: "Prioneris thestylis",
    family: "粉蝶科 Pieridae",
    img: "images/blackveinpier.jpg",
    region: "中国南部、南亚及东南亚",
    regions: ["chn", "sas", "sea"],
    wingspan: "约 6.5–8 cm",
    intro: "黑脉粉蝶（黑边锯粉蝶）翅白色，翅脉粗黑而醒目，前翅顶角及外缘黑色并有白斑，后翅外缘黑斑列，翅反面后翅泛黄。是中大型粉蝶，飞行有力。",
    highlights: [
      "白翅配粗重黑色翅脉，醒目易认",
      "前翅顶角黑色含白斑，后翅缘黑斑列",
      "中大型锯粉蝶，飞行迅速喜吸水"
    ],
    tags: ["粗黑脉", "锯粉蝶", "中大型"]
  },
  {
    id: "morphoaurora",
    cn: "黎明闪蝶",
    en: "Aurora Morpho",
    sci: "Morpho aurora",
    family: "蛱蝶科 Nymphalidae",
    img: "images/morphoaurora.jpg",
    region: "玻利维亚、秘鲁南部",
    regions: ["nsa"],
    wingspan: "约 9–11 cm",
    intro: "黎明闪蝶是一种淡蓝色的小型闪蝶。雄蝶翅面呈辉煌的淡蓝色，前翅前缘带黑色齿纹，后翅内缘灰色，飞舞时闪耀蓝绿紫的金属光泽，翅反面棕灰大理石纹并有成列眼斑。",
    highlights: [
      "翅面辉煌淡蓝，飞舞时闪蓝绿紫金属光",
      "小型闪蝶，翅展约9–11厘米",
      "翅反棕灰大理石纹配成列眼斑"
    ],
    tags: ["淡蓝", "金属光泽", "南美雨林"]
  },
  {
    id: "morphocisseis",
    cn: "月神闪蝶",
    en: "Cisseis Morpho",
    sci: "Morpho cisseis",
    family: "蛱蝶科 Nymphalidae",
    img: "images/morphocisseis.jpg",
    region: "巴西、玻利维亚",
    regions: ["nsa"],
    wingspan: "约 15–18 cm",
    intro: "月神闪蝶是大型闪蝶，部分亚种翅展可超18厘米。前翅有明亮的蓝色金属光泽配广泛黑色宽边，从身体到翅基有深褐色区域，后翅黑色而近身处一块辉煌蓝区，翅反棕色大理石纹带4个大眼斑。",
    highlights: [
      "大型闪蝶，部分亚种翅展超18厘米",
      "明亮蓝金属光配广泛黑色宽边",
      "翅反棕色大理石纹带4个大眼斑"
    ],
    tags: ["大型", "蓝配黑边", "大眼斑"]
  },
  {
    id: "morphocypris2",
    cn: "塞浦路斯闪蝶",
    en: "Cypris Morpho",
    sci: "Morpho cypris",
    family: "蛱蝶科 Nymphalidae",
    img: "images/morphocypris2.jpg",
    region: "哥伦比亚（国蝶）、中美洲",
    regions: ["nsa", "cam"],
    wingspan: "约 9–12 cm",
    intro: "塞浦路斯闪蝶是哥伦比亚国蝶，以高折光度的浓烈金属蓝著称，蓝色比大蓝闪蝶更浓艳，翅面常有一条白色横带斜贯，黑边映衬下蓝光摄人心魄。",
    highlights: [
      "哥伦比亚国蝶，高折光浓烈金属蓝",
      "蓝色比大蓝闪蝶更浓艳",
      "翅面常有白色横带斜贯，黑边映衬"
    ],
    tags: ["哥伦比亚国蝶", "浓烈金属蓝", "白带"]
  },
  {
    id: "morphohecuba",
    cn: "太阳闪蝶",
    en: "Sunset Morpho",
    sci: "Morpho hecuba",
    family: "蛱蝶科 Nymphalidae",
    img: "images/morphohecuba.jpg",
    region: "亚马逊流域、圭亚那",
    regions: ["nsa"],
    wingspan: "约 13–20 cm",
    intro: "太阳闪蝶是最大的闪蝶之一，翅展可达20厘米。它不是蓝色，而是整翅呈棕褐与橙褐交织的霞光花纹，犹如东方日出朝霞满天，色彩花纹复杂，气势恢宏。",
    highlights: [
      "最大的闪蝶之一，翅展可达20厘米",
      "整翅棕褐橙褐霞光纹，如日出朝霞",
      "巴西国蝶级名蝶，非蓝色闪蝶代表"
    ],
    tags: ["巨型", "霞光棕橙", "非蓝闪蝶"]
  },
  {
    id: "morphoamathonte",
    cn: "三眼砂闪蝶",
    en: "Amathonte Morpho",
    sci: "Morpho amathonte",
    family: "蛱蝶科 Nymphalidae",
    img: "images/morphoamathonte.jpg",
    region: "中美洲至南美北部",
    regions: ["cam", "nsa"],
    wingspan: "约 13–15 cm",
    intro: "三眼砂闪蝶是大型蓝闪蝶，翅面呈极其鲜艳浓郁的金属深蓝色，比大蓝闪蝶更深邃饱满，黑边窄，飞行时整片翅膀如蓝宝石般闪烁，是闪蝶中蓝色最纯正的种类之一。",
    highlights: [
      "翅面浓郁金属深蓝，比大蓝闪蝶更深邃",
      "黑边较窄，蓝色面积大而纯正",
      "飞行时整翅如蓝宝石闪烁"
    ],
    tags: ["深邃金属蓝", "大型", "蓝宝石"]
  },
  {
    id: "morphoanaxibia",
    cn: "美神闪蝶",
    en: "Anaxibia Morpho",
    sci: "Morpho anaxibia",
    family: "蛱蝶科 Nymphalidae",
    img: "images/morphoanaxibia.jpg",
    region: "巴西东南部",
    regions: ["nsa"],
    wingspan: "约 13–16 cm",
    intro: "美神闪蝶是巴西特有的大型闪蝶，翅面呈极明亮的银蓝色至天蓝色金属光泽，黑边纤细，蓝色清亮通透，是最优雅的闪蝶之一。",
    highlights: [
      "翅面明亮银蓝至天蓝金属光泽",
      "黑边纤细，蓝色清亮通透",
      "巴西东南部特有的优雅大型闪蝶"
    ],
    tags: ["银蓝", "清亮通透", "巴西特有"]
  },
  {
    id: "morphoamphitryon",
    cn: "星褐闪蝶",
    en: "Amphitryon Morpho",
    sci: "Morpho amphitryon",
    family: "蛱蝶科 Nymphalidae",
    img: "images/morphoamphitryon.jpg",
    region: "南美洲（玻利维亚、秘鲁）",
    regions: ["nsa"],
    wingspan: "约 16–18 cm",
    intro: "星褐闪蝶是大型闪蝶，不是蓝色，而是深褐色配金属般的橙褐光泽。前后翅黑褐色，外缘有链状的黄橙色斑点，前翅有3个大眼斑、后翅4个小眼斑，气质沉稳华丽。",
    highlights: [
      "深褐色配金属橙褐光泽，非蓝色闪蝶",
      "外缘链状黄橙斑点，前翅3大眼斑",
      "大型华丽，翅展16–18厘米"
    ],
    tags: ["深褐橙", "大眼斑", "非蓝闪蝶"]
  },
  {
    id: "morphoaega",
    cn: "小蓝闪蝶",
    en: "Aega Morpho",
    sci: "Morpho aega",
    family: "蛱蝶科 Nymphalidae",
    img: "images/morphoaega.jpg",
    region: "巴西、阿根廷、巴拉圭",
    regions: ["nsa"],
    wingspan: "约 9–11 cm",
    intro: "小蓝闪蝶是中型闪蝶，雄蝶翅面亮丽的金属蓝色配黑边，雌蝶则为褐黄带橙斑。蓝色明快活泼，常见于南美森林边缘，是亮闪蝶亚属的代表。",
    highlights: [
      "雄蝶亮丽金属蓝配黑边，雌蝶褐黄带橙",
      "中型闪蝶，蓝色明快活泼",
      "亮闪蝶亚属代表，南美森林边缘常见"
    ],
    tags: ["明快金属蓝", "雌雄异型", "森林边缘"]
  },
  {
    id: "morphodeidamia",
    cn: "梦幻闪蝶",
    en: "Deidamia Morpho",
    sci: "Morpho deidamia",
    family: "蛱蝶科 Nymphalidae",
    img: "images/morphodeidamia.jpg",
    region: "亚马逊流域",
    regions: ["nsa"],
    wingspan: "约 11–14 cm",
    intro: "梦幻闪蝶翅面蓝色金属光泽中带紫罗兰色调，配黑色宽边和白色斑块，前翅有白斜带，整体如梦似幻，是闪蝶亚属的代表种。",
    highlights: [
      "蓝色金属光中带紫罗兰调，黑宽边",
      "前翅有白色斜带与白斑块",
      "亚马逊流域，闪蝶亚属代表种"
    ],
    tags: ["蓝紫", "白斑", "如梦似幻"]
  },
  {
    id: "morphosulkowskyi",
    cn: "夜光闪蝶",
    en: "Sulkowsky Morpho",
    sci: "Morpho sulkowskyi",
    family: "蛱蝶科 Nymphalidae",
    img: "images/morphosulkowskyi.jpg",
    region: "安第斯山区（哥伦比亚至秘鲁）",
    regions: ["nsa"],
    wingspan: "约 7–9 cm",
    intro: "夜光闪蝶是小型闪蝶，翅面呈珍珠白带淡蓝、淡粉的半透明虹彩光泽，随角度变幻如月光珠贝，极为梦幻轻盈，栖于安第斯高海拔云雾林。",
    highlights: [
      "珍珠白带淡蓝淡粉的半透明虹彩光泽",
      "随角度变幻如月光珠贝",
      "栖于安第斯高海拔云雾林，小型轻盈"
    ],
    tags: ["珍珠虹彩", "半透明", "高山云雾林"]
  },
  {
    id: "morpholuna",
    cn: "大白闪蝶",
    en: "White Morpho",
    sci: "Morpho luna",
    family: "蛱蝶科 Nymphalidae",
    img: "images/morpholuna.jpg",
    region: "巴西",
    regions: ["nsa"],
    wingspan: "约 13–15 cm",
    intro: "大白闪蝶大型华丽，翅面呈闪亮的金属绿白色光泽，身体白色，翅缘有齿轮状黑斑点链，翅反白色带成列黑眼斑，洁白如雪又泛金属光，气质高洁。",
    highlights: [
      "翅面闪亮金属绿白光泽，身体白色",
      "翅缘齿轮状黑斑点链",
      "白闪蝶亚属，洁白泛金属光"
    ],
    tags: ["金属绿白", "洁白", "大型"]
  },
  {
    id: "morphopeleides",
    cn: "黑框蓝闪蝶",
    en: "Peleides Blue Morpho",
    sci: "Morpho peleides",
    family: "蛱蝶科 Nymphalidae",
    img: "images/morphopeleides.jpg",
    region: "中美洲至南美北部",
    regions: ["cam", "nsa"],
    wingspan: "约 12–15 cm",
    intro: "黑框蓝闪蝶是最著名、最常被展出的闪蝶之一，世界最大蝴蝶之一。翅面辉煌的金属天蓝色配宽阔的黑色外框，翅反棕色带成列金黄眼斑，是蝴蝶馆的明星。",
    highlights: [
      "最著名的闪蝶之一，蝴蝶馆常展明星",
      "辉煌金属天蓝配宽阔黑色外框",
      "翅反棕色带成列金黄眼斑，拟态防御"
    ],
    tags: ["经典蓝闪蝶", "黑宽框", "蝴蝶馆明星"]
  },
  {
    id: "indianfritillary",
    cn: "斐豹蛱蝶",
    en: "Indian Fritillary",
    sci: "Argynnis hyperbius",
    family: "蛱蝶科 Nymphalidae",
    img: "images/indianfritillary.jpg",
    region: "中国大部、南亚、东南亚、新几内亚至澳洲、非洲东北部",
    regions: ["eas", "sas", "sea", "aus", "eaf"],
    wingspan: "约 7–8 cm",
    intro: "豹蛱蝶属唯一的热带种，广布东洋界并随气候变暖北扩。雌雄异型，雄蝶满布黑色豹斑，雌蝶前翅端半部紫黑配白斜带，贝氏拟态有毒的金斑蝶。幼虫取食堇菜科植物。",
    highlights: [
      "豹蛱蝶属中唯一的热带物种",
      "雌蝶拟态金斑蝶以避敌害",
      "随全球变暖持续向北扩散"
    ],
    tags: ["豹纹翅", "贝氏拟态", "城市常见"]
  },
  {
    id: "silverwashed",
    cn: "绿豹蛱蝶",
    en: "Silver-washed Fritillary",
    sci: "Argynnis paphia",
    family: "蛱蝶科 Nymphalidae",
    img: "images/silverwashed.jpg",
    region: "欧亚大陆，西欧、北非经西伯利亚至日本、朝鲜及中国",
    regions: ["weu", "eeu", "naf", "was", "eas"],
    wingspan: "约 5.4–7 cm",
    intro: "欧亚广布的中型豹蛱蝶，因后翅反面带银绿色洗染状斑纹而得名。雄蝶翅面橙黄、翅脉上具黑色性标，雌蝶色偏暗绿、黑斑更显。飞行强劲，常在林冠滑翔，幼虫食堇菜。",
    highlights: [
      "后翅反面银绿洗染状斑纹独特",
      "雄蝶翅脉具显著黑色性标",
      "飞行强劲常在林冠滑翔"
    ],
    tags: ["银绿反面", "林地种", "欧亚广布"]
  },
  {
    id: "saganafritillary",
    cn: "青豹蛱蝶",
    en: "Sagana Fritillary",
    sci: "Damora sagana",
    family: "蛱蝶科 Nymphalidae",
    img: "images/saganafritillary.jpg",
    region: "中国东部及南部、朝鲜半岛、日本、俄罗斯远东、蒙古",
    regions: ["eas"],
    wingspan: "约 6–7.5 cm",
    intro: "东亚特色豹蛱蝶，雌雄异型极显著：雄蝶橙黄、后翅具折线状黑纹，雌蝶翅面青黑、缀大白斑与白色宽带，二者外观迥异。一年一代，以低龄幼虫越冬，幼虫取食堇菜科植物。",
    highlights: [
      "雌雄异型差异极为悬殊",
      "雌蝶青黑配白带优雅独特",
      "以一龄幼虫越冬一年一代"
    ],
    tags: ["雌雄异型", "东亚种", "堇菜食性"]
  },
  {
    id: "largesilverstripe",
    cn: "银豹蛱蝶",
    en: "Large Silverstripe",
    sci: "Childrena childreni",
    family: "蛱蝶科 Nymphalidae",
    img: "images/largesilverstripe.jpg",
    region: "中国陕西、云南、西藏等地，尼泊尔、锡金、印度北部、缅甸",
    regions: ["eas", "sas", "sea"],
    wingspan: "约 9–11 cm",
    intro: "豹蛱蝶属群中体型最大的种类之一，后翅反面青铜绿底上排列多条耀眼银色横纹，故名银豹蛱蝶。雌雄二型明显，雌蝶更大、翅色更深、后翅青蓝区更宽。多栖于林区多草坡地。",
    highlights: [
      "豹蛱蝶类中体型最大者之一",
      "后翅反面多条银色横纹夺目",
      "肛区青蓝色泽鲜明易辨"
    ],
    tags: ["大型种", "银色横纹", "高山林缘"]
  },
  {
    id: "pallasfritillary",
    cn: "老豹蛱蝶",
    en: "Pallas's Fritillary",
    sci: "Argyronome laodice",
    family: "蛱蝶科 Nymphalidae",
    img: "images/pallasfritillary.jpg",
    region: "欧洲中东部经西伯利亚至中国、朝鲜、日本、俄罗斯",
    regions: ["eeu", "eas", "sas"],
    wingspan: "约 5.5–6.5 cm",
    intro: "广布欧亚的中型豹蛱蝶，翅面橙黄配整齐黑斑。后翅反面以一条白边横带将外侧紫灰区与基部黄褐区分开，是其辨识要点。雄蝶前翅翅脉具细长黑色性标，幼虫取食堇菜科植物。",
    highlights: [
      "后翅反面紫灰区与白边横带分明",
      "雄蝶前翅具细长黑色性标",
      "横跨欧亚的常见豹蛱蝶"
    ],
    tags: ["豹纹翅", "欧亚广布", "草地林缘"]
  },
  {
    id: "darkgreenfrit",
    cn: "大豹斑蝶（银斑豹蛱蝶）",
    en: "Dark Green Fritillary",
    sci: "Speyeria aglaja",
    family: "蛱蝶科 Nymphalidae",
    img: "images/darkgreenfrit.jpg",
    region: "欧洲、摩洛哥、伊朗、西伯利亚、中亚、中国、朝鲜、日本",
    regions: ["weu", "eeu", "was", "eas", "naf"],
    wingspan: "约 5.3–6.8 cm",
    intro: "古北界广布的大型豹蛱蝶，因后翅反面散布的绿色光泽得英文名“暗绿豹蛱蝶”。翅面火橙色配整齐黑斑，后翅反面缀多枚明亮银白圆斑。栖于山地草灌丛，飞行迅捷，幼虫食堇菜。",
    highlights: [
      "后翅反面散布明亮银白圆斑",
      "翅面火橙配整齐黑斑列",
      "栖海拔较高的山地草灌丛"
    ],
    tags: ["大型种", "银斑反面", "山地草甸"]
  },
  {
    id: "smallpearlfrit",
    cn: "真珠贝蛱蝶（珍珠豹蛱蝶）",
    en: "Small Pearl-bordered Fritillary",
    sci: "Boloria selene",
    family: "蛱蝶科 Nymphalidae",
    img: "images/smallpearlfrit.jpg",
    region: "欧洲、亚洲温带至中国，及北美洲",
    regions: ["weu", "eeu", "wna", "ena", "eas"],
    wingspan: "约 3.5–4.4 cm",
    intro: "环北分布的小型珍蛱蝶，欧洲称小珍珠边豹蛱蝶、北美称银边豹蛱蝶。后翅反面在锈红底上镶嵌成列银白“珍珠”斑，故名。偏好湿润草地，幼虫专食堇菜，以幼虫越冬。",
    highlights: [
      "后翅反面镶成列银白珍珠斑",
      "体型小巧栖湿润草地",
      "环北美欧亚三洲均有分布"
    ],
    tags: ["小型种", "珍珠银斑", "湿地草甸"]
  },
  {
    id: "clipper",
    cn: "云南丽蛱蝶",
    en: "The Clipper",
    sci: "Parthenos sylvia",
    family: "蛱蝶科 Nymphalidae",
    img: "images/clipper.jpg",
    region: "中国西南、南亚、东南亚森林地带",
    regions: ["sas", "sea"],
    wingspan: "约 8–11 cm",
    intro: "热带森林中的大型蛱蝶，翅面橄榄绿至棕褐，黑色翅脉极为醒目，前翅缀一排半透明“视窗”，后翅纹样如百褶裙，半垂半攏时格外美观。飞行快而有力，常沿溪流林缘活动。",
    highlights: [
      "前翅半透明视窗状斑独特",
      "后翅纹样宛如百褶裙",
      "飞行快速有力沿溪而行"
    ],
    tags: ["橄榄绿翅", "热带森林", "高档观赏蝶"]
  },
  {
    id: "easterncourtier",
    cn: "黄帅蛱蝶",
    en: "Eastern Courtier",
    sci: "Sephisa princeps",
    family: "蛱蝶科 Nymphalidae",
    img: "images/easterncourtier.jpg",
    region: "中国东北至华中华东、朝鲜、俄罗斯远东",
    regions: ["eas"],
    wingspan: "约 6.5–7.5 cm",
    intro: "闪蛱蝶亚科的中大型蝶，雄蝶黑底密布橙黄色条斑、前翅中室两枚橙斑、Cu1室斑呈眼状；雌蝶斑纹多转为白色。一年一代，成虫见于六七月，幼虫以朴树等为寄主，喜吸食腐果与湿地水分。",
    highlights: [
      "雄蝶黑底密布橙黄条斑",
      "前翅Cu1室具眼状斑纹",
      "成虫嗜吸腐果与湿地盐分"
    ],
    tags: ["橙黑条斑", "东亚种", "一年一代"]
  },
  {
    id: "commonlascar",
    cn: "金三线蝶",
    en: "Common Lascar",
    sci: "Pantoporia hordonia",
    family: "蛱蝶科 Nymphalidae",
    img: "images/commonlascar.jpg",
    region: "印度、斯里兰卡、东南亚、中国南部及台湾",
    regions: ["sas", "sea", "eas"],
    wingspan: "约 3.9–4.3 cm",
    intro: "南亚至东南亚低中海拔林区的小型蛱蝶，翅面黑底配三条橙黄色横带，斑纹较一般三线蝶更宽更金黄，故称金三线蝶。一年多代，飞行不快，喜访花吸蜜或在湿地吸水，幼虫食豆科藤本。",
    highlights: [
      "黑底三条金黄横带醒目",
      "斑纹较普通三线蝶更宽阔",
      "低山林区一年多代常见"
    ],
    tags: ["金色三线", "热带林", "豆科食性"]
  },
  {
    id: "pallassailer",
    cn: "小环蛱蝶",
    en: "Pallas's Sailer",
    sci: "Neptis sappho",
    family: "蛱蝶科 Nymphalidae",
    img: "images/pallassailer.jpg",
    region: "中欧、俄罗斯、印度、东亚温带至日本",
    regions: ["eeu", "eas", "sas"],
    wingspan: "约 4–5.1 cm",
    intro: "环蛱蝶属的黑白分明小型种，前翅中室具一条断续白色纵纹，翅反面棕红色。与中环蛱蝶极相似而辨识困难。一年一至二代，以老熟幼虫越冬，飞行缓慢喜滑翔，幼虫取食胡枝子等豆科植物。",
    highlights: [
      "前翅中室白纵纹呈断续状",
      "翅反面棕红衬白斑更鲜明",
      "与中环蛱蝶极易混淆"
    ],
    tags: ["黑白环蛱", "滑翔飞行", "豆科食性"]
  },
  {
    id: "commonsailer",
    cn: "中环蛱蝶",
    en: "Common Sailer",
    sci: "Neptis hylas",
    family: "蛱蝶科 Nymphalidae",
    img: "images/commonsailer.jpg",
    region: "中国南方至陕西、河南，印度、缅甸、越南、东南亚",
    regions: ["sas", "sea", "eas"],
    wingspan: "约 4–6 cm",
    intro: "东洋界广布的优势种，黑褐翅面上三列白斑相连成带，前翅中室有长纵带及箭头状斑。翅反面黄褐底，白纹镶黑细边。模式产地为中国广东，飞行喜低空滑翔，幼虫食豆科、榆科等植物。",
    highlights: [
      "黑底三列白带相连成帆形",
      "前翅中室具箭头状斑纹",
      "东洋界全年可见的优势种"
    ],
    tags: ["三线白带", "滑翔种", "东洋广布"]
  },
  {
    id: "queen",
    cn: "美洲黑条桦斑蝶（皇后斑蝶）",
    en: "Queen",
    sci: "Danaus gilippus",
    family: "蛱蝶科 Nymphalidae",
    img: "images/queen.jpg",
    region: "美国南部、墨西哥、中美洲、加勒比及南美洲",
    regions: ["wna", "ena", "mex", "cam", "nsa", "ssa"],
    wingspan: "约 8–8.5 cm",
    intro: "美洲斑蝶属代表种，与帝王斑蝶近缘但体型较小、翅色更深栗褐，黑边内缀两列白点。幼虫取食马利筋等乳草并积累强心苷而具毒性，雄蝶后翅具黑色香鳞斑，求偶行为复杂，亦有小规模迁徙。",
    highlights: [
      "栗褐翅面黑边缀两列白点",
      "幼虫积累乳草毒素具防御",
      "与帝王斑蝶近缘体型偏小"
    ],
    tags: ["美洲斑蝶", "乳草毒性", "栗褐翅"]
  },
  {
    id: "chestnuttiger",
    cn: "大绢斑蝶",
    en: "Chestnut Tiger",
    sci: "Parantica sita",
    family: "蛱蝶科 Nymphalidae",
    img: "images/chestnuttiger.jpg",
    region: "喜马拉雅、东南亚、中国、台湾、朝鲜、日本",
    regions: ["sas", "sea", "eas"],
    wingspan: "约 8.5–10 cm",
    intro: "大型绢斑蝶，前翅黑褐缀青白半透明斑、后翅红褐配淡斑，对比鲜明。以长距离跨海迁徙著称——曾有个体从日本飞抵香港，历时八十余天、跨越逾两千公里。幼虫取食萝藦科有毒植物。",
    highlights: [
      "前翅青白斑配后翅红褐底",
      "跨海迁徙逾两千公里纪录",
      "幼虫食萝藦科有毒植物"
    ],
    tags: ["迁徙蝶", "青斑半透明", "大型斑蝶"]
  },
  {
    id: "easterncommontiger",
    cn: "虎纹斑蝶（东方虎斑蝶）",
    en: "Eastern Common Tiger",
    sci: "Danaus melanippus",
    family: "蛱蝶科 Nymphalidae",
    img: "images/easterncommontiger.jpg",
    region: "印度、东南亚、中国南部等热带亚洲地区",
    regions: ["sas", "sea", "eas"],
    wingspan: "约 7.5–9.5 cm",
    intro: "为避免与已收录的虎斑蝶（Danaus genutia，commontiger）重复，此处采用其近缘种东方虎斑蝶（白虎斑蝶）。翅面橙黄、黑色翅脉镶白点边，斑纹与虎斑蝶高度相似但后翅基部更显白。幼虫食萝藦科植物而具毒性。",
    highlights: [
      "橙黄翅面配黑脉镶白点边",
      "虎斑蝶的近缘种后翅更白",
      "幼虫积累乳草毒素御敌"
    ],
    tags: ["虎纹斑", "近缘替代种", "乳草毒性"]
  },
  {
    id: "stripedbluecrow",
    cn: "孔雀纹斑蝶（异型紫斑蝶）",
    en: "Striped Blue Crow",
    sci: "Euploea mulciber",
    family: "蛱蝶科 Nymphalidae",
    img: "images/stripedbluecrow.jpg",
    region: "印度、东南亚、中国南部及台湾",
    regions: ["sas", "sea", "eas"],
    wingspan: "约 8.5–10 cm",
    intro: "标准中文名异型紫斑蝶，雄蝶前翅泛孔雀蓝紫金属光泽、缀白色端斑，后翅褐色具白条，雌雄异型显著。幼虫取食夹竹桃科、桑科等植物并蓄积毒素，成虫飞行缓慢、常群聚越冬，属拟态斑蝶圈成员。",
    highlights: [
      "雄蝶前翅泛孔雀蓝紫光泽",
      "雌雄异型差异十分明显",
      "幼虫蓄积毒素成蝶常群聚"
    ],
    tags: ["孔雀蓝紫", "紫斑蝶", "群聚越冬"]
  },
  {
    id: "darkbluetiger",
    cn: "蒿青斑蝶（啬青斑蝶）",
    en: "Dark Blue Tiger",
    sci: "Tirumala septentrionis",
    family: "蛱蝶科 Nymphalidae",
    img: "images/darkbluetiger.jpg",
    region: "喜马拉雅、印度南部、斯里兰卡、东南亚、中国南部及台湾",
    regions: ["sas", "sea", "eas"],
    wingspan: "约 7.5–9.5 cm",
    intro: "标准中文名啬青斑蝶（小纹青斑蝶），黑棕翅面缀水青色条状半透明斑，后翅基部斑纹两两相连呈“V”形。雄蝶后翅Cu2室具耳状香鳞袋。具长距离季节性迁徙习性，幼虫食萝藦科有毒植物。",
    highlights: [
      "黑棕翅面缀水青条状斑",
      "后翅基斑两两相连呈V形",
      "具长距离季节性迁徙习性"
    ],
    tags: ["青斑半透明", "迁徙蝶", "萝藦食性"]
  },
  {
    id: "largefaun",
    cn: "串珠环蝶",
    en: "Large Faun",
    sci: "Faunis eumeus",
    family: "蛱蝶科 Nymphalidae",
    img: "images/largefaun.jpg",
    region: "印度东部、中国南部、中南半岛、台湾",
    regions: ["sas", "sea", "eas"],
    wingspan: "约 6.5–7.5 cm",
    intro: "环蝶类的模式种，翅缘圆弧、体翅棕褐，前翅背面具橙黄斜带。因翅反面有一列贯穿前后翅的奶油色珠状斑、形似串珠而得名。飞行缓慢、嗜吸腐果，多活动于林下阴暗处，幼虫食菝葜属植物。",
    highlights: [
      "翅反面奶油珠斑列如串珠",
      "飞行缓慢嗜食腐烂果汁",
      "多栖息于林下阴暗环境"
    ],
    tags: ["串珠纹", "林下种", "嗜腐果"]
  },
  {
    id: "jungleglory",
    cn: "紫斑环蝶",
    en: "Jungle Glory",
    sci: "Thaumantis diores",
    family: "蛱蝶科 Nymphalidae",
    img: "images/jungleglory.jpg",
    region: "中国广西、海南、云南、西藏，缅甸、泰国、斯里兰卡、印度",
    regions: ["eas", "sea", "sas"],
    wingspan: "约 8–9 cm",
    intro: "热带林区的大型环蝶，深褐天鹅绒般翅面上前后翅中域各嵌一块耀眼的蓝紫色光斑，开合间幽蓝灼灼。翅反面黑褐配暗色横带及眼斑，是雨林生态完整性的指示物种，多见于阴湿林下。",
    highlights: [
      "翅中域嵌耀眼蓝紫光斑",
      "天鹅绒深褐翅底反差强烈",
      "为雨林生态完整性指示种"
    ],
    tags: ["蓝紫光斑", "雨林环蝶", "指示物种"]
  },
  {
    id: "jungleking",
    cn: "斜带环蝶",
    en: "Jungleking",
    sci: "Thauria lathyi",
    family: "蛱蝶科 Nymphalidae",
    img: "images/jungleking.jpg",
    region: "中国云南，缅甸、泰国、新加坡",
    regions: ["eas", "sea"],
    wingspan: "约 7.5–10 cm",
    intro: "带环蝶属的大型环蝶，翅面深褐、前翅中域横贯一条宽阔的中黄色斜带、顶角缀小白斑，后翅外缘晕染浓橙色，反面具两枚大圆眼斑而呈枯叶拟态。素有“丛林之王”美誉，为云南珍贵蝶种之一。",
    highlights: [
      "前翅宽阔中黄斜带醒目",
      "反面大眼斑作枯叶拟态",
      "云南珍稀的丛林之王"
    ],
    tags: ["黄色斜带", "枯叶拟态", "云南珍稀"]
  },
  {
    id: "orangeringlet",
    cn: "橙珍眼蝶",
    en: "Common Ringlet",
    sci: "Coenonympha tullia",
    family: "蛱蝶科 Nymphalidae",
    img: "images/orangeringlet.jpg",
    region: "欧洲、温带亚洲及北美草原",
    regions: ["weu", "eeu", "wna"],
    wingspan: "约 3–4 cm",
    intro: "橙珍眼蝶是珍眼蝶属的小型草原眼蝶，广布欧洲、温带亚洲与北美。翅面呈温暖的橙褐色，边缘点缀淡黄圈黑眼斑，飞行轻弱而起伏。幼虫取食禾本科与莎草，成虫常见于湿润草甸、田野与林缘开阔地，是北方草原最常见的小灰蝶式眼蝶之一。",
    highlights: [
      "暖橙底色配淡黄圈黑眼斑，朴素而典雅",
      "广布欧亚北美草原，适应力极强的常见种",
      "飞行轻弱起伏，常在草丛间贴地穿梭"
    ],
    tags: ["草原眼蝶", "橙褐色", "全北区"]
  },
  {
    id: "blueeyewall",
    cn: "蓝眼纹眼蝶",
    en: "Wall Brown",
    sci: "Lasiommata megera",
    family: "蛱蝶科 Nymphalidae",
    img: "images/blueeyewall.jpg",
    region: "欧洲、北非及西亚",
    regions: ["weu", "eeu", "naf", "was"],
    wingspan: "约 4.5–5.5 cm",
    intro: "蓝眼纹眼蝶又称砖墙眼蝶，因常停于阳光下的石墙、岩面而得名。翅面橙底布褐色脉纹，乍看似豹蛱蝶，但前翅顶角与后翅各具白瞳黑眼斑，腹面眼斑外围带蓝灰色环。广布欧洲、北非与西亚，偏好海岸断崖、干草坡等向阳开阔生境。",
    highlights: [
      "前后翅白瞳黑眼斑外缘镶蓝灰色环，辨识鲜明",
      "橙底褐纹形似豹蛱蝶，实为眼蝶亚科成员",
      "嗜晒太阳，常停石墙岩面而得名砖墙蝶"
    ],
    tags: ["眼蝶", "蓝眼斑", "向阳种"]
  },
  {
    id: "darkringlet",
    cn: "暗眼蝶",
    en: "Ringlet",
    sci: "Aphantopus hyperantus",
    family: "蛱蝶科 Nymphalidae",
    img: "images/darkringlet.jpg",
    region: "欧洲及温带亚洲",
    regions: ["weu", "eeu", "eas"],
    wingspan: "约 4–5 cm",
    intro: "暗眼蝶因翅面深褐近黑、边缘镶细白线而得名，新羽个体翅色如天鹅绒般浓黑。腹面排列着黄圈白瞳的明显眼斑，正是英文名Ringlet的由来。广布欧洲与温带亚洲至中国、朝鲜，喜潮湿草甸与林缘，耐受阴凉湿润环境，雄蝶常巡飞寻偶。",
    highlights: [
      "翅面浓褐近黑镶白边，新羽如天鹅绒般质感",
      "腹面黄圈白瞳眼斑成列，即环纹之名由来",
      "耐阴湿，常见于潮湿草甸与林间小径"
    ],
    tags: ["眼蝶", "深褐色", "环纹眼斑"]
  },
  {
    id: "lethewhite",
    cn: "白带黛眼蝶",
    en: "White-banded Treebrown",
    sci: "Lethe confusa",
    family: "蛱蝶科 Nymphalidae",
    img: "images/lethewhite.jpg",
    region: "南亚及东南亚竹林",
    regions: ["sas", "sea", "eas"],
    wingspan: "约 5–5.5 cm",
    intro: "白带黛眼蝶又名白带竹眼蝶，是黛眼蝶属的中型阴生眼蝶。翅面褐色，前翅斜贯一道醒目白带与淡色顶斑；腹面散布眼状斑与细密纹路，宛如林下落叶。主要分布于南亚、东南亚及华南竹林，偏好阴暗潮湿环境，常吸食树液、腐果与潮地矿物盐。",
    highlights: [
      "前翅斜贯醒目白带，林荫中辨识度极高",
      "腹面眼斑与细纹拟态落叶，隐蔽性出众",
      "栖竹林阴处，嗜树液腐果，少访花"
    ],
    tags: ["黛眼蝶", "白带纹", "竹林阴生"]
  },
  {
    id: "bushbrown",
    cn: "小眉眼蝶",
    en: "Dark-branded Bushbrown",
    sci: "Mycalesis mineus",
    family: "蛱蝶科 Nymphalidae",
    img: "images/bushbrown.jpg",
    region: "南亚、东南亚及华南",
    regions: ["sas", "sea", "eas"],
    wingspan: "约 3.5–4.5 cm",
    intro: "小眉眼蝶是亚洲极常见的褐色小型眼蝶，因翅面朴素褐色、腹面排列蛇眼状斑而俗称丛褐蝶。具明显季节型，旱季型斑纹退化，湿季型眼斑清晰。广布南亚、东南亚至华南，一年多代，飞行短促贴地，喜吸食树液与粪便，幼虫以禾本科为寄主。",
    highlights: [
      "腹面蛇眼状斑成列，渐次大小排布",
      "旱湿两季型差异显著，眼斑可隐可现",
      "亚洲低地最常见褐眼蝶，飞行短促贴地"
    ],
    tags: ["眉眼蝶", "褐色", "季节型"]
  },
  {
    id: "zebralongwing",
    cn: "黄条袖蝶",
    en: "Zebra Longwing",
    sci: "Heliconius charithonia",
    family: "蛱蝶科 Nymphalidae",
    img: "images/zebralongwing.jpg",
    region: "南美、中美、墨西哥及美国东南",
    regions: ["nsa", "cam", "mex", "ena"],
    wingspan: "约 7–10 cm",
    intro: "黄条袖蝶又名斑马长翅蝶，是袖蝶属狭长翅型的代表，黑底配明黄条纹如斑马，属警戒色以示有毒。佛罗里达州蝶。成虫取食花粉以合成氰苷毒素，寿命可达数月，夜间数十只群栖。分布于南美、中美、西印度群岛至美国南德州与佛州，幼虫以西番莲为食。",
    highlights: [
      "黑底明黄长条纹如斑马，典型警戒色",
      "能取食花粉合成毒素，寿命长达数月",
      "夜间数十只群栖，行为社会性罕见"
    ],
    tags: ["袖蝶", "斑马纹", "有毒警戒"]
  },
  {
    id: "redjester",
    cn: "红三色蛱蝶",
    en: "Common Jester",
    sci: "Symbrenthia lilaea",
    family: "蛱蝶科 Nymphalidae",
    img: "images/redjester.jpg",
    region: "南亚及东南亚",
    regions: ["sas", "sea"],
    wingspan: "约 4.5–5.5 cm",
    intro: "红三色蛱蝶又称普通璐蛱蝶，是璐蛱蝶属的中型蝶。翅正面黑底缀橙黄带斑，腹面亮橙黄并布红褐脉络纹，如同地图或落叶。分布于印度、缅甸、马来西亚等南亚与东南亚地区，常见于丘陵森林，访花喜马樱丹。其分类区域型众多，与近缘种构成超种群。",
    highlights: [
      "正面黑底橙黄斑带，腹面橙黄缀红褐脉纹",
      "翅腹拟态落叶与地图纹，停栖时隐蔽",
      "南亚至东南亚丘陵林常见，喜访马樱丹"
    ],
    tags: ["璐蛱蝶", "橙黄黑斑", "丘陵林"]
  },
  {
    id: "bandedorange",
    cn: "环袖蝶",
    en: "Banded Orange Heliconian",
    sci: "Dryadula phaetusa",
    family: "蛱蝶科 Nymphalidae",
    img: "images/bandedorange.jpg",
    region: "巴西至墨西哥中部",
    regions: ["nsa", "cam", "mex"],
    wingspan: "约 8.5–9 cm",
    intro: "环袖蝶是环袖蝶属唯一物种，狭长翅面亮橘配粗黑条纹，雄蝶鲜艳、雌蝶色淡纹糊。属贝氏拟态橙色复合群，不受鸟类青睐。分布自巴西至墨西哥中部，夏季偶达美国堪萨斯。栖于低海拔热带平原与村落，成虫取食花蜜与鸟粪，幼虫以西番莲藤为食，常小群栖息草上。",
    highlights: [
      "亮橘翅配粗黑横条，雄艳雌淡区分明显",
      "属橙色贝氏拟态群，鸟类避而不食",
      "环袖蝶属唯一种，狭长翅型典型袖蝶"
    ],
    tags: ["环袖蝶", "橘黑条纹", "贝氏拟态"]
  },
  {
    id: "daggerwing",
    cn: "剑尾蛱蝶",
    en: "Ruddy Daggerwing",
    sci: "Marpesia petreus",
    family: "蛱蝶科 Nymphalidae",
    img: "images/daggerwing.jpg",
    region: "巴西经中美至佛罗里达",
    regions: ["nsa", "cam", "mex", "ena"],
    wingspan: "约 7–9.5 cm",
    intro: "剑尾蛱蝶因后翅延伸出长而尖的剑状尾突而得名，正面亮橘配三道纤细黑线，极富辨识度；腹面斑驳褐黑酷似枯叶。分布自巴西经中美洲、墨西哥、西印度群岛至佛罗里达半岛，迷蝶可北达亚利桑那与南德州。栖热带低地林与硬木林，幼虫以榕属植物为食。",
    highlights: [
      "后翅长剑状尾突独特，正面橘底三黑线",
      "腹面斑驳似枯叶，停栖时完美拟态落叶",
      "雄蝶高踞向阳树梢守候，行为醒目"
    ],
    tags: ["剑尾蝶", "枯叶拟态", "热带林"]
  },
  {
    id: "apatuilia",
    cn: "柳紫闪蛱蝶",
    en: "Lesser Purple Emperor",
    sci: "Apatura ilia",
    family: "蛱蝶科 Nymphalidae",
    img: "images/apatuilia.jpg",
    region: "欧洲及东亚",
    regions: ["weu", "eeu", "eas"],
    wingspan: "约 5.5–6.5 cm",
    intro: "柳紫闪蛱蝶是闪蛱蝶属的代表种，雄蝶翅面在特定角度迸发金属紫蓝闪光，源于结构色而非色素。翅缀白斑带与橙圈眼斑，腹面赭橙。广布欧洲与东亚，中国分布甚广。幼虫以杨柳科叶片为食，越冬于树皮缝隙，成虫嗜树液、腐果与湿地吸水，少访花。",
    highlights: [
      "雄蝶结构色闪现金属紫蓝，随角度变幻",
      "广布欧亚，幼虫食杨柳，越冬于树皮缝",
      "成虫嗜树液腐果与湿地吸水，少访花"
    ],
    tags: ["闪蛱蝶", "结构色紫闪", "欧亚广布"]
  },
  {
    id: "apatumetis",
    cn: "细带闪蛱蝶",
    en: "Freyer's Purple Emperor",
    sci: "Apatura metis",
    family: "蛱蝶科 Nymphalidae",
    img: "images/apatumetis.jpg",
    region: "东南欧经中亚至东亚",
    regions: ["eeu", "eas", "was"],
    wingspan: "约 5–6.5 cm",
    intro: "细带闪蛱蝶又名大陆小紫蛱蝶，是闪蛱蝶属中分布最局限的欧洲种，与柳紫闪蛱蝶近似但后翅中区斑带不呈齿状、延伸至cu2室。雄蝶具蓝紫结构色闪光。分布自东南欧经高加索、中亚至东亚的黑龙江、朝鲜、日本，栖息河岸森林低地，幼虫取食柳树。",
    highlights: [
      "后翅斑带不呈齿状并延至cu2室，辨识关键",
      "雄蝶具蓝紫结构色，与柳紫闪蛱蝶相似",
      "局限于河岸湿地林，欧洲最稀有紫闪蝶之一"
    ],
    tags: ["闪蛱蝶", "紫蓝闪光", "河岸林"]
  },
  {
    id: "blueadmiral",
    cn: "琉璃蛱蝶",
    en: "Blue Admiral",
    sci: "Kaniska canace",
    family: "蛱蝶科 Nymphalidae",
    img: "images/blueadmiral.jpg",
    region: "南亚、东南亚及东亚",
    regions: ["sas", "sea", "eas"],
    wingspan: "约 6–7.5 cm",
    intro: "琉璃蛱蝶是琉璃蛱蝶属唯一物种，黑褐翅面贯穿一道亮丽的淡蓝宽带，前翅呈Y形、后翅带上缀黑点，翅缘强烈波状。腹面似木纹极隐蔽。广布亚洲东洋区与古北区南缘，中国分布甚广。以成虫越冬，雄蝶具领域性，嗜树液、腐果与粪便，幼虫食菝葜。",
    highlights: [
      "黑褐翅贯亮蓝宽带，前翅呈Y形极醒目",
      "腹面木纹状斑驳，闭翅停栖时完美隐身",
      "以成虫越冬，雄蝶强领域性嗜树液腐果"
    ],
    tags: ["琉璃蛱蝶", "蓝带纹", "成虫越冬"]
  },
  {
    id: "tortoiseshell",
    cn: "荨麻蛱蝶",
    en: "Small Tortoiseshell",
    sci: "Aglais urticae",
    family: "蛱蝶科 Nymphalidae",
    img: "images/tortoiseshell.jpg",
    region: "欧洲及温带亚洲",
    regions: ["weu", "eeu", "eas"],
    wingspan: "约 4.5–6 cm",
    intro: "荨麻蛱蝶又名小樱蝶，是欧亚温带最经典的庭园蝶之一，丹麦国蝶。翅面狐红橙底，前翅缀黑黄斑，翅缘排列蓝色弦月斑；腹面暗褐如树皮以利越冬隐蔽。广布欧洲、西伯利亚至中国、日本，幼虫群集取食荨麻，成虫吸蜜并以成虫越冬于洞穴、建筑中。",
    highlights: [
      "狐红橙底缀黑黄斑，翅缘排蓝色弦月斑",
      "丹麦国蝶，欧亚温带最常见庭园蝶之一",
      "以成虫越冬，幼虫群集取食荨麻"
    ],
    tags: ["麻蛱蝶", "狐红橙", "庭园常见"]
  },
  {
    id: "asiancomma",
    cn: "黄钩蛱蝶",
    en: "Asian Comma",
    sci: "Polygonia c-aureum",
    family: "蛱蝶科 Nymphalidae",
    img: "images/asiancomma.jpg",
    region: "东亚及中南半岛北部",
    regions: ["eas", "sea"],
    wingspan: "约 4.5–6 cm",
    intro: "黄钩蛱蝶又名黄蛱蝶、葎胥，是钩蛱蝶属的常见种。翅面橙黄缀黑斑，翅缘凹凸尖锐、秋型尤甚；腹面似树皮斑驳，后翅中央有一枚银白逗号形钩纹，故名钩蛱蝶。广布东亚至中南半岛北部，中国除西藏外广布，幼虫以大麻科葎草为食，一年多代，常见于市郊。",
    highlights: [
      "翅缘凹凸尖锐似枯叶，秋型角突更显著",
      "后翅腹面银白逗号钩纹，钩蛱蝶之名由来",
      "东亚广布市郊常见，幼虫取食葎草"
    ],
    tags: ["钩蛱蝶", "枯叶缘", "银钩纹"]
  },
  {
    id: "bluepansy",
    cn: "翠蓝眼蛱蝶",
    en: "Blue Pansy",
    sci: "Junonia orithya",
    family: "蛱蝶科 Nymphalidae",
    img: "images/bluepansy.jpg",
    region: "非洲、南亚、东南亚及澳洲",
    regions: ["saf", "sas", "sea", "aus"],
    wingspan: "约 5–6 cm",
    intro: "翠蓝眼蛱蝶又名孔雀青蛱蝶、蓝地蝶，是眼蛱蝶属的艳丽种。雄蝶后翅基部泛金属翠蓝，翅面散布橙圈眼斑，雌蝶色暗而眼斑更显。雌雄异型并有旱湿季型差异。广布非洲、南亚、东南亚、中国南方至澳洲，喜开阔草地、农田与园圃，幼虫取食爵床科植物。",
    highlights: [
      "雄蝶后翅基泛金属翠蓝，配橙圈眼斑夺目",
      "雌雄异型且分旱湿季型，外观变化丰富",
      "广布旧大陆热带，喜开阔草地与园圃"
    ],
    tags: ["眼蛱蝶", "金属翠蓝", "眼斑"]
  },
  {
    id: "mapwing",
    cn: "欧洲地图蝶",
    en: "Map Butterfly",
    sci: "Araschnia levana",
    family: "蛱蝶科 Nymphalidae",
    img: "images/mapwing.jpg",
    region: "欧洲经古北区至东亚",
    regions: ["weu", "eeu", "eas"],
    wingspan: "约 3–4.5 cm",
    intro: "欧洲地图蝶以腹面纵横交错的白色网纹酷似地图而得名，是著名的季节二型蝶：春型橙红缀黑斑，夏型黑底带白带与橙纹，曾被误认作两种。分布自西班牙经全欧、古北区至中亚、俄远东、朝鲜与日本。幼虫取食荨麻，成虫见于湿润林缘、林间空地与河岸。",
    highlights: [
      "腹面白色网纹如地图，物种名之由来",
      "春橙红夏黑白的季节二型，曾被当两种",
      "幼虫食荨麻，栖湿润林缘与河岸"
    ],
    tags: ["网蛱蝶", "地图纹", "季节二型"]
  },
  {
    id: "pearlcrescent",
    cn: "珠纹蛱蝶",
    en: "Pearl Crescent",
    sci: "Phyciodes tharos",
    family: "蛱蝶科 Nymphalidae",
    img: "images/pearlcrescent.jpg",
    region: "北美及墨西哥",
    regions: ["wna", "ena", "mex"],
    wingspan: "约 2–3.5 cm",
    intro: "珠纹蛱蝶是北美东部最常见的小型蛱蝶之一，橙底黑边缀细密黑纹，因后翅腹面暗斑中嵌一枚珍珠般淡色弦月斑而得名。翅纹变异极大，全年多代。分布于美国大部、墨西哥及加拿大南部，喜牧场、路缘、田野等开阔地，性活泼好斗，常驱逐入侵领域的他种蝶。",
    highlights: [
      "后翅腹面暗斑中嵌珍珠色弦月，名之所由",
      "北美东部最常见小蛱蝶，翅纹变异极大",
      "性活泼好斗，常驱逐入侵领域的其他蝶"
    ],
    tags: ["珍蛱蝶", "珠光弦月", "北美常见"]
  },
  {
    id: "mourningcloak",
    cn: "黄缘蛱蝶",
    en: "Mourning Cloak",
    sci: "Nymphalis antiopa",
    family: "蛱蝶科 Nymphalidae",
    img: "images/mourningcloak.jpg",
    region: "欧亚大陆及北美",
    regions: ["weu", "eeu", "wna", "ena"],
    wingspan: "约 6–9 cm",
    intro: "黄缘蛱蝶在北美称丧服蝶、英国称坎伯韦尔美人，是大型长寿蛱蝶，成虫可存活十至十一个月。翅面浓栗褐如天鹅绒，外缘镶宽黄边，内侧排列蓝紫斑点；腹面似树皮极隐蔽。广布欧亚与北美，以成虫越冬，早春最先出现，幼虫取食柳、杨、榆、桦等。",
    highlights: [
      "栗褐丝绒翅镶宽黄边，内缀蓝紫斑列",
      "成虫越冬寿命达十余月，早春最先出现",
      "腹面似树皮，停栖树干时几不可见"
    ],
    tags: ["蛱蝶属", "黄边丝绒", "长寿越冬"]
  },
  {
    id: "commonsergeant",
    cn: "玄珠带蛱蝶",
    en: "Common Sergeant",
    sci: "Athyma perius",
    family: "蛱蝶科 Nymphalidae",
    img: "images/commonsergeant.jpg",
    region: "南亚及东南亚",
    regions: ["sas", "sea"],
    wingspan: "约 5–7 cm",
    intro: "玄珠带蛱蝶又名白三线蝶、艾蝶，是带蛱蝶属中型蝶，因黑褐翅面贯穿断续白色斑带、形如军士肩章而得名Common Sergeant。前翅中室具分段白条纹，腹面则呈鲜亮橙褐配白带。分布于南亚、东南亚至中国南部，常见于开阔林地与人居附近，低飞贴地，幼虫取食算盘子属。",
    highlights: [
      "黑褐翅贯断续白斑带，形如军士肩章纹",
      "前翅中室分段白条纹，腹面亮橙褐衬白带",
      "南亚东南亚低地常见，飞行低贴地面"
    ],
    tags: ["带蛱蝶", "白色斑带", "一字纹"]
  },
  {
    id: "superbahelcyra",
    cn: "傲白蛱蝶",
    en: "Superb Emperor",
    sci: "Helcyra superba",
    family: "蛱蝶科 Nymphalidae",
    img: "images/superbahelcyra.jpg",
    region: "中国华西、华南、华中、华东及台湾，越南北部",
    regions: ["eas", "sea"],
    wingspan: "约 6–7.5 cm",
    intro: "傲白蛱蝶是白蛱蝶属的代表种，翅面雪白如银，前翅端部缀黑，是东亚常绿阔叶林中飞行迅疾的中型蛱蝶。成蝶嗜吸树液与腐果，幼虫取食大麻科沙楠子树，以休眠幼虫附枯叶越冬，北台湾少见。",
    highlights: [
      "翅面雪白带银光，前翅端黑斑衬两枚白点",
      "嗜食发酵树液与腐果，极少访花",
      "幼虫头生鹿角状长棘，悬蛹拟枯叶"
    ],
    tags: ["银白", "树液客", "拟态高手"]
  },
  {
    id: "coclescyrestis",
    cn: "八目丝蛱蝶",
    en: "Marbled Map",
    sci: "Cyrestis cocles",
    family: "蛱蝶科 Nymphalidae",
    img: "images/coclescyrestis.jpg",
    region: "中国海南，泰国、马来西亚、越南、老挝",
    regions: ["sea", "eas"],
    wingspan: "约 4.5–5.5 cm",
    intro: "八目丝蛱蝶因外缘排列的眼状斑列得名，雌雄异色显著：雌蝶半透明乳黄，雄蝶灰褐贯以白色宽带。分布于中国华南至中南半岛，喜日光下迅捷飞翔，吸食花蜜、腐果及树汁，后翅具短尾突。",
    highlights: [
      "外缘整齐排列眼状斑列，故名八目",
      "雌雄异色：雌乳黄半透明、雄灰褐带白",
      "后翅短尾突与黑色臀斑醒目"
    ],
    tags: ["眼斑列", "雌雄异色", "丝蛱蝶"]
  },
  {
    id: "delphispolyura",
    cn: "白双尾蝶",
    en: "Jewelled Nawab",
    sci: "Polyura delphis",
    family: "蛱蝶科 Nymphalidae",
    img: "images/delphispolyura.jpg",
    region: "北印度、巴基斯坦至缅甸，马来半岛、苏门答腊、婆罗洲",
    regions: ["sas", "sea"],
    wingspan: "约 9.5–10 cm",
    intro: "白双尾蝶是尾蛱蝶属体型壮硕的大型种，翅展近十厘米，翅面珍珠白镶宽阔黑边，后翅拖曳两条细长尾突。分布于北印度、巴基斯坦至缅甸及巽他群岛，飞行强劲迅速，雄蝶喜在林冠占据领地。",
    highlights: [
      "翅展可达10厘米，珍珠白镶黑边",
      "后翅拖两条细长尾突，飞行强劲",
      "雄蝶占据林冠领地，驱逐入侵者"
    ],
    tags: ["双尾", "珍珠白", "大型"]
  },
  {
    id: "athamaspolyura",
    cn: "窄斑凤尾蛱蝶",
    en: "Common Nawab",
    sci: "Polyura athamas",
    family: "蛱蝶科 Nymphalidae",
    img: "images/athamaspolyura.jpg",
    region: "喜马拉雅、印度、斯里兰卡、东南亚至印度尼西亚",
    regions: ["sas", "sea"],
    wingspan: "约 6–7.5 cm",
    intro: "窄斑凤尾蛱蝶又名短双尾蝶，尾突较其他尾蛱蝶短而粗，黑褐翅面贯以淡青白色宽带。广布喜马拉雅至东南亚低地，飞行极快，常聚于湿地、兽粪与腐果吸食矿物，是热带林缘常见的尾蛱蝶。",
    highlights: [
      "尾突短粗，黑褐翅贯淡青白宽带",
      "飞行迅疾，常于湿地兽粪吸食矿物",
      "广布喜马拉雅至巽他群岛低地"
    ],
    tags: ["短双尾", "速飞", "吸矿"]
  },
  {
    id: "jasiuscharaxes",
    cn: "非洲大双尾蝶",
    en: "Two-tailed Pasha",
    sci: "Charaxes jasius",
    family: "蛱蝶科 Nymphalidae",
    img: "images/jasiuscharaxes.jpg",
    region: "地中海沿岸南欧、北非及撒哈拉以南非洲，西亚",
    regions: ["weu", "naf", "eaf", "saf", "was"],
    wingspan: "约 7–9 cm",
    intro: "非洲大双尾蝶是唯一分布于欧洲的螯蛱蝶，也是地中海地区体型最大的蝴蝶之一。翅缘镶橙色宽带，后翅具两枚显著尾突，腹面如马赛克镶嵌。成蝶嗜腐果不访花，性极强悍，幼虫取食草莓树，每年两代。",
    highlights: [
      "欧洲唯一螯蛱蝶，地中海最大蝶之一",
      "翅缘橙带、后翅双尾，腹面马赛克斑",
      "雄蝶护卫领地凶悍，振翅声可闻数米"
    ],
    tags: ["双尾", "地中海", "护领地"]
  },
  {
    id: "brenthisino",
    cn: "白弦月纹蛱蝶",
    en: "Lesser Marbled Fritillary",
    sci: "Brenthis ino",
    family: "蛱蝶科 Nymphalidae",
    img: "images/brenthisino.jpg",
    region: "欧洲经温带亚洲至日本与朝鲜半岛",
    regions: ["weu", "eeu", "eas"],
    wingspan: "约 3.4–4.2 cm",
    intro: "白弦月纹蛱蝶是分布于欧亚温带的小型豹纹蛱蝶，正面橙褐似老豹蛱蝶而色更深，腹面大面积咖啡色并缀有白色逗号状或“C”形弦月纹，名由此来。幼虫取食刺荨麻与蛇麻草，自欧洲贯穿温带亚洲直抵日本。",
    highlights: [
      "腹面缀白色逗号/C形弦月纹，故名",
      "正面似老豹蛱蝶但色调更深",
      "幼虫食刺荨麻与蛇麻草，广布欧亚"
    ],
    tags: ["弦月纹", "小豹纹", "欧亚温带"]
  },
  {
    id: "undosaeuthalia",
    cn: "波纹翠蛱蝶",
    en: "Wavy Baron",
    sci: "Euthalia undosa",
    family: "蛱蝶科 Nymphalidae",
    img: "images/undosaeuthalia.jpg",
    region: "中国浙江、福建、广东、四川（中国特有）",
    regions: ["eas"],
    wingspan: "约 5–6 cm",
    intro: "波纹翠蛱蝶是中国特有的翠蛱蝶，雌雄基本同型，灰绿褐底贯以轮廓清晰的黄白色斑带，斑列略呈波状。分布于浙、闽、粤、川的低山林区，幼虫寄主壳斗科大叶青冈，是天目山一带的常见林栖蛱蝶。",
    highlights: [
      "中国特有种，灰绿翅贯黄白波状斑带",
      "雌雄同型，幼虫食壳斗科大叶青冈",
      "天目山低山林区的常见翠蛱蝶"
    ],
    tags: ["中国特有", "波纹斑", "翠蛱蝶"]
  },
  {
    id: "cyanecethosia",
    cn: "白带锯蛱蝶",
    en: "Leopard Lacewing",
    sci: "Cethosia cyane",
    family: "蛱蝶科 Nymphalidae",
    img: "images/cyanecethosia.jpg",
    region: "印度至中国南部（云南、广东、广西、海南、四川）及中南半岛",
    regions: ["sas", "sea", "eas"],
    wingspan: "约 7–8 cm",
    intro: "白带锯蛱蝶又名花裙蝶，雄蝶翅面赤褐缀前翅斜白带，翅缘呈锯齿状，雌雄异型显著。分布于印度至华南及中南半岛，近年扩散至马来半岛与新加坡。具群集习性，幼虫取食西番莲，飞行缓慢低回于林缘。",
    highlights: [
      "翅缘锯齿状，前翅斜白带醒目，故名",
      "雌雄异型显著，幼虫群集食西番莲",
      "近年向南扩散至马来半岛与新加坡"
    ],
    tags: ["白带", "锯齿缘", "花裙蝶"]
  },
  {
    id: "penthesileacet",
    cn: "透翅锯蛱蝶",
    en: "Orange Lacewing",
    sci: "Cethosia penthesilea",
    family: "蛱蝶科 Nymphalidae",
    img: "images/penthesileacet.jpg",
    region: "东南亚（爪哇、帝汶、松巴）及澳大利亚北领地",
    regions: ["sea", "aus"],
    wingspan: "约 7–8 cm",
    intro: "透翅锯蛱蝶又称橙锯蛱蝶，橙色大斑镶黑缘，前翅缀长形白斑，是锯蛱蝶属中色彩鲜亮的种类。分布于东南亚至澳大利亚北领地的季雨林与藤丛，沿溪流活动，幼虫专食西番莲科蒴莲藤，旱季初最常见。",
    highlights: [
      "橙色大斑镶黑缘，前翅缀长白斑",
      "栖季雨林溪畔，幼虫食蒴莲藤",
      "分布东南亚直抵澳洲北领地"
    ],
    tags: ["橙翅", "锯齿缘", "溪畔"]
  },
  {
    id: "andromachaacr",
    cn: "星斑透翅蝶",
    en: "Glasswing (Australian)",
    sci: "Acraea andromacha",
    family: "蛱蝶科 Nymphalidae",
    img: "images/andromachaacr.jpg",
    region: "印度尼西亚、巴布亚新几内亚、澳大利亚及斐济",
    regions: ["sea", "aus"],
    wingspan: "约 5.5–6.5 cm",
    intro: "星斑透翅蝶前翅近半透明如玻璃，后翅白底镶宽黑带并嵌白斑与红点，因黑带内的星点得名。分布于印尼经巴新至澳大利亚与斐济，幼虫取食西番莲，体内蓄毒，缓慢飘飞而少受天敌侵扰。",
    highlights: [
      "前翅半透明如玻璃，后翅黑带嵌星斑",
      "幼虫食西番莲蓄毒，成蝶飘飞缓慢",
      "分布印尼至澳洲、斐济的热带林缘"
    ],
    tags: ["透翅", "星斑", "蓄毒"]
  },
  {
    id: "morganegreta",
    cn: "摩根绡蝶",
    en: "Morgane Clearwing",
    sci: "Greta morgane",
    family: "蛱蝶科 Nymphalidae",
    img: "images/morganegreta.jpg",
    region: "墨西哥、中美洲至南美洲北部",
    regions: ["mex", "cam", "nsa"],
    wingspan: "约 5.5–6 cm",
    intro: "摩根绡蝶是宽纹黑脉绡蝶（玻璃翼蝶）的近缘种，翅膜在深色翅脉间透明如玻璃，前翅端部加厚。分布于墨西哥至南美北部的潮湿雨林，常贴地飘飞，透明翅与深色花纹融入环境，是绡蝶族经典的拟态模型。",
    highlights: [
      "翅膜透明如玻璃，深色翅脉清晰可见",
      "前翅端部加厚，区别于玻璃翼蝶oto",
      "栖中南美雨林，透翅伪装躲避天敌"
    ],
    tags: ["透翅", "绡蝶", "拟态"]
  },
  {
    id: "thyodamascyr",
    cn: "网丝蛱蝶",
    en: "Common Map",
    sci: "Cyrestis thyodamas",
    family: "蛱蝶科 Nymphalidae",
    img: "images/thyodamascyr.jpg",
    region: "喜马拉雅、印度、中南半岛、中国华南华东西，日本与台湾",
    regions: ["sas", "sea", "eas"],
    wingspan: "约 5–7 cm",
    intro: "网丝蛱蝶又称地图蝶、石墙蝶，翅面白或乳黄密布褐色细纹，纵横交错如网似地图。广布喜马拉雅至东南亚、华南及日本，幼虫食桑科榕属。常停于林间高树顶或岩面，静止时平展双翅，飞行缓慢。",
    highlights: [
      "翅面褐色细纹交错如网似地图",
      "幼虫食桑科榕属，常停高树顶与岩面",
      "后翅波状缘带短尾突，静止平展翅"
    ],
    tags: ["地图纹", "网纹", "石墙蝶"]
  },
  {
    id: "issoriaacraea",
    cn: "苎麻珍蝶",
    en: "Yellow Coster",
    sci: "Acraea issoria",
    family: "蛱蝶科 Nymphalidae",
    img: "images/issoriaacraea.jpg",
    region: "中国华中华东华南西南、西喜马拉雅，东南亚至印尼、菲律宾",
    regions: ["sas", "sea", "eas"],
    wingspan: "约 5.5–7 cm",
    intro: "苎麻珍蝶又名细蝶、黄珍蝶，翅褐黄色，外缘宽黑带嵌灰白斑，翅质坚韧半透明。广布中国南方至喜马拉雅与东南亚，幼虫群集取食苎麻等荨麻科植物，体含毒素，飞行无力飘忽而少受天敌捕食。",
    highlights: [
      "翅褐黄镶宽黑带，翅质坚韧半透明",
      "幼虫群集食苎麻，是麻区常见害虫",
      "体内蓄毒，飞行飘忽少受天敌侵扰"
    ],
    tags: ["黄珍蝶", "苎麻客", "蓄毒"]
  },
  {
    id: "terpsicoreacr",
    cn: "斑珍蝶",
    en: "Tawny Coster",
    sci: "Acraea terpsicore",
    family: "蛱蝶科 Nymphalidae",
    img: "images/terpsicoreacr.jpg",
    region: "印度、斯里兰卡、东南亚至马尔代夫、缅甸，近年扩至澳大利亚",
    regions: ["sas", "sea", "aus"],
    wingspan: "约 5–6.5 cm",
    intro: "斑珍蝶又名豹纹珍蝶，翅亮橙缀黑斑，缘带嵌白点，翅狭长坚韧。广布印度、斯里兰卡至东南亚草地灌丛，近十余年迅速东扩至澳大利亚。飞行无力飘忽，鲜艳橙色为警戒色，多数昆虫天敌避而远之。",
    highlights: [
      "翅亮橙缀黑斑，缘带嵌白点醒目",
      "草地灌丛常见，近年迅速扩至澳洲",
      "橙色警戒色加体毒，天敌罕捕食"
    ],
    tags: ["豹纹", "警戒色", "扩张种"]
  },
  {
    id: "hypseacethosia",
    cn: "亚洲红细蝶",
    en: "Malay Lacewing",
    sci: "Cethosia hypsea",
    family: "蛱蝶科 Nymphalidae",
    img: "images/hypseacethosia.jpg",
    region: "马来半岛、苏门答腊、婆罗洲、泰国南部及菲律宾",
    regions: ["sea"],
    wingspan: "约 7.5–8.5 cm",
    intro: "亚洲红细蝶即马来锯蛱蝶，翅面赤红镶黑顶白斑，翅缘深锯齿，是东南亚雨林中艳丽的锯蛱蝶。分布于马来半岛与巽他群岛，幼虫群集取食西番莲科蒴莲藤，体含毒素，飞行缓慢，常聚于林缘花丛。",
    highlights: [
      "翅面赤红镶黑顶白斑，缘呈深锯齿",
      "巽他群岛雨林艳种，幼虫群集食蒴莲",
      "体含毒素，飞行缓慢，色彩为警戒"
    ],
    tags: ["赤红", "锯齿缘", "马来"]
  },
  {
    id: "lethevermayb",
    cn: "玉带黑斑蝶（玉带黛眼蝶）",
    en: "Straight-banded Treebrown",
    sci: "Lethe verma",
    family: "蛱蝶科 Nymphalidae",
    img: "images/lethevermayb.jpg",
    region: "喜马拉雅、中国南部至中南半岛的低中海拔林区",
    regions: ["sas", "sea", "eas"],
    wingspan: "约 6–6.5 cm",
    intro: "玉带黑斑蝶即玉带黛眼蝶，翅面暗烟褐色，前翅一道宽阔的白色斜带如玉带横贯，后翅外缘列生眼斑。栖于低中海拔林荫处，喜吸食树液、腐果与湿地水液，幼虫取食桂竹等竹类，雌雄斑纹相近。",
    highlights: [
      "前翅一道白色斜带如玉带横贯",
      "后翅外缘列生黄圈黑眼斑",
      "林荫吸树液腐果，幼虫食竹"
    ],
    tags: ["玉带", "黛眼蝶", "林荫"]
  },
  {
    id: "niceastibo",
    cn: "素饰蛱蝶",
    en: "Popinjay",
    sci: "Stibochiona nicea",
    family: "蛱蝶科 Nymphalidae",
    img: "images/niceastibo.jpg",
    region: "喜马拉雅、印度、尼泊尔至中国华南、华东，中南半岛",
    regions: ["sas", "sea", "eas"],
    wingspan: "约 5.5–8 cm",
    intro: "素饰蛱蝶又称缦蝶，雄蝶翅面如黑丝绒般乌亮，外缘排列整齐白斑并衬蓝色线纹，中室内三条蓝白短线。分布喜马拉雅至华南与中南半岛山林，飞行迅速，常平展双翅停于矮丛或湿地，访肉食动物粪便取矿。",
    highlights: [
      "翅面黑丝绒般乌亮，缀整齐白斑列",
      "中室三条蓝白短线，雌蝶偏暗绿",
      "飞行迅速，平展翅停丛叶，访粪吸矿"
    ],
    tags: ["丝绒黑", "白斑列", "缦蝶"]
  },
  {
    id: "bisaltidedolesch",
    cn: "黄带枯叶蛱蝶",
    en: "Autumn Leaf",
    sci: "Doleschallia bisaltide",
    family: "蛱蝶科 Nymphalidae",
    img: "images/bisaltidedolesch.jpg",
    region: "印度、斯里兰卡、东南亚至中国华南、澳大利亚北部",
    regions: ["sas", "sea", "aus"],
    wingspan: "约 6.5–8.5 cm",
    intro: "黄带枯叶蛱蝶又称蠹叶蛱蝶，背面橙黄缀黑色翅顶，腹面则酷似一片枯叶，中线如叶脉贯穿前后翅。广布印度至东南亚、华南与澳北雨林，幼虫食爵床科植物，静止合翅时拟枯叶，是与枯叶蛱蝶平行演化的拟态名种。",
    highlights: [
      "背面橙黄带黑顶，腹面拟枯叶有叶脉线",
      "幼虫食爵床科植物，成蝶嗜腐果树液",
      "与枯叶蛱蝶平行演化的拟叶名种"
    ],
    tags: ["枯叶拟态", "橙黄", "雨林"]
  },
  {
    id: "eginaacraea",
    cn: "白星橙珍蝶",
    en: "Elegant Acraea",
    sci: "Acraea egina",
    family: "蛱蝶科 Nymphalidae",
    img: "images/eginaacraea.jpg",
    region: "撒哈拉以南非洲：西非、中非至东非与南部非洲",
    regions: ["waf", "eaf", "saf"],
    wingspan: "约 6–7.5 cm",
    intro: "白星橙珍蝶是非洲常见的大型珍蝶，翅面橙红，前翅黑色端区嵌橙白色斑列，腹面散布白星与黑点。广布撒哈拉以南非洲的林缘与稀树草原，幼虫取食西番莲科植物，体含毒素，飞行迟缓，鲜艳体色为警戒信号。",
    highlights: [
      "翅橙红，前翅黑端嵌橙白斑列",
      "腹面散布白星黑点，故名白星",
      "广布非洲，幼虫食西番莲蓄毒警戒"
    ],
    tags: ["白星", "橙翅", "非洲"]
  },
  {
    id: "eightyeight",
    cn: "红涡蛱蝶",
    en: "Cramer's Eighty-eight",
    sci: "Diaethria clymena",
    family: "蛱蝶科 Nymphalidae",
    img: "images/eightyeight.jpg",
    region: "中美洲至南美洲中部，模式产地圭亚那",
    regions: ["cam", "nsa", "ssa"],
    wingspan: "约 3.8–4.4 cm",
    intro: "红涡蛱蝶俗称88蝶、数字蝶，因后翅腹面由黑色同心线纹组成酷似数字88的图案而闻名，是涡蛱蝶属的模式种。分布于中美洲至南美中部，幼虫食榆科山黄麻属，成蝶吸食腐果与粪便汁液，常停叶面展示数字纹。",
    highlights: [
      "后翅腹面黑线组成数字88，故名88蝶",
      "背面黑底镶虹彩蓝绿带，前翅基红",
      "幼虫食山黄麻，成蝶吸腐果粪汁"
    ],
    tags: ["88数字纹", "虹彩蓝", "南美"]
  }
];

// ============================================================
// 分类阶元关系（界·门·纲·目·科·属·种）
// 分类层级与学名经 GBIF 物种匹配 API 核验，状态均为 ACCEPTED（已接受）
// ============================================================

// 所有蝴蝶共享的上层分类阶元
const HIGHER_RANKS = [
  { rank: "界 Kingdom", la: "Animalia", cn: "动物界" },
  { rank: "门 Phylum", la: "Arthropoda", cn: "节肢动物门" },
  { rank: "纲 Class", la: "Insecta", cn: "昆虫纲" },
  { rank: "目 Order", la: "Lepidoptera", cn: "鳞翅目" }
];

// 目以下的树：目 → 科 → 属 → 种（species 引用 BUTTERFLIES 的 id）
const TAXONOMY = {
  rank: "目", la: "Lepidoptera", cn: "鳞翅目",
  note: "包括蝴蝶与蛾类，全球已知约 18 万种；其中蝴蝶约 1.4–2 万种。本图鉴 158 种分属 5 科 91 属。",
  children: [
    {
      rank: "科", la: "Papilionidae", cn: "凤蝶科",
      note: "中至大型，多有尾突，后翅常具眼斑；含世界最大的蝴蝶，以及多种珍稀保护蝶。",
      children: [
        { rank: "属", la: "Papilio", cn: "凤蝶属", species: ["machaon", "tiger", "mormon", "parispeacock", "citrus", "chinapeacock", "greatmormon", "limepapilio", "citrusswallowtail", "easterntiger", "ulysses", "thoas", "mocker", "bianorlike", "alpineblack"] },
        { rank: "属", la: "Ornithoptera", cn: "鸟翼凤蝶属", species: ["birdwing", "paradisebirdwing", "greenbirdwing", "croesusbirdwing", "bluebirdwing"] },
        { rank: "属", la: "Graphium", cn: "青凤蝶属", species: ["tailedjay", "bluebottle"] },
        { rank: "属", la: "Teinopalpus", cn: "喙凤蝶属", species: ["goldenkaiser"] },
        { rank: "属", la: "Luehdorfia", cn: "虎凤蝶属", species: ["luehdorfia"] },
        { rank: "属", la: "Agehana", cn: "宽尾凤蝶属", species: ["broadtail"] },
        { rank: "属", la: "Parnassius", cn: "绢蝶属", species: ["apollo", "iceclear"] },
        { rank: "属", la: "Sericinus", cn: "丝带凤蝶属", species: ["dragontail"] },
        { rank: "属", la: "Troides", cn: "裳凤蝶属", species: ["goldbirdwing", "commonbirdwing", "oblongbirdwing", "goldenbirdwing2", "amphrysusbird"] },
        { rank: "属", la: "Lamproptera", cn: "燕凤蝶属", species: ["swallowtailmoth"] },
        { rank: "属", la: "Chilasa", cn: "斑凤蝶属", species: ["commonmime"] },
        { rank: "属", la: "Losaria", cn: "锤尾凤蝶属", species: ["clubtail"] },
        { rank: "属", la: "Bhutanitis", cn: "尾凤蝶属", species: ["bhutanitis", "threetail", "twotailpasha2"] },
        { rank: "属", la: "Zerynthia", cn: "锯凤蝶属", species: ["spanishfestoon"] },
        { rank: "属", la: "Pazala", cn: "剑凤蝶属", species: ["chineseswordtail"] },
        { rank: "属", la: "Trogonoptera", cn: "红颈凤蝶属", species: ["rajahbrooke"] },
        { rank: "属", la: "Pachliopta", cn: "珠凤蝶属", species: ["commonrose"] },
        { rank: "属", la: "Atrophaneura", cn: "麝凤蝶属", species: ["atrophaneura"] },
        { rank: "属", la: "Pathysa", cn: "绿凤蝶属", species: ["fivebar"] },
        { rank: "属", la: "Iphiclides", cn: "旖凤蝶属", species: ["podalirius"] }
      ]
    },
    {
      rank: "科", la: "Pieridae", cn: "粉蝶科",
      note: "中小型，多为白、黄色；翅色来自独特的蝶呤色素，含许多常见的农田蝴蝶。",
      children: [
        { rank: "属", la: "Pieris", cn: "粉蝶属", species: ["cabbage"] },
        { rank: "属", la: "Gonepteryx", cn: "钩粉蝶属", species: ["brimstone", "cleopatra"] },
        { rank: "属", la: "Delias", cn: "斑粉蝶属", species: ["jezebel"] },
        { rank: "属", la: "Hebomoia", cn: "鹤顶粉蝶属", species: ["orangetip"] },
        { rank: "属", la: "Catopsilia", cn: "迁粉蝶属", species: ["migrant"] },
        { rank: "属", la: "Appias", cn: "尖粉蝶属", species: ["orangealbatross", "chocalbatross"] },
        { rank: "属", la: "Prioneris", cn: "锯粉蝶属", species: ["sawtooth", "blackveinpier"] },
        { rank: "属", la: "Cepora", cn: "青粉蝶属", species: ["commongull"] },
        { rank: "属", la: "Colias", cn: "豆粉蝶属", species: ["paleclouded", "fieldii"] },
        { rank: "属", la: "Anthocharis", cn: "襟粉蝶属", species: ["orangetipeu"] },
        { rank: "属", la: "Aporia", cn: "绢粉蝶属", species: ["blackveined"] },
        { rank: "属", la: "Phoebis", cn: "大黄粉蝶属", species: ["dogface"] }
      ]
    },
    {
      rank: "科", la: "Lycaenidae", cn: "灰蝶科",
      note: "蝴蝶中第二大科，体型小巧，色彩常呈金属蓝/铜色；许多种幼虫与蚂蚁共生。",
      children: [
        { rank: "属", la: "Polyommatus", cn: "眼灰蝶属", species: ["commonblue"] },
        { rank: "属", la: "Lampides", cn: "亮灰蝶属", species: ["peablue"] }
      ]
    },
    {
      rank: "科", la: "Hesperiidae", cn: "弄蝶科",
      note: "身体粗壮多毛、触角末端弯钩，飞行急促跳跃，形态介于蝶与蛾之间。",
      children: [
        { rank: "属", la: "Hesperia", cn: "弄蝶属", species: ["skipper"] }
      ]
    },
    {
      rank: "科", la: "Nymphalidae", cn: "蛱蝶科",
      note: "蝴蝶中最大的科，前足退化（“刷足蝶”）；拟态、迁徙、结构色的明星多出于此。",
      children: [
        { rank: "属", la: "Danaus", cn: "斑蝶属", species: ["monarch", "plaintiger", "commontiger", "easterncommontiger", "queen"] },
        { rank: "属", la: "Vanessa", cn: "红蛱蝶属", species: ["paintedlady", "redadmiral"] },
        { rank: "属", la: "Morpho", cn: "闪蝶属", species: ["morpho", "cypris", "morphoaurora", "morphocisseis", "morphocypris2", "morphohecuba", "morphoamathonte", "morphoanaxibia", "morphoamphitryon", "morphoaega", "morphodeidamia", "morphosulkowskyi", "morpholuna", "morphopeleides"] },
        { rank: "属", la: "Aglais", cn: "麻蛱蝶属", species: ["peacock", "tortoiseshell"] },
        { rank: "属", la: "Greta", cn: "绡蝶属", species: ["glasswing", "morganegreta"] },
        { rank: "属", la: "Kallima", cn: "枯叶蛱蝶属", species: ["oakleaf"] },
        { rank: "属", la: "Junonia", cn: "眼蛱蝶属", species: ["pansy", "bluepansy"] },
        { rank: "属", la: "Sasakia", cn: "紫蛱蝶属", species: ["emperor"] },
        { rank: "属", la: "Heliconius", cn: "袖蝶属", species: ["postman", "zebralongwing"] },
        { rank: "属", la: "Stichophthalma", cn: "箭环蝶属", species: ["junglequeen"] },
        { rank: "属", la: "Tirumala", cn: "青斑蝶属", species: ["bluetiger", "darkbluetiger"] },
        { rank: "属", la: "Discophora", cn: "方环蝶属", species: ["dukeforester"] },
        { rank: "属", la: "Melanitis", cn: "暮眼蝶属", species: ["eveningbrown"] },
        { rank: "属", la: "Cethosia", cn: "锯蛱蝶属", species: ["redlacewing", "cyanecethosia", "penthesileacet", "hypseacethosia"] },
        { rank: "属", la: "Idea", cn: "帛斑蝶属", species: ["paperkite"] },
        { rank: "属", la: "Caligo", cn: "猫头鹰环蝶属", species: ["owl"] },
        { rank: "属", la: "Polyura", cn: "螯蛱蝶属", species: ["nawab", "delphispolyura", "athamaspolyura"] },
        { rank: "属", la: "Euploea", cn: "紫斑蝶属", species: ["bluecrow", "stripedbluecrow"] },
        { rank: "属", la: "Argynnis", cn: "豹蛱蝶属", species: ["indianfritillary", "silverwashed"] },
        { rank: "属", la: "Damora", cn: "青豹蛱蝶属", species: ["saganafritillary"] },
        { rank: "属", la: "Childrena", cn: "银豹蛱蝶属", species: ["largesilverstripe"] },
        { rank: "属", la: "Argyronome", cn: "老豹蛱蝶属", species: ["pallasfritillary"] },
        { rank: "属", la: "Speyeria", cn: "斑豹蛱蝶属", species: ["darkgreenfrit"] },
        { rank: "属", la: "Boloria", cn: "珍蛱蝶属", species: ["smallpearlfrit"] },
        { rank: "属", la: "Parthenos", cn: "丽蛱蝶属", species: ["clipper"] },
        { rank: "属", la: "Sephisa", cn: "帅蛱蝶属", species: ["easterncourtier"] },
        { rank: "属", la: "Pantoporia", cn: "蟠蛱蝶属", species: ["commonlascar"] },
        { rank: "属", la: "Neptis", cn: "环蛱蝶属", species: ["pallassailer", "commonsailer"] },
        { rank: "属", la: "Parantica", cn: "绢斑蝶属", species: ["chestnuttiger"] },
        { rank: "属", la: "Faunis", cn: "串珠环蝶属", species: ["largefaun"] },
        { rank: "属", la: "Thaumantis", cn: "斑环蝶属", species: ["jungleglory"] },
        { rank: "属", la: "Thauria", cn: "带环蝶属", species: ["jungleking"] },
        { rank: "属", la: "Coenonympha", cn: "珍眼蝶属", species: ["orangeringlet"] },
        { rank: "属", la: "Lasiommata", cn: "多眼蝶属", species: ["blueeyewall"] },
        { rank: "属", la: "Aphantopus", cn: "暗眼蝶属", species: ["darkringlet"] },
        { rank: "属", la: "Lethe", cn: "黛眼蝶属", species: ["lethewhite", "lethevermayb"] },
        { rank: "属", la: "Mycalesis", cn: "眉眼蝶属", species: ["bushbrown"] },
        { rank: "属", la: "Symbrenthia", cn: "璐蛱蝶属", species: ["redjester"] },
        { rank: "属", la: "Dryadula", cn: "环袖蝶属", species: ["bandedorange"] },
        { rank: "属", la: "Marpesia", cn: "剑尾蛱蝶属", species: ["daggerwing"] },
        { rank: "属", la: "Apatura", cn: "闪蛱蝶属", species: ["apatuilia", "apatumetis"] },
        { rank: "属", la: "Kaniska", cn: "琉璃蛱蝶属", species: ["blueadmiral"] },
        { rank: "属", la: "Polygonia", cn: "钩蛱蝶属", species: ["asiancomma"] },
        { rank: "属", la: "Araschnia", cn: "网蛱蝶属", species: ["mapwing"] },
        { rank: "属", la: "Phyciodes", cn: "珍蛱蝶属", species: ["pearlcrescent"] },
        { rank: "属", la: "Nymphalis", cn: "蛱蝶属", species: ["mourningcloak"] },
        { rank: "属", la: "Athyma", cn: "带蛱蝶属", species: ["commonsergeant"] },
        { rank: "属", la: "Helcyra", cn: "白蛱蝶属", species: ["superbahelcyra"] },
        { rank: "属", la: "Cyrestis", cn: "丝蛱蝶属", species: ["coclescyrestis", "thyodamascyr"] },
        { rank: "属", la: "Charaxes", cn: "螯蛱蝶属", species: ["jasiuscharaxes"] },
        { rank: "属", la: "Brenthis", cn: "小豹蛱蝶属", species: ["brenthisino"] },
        { rank: "属", la: "Euthalia", cn: "翠蛱蝶属", species: ["undosaeuthalia"] },
        { rank: "属", la: "Acraea", cn: "珍蝶属", species: ["andromachaacr", "issoriaacraea", "terpsicoreacr", "eginaacraea"] },
        { rank: "属", la: "Stibochiona", cn: "素蛱蝶属", species: ["niceastibo"] },
        { rank: "属", la: "Doleschallia", cn: "蠹叶蛱蝶属", species: ["bisaltidedolesch"] },
        { rank: "属", la: "Diaethria", cn: "涡蛱蝶属", species: ["eightyeight"] },
      ]
    }
  ]
};
