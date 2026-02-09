import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, 'dist');

// 작품 데이터 (실제 데이터 파일에서 가져오는 대신 수동으로 짧게 정의하거나 파일을 읽어올 수 있습니다)
const projects = [
    { id: 'fishtank', image: 'DSC01525.JPG' },
    { id: 'fishview', image: 'fishviewimage.jpg' },
    { id: 'other-consciousness', image: 'IMG_2648.jpg' },
    { id: 'yawninglink', image: 'DSC01303.JPG' },
    { id: '0-100', image: 'DSC01544.jpg' },
    { id: 'lifetime', image: 'DSC00800.jpg' },
    { id: 'hyunjunahn', image: 'profile1.jpg' }
];

async function generate() {
    const template = fs.readFileSync(path.join(distPath, 'index.html'), 'utf-8');

    for (const project of projects) {
        const imageUrl = `https://hyunjunahn.com/image/${project.image}`;
        let html = template;

        // 메타 태그 교체
        html = html.replace(
            /<meta property="og:image" content="[^"]*"[^>]*>/g,
            `<meta property="og:image" content="${imageUrl}">`
        );
        html = html.replace(
            /<meta name="twitter:image" content="[^"]*"[^>]*>/g,
            `<meta name="twitter:image" content="${imageUrl}">`
        );

        // 각 작품 이름으로 폴더를 만들고 그 안에 index.html 저장 (예: /fishtank/index.html)
        const projectDir = path.join(distPath, project.id);
        if (!fs.existsSync(projectDir)) {
            fs.mkdirSync(projectDir, { recursive: true });
        }
        fs.writeFileSync(path.join(projectDir, 'index.html'), html);
        console.log(`✅ Generated: /${project.id}/index.html`);
    }
}

generate().catch(console.error);
