import React from 'react';
import { ExternalLink, CheckCircle2, Sparkles, ShoppingBag } from 'lucide-react';
import { productsData } from '../data/products';

export const Products: React.FC = () => {
  return (
    <section id="products" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Venture & Product Architecture
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900 tracking-tight">
            Products & Entrepreneurship
          </h2>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg">
            Independent ventures engineered from problem discovery to product architecture, user flows, and deployment.
          </p>
        </div>

        {/* Product Cards Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {productsData.map((product) => {
            const isFlagship = product.isFlagship;

            return (
              <div
                key={product.id}
                className={`bg-white border transition-all rounded-2xl p-5 sm:p-7 flex flex-col justify-between ${
                  isFlagship
                    ? 'border-emerald-300 shadow-card ring-2 ring-emerald-500/10 lg:col-span-2 bg-gradient-to-br from-white via-white to-emerald-50/20'
                    : 'border-slate-200/90 shadow-subtle hover:shadow-card hover:border-slate-300'
                }`}
              >
                <div className="space-y-4 sm:space-y-5">
                  
                  {/* Product Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-slate-50 p-1.5 flex items-center justify-center border border-slate-200/80 shadow-subtle flex-shrink-0">
                        <img
                          src={product.logo}
                          alt={`${product.name} Logo`}
                          className="w-full h-full object-contain rounded-lg"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                          <h3 className="text-lg sm:text-xl font-extrabold text-navy-900 truncate">
                            {product.name}
                          </h3>
                          <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded ${
                            isFlagship
                              ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                              : 'bg-blue-50 text-blue-700 border border-blue-100'
                          }`}>
                            {product.role}
                          </span>
                        </div>
                        <span className="text-xs font-semibold text-slate-500 block mt-0.5">
                          {product.domain}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {isFlagship && (
                        <span className="text-xs font-extrabold px-2.5 py-1 rounded-full bg-emerald-600 text-white shadow-sm flex items-center gap-1">
                          <ShoppingBag className="w-3 h-3" />
                          <span>Flagship Innovation</span>
                        </span>
                      )}
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200/60">
                        {product.status}
                      </span>
                    </div>
                  </div>

                  {/* Tagline & Description */}
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">
                      {product.tagline}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Core Value Box */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs space-y-1">
                    <div className="font-bold text-slate-700 uppercase tracking-wider text-[10px]">
                      Core Problem & Strategic Market Value
                    </div>
                    <p className="text-slate-600 leading-normal">
                      {product.businessValue}
                    </p>
                  </div>

                  {/* Key Features List */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Architectural & Product Highlights
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {product.keyFeatures.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Product Footer */}
                <div className="pt-5 mt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {product.technologies.slice(0, 4).map((t) => (
                      <span key={t} className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200/50">
                        {t}
                      </span>
                    ))}
                  </div>

                  {product.liveUrl && (
                    <a
                      href={product.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 hover:text-blue-600 transition-colors bg-slate-50 hover:bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200"
                    >
                      <span>Visit {product.domain}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
