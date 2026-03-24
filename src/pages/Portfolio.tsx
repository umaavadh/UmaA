export default function Portfolio() {
  return (
    <>
      <div className="bg-ocean-bg">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-20">
          <p className="text-[11px] font-sans font-medium uppercase tracking-[2px] text-ocean-primary mb-6">
            Portfolio
          </p>

          <p className="text-lg text-ocean-text leading-relaxed mb-0 max-w-[800px]">
            A curated selection of my work spanning instructional design, eLearning development, and program strategy.
          </p>
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          {/* Portfolio content will go here */}
        </div>
      </div>
    </>
  );
}
