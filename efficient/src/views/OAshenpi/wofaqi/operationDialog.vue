//OA审批-->我发起的-->详情/新增的对话框
<template>
  <div>
    <!-- 详情/新增的对话框 开始 -->
    <el-dialog
      :title="addDialogFlag ? '新增申请' : '审批详情'"
      :visible.sync="flag"
      :before-close="before"
      @open="open"
      width="50%"
    >
      <el-steps :space="200" :active="steps" v-if="!addDialogFlag" finish-status="success">
        <el-step title="已完成"></el-step>
        <el-step title="进行中"></el-step>
        <el-step title="步骤 3"></el-step>
      </el-steps>
      <!-- 对话框的表单详情/新增  开始 -->
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="申请人" prop="name" v-if="!addDialogFlag">
          <el-input v-model="ruleForm.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="审批类型" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择申请类型">
            <el-option label="请假申请" value="请假申请"></el-option>
            <el-option label="出差申请" value="出差申请"></el-option>
            <el-option label="换车申请" value="换车申请"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="申请时间" prop="region">
          <div class="da">
            <el-time-picker
              placeholder="选择时间"
              v-model="ruleForm.date2"
              style="width: 100%"
              class="ipt"
            ></el-time-picker>
            <div class="block">
              &nbsp;-
              <el-date-picker v-model="ruleForm.data1" type="date" placeholder="选择日期">
              </el-date-picker>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="所属部门" prop="region" v-if="!addDialogFlag">
          <el-select v-model="ruleForm.department" placeholder="请选择部门">
            <el-option label="人事部" value="人事部"></el-option>
            <el-option label="总经办" value="总经办"></el-option>
            <el-option label="..." value="..."></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="请假理由">
          <el-input v-model="ruleForm.leave"></el-input>
        </el-form-item>
        <el-form-item label="审批流程" v-if="addDialogFlag">
          <el-timeline :reverse="reverse">
            <el-timeline-item
              v-for="(activity, index) in activities"
              :key="index"
              :timestamp="activity.timestamp"
            >
              {{ activity.content }}
            </el-timeline-item>
          </el-timeline>
        </el-form-item>
      </el-form>
      <!-- 对话框的表单详情/新增  结束 -->
      <span slot="footer" class="dialog-footer" v-if="!addDialogFlag">
        <el-button @click="submitForm('ruleForm')">取消</el-button>
      </span>
      <span slot="footer" class="dialog-footer" v-if="addDialogFlag">
        <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
        <el-button @click="resetForm('ruleForm')">取消</el-button>
      </span>
    </el-dialog>
    <!-- 详情/新增 的对话框 结束 -->
  </div>
</template>

<script>
export default {
  name: 'detailsDialog',
  components: {},
  props: ['details', 'addDialogFlag'],
  data() {
    return {
      reverse: true,
      /**对话框的控制 */
      flag: false,
      /**详情步骤进度条一123进行选择 */
      steps: 1,
      /** 详情对话框的表单绑定 */
      ruleForm: {
        name: '', //申请人
        region: '', //审批类型
        date2: '', //选择时间
        data1: '', //选择日期
        department: '', //所属部门
        leave: '', //请假理由
      },
      /**详情对话框的表单的判空 */
      rules: {
        name: [
          { required: true, message: '请填写完整', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' },
        ],
        region: [{ required: true, message: '请填写完整', trigger: 'blur' }],
      },
      /**步骤条 */
      activities: [
        {
          content: '活动按期开始',
          timestamp: '2018-04-15',
        },
        {
          content: '通过审核',
          timestamp: '2018-04-13',
        },
        {
          content: '创建成功',
          timestamp: '2018-04-11',
        },
      ],
    };
  },
  created() {},
  mounted() {},
  methods: {
    // ref的传值方法
    init(row){
     console.log(row,'row');
    },
    /**详情对话框的确定事件*/
    submitForm(formName) {
      if (this.addDialogFlag) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            alert('submit!');
            this.flag = false;
            this.$emit('detailsFlag');
            // 新增用户数据逻辑
          } else {
            return false;
          }
        });
      } else {
        // 详情的取消事件
        this.$refs[formName].validate(valid => {
          if (valid) {
            this.flag = false;
            this.$emit('detailsFlag');
          } else {
            return false;
          }
        });
      }
    },
    /**对话框打开前的回调 */
    open() {
      // 点击表单数据制空
      this.ruleForm = {
        name: '', //申请人
        region: '', //审批类型
        date2: '', //选择时间
        data1: '', //选择日期
        department: '', //所属部门
        leave: '', //请假理由
      };
    },
    /**新增用户的取消事件 */
    resetForm(formName) {
      this.flag = false;
      this.$emit('detailsFlag');
      this.$refs[formName].resetFields();
      this.$message.error('取消该申请');
    },
    /**对话框关闭前的字串父修改父组件的状态 */
    before() {
      this.$emit('detailsFlag');
    },
  },
  watch: {
    details: function (newVal) {
      this.flag = newVal;
    },
  },
};
</script>
<style scoped lang='scss'>
.da {
  display: flex;
}
.block {
  margin-left: -350px;
}
</style>
