# Project structure

## Folder and file conventions

### Top-level folders

``` text
/next-app
├── /src
│   ├── /app
│   ├── /pages
└── /public
```

최상위 폴더는 애플리케이션의 코드와 정적 자산을 정리하는 데 사용됩니다.

|          |                        |
| -------- | ---------------------- |
| `app`    | App Router             |
| `pages`  | Pages Router           |
| `public` | 제공될 정적 자산       |
| `src`    | 애플리케이션 소스 폴더 |

### Top-level files

최상위 파일은 애플리케이션 구성, 종속성 관리, 미들웨어 실행, 모니터링 도구 통합, 환경 변수 정의에 사용됩니다.

|                    |                                  |
| ------------------ | -------------------------------- |
| `next.config.js`   | Next.js의 구성 파일              |
| `package.json`     | 프로젝트 종속성 및 스크립트      |
| `.env`             | 환경 변수                        |
| `.env.local`       | 로컬 환경 변수                   |
| `.env.production`  | Production 환경 변수             |
| `.env.development` | Development 환경 변수            |
| `.eslintrc.json`   | Eslint의 구성 파일               |
| `.gitignore`       | 무시할 Git 파일 및 폴더          |
| `.next-env.d.ts`   | Next.js용 타입스크립트 선언 파일 |
| `.tsconfig.json`   | TypeScript용 구성 파일           |
| `.jsconfig.json`   | JavaScript용 구성 파일           |

### Routing Files

|             |              |
| ----------- | ------------ |
| `layout`    | Layout       |
| `page`      | Page         |
| `not-found` | Not found UI |
| ...         |              |

### Nested routes

|                 |                      |
| --------------- | -------------------- |
| `folder`        | Route segment        |
| `folder/folder` | Nested route segment |

### Dynamic routes

|                 |                                  |
| --------------- | -------------------------------- |
| `[folder]`      | 동적 라우트 세그먼트             |
| `[...folder]`   | Catch-all route segment          |
| `[[...folder]]` | Optional catch-all route segment |

### Route Groups and private folders

|            |                                                         |
| ---------- | ------------------------------------------------------- |
| `(folder)` | 라우팅에 영향을 주지 않고 경로 그룹화                   |
| `_folder`  | 폴더 및 모든 하위 세그먼트를 라우팅에서 제외하도록 선택 |

### Metadata file conventions

### SEO

|           |             |                       |
| --------- | ----------- | --------------------- |
| `sitemap` | `.xml`      | Sitemap file          |
| `sitemap` | `.js` `.ts` | Generated Sitemap     |
| `robots`  | `.txt`      | Robots file           |
| `robots`  | `.js` `.ts` | Generated Robots file |

## Component hierarchy

### **컴포넌트 계층의 기본 구조**

다음은 `app/` 디렉토리의 주요 컴포넌트 계층을 설명합니다:

#### 1. Layout 컴포넌트

- 파일명: `layout.js` (또는 `.tsx`)
- **역할**:
  - 페이지의 **공통 레이아웃**을 정의합니다.
  - 헤더, 푸터, 네비게이션 바 등 **전역적인 UI 요소**를 포함.
  - 특정 경로와 관련된 모든 페이지에 동일하게 적용.
- **특징**:
  - **중첩 레이아웃(Nested Layout)** 을 지원하여 경로에 따라 다르게 구성 가능.
  - 부모 레이아웃에서 자식 레이아웃으로 **상태나 컨텍스트**를 전달할 수 있음.

#### 2. Page 컴포넌트

- 파일명: `page.js` (또는 `.tsx`)
- **역할**:
  - **라우트와 연결된 페이지**를 정의.
  - 특정 URL에 렌더링되는 주요 콘텐츠를 포함.
- **특징**:
  - `layout.js` 안에 포함되어 **레지온(지역적인 콘텐츠)** 을 담당.
  - URL과 1:1 매핑됨. 예: `/about` → `app/about/page.js`.

#### 3. Not Found 컴포넌트

- 파일명: `not-found.js`
- **역할**:
  - **404 페이지**를 경로별로 정의.
  - 해당 경로가 존재하지 않을 경우 사용자에게 보여줄 화면.

### 중첩 구조

Next.js의 app/ 디렉토리는 중첩(Nested) 구조를 지원합니다.  
이로 인해 다음과 같은 계층 구조가 가능:

``` text
app/
├── layout.js         // 전역 레이아웃
├── page.js           // 홈 페이지
├── dashboard/
│   ├── layout.js     // 대시보드 전용 레이아웃
│   ├── page.js       // 대시보드 메인 페이지
│   ├── settings/
│   │   ├── page.js   // 대시보드 > 설정 페이지
│   │   └── error.js  // 설정 페이지 오류 처리
└── about/
    ├── layout.js     // About 페이지 전용 레이아웃
    ├── page.js       // About 페이지
    └── loading.js    // About 페이지 로딩 상태
```

- 경로별로 고유한 레이아웃과 상태를 정의 가능.
- 복잡한 프로젝트에서도 구조를 쉽게 유지 가능.
