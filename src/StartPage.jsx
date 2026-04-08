import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const universities = [
  "가야대학교",
  "가천대학교",
  "가톨릭관동대학교",
  "가톨릭꽃동네대학교",
  "가톨릭대학교",
  "강남대학교",
  "강서대학교",
  "강원대학교",
  "건국대학교",
  "건국대학교 GLOCAL캠퍼스 (분교)",
  "건양대학교",
  "경기대학교",
  "경남대학교",
  "경동대학교",
  "경북대학교",
  "경상국립대학교",
  "경성대학교",
  "경운대학교",
  "경일대학교",
  "경희대학교",
  "계명대학교",
  "국립경국대학교",
  "국립공주대학교",
  "국립군산대학교",
  "국립금오공과대학교",
  "국립목포대학교",
  "국립목포해양대학교",
  "국립부경대학교",
  "국립순천대학교",
  "국립창원대학교",
  "국립한국교통대학교",
  "국립한국해양대학교",
  "국립한밭대학교",
  "고려대학교",
  "고려대학교 세종캠퍼스 (분교)",
  "고신대학교",
  "광운대학교",
  "광주대학교",
  "국민대학교",
  "극동대학교",
  "금강대학교",
  "김천대학교",
  "나사렛대학교",
  "남부대학교",
  "남서울대학교",
  "단국대학교",
  "대구가톨릭대학교",
  "대구대학교",
  "대구예술대학교",
  "대구한의대학교",
  "대전대학교",
  "대진대학교",
  "동국대학교",
  "동국대학교 WISE캠퍼스 (분교)",
  "동명대학교",
  "동서대학교",
  "동신대학교",
  "동아대학교",
  "동양대학교",
  "동의대학교",
  "루터대학교",
  "명지대학교",
  "목원대학교",
  "목포가톨릭대학교",
  "배재대학교",
  "백석대학교",
  "부산가톨릭대학교",
  "부산대학교",
  "부산외국어대학교",
  "삼육대학교",
  "상명대학교",
  "상지대학교",
  "서강대학교",
  "서경대학교",
  "서울과학기술대학교",
  "서울기독대학교",
  "서울대학교",
  "서울시립대학교",
  "서원대학교",
  "선문대학교",
  "성결대학교",
  "성공회대학교",
  "성균관대학교",
  "세명대학교",
  "세종대학교",
  "세한대학교",
  "송원대학교",
  "수원대학교",
  "순천향대학교",
  "숭실대학교",
  "신경주대학교",
  "신라대학교",
  "신한대학교",
  "아주대학교",
  "안양대학교",
  "연세대학교",
  "연세대학교 미래캠퍼스 (분교)",
  "영남대학교",
  "영산대학교",
  "위덕대학교",
  "예수대학교",
  "예원예술대학교",
  "용인대학교",
  "우석대학교",
  "우송대학교",
  "울산대학교",
  "원광대학교",
  "유원대학교",
  "을지대학교",
  "인제대학교",
  "인천대학교",
  "인하대학교",
  "전남대학교",
  "전북대학교",
  "전주대학교",
  "제주국제대학교",
  "제주대학교",
  "조선대학교",
  "중부대학교",
  "중앙대학교",
  "중원대학교",
  "차의과학대학교",
  "창신대학교",
  "청주대학교",
  "초당대학교",
  "총신대학교",
  "추계예술대학교",
  "충남대학교",
  "충북대학교",
  "평택대학교",
  "포항공과대학교",
  "한경국립대학교",
  "한국공학대학교",
  "한국기술교육대학교",
  "한국성서대학교",
  "한국외국어대학교",
  "한국항공대학교",
  "한남대학교",
  "한동대학교",
  "한라대학교",
  "한림대학교",
  "한서대학교",
  "한성대학교",
  "한세대학교",
  "한신대학교",
  "한양대학교 서울캠퍼스",
  "한양대학교 ERICA캠퍼스 (분교)",
  "협성대학교",
  "호남대학교",
  "호서대학교",
  "홍익대학교",
  "화성의과학대학교",
];

