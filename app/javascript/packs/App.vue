<template>
  <div>
    <header>
      <nav-bar :projectName="pageName" :isFixed="isNavbarFixed" :colorPalette="colorPalette">
        <collection-btn slot="navigation" v-for="tool in pageTools" :key="tool.href" :href="tool.href" :icon="tool.icon" />
        <collection-btn slot="tool-bar" v-for="tool in toolBar" :key="tool.href" :href="tool.href" :icon="tool.icon" type="dropdown">
          <ul slot="popover" class="vertical">
            <collection-btn 
              class="small"
              v-for="tool in navigation.userNavigation" 
              :key="tool.href" :href="tool.href" 
              :icon="tool.icon" 
              :text="tool.text" />
          </ul>
        </collection-btn>
      </nav-bar>
    </header>
    <main>
      <side-nav 
        :projectName="pageName" 
        :isOpen="isSidebarOpen" 
        :isClosedLargeScreen="isSidebarClosedLargeScreen" 
        @click.stop 
        v-on-click-outside="closeSidebar">
        <collection-btn slot="tool-bar" v-for="tool in toolBar" :key="tool.href" :href="tool.href" :icon="tool.icon" type="dropdown">
          <ul slot="popover" class="vertical">
            <collection-btn 
              class="small"
              v-for="tool in navigation.userNavigation" 
              :key="tool.href" :href="tool.href" 
              :icon="tool.icon" 
              :text="tool.text" />
          </ul>
        </collection-btn>
        <ul class="vertical grey-text text-darken-1" v-for="(section, index) in navigation" :key="index">
          <collection-btn v-for="nav in section" :key="nav.href" :href="nav.href" :icon="nav.icon" :text="nav.text" />
        </ul>
        <a slot="footer" href="#">Contact us</a>
      </side-nav>
    </main>
  </div>
</template>

<script>
import { mixin as onClickOutside } from 'vue-on-click-outside'

export default {
  mixins: [onClickOutside],
  data() {
    return {
      pageName: "Project",
      isSidebarOpen: false,
      isSidebarClosedLargeScreen: false,
      isNavbarFixed: true,
      colorPalette: {
        primary: 'blue',
      },
      pageTools: [
        { href: '#', icon: 'view_module' },
      ],
      toolBar: [
        { href: '#', icon: 'person', type: 'dropdown' },
      ],
      navigation: {
        siteNavigation: [
          { href: '#', icon: 'dashboard', text: 'Dashboard' },
          { href: '#', icon: 'notifications', text: 'Notifications' }
        ],
        userNavigation: [
          { href: '#', icon: 'receipt', text: 'My Tickets' },
          { href: '#', icon: 'devices', text: 'My Devices' },
        ],
        userTools: [
          { href: '#', icon: 'settings', text: 'Settings' },
          { href: '#', icon: 'feedback', text: 'Send Feedback' },
          { href: '#', icon: 'help', text: 'Help' },
        ]
      }
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
      this.isSidebarClosedLargeScreen = !this.isSidebarClosedLargeScreen;
    },
    closeSidebar() {
      this.isSidebarOpen = false;
    }
  }
}
</script>

<style scoped>

</style>
