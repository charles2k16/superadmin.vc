<template>
  <div class="container">
    <CThemeProvider>
      <CColorModeProvider>
        <CBox font-family="body" as="main">
          <c-box
            position="sticky"
            top="0px"
            h="50px"
            w="100vw"
            bg="gray.900"
            padding="10px 20px"
            zIndex="1000"
          >
            <c-box w="xs">
              <div class='headerContent'>
                <div class='logoHeader'>
                  <c-image src="/logo-white.3992836f.png" alt="Logo" size="mb" class='logo' />
                  <c-text fontWeight="900" letterSpacing="-3px" color="white">
                    SUPERADMIN
                  </c-text></div>
                <c-button class='mobileMenu' size='xs' @click='showMenuHandler'>
                  <svg v-show='!showMenu' width="26px" height="26px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 8H13.75M5 12H19M10.25 16L19 16" stroke="#464455" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

                  <svg v-show='showMenu' width="26px" height="26px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><line x1="16" y1="16" x2="48" y2="48"></line><line x1="48" y1="16" x2="16" y2="48"></line></g></svg>
                </c-button>
              </div>
            </c-box>
          </c-box>
          <div class='main'>
            <c-grid-item  bg="gray.500" class='sidebar'>
              <c-list color="white" position="fixed" spacing="3">
                <nuxt-link to="/dashboard">
                  <c-list-item padding="20px 30px">
                    <c-list-icon icon="chart-bar" />
                    Statistics
                  </c-list-item>
                </nuxt-link>
                <nuxt-link to="/dashboard/business">
                  <c-list-item padding="20px 30px">
                    <c-list-icon icon="building" />
                    Businesses
                  </c-list-item>
                </nuxt-link>
                <nuxt-link to="/dashboard/coupon">
                  <c-list-item padding="20px 30px">
                    <c-list-icon icon="star" />
                    Coupons
                  </c-list-item>
                </nuxt-link>
                <nuxt-link to="/dashboard/user">
                  <c-list-item padding="20px 30px">
                    <c-list-icon icon="users" />
                    Users
                  </c-list-item>
                </nuxt-link>
                <nuxt-link to="/dashboard/insights">
                  <c-list-item padding="20px 30px">
                    <c-list-icon icon="comments" />
                    Insights
                  </c-list-item>
                </nuxt-link>
                <nuxt-link to="/dashboard/cms">
                  <c-list-item padding="20px 30px">
                    <c-list-icon icon="users-cog" />
                    CMS
                  </c-list-item>
                </nuxt-link>
                <nuxt-link to="/dashboard/admin">
                  <c-list-item padding="20px 30px">
                    <c-list-icon icon="users-cog" />
                    Admin
                  </c-list-item>
                </nuxt-link>
                <nuxt-link to="/dashboard/plan">
                  <c-list-item padding="20px 30px">
                    <c-list-icon icon="users" />
                    Plan
                  </c-list-item>
                </nuxt-link>
                <div @click="logout()">
                  <c-list-item cursor="pointer" padding="20px 30px">
                    <c-list-icon icon="sign-out-alt" />
                    Logout
                  </c-list-item>
                </div>
              </c-list>
            </c-grid-item>
            <c-grid-item boxSixing="border-box" bg="gray.50" padding="20px" class='mainContent'>
              <c-box
                boxSixing="border-box"
                bg="white"
                padding="20px"
              >
                <Nuxt />
              </c-box>
            </c-grid-item>
          </div>
            <div>

              <c-drawer :isOpen="showMenu" :on-close="showMenuHandler" placement="right"  :initialFocusRef="()=>$refs.inputInsideModal">
                <c-drawer-overlay />
                <c-drawer-content>
                  <c-drawer-close-button />
                  <c-drawer-header>Create your account</c-drawer-header>
                  <c-drawer-body>
                    <c-list>
                      <nuxt-link to="/dashboard">
                        <c-list-item padding="20px 30px">
                          <c-list-icon icon="chart-bar" />
                          Statistics
                        </c-list-item>
                      </nuxt-link>
                      <nuxt-link to="/dashboard/business">
                        <c-list-item padding="20px 30px">
                          <c-list-icon icon="building" />
                          Businesses
                        </c-list-item>
                      </nuxt-link>
                      <nuxt-link to="/dashboard/coupon">
                        <c-list-item padding="20px 30px">
                          <c-list-icon icon="star" />
                          Coupons
                        </c-list-item>
                      </nuxt-link>
                      <nuxt-link to="/dashboard/user">
                        <c-list-item padding="20px 30px">
                          <c-list-icon icon="users" />
                          Users
                        </c-list-item>
                      </nuxt-link>
                      <nuxt-link to="/dashboard/insights">
                        <c-list-item padding="20px 30px">
                          <c-list-icon icon="comments" />
                          Insights
                        </c-list-item>
                      </nuxt-link>
                      <nuxt-link to="/dashboard/cms">
                        <c-list-item padding="20px 30px">
                          <c-list-icon icon="users-cog" />
                          CMS
                        </c-list-item>
                      </nuxt-link>
                      <nuxt-link to="/dashboard/admin">
                        <c-list-item padding="20px 30px">
                          <c-list-icon icon="users-cog" />
                          Admin
                        </c-list-item>
                      </nuxt-link>
                      <nuxt-link to="/dashboard/plan">
                        <c-list-item padding="20px 30px">
                          <c-list-icon icon="users" />
                          Plan
                        </c-list-item>
                      </nuxt-link>
                      <div @click="logout()">
                        <c-list-item cursor="pointer" padding="20px 30px">
                          <c-list-icon icon="sign-out-alt" />
                          Logout
                        </c-list-item>
                      </div>
                    </c-list>
                  </c-drawer-body>
                </c-drawer-content>
              </c-drawer>
            </div>
          <CReset />
        </CBox>
      </CColorModeProvider>
    </CThemeProvider>
  </div>
