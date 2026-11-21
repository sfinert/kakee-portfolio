import { openProjectViewport, closeProjectViewport } from './project-viewer.js';

const projectData = {
  foodtruck: {
    eyebrow: '3D / ENVIRONMENT & VEHICLE',
    title: 'NEO TOKYO FOOD TRUCK',
    copy: '수족관이 달린 푸드트럭에서 문어 요리사가 음식을 내놓는 장면입니다. 청록빛 간판과 붉은 등불을 배치한 차량을 360도 영상으로 둘러볼 수 있습니다.',
    tools: ['MAYA', 'ENVIRONMENT', '360° RENDER'],
    videos: [{ src: 'media/works/food-truck.mp4', poster: 'media/works/food-truck-poster.jpg', label: '360° RENDER · 00:11' }]
  },
  classroom: {
    eyebrow: '3D / LIGHTING STUDY',
    title: 'CLASSROOM',
    copy: '낡은 교실의 햇빛, 촛불, 붉은 등불을 조합한 라이팅 스터디입니다. 책상 사이에 놓인 마네키네코와 부적이 같은 구도의 두 색조에서 어떻게 보이는지 비교할 수 있습니다.',
    tools: ['MAYA', 'ENVIRONMENT', 'LIGHTING'],
    wide: true,
    stills: [
      { src: 'media/works/classroom-blue.jpg', label: 'BLUE LIGHTING', alt: '차가운 푸른빛이 학교 책상 사이로 드는 교실 렌더' }
    ]
  },
  keychain: {
    eyebrow: '3D / PROP DESIGN',
    title: 'KEYCHAIN',
    copy: '폴더폰과 작은 키링을 모델링하고, 어두운 스튜디오와 빛이 번지는 배경에서 각각 렌더했습니다.',
    tools: ['MAYA', 'PROP MODELING', 'LIGHTING'],
    viewport: { src: 'assets/keychain.glb', poster: 'media/works/keychain.jpg' },
    stills: [
      { src: 'media/works/keychain.jpg', label: 'STUDIO RENDER', alt: '푸른빛을 받는 폴더폰과 키링' },
      { src: 'media/works/keychain-alt.jpg', label: 'ALTERNATE LIGHTING', alt: '무지갯빛 배경에 놓인 폴더폰과 키링' },
      { src: 'media/works/keychain-wire.jpg', label: 'ORIGINAL WIREFRAME', alt: '폴더폰과 키링의 와이어프레임 렌더' }
    ]
  },
  'game-controller': {
    eyebrow: '3D / ENVIRONMENT & PROPS',
    title: 'GAME CONTROLLER',
    copy: '휴대용 게임기와 게임 팩, 스케이트보드, 딱지로 꾸민 공간입니다. 원본 조명 렌더와 VHS 효과를 더한 버전을 함께 볼 수 있습니다.',
    tools: ['MAYA', 'ENVIRONMENT', 'PROP MODELING'],
    viewport: { src: 'assets/game-controller.glb', poster: 'media/works/game-controller.jpg' },
    stills: [
      { src: 'media/works/game-controller.jpg', label: 'ORIGINAL RENDER', alt: '따뜻한 조명 아래 게임기와 소품이 놓인 공간' },
      { src: 'media/works/game-controller-vhs.jpg', label: 'VHS COMPOSITE', alt: 'VHS 효과를 적용한 게임기와 방의 렌더' },
      { src: 'media/works/game-controller-study.jpg', label: 'TEXTURE & CLAY', alt: '게임기 장면의 텍스처와 클레이 비교' }
    ]
  },
  jonglu: {
    eyebrow: '3D / ARCHITECTURAL MODELING',
    title: 'JONGLU',
    copy: '기와지붕, 계단과 난간, 내부에 걸린 종을 모델링한 종루입니다. 3D 뷰어에서 지붕과 구조를 둘러보고, 고해상도 렌더에서 종의 표면을 가까이 볼 수 있습니다.',
    tools: ['MAYA', 'ARCHITECTURAL MODELING', 'HIGH-POLY DETAIL'],
    viewport: { src: 'assets/jonglu.glb', poster: 'media/works/jonglu.jpg' },
    stills: [
      { src: 'media/works/jonglu.jpg', label: 'CLAY PREVIEW', alt: '기와지붕과 난간이 보이는 종루의 클레이 렌더' },
      { src: 'media/works/jonglu-bell.jpg', label: 'BELL DETAIL · CLAY PREVIEW', alt: '고해상도 종 모델의 형태와 표면을 보여주는 클레이 렌더' }
    ]
  },
  guitar: {
    eyebrow: '3D / HARD-SURFACE MODELING',
    title: 'GUITAR · CLAY STUDY',
    copy: '기타의 몸체에 기계 부품을 결합한 하드서피스 모델링입니다. 앞뒤 클레이 렌더에서 구조와 연결부를 살펴볼 수 있습니다.',
    tools: ['MAYA', 'HARD-SURFACE MODELING', 'CLAY STUDY'],
    viewport: { src: 'assets/guitar.glb', poster: 'media/works/guitar-clay.jpg' },
    stills: [
      { src: 'media/works/guitar-clay.jpg', label: 'FRONT · CLAY', alt: '기계식 기타의 앞면 클레이 렌더' },
      { src: 'media/works/guitar-clay-back.jpg', label: 'BACK · CLAY', alt: '기계식 기타의 뒷면 클레이 렌더' }
    ]
  },
  nyarlathotep: {
    eyebrow: 'SCULPTURE / NOMAD SCULPT · IPAD',
    title: 'NYARLATHOTEP',
    copy: '불안과 공포, 이유 없이 밀려오는 불안정한 감각을 H. P. Lovecraft의 우주적 공포에서 출발해 조형으로 해석했습니다. Nomad Sculpt와 iPad로 만든 입체 스터디입니다.',
    tools: ['NOMAD SCULPT', 'IPAD', '3D SCULPTURE'],
    viewport: { src: 'assets/nyarlathotep.glb', poster: 'media/nyarlathotep.jpg' },
    source: 'https://www.instagram.com/kakeekukeko/reel/DGa-LGnzRxI/'
  },
  heavener: {
    eyebrow: 'IMAGE / FIREFLY × TOUCHDESIGNER',
    title: 'HEAVENER',
    copy: '원 게시물의 크레딧을 보존하는 Firefly와 TouchDesigner 기반의 오디오비주얼 실험입니다. Project credit: @invent_animate.',
    tools: ['ADOBE FIREFLY', 'TOUCHDESIGNER', 'AUDIOVISUAL', 'CREDIT: @INVENT_ANIMATE'],
    videos: [
      { src: 'media/works/heavener.mp4', poster: 'media/works/heavener-poster.jpg', label: 'HEAVENER · 00:28' },
      { src: 'media/works/heavener-td.mp4', poster: 'media/works/heavener-td-poster.jpg', label: 'HEAVENER / TD · 00:33' }
    ],
    source: 'https://www.instagram.com/kakeekukeko/reel/DKKcuMfTkjZ/'
  },
  revenant: {
    eyebrow: 'AUDIOVISUAL / BLENDER × TOUCHDESIGNER',
    title: 'REVENANT',
    copy: 'Loathe의 음악에서 떠오른 장면을 복도와 부유하는 형상으로 만들었습니다. Blender에서 분리 렌더한 라이팅 패스를 TouchDesigner에서 음악과 연결했습니다.',
    tools: ['BLENDER', 'LIGHTING PASSES', 'TOUCHDESIGNER', 'AUDIOVISUAL'],
    videos: [{ src: 'media/works/revenant.mp4', poster: 'media/works/revenant-poster.jpg', label: 'REVENANT · 01:50' }],
    files: [{ href: 'assets/Rev_1.115.toe', label: 'TouchDesigner 프로젝트 원본 · .toe', note: 'TouchDesigner에서 열 수 있습니다. 외부 참조 미디어와 경로 설정은 별도로 필요할 수 있습니다.' }],
    source: 'https://www.instagram.com/kakeekukeko/reel/DdMRA8YJYF5/'
  },
  mo: {
    eyebrow: 'MOTION / VIDEO STUDY',
    title: 'mo',
    copy: '움직임과 이미지의 변화를 담은 영상 스터디. 이 영상에는 오디오 트랙이 없습니다.',
    tools: ['MOTION', 'VIDEO'],
    videos: [{ src: 'media/works/mo.mp4', poster: 'media/works/mo-poster.jpg', label: 'mo · 03:02 · SILENT' }]
  },
  ritual: {
    eyebrow: 'AUDIOVISUAL / FILM',
    title: 'RITUAL',
    copy: 'Ritual — Kim Soyeon. 전체 영상을 소리와 함께 감상할 수 있습니다.',
    tools: ['AUDIOVISUAL', 'VIDEO'],
    wide: true,
    videos: [{ src: 'media/works/ritual.mp4', poster: 'media/works/ritual-poster.jpg', label: 'RITUAL · 01:50' }]
  },
  unreal: {
    eyebrow: 'CINEMATIC / MAYA → UNREAL ENGINE 5',
    title: 'SEQUENCE STUDY',
    copy: 'Maya 에셋을 Unreal Engine 5에 임포트하고 시네마틱 시퀀스를 만드는 연습입니다. Translucency·Opacity, Height 맵, V-Ray 머티리얼 인스턴스와 UDIM을 탐색했습니다.',
    tools: ['MAYA', 'UNREAL ENGINE 5', 'SEQUENCER', 'MATERIAL STUDY'],
    source: 'https://www.instagram.com/kakeekukeko/reel/DP39RLCE8cB/'
  },
  station: {
    eyebrow: 'ENVIRONMENT / IMAGE STUDY',
    title: 'SHINJUKU, AFTER HOURS',
    copy: '플랫폼에 남은 녹색 빛과 젖은 반사면을 담은 환경 이미지 스터디입니다. 이미지가 가진 조용한 시간감에 집중했습니다.',
    tools: ['ENVIRONMENT', 'LIGHT', 'STUDY'],
    wide: true,
    stills: [
      { src: 'media/works/shinjuku-final.jpg', label: 'FINAL · RETOUCHED', alt: '젖은 바닥과 녹색 빛이 남은 신주쿠 역 플랫폼의 최종 렌더' },
      { src: 'media/works/shinjuku-render.jpg', label: 'RENDER · BEFORE RETOUCH', alt: '리터치 전 신주쿠 역 플랫폼 렌더' },
      { src: 'media/works/shinjuku-wire.jpg', label: 'WIREFRAME', alt: '신주쿠 역 플랫폼 장면의 와이어프레임 렌더' }
    ],
    source: 'https://www.instagram.com/kakeekukeko/p/DFmNmKnTHeH/'
  },
  lantern: {
    eyebrow: 'OBJECT / MATERIAL STUDY',
    title: 'FIELD LAMP',
    copy: '차가운 금속 프레임과 따뜻한 발광 소재의 대비를 담은 오브젝트 이미지 스터디입니다.',
    tools: ['OBJECT', 'MATERIAL', 'LIGHT'],
    viewport: { src: 'assets/lantern.glb', poster: 'media/lantern-study.jpg' },
    source: 'https://www.instagram.com/kakeekukeko/p/DF7SB5CzDtb/'
  }
};

