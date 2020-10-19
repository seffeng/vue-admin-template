<template>
  <div class="dashboard-container">
    <div class="dashboard-text">{{ showDate() }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { parseTime } from '@/utils'
import * as constants from '@/utils/constants'

export default {
  name: 'Dashboard',
  data() {
    return {
      now: new Date()
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  methods: {
    showDate() {
      return parseTime(this.now, constants.dateFormat.ymdahi)
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
