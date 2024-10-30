<script setup lang="ts">
import { useConnect, useChain } from "@quirks/vue";
 
const { connect, disconnect, connected } = useConnect();
const { address } = useChain('osmosis');
</script>
 
<template>
  <button @click="disconnect" v-if="connected">Disconnect: {{ address }}</button>
  <button @click="connect('keplrextension')" v-else>Connect</button>
</template>