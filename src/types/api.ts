export type TechIcon = {
  title: string
  icon: {
    data: {
      attributes: {
        url: string
      }
    }
  }
}

export type Image = {
  alternativeText: string
  url: string
}

export type LogoProps = {
  data: {
    attributes: Image
  }
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: {
    data: {
      attributes: Image
    }
  }
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: {
    data: {
      attributes: Image
    }
  }
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type SectionConceptsProps = {
  title: string
  concepts: Array<{
    title: string
  }>
}

export type Modules = {
  title: string
  subtitle: string
  description: string
}

export type SectionModulesProps = {
  title: string
  modules: Modules[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type SocialLink = {
  title: string
  url: string
}

export type Author = {
  data: [
    {
      attributes: {
        photo: {
          data: {
            attributes: Image
          }
        }
        name: string
        role: string
        socialLinks: SocialLink[]
        description: string
      }
    }
  ]
}

export type SectionAboutUsProps = {
  title: string
  authors: Author
}

export type Review = {
  name: string
  text: string
  photo: {
    data: {
      attributes: {
        url: string
      }
    }
  }
}

export type SectionReviewsProps = {
  title: string
  reviews: Review[]
}

export type Question = {
  question: string
  answer: string
}

export type SectionFaqProps = {
  title: string
  questions: Question[]
}

export type LandingPageProps = {
  landingPage: {
    data: {
      attributes: {
        logo: LogoProps
        header: HeaderProps
        sectionAboutProject: SectionAboutProjectProps
        sectionTech: SectionTechProps
        sectionConcepts: SectionConceptsProps
        sectionModules: SectionModulesProps
        sectionAgenda: SectionAgendaProps
        pricingBox: PricingBoxProps
        sectionAboutUs: SectionAboutUsProps
        sectionReviews: SectionReviewsProps
        sectionFaq: SectionFaqProps
      }
    }
  }
}