const projectDialog = document.querySelector('#projectDialog');
const contactDialog = document.querySelector('#contactDialog');
const projectEyebrow = document.querySelector('#projectEyebrow');
const projectTitle = document.querySelector('#projectTitle');
const projectCopy = document.querySelector('#projectCopy');
const projectTools = document.querySelector('#projectTools');
const projectSource = document.querySelector('#projectSource');
const projectMedia = document.querySelector('#projectMedia');
const projectFiles = document.querySelector('#projectFiles');
const projectViewport = document.querySelector('#projectViewport');

projectDialog?.addEventListener('close', () => {
  closeProjectViewport();
  projectViewport.hidden = true;
  projectMedia.querySelectorAll('video').forEach(video => {
    video.pause();
    video.removeAttribute('src');
    video.load();
  });
  projectMedia.replaceChildren();
});

function openDialog(dialog) {
  if (!dialog || dialog.open) return;
  dialog.showModal();
}
function closeDialog(dialog) {
  if (dialog?.open) dialog.close();
}

document.querySelectorAll('[data-open-contact]').forEach(button => {
  button.addEventListener('click', () => openDialog(contactDialog));
});
document.querySelectorAll('[data-close-dialog]').forEach(button => {
  button.addEventListener('click', () => closeDialog(button.closest('dialog')));
});
[projectDialog, contactDialog].forEach(dialog => {
  dialog?.addEventListener('click', event => {
    if (event.target === dialog) closeDialog(dialog);
  });
});

