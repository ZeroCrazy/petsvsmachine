<template>
  <div>
    <NavBar />
    <div class="main-container">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import NavBar from "./modules/shared/components/NavBar.vue";

import useAuth from "@/modules/auth/composables/useAuth";
import { onMounted } from "vue";
import { useRouter } from "vue-router";

// This function detects most providers injected at window.ethereum
import detectEthereumProvider from "@metamask/detect-provider";

export default {
  name: "App",
  components: { NavBar },
  setup() {
    const metamask = async () => {
      const ethereum = await detectEthereumProvider();
      if (ethereum) {
        // From now on, this should always be true:
        // provider === window.ethereum
        startApp(ethereum); // initialize your app
      } else {
        console.log("Please install MetaMask!");
      }

      function startApp(ethereum) {
        // If the provider returned by detectEthereumProvider is not the same as
        // window.ethereum, something is overwriting it, perhaps another wallet.
        if (ethereum !== window.ethereum) {
          console.error("Do you have multiple wallets installed?");
        }
        // Access the decentralized web!
      }

      /**********************************************************/
      /* Handle chain (network) and chainChanged (per EIP-1193) */
      /**********************************************************/

      const chainId = await ethereum.request({ method: "eth_chainId" });
      handleChainChanged(chainId);

      ethereum.on("chainChanged", handleChainChanged);

      function handleChainChanged(_chainId) {
        // We recommend reloading the page, unless you must do otherwise
        console.log(_chainId);
        // window.location.reload();
      }

      /***********************************************************/
      /* Handle user accounts and accountsChanged (per EIP-1193) */
      /***********************************************************/

      let currentAccount = "0x5fcc3620ded3c6fa89e6e0e2b203e3c8262e40a7";
      ethereum
        .request({ method: "eth_accounts" })
        .then(handleAccountsChanged)
        .catch((err) => {
          // Some unexpected error.
          // For backwards compatibility reasons, if no accounts are available,
          // eth_accounts will return an empty array.
          console.error(err);
        });

      // Note that this event is emitted on page load.
      // If the array of accounts is non-empty, you're already
      // connected.
      ethereum.on("accountsChanged", handleAccountsChanged);
      // For now, 'eth_accounts' will continue to always return an array
      function handleAccountsChanged(accounts) {
        console.log(accounts);
        if (accounts.length === 0) {
          // MetaMask is locked or the user has not connected any accounts
          console.log("Please connect to MetaMask.");
        } else if (accounts[0] !== currentAccount) {
          currentAccount = accounts[0];
          // Do any other work!
        }
      }

      /*********************************************/
      /* Access the user's accounts (per EIP-1102) */
      /*********************************************/

      // You should only attempt to request the user's accounts in response to user
      // interaction, such as a button click.
      // Otherwise, you popup-spam the user like it's 1999.
      // If you fail to retrieve the user's account(s), you should encourage the user
      // to initiate the attempt.
      document.getElementById("connectButton", connect);

      // While you are awaiting the call to eth_requestAccounts, you should disable
      // any buttons the user can click to initiate the request.
      // MetaMask will reject any additional requests while the first is still
      // pending.
      function connect() {
        ethereum
          .request({ method: "eth_requestAccounts" })
          .then(handleAccountsChanged)
          .catch((err) => {
            if (err.code === 4001) {
              // EIP-1193 userRejectedRequest error
              // If this happens, the user rejected the connection request.
              console.log("Please connect to MetaMask.");
            } else {
              console.error(err);
            }
          });
      }
    };

    const { autoLogin } = useAuth();
    const router = useRouter();

    onMounted(async () => {
      const resp = await autoLogin();
      if (!resp) router.push({ name: "login" });

      metamask();
    });
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/css/colors.scss";

.main-container {
  height: calc(100vh - 56px);
}
</style>
