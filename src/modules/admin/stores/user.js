import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { authentication } from '@/plugins/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const useUserStore = defineStore('user', () => {
  const user = ref(null);

  const userProfile = computed(() => user.value);
  const isLoggedIn = computed(() => null !== user.value);

  function fetchUser() {
    this.user = Object.assign(
      {},
      {
        ...authentication.currentUser,
        displayName: authentication.currentUser.displayName,
        email: authentication.currentUser.email,
        photoURL: authentication.currentUser.photoURL,
        emailVerified: authentication.currentUser.emailVerified,
      },
    );

    authentication.currentUser
      .getIdTokenResult()
      .then((idTokenResult) => {
        console.log('authentication.currentUser', idTokenResult, idTokenResult.claims);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function login({ email, password }) {
    try {
      const user = await signInWithEmailAndPassword(authentication, email, password).then((userCredential) => {
        console.log('login', userCredential.user);
        return userCredential.user;
      });
      // await fetchUser(user.email);
    } catch (e) {
      throw new Error('Unavailable to sign in');
    }
  }
  function logout() {
    return authentication.signOut().then(() => {
      user.value = null;
    });
  }

  return {
    userProfile,
    isLoggedIn,
    fetchUser,
    login,
    logout,
  };
});