// Full-screen view for render stills: fit to the screen, click for actual pixels, arrows to step.
let lightbox;
function openLightbox(list, start) {
  if (!lightbox) {
    lightbox = document.createElement('dialog');
    lightbox.className = 'image-lightbox';
    lightbox.setAttribute('aria-label', '렌더 이미지 전체 화면');
    lightbox.innerHTML = `
      <div class="lightbox-stage"><img alt=""></div>
      <div class="lightbox-bar">
        <span class="lightbox-label"></span>
        <span class="lightbox-hint">이미지 클릭: 원본 크기 · ← → 이동 · Esc 닫기</span>
        <button type="button" class="lightbox-close" aria-label="전체 화면 닫기">×</button>
      </div>
      <button type="button" class="lightbox-step" data-step="-1" aria-label="이전 이미지">←</button>
      <button type="button" class="lightbox-step" data-step="1" aria-label="다음 이미지">→</button>`;
    document.body.append(lightbox);
    const stage = lightbox.querySelector('.lightbox-stage');
    const image = stage.querySelector('img');
    image.addEventListener('click', event => {
      const bounds = image.getBoundingClientRect();
      const fx = (event.clientX - bounds.left) / bounds.width;
      const fy = (event.clientY - bounds.top) / bounds.height;
      const actual = lightbox.classList.toggle('is-actual');
      if (actual) stage.scrollTo(fx * image.naturalWidth - stage.clientWidth / 2, fy * image.naturalHeight - stage.clientHeight / 2);
    });
    lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
    lightbox.querySelectorAll('.lightbox-step').forEach(button => {
      button.addEventListener('click', () => lightbox.step(Number(button.dataset.step)));
    });
    lightbox.addEventListener('keydown', event => {
      const step = { ArrowLeft: -1, ArrowRight: 1 }[event.key];
      if (step) {
        event.preventDefault();
        lightbox.step(step);
      }
    });
    lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });
  }
  const image = lightbox.querySelector('img');
  let index = start;
  const show = () => {
    const still = list[index];
    lightbox.classList.remove('is-actual');
    image.src = still.src;
    image.alt = still.alt;
    lightbox.querySelector('.lightbox-label').textContent = `${still.label}${list.length > 1 ? `  ${index + 1} / ${list.length}` : ''}`;
  };
  lightbox.step = step => {
    index = (index + step + list.length) % list.length;
    show();
  };
  lightbox.classList.toggle('is-single', list.length < 2);
  show();
  if (!lightbox.open) lightbox.showModal();
}

