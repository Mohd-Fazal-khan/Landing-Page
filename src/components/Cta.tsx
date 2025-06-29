"use client";
export default function CTA() {
  return (
    <div className="bg-white-100 flex flex-col items-center justify-center px-4 py-10">
      <div className="text-center max-w-2xl">
        <div className="bg-gray-400 text-black rounded font-bold text-xl py-2 px-5 mb-8 inline-block">
          LOGO
        </div>

        <h1
          className="mb-4 leading-tight"
          style={{
            fontFamily: "'Roboto Condensed', sans-serif",
            fontSize: "42px",
            letterSpacing: "-0.02em",
            fontWeight: 700,
            color: "#222222",
          }}
        >
          LOREM IPSUM DOLOR SIT AMET CONSECTETUR. DUI.
        </h1>

        <p
          className="mb-6 max-w-lg mx-auto"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "20px",
            letterSpacing: "-0.02em",
            fontWeight: 600,
            color: "#222222",
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor
          pharetra tempor quis arcu. Ipsum nullam.
        </p>

        <button
          className="flex items-center gap-2 mx-auto px-6 py-3 rounded transition-colors"
          style={{
            backgroundColor: "#1959AC",
            color: "#ffffff",
            fontFamily: "'Inter', sans-serif",
            fontSize: "20px",
            letterSpacing: "-0.02em",
            fontWeight: 600,
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#0546D2")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#1959AC")
          }
        >
          Loerum Ipsum
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
