import React from "react";

const FontDemo: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-primary mb-2">
          Calmius Sans High Font Demo
        </h1>
        <p className="text-muted-foreground">
          Showcasing different weights and styles
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Font Weights */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2">
            Font Weights
          </h2>

          <div className="space-y-3">
            <div className="p-4 bg-card rounded-lg border">
              <p className="font-extralight text-lg">Extra Light (200)</p>
              <p className="font-extralight text-sm text-muted-foreground">
                Ultra-light text for minimal design
              </p>
            </div>

            <div className="p-4 bg-card rounded-lg border">
              <p className="font-light text-lg">Light (300)</p>
              <p className="font-light text-sm text-muted-foreground">
                Perfect for subtle text and captions
              </p>
            </div>

            <div className="p-4 bg-card rounded-lg border">
              <p className="font-normal text-lg">Regular (400)</p>
              <p className="font-normal text-sm text-muted-foreground">
                Ideal for body text and paragraphs
              </p>
            </div>

            <div className="p-4 bg-card rounded-lg border">
              <p className="font-medium text-lg">Medium (500)</p>
              <p className="font-medium text-sm text-muted-foreground">
                Great for emphasized text and labels
              </p>
            </div>

            <div className="p-4 bg-card rounded-lg border">
              <p className="font-semibold text-lg">Semi Bold (600)</p>
              <p className="font-semibold text-sm text-muted-foreground">
                Perfect for subheadings and important text
              </p>
            </div>

            <div className="p-4 bg-card rounded-lg border">
              <p className="font-bold text-lg">Bold (700)</p>
              <p className="font-bold text-sm text-muted-foreground">
                Excellent for headings and call-to-action
              </p>
            </div>

            <div className="p-4 bg-card rounded-lg border">
              <p className="font-extrabold text-lg">Extra Bold (800)</p>
              <p className="font-extrabold text-sm text-muted-foreground">
                Impact text for maximum attention
              </p>
            </div>
          </div>
        </div>

        {/* Text Samples */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2">
            Text Samples
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-display text-3xl font-bold text-primary mb-2">
                АДВОКАТ АБРАМОВ ПЕТРО
              </h3>
              <p className="font-medium text-muted-foreground">
                Professional Legal Services
              </p>
            </div>

            <div className="p-6 bg-primary/5 rounded-lg">
              <h4 className="font-semibold text-lg text-primary mb-3">
                Professional Excellence
              </h4>
              <p className="font-normal leading-relaxed text-foreground">
                Our law firm provides comprehensive legal services with a focus
                on delivering exceptional results for our clients. We combine
                traditional values with modern approaches to legal practice.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-card rounded-lg border">
                <div className="font-extrabold text-2xl text-primary">500+</div>
                <div className="font-medium text-sm text-muted-foreground">
                  Cases Won
                </div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border">
                <div className="font-extrabold text-2xl text-primary">15+</div>
                <div className="font-medium text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cyrillic Text Sample */}
      <div className="mt-12 p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border">
        <h3 className="font-bold text-xl text-primary mb-4">
          Cyrillic Text Support
        </h3>
        <div className="space-y-2">
          <p className="font-light text-lg">
            Юридические услуги высочайшего качества
          </p>
          <p className="font-normal text-base">
            Комплексная правовая поддержка для частных лиц и предприятий
          </p>
          <p className="font-semibold text-sm uppercase tracking-wider text-primary">
            Профессиональная консультация
          </p>
        </div>
      </div>

      {/* Browser Compatibility Note */}
      <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
        <h4 className="font-semibold text-amber-800 mb-2">
          📝 Font Loading Status
        </h4>
        <p className="text-sm text-amber-700">
          If you see this text in Calmius Sans High, the font is loaded
          correctly. Otherwise, it will display in the fallback fonts (Inter or
          system fonts). To enable Calmius Sans High, please follow the
          instructions in
          <code className="bg-amber-100 px-1 rounded mx-1">FONT_SETUP.md</code>
        </p>
      </div>
    </div>
  );
};

export default FontDemo;
