# 포트폴리오 작품 반영 내역

첫 화면과 Revenant 상세창은 같은 1280×720 MP4를 사용합니다. 홈에서는 전체 화면 영상을 낮은 음량으로 재생하고, 소리 있는 자동재생이 차단되면 무음으로 이어집니다. Work에는 작품 14개가 있습니다. Nowhere2Run과 Revenant는 하나의 Revenant 항목으로 정리했습니다.

Neo Tokyo Food Truck과 Classroom은 제공된 Maya Projects 폴더의 완성 렌더를 사용했습니다. 두 작품의 Instagram 게시물은 확인되지 않았습니다.

홈은 Revenant1.blend의 카메라와 복도 메시를 사용합니다. 천장 패널과 표면 재질은 웹에서 보기 좋게 단순화했습니다. 원본 node_0 표면에서 뽑은 점 24,000개가 포인터와 음악에 반응하며, 같은 복도 안에 Kakee 소개 카드가 나타납니다.

Nyarlathotep 뷰어에는 새로 제공한 `Project niala 2.obj`를 최적화한 GLB를 연결했습니다. Body, Feet, Hand_1, Tail 네 파트를 유지했으며 표시 방식은 Clay와 Wire입니다.

| 추가 작품 | 웹 3D 모델 소스 | 렌더 |
|---|---|---|
| Keychain | `assetsforexport.fbx` | Maya 원본 스튜디오, 컬러, 와이어 렌더 |
| Game Controller | `scene.fbx` | Maya 원본, VHS, 텍스처·클레이 렌더 |
| Jonglu | `jonglu_fin.fbx` | 종루와 `jong_high.obj` 기반 종 디테일을 새로 렌더 |
| Guitar · Clay Study | `guitar_all.fbx` | Maya 원본 앞·뒤 클레이 렌더 |

웹 뷰어는 원본 FBX에서 작업물의 형태를 살린 경량 GLB를 사용합니다. Keychain은 폴더폰과 키링, Game Controller는 방 배경을 제외한 콘솔과 소품을 표시합니다.

OPEN-PORTFOLIO.html을 열면 서버 없이 실행할 수 있습니다. START-LOCAL.cmd도 같은 HTML을 엽니다.

Heavener 상세창에서 영상 2개를 볼 수 있습니다.

| 원본 | 사이트 파일 | 용량 | 연결 위치 |
|---|---|---|---|
| Revenant_fin.mov | public/media/works/revenant.mp4 | 90.71 MB | 첫 화면과 Revenant 상세창 |
| mo.mov | public/media/works/mo.mp4 | 84.95 MB | mo 상세창 · 원본에 오디오 없음 |
| heavener_td.mov | public/media/works/heavener-td.mp4 | 14.77 MB | Heavener 상세창 · TD 버전 |
| heavener.mp4 | public/media/works/heavener.mp4 | 25.02 MB | Heavener 상세창 |
| ACCUnreal_Ritual_KimSoyeon_수정본.mp4 | public/media/works/ritual.mp4 | 138.70 MB | Ritual 상세창 |
| Rev_1.115.toe | public/assets/Rev_1.115.toe | 0.11 MB | Revenant 상세창 · 원본 다운로드 |

영상은 H.264 MP4로 만들었으며 원본의 길이와 오디오 유무를 확인했습니다. mo 원본에는 오디오 트랙이 없습니다. 작품 상세창 영상은 방문자가 직접 시작합니다. 원본 파일은 기존 위치에 보존되어 있습니다.

TOE는 TouchDesigner 프로젝트 원본입니다. 웹에서 실행되지 않으며, 외부 참조 에셋과 경로 설정은 별도로 필요할 수 있습니다.

작품 상세창, 영상 플레이어, 렌더 이미지, 다운로드와 분류 동작을 DOM 테스트로 확인했습니다. Edge에서 로컬 홈 영상과 실제 WebGL 복도 전환을 확인했습니다.

## Maya 자료 참고

C:/SORO_3D_STUDY/Maya/Projects 아래에서 FBX 76개를 확인했습니다. 파일 이름 기준으로 다음 자료를 후속 3D 작업 후보로 정리했습니다. 모델의 실제 내용과 사용 여부는 별도 검토가 필요합니다.

- Metro: KSY23_h31_Metro/scenes/Metro_all.fbx, Metro_Unreal.fbx
- Lantern: KSY23_h32_Lantern/scenes/ 안의 FBX 2개
- Nyarlathotep 후보: Personal_Projects/Nyalathotep/Project niala.fbx
- 기타 후보: Guitar, Beetles, The_Drain_Katana, UFC_girl, Classroom, FoodTruck, Keychain, GameController, Jonglu

Maya 폴더는 참고 자료로 확인했으며 전체 원본을 사이트에 복사하지 않았습니다.
