import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';
import { readdirSync as fsRead, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

// 小学英语子站（2026-10-11 从 zicanbao.com 迁出）
// URL 结构刻意去掉 /kids-english 这一层，保证迁移后 URL 与原站一致（仅换域名），
// 否则 77 个已收录页面会变成死链。
export default defineConfig({
  site: 'https://kids.zicanbao.com',
  output: 'static',
  adapter: cloudflare({ imageService: 'compile' }),
  integrations: [
    sitemap({
      serialize(item) {
        if (item.url === 'https://kids.zicanbao.com/') return item;
        const rel = item.url.replace('https://kids.zicanbao.com', '').replace(/^\/|\/$/g, '');
        const base = fileURLToPath(new URL('./src/content', import.meta.url));
        // unit 页 URL 是 g1-s1/u1/，取最后一段拿不到文件名；单词库按 g{g}-s{s}-u{u}-{word}.md 命名，
        // 这里退回整个目录里最近修改的文件作为近似（页面的词条更新时间）。
        const segs = rel.split('/');
        const last = segs[segs.length - 1];
        try {
          return { ...item, lastmod: statSync(join(base, 'words', `${last}.md`)).mtime.toISOString() };
        } catch {
          if (segs.length >= 2) {
            const [gs, u] = segs.slice(-2);
            const m = gs.match(/^g(\d)-s(\d)$/);
            if (m) {
              const dir = join(base, 'words');
              let newest = 0;
              for (const f of fsRead(dir)) {
                if (f.startsWith(`${gs}-${u}-`)) newest = Math.max(newest, statSync(join(dir, f)).mtimeMs);
              }
              if (newest) return { ...item, lastmod: new Date(newest).toISOString() };
            }
          }
          return item;
        }
      },
    }),
  ],
});