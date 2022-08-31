//OA审批-->已办事项-->详情对话框封装
<template>
  <div>
    <!-- 详情的对话框 开始 -->
    <el-dialog title="审批详情"
    :before-close='before'
     :visible.sync="falg" width="50%">
      <el-steps :space="200" :active="steps" finish-status="success">
        <el-step title="已完成"></el-step>
        <el-step title="进行中"></el-step>
        <el-step title="步骤 3"></el-step>
      </el-steps>
      <!-- 对话框的表单  开始 -->
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="申请人" prop="name">
          <el-input v-model="ruleForm.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="审批类型" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择申请类型">
            <el-option label="请假申请" value="请假申请"></el-option>
            <el-option label="出差申请" value="出差申请"></el-option>
            <el-option label="换车申请" value="换车申请"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="申请事件" prop="region">
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
        <el-form-item label="所属部门" prop="region">
          <el-select v-model="ruleForm.department" placeholder="请选择部门">
            <el-option label="人事部" value="人事部"></el-option>
            <el-option label="总经办" value="总经办"></el-option>
            <el-option label="..." value="..."></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="请假理由">
          <el-input v-model="ruleForm.leave"></el-input>
        </el-form-item>
      </el-form>
      <!-- 对话框的表单  结束 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="submitForm('ruleForm')">取消</el-button>
      </span>
    </el-dialog>
    <!-- 详情的对话框 结束 -->
  </div>
</template>

<script>
export default {
  name: 'detailsDialog',
  components: {},
  props: ['details'],
  data() {
    return {
      /**对话框的状态 */
      falg: false,
      /**详情对话框的表单的校验 */
      rules: {
        name: [
          { required: true, message: '请填写完整', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' },
        ],
        region: [{ required: true, message: '请填写完整', trigger: 'change' }],
      },
      /**详情步骤进度条123进行选择 */
      steps: 1,
      /**详情对话框的表单绑定 */
      ruleForm: {
        name: '', //申请人
        region: '', //审批类型
        date2: '', //选择时间
        data1: '', //选择日期
        department: '', //所属部门
        leave: '', //请假理由
      },
    };
  },
  created() {},
  mounted() {},
  methods: {
    /**refs的获取值 */
    init(row){
      console.log(row);
    },
    /**详情对话框的确定事件 */
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!');
          this.$message({
            message: '驳回该申请',
            type: 'success',
          });
          this.falg=this.falg
          this.$emit('detailsFlag')
        } else {
          return false;
        }
      });
    },
    /**对话框关闭前的操作 */
    before(){
     /**调用子传父事件修改对话框的属性 */
       this.$emit('detailsFlag')
    }
  },
  watch: {
    details:function(newVal){
     this.falg=newVal
    }
  },
};
</script>
<style scoped lang='scss'>
</style>
// OA审批-->已办事项-->详情对话框封装结束
