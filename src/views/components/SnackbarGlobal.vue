<template>
  <div>
    <v-snackbar v-model="snackbarState.show" absolute top :color="snackbarState.text" right text>
      {{ snackbarState.text }}
    </v-snackbar>
  </div>
</template>
<script>
import {computed } from '@vue/composition-api'

export default {
  name: 'SnackbarGlobal',
  setup(props,{root}) {

    var snackbarState = computed(() => {
      return root.$store.state.snackbar
    })

    return {
      snackbarState,
    }
  },
  onMounted() {
    console.log("Snackbar "+snackbarState.show);
  }
}
</script>
