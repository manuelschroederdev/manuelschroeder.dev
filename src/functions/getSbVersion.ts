export default function () {
  return import.meta.env.SITE_NAME === 'manuelschroeder' ? 'published' : 'draft'
}
