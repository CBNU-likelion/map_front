import { useState } from "react";
import mapImage from "./assets/map.png";
import iconImage from "./assets/icon.png";
import rankImage from "./assets/rank.png";

const regionButtons = [
  { id: 1, name: "\uC11C\uC6B8", top: "23%", left: "58%" },
  { id: 2, name: "\uACBD\uAE30", top: "31%", left: "33%" },
  { id: 3, name: "\uAC15\uC6D0", top: "39%", left: "48%" },
  { id: 4, name: "\uCDA9\uCCAD", top: "47%", left: "23%" },
  { id: 5, name: "\uACBD\uC0C1", top: "48%", left: "70%" },
  { id: 6, name: "\uC804\uB77C", top: "62%", left: "30%" },
  { id: 7, name: "\uBD80\uC0B0", top: "72%", left: "58%" },
  { id: 8, name: "\uC81C\uC8FC", top: "95%", left: "18%" },
];

const rankingData = [
  { id: 1, school: "\uC11C\uC6B8\uB300\uD559\uAD50" },
  { id: 2, school: "\uCDA9\uB0A8\uB300\uD559\uAD50" },
  { id: 3, school: "\uBD80\uC0B0\uB300\uD559\uAD50" },
];

export default function MainPage() {
  const [searchValue, setSearchValue] = useState("\uCDA9\uBD81\uB300\uD559\uAD50");

  const handleRegionClick = (regionName) => {
    console.log(`${regionName} \uD074\uB9AD`);
  };

  const handleSearch = () => {
    console.log(`${searchValue} \uAC80\uC0C9`);
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
          background: #9f3a3a;
        }

        .main-page {
          width: 100%;
          min-height: 100svh;
          background: #9f3a3a;
          display: flex;
          justify-content: center;
        }

        .main-page__inner {
          position: relative;
          width: min(100%, 393px);
          min-height: 100svh;
          background: #ededed;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .main-page__header {
          background: #9f3a3a;
          padding: 26px 20px 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 14px;
        }

        .main-page__logo {
          margin: 0;
          color: #ffffff;
          font-size: clamp(2.2rem, 7vw, 2.9rem);
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.04em;
          white-space: nowrap;
        }

        .main-page__dots {
          display: flex;
          align-items: center;
          gap: 8px;
          transform: translateY(5px);
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          border: 1.5px solid rgba(255, 255, 255, 0.95);
          background: transparent;
        }

        .dot.active {
          background: rgba(255, 255, 255, 0.95);
        }

        .main-page__content {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 18px 12px 0;
        }

        .main-page__title {
          margin: 0;
          text-align: center;
          color: #5c5c5c;
          font-size: clamp(1.2rem, 5vw, 1.7rem);
          font-weight: 900;
          line-height: 1.35;
          letter-spacing: -0.03em;
        }

        .map-section {
          position: relative;
          margin-top: 18px;
          flex: 1;
          min-height: 1080px;
        }

        .map-section__map {
          display: block;
          width: 100%;
          height: auto;
          object-fit: contain;
          user-select: none;
          -webkit-user-drag: none;
          pointer-events: none;
        }

        .map-section__icon-button {
          position: absolute;
          width: 54px;
          height: 54px;
          border: none;
          background: transparent;
          padding: 0;
          cursor: pointer;
          transform: translate(-50%, -50%);
        }

        .map-section__icon-button img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }

        .map-section__icon-button:hover {
          transform: translate(-50%, -50%) scale(1.06);
        }

        .ranking-box {
          position: absolute;
          right: 10px;
          bottom: 110px;
          width: 205px;
        }

        .ranking-box img {
          width: 100%;
          display: block;
        }

        .ranking-list {
          position: absolute;
          left: 18px;
          right: 18px;
          top: 110px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .ranking-item {
          background: #d9d9d9;
          border-radius: 16px;
          min-height: 54px;
          display: flex;
          align-items: center;
          padding: 0 14px;
          color: #5c5c5c;
          font-size: 1rem;
          font-weight: 900;
          letter-spacing: -0.03em;
        }

        .ranking-item__medal {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          margin-right: 12px;
          flex-shrink: 0;
        }

        .ranking-item:nth-child(1) .ranking-item__medal {
          background: #d4af37;
        }

        .ranking-item:nth-child(2) .ranking-item__medal {
          background: #a8a8a8;
        }

        .ranking-item:nth-child(3) .ranking-item__medal {
          background: #b87333;
        }

        .search-bar-wrap {
          background: #9f3a3a;
          padding: 16px 18px 28px;
        }

        .search-bar {
          width: 100%;
          height: 62px;
          border: none;
          outline: none;
          border-radius: 18px;
          background: #ffffff;
          text-align: center;
          color: #5c5c5c;
          font-size: clamp(1.8rem, 7vw, 2.4rem);
          font-weight: 900;
          letter-spacing: -0.04em;
          padding: 0 18px;
        }

        .search-bar::placeholder {
          color: #777777;
          opacity: 1;
        }

        @media (max-width: 360px) {
          .main-page__header {
            padding: 22px 16px 18px;
          }

          .main-page__content {
            padding: 16px 10px 0;
          }

          .map-section {
            min-height: 980px;
          }

          .map-section__icon-button {
            width: 48px;
            height: 48px;
          }

          .ranking-box {
            width: 185px;
            right: 8px;
            bottom: 102px;
          }

          .ranking-list {
            top: 98px;
            left: 16px;
            right: 16px;
          }

          .ranking-item {
            min-height: 48px;
            font-size: 0.92rem;
          }

          .search-bar {
            height: 58px;
            font-size: 1.9rem;
          }
        }
      `}</style>

      <div className="main-page">
        <div className="main-page__inner">
          <header className="main-page__header">
            <h1 className="main-page__logo">{"\uB9DD\uD55C\uC9C0\uB3C4"}</h1>

            <div className="main-page__dots" aria-label="page indicator">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </header>

          <div className="main-page__content">
            <h2 className="main-page__title">
              {
                "\uC2E4\uC2DC\uAC04\uC73C\uB85C \uC804\uAD6D \uB300\uD559\uAD50\uC758 \uB9DD\uD55C \uD604\uD669\uC744 \uD655\uC778\uD574\uBCF4\uC138\uC694"
              }
            </h2>

            <section className="map-section">
              <img
                src={mapImage}
                alt={"\uC804\uAD6D \uC9C0\uB3C4"}
                className="map-section__map"
              />

              {regionButtons.map((region) => (
                <button
                  key={region.id}
                  type="button"
                  className="map-section__icon-button"
                  style={{ top: region.top, left: region.left }}
                  onClick={() => handleRegionClick(region.name)}
                  aria-label={`${region.name} \uC9C0\uC5ED \uBCF4\uAE30`}
                >
                  <img src={iconImage} alt="" />
                </button>
              ))}

              <div className="ranking-box">
                <img src={rankImage} alt={"\uB7AD\uD0B9 \uBC30\uACBD"} />
                <div className="ranking-list">
                  {rankingData.map((item) => (
                    <div key={item.id} className="ranking-item">
                      <span className="ranking-item__medal"></span>
                      <span>{item.school}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          <div className="search-bar-wrap">
            <input
              type="text"
              className="search-bar"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
              placeholder={"\uD559\uAD50\uBA85\uC744 \uAC80\uC0C9\uD558\uC138\uC694"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
