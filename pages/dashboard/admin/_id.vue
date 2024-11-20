<template>
  <div class="container">
    <c-heading marginBottom="20px">
      <c-avatar
        :name="user.firstname ? `${user.firstname} ${user.lastname}` : null"
      />
      {{ user.firstname }}
      {{ user.lastname }}
    </c-heading>
    <c-stat-group marginBottom="20px">
      <c-stat>
        <c-stat-label>Saves</c-stat-label>
        <c-stat-number>{{
          user.post_saves_aggregate
            ? user.post_saves_aggregate.aggregate.count
            : 0
        }}</c-stat-number>
        <c-stat-helper-text>
          <c-stat-arrow type="increase" />
          0.0%
        </c-stat-helper-text>
      </c-stat>
      <c-stat>
        <c-stat-label>Posts</c-stat-label>
        <c-stat-number>{{
          user.posts_aggregate ? user.posts_aggregate.aggregate.count : 0
        }}</c-stat-number>
        <c-stat-helper-text>
          <c-stat-arrow type="increase" />
          0.0%
        </c-stat-helper-text>
      </c-stat>
      <c-stat>
        <c-stat-label>Comments</c-stat-label>
        <c-stat-number>{{
          user.post_comments_aggregate
            ? user.post_comments_aggregate.aggregate.count
            : 0
        }}</c-stat-number>
        <c-stat-helper-text>
          <c-stat-arrow type="increase" />
          0.0%
        </c-stat-helper-text>
      </c-stat>
    </c-stat-group>
    <div>
      <c-box :p="5" border-width="1px">
        <c-grid template-columns="repeat(3, 1fr)">
          <c-box>
            <c-text fontSize="11px" color="gray.500"> Email </c-text>
            <c-text fontSize="13px">
              {{ user.email }}
            </c-text>
          </c-box>
          <c-box>
            <c-text fontSize="11px" color="gray.500"> Companies </c-text>
            <c-text fontSize="13px">
              <!-- {{user.teams.length ? '' : 'Pending Invites'}} -->
              <ul>
                <li v-for="team in user.teams" :key="team.id">
                  {{ team.company.name }}
                </li>
              </ul>
            </c-text>
          </c-box>
          <c-box>
            <c-text fontSize="11px" color="gray.500">
              Registeration Date
            </c-text>
            <c-text fontSize="13px">
              {{ $moment(user.createdAt).calendar() }}
            </c-text>
          </c-box>
        </c-grid>
      </c-box>
      <c-grid template-columns="repeat(3, 1fr)" gap="10px" mt="20px">
        <c-box :p="5" border-width="1px">
          <h4>Saves</h4>
          <br />
          <c-box :if="user.post_saves.length">
            <c-stack v-for="(save, index) in user.post_saves" :key="index">
              <c-flex>
                <c-avatar
                  size="xs"
                  v-bind:name="
                    save.post
                      ? `${save.post.user.firstname} ${save.post.user.lastname}`
                      : null
                  "
                />
                <c-text>
                  {{ save.post.user.firstname }}
                  {{ save.post.user.lastname }}
                </c-text>
              </c-flex>
              <c-text fontSize="12px" p="0 2px" v-html="save.post.content">
              </c-text>
              <c-divider></c-divider>
            </c-stack>
          </c-box>
        </c-box>
        <c-box :p="5" border-width="1px">
          <h4>Posts</h4>
          <br />
          <c-box :if="user.posts.length">
            <c-stack v-for="(post, index) in user.posts" :key="index">
              <c-flex>
                <c-avatar
                  size="xs"
                  v-bind:name="
                    post.user
                      ? `${post.user.firstname} ${post.user.lastname}`
                      : null
                  "
                />
                <c-text>
                  {{ post.user.firstname }}
                  {{ post.user.lastname }}
                </c-text>
              </c-flex>
              <c-text fontSize="12px" p="0 2px" v-html="post.content"> </c-text>
              <c-divider></c-divider>
            </c-stack>
          </c-box>
        </c-box>
        <c-box :p="5" border-width="1px">
          <h4>Comments</h4>
          <br />
          <c-box :if="user.posts.length">
            <c-stack
              v-for="(comment, index) in user.post_comments"
              :key="index"
            >
              <c-flex>
                <c-avatar
                  size="xs"
                  v-bind:name="
                    comment.user
                      ? `${comment.user.firstname} ${comment.user.lastname}`
                      : null
                  "
                />
                <c-text>
                  {{ comment.user.firstname }}
                  {{ comment.user.lastname }}
                </c-text>
              </c-flex>
              <c-text fontSize="12px" p="0 2px" v-html="comment.content">
              </c-text>
              <c-divider></c-divider>
            </c-stack>
          </c-box>
        </c-box>
      </c-grid>
    </div>
  </div>
</template>

<script lang="js">

import countQuery from "~/graphql/queries/counts.gql";
import userQuery from "~/graphql/queries/user.gql";

export default {
  name: 'App',
  components: {},
  layout: 'dashboard',
  async asyncData({app, params}){
    console.log(app);
    const apolloClient = app.apolloProvider.defaultClient
    return {
      userId : params.id,
      user : (await apolloClient.query({query : userQuery, variables : {id : params.id}})).data.user_by_pk
    }
  },
  data () {
    return {
      counts : {},
      user : {},
      userId : null
    }
  },
  methods: {
    getCounts(){
      this.$apollo.query({query : countQuery})
        .then(({ data }) => {

          this.counts = data
        })
    }
  },
  computed: {
  }
}
</script>
