import {
  chain as osmosis,
  assets as osmosisAssetList,
} from "chain-registry/mainnet/osmosis";
import { keplrExtension, leapExtension } from "@quirks/wallets";
import { quirksPlugin } from "@quirks/vue";
import { generateConfig } from "@quirks/ssr";

export default defineNuxtPlugin((nuxtApp) => {
  const cookie = useCookie("quirks");

  const store = generateConfig(
    {
      wallets: [keplrExtension, leapExtension],
      chains: [osmosis],
      assetsLists: [osmosisAssetList],
    },
    undefined,
    JSON.stringify(cookie.value)
  );

  nuxtApp.vueApp.use(quirksPlugin, store);
});
