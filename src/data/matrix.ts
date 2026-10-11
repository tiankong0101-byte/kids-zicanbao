// ============================================
// AI资产包 产品矩阵 (9大类36项) — 网站栏目规划依据
// 来源: IMA笔记 7490329951363638 + 2026-08-04 市场调研
// 每类: slug(路由) + name(栏目名) + emoji + desc(栏目描述)
//       + products(规划产品, {name, status: 'live'|'soon', slug?})
// 上新品 = 在 products 数组加一行, 不用碰页面代码
// ============================================

export interface MatrixProduct {
  name: string;
  status: 'live' | 'soon';
  slug?: string; // live/soon 产品的详情页 slug
}

export interface MatrixCategory {
  slug: string;
  name: string;
  emoji: string;
  desc: string;
  products: MatrixProduct[];
}

export const matrix: MatrixCategory[] = [
  {
    slug: 'manju',
    name: 'AI漫剧/短剧',
    emoji: '🎬',
    desc: '从人物设定到分镜脚本，AI漫剧创作全链路素材',
    products: [
      { name: '古风言情人物资产包', status: 'live', slug: 'gufeng-yanqing' },
      { name: '仙侠人物资产包', status: 'soon', slug: 'xianxia-renwu' },
      { name: '短剧分镜脚本包', status: 'soon', slug: 'duanju-fenjing' },
      { name: '都市/悬疑/甜宠人物包', status: 'soon' },
      { name: '短剧开头3秒钩子库', status: 'soon' },
      { name: '短剧反转桥段库(100套)', status: 'soon' },
      { name: 'AI漫剧全流程工作流包', status: 'soon' },
    ],
  },
  {
    slug: 'shipin',
    name: 'AI视频/数字人',
    emoji: '🎥',
    desc: '数字人口播、文生视频、转绘风格，视频创作者弹药库',
    products: [
      { name: '数字人口播脚本提示词包', status: 'live', slug: 'shuzukoubo-koubo-jiaoben' },
      { name: '文生视频提示词包(即梦/可灵/海螺)', status: 'live', slug: 'wensheng-shipin-tishici' },
      { name: 'AI视频转绘风格包(国漫/水墨/赛博)', status: 'live', slug: 'zhuanhui-fengge-bao' },
      { name: '口播提词器模板+节奏包', status: 'live', slug: 'koubo-ticiqi-mobai' },
      { name: '短视频爆款结构模板包', status: 'live', slug: 'duanpin-baokuan-jiegou' },
    ],
  },
  {
    slug: 'tishici',
    name: '提示词工程',
    emoji: '💬',
    desc: '最大市场：爆款文案、电商详情、口播脚本，全场景提示词',
    products: [
      { name: '小红书爆款文案提示词包', status: 'live', slug: 'xiaohongshu-baokuan-wenan' },
      { name: '电商商品图+详情页提示词包', status: 'live', slug: 'dianshang-shangpin-xiangqing' },
      { name: '抖音口播脚本提示词包', status: 'live', slug: 'douyin-koubo-jiaoben' },
      { name: '公文写作提示词包', status: 'live', slug: 'gongwen-xiezuo' },
      { name: '视频号爆款文案提示词包', status: 'live', slug: 'shipinhao-baokuan-wenan' },
    ],
  },
  {
    slug: 'huihua',
    name: 'AI绘画/设计',
    emoji: '🎨',
    desc: '风格库、IP形象、电商视觉，让AI画出专业级作品',
    products: [
      { name: 'GPTImage2做PPT-快速出稿方法包', status: 'live', slug: 'ppt-chugao' },
      { name: 'GPTImage2做PPT-风格控制方法包', status: 'live', slug: 'ppt-fengge' },
      { name: 'Codex批量做PPT-全流程自动化方法包', status: 'live', slug: 'ppt-codex' },
      { name: '国漫/厚涂/水墨风格提示词库', status: 'soon' },
      { name: 'IP形象设计提示词包', status: 'soon' },
      { name: 'Logo/海报/封面生成提示词包', status: 'soon' },
      { name: '电商模特图提示词包', status: 'soon' },
      { name: '头像/壁纸提示词包(9.9引流款)', status: 'soon' },
    ],
  },
  {
    slug: 'biancheng',
    name: 'AI编程/开发',
    emoji: '💻',
    desc: '代码生成、页面开发、自动化脚本，AI编程效率工具包',
    products: [
      { name: 'Superpowers完整软件开发方法论', status: 'live', slug: 'superpowers' },
      { name: '编程提示词包(代码生成/调试/优化)', status: 'soon' },
      { name: '前端页面生成提示词包', status: 'soon' },
      { name: 'Excel/数据分析自动化提示词包', status: 'soon' },
      { name: 'AI开发工作流配置包(Claude/Cursor)', status: 'soon' },
    ],
  },
  {
    slug: 'zimeiti',
    name: '自媒体运营',
    emoji: '📱',
    desc: '标题、选题、排版、话术，自媒体人全流程弹药库',
    products: [
      { name: '爆款标题库(各平台500条)', status: 'soon' },
      { name: '选题库(10垂类×100题)', status: 'soon' },
      { name: '小红书图文排版模板包', status: 'soon' },
      { name: '直播话术包(开场/逼单/互动)', status: 'soon' },
    ],
  },
  {
    slug: 'zhichang',
    name: '职场/教育',
    emoji: '💼',
    desc: '简历、述职、教案，职场教育与升职加薪刚需',
    products: [
      { name: '简历优化提示词包', status: 'soon' },
      { name: '述职/年终总结模板包', status: 'soon' },
      { name: 'K12教案/AI出题提示词包', status: 'soon' },
    ],
  },
  {
    slug: 'yinyue',
    name: 'AI音乐/音频',
    emoji: '🎵',
    desc: '歌词、有声书脚本，AI音乐与音频创作素材',
    products: [
      { name: 'Suno歌词提示词包(分风格)', status: 'soon' },
      { name: '有声书/播客分角色脚本包', status: 'soon' },
    ],
  },
  {
    slug: 'gongju',
    name: '工具/部署',
    emoji: '🛠️',
    desc: '差异化王牌：AI自动化工作流与本地部署教程',
    products: [
      { name: 'AI工作流包(自动化配置)', status: 'soon' },
      { name: '本地AI部署教程包', status: 'soon' },
    ],
  },
];

// 栏目 SEO 描述
export const categoryDesc: Record<string, string> = {
  manju: 'AI漫剧/短剧类资产包合集：人物设定、分镜脚本、钩子库，从0到成片的全链路素材',
  shipin: 'AI视频/数字人类资产包合集：数字人口播、文生视频、转绘风格，视频创作者弹药库',
  tishici: '提示词工程类资产包合集：爆款文案、电商详情、口播脚本，全场景提示词即买即用',
  huihua: 'AI绘画/设计类资产包合集：风格库、IP形象、电商视觉提示词',
  biancheng: 'AI编程/开发类资产包合集：代码生成、页面开发、自动化脚本提示词',
  zimeiti: '自媒体运营类资产包合集：爆款标题、选题库、排版模板、直播话术',
  zhichang: '职场/教育类资产包合集：简历优化、述职模板、教案提示词',
  yinyue: 'AI音乐/音频类资产包合集：歌词提示词、有声书脚本',
  gongju: '工具/部署类资产包合集：AI自动化工作流、本地部署教程',
};