// The detail sheet grows out of the card that opened it, then its lines rise into place.
function revealFrom(dialog, origin) {
  if (!origin || matchMedia('(prefers-reduced-motion: reduce)').matches || !dialog.animate) return;
  const from = origin.getBoundingClientRect();
  const to = dialog.getBoundingClientRect();
  if (!from.width || !to.width) return;
  const easing = 'cubic-bezier(.2,.8,.2,1)';
  dialog.animate([
    { clipPath: `inset(${from.top - to.top}px ${to.right - from.right}px ${to.bottom - from.bottom}px ${from.left - to.left}px round 10px)` },
    { clipPath: 'inset(0 0 0 0 round 0px)' }
  ], { duration: 620, easing });
  [...dialog.querySelector('.dialog-frame').children].filter(child => !child.hidden).forEach((child, index) => {
    child.animate([
      { transform: 'translateY(18px)', opacity: 0 },
      { transform: 'none', opacity: 1 }
    ], { duration: 520, delay: 160 + index * 45, easing, fill: 'backwards' });
  });
}

export function showProject(key, origin) {
  const item = projectData[key];
  if (!item || !projectDialog) return;
  projectEyebrow.textContent = item.eyebrow;
  projectTitle.textContent = item.title;
  projectCopy.textContent = item.copy;
  projectTools.replaceChildren(...item.tools.map(tool => {
    const tag = document.createElement('span');
    tag.textContent = tool;
    return tag;
  }));
  projectFiles.replaceChildren(...(item.files || []).map(file => {
    const block = document.createElement('div');
    const link = document.createElement('a');
    link.href = file.href;
    link.download = '';
    link.textContent = `${file.label} ↓`;
    block.append(link);
    if (file.note) {
      const note = document.createElement('p');
      note.textContent = file.note;
      block.append(note);
    }
    return block;
  }));
  const stills = (item.stills || []).map((still, index, list) => {
    const figure = document.createElement('figure');
    const label = document.createElement('figcaption');
    label.textContent = still.label;
    const open = document.createElement('button');
    open.type = 'button';
    open.className = 'still-open';
    open.setAttribute('aria-label', `${still.label} 전체 화면으로 보기`);
    const image = document.createElement('img');
    image.src = still.src;
    image.alt = still.alt;
    image.loading = 'lazy';
    open.append(image, Object.assign(document.createElement('span'), { className: 'still-hint', textContent: '전체 화면 ↗' }));
    open.addEventListener('click', () => openLightbox(list, index));
    figure.append(label, open);
    return figure;
  });
  projectDialog.classList.toggle('is-wide', Boolean(item.wide));
  projectMedia.replaceChildren(...stills, ...(item.videos || []).map(media => {
    const figure = document.createElement('figure');
    const label = document.createElement('figcaption');
    label.textContent = media.label;
    const video = document.createElement('video');
    video.controls = true;
    video.playsInline = true;
    video.preload = 'none';
    video.src = media.src;
    if (media.poster) video.poster = media.poster;
    video.setAttribute('aria-label', media.label);
    const fallback = document.createElement('a');
    fallback.href = media.src;
    fallback.textContent = '영상 파일 열기';
    video.append(fallback);
    figure.append(label, video);
    return figure;
  }));
  projectSource.hidden = !item.source;
  if (item.source) projectSource.href = item.source;
  projectViewport.hidden = !item.viewport;
  openDialog(projectDialog);
  revealFrom(projectDialog, origin);
  if (item.viewport) openProjectViewport({ ...item.viewport, title: item.title });
}

