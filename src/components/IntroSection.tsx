import campusImage from "@/assets/campus-pilani.jpg";

const IntroSection = () => {
  return (
    <section className="bg-lavender py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-display text-foreground font-semibold leading-tight mb-6">
            Driving Sustainability Across Our Campuses
          </h2>
          <p className="text-base font-body text-muted-foreground leading-relaxed">
            At BITS Pilani, we are deeply committed to fostering a culture of
            sustainability and environmental consciousness. This bold vision is our
            response to the urgent need to address climate change and its potential
            impact on the environment and society.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src={campusImage}
            alt="BITS Pilani Campus"
            className="w-full h-80 object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
