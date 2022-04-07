export default {
  name: 'TestMixin',
  methods: {
    test () {
      this.$axios.get('/test/test').then((res) => {
        console.log(res.data)
        this.$store.dispatch('test/setData', res.data)
      })
    },
    getJson () {
      this.$axios.get('/rest/getJSON').then((res) => {
        console.log(res)
      })
    }
  }
}
