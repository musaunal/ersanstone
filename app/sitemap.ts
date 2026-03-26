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
    {
      url: 'https://ersanstone.com/blog/mutfak-tezgahi-secimi',
      lastModified: new Date('2025-01-10'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: 'https://ersanstone.com/blog/granit-mermer-bakim-rehberi',
      lastModified: new Date('2025-02-05'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: 'https://ersanstone.com/blog/mermeri-mahveden-hatalar',
      lastModified: new Date('2025-03-10'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: 'https://ersanstone.com/blog/dogal-tas-mi-seramik-mi',
      lastModified: new Date('2025-03-18'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ]
}
