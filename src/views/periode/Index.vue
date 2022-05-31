<template>
  <v-row>
    <!-- fixed header -->
    <v-col cols="12">
      <v-card>
        <v-card-title>Fixed header</v-card-title>
        <v-card-text>
          Use the <code>fixed-header</code> prop together with the <code>height</code> prop to fix the header to the top of the table.
        </v-card-text>

        <v-simple-table
          height="450"
          fixed-header
        >
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-uppercase">
                  Tahun Ajaran
                </th>
                <th class="text-center text-uppercase">
                  Biaya
                </th>
                <th class="text-center text-uppercase">
                  Status
                </th>
                <th class="text-center text-uppercase">
                  Carbs (g)
                </th>
                <th class="text-center text-uppercase">
                  Protein (g)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in desserts"
                :key="item.dessert"
              >
                <td>{{ item.dessert }}</td>
                <td class="text-center">
                  {{ item.calories }}
                </td>
                <td class="text-center">
                  {{ item.fat }}
                </td>
                <td class="text-center">
                  {{ item.carbs }}
                </td>
                <td class="text-center">
                  {{ item.protein }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

// import Auth from '@/service/Auth'

export default {
  // data() {
  //   return {
  //     desserts: [
  //       {
  //         dessert: 'Frozen Yogurt',
  //         calories: 159,
  //         fat: 6,
  //         carbs: 24,
  //         protein: 4,
  //       },
  //       {
  //         dessert: 'Ice cream sandwich',
  //         calories: 237,
  //         fat: 6,
  //         carbs: 24,
  //         protein: 4,
  //       },
  //       {
  //         dessert: 'Eclair',
  //         calories: 262,
  //         fat: 6,
  //         carbs: 24,
  //         protein: 4,
  //       },
  //       {
  //         dessert: 'Cupcake',
  //         calories: 305,
  //         fat: 6,
  //         carbs: 24,
  //         protein: 4,
  //       },
  //       {
  //         dessert: 'Gingerbread',
  //         calories: 356,
  //         fat: 6,
  //         carbs: 24,
  //         protein: 4,
  //       },
  //     ],
  //   }
  // },
  // mounted() {

  // },
  // methods: {
  //   async listPeriode(){
  //     Auth.get()
  //   }
  // },
}
</script>
