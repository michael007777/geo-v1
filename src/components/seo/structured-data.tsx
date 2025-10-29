import { siteConfig } from '@/lib/site-config'

interface WebSiteJsonLd {
  name: string
  description: string
  url: string
  logo?: string
  sameAs?: string[]
}

interface OrganizationJsonLd {
  name: string
  description: string
  url: string
  logo: string
  contactPoint: {
    '@type': string
    telephone: string
    contactType: string
    availableLanguage: string[]
  }
  sameAs: string[]
  areaServed: string
  knowsAbout: string[]
  foundingDate: string
}

interface ArticleJsonLd {
  headline: string
  description: string
  image: string[]
  datePublished: string
  dateModified: string
  author: {
    '@type': string
    name: string
    url: string
  }
  publisher: {
    '@type': string
    name: string
    logo: {
      '@type': string
      url: string
    }
  }
  mainEntityOfPage: {
    '@type': string
    '@id': string
  }
}

interface BreadcrumbJsonLd {
  itemListElement: {
    '@type': string
    position: number
    name: string
    item: string
  }[]
}

interface FAQJsonLd {
  mainEntity: {
    '@type': string
    acceptedAnswer: {
      '@type': string
      text: string
    }
    name: string
  }[]
}

export function WebSiteJsonLd({ name, description, url, logo, sameAs }: WebSiteJsonLd) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    description,
    url,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
    ...(logo && { logo }),
    ...(sameAs && { sameAs }),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

export function OrganizationJsonLd({
  name,
  description,
  url,
  logo,
  contactPoint,
  sameAs,
  areaServed,
  knowsAbout,
  foundingDate,
}: OrganizationJsonLd) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    description,
    url,
    logo,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: contactPoint.telephone,
      contactType: contactPoint.contactType,
      availableLanguage: contactPoint.availableLanguage,
    },
    sameAs,
    areaServed,
    knowsAbout,
    foundingDate,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CN',
      addressLocality: '北京市',
      addressRegion: '北京市',
      streetAddress: '朝阳区CBD核心区国贸大厦A座2801室',
      postalCode: '100020',
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

export function ArticleJsonLd({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author,
  publisher,
  mainEntityOfPage,
}: ArticleJsonLd) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image,
    datePublished,
    dateModified,
    author,
    publisher,
    mainEntityOfPage,
    wordCount: 1000, // 可以动态计算
    inLanguage: 'zh-CN',
    isAccessibleForFree: true,
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

export function BreadcrumbJsonLd({ itemListElement }: BreadcrumbJsonLd) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: itemListElement.map((item, index) => ({
      ...item,
      '@type': 'ListItem',
      position: index + 1,
    })),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

export function FAQJsonLd({ mainEntity }: FAQJsonLd) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: mainEntity.map(faq => ({
      '@type': 'Question',
      name: faq.name,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.acceptedAnswer.text,
      },
    })),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

// 默认的组织结构化数据
export function DefaultOrganizationJsonLd() {
  return (
    <OrganizationJsonLd
      name={siteConfig.name}
      description={siteConfig.description}
      url={siteConfig.url}
      logo={`${siteConfig.url}/logo.png`}
      contactPoint={{
        '@type': 'ContactPoint',
        telephone: '+86-400-123-4567',
        contactType: 'customer service',
        availableLanguage: ['zh-CN', 'en'],
      }}
      sameAs={[
        siteConfig.links.github,
        siteConfig.links.twitter,
      ]}
      areaServed="全球"
      knowsAbout={[
        '生成式引擎优化',
        'GEO',
        'AI搜索优化',
        'ChatGPT优化',
        'Gemini优化',
        '语义搜索',
        '实体图谱',
        'AI信任信号',
        '零点击搜索',
        'AI时代SEO',
        'LLM优化',
        'AI内容营销',
        '对话式搜索',
        'AI生成内容',
      ]}
      foundingDate="2025"
    />
  )
}