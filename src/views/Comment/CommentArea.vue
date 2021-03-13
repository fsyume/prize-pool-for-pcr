<template>
    <div id="mainBox">
      <TopnavComment></TopnavComment>
      <div class="block">
        <el-timeline>
          <el-timeline-item timestamp="2018/4/12" placement="top">
            <el-card>
              <h4>更新 Github 模板</h4>
              <p>王小虎 提交于 2018/4/12 20:46</p>
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
  components: { TopnavComment }
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
