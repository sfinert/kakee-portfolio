# Kakee 포트폴리오 인수인계

## 바로 열기

ZIP을 통째로 풀고 `Kakee-Portfolio/OPEN-PORTFOLIO.html`을 Edge 또는 Chrome에서 엽니다. Windows에서는 `START-LOCAL.cmd`도 같은 페이지를 엽니다. 기본 실행에 필요한 영상, 이미지, Three.js, 3D 모델과 직접 실행용 번들이 들어 있습니다. `LOCAL-SETUP.md`에 조작 방법을 정리했습니다.

## 수정하고 다시 빌드하기

| 바꿀 부분 | 수정할 파일 |
|---|---|
| 첫 화면, 소개 카드와 복도 인터랙션 | `public/index.html`, `public/hero.css`, `public/about.css`, `public/hero-field.js` |
| 작품 카드, 카테고리와 상세 내용 | `public/works.html`, `public/main.js`, `public/works-ribbon.css` |
| Work 상단 영상 리본 | `public/works-ribbon.js`와 `public/media/previews/` |
| 회전·확대, Clay·Wire 모드 | `public/project-viewer.js`와 `public/assets/*.glb` |
| 영상과 이미지 | `public/media/` |

`public/OPEN-PORTFOLIO.html`, `public/OPEN-WORKS.html`, `public/app-local.js`와 GLB에 대응하는 `*-data.js`는 빌드 결과물입니다. 수정은 위의 소스에 적용합니다. 새 3D 작품을 넣을 때는 HTML의 `data-project`와 `main.js`의 작품 키를 일치시키고 GLB를 `public/assets/`에 둡니다.

Node.js 18 이상이 설치된 Windows x64에서는 ZIP에 포함된 빌드 도구를 사용합니다. 폴더 루트에서 바로 실행할 수 있습니다.

```shell
npm run build
```

macOS, Linux 또는 다른 Windows 아키텍처에서는 처음 한 번 `npm ci`로 해당 플랫폼용 빌드 도구를 설치합니다.

```shell
npm ci
npm run build
```

개발 중에는 루트에서 `npm start`를 실행하고 `http://127.0.0.1:8080/`에서 편집한 원본 파일을 확인할 수 있습니다. 직접 열기 버전을 전달하기 전에는 `npm run build`를 실행합니다. 서버가 열릴 포트는 `PORT` 환경 변수로 바꿀 수 있습니다.

## 현재 구현

- 홈은 60fps Revenant 영상에서 원본 Blender 카메라와 정렬한 실시간 복도로 전환됩니다. 복도 중앙의 Revenant 형상에서 샘플링한 24,000개 포인트가 커서와 사운드에 반응합니다. 소리 있는 자동재생이 차단되면 영상이 무음으로 시작하고 스피커 버튼으로 소리를 켤 수 있습니다.
- Work는 총 14개이며 3D 12개, TouchDesigner 3개가 있습니다. 일부 작품은 두 분류에 포함됩니다. Nowhere2Run 내용은 Revenant 항목에 통합했습니다.
- Nyarlathotep은 `Project niala 2.obj`로 교체한 네 파트 모델입니다. Nyarlathotep, Field Lamp, Keychain, Game Controller, Jonglu, Guitar에 3D 뷰어가 있습니다. Keychain과 Game Controller의 완성 텍스처는 렌더 이미지에서 볼 수 있습니다.

## 3D 원본과 변환 도구

`source-assets/`에는 Revenant Blender 씬, 새 Nyarlathotep OBJ, Keychain·Game Controller·Jonglu·Guitar·Field Lamp의 모델 입력 파일과 SHA-256 목록이 있습니다. 웹에서 사용하는 영상과 렌더는 `public/media/`에 있습니다. Blender·Maya 전체 제작 폴더, 외부 텍스처, 원본 영상 전체를 모은 아카이브는 별도 보관 대상입니다. `public/assets/Rev_1.115.toe`를 TouchDesigner에서 열 때도 원래 미디어 경로를 다시 연결해야 할 수 있습니다.

웹 코드만 이어받을 때는 위의 빌드 명령까지 사용하면 됩니다. 3D를 다시 내보낼 때는 Blender에서 원본을 열거나 `scripts/asset-prep/`의 도구를 사용할 수 있습니다. 아래 명령은 이 폴더 루트에서 실행하며 `blender` 실행 파일이 PATH에 등록돼 있다고 가정합니다.

```shell
blender -b --factory-startup --disable-autoexec --python scripts/asset-prep/export-maya-work-assets.py -- --output exports --previews keychain game-controller guitar jonglu-scene jonglu
node scripts/asset-prep/reduce-niala-obj.cjs "source-assets/nyarlathotep/Project niala 2.obj" exports/niala-reduced.obj
blender -b --factory-startup --disable-autoexec --python scripts/asset-prep/export-niala-obj.py -- exports/niala-reduced.obj exports/nyarlathotep.glb
```

`exports/jonglu-scene.glb`는 `public/assets/jonglu.glb`에 대응합니다. Field Lamp를 다시 내보낼 때는 `export-work-models.py`에 입력 FBX와 출력 GLB 경로를 전달합니다. 변환 결과를 확인한 뒤 웹용 파일을 교체하고 다시 빌드합니다.

복도 메시를 갱신할 때는 아래처럼 Blender 5.2 프로젝트를 사용합니다. `exports/`가 없다면 먼저 만듭니다. 홈 영상을 바꾼 뒤 사운드 반응도 바꿀 때는 FFmpeg가 PATH에 있는 상태에서 `node scripts/asset-prep/build-audio-bands.cjs`를 실행합니다.

```shell
blender -b --disable-autoexec source-assets/revenant/Revenant1.blend --python scripts/asset-prep/export-revenant-corridor.py -- exports/revenant-corridor.json
blender -b --disable-autoexec source-assets/revenant/Revenant1.blend --python scripts/asset-prep/add-revenant-fixtures.py -- exports/revenant-corridor.json
node scripts/asset-prep/write-corridor-script.cjs exports/revenant-corridor.json
```

## 전달 전 확인

홈에서 영상, 스크롤과 소개 카드를 확인합니다. Work에서 3D·AI·TouchDesigner 필터를 눌러보고, 작품을 열어 영상과 3D 조작을 확인합니다. `IMPORT-STATUS.md`에 작품별 변경 내역이 있습니다.