</template>
<script>
import {
  CThemeProvider,
  CColorModeProvider,
  CReset,
  CBox,
  CGrid,
  CGridItem,
  CButton,
  CIcon,
  CDrawer,
  CDrawerBody,
  CDrawerFooter,
  CDrawerHeader,
  CDrawerOverlay,
  CDrawerContent,
  CDrawerCloseButton,
} from '@chakra-ui/vue';

export default {
  name: 'App',
  components: {
    CThemeProvider,
    CColorModeProvider,
    CReset,
    CBox,
    CGrid,
    CGridItem,
    CButton,
    CIcon,
    CDrawer,
    CDrawerBody,
    CDrawerFooter,
    CDrawerHeader,
    CDrawerOverlay,
    CDrawerContent,
    CDrawerCloseButton,
  },
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    async logout() {
      console.log('logout');
      await this.$auth.logout();
      this.$router.push('../');
    },
    async showMenuHandler(){
      this.showMenu = !this.showMenu;
    }
  }
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
.mobileMenu{
  display: none;
}
.main{
  display: flex;
  flex-direction: row;
  width: 100%;
}
.sidebar{
  position: fixed;
  z-index: 999;
  width: 20%;
  height: 100vh;
}
.mainContent{
  width: calc(100% - 20%);
  margin-left: auto;
}
.logoHeader{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 15%;
}
@media (max-width: 768px) {
  .sidebar {
    display: none !important;
  }
  .mainContent {
    width: 100% !important;
  }
  .css-1ph6rqs-Yn, .css-17ix3mn-Yn, .css-1ph6rqs-Yn {
    display: block !important;
  }
  .mobileMenu{
    display: block !important;
  }
  .headerContent{
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
  }
  .css-1lxlkyg-Yn{
    padding:2px !important;
  }
  .css-1mg63n6-Yn, .css-1toqrgb-Yn, .css-1mg63n6-Yn, .css-1fnxjiu-Yn, .css-1k77llb-Yn, .css-ftzujh-Yn, .css-15n7xm3-Yn {
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
    flex-wrap: wrap !important;
    padding: 0px 20px !important;
  }
  .css-1dehade-Yn{
    margin: 5px !important;
  }
  .logo{
    width: 100px;
    height: 20px;
    object-fit: contain;
  }
  .logoHeader{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0 !important;
  }
}
</style>
