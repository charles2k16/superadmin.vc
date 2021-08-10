<template>
  <div class="container">
    <CThemeProvider>
      <CColorModeProvider>
        <CBox font-family="body" as="main">
          <c-grid h="100vh" w="100vw" template-columns="250px 1fr">
            <c-grid-item bg="blue.800">
               <c-list color="white" spacing="3">
                  <c-list-item c-link padding="20px">
                    Superadmin
                  </c-list-item>
                </c-list>
              <c-flex>
                <c-list color="white" spacing="3">
                  <c-list-item c-link padding="20px">
                    Business
                  </c-list-item>
                </c-list>
              </c-flex>
            </c-grid-item>
            <c-grid-item bg="gray.50">
              <Nuxt />
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
