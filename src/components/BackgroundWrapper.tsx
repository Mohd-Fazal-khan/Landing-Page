// // BackgroundWrapper.jsx
// const BackgroundWrapper = ({ children, imageUrl }) => {
//   return (
//     <div
//       className="min-h-screen bg-cover bg-center"
//       style={{ backgroundImage: `url(${imageUrl})` }}
//     >
//       {children}
//     </div>
//   );
// };

// export default BackgroundWrapper;

import { ReactNode } from 'react';

interface BackgroundWrapperProps {
  children: ReactNode;
  imageUrl: string;
}

const BackgroundWrapper = ({ children, imageUrl }: BackgroundWrapperProps) => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {children}
    </div>
  );
};

export default BackgroundWrapper;
