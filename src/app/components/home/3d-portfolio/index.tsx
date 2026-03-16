'use client';

import { ModelViewer } from '../../3d-viewer';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function ThreeDPortfolio() {
  return (
    <section className="py-16 md:py-32">
      <div className="container">
        <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
          <h2>3D Models</h2>
          <p className="text-xl text-primary">( 06 )</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-12">
          {/* Snorlax 3D Model */}
          <div className="w-full h-96 md:h-[500px] rounded-lg overflow-hidden bg-softGray shadow-lg">
            <ModelViewer
              modelPath={`${basePath}/models/snorlax.glb`}
              scale={2}
              autoRotate={true}
              rotationSpeed={0.005}
              enableDrag={true}
            />
          </div>

          <div className="flex flex-col justify-center gap-4 md:gap-6">
            <h3 className="text-2xl md:text-3xl font-bold">Interactive 3D Gallery</h3>
            <p className="text-base md:text-lg text-secondary">
              Explore my 3D artwork and models. Click and drag to rotate the models. 
              You can view them from any angle to appreciate the details and craftsmanship.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>Click and drag to rotate the model</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>Scroll to zoom in and out</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>Auto-rotation when not interacting</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
