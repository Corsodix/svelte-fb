<script>
  import { GoogleAuthProvider, signInWithPopup, signOut ,signInWithRedirect } from "firebase/auth";
  import { auth } from "./firebase";

  async function signIn() {
    var provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);

    //await signInWithRedirect(auth, provider);
  }
  function signOutUser() {
    signOut(auth);
  }
  import { userStore } from "sveltefire";

  const user = userStore(auth);
</script>

{#if $user}
  <p>Hi {$user.uid}</p>
  <button on:click={signOutUser}>Logout</button>
{:else}
  <p>Sign in...</p>
  <button on:click={signIn}>Login</button>
{/if}