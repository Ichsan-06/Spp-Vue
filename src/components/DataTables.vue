<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="datas"
      :items-per-page="perPage"
      class="elevation-1"
      :loading="isLoading"
      loading-text="Memuat Data "
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>{{ title }}</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-btn class="primary" @click="$emit('showModal')">
            Tambah Periode
          </v-btn>
        </v-toolbar>
      </template>

      <template v-slot:item.aksi="{ item }">
        <v-btn class="primary" small @click="$emit('update-item',item.id)">
          Update
        </v-btn>
        <v-btn class="ml-3" color="secondary" small @click="$emit('delete-item',item.id)">
          Delete
        </v-btn> </template
      >y
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: 'DataTables',
  props: {
    headers: {
      type: Array,
      default: [],
    },
    datas: {
      type: Array,
      default: [],
    },
    perPage: {
      type: Number,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    isLoading: {
      type: Boolean,
    },
  },
}
</script>
