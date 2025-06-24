import React from 'react';
import Slide from './components/Slide';
import Chile3DMap from './components/Chile3DMap';
import { slideData } from './data/chileData';

const App: React.FC = () => {
  return (
    <div className="w-screen h-screen">
      {slideData.map((data, index) => (
        <Slide
          key={index}
          title={data.title}
          text={data.text}
          backgroundImageUrl={data.backgroundImageUrl}
          isFirstSlide={index === 0}
        />
      ))}
      <section 
        id="map-slide" 
        className="slide slide-snap bg-gray-900 flex flex-col justify-center items-center p-4 md:p-8"
        aria-labelledby="map-title"
      >
        <div className="slide-content w-full max-w-5xl text-center mb-6">
          <h1 id="map-title" className="text-3xl md:text-5xl font-bold text-sky-400 mb-4">Explore Chile in 3D</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            Interact with the globe to discover Chile's place in the world. Zoom, pan, and rotate to get a closer look.
          </p>
        </div>
        <div className="w-full h-[60vh] md:h-[70vh] max-w-4xl rounded-lg overflow-hidden shadow-2xl border border-gray-700">
          <Chile3DMap />
        </div>
         <p className="text-xs text-gray-500 mt-8">Globe powered by react-globe.gl. Map data © OpenStreetMap contributors.</p>
      </section>
    </div>
  );
};

export default App;