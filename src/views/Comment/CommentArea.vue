<template>
    <div id="mainBox">
      <TopnavComment></TopnavComment>
      <div class="block">
        <el-timeline>
          <el-timeline-item :timestamp="comment.created" placement="top" v-for="(comment, index) in comment" :key="index">
            <el-card>
              <h4>{{comment.title}}</h4>
              <p>{{comment.description}}</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
        <el-pagination
          class="pages"
          background
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
    </div>
</template>

<script>
import TopnavComment from '../../components/CommentComponents/TopnavComment'
export default {
  name: 'CommentArea',
  components: { TopnavComment },
  data () {
    return {
      comment: {},
      currentPage: 1,
      total: 0,
      pageSize: 5
    }
  },
  methods: {
    page () {
      this.$http.get('/comment/list').then(res => {
        console.log(res.data)
        this.comment = res.data.page.list
        this.currentPage = res.data.page.pageNum
        this.total = res.data.page.total
        this.pageSize = res.data.page.pageSize
      })
    }
  },
  created () {
    this.page()
  }
}
</script>

<style scoped>
  .block{
    width: 1000px;
    margin: 30px auto;
  }
  .pages{
    text-align: center;
    margin: 0 auto;
  }
</style>
