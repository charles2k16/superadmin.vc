<template>
  <div class="container">
    <c-heading marginBottom="20px">Posts</c-heading>
    <c-stat-group>
      <c-stat>
        <c-stat-label>Total Posts in Insights</c-stat-label>
        <c-stat-number>{{
          counts.post_aggregate ? counts.post_aggregate.aggregate.count : 0
        }}</c-stat-number>
        
      </c-stat>
       <c-stat>
        <c-stat-label>Total Comments in Insights</c-stat-label>
        <c-stat-number>{{
          counts.post_comment_aggregate ? counts.post_comment_aggregate.aggregate.count : 0
        }}</c-stat-number>
          
      </c-stat>
        <c-stat>
        <c-stat-label>Total Tags in Insights</c-stat-label>
        <c-stat-number>{{
          counts.post_comment_aggregate ? counts.post_comment_aggregate.aggregate.count : 0
        }}</c-stat-number>
          
      </c-stat>
    </c-stat-group>
 <c-tabs>
    <c-tab-list>
      <c-tab>Posts</c-tab>
      <c-tab>Comments</c-tab>
      <c-tab>Tags</c-tab>
    </c-tab-list>
    <c-tab-panels>
      <c-tab-panel>
         <c-box :p="5" border-width="1px">
           <c-stack v-for="(post, index) in posts" :key="index">
                    <c-flex>
                    <c-avatar size="xs" v-bind:name="post.user ? `${post.user.firstname} ${post.user.lastname}` : null" />
                    <c-text>
                      {{post.user.firstname}} 
                      {{post.user.lastname}}   
                    </c-text>     
                    </c-flex>
                    <c-text fontSize="12px" p="0 2px" v-html="post.content">
                    </c-text>   
                    <c-divider></c-divider>
            </c-stack> 
    </c-box>
      </c-tab-panel>
      <c-tab-panel>
         <c-box :p="5" border-width="1px">
      <c-stack v-for="(comment, index) in comments" :key="index">
                    <c-flex>
                    <c-avatar size="xs" v-bind:name="comment.user ? `${comment.user.firstname} ${comment.user.lastname}` : null" />
                    <c-text>
                      {{comment.user.firstname}} 
                      {{comment.user.lastname}}   
                    </c-text>     
                    </c-flex>
                    <c-text fontSize="12px" p="0 2px" v-html="comment.content">
                    </c-text>   
                    <c-divider></c-divider>
            </c-stack> 
    </c-box>
      </c-tab-panel>
      <c-tab-panel>
         <c-box :p="5" border-width="1px">
     <c-badge v-for="(tag, index) in tags" :key="index"  mx="2" variant="subtle" variant-color="blue">{{tag.name}} - {{tag.post_tags_aggregate.aggregate.count}}</c-badge>
    </c-box>
      </c-tab-panel>
    </c-tab-panels>
  </c-tabs>
  </div>
</template>

<script lang="js">

import countQuery from "~/graphql/queries/counts.gql";
import postsQuery from "~/graphql/queries/posts.gql";
import commentsQuery from "~/graphql/queries/comments.gql";
import tagsQuery from "~/graphql/queries/tags.gql";

export default {
  name: 'App',
  components: {},
  layout: 'dashboard',
  data () {
    return {
      counts : {},
      posts : [],
      comments : [],
      tags : []
    }
  },
  fetch(){
    this.getCounts();
    this.getPosts();
    this.getComments();
    this.getTags();
  },
  computed: {
  },
  methods: {
    getCounts(){
      this.$apollo.query({query : countQuery})
        .then(({ data }) => {
          this.counts = data
        })
    },
     getPosts(){
      this.$apollo.query({query : postsQuery})
        .then(({ data }) => {
          this.posts = data.post
        })
    },
    getComments(){
      this.$apollo.query({query : commentsQuery})
        .then(({ data }) => {
          this.comments = data.post_comment
        })
    },
    getTags(){
      this.$apollo.query({query : tagsQuery})
        .then(({ data }) => {
          this.tags = data.tag
        })
    },
  }
}
</script>
