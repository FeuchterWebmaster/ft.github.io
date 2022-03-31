export const state = () => ({
    siteName: 'Feuchte Tube',
    limit: 80, // number of videos shown per page
    apiUrl: 'http://localhost:3001',
    includeTags: ['german'],
    excludeTags: ['gay']
})

export const mutations = () => ({
    set_limit(state, value) {
        state.limit = value
    }
})