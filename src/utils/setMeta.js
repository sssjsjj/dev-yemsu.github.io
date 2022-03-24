import { useMeta } from 'vue-meta'

export default (params = {}) => {
  console.log(params)
  useMeta({
    title: params.title,
    meta: [
      {vmid: 'description', name: 'description', content: params.description},
      {vmid: 'keywords', name: 'keywords', content: params.keywords},
      {vmid: 'og:type', name: 'og:type', content: 'article'},
      {vmid: 'og:title', name: 'og:title', content: params.title},
      {vmid: 'og:description', name: 'og:description', content: params.description},
      {vmid: 'og:url', name: 'og:url', content: process.env.VUE_APP_BASE_URL + params.path},
      {vmid: 'og:image', name: 'og:image', content: `${process.env.VUE_APP_BASE_URL}/images/og_image.jpg`}
    ]
  })
}

 