<template>
  <div>
    <header>
      <nav-bar :projectName="pageName" :isFixed="isNavbarFixed" :colorPalette="colorPalette">
        <collection-btn slot="navigation" v-for="tool in pageTools" :key="tool.href" :href="tool.href" :icon="tool.icon" />
        <collection-btn slot="tool-bar" v-for="tool in toolBar" :key="tool.href" :href="tool.href" :icon="tool.icon" type="dropdown">
          <ul slot="popover" class="vertical">
            <collection-btn class="small" v-for="tool in navigation.userNavigation" :key="tool.href" :href="tool.href" :icon="tool.icon" :text="tool.text" />
          </ul>
          <ul slot="popover" class="vertical">
            <collection-btn class="small" v-for="tool in userControls" :key="tool.href" :href="tool.href" :icon="tool.icon" :text="tool.text" />
          </ul>
        </collection-btn>
      </nav-bar>
    </header>
    <main>
      <side-nav 
        :projectName="pageName" 
        :isClosed="isSidebarClosed" 
        :isClosedLargeScreen="isSidebarClosedLargeScreen" 
        @click.stop 
        v-on-click-outside="closeSidebar">
        <collection-btn slot="tool-bar" v-for="tool in toolBar" :key="tool.href" :href="tool.href" :icon="tool.icon" type="dropdown">
          <ul slot="popover" class="vertical">
            <collection-btn class="small" v-for="tool in userControls" :key="tool.href" :href="tool.href" :icon="tool.icon" :text="tool.text" />
          </ul>
        </collection-btn>
        <ul class="vertical grey-text text-darken-1" v-for="(section, index) in navigation" :key="index">
          <collection-btn v-for="nav in section" :key="nav.href" :href="nav.href" :icon="nav.icon" :text="nav.text" />
        </ul>
        <a slot="footer" href="#">Contact us</a>
      </side-nav>
      <div id="main-container" :class="{ 'fixed-navbar': isNavbarFixed }">
        <div class="container-responsive grid" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 200 }'>
          <ticket :data="{ id: 5231, timestamp: new Date(), user: user }"/>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageName: "Project",
      isSidebarClosed: true,
      isSidebarClosedLargeScreen: false,
      isNavbarFixed: true,
      colorPalette: {
        primary: 'blue grey-text text-lighten-5',
        accent: 'amber white-text',
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
      },
      userControls: [
        { href: '#', icon: 'person', text: 'Account' },
        { href: '#', icon: 'power_settings_new', text: 'Logout' },
      ],
      user: {
        profilePicture: 'https://pbs.twimg.com/profile_images/703686186112450560/4LMZITmv_400x400.jpg',
        username: 'Tony Mu',
        firstName: 'Tony',
        lastName: 'Mu',
        email: 'tongmu@gmail.com',
        phoneNumber: '(316) 516-7899',
        type: 'Technician',
        devices: [],
        tickets: [],
        notifications: [],
        settings: [],
      }
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarClosed = !this.isSidebarClosed;
      this.isSidebarClosedLargeScreen = !this.isSidebarClosedLargeScreen;
    },
    closeSidebar() {
      this.isSidebarClosed = false;
    }
  }
}
</script>

<style scoped>

</style>
