<template>
  <div class="container">
    <c-box
      bg="gray.800"
      d="flex"
      w="100vw"
      h="100vh"
      flex-dir="column"
      justify-content="center"
    >
      <c-flex justify="center" direction="column" align="center">
        <c-heading text-align="center" mb="4">
          <c-box w="sm">
            <c-image src="/logo-white.3992836f.png" alt="Logo" size="mb" />
          </c-box>
          <c-text fontWeight="900" letterSpacing="-3px" color="white">
            SUPERADMIN
          </c-text>
        </c-heading>
        <c-box
          w="100%"
          max-w="500px"
          borderRadius="md"
          bg="gray.100"
          padding="20px"
          mb="6"
        >
          <c-stack spacing="4">
            <c-input-group>
              <c-input-left-element
                ><c-icon name="email" color="gray.300"
              /></c-input-left-element>
              <c-input
                type="email"
                placeholder="Email Address"
                v-model="email"
              />
            </c-input-group>

            <c-input-group>
              <c-input-left-element color="gray.300" fontSize="1.2em"
                ><c-icon name="check" color="gray.300"
              /></c-input-left-element>
              <c-input
                placeholder="Enter Password"
                :type="showPassword ? 'text' : 'password'"
                v-model="password"
              />
              <c-input-right-element width="5rem" marginRight="10px">
                <c-button
                  h="1.75rem"
                  size="sm"
                  @click="showPassword = !showPassword"
                >
                  {{ showPassword ? "Hide" : "Show" }}
                </c-button>
              </c-input-right-element>
            </c-input-group>

            <c-button :isLoading="loggingIn" variant-color="green" @click="login"> Login </c-button>
          </c-stack>
        </c-box>
      </c-flex>
    </c-box>
  </div>
</template>

<script lang="js">


export default {
  name: 'App',
  components: {},
  inject: ['$chakraColorMode', '$toggleColorMode'],
  data () {
    return {
        email : '',
        password: '',
        showPassword: false,
        loggingIn : false
    }
  },
  computed: {
  },
  methods: {
    async login(){
      this.loggingIn = true;
      try {
       const loginData = await this.$auth.loginWith('local', {
          data: {
          email: this.email,
          password: this.password
          }
        })
        console.log(loginData.data.token);
        this.$apolloHelpers.onLogin(loginData.data.token);
        this.$router.push('/dashboard')
      } catch (e) {
        const {error, message} = e.response.data;
        this.loggingIn = false;
        this.$toast({
          title: error,
          description: message,
          status: 'error',
          duration: 5000
        })
      }
    }
  }
}
</script>
