// components/Footer.js
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="bg-gray-200 text-[#222222] rounded px-4 py-2 font-bold text-lg inline-block">
              LOGO
            </div>
          </div>

          <div className="space-y-4">
            <h3
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "24px",
                letterSpacing: "-0.02em",
                fontWeight: 600,
                color: "#ffffff",
              }}
            >
              Lorem Ipsum
            </h3>
            <ul className="space-y-2">
              {Array.from({ length: 5 }).map((_, idx) => (
                <li key={idx}>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-[#0546D2] transition-colors text-sm"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "16px",
                      letterSpacing: "-0.02em",
                      fontWeight: 600,
                      color: "#ffffff",
                    }}
                  >
                    Lorem Ipsum
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "24px",
                letterSpacing: "-0.02em",
                fontWeight: 600,
                color: "#ffffff",
              }}
            >
              Lorem Ipsum
            </h3>
            <ul className="space-y-2">
              {Array.from({ length: 5 }).map((_, idx) => (
                <li key={idx}>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-[#0546D2] transition-colors text-sm"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "16px",
                      letterSpacing: "-0.02em",
                      fontWeight: 600,
                      color: "#ffffff",
                    }}
                  >
                    Lorem Ipsum
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "24px",
                letterSpacing: "-0.02em",
                fontWeight: 600,
                color: "#ffffff",
              }}
            >
              Lorem Ipsum
            </h3>
            <div className="space-y-3">
              {Array.from({ length: 3 }).map((_, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <p
                    className="text-gray-400 text-sm"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "16px",
                      letterSpacing: "-0.02em",
                      fontWeight: 600,
                      color: "#ffffff",
                    }}
                  >
                    Lorem Ipsum
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
