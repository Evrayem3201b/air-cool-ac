export default function Services() {
    return (
      <section id="services" className="bg-accent py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-primary mb-6">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-background p-6 shadow-lg rounded-md">
            <h3 className="text-xl font-semibold text-primary mb-4">AC Repair</h3>
            <p className="text-textMuted">Fast and reliable air conditioning repair services.</p>
          </div>
          <div className="bg-background p-6 shadow-lg rounded-md">
            <h3 className="text-xl font-semibold text-primary mb-4">Installation</h3>
            <p className="text-textMuted">Efficient installation of air conditioning systems.</p>
          </div>
          <div className="bg-background p-6 shadow-lg rounded-md">
            <h3 className="text-xl font-semibold text-primary mb-4">Maintenance</h3>
            <p className="text-textMuted">Regular maintenance to keep your AC running smoothly.</p>
          </div>
        </div>
      </section>
    );
  }
  