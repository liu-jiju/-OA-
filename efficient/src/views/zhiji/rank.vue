<!-- 职级管理 -->
<template>
  <div>
    <div class="jobs-serach">
      <p>职级名换</p>
      &nbsp;&nbsp;
      <div class="search-box">
        <el-input v-model="valSearch" placeholder="请输入姓名" size="small" style="width: 200px"></el-input>
        &nbsp;&nbsp;&nbsp;

        <el-button class="el-icon-search">查询</el-button>
        <el-button class="el-icon-refresh-right">重置</el-button>
      </div>
      <p class="add-jobs" @click="add"><i class="el-icon-circle-plus-outline"></i> 新增职级</p>
    </div>
    <!-- 以上是表单 -->
    <div class="table-box">
      <el-table :data="tableData" border style="width: 100%" stripe>
        <el-table-column type="index" label="id" width="180" align="center"> </el-table-column>
        <el-table-column prop="date" label="职级名称" width="180" align="center"> </el-table-column>
        <el-table-column prop="name" label="备注" width="380" align="center"> </el-table-column>
        <el-table-column prop="name" label="操作" align="center">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 以上是表格内容 -->
    <!-- 以下是分页 -->
    <div class="box-fenye">
      <div class="box-bottom">
        <div class="fenye-box">
          <span>总共20条</span> &nbsp;&nbsp; <el-button>上一页</el-button> &nbsp;&nbsp;2/5&nbsp;&nbsp;<el-button
            >下一页</el-button
          >
        </div>
      </div>
    </div>
    <!-- 以下是弹框 -->
    <addRank v-if="addRankFormVisible" ref="addRankForm" @rankClick="noneRank"></addRank>
  </div>
</template>

<script>
/**职级添加弹窗 */
import addRank from './AddRank.vue'
/**分页组件引人 */

export default {
  name: '',
  components: { addRank },
  data() {
    return {
      addRankFormVisible: false,
      valSearch: '',
      /**表格 */
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ]
    }
  },
  created() {},
  mounted() {},
  methods: {
    // 点击新增
    add() {
      this.addRankFormVisible = true
      this.$nextTick(() => {
        this.$refs.addRankForm.addList()
      })
    },
    // 子传父接受方法
    noneRank() {
      this.addRankFormVisible = false
    },
    handleEdit(index, row) {
      this.addRankFormVisible = true
      this.$nextTick(() => {
        this.$refs.addRankForm.backList(row)
      })
    },
    handleDelete(index, row) {}
  }
}
</script>
<style scoped lang="scss">
.jobs-serach {
  display: flex;
  align-items: center;
  .add-jobs {
    background: #c2c2fb;
    border-radius: 5px;
    padding: 5px;
    color: white;
  }
}
.box-fenye {
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.fenye-page-jobs {
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
}
</style>