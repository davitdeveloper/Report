<template>
  <v-container fluid class="pa-0">
    <v-row align="center">
      <v-col cols="12" sm="6">
        <div class="text-center">
          <div class="my-2">
            <v-btn x-large color="success" dark
              @click="$router.push({ path:'/reports/create', query: {report:'sales'} })">
              Create Sales Report
            </v-btn>
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="6">
        <div class="text-center">
          <div class="my-2">
            <v-btn x-large color="success" dark
              @click="$router.push({ path:'/reports/create', query: {report:'rental'} })">
              Create Rental Report
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: "report-types"
  }
</script>