<template>
  <div>
    <header>
      <nav-bar :projectName="pageName" :isFixed="isNavbarFixed" :toggleSidebar="toggleSidebar" :primaryColor="colorPalette.primary">
        <collection-btn slot="navigation" v-for="tool in pageTools" :key="tool.href" :href="tool.href" :icon="tool.icon" />
        <collection-btn slot="tool-bar" v-for="tool in toolBar" :key="tool.href" :href="tool.href" :icon="tool.icon" />
      </nav-bar>
    </header>
    <main>
      <side-nav :projectName="pageName" :isOpen="isSidebarOpen" :toggleSidebar="toggleSidebar">
        <collection-btn slot="tool-bar" v-for="tool in toolBar" :key="tool.href" :href="tool.href" :icon="tool.icon" />
        <ul class="vertical" v-for="(section, index) in navigation" :key="index">
          <collection-btn v-for="nav in section" :key="nav.href" :href="nav.href" :icon="nav.icon" :text="nav.text" />
        </ul>
        <a slot="footer" href="#">Contact us</a>
      </side-nav>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageName: "Stockie",
      isSidebarOpen: false,
      isNavbarFixed: true,
      colorPalette: {
        primary: 'blue',
      },
      pageTools: [
        { href: '#', icon: 'view_module' },
      ],
      toolBar: [
        { href: '#', icon: 'person' },
      ],
      navigation: [
        [
          { href: '#', icon: 'dashboard', text: 'Dashboard' },
          { href: '#', icon: 'notifications', text: 'Notifications' }
        ],
        [
          { href: '#', icon: 'receipt', text: 'My Tickets' },
          { href: '#', icon: 'devices', text: 'My Devices' },
        ],
        [
          { href: '#', icon: 'settings', text: 'Settings' },
          { href: '#', icon: 'feedback', text: 'Send Feedback' },
          { href: '#', icon: 'help', text: 'Help' },
        ]
      ]
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    }
    
  }
}
</script>

<style scoped>

</style>