document.querySelectorAll('.work-card__button[data-project], .work-card[data-project] .work-card__button').forEach(button => {
  button.addEventListener('click', () => showProject(button.closest('.work-card').dataset.project, button));
});

const categoryLinks = [...document.querySelectorAll('.work-category-link[data-filter]')];
if (categoryLinks.length) {
  const workCards = [...document.querySelectorAll('.work-card[data-categories]')];
  const workTitle = document.querySelector('#work-title');
  const workCount = document.querySelector('.work-count');
  const cardsByCategory = new Map();

  categoryLinks.forEach(link => {
    const filter = link.dataset.filter;
    const matches = workCards.filter(card => filter === 'all' || card.dataset.categories.split(/\s+/).includes(filter));
    cardsByCategory.set(link, new Set(matches));
    link.querySelector('.work-category-count').textContent = String(matches.length).padStart(2, '0');
  });

  function showCategoryFromLocation() {
    const active = categoryLinks.find(link => link.hash === window.location.hash) || categoryLinks[0];
    const matches = cardsByCategory.get(active);
    categoryLinks.forEach(link => {
      if (link === active) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
    workCards.forEach(card => { card.hidden = !matches.has(card); });
    workTitle.textContent = active.dataset.categoryTitle;
    workCount.textContent = `${String(matches.size).padStart(2, '0')} PROJECTS`;
  }

  window.addEventListener('hashchange', showCategoryFromLocation);
  showCategoryFromLocation();
}

const copyButton = document.querySelector('#copyEmail');
const copyFeedback = document.querySelector('#copyFeedback');
copyButton?.addEventListener('click', async () => {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText('sfinert@gmail.com');
    } else {
      const field = document.createElement('textarea');
      field.value = 'sfinert@gmail.com';
      field.style.position = 'fixed';
      field.style.opacity = '0';
      document.body.append(field);
      field.select();
      document.execCommand('copy');
      field.remove();
    }
    copyFeedback.textContent = 'COPIED — sfinert@gmail.com';
  } catch {
    copyFeedback.textContent = 'PLEASE EMAIL sfinert@gmail.com';
  }
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.work-card').forEach(card => revealObserver.observe(card));

const lineObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-in');
    lineObserver.unobserve(entry.target);
  });
}, { threshold: .25 });
document.querySelectorAll('[data-reveal]').forEach(element => lineObserver.observe(element));
