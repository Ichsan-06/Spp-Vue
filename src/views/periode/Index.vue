<template>
  <v-row>
    <v-snackbar v-model="snackbarState.show" absolute top color="primary" right text>
      {{ snackbarState.text }}
    </v-snackbar>

    <!-- fixed header -->
    <v-col cols="12">
      <v-card>
        <v-card-title>Fixed header</v-card-title>
        <v-card-text>
          Use the <code>fixed-header</code> prop together with the <code>height</code> prop to fix the header to the top
          of the table.
        </v-card-text>

        <DataTables
          :headers="headers"
          :datas="datas"
          :perPage="10"
          title="Periode"
          :isLoading="isLoading"
          @showModal="showModal('add')"
          @delete-item="deleteItem"
          @update-item="getItem"
        ></DataTables>

        <v-dialog v-model="dialog" persistent max-width="600px">
          <v-card>
            <v-card-title>
              <span class="text-h5">User Profile</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-form>
                  <v-text-field
                    v-model="computedNominal"
                    type="number"
                    label="Nominal"
                    outlined
                    dense
                    placeholder="Nominal"
                  ></v-text-field>

                  <v-text-field
                    v-model="periode.status"
                    label="Status"
                    outlined
                    dense
                    placeholder="Status"
                  ></v-text-field>

                  <v-text-field
                    v-model="periode.tahun_ajaran"
                    label="Tahun Ajar"
                    outlined
                    dense
                    placeholder="Tahun Ajar"
                  ></v-text-field>
                </v-form>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" outlined @click="closeDialog">
                Close
              </v-btn>
              <v-btn v-if="tipe == 'Add'" color="primary" @click="savePeriod" :loading="loadingBtn">
                {{ tipe }}
              </v-btn>
              <v-btn v-else color="primary" @click="updatePeriod(periode.id)" :loading="loadingBtn">
                {{ tipe }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Periode from '@/service/Periode'
import { computed, onMounted, ref } from '@vue/composition-api'
import { mdiDotsVertical } from '@mdi/js'
import DataTables from '@/components/DataTables.vue'

export default {
  components: { DataTables },

  setup(props, { root }) {
    const snackbarState = ref({
      show: false,
      text: '',
    })

    const datas = ref([])
    const errors = ref('')
    const dialog = ref(false)
    const isLoading = ref(true)
    const loadingBtn = ref(false)
    const tipe = ref('Add')
    const headers = ref([
      { text: 'Nomor', value: 'id' },
      { text: 'Nominal', value: 'nominal' },
      { text: 'Status', value: 'status' },
      { text: 'tahun Ajaran', value: 'tahun_ajaran' },
      { text: 'Actions', value: 'aksi' },
    ])
    const periode = ref({
      nominal: 0,
      status: '',
      tahun_ajaran: '',
    })

    const listPeriode = async data => {
      errors.value = ''
      isLoading.value = true

      Periode.list().then(({ data }) => {
        datas.value = data.data
        isLoading.value = false
      })
    }

    const showSnackbar = (text, color) => {
      root.$store.dispatch('snackbar/showSnackbar', {
        text,
        color,
      })
    }

    const savePeriod = () => {
      loadingBtn.value = true
      try {
        Periode.add(periode.value).then(() => {
          dialog.value = false
          listPeriode()
          resetForm()
          loadingBtn.value = true
          showSnackbar('Periode berhasil ditambahkan', 'success')
        })
      } catch (err) {
        console.log(err)
        loadingBtn.value = false
      }
      loadingBtn.value = false
    }

    const updatePeriod = id => {
      try {
        Periode.update(periode.value, id).then(() => {
          loadingBtn.value = true
          dialog.value = false
          listPeriode()
          resetForm()
          showSnackbar('Periode berhasil diubah', 'success')
        })
      } catch (err) {
        loadingBtn.value = false
        console.log(err)
      }
    }

    const deleteItem = async uuid => {
      try {
        Periode.destroy(uuid).then(() => {
          listPeriode()
          showSnackbar('Periode berhasil dihapus', 'success')
        })
      } catch (error) {
        console.log(error)
      }
    }

    const getItem = async uuid => {
      showModal()
      tipe.value = 'Update'
      try {
        Periode.get(uuid).then(({ data }) => {
          periode.value = data.data
          periode.value.id = data.data.id
        })
      } catch (error) {
        console.log(error)
      }
    }

    const showModal = () => {
      dialog.value = true
      tipe.value = 'Add'
    }

    const closeDialog = () => {
      dialog.value = false
      resetForm()
    }

    const resetForm = () => {
      periode.value = ''
    }

    const components = {
      mdiDotsVertical,
    }

    const computedNominal = computed({
      // getter
      get() {
        return periode.value.nominal
      },
      // setter
      set(val) {
        periode.value.nominal = Number(val)
      },
    })

    onMounted(() => {
      listPeriode()
    })

    return {
      dialog,
      datas,
      errors,
      listPeriode,
      components,
      headers,
      showModal,
      savePeriod,
      periode,
      isLoading,
      deleteItem,
      resetForm,
      getItem,
      closeDialog,
      tipe,
      updatePeriod,
      loadingBtn,
      // showSnackbar
      snackbarState,
      computedNominal,
    }
  },
}
</script>
