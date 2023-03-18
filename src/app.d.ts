// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
  }
}

declare namespace svelteHTML {
  interface HTMLAttributes {
    'on:clickOutside'?: (e: CustomEvent) => void;
  }
}

export {};
