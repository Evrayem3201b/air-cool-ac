export default function Testimonials() {
    return (
      <section id="testimonials" className="bg-accent py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-primary mb-6">What Our Clients Say</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-background p-6 shadow-lg rounded-md w-full sm:w-1/3">
            <p className="text-textMuted mb-4">"Fantastic service, they fixed my AC in no time!"</p>
            <h3 className="text-xl font-semibold text-primary">John Doe</h3>
          </div>
          <div className="bg-background p-6 shadow-lg rounded-md w-full sm:w-1/3">
            <p className="text-textMuted mb-4">"The best AC repair service I've ever used!"</p>
            <h3 className="text-xl font-semibold text-primary">Jane Smith</h3>
          </div>
        </div>
      </section>
    );
  }
  