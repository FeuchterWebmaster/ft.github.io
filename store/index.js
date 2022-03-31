import config from '../assets/config'

export const state = () => ({
    siteName: config.siteName,
    limit: config.videos.limit, // number of videos shown per page
    apiUrl: 'http://localhost:3001',
    includeTags: config.tags.includeTags,
    excludeTags: config.tags.excludeTags
})

export const mutations = () => ({
    set_limit(state, value) {
        state.limit = value
    }
})