import React from 'react';
import type { Service, Testimonial, NavLink, ProcessStep } from './types';

// FIX: Replaced JSX with React.createElement to be valid in a .ts file.
const sharedIcons = {
    document: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-10 w-10", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5 },
      React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" })
    ),
    shield: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-10 w-10", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5 },
      React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a11.955 11.955 0 019-2.607 11.955 11.955 0 019 2.607 12.02 12.02 0 00-2.382-9.988z" })
    ),
    insurance: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-10 w-10", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5 },
      React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6.375a.375.375 0 01.375.375v1.5a.375.375 0 01-.375.375H9a.375.375 0 01-.375-.375v-1.5A.375.375 0 019 6.75zM9 12.75h6.375a.375.375 0 01.375.375v1.5a.375.375 0 01-.375.375H9a.375.375 0 01-.375-.375v-1.5A.375.375 0 019 12.75z" })
    ),
};

const en = {
  navLinks: [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#process', label: 'Process' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ] as NavLink[],
  hero: {
    preTitle: "Your Legacy, Our Priority",
    subtitle: {
        regular: "Modern estate planning for ",
        gradient: "today's generations.",
    },
    description: "We make it simple to protect your wealth and secure your family's future with a comprehensive, personalized estate plan.",
    ctaButton: "Book a Free Consultation",
  },
  about: {
      title: "Your Trusted Partner in Legacy Planning",
      p1: "As a dedicated estate planner based in Malaysia, my mission is to provide you with peace of mind. I understand the importance of protecting your hard-earned assets and ensuring your loved ones are cared for according to your wishes.",
      p2: "With years of experience in local laws and financial instruments, I offer personalized, confidential, and comprehensive planning services. I am committed to building lasting relationships with my clients, guiding them through every step of creating a secure and lasting legacy.",
      quote: `"Planning is bringing the future into the present so that you can do something about it now."`,
  },
  services: {
    title: "Our Expertise",
    subtitle: "Comprehensive solutions to protect your assets and secure your family's future.",
    items: [
      {
        icon: sharedIcons.document,
        title: 'Will Draft',
        description: [
          'Ensure your assets are distributed according to your wishes.',
          'Appoint guardians for your minor children.',
          'Minimize potential family disputes.',
        ],
      },
      {
        icon: sharedIcons.shield,
        title: 'Trust Setup',
        description: [
          'Protect assets from creditors and legal challenges.',
          'Provide for beneficiaries with special needs.',
          'Manage assets for minors until they reach maturity.',
        ],
      },
      {
        icon: sharedIcons.insurance,
        title: 'Life Insurance Review & Insurance Trust Setup',
        description: [
          'Ensure your coverage is adequate for your family\'s needs.',
          'Create a trust to manage insurance payouts efficiently.',
          'Minimize estate taxes on your life insurance proceeds.',
        ],
      },
    ] as Service[],
  },
  process: {
      title: "Our Simple Path to Your Peace of Mind",
      steps: [
      {
          title: 'Discovery & Consultation',
          content: 'We begin with a personal consultation to understand your unique family situation, financial goals, and legacy wishes.',
          image: 'https://images.unsplash.com/photo-1573496774435-64ac2b53b510?q=80&w=1974&auto=format&fit=crop',
      },
      {
          title: 'Tailored Strategy Design',
          content: 'We craft a bespoke estate plan, presenting you with clear, strategic options for wills, trusts, and insurance to best protect your assets.',
          image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop',
      },
      {
          title: 'Seamless Implementation',
          content: 'We handle the drafting of all legal documents and guide you through the finalization process, ensuring your legacy is secured with precision and care.',
          image: 'https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?q=80&w=2070&auto=format&fit=crop',
      },
    ] as ProcessStep[],
  },
  testimonials: {
      title: "What Our Clients Say",
      subtitle: "Your peace of mind is our greatest achievement.",
      items: [
      {
        quote: 'The entire process was handled with such professionalism and care. I feel a great sense of relief knowing my family\'s future is secure. Highly recommended for anyone in Malaysia.',
        name: 'Ahmad bin Abdullah',
        role: 'Business Owner, Kuala Lumpur',
      },
      {
        quote: 'Incredibly knowledgeable and patient. They took the time to explain complex concepts in a simple way, helping us make the best decisions for our estate.',
        name: 'Susan Tan',
        role: 'Retired Teacher, Penang',
      },
      {
        quote: 'Setting up a trust seemed daunting, but their expert guidance made it a smooth and straightforward experience. A truly invaluable service.',
        name: 'Rajesh Kumar',
        role: 'IT Professional, Johor Bahru',
      },
    ] as Testimonial[],
  },
  contactForm: {
      title: "Request a Free Consultation",
      subtitle: "Take the first step towards securing your legacy. Fill out the form below.",
      labels: {
          name: "Full Name",
          email: "Email Address",
          phone: "Phone Number (Optional)",
          service: "Service of Interest",
          message: "Message",
      },
      placeholders: {
          selectService: "Select a service",
          message: "Tell us a bit about your needs...",
          generalInquiry: "General Inquiry",
      },
      button: "Submit Request",
      success: {
          title: "Thank You!",
          message: "Your request for a consultation has been received. I will be in touch with you shortly."
      }
  },
  footer: {
      tagline: "Securing legacies across Malaysia with professional and personalized estate planning.",
      navigation: "Navigation",
      contact: "Contact",
      disclaimer: {
          title: "Disclaimer",
          text: "The information on this site is for informational purposes only and does not constitute legal or financial advice. Please consult a qualified professional."
      },
      copyright: "All Rights Reserved."
  },
  featuredOn: "Featured On",
  imageGenerator: {
    title: "AI Headshot Generator",
    promptLabel: "Describe your desired headshot",
    promptPlaceholder: "e.g., Wearing a dark business suit, neutral background...",
    error: "Image generation failed. Please try again.",
    buttonLoading: "Generating...",
    button: "Generate New Headshot",
    cancel: "Cancel",
    setAsImage: "Set as Profile Image",
  },
};

const cn: typeof en = {
  navLinks: [
    { href: '#about', label: '关于我们' },
    { href: '#services', label: '服务' },
    { href: '#process', label: '流程' },
    { href: '#testimonials', label: '客户评价' },
    { href: '#contact', label: '联系我们' },
  ],
  hero: {
    preTitle: "您的传承，我们的首任",
    subtitle: {
      regular: "为当代人量身定制的",
      gradient: "现代化遗产规划。",
    },
    description: "我们通过全面、个性化的遗产规划，让您轻松保护财富，保障家人的未来。",
    ctaButton: "预约免费咨询",
  },
  about: {
      title: "您值得信赖的传承规划伙伴",
      p1: "作为一名来自马来西亚的专业遗产规划师，我的使命是让您高枕无忧。我深知保护您辛苦赚来的资产以及确保您的挚爱按照您的意愿得到照顾的重要性。",
      p2: "凭借多年在本地法律和金融工具方面的经验，我提供个性化、保密和全面的规划服务。我致力于与客户建立持久的关系，引导他们完成创建安全和永恒遗产的每一步。",
      quote: `"计划就是将未来带到现在，以便您现在就能对此采取行动。"`,
  },
  services: {
    title: "我们的专业领域",
    subtitle: "提供全面的解决方案，保护您的资产，保障您家人的未来。",
    items: [
      {
        icon: sharedIcons.document,
        title: '遗嘱起草',
        description: [
            '确保您的资产按照您的意愿进行分配。',
            '为您的未成年子女指定监护人。',
            '最大限度地减少潜在的家庭纠纷。',
        ],
      },
      {
        icon: sharedIcons.shield,
        title: '信托设立',
        description: [
            '保护资产免受债权人和法律挑战的影响。',
            '为有特殊需求的受益人提供保障。',
            '为未成年人管理资产，直至其成年。',
        ],
      },
      {
        icon: sharedIcons.insurance,
        title: '人寿保险审查与保险信托设立',
        description: [
            '确保您的保险覆盖范围足以满足您家庭的需求。',
            '设立信托以高效管理保险赔付。',
            '最大限度地减少您人寿保险收益的遗产税。',
        ],
      },
    ],
  },
  process: {
      title: "简单三步，安心传承",
      steps: [
        {
            title: '探索与咨询',
            content: '我们通过个性化咨询开始，深入了解您独特的家庭状况、财务目标和传承愿望。',
            image: 'https://images.unsplash.com/photo-1573496774435-64ac2b53b510?q=80&w=1974&auto=format&fit=crop',
        },
        {
            title: '量身定制策略',
            content: '我们为您精心打造专属的遗产计划，提供关于遗嘱、信托和保险的清晰战略选择，以最好地保护您的资产。',
            image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop',
        },
        {
            title: '无缝执行',
            content: '我们负责起草所有法律文件，并指导您完成最终流程，确保您的遗产得到精确和周全的保障。',
            image: 'https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?q=80&w=2070&auto=format&fit=crop',
        },
    ] as ProcessStep[],
  },
  testimonials: {
      title: "客户怎么说",
      subtitle: "让您安心是我们最大的成就。",
      items: [
      {
        quote: '整个过程都非常专业和细心。得知家人的未来得到保障，我感到非常安心。强烈推荐给在马来西亚的任何人。',
        name: 'Ahmad bin Abdullah',
        role: '企业主，吉隆坡',
      },
      {
        quote: '知识渊博，非常有耐心。他们花时间用简单的方式解释复杂的概念，帮助我们为我们的遗产做出最佳决策。',
        name: '陈女士 (Susan Tan)',
        role: '退休教师，槟城',
      },
      {
        quote: '设立信托似乎令人望而生畏，但他们的专业指导使其成为一个顺利而直接的体验。一项真正宝贵的服务。',
        name: 'Rajesh Kumar',
        role: 'IT专业人士，新山',
      },
    ],
  },
  contactForm: {
      title: "申请免费咨询",
      subtitle: "迈出保障您遗产的第一步。请填写下面的表格。",
      labels: {
          name: "全名",
          email: "电子邮件地址",
          phone: "电话号码（可选）",
          service: "感兴趣的服务",
          message: "信息",
      },
      placeholders: {
          selectService: "选择一项服务",
          message: "请简单描述您的需求...",
          generalInquiry: "一般查询",
      },
      button: "提交申请",
      success: {
          title: "谢谢！",
          message: "我们已收到您的咨询请求。我会尽快与您联系。"
      }
  },
  footer: {
      tagline: "通过专业和个性化的遗产规划，为全马客户保障传承。",
      navigation: "导航",
      contact: "联系方式",
      disclaimer: {
          title: "免责声明",
          text: "本网站上的信息仅供参考，不构成法律或财务建议。请咨询合格的专业人士。"
      },
      copyright: "版权所有。"
  },
  featuredOn: "媒体报道",
  imageGenerator: {
    title: "AI 头像生成器",
    promptLabel: "描述您想要的头像",
    promptPlaceholder: "例如：穿着深色西装，背景中性...",
    error: "图像生成失败，请重试。",
    buttonLoading: "生成中...",
    button: "生成新头像",
    cancel: "取消",
    setAsImage: "设为个人资料图片",
  },
};

export const content = { en, cn };