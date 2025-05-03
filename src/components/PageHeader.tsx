
import { ReactNode } from 'react';

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  backgroundImage?: string;
}

const PageHeader = ({ title, subtitle, children, backgroundImage }: PageHeaderProps) => {
  return (
    <section 
      className={`relative pt-32 pb-20 bg-gradient-to-br from-agency-blue/5 to-agency-blue/10 ${backgroundImage ? 'bg-cover bg-center' : ''}`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      {backgroundImage && (
        <div className="absolute inset-0 bg-agency-blue/40"></div>
      )}
      <div className="container-custom relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-agency-blue">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
