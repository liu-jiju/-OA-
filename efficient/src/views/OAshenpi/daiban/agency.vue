//OA审批-->待办事项
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
          <el-button size="mini" class="purple btn" @click="adopt(scope.$index, scope.row)"
            >通过</el-button
          >
					
          <el-button
            size="mini"
            class="btn"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >驳回</el-button
          >
          <el-button
            type="primary"
            class="btn"
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
            >详情</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 表格结束 -->
    <!--  通过驳回 对话框开始/ -->
    <adoptDialog
      :dialogTableVisible="dialogTableVisible"
      :iptTiltle="iptTiltle"
      @dialogFlag="dialogFlag"
    ></adoptDialog>
    <!--  通过驳回 对话框结束/ -->
    <!-- 详情的对话框  开始 -->
    <detailsDialog :details="details1" @detailsFlag="detailsFlag" ref='datails'></detailsDialog>
    <!-- 详情的对话框  结束 -->
  </div>
</template>

<script>
//  通过驳回对话框组件引入
import adoptDialog from'./adoptDialog.vue'
/**详情的对话框组件引入*/
import detailsDialog from './detailsDialog.vue';
export default {
  name: 'agencyView',
  components: { adoptDialog, detailsDialog },
  data() {
    return {
      details1: false, //对话框详情的对话框
      iptTiltle: true, //通过驳回对话框
      dialogTableVisible: false, //控制通过驳回对话框
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
    /**表格详情操作 */
    handleEdit(index,row) {
      console.log(index,row);
      this.$nextTick(()=>{
      this.$refs.datails.init(row)
      })
      this.details1 = true;
    },
    //表格驳回操作
    handleDelete(index, row) {
      console.log(index, row);
      this.iptTiltle = false;
      this.dialogTableVisible = true;
    },
    /**表格通过事件*/
    adopt(index, row) {
      console.log(index, row);
      this.iptTiltle = true;
      this.dialogTableVisible = true;
    },
    /**点击子组件的确定的时候让弹框重新赋值避免弹框点不开情况*/
    dialogFlag() {
      this.dialogTableVisible = false;
    },
    detailsFlag(){
      this.details1= false
    }
  },
};
</script>
<style scoped lang="scss">
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
</style>
//OA审批-->待办事项结束
