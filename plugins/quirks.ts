import {
    chain as osmosis,
    assets as osmosisAssetList,
  } from 'chain-registry/mainnet/osmosis';
import type { Config } from "@quirks/store";
import { keplrExtension, leapExtension } from "@quirks/wallets";
import { quirksPlugin } from '@quirks/vue';
import { generateConfig, initialStateWithCookie } from '@quirks/ssr'
   
const config: Config = generateConfig({
    wallets: [keplrExtension, leapExtension],
    chains: [osmosis],
    assetsLists: [osmosisAssetList],
});

export default defineNuxtPlugin((nuxtApp) => {
    const cookie = useCookie('quirks');

    const configWithCookie = initialStateWithCookie(config, JSON.stringify(cookie.value))

    nuxtApp.vueApp.use(quirksPlugin, configWithCookie);
});