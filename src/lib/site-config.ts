import { SiteConfig } from './types'

export const siteConfig: SiteConfig = {
  name: 'GEO Optimization Institute',
  description: '专业的生成式引擎优化(GEO)服务平台 - 让AI像人类一样理解您的内容',
  url: 'https://yinhang.org',
  ogImage: '/og.jpg',
  links: {
    email: 'contact@yinhang.org',
    github: 'https://github.com/geo-institute',
    twitter: 'https://twitter.com/geo_institute',
  },
}

export const navigationConfig = {
  mainNav: [
    {
      title: '关于GEO',
      href: '/about',
    },
    {
      title: '方法框架',
      href: '/methods',
    },
    {
      title: '案例研究',
      href: '/cases',
    },
    {
      title: '知识中心',
      children: [
        {
          title: '操作教程',
          href: '/knowledge/guides',
        },
        {
          title: '深度报告',
          href: '/knowledge/research',
        },
        {
          title: '提示词实验室',
          href: '/knowledge/prompt-lab',
        },
        {
          title: '工具索引',
          href: '/knowledge/tools',
        },
      ],
    },
    {
      title: '资源库',
      children: [
        {
          title: '术语库',
          href: '/resources/glossary',
        },
        {
          title: '结构模板',
          href: '/resources/templates',
        },
        {
          title: '优化清单',
          href: '/resources/checklist',
        },
      ],
    },
    {
      title: '联系我们',
      href: '/contact',
    },
  ],
  sidebarNav: [
    {
      title: '开始使用',
      items: [
        {
          title: 'GEO简介',
          href: '/about',
          icon: 'BookOpen',
        },
        {
          title: 'SEO vs GEO',
          href: '/about/comparison',
          icon: 'GitCompare',
        },
      ],
    },
    {
      title: '核心方法',
      items: [
        {
          title: '五步法框架',
          href: '/methods',
          icon: 'Layers',
        },
        {
          title: '实体映射',
          href: '/methods/entity-mapping',
          icon: 'MapPin',
        },
        {
          title: '提示词分层',
          href: '/methods/prompt-layering',
          icon: 'MessageSquare',
        },
        {
          title: '结构化架构',
          href: '/methods/schema-structuring',
          icon: 'Box',
        },
        {
          title: '交叉链接',
          href: '/methods/cross-linking',
          icon: 'Link',
        },
        {
          title: '人机评估',
          href: '/methods/human-ai-evaluation',
          icon: 'Users',
        },
      ],
    },
    {
      title: '实践案例',
      items: [
        {
          title: '所有案例',
          href: '/cases',
          icon: 'FolderOpen',
        },
        {
          title: 'B2B企业',
          href: '/cases/b2b',
          icon: 'Building',
        },
        {
          title: '内容创作者',
          href: '/cases/creators',
          icon: 'PenTool',
        },
        {
          title: '电商平台',
          href: '/cases/ecommerce',
          icon: 'ShoppingCart',
        },
      ],
    },
  ],
}

export const geoKeywords = [
  '生成式引擎优化',
  'GEO',
  'AI搜索优化',
  'ChatGPT优化',
  'Gemini优化',
  'AI内容索引',
  '语义搜索',
  '实体图谱',
  'AI信任信号',
  '零点击搜索',
  'AI时代SEO',
  'LLM优化',
  'AI内容营销',
  '对话式搜索',
  'AI生成内容',
]

export const geoCategories = {
  methods: ['方法论', '框架', '流程', '策略'],
  cases: ['B2B', 'B2C', '内容创作者', '电商', '教育', '金融'],
  knowledge: ['教程', '研究', '工具', '模板', '指南'],
  resources: ['术语', '清单', '模板', '标准'],
}