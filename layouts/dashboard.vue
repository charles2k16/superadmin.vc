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
              <c-flex>
                <c-image src="/logo-white.3992836f.png" alt="Logo" size="mb" />
                <c-text fontWeight="900" letterSpacing="-3px" color="white">
                  SUPERADMIN
                </c-text>
              </c-flex>
            </c-box>
          </c-box>
          <c-grid h="calc(100vh - 50px)" w="100vw" template-columns="200px 1fr">
            <c-grid-item bg="gray.500">
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
                <nuxt-link to="/dashboard/user">
                  <c-list-item padding="20px 30px">
                    <c-list-icon icon="users-cog" />
                    Admin
                  </c-list-item>
                </nuxt-link>
                <div @click="logout()">
                   <c-list-item
                  cursor="pointer"
                  padding="20px 30px"
                >
                  <c-list-icon icon="sign-out-alt" />
                  Logout
                </c-list-item>
                </div>
               
              </c-list>
            </c-grid-item>
            <c-grid-item boxSixing="border-box" bg="gray.50" padding="20px">
              <c-box
                boxSixing="border-box"
                bg="white"
                h="max-content"
                w="100%"
                padding="20px"
              >
                <Nuxt />
              </c-box>
            </c-grid-item>
          </c-grid>
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
} from "@chakra-ui/vue";

export default {
  name: "App",
  components: {
    CThemeProvider,
    CColorModeProvider,
    CReset,
    CBox,
    CGrid,
    CGridItem,
  },
  methods: {
    async logout() {
      console.log("logout");
      await this.$auth.logout();
      this.$router.push("../");
    },
  },
};
</script>
