import React from 'react';
import { cn } from '@/lib/utils';
import Container from '../ui/Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
}

const Section = ({ children, className, title, description }: SectionProps) => {
  return (
    <section className={cn("py-16", className)}>
      <Container>
        {(title || description) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
            )}
            {description && (
              <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
};

export default Section;