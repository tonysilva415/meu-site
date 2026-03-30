import { HeroSection } from '../sections/HeroSection'
import { HeroResultsSection } from '../sections/HeroResultsSection'
import { SystemOverviewSection } from '../sections/SystemOverviewSection'
import { GovernanceSection } from '../sections/GovernanceSection'
import { ServicesSection } from '../sections/ServicesSection'
import { VerticalSolutionsSection } from '../sections/VerticalSolutionsSection'
import { SoapSection } from '../sections/SoapSection'
import { HistorySection } from '../sections/HistorySection'
import { VideoSection } from '../sections/VideoSection'
import { DataAccessSection } from '../sections/DataAccessSection'
import { CustomizableEhrSection } from '../sections/CustomizableEhrSection'
import { SuccessCasesSection } from '../sections/SuccessCasesSection'
import { ContactSection } from '../sections/ContactSection'
import { FinalCtaSection } from '../sections/FinalCtaSection'

export function LandingPage() {
  return (
    <>
      <HeroSection />
      <HeroResultsSection />
      <SystemOverviewSection />
      <GovernanceSection />
      <ServicesSection />
      <VerticalSolutionsSection />
      <SoapSection />
      <HistorySection />
      <VideoSection />
      <DataAccessSection />
      <CustomizableEhrSection />
      <SuccessCasesSection />
      <ContactSection />
      <FinalCtaSection />
    </>
  )
}

