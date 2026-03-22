import Link from "next/link";

const financeTools = [
  { name: "연봉 실수령액 계산기", desc: "세후 월급과 공제 항목을 한눈에 확인", href: "/salary" },
  { name: "퇴직금 계산기", desc: "근무기간과 급여 기반 예상 퇴직금 계산", href: "/severance" },
  { name: "대출 이자 계산기", desc: "월 상환액과 상환 스케줄 확인", href: "/loan" },
  { name: "부가세 계산기", desc: "VAT 포함/제외 금액 간편 계산", href: "/vat" },
  { name: "적금 이자 계산기", desc: "만기 수령액과 세후 이자 계산", href: "/deposit" },
  { name: "마진 계산기", desc: "마진율, 원가, 판매가 역산 계산", href: "/margin" },
  { name: "유튜브 수익 계산기", desc: "예상 광고 수익을 원화로 확인", href: "/youtube" },
  { name: "퍼센트 계산기", desc: "퍼센트 계산 3가지 모드 지원", href: "/percent" },
];

const lifeTools = [
  { name: "BMI 계산기", desc: "체질량지수 측정", href: "#" },
  { name: "칼로리 계산기", desc: "일일 권장 칼로리", href: "#" },
  { name: "나이 계산기", desc: "만 나이 / 한국 나이", href: "#" },
  { name: "단위 변환기", desc: "길이, 무게, 온도 변환", href: "#" },
  { name: "날짜 계산기", desc: "D-Day, 기간 계산", href: "#" },
  { name: "타이머", desc: "스톱워치 & 타이머", href: "#" },
];

const devTools = [
  { name: "JSON 포맷터", desc: "JSON 정렬 및 검증", href: "#" },
  { name: "Base64 인코더", desc: "인코딩/디코딩 변환", href: "#" },
  { name: "해시 생성기", desc: "MD5, SHA-256 해시", href: "#" },
  { name: "정규식 테스터", desc: "정규표현식 실시간 테스트", href: "#" },
  { name: "색상 변환기", desc: "HEX, RGB, HSL 변환", href: "#" },
];

const imageTools = [
  { name: "이미지 리사이즈", desc: "크기 조절 및 자르기", href: "#" },
  { name: "이미지 압축", desc: "용량 줄이기", href: "#" },
  { name: "이미지 변환", desc: "PNG, JPG, WebP 변환", href: "#" },
  { name: "QR코드 생성기", desc: "QR코드 만들기", href: "#" },
  { name: "파비콘 생성기", desc: "파비콘 만들기", href: "#" },
];

interface CategoryProps {
  id: string;
  icon: string;
  title: string;
  count: number;
  tools: { name: string; desc: string; href: string }[];
}

function CategorySection({ id, icon, title, count, tools }: CategoryProps) {
  return (
    <section id={id} className="mb-12">
      <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <span>{icon}</span>
        {title}
        <span className="text-sm font-normal text-gray-400">({count}개)</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {tools.map((tool) => (
          <Link
            key={tool.name}
            href={tool.href}
            className={`block p-4 bg-white rounded-xl border border-gray-200 hover:border-brand hover:shadow-md transition-all ${
              tool.href === "#" ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            <h3 className="font-semibold text-gray-900 text-sm mb-1">
              {tool.name}
            </h3>
            <p className="text-xs text-gray-500">{tool.desc}</p>
            {tool.href === "#" && (
              <span className="inline-block mt-2 text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
                준비중
              </span>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          무료 온라인 도구 모음
        </h1>
        <p className="text-gray-500 text-base">
          로그인 없이 바로 사용하는 계산기와 도구
        </p>
      </div>

      <CategorySection
        id="finance"
        icon="&#x1F4B0;"
        title="금융/재테크"
        count={8}
        tools={financeTools}
      />
      <CategorySection
        id="life"
        icon="&#x1F3D7;&#xFE0F;"
        title="생활/건강"
        count={6}
        tools={lifeTools}
      />
      <CategorySection
        id="dev"
        icon="&#x1F4BB;"
        title="개발자 도구"
        count={5}
        tools={devTools}
      />
      <CategorySection
        id="image"
        icon="&#x1F5BC;&#xFE0F;"
        title="이미지 도구"
        count={5}
        tools={imageTools}
      />
    </div>
  );
}
