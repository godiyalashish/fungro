import { FUNNGRO_STATS } from "@/lib/constants";

export default function StatsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-modern-primary mb-2">
              {FUNNGRO_STATS.companies}
            </div>
            <div className="text-gray-600">Companies</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-modern-primary mb-2">
              {FUNNGRO_STATS.categories}
            </div>
            <div className="text-gray-600">Categories</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-modern-primary mb-2">
              {FUNNGRO_STATS.teenlancers}
            </div>
            <div className="text-gray-600">Teenlancers</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-modern-primary mb-2">
              {FUNNGRO_STATS.liveProjects}
            </div>
            <div className="text-gray-600">Live Projects</div>
          </div>
        </div>
      </div>
    </section>
  );
}
