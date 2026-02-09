const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
    const url = req.url.split('?')[0]; // URL에서 파라미터 제외하고 경로만 추출
    const pathName = url.replace(/^\//, '') || 'hyunjunahn';

    // 작품별 이미지 매핑 (새로운 작품이 생기면 여기에 한 줄만 추가하면 됩니다!)
    const images = {
        'fishtank': 'DSC01525.JPG',
        'fishview': 'fishviewimage.jpg',
        'other-consciousness': 'IMG_2648.jpg',
        'yawninglink': 'DSC01303.JPG',
        '0-100': 'DSC01544.jpg',
        'lifetime': 'DSC00800.jpg',
        'hyunjunahn': 'profile1.jpg'
    };

    const imageName = images[pathName] || images['hyunjunahn'];
    const imageUrl = `https://hyunjunahn.com/image/${imageName}`;

    // 실제 index.html 파일을 읽어옵니다.
    const filePath = path.join(process.cwd(), 'dist', 'index.html');

    if (!fs.existsSync(filePath)) {
        return res.status(404).send('Build not found. Please deploy again.');
    }

    let html = fs.readFileSync(filePath, 'utf8');

    // HTML 내의 메타 태그를 동적으로 교체합니다.
    html = html.replace(
        /<meta property="og:image" content="[^"]*"[^>]*>/g,
        `<meta property="og:image" content="${imageUrl}">`
    );
    html = html.replace(
        /<meta name="twitter:image" content="[^"]*"[^>]*>/g,
        `<meta name="twitter:image" content="${imageUrl}">`
    );

    res.setHeader('Content-Type', 'text/html');
    res.send(html);
};