export default function StartPage() {
  const [university, setUniversity] = useState("");
  const [selectedUniversity, setSelectedUniversity] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [fadeOutIntro, setFadeOutIntro] = useState(false);
  const [hideIntro, setHideIntro] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOutIntro(true);
    }, 0);

    const removeTimer = setTimeout(() => {
      setHideIntro(true);
    }, 1500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  const keyword = university.trim();
  const filteredUniversities = keyword
    ? [
        ...universities.filter((name) => name.startsWith(keyword)),
        ...universities.filter(
          (name) => !name.startsWith(keyword) && name.includes(keyword)
        ),
      ].slice(0, 8)
    : universities.slice(0, 8);

  const handleEnter = () => {
    if (!selectedUniversity) return;
    navigate("/");
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        html, body, #root {
          margin: 0;
          width: 100%;
          min-height: 100%;
        }

        body {
          font-family: "Pretendard", "Apple SD Gothic Neo", "Noto Sans KR", sans-serif;
          background: #9F3A3A;
        }

        .start-page {
          width: 100%;
          min-height: 100svh;
          background: #9F3A3A;
          display: flex;
          justify-content: center;
        }

        .start-page__inner {
          position: relative;
          width: min(100%, 393px);
          min-height: 100svh;
          background: #9F3A3A;
          overflow: hidden;
        }

        .intro-screen,
        .main-screen {
          position: absolute;
          inset: 0;
          width: 100%;
          min-height: 100svh;
          background: #9F3A3A;
        }

        /* 첫 번째 화면 */
        .intro-screen {
          z-index: 2;
          opacity: 1;
          transition: opacity 3s ease;
          pointer-events: none;
        }

        .intro-screen.fade-out {
          opacity: 0;
        }

        .intro-screen__logo-wrap {
          position: absolute;
          left: 50%;
          top: 48%;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          gap: 14px;
          width: max-content;
          animation: splashFloat 1.5s ease-in-out infinite;
        }

        .intro-screen .logo-text {
          animation: splashGlow 1.5s ease-in-out infinite;
        }

        .intro-screen .dot:nth-child(1) {
          animation: splashDot 0.9s ease-in-out infinite;
        }

        .intro-screen .dot:nth-child(2) {
          animation: splashDot 0.9s ease-in-out 0.15s infinite;
        }

        .intro-screen .dot:nth-child(3) {
          animation: splashDot 0.9s ease-in-out 0.3s infinite;
        }

        /* 두 번째 화면 */
        .main-screen {
          z-index: 1;
          padding: 0 28px;
          animation: none;
        }

        .main-screen__header {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 14px;
          padding-top: 148px;
        }

        .logo-text {
          margin: 0;
          color: #FFFFFF;
          font-size: clamp(2rem, 6vw, 2.6rem);
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.04em;
          white-space: nowrap;
        }

        .dots {
          display: flex;
          align-items: center;
          gap: 8px;
          transform: translateY(4px);
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          border: 1.5px solid rgba(255, 255, 255, 0.95);
          background: transparent;
          flex-shrink: 0;
        }

        .dot.active {
          background: rgba(255, 255, 255, 0.95);
        }

        .start-card {
          width: 100%;
          margin-top: 34px;
          background: #F3F3F3;
          border-radius: 24px;
          padding: 34px 16px 18px;
          display: flex;
          flex-direction: column;
          min-height: 388px;
          animation: none;
        }

        .start-card__guide {
          margin: 0;
          text-align: center;
          color: #D9D9D9;
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: -0.03em;
        }

        .start-card__input-wrap {
          position: relative;
          margin-top: 18px;
        }

        .start-card__input {
          width: 100%;
          height: 72px;
          border: none;
          outline: none;
          border-radius: 14px;
          background: #E7E7E7;
          padding: 0 18px;
          font-size: clamp(1.6rem, 6.5vw, 2.1rem);
          font-weight: 900;
          color: #4A4A4A;
          animation: none;
        }

        .start-card__input::placeholder {
          color: #5F5F5F;
          opacity: 1;
        }

        .start-card__dropdown {
          position: absolute;
          top: calc(100% + 10px);
          left: 0;
          right: 0;
          max-height: 240px;
          overflow-y: auto;
          border-radius: 16px;
          background: #FFFFFF;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
          padding: 8px 0;
          z-index: 10;
        }

        .start-card__option {
          width: 100%;
          border: none;
          background: transparent;
          text-align: left;
          padding: 14px 16px;
          font-size: 0.98rem;
          font-weight: 700;
          color: #404040;
          cursor: pointer;
        }

        .start-card__option:hover {
          background: #F4F4F4;
        }

        .start-card__hint {
          margin: 16px 0 0;
          color: #7A7A7A;
          font-size: 0.92rem;
          line-height: 1.5;
          justify-content: center;
        }

        .start-card__selected {
          margin: 10px 0 0;
          color: #88A63B;
          font-size: 0.92rem;
          font-weight: 800;
          justify-content: center;
        }

        .start-card__button {
          margin-top: auto;
          align-self: center;
          width: min(100%, 212px);
          height: 72px;
          border: none;
          border-radius: 12px;
          background: #88A63B;
          color: #FFFFFF;
          font-size: clamp(1.8rem, 6vw, 2.3rem);
          font-weight: 900;
          letter-spacing: -0.04em;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.15s ease;
        }

        .start-card__button:hover {
          background: #789233;
        }

        .start-card__button:active {
          transform: scale(0.98);
        }

        .start-card__button:disabled {
          background: #A8B58A;
          cursor: not-allowed;
        }

        @keyframes splashFloat {
          0%, 100% {
            transform: translate(-50%, -50%);
          }

          50% {
            transform: translate(-50%, calc(-50% - 10px));
          }
        }

        @keyframes splashGlow {
          0%, 100% {
            opacity: 0.82;
          }

          50% {
            opacity: 1;
          }
        }

        @keyframes splashDot {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.45;
          }

          50% {
            transform: translateY(-6px);
            opacity: 1;
          }
        }

        @media (max-width: 360px) {
          .main-screen {
            padding: 0 20px;
          }

          .main-screen__header {
            padding-top: 128px;
            gap: 12px;
          }

          .start-card {
            min-height: 380px;
            padding: 28px 14px 18px;
            border-radius: 20px;
          }

          .start-card__input {
            font-size: 1.45rem;
          }

          .start-card__button {
            width: 100%;
            height: 68px;
          }
        }
      `}</style>

      <div className="start-page">
        <div className="start-page__inner">
          <section className="main-screen">
            <header className="main-screen__header">
              <h1 className="logo-text">망한지도</h1>
              <div className="dots" aria-label="page indicator">
                <span className="dot active"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </header>

            <main className="start-card">
              <p className="start-card__guide">대학교 명을 입력해주세요!</p>

              <div className="start-card__input-wrap">
                <input
                  type="text"
                  placeholder="소속"
                  className="start-card__input"
                  value={university}
                  onChange={(e) => {
                    setUniversity(e.target.value);
                    setSelectedUniversity("");
                  }}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => {
                    window.setTimeout(() => setIsFocused(false), 100);
                  }}
                />

                {isFocused && filteredUniversities.length > 0 && (
                  <div className="start-card__dropdown">
                    {filteredUniversities.map((name) => (
                      <button
                        key={name}
                        type="button"
                        className="start-card__option"
                        onMouseDown={() => {
                          setUniversity(name);
                          setSelectedUniversity(name);
                          setIsFocused(false);
                        }}
                      >
                        {name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <p className="start-card__hint">
                검색 목록에서 학교를 클릭해야<br></br> 입장하기가 가능합니다.
              </p>

              {selectedUniversity && (
                <p className="start-card__selected">
                  {`선택된 대학: ${selectedUniversity}`}
                </p>
              )}

              <button
                className="start-card__button"
                onClick={handleEnter}
                disabled={!selectedUniversity}
              >
                입장하기
              </button>
            </main>
          </section>

          {!hideIntro && (
            <section className={`intro-screen ${fadeOutIntro ? "fade-out" : ""}`}>
              <div className="intro-screen__logo-wrap">
                <h1 className="logo-text">망한지도</h1>
                <div className="dots" aria-label="page indicator">
                  <span className="dot active"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
}
