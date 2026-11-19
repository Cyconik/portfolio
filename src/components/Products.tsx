import React from 'react';
import { ExternalLink, ShieldAlert, MessageSquareHeart, Radio, Image as ImageIcon, CheckCircle2 } from 'lucide-react';
import { productsData } from '../data/products';

export const Products: React.FC = () => {
  const getProductIcon = (id: string) => {
    switch (id) {
      case 'scansecure': return <ShieldAlert className="w-6 h-6 text-red-500" />;
      case 'spillx': return <MessageSquareHeart className="w-6 h-6 text-pink-500" />;
      case 'galigram': return <Radio className="w-6 h-6 text-indigo-500" />;
      case 'webpconverter': return <ImageIcon className="w-6 h-6 text-blue-500" />;
      default: return <ShieldAlert className="w-6 h-6 text-blue-500" />;
    }
  };

  return (
    <section id="products" className="py-20 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 text-xs font-semibold text-slate-800 uppercase tracking-wider">
            Venture & Product Building
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">
            Products & Entrepreneurship
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Independent ventures engineered from problem discovery to product architecture, user flows, and deployment.
          </p>
        </div>

        {/* Product Cards Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {productsData.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-slate-200/90 rounded-2xl p-7 shadow-subtle hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div className="space-y-5">
                
                {/* Product Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center border border-slate-200/70">
                      {getProductIcon(product.id)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-navy-900">
                          {product.name}
                        </h3>
                        <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100">
                          {product.role}
                        </span>
                      </div>
                      <span className="text-xs font-medium text-slate-500">
                        {product.domain}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                    {product.status}
                  </span>
                </div>

                {/* Tagline & Description */}
                <div>
                  <h4 className="text-sm font-semibold text-slate-800">
                    {product.tagline}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Business Value Box */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs space-y-1">
                  <div className="font-bold text-slate-700 uppercase tracking-wider text-[10px]">
                    Core Problem & Strategic Value
                  </div>
                  <p className="text-slate-600 leading-normal">
                    {product.businessValue}
                  </p>
                </div>

                {/* Key Features List */}
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Architectural & Product Highlights
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {product.keyFeatures.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Product Footer */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {product.technologies.slice(0, 3).map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      {t}
                    </span>
                  ))}
                  {product.technologies.length > 3 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded text-slate-400">
                      +{product.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {product.liveUrl && (
                  <a
                    href={product.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 hover:text-blue-600 transition-colors"
                  >
                    <span>Visit {product.domain}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Phase 2 Deep-Dive Notice */}
        <div className="mt-12 max-w-2xl mx-auto p-4 rounded-xl bg-blue-50/60 border border-blue-200/60 text-center text-xs text-blue-900">
          <span className="font-semibold">Phase 2 Documentation:</span> Comprehensive pitch decks, metric dashboards, and customer journey case studies for each product will be expanded in Phase 2.
        </div>

      </div>
    </section>
  );
};
