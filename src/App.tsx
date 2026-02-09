import { useState, useEffect, useMemo, useRef, useLayoutEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './App.css'
import { projects } from './data/projects'
import type { Project } from './data/projects'
// // import { useAdaptiveText } from './hooks/useAdaptiveText'

const GoldfishSVG = () => (
  <svg width="100" height="60" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FFA500" />
        <stop offset="50%" stopColor="#FF8C00" />
        <stop offset="100%" stopColor="#FF4500" />
      </linearGradient>
      <linearGradient id="finGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FF6347" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#FF4500" stopOpacity="0.3" />
      </linearGradient>
    </defs>

    {/* Tail (Fancy Streamlined Tail - Top View) */}
    <g className="fish-tail-top">
      {/* Side Fin 1 (Narrower top lobe) */}
      <path d="M35 30 C 28 15, 10 12, 12 28 C 15 30, 28 32, 35 30" fill="url(#finGradient)" opacity="0.7" />
      {/* Side Fin 2 (Narrower bottom lobe) */}
      <path d="M35 30 C 28 45, 10 48, 12 32 C 15 30, 28 28, 35 30" fill="url(#finGradient)" opacity="0.7" />
      {/* Center Flowing Layer */}
      <path d="M35 30 C 20 22, 5 20, 8 30 C 5 40, 20 38, 35 30" fill="#FF4500" opacity="0.4" />
      {/* Delicate outer edge */}
      <path d="M33 30 C 15 12, 0 15, 3 30 C 0 45, 15 48, 33 30" fill="white" opacity="0.12" />
      {/* Subtle vein lines */}
      <path d="M30 28 L 12 18" stroke="white" strokeWidth="0.2" opacity="0.2" />
      <path d="M30 32 L 12 42" stroke="white" strokeWidth="0.2" opacity="0.2" />
    </g>

    {/* Pectoral Fins (Left & Right - swept back) */}
    <path className="fish-fin-left" d="M70 24C70 24 65 5 45 15C45 15 55 25 70 26" fill="url(#finGradient)" />
    <path className="fish-fin-right" d="M70 36C70 36 65 55 45 45C45 45 55 35 70 34" fill="url(#finGradient)" />

    {/* Body (Symmetrical) */}
    <ellipse cx="60" cy="30" rx="30" ry="12" fill="url(#bodyGradient)" stroke="#E67E22" strokeWidth="0.5" />

    {/* Dorsal Fin (Top view - thin blade along the spine) */}
    <path className="fish-fin-dorsal" d="M75 30 Q 60 28, 45 30 Q 60 32, 75 30Z" fill="#FF4500" opacity="0.9" />

    {/* Eyes (On sides) */}
    <circle cx="82" cy="23" r="3.5" fill="white" />
    <circle cx="83" cy="23" r="1.8" fill="black" />
    <circle cx="82" cy="37" r="3.5" fill="white" />
    <circle cx="83" cy="37" r="1.8" fill="black" />
  </svg>
);

const ProfileContent = ({ imgCount }: { imgCount: number }) => (
  <div id="hyunjunahn" className="profile-container">
    <img src={`/image/profile${imgCount}.jpg`} alt="Profile" className="profile-image" />
    <div className="profile-info">
      <p>{"\u00b7"}{"\u2006"}New media art<br />{"\u00b7"}{"\u2006"}Embedded develop</p>
      <div id="link">
        <img
          id="vimeo"
          src="/image/vimeo.png"
          alt="Vimeo"
          className="social-icon"
          onClick={() => window.open("https://vimeo.com/user162521585")}
        />{" "}
        <img
          id="instagram"
          src="/image/instagram.png"
          alt="Instagram"
          className="social-icon"
          onClick={() => window.open("https://instagram.com/thisnicework")}
        />
      </div>
    </div>
  </div>
)

const ProjectContent = ({ project, fishTankImgId }: { project: Project, fishTankImgId: string }) => {
  const isFishTank = project.id === 'fishtank';
  const imgRef = useRef<HTMLImageElement>(null);
  const textDivRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  // Apply adaptive text sizing on mobile
  // useAdaptiveText(descriptionRef, project.textAlign === 'justify');

  useLayoutEffect(() => {
    const adjustMargin = () => {
      const img = imgRef.current;
      const textDiv = textDivRef.current;
      const title = titleRef.current;

      if (img && textDiv && title) {
        title.style.marginTop = ''; // Reset to default
        if (textDiv.scrollHeight > img.offsetHeight) {
          title.style.marginTop = '0px';
        }
      }
    };

    adjustMargin();
    window.addEventListener('resize', adjustMargin);

    // Also adjust when image is loaded
    const imgElement = imgRef.current;
    if (imgElement) {
      imgElement.addEventListener('load', adjustMargin);
    }

    return () => {
      window.removeEventListener('resize', adjustMargin);
      if (imgElement) imgElement.removeEventListener('load', adjustMargin);
    };
  }, [project.id, fishTankImgId]);

  return (
    <div id={project.id} className="project-container">
      {isFishTank ? (
        <figure className="fishtank-figure">
          <img
            ref={imgRef}
            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            alt=""
            className="fishtank-image"
            style={{
              opacity: fishTankImgId === 'DSC01525' ? 1 : 0,
              backgroundImage: 'url(/image/DSC01525.JPG)',
            }}
            loading="eager"
            fetchPriority="high"
          />
          <img
            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            alt=""
            className="fishtank-image"
            style={{
              opacity: fishTankImgId === 'DSC01524' ? 1 : 0,
              backgroundImage: 'url(/image/DSC01524.JPG)',
            }}
            loading="eager"
            fetchPriority="low"
          />
        </figure>
      ) : (
        <img
          ref={imgRef}
          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          style={{ backgroundImage: `url(${project.imageSrc || '/image/DSC00800.jpg'})` }}
          alt={project.title}
          className="project-image"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      )}
      <div className="project-details" ref={textDivRef}>
        <h1 className="project-title" ref={titleRef}>{project.title}{"\u2006"}({project.year})</h1>
        {project.specs && (
          <p className="project-specs">
            {project.specs.map((spec, i) => (
              <span key={i}>{spec}<br /></span>
            ))}
          </p>
        )}
        <p
          ref={descriptionRef}
          className="project-description"
          style={{
            textAlign: project.textAlign,
            width: project.descriptionWidth,
            whiteSpace: project.id !== 'lifetime' && project.textAlign === 'justify' ? 'normal' : undefined
          }}
        >
          {project.descriptionSnippet}
        </p>
        {project.services && (
          <p className="project-services">
            Services<br />
            {project.services.map((service, i) => (
              <span key={i}>{" "}{"\u00b7"}{"\u2006"}{service}<br /></span>
            ))}
          </p>
        )}
        {project.team && (
          <p className="project-team">
            Collective {"\u00b7"} {project.team.name} {"\u00b7"} {project.team.members.join(' / ')}
          </p>
        )}
        {project.vimeoLink && (
          <p className="project-vimeo">
            <a href={project.vimeoLink} target="_blank" rel="noreferrer">vimeo</a>
          </p>
        )}
      </div>
    </div>
  )
}

function App() {
  const navigate = useNavigate()
  const location = useLocation()

  // Derive active project ID from URL
  const activeProjectId = useMemo(() => {
    const pathId = location.pathname.substring(1)
    if (!pathId) return null
    return projects.find(p => p.id === pathId)?.id || null
  }, [location.pathname])

  const [profileImgCount, setProfileImgCount] = useState(1)
  const [fishTankImgId, setFishTankImgId] = useState('DSC01525')
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  )
  const [swimmingFish, setSwimmingFish] = useState<{
    id: number;
    path: string;
    duration: number;
  }[]>([])

  // Mobile/Tablet: Sync with system dark mode preference + Desktop Scaling
  useEffect(() => {
    const mobileQuery = "(pointer: coarse)";
    const darkQuery = "(prefers-color-scheme: dark)";

    const systemDark = window.matchMedia(darkQuery);


    // Scaling 로직: 큰 모니터에서 비율 유지
    const updateScale = () => {
      const isMobileNow = window.matchMedia(mobileQuery).matches;
      if (!isMobileNow) {
        const baseWidth = 1512; // 기준 너비
        const currentWidth = window.innerWidth;
        const scale = currentWidth / baseWidth;
        document.documentElement.style.setProperty('--desktop-scale', scale.toString());
      } else {
        document.documentElement.style.setProperty('--desktop-scale', '1');
      }
    };

    const handleSystemChange = (e: MediaQueryListEvent) => {
      const currentlyMobile = window.matchMedia(mobileQuery).matches;
      if (currentlyMobile) {
        setIsDarkMode(e.matches);
      }
    };

    systemDark.addEventListener('change', handleSystemChange);
    window.addEventListener('resize', updateScale);
    updateScale(); // 초기 실행

    return () => {
      systemDark.removeEventListener('change', handleSystemChange);
      window.removeEventListener('resize', updateScale);
    };
  }, []);

  // Sync dark mode class with html element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode')
    } else {
      document.documentElement.classList.remove('dark-mode')
    }
  }, [isDarkMode])

  // Easter egg: Fish swimming on Enter & Mobile Tap
  useEffect(() => {
    const spawnFish = () => {
      const scale = parseFloat(document.documentElement.style.getPropertyValue('--desktop-scale')) || 1;
      const w = window.innerWidth / scale;
      const h = window.innerHeight / scale;

      const startX = Math.random() * (w * 1.3) - (w * 0.15);
      const startY = Math.random() * (h * 1.3) - (h * 0.15);
      const endX = Math.random() * (w * 1.3) - (w * 0.15);
      const endY = Math.random() * (h * 1.3) - (h * 0.15);

      const cpX = Math.random() * w;
      const cpY = Math.random() * h;

      const pathStr = `path('M ${startX} ${startY} Q ${cpX} ${cpY} ${endX} ${endY}')`;

      const newFish = {
        id: Date.now(),
        path: pathStr,
        duration: Math.random() * 5 + 15
      }

      setSwimmingFish(prev => {
        if (prev.length >= 5) return prev;
        return [...prev, newFish];
      })

      setTimeout(() => {
        setSwimmingFish(prev => prev.filter(f => f.id !== newFish.id))
      }, newFish.duration * 1000)
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && (activeProjectId === 'fishtank' || activeProjectId === 'fishview')) {
        spawnFish();
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeProjectId])

  // Clear fish when navigating away
  useEffect(() => {
    if (activeProjectId !== 'fishtank' && activeProjectId !== 'fishview') {
      setSwimmingFish([])
    }
  }, [activeProjectId])


  // Timers for animated content
  useEffect(() => {
    let interval: number | undefined
    if (activeProjectId === 'hyunjunahn') {
      interval = window.setInterval(() => {
        setProfileImgCount(prev => (prev === 1 ? 2 : 1))
      }, 700)
    } else if (activeProjectId === 'fishtank') {
      interval = window.setInterval(() => {
        setFishTankImgId(prev => (prev === 'DSC01525' ? 'DSC01524' : 'DSC01525'))
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [activeProjectId])

  // Preload images
  useEffect(() => {
    // 1. Preload immediate essential images
    const essentialImages: string[] = []
    if (activeProjectId === 'fishtank') {
      essentialImages.push('/image/DSC01525.JPG', '/image/DSC01524.JPG')
    } else if (activeProjectId === 'hyunjunahn') {
      essentialImages.push('/image/profile1.jpg', '/image/profile2.jpg')
    }

    essentialImages.forEach(src => {
      const img = new Image()
      img.src = src
    })

    // 2. After initial load, preload ALL other project images in the background
    // 브라우저가 휴식 상태일 때(Idle) 로딩하여 현재 화면 성능에 영향을 주지 않음
    const handle = (window.requestIdleCallback || ((cb: any) => setTimeout(cb, 1000)))(() => {
      projects.forEach(p => {
        if (p.imageSrc && !essentialImages.includes(p.imageSrc)) {
          const img = new Image()
          img.src = p.imageSrc
        }
      })
    });

    return () => {
      if (window.cancelIdleCallback) {
        window.cancelIdleCallback(handle as number);
      } else {
        clearTimeout(handle as number);
      }
    };
  }, [activeProjectId])

  const handleProjectClick = (projectId: string) => {
    navigate(`/${projectId}`)
  }

  return (
    <div className="app-main">
      <nav id="option">
        {projects.map((project, index) => (
          <p
            key={project.id}
            id={project.id === 'hyunjunahn' ? 'name' : (index === 1 ? 'second' : 'first')}
            className={activeProjectId === project.id ? 'active' : ''}
            onClick={() => handleProjectClick(project.id)}
          >
            {project.label}
          </p>
        ))}
      </nav>

      <div className="mode-toggle">
        <span
          className={!isDarkMode ? 'active' : ''}
          onClick={() => setIsDarkMode(false)}
        >
          Light
        </span>
        <span className="separator">/</span>
        <span
          className={isDarkMode ? 'active' : ''}
          onClick={() => setIsDarkMode(true)}
        >
          Dark
        </span>
      </div>

      <main className="content-area">
        {projects.map((project) => (
          <div
            key={project.id}
            style={{ display: activeProjectId === project.id ? 'block' : 'none' }}
          >
            {project.id === 'hyunjunahn' ? (
              <ProfileContent imgCount={profileImgCount} />
            ) : (
              <ProjectContent project={project} fishTankImgId={fishTankImgId} />
            )}
          </div>
        ))}
      </main>

      {/* Easter Egg Fish Layer */}
      <div className="easter-egg-container">
        {swimmingFish.map(fish => (
          <div
            key={fish.id}
            className="swimming-fish"
            style={{
              '--fish-path': fish.path,
              animationDuration: `${fish.duration}s`
            } as any}
          >
            <div className="fish-3d-wrapper">
              <GoldfishSVG />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
