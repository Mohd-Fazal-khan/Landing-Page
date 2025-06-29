'use client';
import Image from 'next/image';

const Mockup = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center py-8">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12">
       
        <div className="flex-1 max-w-xl">
          <span
            className="mb-2 block"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '20px',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              color: '#1959AC'
            }}
          >
            Lorem Ipsum
          </span>

          <h1
            className="leading-snug mb-6"
            style={{
              fontFamily: "'Roboto Condensed', sans-serif",
              fontSize: '42px',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: '#222222'
            }}
          >
            Lorem Ipsum Dolor <br /> Sit Amet
          </h1>

          <p
            className="mb-8"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '20px',
              fontWeight: 400,
              letterSpacing: '-0.02em',
              color: '#222222',
              lineHeight: '1.7'
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna
            lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.
          </p>


          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="w-40"
              style={{ transition: 'all 0.3s ease' }}
            >
              <Image
                src="/google_play.png"
                alt="Get it on Google Play"
                width={160}
                height={48}
                className="w-full h-auto"
              />
            </a>
            <a
              href="#"
              className="w-40"
              style={{ transition: 'all 0.3s ease' }}
            >
              <Image
                src="/apple_store.png"
                alt="Download on the App Store"
                width={160}
                height={48}
                className="w-full h-auto"
              />
            </a>
          </div>
        </div>

        
        <div className="flex-1 flex justify-center">
          <Image
            src="/sectionsiximg.png"
            alt="Phone in Hand"
            width={400}
            height={600}
            className="w-auto max-w-sm h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Mockup;
