import { defineCollection, z } from 'astro:content';

// 小学英语单词 - 人教版 PEP 教材（从主站 src/content.config.ts 迁出，schema 不变）
// 2026-10-11：kids-english 迁子域 kids.zicanbao.com，主站主题纯度 45% → 100%
const words = defineCollection({
  type: 'content',
  schema: z.object({
    word: z.string(),
    zh: z.string(),
    fullZh: z.string().optional().default(''),
    ipa: z.string().optional().default(''),
    partOfSpeech: z.string().optional().default(''),
    grade: z.number().int().min(1).max(6),
    semester: z.number().int().min(1).max(2),
    unit: z.number().int().min(1).max(12),
    unitId: z.string().optional().default(''),
    unitTitle: z.string().optional().default(''),
    audioUrl: z.string().optional().default(''),
    exampleEn: z.string().optional().default(''),
    exampleZh: z.string().optional().default(''),
    confusionWith: z.array(z.string()).optional().default([]),
    page: z.number().int().optional().default(0),
    key: z.boolean().optional().default(false),
    curriculum: z.string().optional().default(''),
    curriculumCode: z.string().optional().default(''),
  }),
});

export const collections = { words };