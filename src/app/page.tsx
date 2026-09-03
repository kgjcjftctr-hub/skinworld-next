import { HeroSection } from '@/components/sections/hero';
import { CategoriesSection } from '@/components/sections/categories';
import { FeaturedProducts } from '@/components/sections/featured-products';
import { BrandsSection } from '@/components/sections/brands';
import { ExpertiseSection } from '@/components/sections/expertise';
import { EditorialPreview } from '@/components/sections/editorial-preview';
import { NewsletterSection } from '@/components/sections/newsletter';
import { CTASection } from '@/components/sections/cta';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts />
      <BrandsSection />
      <ExpertiseSection />
      <EditorialPreview />
      <NewsletterSection />
      <CTASection />
    </div>
  );
}
