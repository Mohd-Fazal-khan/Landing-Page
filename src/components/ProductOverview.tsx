export default function ProductOverview() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-24 py-16">
      
        <div className="lg:w-1/2 space-y-6">
          <h1
            className="text-[42px] leading-tight tracking-[-0.02em]"
            style={{
              fontFamily: "'Roboto Condensed', sans-serif",
              fontWeight: 700,
              color: "#1959AC",
            }}
          >
            LOREM IPSUM DOLOR SIT <br />
            AMET CONSECTETUR. <br />
            DIGNISSIM TELLUS.
          </h1>
          <p
            className="text-[16px] leading-relaxed tracking-[-0.02em] justify-between"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              color: "#222222",
            }}
          >
            Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi blandit laoreet urna sapien quam pulvinar.
            Dolor aliquet est tortor tincidunt ultrices feugiat mauris. Aliquam platea turpis porta nisl felis. Massa in
            facilisis semper libero eget eu quisque bibendum platea. Tortor fames.
          </p>
          <button
            className="px-6 py-3 rounded font-semibold transition-colors"
            style={{
              backgroundColor: "#1959AC",
              color: "#FFFFFF",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: "20px",
              letterSpacing: "-0.02em",
            }}
          >
            Lorem ipsum →
          </button>
        </div>

      
        <div className="lg:w-1/2 mt-12 lg:mt-0">
          <img
            src="/dealer.png"
            alt="Motorcycle dealership with two men discussing a scooter"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>

      
      <div className="relative px-8 lg:px-24 pb-24">
       
        <div className="bg-white shadow-xl rounded-lg p-6 max-w-xl absolute -top-40 left-8 z-10">
          <h2
            className="mb-4 tracking-[-0.02em]"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: "24px",
              color: "#222222",
            }}
          >
            Lorem ipsum dolor sit
          </h2>
          <div
            className="space-y-4 text-[16px]"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 200,
              color: "#222222",
            }}
          >
            <p>
              <span className="text-red-600 mr-2">📍</span>
              Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae amet habitasse semper.
            </p>
            <div className="flex items-start">
              <div className="w-3 h-3 bg-[#1959AC] mr-3 mt-1 rounded-sm flex-shrink-0"></div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut placerat vitae amet suspendisse
                fermentum velit. Nibh dolor nunc id tristique sit.
              </p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Hac netus consectetur amet quisque scelerisque facilisi. Ultrices
              lectus viverra pharetra commodo.
            </p>
          </div>
        </div>

      
        <div className="h-3 bg-gradient-to-r from-[#1959AC] via-[#0546D2] to-purple-600 w-full"></div>
      </div>
    </div>
  );
}
