import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ersanstone.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://ersanstone.com/blog/isparta-mezar-tasi-rehberi',
      lastModified: new Date('2024-11-01'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ]
}
