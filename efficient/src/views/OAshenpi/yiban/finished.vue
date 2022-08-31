//OA审批-->已办事项
<template>
  <div>
    <div class="top">
      审批类型 &nbsp;<el-select v-model="SelectValue" clearable placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      审批人 &nbsp;<el-input v-model="account" placeholder="请输入账号" class="ipt"></el-input>
      审批状态 &nbsp;<el-input v-model="state" placeholder="请输入状态" class="ipt"></el-input>
    </div>
    <div class="btnBox">
      <br />
      <el-button icon="el-icon-search" size="mini">查询</el-button>
      <el-button icon="el-icon-refresh-right" size="mini">重置</el-button>
    </div>
    <!-- 表格开始 -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="id" width="50px"> </el-table-column>
      <el-table-column prop="name" label="申请人" width="155px"> </el-table-column>
      <el-table-column prop="name" label="审批类型" width="155px"> </el-table-column>
      <el-table-column prop="name" label="申请类型" width="155px"> </el-table-column>
      <el-table-column prop="name" label="当前审批人" width="155px"> </el-table-column>
      <el-table-column prop="name" label="审批状态" width="155px"> </el-table-column>
      <el-table-column prop="name" label="所属部门" width="155px"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            class="btn yello"
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
            >详情</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 表格结束 -->
    <!-- 详情对话框组件引入 -->
       <detailsDialog :details='details' @detailsFlag='details=false' ref="details"></detailsDialog>
  </div>

</template>

<script>
/**详情对话框组件引入 */
import detailsDialog from './doneDialog.vue'
export default {
  name: 'userManagementView',
  components: {detailsDialog},
  data() {
    return {
      details: false, //对话框详情的对话框
      tableData: [{ name: '小李' }], //存储表格信息
      account: '', //审批人账号
      state: '', //审批人账号
      SelectValue: '', // Select选择器value
      options: [
        {
          value: '请假',
          label: '请假',
        },
        {
          value: '车贷',
          label: '车贷',
        },
        {
          value: '出差',
          label: '出差',
        },
        {
          value: '加班',
          label: '加班',
        },
      ],
    };
  },
  created() {},
  mounted() {},
  methods: {

handleChange(val){
  console.log(val);
},
    /**详情操作 ref进行传值*/
    handleEdit(index, row) {
      console.log(index, row);
      this.details = true;
      this.$nextTick(()=>{
        this.$refs.details.init(row)
      })
    },
  },
};
</script>
<style scoped lang="scss">
.yello{
  background-color: #edc404;
  color: white;
  border: none;
}
::v-deep .el-input__inner {
  width: 250px;
}

.da {
  display: flex;
}
.block {
  margin-left: -350px;
}
.purple {
  background-color: #b786fe;
  color: white;
}
.ipt {
  width: 250px;
}

.btn {
  margin: 0;
}
.titleBox {
  width: 250px;
  border: 1px solid #dcdfe6;
  padding: 10px 0;
  padding-left: 13px;
  margin-left: 50px;
}
.ipt1:focus {
  //获取焦点
  outline: 1px solid #5b9eff; //边框不用border，用outline
  background: rgba(3, 16, 28, 0); //背景色
}
.titleBoxCen {
  text-align: center;
}
</style>
