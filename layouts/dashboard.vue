<template>
  <div class="container">
    <CThemeProvider>
      <CColorModeProvider>
        <CBox font-family="body" as="main">
          <c-box position="sticky" top="0px" h="50px" w="100vw" bg="gray.900" padding="10px 20px">
            <c-box w="xs">
              <c-flex>
                <c-image src="/logo-white.3992836f.png" alt="Logo" size="mb" />
                <c-text fontWeight="900" letterSpacing="-3px" color="white">
                  SUPERADMIN
                </c-text>
              </c-flex>
            </c-box>
          </c-box>
          <c-grid h="100vh" w="100vw" template-columns="200px 1fr">
            <c-grid-item bg="gray.500">
                 <c-list color="white" spacing="3">
                  <c-list-item c-link padding="20px 30px">
                    <c-list-icon icon="chart-bar" />
                    Statistics
                  </c-list-item>
                </c-list>
                <c-list color="white" spacing="3">
                  <c-list-item c-link padding="20px 30px">
                    <c-list-icon icon="building" />
                    Businesses
                  </c-list-item>
                </c-list>
                  <c-list color="white" spacing="3">
                  <c-list-item c-link padding="20px 30px">
                    <c-list-icon icon="users" />
                    Users
                  </c-list-item>
                </c-list>
              
            </c-grid-item>
            <c-grid-item boxSixing="border-box" bg="gray.50" padding="20px">
              <c-box boxSixing="border-box" bg="white" h="100%" w="100%" padding="20px">
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
};
</script>
