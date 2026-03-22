import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 | DHLM Tools",
  description: "DHLM Tools 개인정보처리방침",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        개인정보처리방침
      </h1>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-sm text-gray-700 space-y-4 leading-relaxed">
        <p>
          DHLM-STUDIO (이하 &quot;회사&quot;)는 이용자의 개인정보를 중요시하며,
          개인정보 보호법을 준수합니다.
        </p>
        <h2 className="text-lg font-semibold text-gray-900 pt-2">
          1. 수집하는 개인정보
        </h2>
        <p>
          본 웹사이트는 별도의 회원가입 없이 이용 가능하며, 개인정보를 직접
          수집하지 않습니다. 다만, Google AdSense 광고 서비스를 통해 쿠키 및
          기기 정보가 수집될 수 있습니다.
        </p>
        <h2 className="text-lg font-semibold text-gray-900 pt-2">
          2. 쿠키 사용
        </h2>
        <p>
          Google AdSense는 광고 제공 및 개선을 위해 쿠키를 사용합니다. 이용자는
          브라우저 설정에서 쿠키를 거부할 수 있습니다.
        </p>
        <h2 className="text-lg font-semibold text-gray-900 pt-2">
          3. 제3자 제공
        </h2>
        <p>
          수집된 정보는 Google의 개인정보처리방침에 따라 처리됩니다. 자세한
          내용은{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand underline"
          >
            Google 개인정보처리방침
          </a>
          을 참고하세요.
        </p>
        <h2 className="text-lg font-semibold text-gray-900 pt-2">
          4. 문의
        </h2>
        <p>
          개인정보 관련 문의사항은 DHLM-STUDIO로 연락해 주시기 바랍니다.
        </p>
        <p className="text-gray-400 pt-4">시행일: 2026년 3월 22일</p>
      </div>
    </div>
  );
}
