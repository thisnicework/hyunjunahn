import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, 'dist');

// 작품 데이터 (제목 추가!)
const projects = [
    { id: 'howtodosomethingforastone', title: 'How to do something for a stone', image: 'DSC00800.jpg' },
    { id: 'device', title: 'Device', image: 'DSC00800.jpg' },
    { id: 'personaldecoder', title: 'Personal Decoder', image: 'DSC00800.jpg' },
    { id: 'fishtank', title: 'Fish Tank', image: 'DSC01525.JPG' },
    { id: 'fishview', title: 'Fish View', image: 'fishviewimage.jpg' },
    { id: 'other-consciousness', title: 'other-consciousness', image: 'IMG_2648.jpg' },
    { id: 'yawninglink', title: 'Yawning Link', image: 'DSC01303.JPG' },
    { id: '0-100', title: '0-100', image: 'DSC01544.jpg' },
    { id: 'lifetime', title: 'Lifetime', image: 'DSC00800.jpg' },
    { id: 'hyunjunahn', title: 'Hyunjun Ahn', image: 'profile1.jpg' }
];

async function generate() {
    const template = fs.readFileSync(path.join(distPath, 'index.html'), 'utf-8');

    for (const project of projects) {
        const imageUrl = `https://hyunjunahn.com/image/${project.image}`;
        let html = template;

        // 1. 브라우저 탭 제목 및 오픈그래프 제목 교체
        html = html.replace(/<title>.*?<\/title>/g, `<title>${project.title}</title>`);
        html = html.replace(
            /<meta property="og:title" content="[^"]*"[^>]*>/g,
            `<meta property="og:title" content="${project.title}">`
        );

        // 2. 오픈그래프 및 트위터 이미지 교체
        html = html.replace(
            /<meta property="og:image" content="[^"]*"[^>]*>/g,
            `<meta property="og:image" content="${imageUrl}">`
        );
        html = html.replace(
            /<meta name="twitter:image" content="[^"]*"[^>]*>/g,
            `<meta name="twitter:image" content="${imageUrl}">`
        );

        // 각 작품 이름으로 폴더를 만들고 그 안에 index.html 저장
        const projectDir = path.join(distPath, project.id);
        if (!fs.existsSync(projectDir)) {
            fs.mkdirSync(projectDir, { recursive: true });
        }
        fs.writeFileSync(path.join(projectDir, 'index.html'), html);
        console.log(`✅ Generated: /${project.id}/index.html (${project.title})`);
    }
}

generate().catch(console.error);
